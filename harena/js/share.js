// 1080×1920 story cards and the share sheet.
import { portraitSVG } from './portrait.js';
import { ORIGINS, armById, injuryById } from './data.js';
import { roman, dailyDateLabel } from './rng.js';

const W = 1080, H = 1920;
const INK = '#1E1A17', SAND = '#E8D9B5', RED = '#8E2A1E', OCHRE = '#C8963E', MUTED = '#6D5F4B';
const SERIF = '"Fraunces", Georgia, serif';
const SANS = '"Source Sans 3", "Helvetica Neue", Arial, sans-serif';

export async function ensureFonts() {
  if (!document.fonts?.load) return;
  try {
    await Promise.all([
      document.fonts.load(`600 120px ${SERIF}`),
      document.fonts.load(`700 120px ${SERIF}`),
      document.fonts.load(`italic 500 60px ${SERIF}`),
      document.fonts.load(`400 40px ${SERIF}`),
      document.fonts.load(`600 36px ${SANS}`),
      document.fonts.load(`700 36px ${SANS}`),
      document.fonts.load(`400 32px ${SANS}`),
    ]);
  } catch (e) { /* draw with fallbacks */ }
}

function img(svg) {
  return new Promise((res) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = () => res(null);
    i.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}

function setup() {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const x = c.getContext('2d');
  x.textBaseline = 'alphabetic';
  return [c, x];
}

function spaced(x, text, cx, y, sp, align = 'center') {
  const chars = [...text];
  const widths = chars.map((ch) => x.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + sp * (chars.length - 1);
  let px = align === 'center' ? cx - total / 2 : align === 'right' ? cx - total : cx;
  x.textAlign = 'left';
  chars.forEach((ch, i) => { x.fillText(ch, px, y); px += widths[i] + sp; });
}

function wrap(x, text, maxW) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const t = line ? line + ' ' + w : w;
    if (x.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t;
  }
  if (line) lines.push(line);
  return lines;
}

function fitFont(x, text, weight, maxSize, maxW, family = SERIF) {
  let s = maxSize;
  for (; s > 30; s -= 4) {
    x.font = `${weight} ${s}px ${family}`;
    if (x.measureText(text).width <= maxW) break;
  }
  return s;
}

export function displayUrl() {
  return (location.host + location.pathname).replace(/index\.html$/, '');
}

function ctaBlock(x, y0, title, code) {
  x.fillStyle = INK;
  x.fillRect(60, y0, W - 120, 210);
  x.fillStyle = OCHRE;
  x.font = `700 32px ${SANS}`;
  spaced(x, title, W / 2, y0 + 62, 6);
  x.fillStyle = SAND;
  x.font = `700 64px ${SANS}`;
  spaced(x, code, W / 2, y0 + 140, 5);
  x.fillStyle = '#B9AC8E';
  x.font = `400 30px ${SANS}`;
  x.textAlign = 'center';
  x.fillText(displayUrl(), W / 2, y0 + 186);
}

export async function championCard(g, ludus, code) {
  await ensureFonts();
  const [c, x] = setup();
  x.fillStyle = SAND; x.fillRect(0, 0, W, H);
  x.fillStyle = RED; x.fillRect(0, 0, W, 960);
  x.strokeStyle = OCHRE; x.lineWidth = 3; x.strokeRect(48, 48, W - 96, 960 - 96 + 20);
  x.fillStyle = SAND;
  x.font = `700 34px ${SANS}`;
  spaced(x, 'HARENA', W / 2, 286, 18);
  if (ludus) {
    x.font = `italic 500 40px ${SERIF}`;
    x.textAlign = 'center';
    x.fillText(ludus, W / 2, 342);
  }
  const p = await img(portraitSVG(g, { w: 480, h: 576, frame: false }));
  const px = (W - 480) / 2, py = 392;
  x.fillStyle = SAND; x.fillRect(px - 16, py - 16, 512, 608);
  x.fillStyle = INK; x.fillRect(px - 6, py - 6, 492, 588);
  if (p) x.drawImage(p, px, py, 480, 576);

  x.fillStyle = INK;
  const nameSize = fitFont(x, g.name, 600, 124, W - 160);
  x.font = `600 ${nameSize}px ${SERIF}`;
  x.textAlign = 'center';
  x.fillText(g.name, W / 2, 1110);
  if (g.nick) {
    x.fillStyle = RED;
    x.font = `italic 500 62px ${SERIF}`;
    x.fillText(`“${g.nick}”`, W / 2, 1188);
  }
  x.fillStyle = MUTED;
  x.font = `600 30px ${SANS}`;
  spaced(x, `${ORIGINS[g.origin].label.toLocaleUpperCase('tr')} · ${armById(g.arm).label.toUpperCase()}${g.age ? ` · ${g.age} YAŞINDA` : ''}`, W / 2, 1250, 4);

  const cols = [[g.rec.w, 'GALİBİYET'], [g.rec.l, 'MAĞLUBİYET'], [g.rec.k, 'ÖLDÜRME']];
  cols.forEach(([v, label], i) => {
    const cx = 220 + i * 320;
    x.fillStyle = INK;
    x.font = `700 100px ${SERIF}`;
    x.textAlign = 'center';
    x.fillText(String(v), cx, 1390);
    x.fillStyle = MUTED;
    x.font = `600 26px ${SANS}`;
    spaced(x, label, cx, 1436, 4);
    if (i) { x.fillStyle = '#CDBB94'; x.fillRect(cx - 160, 1320, 2, 120); }
  });
  const scars = (g.injuries || []).map((i) => injuryById(i.id)?.label).filter(Boolean);
  x.fillStyle = INK;
  x.font = `400 34px ${SERIF}`;
  x.textAlign = 'center';
  x.fillText(scars.length ? `Yaraları: ${scars.join(' · ')}` : 'Henüz kalıcı bir yarası yok.', W / 2, 1512);
  ctaBlock(x, 1568, 'ONU YENEBİLİR MİSİN?', code);
  return c;
}

export async function tombstoneCard(g, ep, code) {
  await ensureFonts();
  const [c, x] = setup();
  x.fillStyle = '#241D19'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#3A2E26'; x.fillRect(0, 1500, W, H - 1500);
  // stele
  x.beginPath();
  x.moveTo(150, 1520); x.lineTo(150, 620); x.arc(540, 620, 390, Math.PI, 0); x.lineTo(930, 1520); x.closePath();
  x.fillStyle = '#BDB3A1'; x.fill();
  x.lineWidth = 6; x.strokeStyle = INK; x.stroke();
  x.beginPath();
  x.moveTo(184, 1490); x.lineTo(184, 620); x.arc(540, 620, 356, Math.PI, 0); x.lineTo(896, 1490); x.closePath();
  x.lineWidth = 3; x.strokeStyle = '#968C79'; x.stroke();
  x.fillStyle = '#2E2520'; x.fillRect(120, 1512, 840, 26);

  const carve = (text, cx, y, font, color = '#3F382F') => {
    x.font = font; x.textAlign = 'center';
    x.fillStyle = '#D9D0BF'; x.fillText(text, cx, y + 2);
    x.fillStyle = color; x.fillText(text, cx, y);
  };
  x.font = `600 60px ${SERIF}`;
  x.fillStyle = '#D9D0BF'; spaced(x, 'D · M', W / 2, 402, 14);
  x.fillStyle = '#3F382F'; spaced(x, 'D · M', W / 2, 400, 14);

  const p = await img(portraitSVG(g, { w: 300, h: 360, frame: false }));
  x.save();
  x.beginPath(); x.arc(540, 590, 128, 0, Math.PI * 2); x.clip();
  if (p) x.drawImage(p, 390, 440, 300, 360);
  x.globalCompositeOperation = 'color';
  x.fillStyle = '#9C927F'; x.fillRect(400, 450, 280, 280);
  x.globalCompositeOperation = 'source-over';
  x.restore();
  x.beginPath(); x.arc(540, 590, 128, 0, Math.PI * 2); x.lineWidth = 5; x.strokeStyle = '#5E564A'; x.stroke();

  const nameSize = fitFont(x, ep.name, 600, 92, 640);
  carve(ep.name, W / 2, 822, `600 ${nameSize}px ${SERIF}`);
  let y = 822;
  if (ep.nick) { y += 66; carve(`“${ep.nick}”`, W / 2, y, `italic 500 50px ${SERIF}`, '#5A2A20'); }
  y += 62;
  x.font = `600 26px ${SANS}`;
  x.fillStyle = '#5E564A';
  spaced(x, ep.line1, W / 2, y, 4);
  y += 70;
  carve(ep.line2, W / 2, y, `400 36px ${SERIF}`);
  y += 76;
  x.font = `italic 500 44px ${SERIF}`;
  for (const line of wrap(x, ep.main, 620)) { carve(line, W / 2, y, `italic 500 44px ${SERIF}`, '#2E2822'); y += 58; }
  if (ep.extra) { y += 8; carve(ep.extra, W / 2, y, `400 34px ${SERIF}`); y += 50; }
  if (ep.end) { y += 10; carve(ep.end, W / 2, Math.min(y, 1450), `400 30px ${SERIF}`, '#5E564A'); }

  x.fillStyle = SAND;
  x.font = `italic 500 46px ${SERIF}`;
  x.textAlign = 'center';
  x.fillText('Harena’da bir gladyatör öldü.', W / 2, 1620);
  ctaBlock(x, 1660, 'MEZAR TAŞINI ZİYARET ET', code);
  return c;
}

export async function fermanCard(rec, mine, opp) {
  await ensureFonts();
  const [c, x] = setup();
  x.fillStyle = SAND; x.fillRect(0, 0, W, H);
  x.fillStyle = INK; x.fillRect(0, 0, W, 560);
  x.fillStyle = SAND;
  x.font = `700 170px ${SERIF}`;
  x.textAlign = 'center';
  x.fillText('Ferman', W / 2, 400);
  x.fillStyle = OCHRE;
  x.font = `600 34px ${SANS}`;
  spaced(x, `#${rec.n} · ${dailyDateLabel(rec.n).toLocaleUpperCase('tr')}`, W / 2, 470, 6);

  x.fillStyle = INK;
  x.font = `italic 500 52px ${SERIF}`;
  let y = 660;
  for (const line of wrap(x, rec.rule, 880)) { x.textAlign = 'center'; x.fillText(line, W / 2, y); y += 66; }

  const [pa, pb] = await Promise.all([img(portraitSVG(mine, { w: 340, h: 408, frame: false })), img(portraitSVG(opp, { w: 340, h: 408, frame: false }))]);
  const top = Math.max(y + 10, 800);
  [[pa, 130, mine], [pb, 610, opp]].forEach(([p, px, g]) => {
    x.fillStyle = INK; x.fillRect(px - 6, top - 6, 352, 420);
    if (p) x.drawImage(p, px, top, 340, 408);
    x.fillStyle = INK;
    const s = fitFont(x, g.name, 600, 46, 330);
    x.font = `600 ${s}px ${SERIF}`;
    x.textAlign = 'center';
    x.fillText(g.name, px + 170, top + 470);
    if (g.nick) { x.fillStyle = RED; x.font = `italic 500 34px ${SERIF}`; x.fillText(`“${g.nick}”`, px + 170, top + 514); }
  });
  x.fillStyle = MUTED; x.font = `600 30px ${SANS}`;
  spaced(x, 'KARŞI', W / 2, top + 214, 6);

  const word = rec.died ? 'Öldü' : rec.won ? 'Zafer' : rec.draw ? 'Berabere' : rec.spared ? 'Bağışlandı' : 'Yenilgi';
  x.fillStyle = rec.won ? RED : INK;
  x.font = `700 120px ${SERIF}`;
  x.textAlign = 'center';
  x.fillText(word, W / 2, top + 660);
  x.fillStyle = MUTED; x.font = `600 30px ${SANS}`;
  spaced(x, `KALABALIK ${rec.crowd}/100`, W / 2, top + 714, 5);
  x.fillStyle = '#CDBB94'; x.fillRect(240, top + 738, 600, 14);
  x.fillStyle = RED; x.fillRect(240, top + 738, 6 * rec.crowd, 14);
  ctaBlock(x, Math.max(top + 790, 1600), 'BUGÜNÜN FERMANI HERKESE AYNI', `FERMAN ${rec.n}`);
  return c;
}

// --- share sheet --------------------------------------------------------------

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (e) { /* fallback */ }
  try {
    const t = document.createElement('textarea');
    t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    const ok = document.execCommand('copy');
    t.remove();
    return ok;
  } catch (e) { return false; }
}

