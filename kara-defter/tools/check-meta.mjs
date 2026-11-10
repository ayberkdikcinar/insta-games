// node tools/check-meta.mjs — the long-game rules: streak and spare candle, seals, challenge links, teasers.
import assert from 'node:assert/strict';
import * as M from '../js/meta.js';
import STORIES from '../js/content/stories/index.js';
import { generateCase } from '../js/cases.js';
import { MAX_CANDLES } from '../js/traits.js';

const blank = () => ({ results: {}, archive: {}, dev: {}, caught: {}, seen: {}, spare: 0, kept: {}, seals: {}, challenge: null, duels: {} });
const win = (no, left = 3, extra = {}) => ({ no, outcome: 'success', candlesLeft: left, par: 3, tests: [], ...extra });
let checks = 0;
const ok = (cond, msg) => { assert.ok(cond, msg); checks++; };
const eq = (a, b, msg) => { assert.deepEqual(a, b, msg); checks++; };

// rank
eq([0, 2, 3, 9, 10, 20, 34, 35, 49, 50].map(M.rankName),
  ['Emanetçi', 'Emanetçi', 'Çırak', 'Çırak', 'Kalfa', 'Usta', 'Usta', 'Ocaklı', 'Ocaklı', 'Defterin sahibi'], 'rank steps');
eq(M.nextRank(50), null, 'no rank after the last');
eq(M.nextRank(9).at, 10, 'next rank');

// streak
{
  const d = blank();
  for (let n = 1; n <= 5; n++) d.results[n] = win(n);
  eq(M.streakAt(d, 5), 5, 'five nights');
  eq(M.streakAt(d, 6), 5, 'today still open keeps yesterday’s streak');
  eq(M.streakAt(d, 7), 0, 'a missed night breaks it');
  d.results[6] = { no: 6, outcome: 'fail', candlesLeft: 0, tests: [] };
  eq(M.streakAt(d, 6), 0, 'a wrong diagnosis breaks it');
  d.results[6] = { no: 6, outcome: 'partial', candlesLeft: 1, tests: [] };
  eq(M.streakAt(d, 6), 6, 'finding the creature without the secret keeps it');
  eq(M.bestStreak(d, 6), 6, 'best');
}

// spare candle: earned at seven, covers one missed night, not two
{
  const d = blank();
  for (let n = 1; n <= 6; n++) { d.results[n] = win(n); ok(!M.earnSpare(d, n), `no spare at ${n}`); }
  d.results[7] = win(7);
  ok(M.earnSpare(d, 7), 'spare at seven');
  eq(d.spare, 1, 'one spare');
  ok(!M.earnSpare(d, 7), 'never two');
  ok(!M.coverMissed(d, 8), 'yesterday was played: nothing to cover');
  ok(M.coverMissed(d, 9), 'night 8 missed: covered');
  eq([d.spare, d.kept[8]], [0, true], 'spare spent');
  eq(M.streakAt(d, 9), 7, 'streak survives, the covered night adds nothing');
  d.results[9] = win(9);
  eq(M.streakAt(d, 9), 8, 'and grows again');
  eq(M.bestStreak(d, 9), 8, 'best runs through the covered night');
  ok(!M.coverMissed(d, 11), 'no spare left');
  eq(M.streakAt(d, 11), 0, 'second gap breaks it');
  eq(M.week(d, 9).map((x) => x.state), ['lit', 'lit', 'lit', 'lit', 'lit', 'kept', 'lit'], 'week strip');
  eq(M.week(d, 10).at(-1).state, 'wait', 'today open');
  eq(M.week(blank(), 3).map((x) => x.state), ['none', 'none', 'none', 'none', 'out', 'out', 'wait'], 'week before launch');
  eq(M.week(blank(), 10).map((x) => x.label).join(' '), 'Çar Per Cum Cmt Paz Pzt Sal', 'weekday labels (case 10 = 2026-11-10, a Tuesday)');
}

// spare candle on a wrong diagnosis, and two missed nights
{
  const d = blank();
  for (let n = 1; n <= 7; n++) d.results[n] = win(n);
  M.earnSpare(d, 7);
  d.results[8] = { no: 8, outcome: 'fail', candlesLeft: 0, tests: [] };
  ok(M.coverFail(d, 8), 'fail covered');
  eq(M.streakAt(d, 8), 7, 'streak kept after a covered fail');
  const e = blank();
  for (let n = 1; n <= 7; n++) e.results[n] = win(n);
  M.earnSpare(e, 7);
  ok(!M.coverMissed(e, 10), 'two nights away: the spare is not wasted');
  eq(e.spare, 1, 'spare kept');
  const f = blank();
  f.spare = 1;
  ok(!M.coverFail(f, 1), 'nothing to protect on the first night');
}

