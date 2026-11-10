// The long game around the daily case: rank, seals, the streak and its spare candle, challenge links,
// tomorrow's envelope, the evening reminder. No DOM here (node imports it).
import { CREATURES } from './bestiary.js';
import { TOOLS, MAX_CANDLES } from './traits.js';
import { dateForCaseNo } from './util.js';

/* ---------- rank: what the defter's keeper is called, by pages filled ---------- */

export const RANKS = [
  { at: 0, name: 'Emanetçi' },
  { at: 3, name: 'Çırak' },
  { at: 10, name: 'Kalfa' },
  { at: 20, name: 'Usta' },
  { at: 35, name: 'Ocaklı' },
  { at: 50, name: 'Defterin sahibi' },
];
export const rankIndex = (pages) => RANKS.reduce((best, r, i) => (pages >= r.at ? i : best), 0);
export const rankName = (pages) => RANKS[rankIndex(pages)].name;
export const nextRank = (pages) => RANKS[rankIndex(pages) + 1] || null;

/* ---------- streak: a night counts when the creature was found; one spare candle covers a bad night ---------- */

export const SPARE_EVERY = 7;
const found = (r) => !!r && r.outcome !== 'fail';
export const okDay = (data, n) => !!(data.kept[n] || found(data.results[n]));

export function streakAt(data, todayNo) {
  let n = data.results[todayNo] ? todayNo : todayNo - 1;
  let s = 0;
  while (n >= 1 && okDay(data, n)) { if (found(data.results[n])) s++; n--; }
  return s;
}

export function bestStreak(data, todayNo) {
  let best = 0;
  let run = 0;
  for (let n = 1; n <= todayNo; n++) {
    if (!okDay(data, n)) { run = 0; continue; }
    if (found(data.results[n])) { run++; best = Math.max(best, run); }
  }
  return best;
}

// Yesterday went by without a case: the spare candle, if there is one, keeps the streak.
export function coverMissed(data, todayNo) {
  const n = todayNo - 1;
  if (n < 1 || !data.spare || data.results[n] || data.kept[n] || !okDay(data, n - 1)) return false;
  data.kept[n] = true;
  data.spare -= 1;
  return true;
}

// Tonight's diagnosis was wrong: same candle, same rule.
export function coverFail(data, no) {
  if (!data.spare || data.kept[no] || !okDay(data, no - 1)) return false;
  data.kept[no] = true;
  data.spare -= 1;
  return true;
}

export function earnSpare(data, todayNo) {
  const s = streakAt(data, todayNo);
  if (s === 0 || s % SPARE_EVERY !== 0 || data.spare) return false;
  data.spare = 1;
  return true;
}

const DAYS = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

// The last seven nights, today last. state: none (before the first case) | lit | kept | out | wait (today, still open)
export function week(data, todayNo) {
  const out = [];
  for (let n = todayNo - 6; n <= todayNo; n++) {
    const label = DAYS[new Date(`${dateForCaseNo(n)}T00:00:00Z`).getUTCDay()];
    let state = 'out';
    if (n < 1) state = 'none';
    else if (found(data.results[n])) state = 'lit';
    else if (data.kept[n]) state = 'kept';
    else if (n === todayNo && !data.results[n]) state = 'wait';
    out.push({ no: n, label, state });
  }
  return out;
}

/* ---------- seals ---------- */

export function summary(data, todayNo) {
  const all = [...Object.values(data.results), ...Object.values(data.archive), ...Object.values(data.dev)];
  const wins = all.filter((r) => r.outcome === 'success');
  const caught = Object.keys(data.caught);
  return {
    wins: wins.length,
    parWin: wins.some((r) => MAX_CANDLES - r.candlesLeft <= r.par),
    lastCandle: wins.some((r) => r.candlesLeft === 0),
    tools: new Set(all.flatMap((r) => r.tests || [])).size,
    pages: caught.length,
    caught,
    best: bestStreak(data, todayNo),
    duels: Object.values(data.duels).filter((d) => d.result === 'won').length,
  };
}

