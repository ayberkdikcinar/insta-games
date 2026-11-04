// Procedural fresco-style portraits. Everything is derived from the gladiator's seed,
// so the same man looks the same in the roster, the arena and on a share card.
import { makeRng } from './rng.js';
import { ORIGINS } from './data.js';

const INK = '#1E1A17';
const SCAR = '#7A2E22';
let uid = 0;

function hex(n) { return n.toString(16).padStart(2, '0'); }
function toRgb(h) { const n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
export function mix(a, b, t) {
  const A = toRgb(a), B = toRgb(b);
  return '#' + A.map((v, i) => hex(Math.round(v + (B[i] - v) * t))).join('');
}
export const shade = (c, t) => (t < 0 ? mix(c, '#000000', -t) : mix(c, '#ffffff', t));

export function lookFor(g) {
  const r = makeRng((g.seed * 2654435761) >>> 0);
  const o = ORIGINS[g.origin];
  const age = g.age || 25;
  let hair = r.pick(o.hair);
  if (age > 29 && r.chance(0.45)) hair = mix(hair, '#8D877C', 0.5);
  return {
    r,
    skin: shade(r.pick(o.skin), r.float(-0.05, 0.05)),
    hair,
    eye: r.pick(o.eyes),
    hairStyle: r.pick(o.hairStyles),
    beard: r.pick(o.beards),
    bg: r.pick(['#8E2A1E', '#7A2418', '#A8742E', '#3F4A35', '#2B2420', '#94402A']),
    dress: r.pick(['strap', 'tunic', 'bare', 'strap']),
    tunic: r.pick(['#CDBB94', '#8E5A3A', '#B9A27A', '#6E5A44']),
    age,
  };
}

export function portraitSVG(g, { w = 200, h = 240, bg, frame = true } = {}) {
  const L = lookFor(g);
  const r = L.r;
  const inj = new Set((g.injuries || []).map((i) => i.id));
  const id = `p${g.seed}_${++uid}`;
  const skin = L.skin;
  const skinSh = shade(skin, -0.2);
  const hair = L.hair;
  const hairInk = shade(hair, -0.35);
  const cx = 100;

  const headW = r.float(37, 46);
  const top = r.float(46, 56);
  const jawW = headW * r.float(0.6, 0.88);
  const jawY = r.float(136, 146);
  const chinW = r.float(9, 17);
  const chinY = r.float(163, 172);
  const eyeY = r.float(104, 110);
  const eyeDX = r.float(15, 19);
  const noseY = eyeY + r.float(23, 29);
  const mouthY = noseY + r.float(14, 18);
  const mw = r.float(10, 15);
  const browTilt = r.float(-1.5, 4);
  const browW = r.float(3.6, 6.2);
  const heavyLid = r.chance(0.45);
  const noseType = r.pick(['straight', 'hooked', 'broad', 'straight']);
  const mouthType = r.pick(['flat', 'down', 'smirk', 'flat']);
  const lookX = r.float(-1.2, 1.2);
  const patch = r.chance(0.5);
  const S = `stroke="${INK}" stroke-linejoin="round" stroke-linecap="round"`;

  const headPath = `M${cx},${top} C${cx + headW * 0.62},${top} ${cx + headW},${top + 20} ${cx + headW},${top + 48}
    C${cx + headW},${jawY - 22} ${cx + jawW + 4},${jawY - 6} ${cx + jawW},${jawY}
    C${cx + jawW - 4},${jawY + 12} ${cx + chinW + 6},${chinY} ${cx},${chinY + 2}
    C${cx - chinW - 6},${chinY} ${cx - jawW + 4},${jawY + 12} ${cx - jawW},${jawY}
    C${cx - jawW - 4},${jawY - 6} ${cx - headW},${jawY - 22} ${cx - headW},${top + 48}
    C${cx - headW},${top + 20} ${cx - headW * 0.62},${top} ${cx},${top} Z`;

  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="${w}" height="${h}">`);
  out.push(`<defs><clipPath id="${id}h"><path d="${headPath}"/></clipPath><clipPath id="${id}f"><rect x="0" y="0" width="200" height="240"/></clipPath></defs>`);
  out.push(`<g clip-path="url(#${id}f)">`);
  out.push(`<rect width="200" height="240" fill="${bg || L.bg}"/>`);
  // fresco brush marks
  for (let i = 0; i < 4; i++) {
    const y = r.float(10, 230);
    out.push(`<path d="M${r.float(-20, 40)},${y} L${r.float(160, 220)},${y + r.float(-30, 30)}" stroke="#000" stroke-opacity="0.07" stroke-width="${r.float(10, 22)}" stroke-linecap="round"/>`);
  }

  out.push(`<g transform="translate(100 150) scale(1.1) translate(-100 -150)">`);
  // long hair falls behind the head
  if (L.hairStyle === 'long') {
    out.push(`<path d="M${cx - headW - 4},${top + 34} C${cx - headW - 16},${top + 90} ${cx - headW - 8},${178} ${cx - headW + 6},${200} L${cx + headW - 6},${200} C${cx + headW + 8},${178} ${cx + headW + 16},${top + 90} ${cx + headW + 4},${top + 34} Z" fill="${hair}" ${S} stroke-width="3"/>`);
  }

  // shoulders and neck
  out.push(`<path d="M2,244 C10,214 40,200 ${cx - 24},196 L${cx + 24},196 C160,200 190,214 198,244 Z" fill="${skin}" ${S} stroke-width="3.2"/>`);
  out.push(`<path d="M${cx - 30},214 Q${cx},226 ${cx + 30},214" fill="none" stroke="${skinSh}" stroke-width="2.4" stroke-linecap="round"/>`);
  if (L.dress === 'strap') {
    out.push(`<path d="M34,244 L58,244 L152,198 L136,194 Z" fill="#5E3F2B" ${S} stroke-width="2.6"/>`);
    out.push(`<circle cx="112" cy="211" r="5" fill="#A9783A" ${S} stroke-width="2"/>`);
  } else if (L.dress === 'tunic') {
    out.push(`<path d="M2,244 C10,224 40,214 70,211 Q${cx},236 130,211 C160,214 190,224 198,244 Z" fill="${L.tunic}" ${S} stroke-width="3"/>`);
  }
  out.push(`<path d="M${cx - 21},${chinY - 18} L${cx - 23},200 Q${cx},206 ${cx + 23},200 L${cx + 21},${chinY - 18} Z" fill="${skin}" ${S} stroke-width="3"/>`);
  out.push(`<path d="M${cx - 21},${chinY - 6} Q${cx},${chinY + 20} ${cx + 21},${chinY - 6} L${cx + 21},${chinY + 6} Q${cx},${chinY + 24} ${cx - 21},${chinY + 6} Z" fill="${skinSh}" opacity="0.8"/>`);

  // ears (character's left ear sits on the viewer's right)
  const earY = eyeY + 2;
  const xl = cx - headW + 3, xr = cx + headW - 3;
  out.push(`<path d="M${xl},${earY} C${xl - 12},${earY - 4} ${xl - 14},${earY + 22} ${xl - 2},${earY + 28}" fill="${skin}" ${S} stroke-width="3"/>`);
  if (inj.has('kulak')) {
    out.push(`<path d="M${xr},${earY + 13} L${xr + 10},${earY + 12} C${xr + 12},${earY + 21} ${xr + 8},${earY + 27} ${xr + 2},${earY + 28}" fill="${skin}" ${S} stroke-width="3"/>`);
    out.push(`<path d="M${xr - 1},${earY + 12.5} L${xr + 11},${earY + 11.5}" stroke="${SCAR}" stroke-width="3" stroke-linecap="round"/>`);
    out.push(`<path d="M${xr + 3},${earY + 9} l1,6 M${xr + 7},${earY + 8.5} l1,6" stroke="${SCAR}" stroke-width="1.6" stroke-linecap="round"/>`);
  } else {
    out.push(`<path d="M${xr},${earY} C${xr + 12},${earY - 4} ${xr + 14},${earY + 22} ${xr + 2},${earY + 28}" fill="${skin}" ${S} stroke-width="3"/>`);
    out.push(`<path d="M${xr + 3},${earY + 6} C${xr + 8},${earY + 8} ${xr + 8},${earY + 16} ${xr + 4},${earY + 19}" fill="none" stroke="${skinSh}" stroke-width="2"/>`);
  }

  // head
  out.push(`<path d="${headPath}" fill="${skin}" ${S} stroke-width="3.4"/>`);
  // hatched shadow on the far side of the face
  out.push(`<g clip-path="url(#${id}h)" stroke="${skinSh}" stroke-width="1.7" stroke-linecap="round">`);
  for (let i = 0; i < 7; i++) {
    const x0 = cx + headW * 0.56 + i * 4.4;
    out.push(`<path d="M${x0},${eyeY - 16} L${x0 - 12},${jawY + 6}"/>`);
  }
  out.push(`</g>`);
  out.push(`<path d="M${cx + headW - 16},${eyeY + 16} Q${cx + headW - 22},${eyeY + 30} ${cx + jawW - 4},${jawY - 2}" fill="none" stroke="${skinSh}" stroke-width="2.2" stroke-linecap="round"/>`);

  // age lines
  if (L.age > 27) {
    out.push(`<path d="M${cx - 13},${noseY + 3} Q${cx - 18},${mouthY - 3} ${cx - 15},${mouthY + 6} M${cx + 13},${noseY + 3} Q${cx + 18},${mouthY - 3} ${cx + 15},${mouthY + 6}" fill="none" stroke="${skinSh}" stroke-width="1.9" stroke-linecap="round"/>`);
  }
  if (L.age > 30 || L.hairStyle === 'bald') {
    out.push(`<path d="M${cx - 16},${top + 22} Q${cx},${top + 18} ${cx + 16},${top + 22} M${cx - 11},${top + 29} Q${cx},${top + 26} ${cx + 11},${top + 29}" fill="none" stroke="${skinSh}" stroke-width="1.7" stroke-linecap="round"/>`);
  }

  // beard
  if (L.beard === 'stubble') {
    out.push(`<g clip-path="url(#${id}h)" fill="${hair}" opacity="0.55">`);
    for (let i = 0; i < 90; i++) {
      const x = r.float(cx - headW, cx + headW);
      const y = r.float(noseY + 4, chinY + 2);
      if (Math.abs(x - cx) < 9 && y < mouthY + 5) continue;
      out.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1"/>`);
    }
    out.push(`</g>`);
  } else if (L.beard === 'short' || L.beard === 'full') {
    const drop = L.beard === 'full' ? r.float(16, 26) : 7;
    out.push(`<path d="M${cx - headW + 1},${eyeY + 14} C${cx - headW + 1},${jawY + 2} ${cx - chinW - 12},${chinY + drop} ${cx},${chinY + drop}
      C${cx + chinW + 12},${chinY + drop} ${cx + headW - 1},${jawY + 2} ${cx + headW - 1},${eyeY + 14}
      L${cx + headW - 9},${eyeY + 18} C${cx + headW - 12},${noseY + 8} ${cx + 22},${mouthY - 4} ${cx + mw + 4},${mouthY + 1}
      Q${cx},${mouthY + 11} ${cx - mw - 4},${mouthY + 1}
      C${cx - 22},${mouthY - 4} ${cx - headW + 12},${noseY + 8} ${cx - headW + 9},${eyeY + 18} Z" fill="${hair}" ${S} stroke-width="3"/>`);
    for (let i = 0; i < 7; i++) {
      const x = cx - 24 + i * 8 + r.float(-2, 2);
      out.push(`<path d="M${x},${mouthY + 14} q${r.float(-2, 2)},6 ${r.float(-1, 1)},${8 + drop * 0.4}" stroke="${hairInk}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`);
    }
  }

  // hair
  const cap = (hl) => `M${cx - headW - 1},${top + 52} C${cx - headW - 3},${top + 6} ${cx - headW * 0.4},${top - 7} ${cx},${top - 6}
    C${cx + headW * 0.4},${top - 7} ${cx + headW + 3},${top + 6} ${cx + headW + 1},${top + 52}
    L${cx + headW - 4},${top + 52} C${cx + headW - 6},${top + hl + 4} ${cx + headW * 0.5},${top + hl} ${cx},${top + hl + 2}
    C${cx - headW * 0.5},${top + hl} ${cx - headW + 6},${top + hl + 4} ${cx - headW + 4},${top + 52} Z`;
  if (L.hairStyle === 'crop' || L.hairStyle === 'long' || L.hairStyle === 'knot') {
    out.push(`<path d="${cap(r.float(18, 26))}" fill="${hair}" ${S} stroke-width="3"/>`);
    for (let i = 0; i < 8; i++) {
      const x = cx - headW * 0.7 + i * (headW * 1.4 / 7);
      out.push(`<path d="M${x},${top + 4} l${r.float(-3, 3)},${r.float(8, 13)}" stroke="${hairInk}" stroke-width="1.5" stroke-linecap="round"/>`);
    }
    if (L.hairStyle === 'knot') {
      out.push(`<ellipse cx="${cx + headW - 2}" cy="${top + 14}" rx="12" ry="10" fill="${hair}" ${S} stroke-width="3"/>`);
      out.push(`<path d="M${cx + headW - 10},${top + 10} Q${cx + headW - 2},${top + 20} ${cx + headW + 7},${top + 9}" fill="none" stroke="${hairInk}" stroke-width="2"/>`);
    }
  } else if (L.hairStyle === 'curly') {
    out.push(`<path d="${cap(r.float(16, 22))}" fill="${hair}" ${S} stroke-width="3"/>`);
    for (let i = 0; i < 11; i++) {
      const a = Math.PI + (i / 10) * Math.PI;
      const x = cx + Math.cos(a) * (headW + 1);
      const y = top + 34 + Math.sin(a) * 40;
      out.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.float(6, 8.5).toFixed(1)}" fill="${hair}" ${S} stroke-width="2.6"/>`);
    }
  } else if (L.hairStyle === 'receding') {
    out.push(`<path d="M${cx - headW - 1},${top + 52} C${cx - headW - 3},${top + 14} ${cx - headW * 0.5},${top + 4} ${cx - headW * 0.38},${top + 6} C${cx - headW * 0.45},${top + 16} ${cx - headW + 6},${top + 26} ${cx - headW + 4},${top + 52} Z" fill="${hair}" ${S} stroke-width="2.6"/>`);
    out.push(`<path d="M${cx + headW + 1},${top + 52} C${cx + headW + 3},${top + 14} ${cx + headW * 0.5},${top + 4} ${cx + headW * 0.38},${top + 6} C${cx + headW * 0.45},${top + 16} ${cx + headW - 6},${top + 26} ${cx + headW - 4},${top + 52} Z" fill="${hair}" ${S} stroke-width="2.6"/>`);
  } else if (L.hairStyle === 'shaved') {
    out.push(`<path d="${cap(20)}" fill="${hair}" opacity="0.35"/>`);
  }

  // brows
  const browL = `M${cx - eyeDX - 11},${eyeY - 9 - browTilt} Q${cx - eyeDX},${eyeY - 16} ${cx - eyeDX + 10},${eyeY - 10 + browTilt}`;
  const browR = `M${cx + eyeDX + 11},${eyeY - 9 - browTilt} Q${cx + eyeDX},${eyeY - 16} ${cx + eyeDX - 10},${eyeY - 10 + browTilt}`;
  out.push(`<path d="${browL} ${browR}" fill="none" stroke="${shade(hair, -0.2)}" stroke-width="${browW}" stroke-linecap="round"/>`);

  // eyes
  const eye = (x, lost) => {
    if (lost) {
      if (patch) {
        return `<path d="M${x - 9},${eyeY - 5} L${cx - headW},${eyeY - 18} M${x + 9},${eyeY - 6} L${cx + headW},${top + 30}" stroke="#2A211C" stroke-width="3.2" stroke-linecap="round"/>
          <ellipse cx="${x}" cy="${eyeY}" rx="10" ry="8" fill="#2A211C" ${S} stroke-width="2.4"/>`;
      }
      return `<path d="M${x - 8},${eyeY + 1} Q${x},${eyeY + 4} ${x + 8},${eyeY + 1}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M${x - 5},${eyeY - 19} L${x + 4},${eyeY + 17}" stroke="${SCAR}" stroke-width="3" stroke-linecap="round"/>
        <path d="M${x - 6},${eyeY - 12} l5,1 M${x - 3},${eyeY - 3} l5,1 M${x},${eyeY + 6} l5,1" stroke="${SCAR}" stroke-width="1.8" stroke-linecap="round"/>`;
    }
    let s = `<path d="M${x - 8},${eyeY} Q${x},${eyeY - 6} ${x + 8},${eyeY} Q${x},${eyeY + 5} ${x - 8},${eyeY} Z" fill="#EDE3CC" ${S} stroke-width="1.8"/>
      <circle cx="${x + lookX}" cy="${eyeY - 0.5}" r="3.7" fill="${L.eye}"/><circle cx="${x + lookX}" cy="${eyeY - 0.5}" r="1.6" fill="${INK}"/>`;
    if (heavyLid) s += `<path d="M${x - 9},${eyeY} Q${x},${eyeY - 8} ${x + 9},${eyeY} Q${x},${eyeY - 3} ${x - 9},${eyeY} Z" fill="${skinSh}"/>`;
    s += `<path d="M${x - 9},${eyeY - 0.5} Q${x},${eyeY - 7.5} ${x + 9},${eyeY - 0.5}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>`;
    if (L.age > 27) s += `<path d="M${x - 6},${eyeY + 6} Q${x},${eyeY + 8.5} ${x + 6},${eyeY + 6}" fill="none" stroke="${skinSh}" stroke-width="1.5" stroke-linecap="round"/>`;
    return s;
  };
  out.push(eye(cx - eyeDX, inj.has('goz')));
  out.push(eye(cx + eyeDX, false));

  // nose
  const base = (dx, sx = 0) => `M${cx - dx + sx},${noseY - 1} Q${cx - dx - 1 + sx},${noseY + 5} ${cx - 4 + sx},${noseY + 4} Q${cx + sx},${noseY + 7} ${cx + 4 + sx},${noseY + 4} Q${cx + dx + 1 + sx},${noseY + 5} ${cx + dx + sx},${noseY - 1}`;
  if (inj.has('burun')) {
    out.push(`<path d="M${cx + 3},${eyeY + 4} L${cx + 10},${eyeY + 13} L${cx + 2},${noseY - 7} L${cx + 7},${noseY - 2}" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>`);
    out.push(`<path d="M${cx + 5},${eyeY + 13} l8,-2" stroke="${SCAR}" stroke-width="2.2" stroke-linecap="round"/>`);
    out.push(`<path d="${base(10, 2)}" fill="none" stroke="${INK}" stroke-width="2.3" stroke-linecap="round"/>`);
  } else {
    const bridge = noseType === 'hooked'
      ? `M${cx + 3},${eyeY + 4} C${cx + 11},${eyeY + 12} ${cx + 10},${noseY - 8} ${cx + 8},${noseY - 2}`
      : `M${cx + 3},${eyeY + 4} C${cx + 4},${eyeY + 14} ${cx + 6},${noseY - 8} ${cx + 8},${noseY - 2}`;
    out.push(`<path d="${bridge}" fill="none" stroke="${INK}" stroke-width="2.3" stroke-linecap="round"/>`);
    out.push(`<path d="${base(noseType === 'broad' ? 13 : 9)}" fill="none" stroke="${INK}" stroke-width="2.3" stroke-linecap="round"/>`);
  }
  out.push(`<circle cx="${cx - 4}" cy="${noseY + 2}" r="1.4" fill="${INK}"/><circle cx="${cx + 5}" cy="${noseY + 2}" r="1.4" fill="${INK}"/>`);

  // mustache sits over the mouth
  if (L.beard === 'mustache') {
    out.push(`<path d="M${cx - 2},${noseY + 7} C${cx - 11},${noseY + 5} ${cx - 21},${mouthY - 2} ${cx - 23},${mouthY + 13} C${cx - 18},${mouthY + 3} ${cx - 10},${mouthY - 1} ${cx - 2},${mouthY - 2} Z" fill="${hair}" ${S} stroke-width="2.4"/>`);
    out.push(`<path d="M${cx + 2},${noseY + 7} C${cx + 11},${noseY + 5} ${cx + 21},${mouthY - 2} ${cx + 23},${mouthY + 13} C${cx + 18},${mouthY + 3} ${cx + 10},${mouthY - 1} ${cx + 2},${mouthY - 2} Z" fill="${hair}" ${S} stroke-width="2.4"/>`);
  }

  // mouth
  if (inj.has('dis')) {
    out.push(`<path d="M${cx - mw},${mouthY} Q${cx},${mouthY - 3} ${cx + mw},${mouthY} Q${cx},${mouthY + 9} ${cx - mw},${mouthY} Z" fill="#3A1E18" ${S} stroke-width="2.2"/>`);
    out.push(`<rect x="${cx - mw + 4}" y="${mouthY - 1.2}" width="5" height="4" fill="#E6DCC4"/><rect x="${cx + 3}" y="${mouthY - 1.2}" width="5" height="4" fill="#E6DCC4"/>`);
  } else {
    const m = mouthType === 'down' ? `M${cx - mw},${mouthY + 3} Q${cx},${mouthY - 3} ${cx + mw},${mouthY + 3}`
      : mouthType === 'smirk' ? `M${cx - mw},${mouthY + 1} Q${cx},${mouthY + 2} ${cx + mw},${mouthY - 3}`
        : `M${cx - mw},${mouthY} Q${cx},${mouthY + 1.5} ${cx + mw},${mouthY}`;
    out.push(`<path d="${m}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>`);
  }
  out.push(`<path d="M${cx - 5},${mouthY + 7} Q${cx},${mouthY + 9} ${cx + 5},${mouthY + 7}" fill="none" stroke="${skinSh}" stroke-width="1.8" stroke-linecap="round"/>`);

  if (inj.has('yanak')) {
    const x0 = cx + headW - 13, y0 = eyeY + 9;
    out.push(`<path d="M${x0},${y0} L${x0 - 11},${y0 + 30}" stroke="${SCAR}" stroke-width="2.8" stroke-linecap="round"/>`);
    for (let i = 0; i < 4; i++) {
      const t = (i + 0.6) / 4.4;
      const x = x0 - 11 * t, y = y0 + 30 * t;
      out.push(`<path d="M${x - 4},${y - 1.5} L${x + 4},${y + 1.5}" stroke="${SCAR}" stroke-width="1.7" stroke-linecap="round"/>`);
    }
  }

  out.push(`</g></g>`);
  if (frame) out.push(`<rect x="7" y="7" width="186" height="226" fill="none" stroke="#E8D9B5" stroke-opacity="0.5" stroke-width="2"/>`);
  out.push(`</svg>`);
  return out.join('');
}