// seals
{
  const d = blank();
  eq(M.syncSeals(d, 1), [], 'none at start');
  d.results[1] = win(1, 3);
  d.caught.albasti = { no: 1 };
  eq(M.syncSeals(d, 1).map((s) => s.id), ['ilk', 'usta'], 'first win at par');
  eq(M.syncSeals(d, 1), [], 'only once');
  d.results[2] = win(2, 0, { tests: ['tuz', 'demir'] });
  eq(M.syncSeals(d, 2).map((s) => s.id), ['sonmum'], 'last candle');
  const groups = Object.fromEntries(M.SEALS.filter((s) => s.ids).map((s) => [s.id, s.ids.length]));
  eq(groups, { iyeler: 8, su: 10, yilan: 4, olu: 4 }, 'group sizes');
  M.SEALS.find((s) => s.id === 'yilan').ids.forEach((id) => { d.caught[id] = { no: 3 }; });
  eq(M.syncSeals(d, 2).map((s) => s.id), ['yilan'], 'group seal');
  d.duels[2] = { result: 'won' };
  eq(M.syncSeals(d, 2).map((s) => s.id), ['cagri'], 'duel seal');
  ok(new Set(M.SEALS.map((s) => s.id)).size === M.SEALS.length, 'unique seal ids');
}

// challenge links
{
  const res = { no: 10, outcome: 'success', candlesLeft: 3 };
  eq(M.challengeCode(res, 12), '10.3.t.2', 'code');
  eq(M.readChallenge('10.3.t.2', 10), { no: 10, used: 3, outcome: 'success', rank: 2 }, 'round trip');
  for (const bad of ['', null, '11.3.t.2', '0.3.t.2', '10.7.t.2', '10.3.x.2', '10.3.t.6', '10.3.t', '10.3.t.2.1', '<b>', '10.3.t.2 ']) {
    eq(M.readChallenge(bad, 10), null, `rejects ${JSON.stringify(bad)}`);
  }
  const s = (used) => ({ outcome: 'success', used });
  eq(M.duel(s(2), s(3)), 'won', 'fewer candles wins');
  eq(M.duel(s(3), s(3)), 'tie', 'same is a tie');
  eq(M.duel(s(4), s(3)), 'lost', 'more candles loses');
  eq(M.duel({ outcome: 'partial', used: 1 }, s(6)), 'lost', 'the secret outweighs candles');
  eq(M.duel({ outcome: 'partial', used: 5 }, { outcome: 'fail', used: 1 }), 'won', 'finding the creature beats a miss');
  eq(M.duel({ outcome: 'fail', used: 1 }, { outcome: 'fail', used: 6 }), 'tie', 'two misses tie');
  eq(M.tell(s(3), 3), '3 mumla çözdü');
  eq(M.tell(s(0), 2), 'tek mum yakmadan çözdün');
  eq(M.tell({ outcome: 'partial', used: 2 }, 2), 'yaratığı buldun, köyün sırrını kaçırdın');
  eq(M.tell({ outcome: 'fail', used: 2 }, 3), 'yanıldı');
  ok(M.challengeText(res, 'https://x/?c=10.3.t.2').endsWith('https://x/?c=10.3.t.2'), 'text ends with the link');
}

// teasers: every letter gives a readable opening that is not just a salutation
for (const [id, story] of Object.entries(STORIES)) {
  const t = M.teaser(story.letter.body);
  ok(t.length >= 60 && t.length <= 215, `${id}: teaser length ${t.length}`);
  ok(!/^(Kara Defter|Efendim|Beyim|Muhterem|Sayın|Hürmetli)[^.]*,$/.test(t.split('\n')[0]), `${id}: teaser starts with a salutation`);
  ok(story.letter.body.replace(/\s+/g, ' ').includes(t.replace(/…$/, '').replace(/\s+/g, ' ').slice(0, 60)), `${id}: teaser is not from the letter`);
}
if (process.argv.includes('--teasers')) {
  for (const [id, story] of Object.entries(STORIES)) console.log(`\n[${id}]\n${M.teaser(story.letter.body)}`);
}

// reminder
{
  const ics = M.reminderICS('https://example.test/kd/', '2026-11-10');
  ok(ics.includes('DTSTART:20261110T180000Z') && ics.includes('RRULE:FREQ=DAILY') && ics.endsWith('END:VCALENDAR'), 'ics');
  ok(ics.split('\r\n').every((l) => l.length <= 75), 'ics lines within 75 octets');
  ok(M.reminderGoogleUrl('https://example.test/kd/', '2026-11-10').includes('dates=20261110T180000Z%2F20261110T181000Z'), 'google url');
}

// a case's stored result has what the seals read
{
  const c = generateCase(1);
  ok(Number.isInteger(c.par) && c.par >= 1 && c.par <= MAX_CANDLES, 'par present');
}

console.log(`meta OK · ${checks} checks · ${M.SEALS.length} seals · ${M.RANKS.length} ranks`);
