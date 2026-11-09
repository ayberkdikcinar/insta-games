// Daily case generation. Same case number → same case for everyone. No DOM (node imports it).
import { CREATURES, BY_ID, GENERIC, NAMES, ELDERS, SIGNERS, VILLAGES } from './bestiary.js';
import { CLUE_DIMS, FAMILY_OF, FAMILIES, TRAIT, TOOLS } from './traits.js';
import { TESTS, CLOSED } from './content/tests.js';
import { rngFor, pick, dateForCaseNo, genitive } from './util.js';

const NO_REPEAT = 7; // a creature never returns within a week, even across deck boundaries
const OPEN_SOURCES = 3; // of the six clue sources, a case leaves this many open
const EXACT_MIN = 2; // read exactly, the open sources must leave this many pages at least, so a test is always needed…
const EXACT_MAX = 4; // …and at most this many, so three tests can always finish it
const FAMILY_MAX = 8; // what the defter's own filter may still show
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
  // a separate random stream, so the letter and clue texts above don't change with the sources
  const srcRng = rngFor(`kara-defter:kaynak:${date}`);
  c.sources = pickSources(c, srcRng);
  c.closed = {};
  for (const d of CLUE_DIMS) if (!c.sources.includes(d.id)) c.closed[d.id] = pick(srcRng, CLOSED[d.id]);
  c.par = parFor(c);
  return c;
}

function subsets(items, k) {
  if (k === 0) return [[]];
  if (items.length < k) return [];
  const [head, ...rest] = items;
  return [...subsets(rest, k - 1).map((s) => [head, ...s]), ...subsets(rest, k)];
}

const exactPool = (c, dims) => CREATURES.filter((cr) => dims.every((d) => cr.traits[d].includes(c.chosen[d])));
const familyPool = (c, dims) => CREATURES.filter((cr) => dims.every((d) => cr.traits[d].some((t) => FAMILY_OF[d][t] === c.clues[d].fam)));

// Which clue sources stay open today. Chosen so that perfect reading of all of them still leaves 2–4 pages:
// the clues build the shortlist and a test has to settle it.
function pickSources(c, rng) {
  const all = CLUE_DIMS.map((d) => d.id);
  const scored = [OPEN_SOURCES, OPEN_SOURCES - 1, OPEN_SOURCES + 1]
    .flatMap((k, tier) => subsets(all, k).map((dims) => {
      const exact = exactPool(c, dims).length;
      const fam = familyPool(c, dims).length;
      const off = Math.max(0, EXACT_MIN - exact) + Math.max(0, exact - EXACT_MAX) + Math.max(0, fam - FAMILY_MAX);
      return { dims, off, tier };
    }));
  const best = Math.min(...scored.map((s) => s.off * 10 + s.tier));
  return pick(rng, scored.filter((s) => s.off * 10 + s.tier === best).map((s) => s.dims));
}

// The result of leaving a tool out for a night. Same case and tool → same text for everyone.
export function testResult(c, toolId) {
  const works = BY_ID[c.creatureId].tools.includes(toolId);
  const t = TESTS[toolId];
  const rng = rngFor(`kara-defter:sinama:${c.date}:${toolId}`);
  return { tool: toolId, works, text: fillText(`${t.set} ${pick(rng, works ? t.yes : t.no)}`, c) };
}

export const fitsTests = (cr, c, tests) => tests.every((t) => cr.tools.includes(t) === BY_ID[c.creatureId].tools.includes(t));

// What the verdict still asks: sources left unread today on which this page lists more than one value.
// Depends only on the chosen page and what's open, so opening the verdict reveals nothing about the answer.
export function verdictBlanks(cr, c, used) {
  return c.sources.filter((d) => !used.includes(d) && cr.traits[d].length > 1).slice(0, 2);
}

export const famLabel = (dim, fam) => FAMILIES[dim][fam].label;
export const traitLabel = (dim, trait) => TRAIT[dim][trait].label;

// Pages the defter still shows after the revealed clues (family-level match).
export function candidates(c, dims) {
  return CREATURES.filter((cr) => dims.every((d) => cr.traits[d].some((t) => FAMILY_OF[d][t] === c.clues[d].fam)));
}

// Does this page match the clue exactly (not just its family)?
export const exactMatch = (cr, c, d) => cr.traits[d].includes(c.clues[d].trait);

// Par: candles a sharp reader needs, taking each time the step (an open source or a test) that best splits the
// pages left, reading exact traits rather than families.
export function parFor(c) {
  const truth = BY_ID[c.creatureId];
  let set = CREATURES;
  const dims = [...c.sources];
  const tools = TOOLS.map((t) => t.id);
  let used = 0;
  const clueE = (s, d) => {
    let e = 0;
    for (const t of s) for (const v of t.traits[d]) e += s.filter((x) => x.traits[d].includes(v)).length / s.length / t.traits[d].length;
    return e;
  };
  const toolE = (s, t) => {
    const yes = s.filter((x) => x.tools.includes(t)).length;
    return (yes * yes + (s.length - yes) * (s.length - yes)) / s.length;
  };
  while (set.length > 1 && used < 6) {
    const steps = [...dims.map((d) => ({ d, e: clueE(set, d) })), ...tools.map((t) => ({ t, e: toolE(set, t) }))];
    const s = steps.reduce((b, x) => (x.e < b.e ? x : b));
    used++;
    if (s.d) {
      dims.splice(dims.indexOf(s.d), 1);
      set = set.filter((x) => x.traits[s.d].includes(c.clues[s.d].trait));
    } else {
      tools.splice(tools.indexOf(s.t), 1);
      set = set.filter((x) => x.tools.includes(s.t) === truth.tools.includes(s.t));
    }
  }
  return used;
}
