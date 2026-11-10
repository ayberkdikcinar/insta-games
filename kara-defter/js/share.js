// 1080×1920 spoiler-free result card + share flow (native share sheet, or a save/copy modal).
import { mulberry32, formatDateTR } from './util.js';
import { MAX_CANDLES } from './traits.js';

const INK = '#1A1714';
const INK_2 = '#5B4F43';
const PAPER = '#E9DFC8';
const BLOOD = '#6B1E1E';
const FLAME = '#E3A23B';
const FLAME_CORE = '#F4D08A';
const WAX = '#F3EBDA';

const SERIF_DISPLAY = '"Cormorant Garamond", Georgia, serif';
const SERIF_TEXT = '"EB Garamond", Georgia, serif';

export function returnUrl() {
  return location.origin + location.pathname;
}

function prettyUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export function outcomeLine(info) {
  if (info.outcome === 'success') {
    const used = MAX_CANDLES - info.candlesLeft;
    return used === 0 ? 'Tek mum yakmadan çözdüm' : `${used} mumla çözdüm`;
  }
  if (info.outcome === 'partial') return 'Yaratığı buldum, sırrı kaçırdım';
  return 'Bu gece kaçırdım';
}

export function shareText(info) {
  const streak = `${info.tests ? ` · ${info.tests} sınama` : ''}${info.streak > 0 ? ` · Seri ${info.streak}` : ''}`;
  const candles = '🕯️'.repeat(info.candlesLeft) + '▫️'.repeat(MAX_CANDLES - info.candlesLeft);
  // the link carries the result as a challenge, so whoever opens it plays against it
  return `Kara Defter · Vaka #${info.no}\n${candles} ${outcomeLine(info)}${streak}\nAynı vakayı sen çöz: ${info.link || info.url}`;
}

function spaced(g, text, x, y, spacing) {
  if ('letterSpacing' in g) {
    g.letterSpacing = `${spacing}px`;
    // letterSpacing adds trailing space after the last glyph; shift to keep the text centred
    g.fillText(text, x + spacing / 2, y);
    g.letterSpacing = '0px';
    return;
  }
  const chars = [...text];
  const widths = chars.map((ch) => g.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
  let cx = x - total / 2;
  const align = g.textAlign;
  g.textAlign = 'left';
  chars.forEach((ch, i) => { g.fillText(ch, cx, y); cx += widths[i] + spacing; });
  g.textAlign = align;
}

function drawCandle(g, x, base, lit, s) {
  const top = lit ? 30 : 54;
  const X = (v) => x + v * s;
  const Y = (v) => base - (80 - v) * s;
  g.lineWidth = 2.2 * s / 2.4;
  g.strokeStyle = INK;
  g.fillStyle = WAX;
  g.beginPath();
  g.rect(X(8), Y(top), 14 * s, (80 - top) * s);
  g.fill(); g.stroke();
  // drips
  g.beginPath();
  g.moveTo(X(8), Y(top));
  g.lineTo(X(22), Y(top));
  g.lineTo(X(22), Y(top + 5));
  g.bezierCurveTo(X(22), Y(top + 9), X(19), Y(top + 9), X(19), Y(top + 5));
  g.bezierCurveTo(X(19), Y(top + 3), X(17), Y(top + 3), X(17), Y(top + 6));
  g.bezierCurveTo(X(17), Y(top + 13), X(13), Y(top + 13), X(13), Y(top + 6));
  g.bezierCurveTo(X(13), Y(top + 3), X(11), Y(top + 3), X(11), Y(top + 5));
  g.bezierCurveTo(X(11), Y(top + 8), X(8), Y(top + 8), X(8), Y(top + 4));
  g.closePath();
  g.fill(); g.stroke();
  // wick
  g.beginPath();
  g.moveTo(X(15), Y(top));
  g.lineTo(X(15), Y(top - 6));
  g.lineWidth = 2.6 * s / 2.4;
  g.stroke();
  if (!lit) return;
  g.fillStyle = FLAME;
  g.beginPath();
  g.moveTo(X(15), Y(4));
  g.bezierCurveTo(X(19), Y(11), X(21.5), Y(15.5), X(21.5), Y(19));
  g.bezierCurveTo(X(21.5), Y(23), X(18.6), Y(26), X(15), Y(26));
  g.bezierCurveTo(X(11.4), Y(26), X(8.5), Y(23), X(8.5), Y(19));
  g.bezierCurveTo(X(8.5), Y(15.5), X(11), Y(11), X(15), Y(4));
  g.fill();
  g.fillStyle = FLAME_CORE;
  g.beginPath();
  g.moveTo(X(15), Y(13));
  g.bezierCurveTo(X(16.8), Y(16), X(17.8), Y(18.2), X(17.8), Y(20.2));
  g.bezierCurveTo(X(17.8), Y(22.2), X(16.6), Y(23.6), X(15), Y(23.6));
  g.bezierCurveTo(X(13.4), Y(23.6), X(12.2), Y(22.2), X(12.2), Y(20.2));
  g.bezierCurveTo(X(12.2), Y(18.2), X(13.2), Y(16), X(15), Y(13));
  g.fill();
}

function drawSeal(g, cx, cy, r, seed) {
  const rng = mulberry32(seed);
  // wax blob with an uneven rim
  g.fillStyle = BLOOD;
  g.beginPath();
  const steps = 64;
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const rr = r * (1 + (rng() - 0.5) * 0.07 + Math.sin(a * 5 + seed) * 0.02);
    const px = cx + Math.cos(a) * rr;
    const py = cy + Math.sin(a) * rr;
    if (i === 0) g.moveTo(px, py); else g.lineTo(px, py);
  }
  g.closePath();
  g.fill();
  // pressed ring
  g.strokeStyle = '#4E1414';
  g.lineWidth = 6;
  g.beginPath();
  g.arc(cx, cy, r * 0.74, 0, Math.PI * 2);
  g.stroke();
  // monogram pressed into the wax
  g.fillStyle = '#8E3A2F';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `700 ${Math.round(r * 0.78)}px ${SERIF_DISPLAY}`;
  g.fillText('KD', cx, cy + r * 0.02);
  g.textBaseline = 'alphabetic';
}

