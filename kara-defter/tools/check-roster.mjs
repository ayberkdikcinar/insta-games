// Structural check of the trait table: node tools/check-roster.mjs
// - every trait id exists, every creature has a unique tool pair
// - EVERY possible case (one value per dimension) narrows to exactly one creature
// - how many candles the best player needs (par) across all possible cases
import { ROSTER } from '../js/content/roster.js';
import { DIMS, TRAIT, TOOL_BY_ID, LETTER_DIM } from '../js/traits.js';

let failures = 0;
const fail = (m) => { failures++; console.error('FAIL', m); };
const dims = DIMS.map((d) => d.id);
const clueDims = dims.filter((d) => d !== LETTER_DIM);

const ids = new Set();
const pairs = new Map();
for (const c of ROSTER) {
  if (ids.has(c.id)) fail(`duplicate id ${c.id}`);
  ids.add(c.id);
  for (const d of dims) {
    if (!c.traits[d]?.length) fail(`${c.id}: no ${d}`);
    for (const v of c.traits[d]) if (!TRAIT[d][v]) fail(`${c.id}: unknown ${d} trait ${v}`);
  }
  if (c.traits[LETTER_DIM].length !== 1) fail(`${c.id}: dert must be a single value`);
  for (const t of c.tools) if (!TOOL_BY_ID[t]) fail(`${c.id}: unknown tool ${t}`);
  const key = [...c.tools].sort().join('+');
  if (pairs.has(key)) fail(`tool pair ${key}: ${pairs.get(key)} and ${c.id}`);
  pairs.set(key, c.id);
}

const matches = (c, combo) => dims.every((d) => c.traits[d].includes(combo[d]));
const parHist = {};
const collisions = new Map();
let total = 0;
const parOf = (combo, self) => {
  const base = ROSTER.filter((c) => c.traits[LETTER_DIM].includes(combo[LETTER_DIM]));
  for (let k = 0; k <= clueDims.length; k++) {
    // any subset of size k that isolates `self`
    const rec = (start, chosen) => {
      if (chosen.length === k) {
        return base.filter((c) => chosen.every((d) => c.traits[d].includes(combo[d]))).length === 1;
      }
      for (let i = start; i < clueDims.length; i++) if (rec(i + 1, [...chosen, clueDims[i]])) return true;
      return false;
    };
    if (rec(0, [])) return k;
  }
  return 99;
};

const perCreaturePar = {};
for (const c of ROSTER) {
  const walk = (i, combo) => {
    if (i === dims.length) {
      total++;
      const hit = ROSTER.filter((x) => matches(x, combo));
      if (hit.length !== 1) {
        const k = hit.map((h) => h.id).sort().join(' = ');
        collisions.set(k, (collisions.get(k) || 0) + 1);
        return;
      }
      const p = parOf(combo, c);
      parHist[p] = (parHist[p] || 0) + 1;
      (perCreaturePar[c.id] ||= []).push(p);
      return;
    }
    for (const v of c.traits[dims[i]]) walk(i + 1, { ...combo, [dims[i]]: v });
  };
  walk(0, {});
}
for (const [k, n] of collisions) fail(`indistinguishable: ${k} (${n} cases)`);

console.log(`${ROSTER.length} creatures, ${total} possible cases`);
console.log('par (candles a perfect player needs):', Object.entries(parHist).map(([k, v]) => `${k}→${v}`).join('  '));
for (const d of dims) {
  const counts = {};
  ROSTER.forEach((c) => c.traits[d].forEach((v) => { counts[v] = (counts[v] || 0) + 1; }));
  const unused = Object.keys(TRAIT[d]).filter((v) => !counts[v]);
  const line = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' ');
  console.log(`${d.padEnd(7)} ${line}${unused.length ? `   UNUSED: ${unused.join(',')}` : ''}`);
}
const easy = Object.entries(perCreaturePar).filter(([, ps]) => Math.max(...ps) <= 1).map(([id]) => id);
if (easy.length) console.log('always solvable with ≤1 candle:', easy.join(', '));
const toolUse = {};
ROSTER.forEach((c) => c.tools.forEach((t) => { toolUse[t] = (toolUse[t] || 0) + 1; }));
console.log('tools:', Object.entries(toolUse).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' '));
if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log('\nroster OK');
