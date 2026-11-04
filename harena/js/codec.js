// Challenge links (#m=<base64url JSON>) and short typeable codes (Crockford base32, 16 chars).
import { ORIGINS, QUIRKS, INJURIES, NICKS, ARMS, STAT_KEYS } from './data.js';
import { nameFor } from './gen.js';
import { clamp } from './rng.js';

const ALPH = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

function b64urlEncode(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(s) {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/'));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f<>]/g, '').slice(0, max);
const int = (v, a, b) => clamp(Math.round(Number(v) || 0), a, b);

export function snapshot(g, ludus, extra = {}) {
  return {
    v: 1, n: g.name, k: g.nick || '', o: g.origin, s: STAT_KEYS.map((k) => g.stats[k]),
    q: g.quirk, i: (g.injuries || []).map((x) => INJURIES.findIndex((d) => d.id === x.id)),
    r: [g.rec.w, g.rec.l, g.rec.k], p: g.seed, a: ARMS.findIndex((x) => x.id === g.arm),
    g: g.age || 25, l: ludus || '', d: g.alive ? 0 : 1, ...extra,
  };
}

// Rebuilds a safe gladiator-shaped object from untrusted data.
export function ghostFrom(m) {
  const origin = int(m.o, 0, ORIGINS.length - 1);
  const seed = int(m.p, 1, 0xfffff);
  const stats = {};
  STAT_KEYS.forEach((k, i) => { stats[k] = int(m.s?.[i], 1, 10); });
  const injIdx = Array.isArray(m.i) ? m.i : [];
  const injuries = [...new Set(injIdx.map((x) => int(x, 0, INJURIES.length - 1)))].map((x) => ({ id: INJURIES[x].id, by: 0 }));
  const q = Number(m.q);
  return {
    id: 'ghost' + seed,
    seed, origin, stats, injuries,
    name: str(m.n, 24) || nameFor(seed, origin),
    nick: str(m.k, 24) || null,
    quirk: q >= 0 && q < QUIRKS.length ? Math.round(q) : -1,
    rec: { w: int(m.r?.[0], 0, 9999), l: int(m.r?.[1], 0, 9999), k: int(m.r?.[2], 0, 9999) },
    arm: ARMS[int(m.a, 0, 2)].id,
    // short codes carry no age; leave it unknown rather than guess
    age: m.g ? int(m.g, 16, 60) : null,
    ludus: str(m.l, 40),
    alive: !m.d,
    epitaph: m.e && typeof m.e === 'object' ? {
      main: str(m.e.main, 200), line2: str(m.e.line2, 120), extra: str(m.e.extra, 80), end: str(m.e.end, 80),
    } : null,
  };
}

export function encodeLink(snap) { return '#m=' + b64urlEncode(JSON.stringify(snap)); }

export function parseHash(hash) {
  if (!hash || hash.length < 2) return null;
  const h = hash.slice(1);
  if (h === 'ferman') return { type: 'ferman' };
  try {
    if (h.startsWith('m=')) return { type: 'ghost', ghost: ghostFrom(JSON.parse(b64urlDecode(h.slice(2)))) };
    if (h.startsWith('k=')) {
      const g = decodeCode(decodeURIComponent(h.slice(2)));
      return g ? { type: 'ghost', ghost: g } : { type: 'bad' };
    }
  } catch (e) {
    return { type: 'bad' };
  }
  return null;
}

// --- short code: 75 payload bits + 5 checksum bits = 16 base32 chars ---------

function checksum(bits) {
  let h = 7;
  for (let i = 0; i < bits.length; i++) h = (h * 31 + bits[i] + i) % 32749;
  return h & 31;
}

export function encodeCode(g) {
  const bits = [];
  const w = (v, n) => { for (let i = n - 1; i >= 0; i--) bits.push((v >> i) & 1); };
  const injMask = INJURIES.reduce((m, d, i) => ((g.injuries || []).some((x) => x.id === d.id) ? m | (1 << i) : m), 0);
  const nickIdx = g.nick ? NICKS.indexOf(g.nick) : -1;
  w(1, 2);
  w(g.alive ? 0 : 1, 1);
  w(g.seed & 0xfffff, 20);
  w(g.origin, 3);
  w(g.quirk >= 0 ? g.quirk : 15, 4);
  STAT_KEYS.forEach((k) => w(clamp(g.stats[k], 1, 10) - 1, 4));
  w(injMask, 7);
  w(Math.max(0, ARMS.findIndex((a) => a.id === g.arm)), 2);
  w(Math.min(63, g.rec.w), 6);
  w(Math.min(31, g.rec.l), 5);
  w(Math.min(15, g.rec.k), 4);
  w(nickIdx >= 0 ? nickIdx : 31, 5);
  w(checksum(bits), 5);
  let out = '';
  for (let i = 0; i < bits.length; i += 5) {
    let v = 0;
    for (let j = 0; j < 5; j++) v = (v << 1) | bits[i + j];
    out += ALPH[v];
  }
  return out.match(/.{4}/g).join('-');
}

export function normalizeCode(s) {
  return String(s || '').toUpperCase().replace(/[\s-]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1').replace(/U/g, 'V');
}

export function decodeCode(input) {
  const s = normalizeCode(input);
  if (s.length !== 16) return null;
  const bits = [];
  for (const ch of s) {
    const v = ALPH.indexOf(ch);
    if (v < 0) return null;
    for (let i = 4; i >= 0; i--) bits.push((v >> i) & 1);
  }
  const payload = bits.slice(0, 75);
  let pos = 75, sum = 0;
  for (let i = 0; i < 5; i++) sum = (sum << 1) | bits[pos++];
  if (sum !== checksum(payload)) return null;
  let p = 0;
  const rd = (n) => { let v = 0; for (let i = 0; i < n; i++) v = (v << 1) | payload[p++]; return v; };
  if (rd(2) !== 1) return null;
  const dead = rd(1);
  const seed = rd(20);
  const origin = rd(3);
  const quirk = rd(4);
  const s4 = STAT_KEYS.map(() => rd(4) + 1);
  const mask = rd(7);
  const arm = rd(2);
  const w = rd(6), l = rd(5), k = rd(4);
  const nickIdx = rd(5);
  if (origin >= ORIGINS.length || arm > 2) return null;
  return ghostFrom({
    p: seed, o: origin, q: quirk === 15 ? -1 : quirk, s: s4, a: arm, d: dead,
    i: INJURIES.map((_, i) => i).filter((i) => mask & (1 << i)),
    r: [w, l, k], k: nickIdx < NICKS.length ? NICKS[nickIdx] : '', n: nameFor(seed, origin),
  });
}