export async function drawCard(info) {
  try {
    await Promise.all([
      document.fonts.load(`600 120px ${SERIF_DISPLAY}`),
      document.fonts.load(`italic 500 60px ${SERIF_DISPLAY}`),
      document.fonts.load(`400 40px ${SERIF_TEXT}`),
      document.fonts.load(`italic 400 40px ${SERIF_TEXT}`),
    ]);
  } catch { /* fall back to Georgia */ }

  const W = 1080;
  const H = 1920;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d');
  const rng = mulberry32(info.no * 7919 + 17);

  g.fillStyle = PAPER;
  g.fillRect(0, 0, W, H);
  for (let i = 0; i < 14000; i++) {
    g.fillStyle = `rgba(26,23,20,${(rng() * 0.07).toFixed(3)})`;
    g.fillRect(rng() * W, rng() * H, rng() * 2.2 + 0.4, rng() * 2.2 + 0.4);
  }
  g.strokeStyle = 'rgba(26,23,20,0.05)';
  g.lineWidth = 1;
  for (let i = 0; i < 260; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const a = rng() * Math.PI;
    const l = 8 + rng() * 26;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
    g.stroke();
  }

  g.strokeStyle = INK;
  g.lineWidth = 3;
  g.strokeRect(64, 64, W - 128, H - 128);
  g.lineWidth = 1.2;
  g.strokeRect(82, 82, W - 164, H - 164);

  g.textAlign = 'center';
  g.textBaseline = 'alphabetic';
  g.fillStyle = INK;
  g.font = `600 44px ${SERIF_DISPLAY}`;
  spaced(g, 'KARA DEFTER', W / 2, 214, 16);
  g.fillStyle = BLOOD;
  g.fillRect(W / 2 - 60, 250, 120, 3);

  g.fillStyle = INK_2;
  g.font = `italic 500 72px ${SERIF_DISPLAY}`;
  g.fillText('Vaka', W / 2, 400);
  g.fillStyle = INK;
  g.font = `600 250px ${SERIF_DISPLAY}`;
  // the display face has old-style figures; leave room for descending 3, 4, 5, 7, 9
  g.fillText(`#${info.no}`, W / 2, 600);
  g.fillStyle = INK_2;
  g.font = `400 42px ${SERIF_TEXT}`;
  g.fillText(`${formatDateTR(info.date)} · ${info.village} köyü`, W / 2, 760);

  drawSeal(g, W / 2, 1010, 140, info.no);

  const s = 2.4;
  const gap = 132;
  const startX = W / 2 - ((MAX_CANDLES - 1) * gap) / 2 - 15 * s;
  for (let i = 0; i < MAX_CANDLES; i++) drawCandle(g, startX + i * gap, 1400, i < info.candlesLeft, s);

  g.fillStyle = info.outcome === 'fail' ? BLOOD : INK;
  // shrink long outcome lines so they stay inside the inner frame
  const line = outcomeLine(info);
  let size = 84;
  g.font = `600 ${size}px ${SERIF_DISPLAY}`;
  while (size > 52 && g.measureText(line).width > W - 280) {
    size -= 2;
    g.font = `600 ${size}px ${SERIF_DISPLAY}`;
  }
  g.fillText(line, W / 2, 1530);
  const sub = [info.rank || '', info.streak > 0 ? `Seri: ${info.streak} gün` : '', info.total ? `Defter: ${info.pages}/${info.total}` : '']
    .filter(Boolean).join('   ·   ');
  if (sub) {
    g.fillStyle = INK_2;
    let subSize = 44;
    g.font = `400 ${subSize}px ${SERIF_TEXT}`;
    while (subSize > 30 && g.measureText(sub).width > W - 260) {
      subSize -= 2;
      g.font = `400 ${subSize}px ${SERIF_TEXT}`;
    }
    g.fillText(sub, W / 2, 1604);
  }

  g.fillStyle = INK;
  g.fillRect(W / 2 - 220, 1672, 440, 1.5);
  g.font = `italic 400 54px ${SERIF_TEXT}`;
  g.fillText('Bugünün vakasını sen çöz', W / 2, 1752);
  g.fillStyle = INK_2;
  g.font = `500 34px ${SERIF_TEXT}`;
  spaced(g, prettyUrl(info.url), W / 2, 1810, 3);

  return canvas;
}