const count = (id, name, how, value, need) => ({ id, name, how, prog: (s) => [Math.min(need, value(s)), need] });
const group = (id, name, how, test) => {
  const ids = CREATURES.filter(test).map((c) => c.id);
  return { id, name, how, ids, prog: (s) => [ids.filter((x) => s.caught.includes(x)).length, ids.length] };
};
const trait = (dim, values) => (cr) => cr.traits[dim].some((v) => values.includes(v));

export const SEALS = [
  count('ilk', 'İlk Hüküm', 'Bir vakada hem yaratığı hem köyün sırrını bul.', (s) => s.wins, 1),
  count('usta', 'Usta İşi', 'Bir vakayı usta avcının yakacağı kadar mumla çöz.', (s) => +s.parWin, 1),
  count('sonmum', 'Son Mum', 'Altı mum da bitmişken tam hüküm yaz.', (s) => +s.lastCandle, 1),
  count('sirdas', 'Sırdaş', 'On köyün sırrını çöz.', (s) => s.wins, 10),
  count('yedi', 'Yedi Gece', 'Yedi gece üst üste yaratığı bul.', (s) => s.best, 7),
  count('kirk', 'Kırkı Çıktı', 'Kırk gece üst üste yaratığı bul.', (s) => s.best, 40),
  count('care', 'On Dört Çare', 'Sınamalarda on dört çarenin hepsini dene.', (s) => s.tools, TOOLS.length),
  group('iyeler', 'İyeler', 'Bütün iyeleri avla.', (cr) => /iyesi$/.test(cr.id)),
  group('su', 'Su Başı', 'Suya, kuyuya, denize çıkan bütün yaratıkları avla.', trait('yer', ['su', 'kuyu', 'deniz'])),
  group('yilan', 'Yılan Donu', 'Yılan donunda görünen bütün yaratıkları avla.', trait('tanik', ['yilan'])),
  group('olu', 'Mezardan Kalkanlar', 'Ölü kılığında görünen bütün yaratıkları avla.', trait('tanik', ['olu'])),
  count('cagri', 'Çağrıya Cevap', 'Seni çağıran bir avcıyı geç.', (s) => s.duels, 1),
  count('yari', 'Yarım Defter', 'Yirmi beş sayfayı doldur.', (s) => s.pages, 25),
  count('tam', 'Dolu Defter', 'Elli sayfanın hepsini doldur.', (s) => s.pages, CREATURES.length),
];

// Marks newly earned seals in the save and returns them.
export function syncSeals(data, todayNo) {
  const s = summary(data, todayNo);
  const fresh = SEALS.filter((seal) => {
    const [have, need] = seal.prog(s);
    return have >= need && !data.seals[seal.id];
  });
  fresh.forEach((seal) => { data.seals[seal.id] = true; });
  return fresh;
}

/* ---------- challenge links: ?c=<case>.<candles burned>.<outcome>.<rank> ---------- */

const CODE = { success: 't', partial: 'e', fail: 'y' };
const DECODE = { t: 'success', e: 'partial', y: 'fail' };
const WEIGHT = { success: 2, partial: 1, fail: 0 };

export const challengeCode = (res, pages) => `${res.no}.${MAX_CANDLES - res.candlesLeft}.${CODE[res.outcome]}.${rankIndex(pages)}`;

export function readChallenge(code, todayNo) {
  const m = /^(\d{1,5})\.([0-6])\.([tey])\.([0-5])$/.exec(code || '');
  if (!m) return null;
  const no = Number(m[1]);
  if (no < 1 || no > todayNo) return null;
  return { no, used: Number(m[2]), outcome: DECODE[m[3]], rank: Number(m[4]) };
}

