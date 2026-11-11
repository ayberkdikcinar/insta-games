// Hand-written story checks: node tools/check-stories.mjs
// Structure, agreement with the roster, a shortlist only tests can settle, name leaks, banned phrases, repetition.
import { readFileSync } from 'node:fs';
import { CREATURES, BY_ID } from '../js/bestiary.js';
import { CLUE_DIMS, FAMILY_OF, FAMILIES, TRAIT, TOOL_BY_ID } from '../js/traits.js';
import STORIES from '../js/content/stories/index.js';

const plan = JSON.parse(readFileSync(new URL('./story-plan.json', import.meta.url)));
const dims = CLUE_DIMS.map((d) => d.id);
let errors = 0; let warnings = 0;
const err = (id, m) => { errors++; console.error(`ERR  ${id}: ${m}`); };
const warn = (id, m) => { warnings++; console.warn(`warn ${id}: ${m}`); };
const words = (s) => (s.match(/\S+/g) || []).length;
const lower = (s) => s.toLocaleLowerCase('tr');
const BANNED = ['gizemli', 'kanını donduran', 'kanı dondu', 'karanlığın derinlik', 'ürpertici bir', 'tüyler ürpertici', 'sonsuz karanlık', 'sizden başka kapı', 'yeter ki gelin', 'kelimelerle anlat'];
const TOOL_WORDS = { demir: /demir|makas|bıçak|nal\b|nalı|orak|balta|çivi|maşa/, kurdele: /kurdele|al bez|al yazma|kırmızı bez|al çaput|al ip|al iplik/, soz: /destur|besmele|dua|selam|okudu|okuyor|okunuyor|okut|ayet/, ates: /ateş|ocak|ocağ|meşale|alev|harla/, kalbur: /kalbur/, igne: /çuvaldız|iğne/, safak: /şafak|horoz|ezan|sabah/, tuz: /tuz/, adak: /adak|ekmek|süt|yağ|lokma|pay/, ayna: /ayna/, ardic: /ardıç|tütsü/, kursun: /kurşun/, sessizlik: /sus|sessiz|cevap verm|ses etm|ağzını aç|ad anma/, supurge: /süpürge/ };

