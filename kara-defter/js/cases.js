// Daily case generation. Same case number → same case for everyone. No DOM (node imports it).
import { CREATURES, BY_ID, CATEGORIES, NAMES, ELDERS, VILLAGES } from './data.js';
import { rngFor, pick, dateForCaseNo, genitive } from './util.js';

const NO_REPEAT_DAYS = 6; // a creature never returns within a week
const picks = [null];

export function creatureIdForCase(n) {
  for (let i = picks.length; i <= n; i++) {
    const recent = picks.slice(Math.max(1, i - NO_REPEAT_DAYS), i);
    const pool = CREATURES.filter((c) => !recent.includes(c.id));
    picks[i] = pick(rngFor(`kara-defter:yaratik:${dateForCaseNo(i)}`), pool).id;
  }
  return picks[n];
}

export function fillText(text, c) {
  const names = c.names;
  return text
    .replace(/\{(K|T|Y|D)(:gen)?\}/g, (_, key, gen) => (gen ? genitive(names[key]) : names[key]))
    .replace(/\{koy\}/g, c.village);
}

export function generateCase(n) {
  const date = dateForCaseNo(n);
  const rng = rngFor(`kara-defter:vaka:${date}`);
  const creature = BY_ID[creatureIdForCase(n)];
  const village = pick(rng, VILLAGES);

  const victimPool = creature.victim === 'any' ? (rng() < 0.5 ? NAMES.f : NAMES.m) : NAMES[creature.victim];
  const K = pick(rng, victimPool);
  const adults = [...NAMES.f, ...NAMES.m].filter((x) => x !== K);
  const T = pick(rng, adults);
  const D = pick(rng, NAMES.m.filter((x) => x !== K && x !== T));
  const muhtar = pick(rng, NAMES.m.filter((x) => x !== K && x !== T && x !== D));
  const Y = pick(rng, ELDERS);

  const c = { no: n, date, creatureId: creature.id, village, names: { K, T, Y, D }, muhtar };
  c.intro = fillText(pick(rng, creature.intro), c);
  c.clues = {};
  for (const cat of CATEGORIES) {
    const v = pick(rng, creature.clues[cat.id]);
    c.clues[cat.id] = { text: fillText(v.t, c), fits: v.fits };
  }
  return c;
}
