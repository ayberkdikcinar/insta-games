// Generators: gladiators, opponents, market, the daily decree, nicknames and epitaphs.
import { makeRng, clamp, roman } from './rng.js';
import { ORIGINS, QUIRKS, INJURIES, FEATS, ARMS, STAT_KEYS, FERMAN_RULES, injuryById, armById, quirkOf } from './data.js';

// Names come from the seed alone so a share code can rebuild them.
export function nameFor(seed, origin) {
  return makeRng((seed ^ 0x5bd1e995) >>> 0).pick(ORIGINS[origin].names);
}

function distribute(r, power) {
  const s = { guc: 1, cev: 1, day: 1, sov: 1 };
  let left = clamp(Math.round(power), 4, 40) - 4;
  const w = STAT_KEYS.map(() => r.float(0.4, 1.6));
  while (left > 0) {
    const open = STAT_KEYS.filter((k) => s[k] < 10);
    if (!open.length) break;
    const tot = open.reduce((a, k) => a + w[STAT_KEYS.indexOf(k)], 0);
    let pick = r.float(0, tot);
    for (const k of open) {
      pick -= w[STAT_KEYS.indexOf(k)];
      if (pick <= 0) { s[k]++; break; }
    }
    left--;
  }
  return s;
}

export function makeGladiator({ seed, origin, power, quirk, arm } = {}, rng = makeRng(Date.now() ^ (Math.random() * 1e9))) {
  const sd = seed ?? rng.int(1, 0xfffff);
  const r = makeRng((sd * 2246822519) >>> 0);
  const o = origin ?? r.int(0, ORIGINS.length - 1);
  return {
    id: 'g' + sd.toString(36) + r.int(100, 999).toString(36),
    seed: sd,
    origin: o,
    name: nameFor(sd, o),
    age: r.int(19, 34),
    stats: distribute(r, power ?? r.int(15, 23)),
    quirk: quirk ?? r.int(0, QUIRKS.length - 1),
    injuries: [],
    nick: null,
    nickPri: 0,
    rec: { w: 0, l: 0, k: 0 },
    streak: 0,
    spared: 0,
    rest: 0,
    foughtDay: 0,
    arm: arm ?? ARMS[r.int(0, 2)].id,
    log: [],
    alive: true,
  };
}

export function effStats(g) {
  const s = { ...g.stats };
  for (const inj of g.injuries || []) {
    const def = injuryById(inj.id);
    for (const [k, v] of Object.entries(def?.mod || {})) s[k] += v;
  }
  for (const k of STAT_KEYS) s[k] = clamp(s[k], 1, 10);
  return s;
}

export const powerOf = (g) => STAT_KEYS.reduce((a, k) => a + effStats(g)[k], 0);

export function recruitPrice(g) {
  if (g.free) return 0;
  return Math.max(20, Math.round(16 + (powerOf(g) - 12) * 7.5));
}

export function marketFor(save) {
  const r = makeRng(`${save.seed}:pazar:${save.day}`);
  const taken = new Set(save.roster.filter((g) => g.alive).map((g) => g.name));
  const list = [0, 1, 2].map((i) => {
    const power = [r.int(13, 17), r.int(17, 21), r.int(21, 26)][i];
    let g = makeGladiator({ power }, r);
    for (let t = 0; t < 12 && taken.has(g.name); t++) g = makeGladiator({ power }, r);
    taken.add(g.name);
    return g;
  });
  const alive = save.roster.filter((g) => g.alive).length;
  if (!alive && save.money < Math.min(...list.map(recruitPrice))) {
    const v = makeGladiator({ power: 14 }, r);
    v.free = true;
    list.push(v);
  }
  return list;
}

export const TIERS = [
  { id: 'kolay', label: 'Kolay', delta: [-6, -3], pay: 20 },
  { id: 'denk', label: 'Denk', delta: [-1, 2], pay: 40 },
  { id: 'zorlu', label: 'Zorlu', delta: [5, 8], pay: 70 },
];

export function opponentsFor(save, g) {
  const r = makeRng(`${save.seed}:rakip:${save.day}:${g.id}`);
  const p = powerOf(g);
  return TIERS.map((t, i) => {
    const o = makeGladiator({ power: clamp(p + r.int(t.delta[0], t.delta[1]), 7, 38), quirk: r.chance(0.6) ? r.int(0, QUIRKS.length - 1) : -1 }, r);
    o.tier = i;
    return o;
  });
}

