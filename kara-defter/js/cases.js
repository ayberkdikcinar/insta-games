// Daily case generation. Same case number → same case for everyone. No DOM (node imports it).
import { CREATURES, BY_ID, GENERIC, NAMES, ELDERS, SIGNERS, VILLAGES } from './bestiary.js';
import { CLUE_DIMS, FAMILY_OF, FAMILIES, TRAIT } from './traits.js';
import { rngFor, pick, dateForCaseNo, genitive } from './util.js';

const NO_REPEAT = 7; // a creature never returns within a week, even across deck boundaries
const decks = [];

// The calendar deals the 50 creatures as a shuffled deck: every creature once per 50 days.
function deck(cycle) {
  if (decks[cycle]) return decks[cycle];
  const rng = rngFor(`kara-defter:deste:${cycle}`);
  const ids = CREATURES.map((c) => c.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  if (cycle > 0) {
    const prevTail = deck(cycle - 1).slice(-NO_REPEAT);
    for (let i = 0; i < NO_REPEAT; i++) {
      if (!prevTail.includes(ids[i])) continue;
      const j = ids.findIndex((id, k) => k >= NO_REPEAT && !prevTail.includes(id));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
  }
  decks[cycle] = ids;
  return ids;
}

export function creatureIdForCase(n) {
  const i = n - 1;
  return deck(Math.floor(i / CREATURES.length))[i % CREATURES.length];
}

export function fillText(text, c) {
  const names = c.names;
  return text
    .replace(/\{(K|T|Y|D)(:gen)?\}/g, (_, key, gen) => (gen ? genitive(names[key]) : names[key]))
    .replace(/\{koy\}/g, c.village);
}

function clueText(rng, creature, dim, trait) {
  const own = (creature.clues?.[dim] || []).filter((x) => x.trait === trait).map((x) => x.t);
  const generic = GENERIC[dim]?.[trait] || [];
  if (own.length && (!generic.length || rng() < 0.7)) return pick(rng, own);
  return pick(rng, generic.length ? generic : own);
}

export function generateCase(n) {
  const date = dateForCaseNo(n);
  const rng = rngFor(`kara-defter:vaka:${date}`);
  const creature = BY_ID[creatureIdForCase(n)];
  const village = pick(rng, VILLAGES);

  const chosen = {};
  for (const d of CLUE_DIMS) chosen[d.id] = pick(rng, creature.traits[d.id]);

  const who = TRAIT.kurban[chosen.kurban].who;
  const pool = who === 'any' ? (rng() < 0.5 ? NAMES.f : NAMES.m) : NAMES[who];
  const K = pick(rng, pool);
  const others = (list) => list.filter((x) => x !== K);
  const T = pick(rng, others([...NAMES.f, ...NAMES.m]));
  const D = pick(rng, NAMES.m.filter((x) => x !== K && x !== T));
  const Y = pick(rng, ELDERS);
  const role = pick(rng, SIGNERS);
  const signerName = pick(rng, (role === 'ebesi' ? NAMES.f : NAMES.m).filter((x) => x !== K && x !== T && x !== D));

  const c = { no: n, date, creatureId: creature.id, village, names: { K, T, Y, D }, chosen };
  const L = GENERIC.letters;
  c.letter = {
    body: [pick(rng, L.opening), pick(rng, L.dert[creature.traits.dert[0]]), pick(rng, L.closing)].map((s) => fillText(s, c)).join(' '),
    sign: `${village} ${role} ${signerName}`,
  };
  c.clues = {};
  for (const d of CLUE_DIMS) {
    const trait = chosen[d.id];
    c.clues[d.id] = { trait, fam: FAMILY_OF[d.id][trait], text: fillText(clueText(rng, creature, d.id, trait), c) };
  }
  c.place = chosen.yer;
  c.time = chosen.zaman;
  c.par = parFor(c);
  return c;
}

export const famLabel = (dim, fam) => FAMILIES[dim][fam].label;
export const traitLabel = (dim, trait) => TRAIT[dim][trait].label;

// Pages the defter still shows after the revealed clues (family-level match).
export function candidates(c, dims) {
  return CREATURES.filter((cr) => dims.every((d) => cr.traits[d].some((t) => FAMILY_OF[d][t] === c.clues[d].fam)));
}

// Does this page match the clue exactly (not just its family)?
export const exactMatch = (cr, c, d) => cr.traits[d].includes(c.clues[d].trait);

// Par: candles a sharp reader needs, asking each time the question that best splits the pages left
// (reading exact traits, not just families).
export function parFor(c) {
  let set = CREATURES;
  const left = CLUE_DIMS.map((d) => d.id);
  let used = 0;
  const expected = (s, d) => {
    let e = 0;
    for (const t of s) for (const v of t.traits[d]) e += s.filter((x) => x.traits[d].includes(v)).length / s.length / t.traits[d].length;
    return e;
  };
  while (set.length > 1 && left.length) {
    const d = left.reduce((b, x) => (expected(set, x) < expected(set, b) ? x : b));
    left.splice(left.indexOf(d), 1);
    set = set.filter((x) => x.traits[d].includes(c.clues[d].trait));
    used++;
  }
  return used;
}