let cached = { key: '', blob: null, url: '' };
const keyOf = (info) => JSON.stringify([info.no, info.outcome, info.candlesLeft, info.tests, info.streak, info.pages, info.rank, info.url]);

export async function prepareCard(info) {
  const key = keyOf(info);
  if (cached.key === key && cached.blob) return cached.blob;
  const canvas = await drawCard(info);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
  if (cached.url) URL.revokeObjectURL(cached.url);
  cached = { key, blob, url: URL.createObjectURL(blob) };
  return blob;
}

export async function shareCard(info) {
  const blob = await prepareCard(info);
  const file = new File([blob], `kara-defter-vaka-${info.no}.png`, { type: 'image/png' });
  const text = shareText(info);
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text });
      return 'shared';
    } catch (err) {
      if (err && err.name === 'AbortError') return 'aborted';
      // NotAllowedError (lost user activation) and friends fall through to the modal
    }
  }
  openModal(info, text);
  return 'modal';
}

function openModal(info, text) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="Sonuç kartı">
      <img class="modal-img" src="${cached.url}" alt="Vaka #${info.no} sonuç kartı">
      <p class="modal-hint">Telefonda görsele basılı tutup kaydedebilir, sonra hikâyende paylaşabilirsin. Linki de hikâyeye bağlantı olarak ekle.</p>
      <a class="btn btn-blood" href="${cached.url}" download="kara-defter-vaka-${info.no}.png">Görseli indir</a>
      <button class="btn btn-ghost" data-modal="copy">Linki kopyala</button>
      <button class="link modal-close" data-modal="close">Kapat</button>
    </div>`;
  modal.hidden = false;
  modal.onclick = async (e) => {
    const act = e.target.closest('[data-modal]')?.dataset.modal;
    if (e.target === modal || act === 'close') { modal.hidden = true; modal.innerHTML = ''; return; }
    if (act === 'copy') toast((await copyText(text)) ? 'Link kopyalandı' : 'Kopyalanamadı, linki elle seç');
  };
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

let toastTimer = 0;
export function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
