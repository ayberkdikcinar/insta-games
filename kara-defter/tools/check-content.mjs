// Content lint: node tools/check-content.mjs [file-substring]
// Checks bestiary-*.js files against the roster and clues-generic.js against the trait list.
import { readdirSync } from 'node:fs';
import { ROSTER } from '../js/content/roster.js';
import { CLUE_DIMS, TRAITS, TRAIT } from '../js/traits.js';

const only = process.argv[2] || '';
const dir = new URL('../js/content/', import.meta.url);
const files = readdirSync(dir).filter((f) => /^(bestiary-.*|clues-generic)\.js$/.test(f) && f.includes(only)).sort();
const BY = Object.fromEntries(ROSTER.map((c) => [c.id, c]));
let errors = 0;
let warnings = 0;
const err = (f, m) => { errors++; console.error(`ERROR ${f}: ${m}`); };
const warn = (f, m) => { warnings++; console.warn(`warn  ${f}: ${m}`); };

const ALLOWED = /^\{(K|T|Y|D)(:gen)?\}$|^\{koy\}$/;
function lintText(f, where, t) {
  if (typeof t !== 'string' || !t.trim()) return err(f, `${where}: empty text`);
  for (const m of t.match(/\{[^}]*\}/g) || []) if (!ALLOWED.test(m)) err(f, `${where}: bad placeholder ${m}`);
  if (/\}['’]/.test(t)) err(f, `${where}: suffix written after a placeholder (use :gen or rephrase): ${t.slice(0, 60)}`);
  if (/["]/.test(t)) warn(f, `${where}: straight double quote`);
  if (/[^a-zA-ZçğıöşüÇĞİÖŞÜâîûÂÎÛ]'[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(t) || /[a-zA-Zçğıöşü]'[a-zçğıöşü]/.test(t)) warn(f, `${where}: straight apostrophe`);
  if (/!/.test(t)) warn(f, `${where}: exclamation mark`);
  if (/[{}]/.test(t.replace(/\{[^}]*\}/g, ''))) err(f, `${where}: stray brace`);
}

const TOOL_WORDS = {
  demir: /demir|bıçak|makas|nal\b|nalı/i, kurdele: /\bal\b|kırmızı|kurdele|çaput/i, soz: /destur|besmele|dua|selam|söz/i,
  ates: /ateş|ocak|meşale|alev/i, kalbur: /kalbur/i, igne: /çuvaldız|iğne/i, safak: /şafak|ezan|horoz|gün ağar|sabah/i,
  tuz: /tuz/i, adak: /adak|ekmek|süt|yağ|ikram|pay/i, ayna: /ayna/i, ardic: /ardıç|tütsü/i, kursun: /kurşun/i,
  sessizlik: /sus|cevap ver|sır|adını söyle|ses çıkarma|konuşma/i, supurge: /süpürge/i,
};

const seen = new Set();
for (const file of files) {
  const mod = (await import(new URL(file, dir))).default;
  if (file === 'clues-generic.js') {
    for (const d of CLUE_DIMS) {
      const block = mod[d.id] || {};
      for (const t of TRAITS[d.id]) {
        const list = block[t.id];
        if (!Array.isArray(list) || list.length < 2) { err(file, `${d.id}.${t.id}: needs ≥2 generic texts`); continue; }
        list.forEach((x, i) => {
          lintText(file, `${d.id}.${t.id}[${i}]`, x);
          if (d.id === 'tanik' && !x.startsWith('{T}: “')) err(file, `${d.id}.${t.id}[${i}]: must start with {T}: “`);
          if (d.id === 'sebep' && !x.startsWith('{Y}: “')) err(file, `${d.id}.${t.id}[${i}]: must start with {Y}: “`);
        });
      }
      for (const k of Object.keys(block)) if (!TRAIT[d.id][k]) err(file, `${d.id}.${k}: unknown trait`);
    }
    for (const k of ['dert', 'closing', 'opening']) if (!mod.letters?.[k]) err(file, `letters.${k} missing`);
    if (mod.letters?.dert) for (const t of TRAITS.dert) {
      const l = mod.letters.dert[t.id];
      if (!Array.isArray(l) || l.length < 3) err(file, `letters.dert.${t.id}: needs ≥3`);
      else l.forEach((x, i) => lintText(file, `letters.dert.${t.id}[${i}]`, x));
    }
    continue;
  }
  for (const [id, c] of Object.entries(mod)) {
    const f = `${file}#${id}`;
    const r = BY[id];
    if (!r) { err(f, 'not in roster'); continue; }
    if (seen.has(id)) err(f, 'defined twice');
    seen.add(id);
    if (!Array.isArray(c.aka) || c.aka.length < 1 || c.aka.length > 3) err(f, 'aka: 1–3 names');
    if (!c.region) err(f, 'region missing');
    if (!c.epithet || c.epithet.split(/\s+/).length > 8) err(f, 'epithet missing or longer than 8 words');
    const words = (c.lore || '').split(/\s+/).length;
    if (!c.lore?.startsWith('Derler ki')) err(f, 'lore must start with “Derler ki”');
    if (words < 80 || words > 170) warn(f, `lore is ${words} words (aim 90–150)`);
    for (const t of r.tools) if (!TOOL_WORDS[t].test(c.lore || '')) warn(f, `lore never mentions tool ${t}`);
    lintText(f, 'lore', c.lore || 'x');
    for (const d of CLUE_DIMS) {
      const list = c.clues?.[d.id];
      if (!Array.isArray(list)) { err(f, `clues.${d.id} missing`); continue; }
      for (const v of r.traits[d.id]) {
        const n = list.filter((x) => x.trait === v).length;
        if (n < 2) err(f, `clues.${d.id}: trait ${v} has ${n} texts, needs ≥2`);
      }
      list.forEach((x, i) => {
        const w = `clues.${d.id}[${i}]`;
        if (!r.traits[d.id].includes(x.trait)) err(f, `${w}: trait ${x.trait} is not one of ${r.traits[d.id].join(', ')}`);
        lintText(f, w, x.t);
        if (d.id === 'tanik' && !x.t?.startsWith('{T}: “')) err(f, `${w}: must start with {T}: “`);
        if (d.id === 'sebep' && !x.t?.startsWith('{Y}: “')) err(f, `${w}: must start with {Y}: “`);
        if (d.id !== 'kurban' && /\{K(:gen)?\}\s+(kocası|karısı|gelin|oğlu|kızı)|(gelin|lohusa|delikanlı|çoban|kız)\s+\{K\}/i.test(x.t || '')) warn(f, `${w}: assumes {K}'s role outside a kurban clue`);
      });
    }
    for (const k of ['intro', 'success', 'partial']) {
      const l = c.hunt?.[k];
      if (!Array.isArray(l) || l.length !== 2) err(f, `hunt.${k}: exactly 2 lines`);
      else l.forEach((x, i) => lintText(f, `hunt.${k}[${i}]`, x));
    }
  }
}
if (!only) {
  const missing = ROSTER.filter((c) => !seen.has(c.id)).map((c) => c.id);
  if (missing.length) console.log(`no prose yet: ${missing.join(', ')}`);
}
console.log(`\n${files.length} file(s), ${seen.size} creatures, ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
