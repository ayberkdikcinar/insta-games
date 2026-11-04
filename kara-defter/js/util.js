// Seeded randomness, Istanbul calendar, Turkish grammar helpers. No DOM here (node imports it).

export function hashString(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const rngFor = (key) => mulberry32(hashString(key));
export const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];

export const LAUNCH = '2026-11-01'; // Vaka #1

export function istanbulToday(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now);
}

function dayIndex(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
}

export function caseNoForDate(iso) {
  return Math.max(1, dayIndex(iso) - dayIndex(LAUNCH) + 1);
}

export function dateForCaseNo(n) {
  return new Date((dayIndex(LAUNCH) + n - 1) * 86400000).toISOString().slice(0, 10);
}

const MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

export function formatDateTR(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

// Istanbul has been fixed at UTC+3 since 2016.
export function msUntilNextCase(now = Date.now()) {
  const [y, m, d] = istanbulToday(new Date(now)).split('-').map(Number);
  return Math.max(0, Date.UTC(y, m - 1, d + 1) - 3 * 3600 * 1000 - now);
}

export function formatCountdown(ms) {
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
    .map((v) => String(v).padStart(2, '0')).join(':');
}

// Genitive suffix for a proper name: Zehra'nın, Osman'ın, Gülsüm'ün, Döndü'nün.
const VOWELS = 'aeıioöuüâîû';
const HARMONY = { a: 'ı', ı: 'ı', â: 'ı', e: 'i', i: 'i', î: 'i', o: 'u', u: 'u', û: 'u', ö: 'ü', ü: 'ü' };

export function genitive(name) {
  const lower = name.toLocaleLowerCase('tr');
  let last = 'e';
  for (let i = lower.length - 1; i >= 0; i--) {
    if (VOWELS.includes(lower[i])) { last = lower[i]; break; }
  }
  const endsInVowel = VOWELS.includes(lower[lower.length - 1]);
  return `${name}’${endsInVowel ? 'n' : ''}${HARMONY[last]}n`;
}