const seenVillage = new Map(); const openers = new Map(); const nameFreq = new Map(); let nazire = 0;
for (const cr of CREATURES) {
  const id = cr.id; const s = STORIES[id];
  if (!s) { err(id, 'missing'); continue; }
  const p = plan[id];
  if (s.village !== p.village) err(id, `village ${s.village} ≠ plan ${p.village}`);
  if (seenVillage.has(s.village)) err(id, `village reused from ${seenVillage.get(s.village)}`); seenVillage.set(s.village, id);
  if (JSON.stringify(s.open) !== JSON.stringify(p.open)) err(id, 'open differs from plan');
  for (const d of dims) {
    if (s.chosen[d] !== p.chosen[d]) err(id, `chosen.${d} differs from plan`);
    if (!cr.traits[d].includes(s.chosen[d])) err(id, `chosen.${d} not on roster`);
  }
  const closedDims = dims.filter((d) => !s.open.includes(d));
  for (const d of s.open) if (!s.clues?.[d]) err(id, `no clue for ${d}`);
  for (const d of Object.keys(s.clues || {})) if (!s.open.includes(d)) err(id, `clue for closed ${d}`);
  for (const d of closedDims) if (!s.closed?.[d]) err(id, `no closed reason for ${d}`);
  for (const d of Object.keys(s.closed || {})) if (s.open.includes(d)) err(id, `closed reason for open ${d}`);
  if (s.gidisat?.length !== 3) err(id, 'gidisat needs 3 lines');
  if (!s.open.includes(s.yuzlesme?.after)) err(id, 'yuzlesme.after is not open');
  if (!s.yuzlesme?.ask || !s.yuzlesme?.text) err(id, 'yuzlesme incomplete');
  if (!s.sir?.q || !s.sir?.right || s.sir?.wrong?.length !== 2) err(id, 'sir incomplete');
  for (const k of ['sahne', 'kovma', 'yanlis', 'kenar']) if (!s[k]) err(id, `no ${k}`);
  for (const k of ['tam', 'eksik', 'gec']) if (!s.cevap?.[k]) err(id, `no cevap.${k}`);
  if (!s.letter?.body || !s.letter?.sign) { err(id, 'letter incomplete'); continue; }

  const exact = CREATURES.filter((x) => s.open.every((d) => x.traits[d].includes(s.chosen[d])));
  const fam = CREATURES.filter((x) => s.open.every((d) => x.traits[d].some((t) => FAMILY_OF[d][t] === FAMILY_OF[d][s.chosen[d]])));
  if (exact.length < 2 || exact.length > 4) err(id, `shortlist ${exact.length}`);
  if (fam.length > 8) err(id, `family pool ${fam.length}`);

  const pre = [s.letter.body, s.letter.sign, ...Object.values(s.clues), ...Object.values(s.closed), ...s.gidisat, s.yuzlesme.ask, s.yuzlesme.text, s.sir.q, s.sir.right, ...s.sir.wrong];
  const post = [s.sahne, s.kovma, s.yanlis, s.cevap.tam, s.cevap.eksik, s.cevap.gec, s.kenar];
  const all = [...pre, ...post];
  for (const n of [cr.name, ...(cr.aka || [])]) for (const t of pre) if (lower(t).includes(lower(n))) err(id, `name leak "${n}": ${t.slice(0, 70)}`);
  for (const t of all) {
    if (/["']/.test(t)) err(id, `straight quote: ${t.slice(0, 70)}`);
    if (t.includes('!')) err(id, `exclamation: ${t.slice(0, 70)}`);
    if (t.includes('*')) err(id, `literal asterisk: ${t.slice(0, 70)}`);
    if (t.includes('...') || t.includes('…')) warn(id, `ellipsis: ${t.slice(0, 70)}`);
    if (/—/.test(t)) warn(id, `em dash: ${t.slice(0, 70)}`);
    for (const b of BANNED) if (lower(t).includes(b)) err(id, `banned "${b}"`);
  }
  const joined = all.join(' ');
  const sanki = (lower(joined).match(/\bsanki\b/g) || []).length;
  if (sanki > 2) warn(id, `sanki ×${sanki}`);
  const degil = (joined.match(/ değil, /g) || []).length;
  if (degil > 2) warn(id, `"değil," ×${degil}`);
  const limit = (name, t, lo, hi) => { const n = words(t); if (n < lo || n > hi) warn(id, `${name}: ${n} words (want ${lo}–${hi})`); };
  limit('letter', s.letter.body, 45, 170);
  for (const [d, t] of Object.entries(s.clues)) limit(`clue ${d}`, t, 35, 110);
  // a note shows its sign; it does not say it in the ledger's own words, or the player has nothing left to read
  for (const [d, t] of Object.entries(s.clues)) {
    const sign = TRAIT[d][s.chosen[d]].label;
    const stamp = FAMILIES[d][FAMILY_OF[d][s.chosen[d]]].label;
    for (const part of [...sign.split(/[,;]/), ...stamp.split(/[,;]/)].map((x) => lower(x.trim()))) {
      // one plain noun (kuyu, yılan, "bir kadın") is how a villager would say it; a phrase of the ledger's is not
      if (part.split(' ').filter((w) => w !== 'bir' && w !== 've').length >= 2 && lower(t).includes(part)) err(id, `clue ${d} quotes the ledger: "${part}"`);
    }
  }
  limit('yuzlesme', s.yuzlesme.text, 30, 90); limit('sahne', s.sahne, 30, 100); limit('kovma', s.kovma, 25, 75); limit('yanlis', s.yanlis, 20, 75);
  limit('tam', s.cevap.tam, 30, 110); limit('eksik', s.cevap.eksik, 15, 65); limit('kenar', s.kenar, 3, 26);
  for (const t of cr.tools) if (!TOOL_WORDS[t].test(lower(s.kovma))) warn(id, `kovma does not show ${TOOL_BY_ID[t].name}`);
  const [a, b, c] = [s.sir.right, ...s.sir.wrong].map(words);
  if (a > Math.max(b, c) * 1.6) warn(id, 'sir.right much longer than the wrong options');
  const open = s.letter.body.split(/\s+/).slice(0, 5).join(' ');
  if (openers.has(open)) warn(id, `letter opens like ${openers.get(open)}`); openers.set(open, id);
  if (/Nazire/.test(joined)) nazire++;
  for (const m of joined.matchAll(/\b([A-ZÇĞİÖŞÜ][a-zçğıöşü]{2,})\b(?= (Kadın|Hanım|Efendi|Ağa|Usta|Dede|Nine|Bakkal|Muhtar|Ebe|Çavuş))/g)) nameFreq.set(m[1], (nameFreq.get(m[1]) || new Set()).add(id));
}
console.log(`${Object.keys(STORIES).length} stories · Nazire in ${nazire}`);
console.log('titled names in 3+ stories:', [...nameFreq].filter(([, v]) => v.size >= 3).map(([k, v]) => `${k}×${v.size}`).join(' ') || 'none');
console.log(`${errors} error(s), ${warnings} warning(s)`);
if (errors) process.exit(1);