export async function openShare(canvas, { filename, text, url }) {
  let blob = null;
  try { blob = await new Promise((r) => canvas.toBlob(r, 'image/png')); } catch (e) { blob = null; }
  const wrapEl = document.createElement('div');
  wrapEl.className = 'sheet-wrap';
  const objUrl = blob ? URL.createObjectURL(blob) : null;
  const file = blob ? new File([blob], filename, { type: 'image/png' }) : null;
  let canShare = false;
  try { canShare = !!(file && navigator.canShare && navigator.canShare({ files: [file] })); } catch (e) { canShare = false; }
  wrapEl.innerHTML = `
    <div class="sheet" role="dialog" aria-label="Paylaş">
      ${objUrl ? `<img class="sheet-img" src="${objUrl}" alt="Paylaşım kartı">` : '<p class="sheet-err">Görsel oluşturulamadı.</p>'}
      <p class="sheet-hint">${canShare ? 'Instagram hikâyende paylaş, linki bağlantı çıkartmasına yapıştır.' : 'Görsele basılı tutarak kaydedebilir ya da indirebilirsin.'}</p>
      <div class="sheet-actions">
        ${canShare ? '<button class="btn primary" data-s="share">Paylaş</button>' : ''}
        ${objUrl ? `<a class="btn" data-s="dl" href="${objUrl}" download="${filename}">Görseli indir</a>` : ''}
        <button class="btn" data-s="copy">Linki kopyala</button>
        <button class="btn ghost" data-s="close">Kapat</button>
      </div>
      <p class="sheet-link"></p>
    </div>`;
  document.querySelector('.toast')?.classList.remove('on');
  document.body.appendChild(wrapEl);
  const close = () => { wrapEl.remove(); if (objUrl) setTimeout(() => URL.revokeObjectURL(objUrl), 1000); };
  wrapEl.addEventListener('click', async (e) => {
    if (e.target === wrapEl) return close();
    const b = e.target.closest('[data-s]');
    if (!b) return;
    const act = b.dataset.s;
    if (act === 'close') close();
    if (act === 'share') {
      await copyText(url);
      try { await navigator.share({ files: [file], text, url }); } catch (err) { /* cancelled */ }
    }
    if (act === 'copy') {
      const ok = await copyText(url);
      const p = wrapEl.querySelector('.sheet-link');
      p.textContent = ok ? 'Link kopyalandı.' : url;
    }
  });
}
