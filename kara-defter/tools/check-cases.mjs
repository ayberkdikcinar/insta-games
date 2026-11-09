// Generated-case checks: node tools/check-cases.mjs
// 1. cases 1–500 are complete, fully filled in, consistent with their creature
// 2. the calendar deals every creature once per 50 days and never repeats one within a week
// 3. with every clue read exactly, each case narrows to its creature (the roster check proves this for all
//    possible cases; here it is re-checked on real generated cases)
// 4. open sources leave a shortlist that only tests can settle, and it can always be settled within the candles
// 5. every tool has complete test texts, every source a closed-reason
// 6. difficulty: par and the family-filter pool sizes across the first 500 cases
import { CREATURES } from '../js/bestiary.js';
import { generateCase, candidates, parFor, testResult } from '../js/cases.js';
import { CLUE_DIMS, TOOLS, MAX_CANDLES } from '../js/traits.js';
import { TESTS } from '../js/content/tests.js';

let failures = 0;
const fail = (m) => { failures++; console.error('FAIL', m); };
for (const t of TOOLS) {
  const x = TESTS[t.id];
  if (!x || !x.set || x.yes?.length < 2 || x.no?.length < 2) fail(`test texts incomplete: ${t.id}`);
}

// fewest tests that are guaranteed to single out one page, whatever the answers
function worstTests(set) {
  if (set.length <= 1) return 0;
  let best = Infinity;
  for (const t of TOOLS) {
    const yes = set.filter((x) => x.tools.includes(t.id));
    if (!yes.length || yes.length === set.length) continue;
    const no = set.filter((x) => !x.tools.includes(t.id));
    best = Math.min(best, 1 + Math.max(worstTests(yes), worstTests(no)));
  }
  return best;
}

const N = 500;
const shortlist = {};
const worst = {};
const seq = [];
const parHist = {};
const poolAll = {};
for (let n = 1; n <= N; n++) {
  const c = generateCase(n);
  seq.push(c.creatureId);
  const cr = CREATURES.find((x) => x.id === c.creatureId);
  for (const s of [c.letter.body, c.letter.sign, ...c.sources.map((d) => c.clues[d].text)]) {
    if (!s || /[{}]/.test(s)) fail(`case ${n}: empty or unfilled text: ${s}`);
  }
  for (const d of CLUE_DIMS) if (!cr.traits[d.id].includes(c.clues[d.id].trait)) fail(`case ${n}: ${d.id} trait not the creature's`);
  const exact = CREATURES.filter((x) => CLUE_DIMS.every((d) => x.traits[d.id].includes(c.clues[d.id].trait)));
  if (exact.length !== 1) fail(`case ${n}: exact clues match ${exact.map((x) => x.id).join(',')}`);
  const fam = candidates(c, CLUE_DIMS.map((d) => d.id));
  poolAll[fam.length] = (poolAll[fam.length] || 0) + 1;
  if (!fam.some((x) => x.id === c.creatureId)) fail(`case ${n}: family filter drops the creature`);
  parHist[parFor(c)] = (parHist[parFor(c)] || 0) + 1;

  const closed = CLUE_DIMS.filter((d) => !c.sources.includes(d.id));
  if (c.sources.length < 2 || c.sources.length > 4) fail(`case ${n}: ${c.sources.length} open sources`);
  for (const d of closed) if (!c.closed[d.id]) fail(`case ${n}: ${d.id} closed without a reason`);
  const short = CREATURES.filter((x) => c.sources.every((d) => x.traits[d].includes(c.clues[d].trait)));
  shortlist[short.length] = (shortlist[short.length] || 0) + 1;
  if (!short.some((x) => x.id === c.creatureId)) fail(`case ${n}: open clues drop the creature`);
  const w = worstTests(short);
  worst[w] = (worst[w] || 0) + 1;
  if (c.sources.length + w > MAX_CANDLES) fail(`case ${n}: cannot be settled within ${MAX_CANDLES} candles`);
  for (const t of TOOLS) if (/[{}]/.test(testResult(c, t.id).text)) fail(`case ${n}: unfilled test text ${t.id}`);
}
for (let i = 0; i < seq.length; i++) {
  const recent = seq.slice(Math.max(0, i - 7), i);
  if (recent.includes(seq[i])) fail(`case ${i + 1}: ${seq[i]} repeats within a week`);
}
for (let k = 0; k + CREATURES.length <= seq.length; k += CREATURES.length) {
  const block = new Set(seq.slice(k, k + CREATURES.length));
  if (block.size !== CREATURES.length) fail(`cycle starting ${k + 1} is not a full deck`);
}
console.log(`cases 1–${N} generated`);
console.log('par:', Object.entries(parHist).map(([k, v]) => `${k}→${v}`).join('  '));
console.log('pages left after all six clues (family filter only):', Object.entries(poolAll).map(([k, v]) => `${k}→${v}`).join('  '));
console.log('pages left after all open clues, read exactly:', Object.entries(shortlist).map(([k, v]) => `${k}→${v}`).join('  '));
console.log('tests guaranteed to settle that shortlist:', Object.entries(worst).map(([k, v]) => `${k}→${v}`).join('  '));
if ((shortlist[1] || 0) > N * 0.01) fail(`${shortlist[1]} cases need no test at all`);
console.log('first 14:', seq.slice(0, 14).join(' '));
if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log('\nall case checks passed');
