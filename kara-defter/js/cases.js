// Daily case generation. Same case number → same case for everyone. No DOM (node imports it).
import { CREATURES, BY_ID } from './bestiary.js';
import STORIES from './content/stories/index.js';
import { CLUE_DIMS, FAMILY_OF, FAMILIES, TRAIT, TOOLS } from './traits.js';
import { TESTS } from './content/tests.js';
import { rngFor, pick, dateForCaseNo } from './util.js';

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

// Test texts can name the village.
const fillText = (text, c) => text.replace(/\{koy\}/g, c.village);

// A letter that opens with an office heading (T.C., a report or minutes title in capitals) was typed, not hand-written.
export const isOfficial = (body) => {
  const first = body.split('\n')[0].trim();
  return /^T\.C\./.test(first) || (/^[A-ZÇĞİÖŞÜ0-9 ,.:–-]{10,}$/.test(first) && !/DEFTER/.test(first));
};

// A case is the creature's hand-written story; the calendar only decides which one comes today.
export function generateCase(n) {
  const date = dateForCaseNo(n);
  const rng = rngFor(`kara-defter:vaka:${date}`);
  const creatureId = creatureIdForCase(n);
  const story = STORIES[creatureId];
  const c = { no: n, date, creatureId, village: story.village, chosen: story.chosen, story, letter: story.letter, official: isOfficial(story.letter.body) };
  c.clues = {};
  for (const d of CLUE_DIMS) {
    const trait = story.chosen[d.id];
    c.clues[d.id] = { trait, fam: FAMILY_OF[d.id][trait], text: story.clues[d.id] ?? null };
  }
  c.place = story.chosen.yer;
  c.time = story.chosen.zaman;
  c.sources = CLUE_DIMS.map((d) => d.id).filter((d) => story.open.includes(d));
  c.closed = story.closed;
  const options = [story.sir.right, ...story.sir.wrong];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  c.sirOptions = options;
  c.par = parFor(c);
  return c;
}

// The result of leaving a tool out for a night. Same case and tool → same text for everyone.
export function testResult(c, toolId) {
  const works = BY_ID[c.creatureId].tools.includes(toolId);
  const t = TESTS[toolId];
  const rng = rngFor(`kara-defter:sinama:${c.date}:${toolId}`);
  return { tool: toolId, works, text: fillText(`${t.set} ${pick(rng, works ? t.yes : t.no)}`, c) };
}

export const fitsTests = (cr, c, tests) => tests.every((t) => cr.tools.includes(t) === BY_ID[c.creatureId].tools.includes(t));

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