// Finding more beats burning less; among equals, fewer candles wins.
export function duel(mine, theirs) {
  if (mine.outcome === 'fail' && theirs.outcome === 'fail') return 'tie';
  const a = WEIGHT[mine.outcome] * 10 - mine.used;
  const b = WEIGHT[theirs.outcome] * 10 - theirs.used;
  return a > b ? 'won' : a < b ? 'lost' : 'tie';
}

// "3 mumla çözdü" / "3 mumla çözdün"
export function tell(x, person) {
  const you = person === 2;
  if (x.outcome === 'success') return `${x.used === 0 ? 'tek mum yakmadan' : `${x.used} mumla`} çözdü${you ? 'n' : ''}`;
  if (x.outcome === 'partial') return `yaratığı buldu${you ? 'n' : ''}, köyün sırrını kaçırdı${you ? 'n' : ''}`;
  return `yanıldı${you ? 'n' : ''}`;
}

export function challengeText(res, link) {
  const used = MAX_CANDLES - res.candlesLeft;
  const line = res.outcome === 'success'
    ? `${used === 0 ? 'Tek mum yakmadan' : `${used} mumla`} çözdüm. Sen kaç mumla çözersin?`
    : res.outcome === 'partial' ? 'Yaratığı buldum, köyün sırrını kaçırdım. Sen ikisini de bulabilir misin?'
      : 'Bu vakada yanıldım. Sen bulabilir misin?';
  return `Kara Defter · Vaka #${res.no}\n${line}\n${link}`;
}

/* ---------- tomorrow's envelope: the first lines of the next letter ---------- */

const MIN = 90;
const MAX = 200;
const SENTENCE = /[^.?…]+[.?…]+[”’)]*\s*|[^.?…]+$/g;

export function teaser(body) {
  const paras = body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  let i = 0;
  // skip the salutation: one short line that ends in a comma or colon, or has no full stop at all
  while (i < paras.length - 1 && paras[i].length <= 48 && !paras[i].includes('\n') && /[,:]$|^[^.?]*$/.test(paras[i])) i++;
  let out = '';
  for (; i < paras.length && out.length < MIN; i++) {
    for (const line of paras[i].split('\n')) {
      // short lines (report headers, list rows, margin notes) stay whole
      for (const unit of line.length <= 90 ? [line] : line.match(SENTENCE) || [line]) {
        if (out.length >= MIN) return out.trim();
        if (out.length + unit.length > MAX) {
          if (out) return out.trim();
          return `${unit.slice(0, unit.lastIndexOf(' ', MAX - 20)).replace(/[,;:]$/, '')}…`;
        }
        out += unit;
      }
      out = `${out.trimEnd()}\n`;
    }
  }
  return out.trim();
}

/* ---------- evening reminder: a daily calendar entry, since a static page cannot send notifications ---------- */

const REMIND_UTC = '180000'; // 21:00 in Istanbul (UTC+3, no DST)
const REMIND_TITLE = 'Kara Defter: bugünün vakası';

export function reminderICS(url, todayISO) {
  const day = todayISO.replace(/-/g, '');
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Kara Defter//TR', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'UID:gunluk-vaka@kara-defter',
    `DTSTAMP:${day}T000000Z`,
    `DTSTART:${day}T${REMIND_UTC}Z`,
    'DURATION:PT10M',
    'RRULE:FREQ=DAILY',
    `SUMMARY:${REMIND_TITLE}`,
    `DESCRIPTION:Köyden mektup var. ${url}`,
    `URL:${url}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${REMIND_TITLE}`, 'TRIGGER:PT0M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
}

export function reminderGoogleUrl(url, todayISO) {
  const day = todayISO.replace(/-/g, '');
  const q = new URLSearchParams({
    action: 'TEMPLATE', text: REMIND_TITLE, details: `Köyden mektup var. ${url}`,
    dates: `${day}T${REMIND_UTC}Z/${day}T181000Z`, recur: 'RRULE:FREQ=DAILY',
  });
  return `https://calendar.google.com/calendar/render?${q}`;
}
