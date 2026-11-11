// Künye rules: the defter narrows by the player's stamps. Run: node tools/check-kunye.mjs
import { CREATURES, BY_ID } from '../js/bestiary.js';
import { CLUE_DIMS, FAMILIES, TRAITS } from '../js/traits.js';
import { generateCase, candidates, candidatesByMarks, cleanMarks, stampOptions, reading } from '../js/cases.js';

let checks = 0;
const errors = [];
const ok = (cond, msg) => { checks++; if (!cond) errors.push(msg); };

// every sign of a dimension sits under exactly one stamp, so a careful reader always has one right box
for (const d of CLUE_DIMS) {
  const opts = stampOptions(d.id);
  ok(opts.length >= 5 && opts.length <= 8, `${d.id}: ${opts.length} stamps`);
  for (const t of TRAITS[d.id]) {
    const homes = Object.values(FAMILIES[d.id]).filter((f) => f.of.includes(t.id)).length;
    ok(homes === 1, `${d.id}.${t.id} is under ${homes} stamps`);
  }
}

const ids = (list) => list.map((x) => x.id).sort().join(',');
let hedge = 0;
let hedges = 0;
for (let n = 1; n <= CREATURES.length; n++) {
  const c = generateCase(n);
  const truth = BY_ID[c.creatureId];
  const right = Object.fromEntries(c.sources.map((d) => [d, [c.clues[d].fam]]));
  const pool = candidatesByMarks(right);

  // right stamps give exactly the shortlist the defter used to compute by itself
  ok(ids(pool) === ids(candidates(c, c.sources)), `#${n} ${c.creatureId}: right stamps differ from the old shortlist`);
  ok(pool.some((x) => x.id === truth.id), `#${n}: truth missing under right stamps`);
  ok(candidatesByMarks({}).length === CREATURES.length, 'no stamp must keep all pages');

  for (const d of c.sources) {
    const mine = new Set(truth.traits[d].map((t) => Object.keys(FAMILIES[d]).find((f) => FAMILIES[d][f].of.includes(t))));
    for (const f of Object.keys(FAMILIES[d])) {
      const one = candidatesByMarks({ ...right, [d]: [f] });
      // a stamp the creature has no sign under drops its page, silently
      ok(one.some((x) => x.id === truth.id) === mine.has(f), `#${n} ${d}=${f}: truth ${mine.has(f) ? 'dropped' : 'kept'}`);
      if (f === c.clues[d].fam) continue;
      // hedging with a second stamp never loses the page, and never shrinks the shortlist
      const two = candidatesByMarks({ ...right, [d]: [c.clues[d].fam, f] });
      ok(two.some((x) => x.id === truth.id) && two.length >= pool.length, `#${n} ${d}: hedge with ${f}`);
      hedge += two.length - pool.length;
      hedges++;
    }
  }

  // the verdict's reading agrees with what a stamp costs: right exactly when it keeps the page
  for (const d of c.sources) {
    for (const f of Object.keys(FAMILIES[d])) {
      const keeps = candidatesByMarks({ [d]: [f] }).some((x) => x.id === truth.id);
      ok(reading(c, [d], { [d]: [f] })[0].ok === keeps, `#${n} ${d}=${f}: reading disagrees with the defter`);
    }
  }
  const r = reading(c, c.sources, { ...right, [c.sources[0]]: ['yok'] });
  ok(!r[0].ok && r.slice(1).every((x) => x.ok), `#${n}: reading`);
}

ok(JSON.stringify(cleanMarks({ iz: ['su', 'su', 'uydurma'], yer: ['su'], tanik: [] }, ['iz', 'tanik'])) === '{"iz":["su"]}', 'cleanMarks');
ok(JSON.stringify(cleanMarks(undefined, ['iz'])) === '{}', 'cleanMarks on an old save');

if (errors.length) {
  console.log(errors.slice(0, 20).join('\n'));
  console.log(`${errors.length} error(s)`);
  process.exit(1);
}
console.log(`künye OK · ${checks} checks · a second stamp on one note adds ${(hedge / hedges).toFixed(1)} pages on average`);
