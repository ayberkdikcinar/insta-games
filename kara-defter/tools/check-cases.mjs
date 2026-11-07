// Generated-case checks: node tools/check-cases.mjs
// 1. cases 1–500 are complete, fully filled in, consistent with their creature
// 2. the calendar deals every creature once per 50 days and never repeats one within a week
// 3. with every clue read exactly, each case narrows to its creature (the roster check proves this for all
//    possible cases; here it is re-checked on real generated cases)
// 4. difficulty: par and the family-filter pool sizes across the first 500 cases
import { CREATURES } from '../js/bestiary.js';
import { generateCase, candidates, parFor } from '../js/cases.js';
import { CLUE_DIMS } from '../js/traits.js';

let failures = 0;
const fail = (m) => { failures++; console.error('FAIL', m); };
const N = 500;
const seq = [];
const parHist = {};
const poolAll = {};
for (let n = 1; n <= N; n++) {
  const c = generateCase(n);
  seq.push(c.creatureId);
  const cr = CREATURES.find((x) => x.id === c.creatureId);
  for (const s of [c.letter.body, c.letter.sign, ...CLUE_DIMS.map((d) => c.clues[d.id].text)]) {
    if (!s || /[{}]/.test(s)) fail(`case ${n}: empty or unfilled text: ${s}`);
  }
  for (const d of CLUE_DIMS) if (!cr.traits[d.id].includes(c.clues[d.id].trait)) fail(`case ${n}: ${d.id} trait not the creature's`);
  const exact = CREATURES.filter((x) => CLUE_DIMS.every((d) => x.traits[d.id].includes(c.clues[d.id].trait)));
  if (exact.length !== 1) fail(`case ${n}: exact clues match ${exact.map((x) => x.id).join(',')}`);
  const fam = candidates(c, CLUE_DIMS.map((d) => d.id));
  poolAll[fam.length] = (poolAll[fam.length] || 0) + 1;
  if (!fam.some((x) => x.id === c.creatureId)) fail(`case ${n}: family filter drops the creature`);
  parHist[parFor(c)] = (parHist[parFor(c)] || 0) + 1;
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
console.log('first 14:', seq.slice(0, 14).join(' '));
if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log('\nall case checks passed');
