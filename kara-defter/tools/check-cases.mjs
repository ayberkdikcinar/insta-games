// Content checks: node tools/check-cases.mjs
// 1. every creature has 2 valid, unique-paired tools and clue variants in all 6 categories
// 2. every clue points to its own creature and to at most 3 creatures
// 3. exhaustively, every combination of clue variants points to exactly one creature
// 4. cases 1–60 are complete, fully filled in, and never repeat a creature within a week
import { CREATURES, BY_ID, TOOLS, TOOL_BY_ID, CATEGORIES } from '../js/data.js';
import { generateCase } from '../js/cases.js';

let failures = 0;
const fail = (msg) => { failures++; console.error('FAIL', msg); };

const ids = CREATURES.map((c) => c.id);
const pairs = new Set();
for (const c of CREATURES) {
  if (c.tools.length !== 2 || new Set(c.tools).size !== 2) fail(`${c.id}: needs exactly 2 distinct tools`);
  for (const t of c.tools) if (!TOOL_BY_ID[t]) fail(`${c.id}: unknown tool ${t}`);
  const key = [...c.tools].sort().join('+');
  if (pairs.has(key)) fail(`${c.id}: tool pair ${key} is not unique`);
  pairs.add(key);
}
const toolUse = Object.fromEntries(TOOLS.map((t) => [t.id, 0]));
CREATURES.forEach((c) => c.tools.forEach((t) => toolUse[t]++));
const unused = Object.entries(toolUse).filter(([, n]) => n === 0).map(([t]) => t);
if (unused.length) console.log('note: tools never correct (pure decoys):', unused.join(', '));

let singletons = 0;
let clueCount = 0;
for (const c of CREATURES) {
  for (const cat of CATEGORIES) {
    const vs = c.clues[cat.id];
    if (!vs || !vs.length) { fail(`${c.id}.${cat.id}: no clue variants`); continue; }
    for (const v of vs) {
      clueCount++;
      if (!v.fits.includes(c.id)) fail(`${c.id}.${cat.id}: clue does not fit its own creature`);
      if (v.fits.length > 3) fail(`${c.id}.${cat.id}: clue fits ${v.fits.length} creatures`);
      for (const f of v.fits) if (!ids.includes(f)) fail(`${c.id}.${cat.id}: unknown creature ${f}`);
      if (v.fits.length === 1) singletons++;
    }
  }
  // exhaustive combination check
  let combos = 0;
  const walk = (i, set) => {
    if (i === CATEGORIES.length) {
      combos++;
      if (set.size !== 1 || !set.has(c.id)) fail(`${c.id}: a clue combination points to {${[...set].join(', ')}}`);
      return;
    }
    for (const v of c.clues[CATEGORIES[i].id]) walk(i + 1, new Set([...set].filter((x) => v.fits.includes(x))));
  };
  walk(0, new Set(ids));
  console.log(`${c.name.padEnd(16)} ${String(combos).padStart(4)} clue combinations, tools ${c.tools.join(' + ')}`);
}
console.log(`${clueCount} clues, ${singletons} point to a single creature`);

const seq = [];
for (let n = 1; n <= 60; n++) {
  const c = generateCase(n);
  seq.push(c.creatureId);
  if (!BY_ID[c.creatureId]) fail(`case ${n}: invalid creature`);
  if (Object.keys(c.clues).length !== CATEGORIES.length) fail(`case ${n}: ${Object.keys(c.clues).length} clues`);
  for (const cat of CATEGORIES) {
    const clue = c.clues[cat.id];
    if (!clue || !clue.text) fail(`case ${n}: missing ${cat.id}`);
    else if (/[{}]/.test(clue.text)) fail(`case ${n}: unfilled placeholder in ${cat.id}: ${clue.text}`);
  }
  if (/[{}]/.test(c.intro)) fail(`case ${n}: unfilled placeholder in intro`);
  const recent = seq.slice(Math.max(0, n - 7), n - 1);
  if (recent.includes(c.creatureId)) fail(`case ${n}: ${c.creatureId} repeats within a week`);
}
const counts = {};
seq.forEach((id) => { counts[id] = (counts[id] || 0) + 1; });
console.log('cases 1–60:', Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', '));
console.log('first 14:', seq.slice(0, 14).join(' '));

if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log('\nall checks passed');