// Each week deals every decree once, in a shuffled order.
export function fermanFor(n) {
  const week = Math.floor((n - 1) / FERMAN_RULES.length);
  const wr = makeRng(`ferman-hafta:${week}`);
  const order = FERMAN_RULES.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) { const j = wr.int(0, i); [order[i], order[j]] = [order[j], order[i]]; }
  const rule = FERMAN_RULES[order[(n - 1) % FERMAN_RULES.length]];
  const r = makeRng(`ferman:${n}`);
  r.next();
  const opp = makeGladiator({ power: r.int(20, 26), quirk: r.int(0, QUIRKS.length - 1) }, r);
  opp.arm = rule.oppArm || ARMS[r.int(0, 2)].id;
  if (rule.banArm && opp.arm === rule.banArm) opp.arm = 'retiarius';
  return { n, rule, opp };
}

// --- nicknames ---------------------------------------------------------------

export function grantNick(g, nick, pri) {
  if (pri > (g.nickPri || 0)) {
    const old = g.nick;
    g.nick = nick;
    g.nickPri = pri;
    return { nick, old };
  }
  return null;
}

export function featNicks(g, ctx) {
  const got = [];
  const add = (key) => { const f = FEATS[key]; const r = grantNick(g, f.nick, f.pri); if (r) got.push(r); };
  if (ctx.won && ctx.oppPower - ctx.ownPower >= 6) add('devdeviren');
  if (ctx.spared && g.spared === 1) add('bagislanan');
  if (ctx.spared && g.spared >= 2) add('olmeyen');
  if (g.rec.k >= 3) add('kasap');
  if (g.streak >= 5) add('firtina');
  if (g.rec.w >= 10) add('aslan');
  return got;
}

// --- Turkish suffixes for free-form names (ludus names typed by players) -----

const VOWELS = 'aeıioöuüAEIİOÖUÜ';
function lastVowel(s) {
  for (let i = s.length - 1; i >= 0; i--) if (VOWELS.includes(s[i])) return s[i].toLocaleLowerCase('tr');
  return 'e';
}
export function genitive(name) {
  const v = lastVowel(name);
  const h = 'aı'.includes(v) ? 'ı' : 'ei'.includes(v) ? 'i' : 'ou'.includes(v) ? 'u' : 'ü';
  const endsVowel = VOWELS.includes(name.slice(-1));
  return `${name}'${endsVowel ? 'n' : ''}${h}n`;
}

// --- epitaph -----------------------------------------------------------------

export function epitaph(g, ludus) {
  const o = ORIGINS[g.origin];
  const d = g.death || {};
  const fights = g.rec.w + g.rec.l;
  const q = quirkOf(g);
  const killer = ORIGINS[d.byOrigin ?? 0];
  let cause;
  if (q?.id === 'kibirli') cause = 'kendi kibrine';
  else if (d.stance === 'kalabalik') cause = 'kalabalığın alkışına';
  else if (d.stance === 'hayatta') cause = 'sıkılan kalabalığa';
  else if ((d.oppPower ?? 0) - (d.ownPower ?? 0) >= 5) cause = `kendinden güçlü bir ${killer.dat}`;
  else cause = `${d.byName || 'adsız'} adlı bir ${killer.dat}`;

  const first = (g.injuries || [])[0];
  let main;
  if (first && first.byName && first.byName === d.byName) {
    main = `Önce ${injuryById(first.id).partLow}, sonra canını aynı ${ORIGINS[first.by].dat} verdi.`;
  } else if (first) {
    main = `${injuryById(first.id).part} bir ${ORIGINS[first.by].dat}, canını ${cause} verdi.`;
  } else if (g.rec.w >= 3) {
    main = `${g.rec.w} kez kumdan kalktı, son kez kalkamadı. Canını ${cause} verdi.`;
  } else {
    main = `Kum ona kısa bir zaman ayırdı. Canını ${cause} verdi.`;
  }
  const extra = g.rec.k > 0 ? `${g.rec.k} rakibi kumdan kalkmadı.` : null;
  return {
    head: 'D · M',
    name: g.name.toUpperCase(),
    nick: g.nick,
    line1: `${armById(g.arm).label.toUpperCase()} · ${roman(Math.max(1, fights))} DÖVÜŞ · ${roman(g.age || 25)} YAŞINDA`,
    line2: `${o.from} geldi. ${fights} dövüşte ${g.rec.w} galibiyet.`,
    main,
    extra,
    end: ludus ? `${genitive(ludus)} gladyatörüydü.` : null,
  };
}
