// 1080×1920 spoiler-free result card + share flow (native share sheet, or a save/copy modal).
import { mulberry32, formatDateTR } from './util.js';
import { MAX_CANDLES } from './traits.js';

const COVER = '#1B1916';
const BORDO = '#7B1E26';
const BORDO_DEEP = '#571319';
const SHEET = '#F4ECCF';
const INK = '#1C2946';
const INK_2 = '#455170';
const MOR = '#5B3B8F';
const ON_DARK = '#E9DEB6';
const ON_DARK_2 = '#A99F83';
const FLAME = '#F2A93B';
const FLAME_CORE = '#FBE3A6';
const WAX = '#F1E9D2';

const DISPLAY = '"Besley", Georgia, serif';
const READ = '"Literata", Georgia, serif';
const FORM = '"Barlow Condensed", "Arial Narrow", sans-serif';

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

// A candle on the dark cover: no outline, and a halo when lit.
function drawCandle(g, x, base, lit, s) {
  const top = lit ? 30 : 54;
  const X = (v) => x + v * s;
  const Y = (v) => base - (80 - v) * s;
  if (lit) {
    const glow = g.createRadialGradient(X(15), Y(18), 0, X(15), Y(18), 110);
    glow.addColorStop(0, 'rgba(242,169,59,0.5)');
    glow.addColorStop(1, 'rgba(242,169,59,0)');
    g.fillStyle = glow;
    g.fillRect(X(15) - 120, Y(18) - 120, 240, 240);
  }
  g.fillStyle = lit ? WAX : '#8F886F';
  g.fillRect(X(8), Y(top), 14 * s, (80 - top) * s);
  g.strokeStyle = '#3A342A';
  g.lineWidth = 2.6 * s / 2.4;
  g.beginPath();
  g.moveTo(X(15), Y(top));
  g.lineTo(X(15), Y(top - 6));
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

function paperGrain(g, rng, x, y, w, h, n) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(82,66,26,${(rng() * 0.09).toFixed(3)})`;
    g.fillRect(x + rng() * w, y + rng() * h, rng() * 2.2 + 0.4, rng() * 2.2 + 0.4);
  }
}

// A rectangle with its corners cut, like the label on a ledger.
function cutRect(g, x, y, w, h, c) {
  g.beginPath();
  g.moveTo(x + c, y); g.lineTo(x + w - c, y); g.lineTo(x + w, y + c); g.lineTo(x + w, y + h - c);
  g.lineTo(x + w - c, y + h); g.lineTo(x + c, y + h); g.lineTo(x, y + h - c); g.lineTo(x, y + c);
  g.closePath();
}

function fitText(g, text, font, size, min, max) {
  let px = size;
  g.font = font(px);
  while (px > min && g.measureText(text).width > max) { px -= 2; g.font = font(px); }
}

const STAMP = { success: ['HÜKÜM TAMAM', MOR], partial: ['SIR ÇÖZÜLMEDİ', INK_2], fail: ['YANLIŞ TEŞHİS', BORDO] };

// The card is the ledger itself: black cloth, bordo spine and corners, the label, a slip for the case, the candles.
export async function drawCard(info) {
  try {
    await Promise.all([
      document.fonts.load(`700 80px ${DISPLAY}`),
      document.fonts.load(`600 60px ${DISPLAY}`),
      document.fonts.load(`700 120px ${FORM}`),
      document.fonts.load(`500 40px ${FORM}`),
      document.fonts.load(`400 40px ${READ}`),
      document.fonts.load(`italic 400 40px ${READ}`),
    ]);
  } catch { /* fall back to system faces */ }

  const W = 1080;
  const H = 1920;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d');
  const rng = mulberry32(info.no * 7919 + 17);

  // cloth
  g.fillStyle = COVER;
  g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(255,244,214,0.03)';
  for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 2);
  g.fillStyle = 'rgba(0,0,0,0.22)';
  for (let x = 0; x < W; x += 6) g.fillRect(x, 0, 2, H);
  // spine
  const spine = g.createLinearGradient(0, 0, 56, 0);
  spine.addColorStop(0, BORDO_DEEP); spine.addColorStop(0.55, BORDO); spine.addColorStop(1, BORDO_DEEP);
  g.fillStyle = spine;
  g.fillRect(0, 0, 56, H);
  g.fillStyle = 'rgba(0,0,0,0.5)';
  g.fillRect(56, 0, 3, H);
  // corners
  g.fillStyle = BORDO;
  g.beginPath(); g.moveTo(W - 150, 0); g.lineTo(W, 0); g.lineTo(W, 150); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(W - 150, H); g.lineTo(W, H); g.lineTo(W, H - 150); g.closePath(); g.fill();

  const CX = (W + 56) / 2;
  g.textAlign = 'center';
  g.textBaseline = 'alphabetic';

  // label
  const LW = 640;
  const LX = CX - LW / 2;
  g.fillStyle = SHEET;
  cutRect(g, LX, 150, LW, 210, 30); g.fill();
  g.save(); cutRect(g, LX, 150, LW, 210, 30); g.clip(); paperGrain(g, rng, LX, 150, LW, 210, 2600); g.restore();
  g.strokeStyle = 'rgba(28,41,70,0.6)';
  g.lineWidth = 2.5;
  cutRect(g, LX + 14, 164, LW - 28, 182, 22); g.stroke();
  g.lineWidth = 1.2;
  cutRect(g, LX + 22, 172, LW - 44, 166, 18); g.stroke();
  g.fillStyle = INK;
  g.font = `700 82px ${DISPLAY}`;
  g.fillText('Kara Defter', CX, 270);
  g.fillStyle = INK_2;
  g.font = `500 30px ${FORM}`;
  g.fillText('Köylerden gelen vakalar, her gün bir tane', CX, 330);

  // the case slip
  const SX = CX - 380;
  const SY = 470;
  g.fillStyle = 'rgba(0,0,0,0.45)';
  g.fillRect(SX + 10, SY + 18, 760, 660);
  g.fillStyle = SHEET;
  g.fillRect(SX, SY, 760, 660);
  paperGrain(g, rng, SX, SY, 760, 660, 9000);
  g.fillStyle = BORDO;
  g.font = `500 56px ${FORM}`;
  g.fillText('Vaka', CX, SY + 110);
  g.fillStyle = INK;
  g.font = `700 300px ${FORM}`;
  g.fillText(String(info.no), CX, SY + 370);
  g.fillStyle = 'rgba(98,124,158,0.6)';
  g.fillRect(SX + 70, SY + 420, 620, 2);
  g.fillStyle = INK_2;
  fitText(g, `${formatDateTR(info.date)} · ${info.village} köyü`, (px) => `400 ${px}px ${READ}`, 40, 28, 620);
  g.fillText(`${formatDateTR(info.date)} · ${info.village} köyü`, CX, SY + 484);
  // rubber stamp
  const [word, colour] = STAMP[info.outcome] || STAMP.fail;
  g.save();
  g.translate(CX, SY + 580);
  g.rotate(-0.06);
  g.globalAlpha = 0.86;
  g.font = `700 60px ${FORM}`;
  if ('letterSpacing' in g) g.letterSpacing = '6px';
  const tw = g.measureText(word).width;
  g.strokeStyle = colour;
  g.lineWidth = 6;
  g.strokeRect(-tw / 2 - 30, -56, tw + 60, 92);
  g.lineWidth = 2;
  g.strokeRect(-tw / 2 - 40, -66, tw + 80, 112);
  g.fillStyle = colour;
  g.fillText(word, 3, 12);
  if ('letterSpacing' in g) g.letterSpacing = '0px';
  g.restore();

  // candles
  const s = 2.5;
  const gap = 130;
  const startX = CX - ((MAX_CANDLES - 1) * gap) / 2 - 15 * s;
  for (let i = 0; i < MAX_CANDLES; i++) drawCandle(g, startX + i * gap, 1440, i < info.candlesLeft, s);

  g.fillStyle = ON_DARK;
  const line = outcomeLine(info);
  fitText(g, line, (px) => `600 ${px}px ${DISPLAY}`, 70, 44, W - 300);
  g.fillText(line, CX, 1580);
  const sub = [info.rank || '', info.streak > 0 ? `Seri ${info.streak} gün` : '', info.total ? `Defter ${info.pages}/${info.total}` : '']
    .filter(Boolean).join('   ·   ');
  if (sub) {
    g.fillStyle = ON_DARK_2;
    fitText(g, sub, (px) => `500 ${px}px ${FORM}`, 46, 30, W - 300);
    g.fillText(sub, CX, 1664);
  }

  g.fillStyle = 'rgba(233,222,182,0.25)';
  g.fillRect(CX - 220, 1722, 440, 2);
  g.fillStyle = ON_DARK;
  g.font = `italic 400 48px ${READ}`;
  g.fillText('Bugünün vakasını sen çöz', CX, 1798);
  g.fillStyle = ON_DARK_2;
  g.font = `500 36px ${FORM}`;
  g.fillText(prettyUrl(info.url), CX, 1854);

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
