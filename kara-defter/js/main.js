import { CREATURES, BY_ID } from './bestiary.js';
import { CLUE_DIMS, DIMS, TOOLS, TOOL_BY_ID, MAX_CANDLES } from './traits.js';
import { generateCase, candidates, famLabel, traitLabel, testResult, fitsTests } from './cases.js';
import { BACK_NOTES } from './content/nazire.js';
import { istanbulToday, caseNoForDate, formatDateTR, msUntilNextCase, formatCountdown } from './util.js';
import * as store from './store.js';
import { silhouette, plate, candleRow } from './art.js';
import { prepareCard, shareCard, returnUrl, outcomeLine, toast, copyText } from './share.js';
import {
  RANKS, rankIndex, rankName, nextRank, SPARE_EVERY, streakAt, bestStreak, coverMissed, coverFail, earnSpare, week,
  SEALS, summary, syncSeals, challengeCode, readChallenge, duel, tell, challengeText, teaser, reminderICS, reminderGoogleUrl,
} from './meta.js';

const app = document.getElementById('app');
const sheet = document.getElementById('sheet');
const huntEl = document.getElementById('hunt');
const modal = document.getElementById('modal');
const drawerEl = document.getElementById('drawer');
const duskEl = document.getElementById('dusk');

const params = new URLSearchParams(location.search);
if (params.has('reset')) {
  store.clear();
  params.delete('reset');
  const q = params.toString();
  history.replaceState(null, '', location.pathname + (q ? `?${q}` : ''));
}
const todayISO = istanbulToday();
const todayNo = caseNoForDate(todayISO);
const devNo = (() => {
  const n = parseInt(params.get('vaka'), 10);
  return Number.isFinite(n) && n >= 1 ? n : null;
})();
// A friend's link: ?c=<case>.<candles burned>.<outcome>.<rank>. Read once, then kept in the save.
const challengeIn = devNo ? null : readChallenge(params.get('c'), todayNo);
if (params.has('c')) {
  params.delete('c');
  const q = params.toString();
  history.replaceState(null, '', location.pathname + (q ? `?${q}` : ''));
}

let data = store.load();
let view = 'home';
let play = null; // { c, mode, used, tests, order, struck, diagnosis, verdict, fresh, showRest, letterOpen }
let drawerState = null; // { kind: 'page', ids, i } or { kind: 'tools' }
const wide = window.matchMedia('(min-width: 980px)');
let burning = -1;
let lastResult = null;
let lastGains = []; // what the last verdict earned: a new page, a seal, a rank
let bootNote = ''; // one line under the streak for this visit
let homeDuel = null; // a challenge for a case already played: settled on arrival, shown on the home screen
let notesOpen = false;
let installEvt = null;
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; });

const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const persist = () => store.save(data);
const toolNames = (ids) => ids.map((t) => TOOL_BY_ID[t].name).join(' + ');
const DIM = Object.fromEntries(DIMS.map((d) => [d.id, d]));
const caughtCount = () => Object.keys(data.caught).length;
const known = (id) => !!(data.caught[id] || data.seen[id]);
const modeLabel = (mode) => (mode === 'archive' ? ' · arşiv' : mode === 'dev' ? ' · deneme' : '');
const bucket = (mode) => (mode === 'archive' ? data.archive : mode === 'dev' ? data.dev : data.results);
const resultFor = (no) => data.results[no] || data.archive[no] || null;

const currentStreak = () => streakAt(data, todayNo); // finding the creature keeps the streak
const nextNote = (pages) => BACK_NOTES.find((n) => n.at > pages) || null;
const challengeLink = (res) => `${returnUrl()}?c=${challengeCode(res, caughtCount())}`;

function unopened() {
  let k = 0;
  for (let n = 1; n < todayNo; n++) if (!resultFor(n)) k++;
  return k;
}

function stats() {
  const rs = Object.values(data.results);
  const best = bestStreak(data, todayNo);
  const hist = Array(MAX_CANDLES + 1).fill(0);
  rs.filter((r) => r.outcome === 'success').forEach((r) => { hist[r.candlesLeft]++; });
  return {
    played: rs.length,
    won: rs.filter((r) => r.outcome === 'success').length,
    partial: rs.filter((r) => r.outcome === 'partial').length,
    streak: currentStreak(),
    best,
    hist,
  };
}

function shareInfo(res) {
  return {
    no: res.no, date: res.date, village: res.village, outcome: res.outcome, candlesLeft: res.candlesLeft,
    streak: res.mode === 'daily' ? currentStreak() : 0, pages: caughtCount(), total: CREATURES.length,
    url: returnUrl(), mode: res.mode, tests: (res.tests || []).length,
    rank: rankName(caughtCount()), link: res.mode === 'dev' ? returnUrl() : challengeLink(res),
  };
}

/* ---------- the long game: streak strip, challenge, tomorrow's envelope, gains ---------- */

const FLAME = '<svg viewBox="0 0 30 30" aria-hidden="true"><path d="M15 3c4 7 6.5 11.5 6.5 15a6.5 6.5 0 0 1-13 0c0-3.5 2.5-8 6.5-15z"/></svg>';
const WEEK_ALT = { lit: 'yaratık bulundu', kept: 'yedek mum korudu', out: 'boş geçti', wait: 'bu gece', none: '' };

function weekHTML() {
  return `<ol class="week" aria-label="Son yedi gece">${week(data, todayNo).map((d) => `<li class="wk wk-${d.state}${d.no === todayNo ? ' wk-today' : ''}" title="${WEEK_ALT[d.state]}">${FLAME}<span>${d.label}</span></li>`).join('')}</ol>`;
}

function streakHTML() {
  const s = currentStreak();
  const spare = data.spare ? ' · Yedek mum <b>1</b>' : s > 0 ? ` · yedek muma ${SPARE_EVERY - (s % SPARE_EVERY)} gün` : '';
  return `${weekHTML()}<p class="streak">Seri <b>${s}</b> gün${spare}</p>${bootNote ? `<p class="streak-note">${bootNote}</p>` : ''}`;
}

const theirs = (ch) => `${ch.outcome === 'success' ? 'bu vakayı' : 'bu vakada'} ${tell(ch, 3)}`;

function callHTML() {
  const ch = data.challenge;
  return `<aside class="call">
    <p class="kicker">Çağrı var · Vaka #${ch.no}</p>
    <p class="call-line">${RANKS[ch.rank].name} rütbesinde bir avcı ${theirs(ch)}. ${ch.outcome === 'success' ? 'Daha az mumla çözebilir misin?' : 'Sen çözebilir misin?'}</p>
    <button class="btn btn-ink" data-act="call-start">${ch.no === todayNo ? 'Çağrıyı kabul et' : 'Vakayı arşivden aç'}</button>
    <button class="link" data-act="call-drop">Çağrıyı bırak</button>
  </aside>`;
}

function duelHTML(no) {
  const d = data.duels[no];
  const mine = resultFor(no);
  if (!d || !mine) return '';
  const me = { outcome: mine.outcome, used: MAX_CANDLES - mine.candlesLeft };
  const end = d.result === 'won' ? 'Geçtin.' : d.result === 'tie' ? 'Berabere.' : 'Bu sefer o önde.';
  return `<aside class="call call-${d.result}">
    <p class="kicker">Çağrı · Vaka #${no}</p>
    <p class="call-line">Seni çağıran avcı ${tell(d, 3)}. Sen ${tell(me, 2)}. <b>${end}</b></p>
    <button class="btn btn-ghost" data-act="call-send" data-no="${no}">Cevabını gönder</button>
  </aside>`;
}

// The next letter is already in the post: its village and its first lines, sealed until midnight.
function tomorrowHTML() {
  const t = generateCase(todayNo + 1);
  return `<aside class="tomorrow">
    ${pulHTML(todayNo + 1)}
    <p class="kicker">Yarının zarfı</p>
    <p class="tomorrow-from">${esc(t.village)} köyünden. Mühür gece yarısı çözülür; kâğıdın kıvrımından şu kadarı okunuyor:</p>
    <p class="tomorrow-peek">${esc(teaser(t.letter.body))}</p>
    <p class="next">Zarf <span data-countdown>${formatCountdown(msUntilNextCase())}</span> sonra açılır.</p>
  </aside>`;
}

function goalLine() {
  const pages = caughtCount();
  const r = nextRank(pages);
  const n = nextNote(pages);
  const parts = [];
  if (r) parts.push(`${r.name} rütbesine ${r.at - pages} sayfa`);
  if (n) parts.push(`${parts.length ? 'defterin' : 'Defterin'} arkasındaki nota ${n.at - pages} sayfa`);
  return parts.length ? `${parts.join(', ')} kaldı.` : '';
}

function gainsHTML() {
  const goal = goalLine();
  if (!lastGains.length && !goal) return '';
  return `<section class="gains">
    ${lastGains.length ? `<ul>${lastGains.map((g) => `<li>${g}</li>`).join('')}</ul>` : ''}
    ${goal ? `<p class="goal">${goal}</p>` : ''}
  </section>`;
}

/* ---------- screens ---------- */

// The label pasted on the ledger's cover.
function masthead() {
  return `<header class="cover-label">
    <p class="label-title">Kara Defter</p>
    <p class="label-sub">Köylerden gelen vakalar, her gün bir tane</p>
  </header>`;
}

// A stamp with the case number, and the village's postmark.
const pulHTML = (no) => `<span class="pul" aria-hidden="true"><span class="pul-in">${FLAME}<b>${no}</b><i>VAKA</i></span></span>`;

function postmarkSVG(village, iso, id) {
  const [y, m, d] = iso.split('-');
  return `<svg class="postmark" viewBox="0 0 150 100" aria-hidden="true">
    <defs><path id="pm-${id}" d="M19 50 a31 31 0 0 1 62 0"/></defs>
    <circle cx="50" cy="50" r="42"/><circle cx="50" cy="50" r="27"/>
    <text class="pm-name"><textPath href="#pm-${id}" startOffset="50%" text-anchor="middle">${esc(village.toLocaleUpperCase('tr'))}</textPath></text>
    <text class="pm-date" x="50" y="55" text-anchor="middle">${d}.${m}</text>
    <text class="pm-year" x="50" y="86" text-anchor="middle">${y}</text>
    <path class="pm-wave" d="M96 32q7-6 14 0t14 0t14 0t14 0M96 44q7-6 14 0t14 0t14 0t14 0M96 56q7-6 14 0t14 0t14 0t14 0M96 68q7-6 14 0t14 0t14 0t14 0"/>
  </svg>`;
}

function renderHome() {
  const res = data.results[todayNo];
  const c = generateCase(todayNo);
  const inProgress = data.inProgress && data.inProgress.no === todayNo && data.inProgress.mode === 'daily';
  const pages = caughtCount();
  const note = nextNote(pages);
  const open = unopened();
  const played = Object.keys(data.results).length + Object.keys(data.archive).length;
  let today;
  if (res) {
    const cr = BY_ID[res.creature];
    today = `
      <div class="closed">
        <p class="kicker">Vaka ${todayNo} kapandı</p>
        <h1 class="title">${esc(outcomeLine(res))}</h1>
        <p class="lede">${esc(c.village)} köyündeki iş ${res.outcome === 'fail' ? 'çözülemedi' : 'bitti'}: <b>${cr.name}</b>.</p>
        <div class="candles candles-sm">${candleRow(MAX_CANDLES, res.candlesLeft)}</div>
        <button class="btn btn-blood" data-act="share-today">Sonucu paylaş</button>
        <button class="btn btn-ghost" data-act="call-send" data-no="${todayNo}">Bir arkadaşını çağır</button>
      </div>
      ${tomorrowHTML()}`;
  } else {
    today = `
      <button class="envelope" data-act="start">
        <span class="env-post" aria-hidden="true">${postmarkSVG(c.village, todayISO, 'bugun')}${pulHTML(todayNo)}</span>
        <span class="env-to">Kara Defter’in sahibine</span>
        <span class="env-from">Gönderen: ${esc(c.village)} köyü</span>
        <span class="btn btn-blood env-open">${inProgress ? 'Vakaya dön' : 'Mektubu aç'}</span>
      </button>
      <p class="cover-note">Altı mumun var. Köyde bakabildiğin yerlere bak, geceye bir sınama bırak. Defterdeki elli sayfadan doğrusunu bul, hükmünü yaz.</p>`;
  }
  app.innerHTML = `
    ${masthead()}
    <section class="today">${data.challenge ? callHTML() : homeDuel ? duelHTML(homeDuel) : ''}${today}</section>
    ${streakHTML()}
    <nav class="rows">
      <button class="row" data-act="defter"><span>Defter</span><em>${pages}/${CREATURES.length} sayfa${note ? ` · arkadaki nota ${note.at - pages} sayfa` : ' dolu'}</em></button>
      <button class="row" data-act="archive"><span>Arşiv</span><em>${open ? `Açılmamış ${open} vaka` : 'Geçmiş vakalar'}</em></button>
      <button class="row" data-act="stats"><span>Sicil</span><em>${rankName(pages)} · ${Object.keys(data.seals).length}/${SEALS.length} mühür</em></button>
      ${played ? '<button class="row" data-act="keep"><span>Hatırlatma</span><em>Her akşam dokuzda</em></button>' : ''}
    </nav>
    <details class="howto">
      <summary>Nasıl oynanır?</summary>
      ${howtoList()}
    </details>`;
  if (res) prepareCard(shareInfo(res)).catch(() => {});
}

function howtoList() {
  return `<ol>
    <li>Her gün herkes aynı vakayı oynar. Yeni vaka İstanbul saatiyle gece yarısı gelir.</li>
    <li>Altı mumun var. Her soruşturma bir mum yakar. Her vakada yalnızca bazı kaynaklar açıktır; yağmur izi siler, tanık susar.</li>
    <li>Her not defterde bir işarete karşılık gelir. Defter, notlarına kabaca uyan sayfaları ayırır; ayrıntıyı okuyup kalanları sen elersin.</li>
    <li>Sayfalar arasında kaldıysan <b>Sınama</b> yap: geceye tuz, demir, ateş gibi bir şey bırak. İşleyip işlemediği, hangi sayfanın doğru olduğunu ele verir. Bir sınama da bir mumdur.</li>
    <li>Her köyde biri bir şey saklıyor. Bir şey bulunca yüzleşebilirsin; bunun mumu yanmaz.</li>
    <li>Emin olunca hükmünü yaz: gelen neydi, köy neyi saklıyordu. Oyalandıkça köyde işler kötüleşir. Haftalar sonra köyden bir mektup gelir.</li>
    <li>Yaratığı bulduğun her gün serin uzar. Yedi günde bir yedek mum kazanırsın; kaçırdığın ya da yanıldığın bir geceyi o kurtarır.</li>
  </ol>`;
}

function letterHTML(c) {
  const foldable = spent() > 0;
  const folded = foldable && !play.letterOpen;
  return `<article class="letter${c.official ? ' letter-official' : ''}${folded ? ' folded' : ''}">
    <p class="letter-head">${esc(c.village)} köyünden bir mektup</p>
    <p class="letter-body">${esc(c.letter.body)}</p>
    <p class="letter-sign">${esc(c.letter.sign)}</p>
    ${foldable ? `<button class="letter-fold" data-act="letter" aria-expanded="${!folded}">${folded ? 'Mektubu aç' : 'Mektubu katla'}</button>` : ''}
  </article>`;
}

function caseBar(back, label) {
  const { c, mode } = play;
  return `<header class="casebar">
    <button class="link" data-act="${back}">← ${label}</button>
    <span class="casebar-no">Vaka #${c.no}${modeLabel(mode)}</span>
    <button class="link" data-act="defter">Defter</button>
  </header>`;
}

const spent = () => play.used.length + play.tests.length;
const pool = () => candidates(play.c, play.used).filter((cr) => fitsTests(cr, play.c, play.tests));
const livePool = () => pool().filter((cr) => !play.struck.includes(cr.id));

function clueHTML(dimId, fresh, n) {
  const clue = play.c.clues[dimId];
  return `<li class="clue${fresh ? ' fresh' : ''}"${n ? ` data-n="${n}"` : ''}>
    <p class="clue-head"><span class="clue-cat">${DIM[dimId].name}</span><span class="tag">${famLabel(dimId, clue.fam)}</span></p>
    <p>${esc(clue.text)}</p></li>`;
}

function testHTML(toolId, fresh, n) {
  const r = testResult(play.c, toolId);
  return `<li class="clue${fresh ? ' fresh' : ''}"${n ? ` data-n="${n}"` : ''}>
    <p class="clue-head"><span class="clue-cat">Sınama: ${TOOL_BY_ID[toolId].name}</span><span class="tag${r.works ? ' tag-yes' : ''}">${r.works ? 'İşledi' : 'İşlemedi'}</span></p>
    <p>${esc(r.text)}</p></li>`;
}

function toolsDrawerHTML() {
  const live = livePool();
  const rows = TOOLS.filter((t) => !play.tests.includes(t.id))
    .map((t) => ({ t, holders: live.filter((cr) => cr.tools.includes(t.id)) }))
    .filter((x) => x.holders.length)
    .sort((a, b) => b.holders.length - a.holders.length);
  return `<div class="drawer-bar"><span></span><button class="link" data-dr="close">Kapat</button></div>
    <h2 class="dp-title">Geceye ne bırakacaksın?</h2>
    <p class="section-note">Bir mum yanar. Yanında, kalan sayfalardan hangilerinin ondan çekindiği yazıyor.</p>
    <ul class="tool-rows">${rows.map(({ t, holders }) => `<li><button class="tool-row" data-dr="test" data-id="${t.id}">
      <span class="tool-name">${t.name}</span>
      <span class="tool-who">${holders.length <= 6 ? holders.map((cr) => cr.name).join(', ') : `${holders.length} sayfada yazılı`}</span>
    </button></li>`).join('')}</ul>`;
}

function poolLine() {
  const all = pool().length;
  const live = livePool().length;
  const struck = all - live;
  if (live === 1) return 'Defterde tek sayfa kaldı';
  return `Defterde uyan sayfa: <b>${live}</b>${struck ? ` <span class="muted">(${struck} sayfayı eledin)</span>` : ''}`;
}

// The notes in the order they were taken, with what happened in the village as candles burned.
function logHTML() {
  const { c, order } = play;
  const out = [];
  let burned = 0;
  order.forEach((o) => {
    const fresh = o === play.fresh;
    if (o === 'y') {
      out.push(`<li class="clue confront${fresh ? ' fresh' : ''}"><p class="clue-head"><span class="clue-cat">Yüzleşme</span></p><p>${esc(c.story.yuzlesme.text)}</p></li>`);
      return;
    }
    burned++;
    out.push(o.startsWith('t:') ? testHTML(o.slice(2), fresh, burned) : clueHTML(o, fresh, burned));
    const turn = c.story.gidisat[[2, 4, 5].indexOf(burned)];
    if ([2, 4, 5].includes(burned) && turn) out.push(`<li class="turn${fresh ? ' fresh' : ''}">${esc(turn)}</li>`);
  });
  return out.join('');
}

function confrontHTML() {
  const { c, used, order } = play;
  if (!used.includes(c.story.yuzlesme.after) || order.includes('y')) return '';
  return `<button class="ask ask-confront" data-act="confront"><span class="ask-act">${esc(c.story.yuzlesme.ask)}</span><span class="ask-cost">mum yakmaz</span></button>`;
}

function trayHTML() {
  const inPool = pool();
  const live = livePool();
  const struck = inPool.filter((cr) => play.struck.includes(cr.id));
  const slip = (cr) => `<li><button class="slip${play.struck.includes(cr.id) ? ' struck' : ''}" data-act="page-open" data-id="${cr.id}" title="${cr.name}">
      <span class="slip-fig">${silhouette(cr.id, known(cr.id) ? 'full' : 'veiled')}</span>
      <span class="slip-name">${cr.name}</span>
    </button></li>`;
  const line = live.length === 1 ? 'Tek sayfa kaldı' : live.length ? (spent() ? `<b>${live.length}</b> sayfa kaldı` : 'Defterde elli sayfa var') : 'Bütün sayfaları eledin';
  return `<div class="tray">
    <div class="tray-head"><p class="pool">${line}</p><button class="link" data-act="diagnose">Bütün sayfalar</button></div>
    ${inPool.length <= 8 || wide.matches ? `<ul class="slips">${[...live, ...struck].map(slip).join('')}</ul>` : ''}
    ${live.length === 1 ? `<button class="btn btn-blood" data-act="choose" data-id="${live[0].id}">Hükmü yaz: ${live[0].name}</button>` : ''}
  </div>`;
}

function renderCase() {
  const { c, used, order } = play;
  const left = MAX_CANDLES - spent();
  const unread = CLUE_DIMS.filter((d) => c.sources.includes(d.id) && !used.includes(d.id));
  const shut = CLUE_DIMS.filter((d) => !c.sources.includes(d.id));
  app.innerHTML = `
    ${caseBar('home', 'Masa')}
    <div class="shelf">
      <div class="candles" role="img" aria-label="${left} mum yanıyor">${candleRow(MAX_CANDLES, left, burning)}</div>
      <p class="candle-count">${left === 0 ? 'Mumların bitti' : `${left} mum yanıyor`}</p>
    </div>
    <div class="desk">
    <section class="desk-notes">
    ${letterHTML(c)}
    ${order.length ? `<ol class="inquiry">${logHTML()}</ol>` : ''}
    ${confrontHTML()}
    ${left > 0 ? `<div class="moves">
      ${unread.map((d) => `<button class="ask" data-act="ask" data-dim="${d.id}"><span class="ask-act">${d.action}</span><span class="ask-cost">1 mum</span></button>`).join('')}
      <button class="ask ask-trap" data-act="trap"><span class="ask-act">Geceye bir şey bırak</span><span class="ask-cost">1 mum</span></button>
    </div>` : '<p class="section-note">Mumların bitti. Elindeki notlarla hükmünü yaz.</p>'}
    <ul class="shut-list">${shut.map((d) => `<li>${esc(c.closed[d.id])}</li>`).join('')}</ul>
    </section>
    <aside class="desk-book">${trayHTML()}<div id="desk-page" class="desk-page"></div></aside>
    </div>`;
  play.fresh = null;
  syncDesk();
  if (burning >= 0) {
    const was = burning;
    setTimeout(() => {
      if (burning !== was || view !== 'case') return;
      burning = -1;
      const row = app.querySelector('.candles');
      if (row) row.innerHTML = candleRow(MAX_CANDLES, MAX_CANDLES - spent());
    }, 900);
  }
}

function notesHTML() {
  const { used, tests } = play;
  if (!used.length && !tests.length) return '<p class="notes-empty">Not almadın. Elinde yalnızca mektup var.</p>';
  return `<ul class="notes-list">${CLUE_DIMS.filter((d) => used.includes(d.id)).map((d) => clueHTML(d.id, false)).join('')}${tests.map((t) => testHTML(t, false)).join('')}</ul>`;
}

function traitsTable(cr) {
  return `<dl class="signs">${CLUE_DIMS.map((d) => `<div>
      <dt>${d.page}</dt><dd>${cr.traits[d.id].map((t) => traitLabel(d.id, t)).join(', ')}</dd></div>`).join('')}
      <div><dt>Neyden çekinir</dt><dd>${toolNames(cr.tools)}</dd></div></dl>`;
}

// A defter page next to the player's own notes, one row per sign.
function compareTable(cr) {
  const { used, tests, c } = play;
  const testNote = tests.map((t) => `${TOOL_BY_ID[t].name} ${testResult(c, t).works ? 'işledi' : 'işlemedi'}`).join(', ');
  return `<dl class="signs">${CLUE_DIMS.map((d) => {
    const read = used.includes(d.id);
    return `<div class="${read ? 'hl' : ''}"><dt>${d.page}</dt><dd>${cr.traits[d.id].map((t) => traitLabel(d.id, t)).join(', ')}
      ${read ? `<span class="note-quote">${esc(c.clues[d.id].text)}</span>` : ''}</dd></div>`;
  }).join('')}
    <div class="${tests.length ? 'hl' : ''}"><dt>Neyden çekinir</dt><dd>${toolNames(cr.tools)}${tests.length ? `<span class="note-quote">${testNote}</span>` : ''}</dd></div></dl>`;
}

function dxItem(cr, inPool) {
  const struck = play.struck.includes(cr.id);
  return `<li class="dx-item${struck ? ' struck' : ''}${inPool ? '' : ' out'}">
    <button class="dx-head" data-act="page-open" data-id="${cr.id}">
      <span class="dx-fig">${silhouette(cr.id, known(cr.id) ? 'full' : 'veiled')}</span>
      <span class="dx-text"><span class="dx-name">${cr.name}</span><span class="dx-epi">${cr.epithet}</span></span>
    </button>
  </li>`;
}

function renderDiagnose() {
  const inPool = pool();
  const ids = new Set(inPool.map((c) => c.id));
  const live = inPool.filter((c) => !play.struck.includes(c.id));
  const struck = inPool.filter((c) => play.struck.includes(c.id));
  const rest = CREATURES.filter((c) => !ids.has(c.id));
  app.innerHTML = `
    ${caseBar('back-case', 'Soruşturma')}
    <h1 class="title">Bütün sayfalar</h1>
    <p class="lede">${spent() ? 'Notlarına uyan sayfalar üstte. Bir sayfaya dokun, notlarınla yan yana gör.' : 'Henüz not almadın; defterin elli sayfası da açık.'}</p>
    <p class="pool">${poolLine()}</p>
    <ul class="dx">${live.map((c) => dxItem(c, true)).join('')}${struck.map((c) => dxItem(c, true)).join('')}</ul>
    ${rest.length ? `<details class="rest"${play.showRest ? ' open' : ''}>
      <summary data-act="toggle-rest">Notlarına uymayan sayfalar (${rest.length})</summary>
      <ul class="dx">${rest.map((c) => dxItem(c, false)).join('')}</ul>
    </details>` : ''}
    <div class="dock"><button class="btn btn-ghost" data-act="back-case">Soruşturmaya dön</button></div>`;
}

function renderVerdict() {
  const { c, used, diagnosis, verdict } = play;
  const cr = BY_ID[diagnosis];
  const ready = verdict.sir !== undefined;
  app.innerHTML = `
    ${caseBar('back-case', 'Soruşturma')}
    <p class="kicker">${esc(c.village)} köyü · Vaka #${c.no}</p>
    <h1 class="title">Hüküm</h1>
    <dl class="tutanak">
      <div class="tutanak-main"><dt>Bunu yapan</dt><dd>${cr.name}</dd></div>
      ${CLUE_DIMS.filter((d) => used.includes(d.id)).map((d) => `<div><dt>${d.page}</dt><dd>${famLabel(d.id, c.clues[d.id].fam)}</dd></div>`).join('')}
      <div><dt>Neyden çekinir</dt><dd>${toolNames(cr.tools)}</dd></div>
    </dl>
    <p class="section-note">Köyde biri bir şey saklıyor.</p>
    <div class="blank">
      <p class="blank-q">${esc(c.story.sir.q)}</p>
      <div class="blank-opts">${c.sirOptions.map((t, i) => `<button class="blank-opt${verdict.sir === i ? ' on' : ''}" data-act="sir" data-i="${i}" aria-pressed="${verdict.sir === i}">${esc(t)}</button>`).join('')}</div>
    </div>
    <div class="actions sticky-actions">
      <button class="btn btn-blood" data-act="seal" ${ready ? '' : 'disabled'}>${ready ? 'Mühürle' : 'Birini seç'}</button>
    </div>`;
}

function renderResult() {
  const res = lastResult;
  const cr = BY_ID[res.creature];
  const right = res.diagnosis === res.creature;
  const title = res.outcome === 'success' ? 'Hüküm tamam' : res.outcome === 'partial' ? 'Yaratık doğru, sır çözülmedi' : 'Yanlış teşhis';
  const used = MAX_CANDLES - res.candlesLeft;
  app.innerHTML = `
    <header class="casebar">
      <button class="link" data-act="home">← Masa</button>
      <span class="casebar-no">Vaka #${res.no}${modeLabel(res.mode)}</span>
      <button class="link" data-act="defter">Defter</button>
    </header>
    <div class="stamp stamp-${res.outcome}">${title}</div>
    <div class="result-fig">${plate(cr.id, { place: res.place, time: res.time })}</div>
    <h1 class="title center">${cr.name}</h1>
    <p class="aka center">${cr.aka.join(' · ')}</p>
    <dl class="facts">
      <div><dt>Teşhisin</dt><dd>${BY_ID[res.diagnosis].name}${right ? '' : ' <span class="wrong">(yanlış)</span>'}</dd></div>
      <div><dt>Köyün sırrı</dt><dd>${esc(res.sir.right)}${res.sir.ok ? '' : ' <span class="wrong">(doğrusu)</span>'}</dd></div>
      <div><dt>Sınaman</dt><dd>${res.tests.length ? toolNames(res.tests) : 'Yapmadın'}</dd></div>
      <div><dt>Neyden çekinir</dt><dd>${toolNames(cr.tools)}</dd></div>
      <div><dt>Mum</dt><dd>${used === 0 ? 'Hiç yanmadı' : `${used} tane yandı`}, ${res.candlesLeft} tane kaldı</dd></div>
      <div><dt>Usta avcı</dt><dd>${res.par} mumla kesinleştirirdi</dd></div>
    </dl>
    <div class="candles candles-sm">${candleRow(MAX_CANDLES, res.candlesLeft)}</div>
    ${res.mode === 'daily' ? `<p class="streak">Seri <b>${currentStreak()}</b> gün · Defter <b>${caughtCount()}</b>/${CREATURES.length}</p>` : `<p class="streak">Defter <b>${caughtCount()}</b>/${CREATURES.length}</p>`}
    ${gainsHTML()}
    ${duelHTML(res.no)}
    <div class="actions">
      <button class="btn btn-blood" data-act="share-result">Sonucu paylaş</button>
      ${res.mode === 'dev' ? '' : `<button class="btn btn-ghost" data-act="call-send" data-no="${res.no}">${data.duels[res.no] ? 'Başka birini çağır' : 'Bir arkadaşını çağır'}</button>`}
      <button class="btn btn-ghost" data-act="page" data-id="${cr.id}">Defterde aç</button>
      ${res.mode === 'dev' ? '<p class="hint">Deneme vakası: sonuç seriye ve günlük kilide yazılmadı.</p>'
        : res.mode === 'archive' ? '<p class="hint">Arşiv vakası: seriyi etkilemez; sonuç defterine işlendi.</p>' : ''}
    </div>
    ${res.mode === 'daily' ? `${tomorrowHTML()}
      <div class="after">
        ${unopened() ? `<button class="btn btn-ghost" data-act="archive">Arşivde açılmamış ${unopened()} vaka var</button>` : ''}
        <button class="link" data-act="keep">Yarın akşam hatırlat</button>
      </div>` : unopened() && res.mode === 'archive' ? `<div class="after"><button class="btn btn-ghost" data-act="archive">Arşivde açılmamış ${unopened()} vaka var</button></div>` : ''}`;
  prepareCard(shareInfo(res)).catch(() => {});
}

function renderArchive() {
  const rows = [];
  for (let n = todayNo; n >= 1; n--) {
    const res = resultFor(n);
    const c = generateCase(n);
    const date = formatDateTR(c.date);
    const status = res ? `${esc(outcomeLine(res))}${res.mode === 'archive' ? ' · arşiv' : ''}` : n === todayNo ? 'bugün, açık' : 'açık';
    const act = n === todayNo ? (res ? 'home' : 'start') : res ? '' : 'archive-play';
    rows.push(`<li>${act
      ? `<button class="row" data-act="${act}" data-no="${n}"><span>Vaka #${n} · ${esc(c.village)}</span><em>${date} · ${status}</em></button>`
      : `<div class="row locked"><span>Vaka #${n} · ${esc(c.village)}</span><em>${date} · ${status}</em></div>`}</li>`);
  }
  app.innerHTML = `
    <header class="casebar"><button class="link" data-act="home">← Masa</button><span class="casebar-no">Arşiv</span><span></span></header>
    <h1 class="title">Arşiv</h1>
    <p class="lede">Kaçırdığın vakaları burada açabilirsin. Arşiv vakaları seriyi etkilemez, ama avladığın yaratık defterine işlenir.</p>
    <div class="guild"><p class="guild-title">Lonca üyeliği</p><p>Arşiv şimdilik herkese açık. İleride eski vakalar ve yıllık defter Lonca üyeliğiyle gelecek.</p></div>
    <ul class="archive">${rows.join('')}</ul>`;
}

function render() {
  if (view === 'home') renderHome();
  else if (view === 'case') renderCase();
  else if (view === 'diagnose') renderDiagnose();
  else if (view === 'verdict') renderVerdict();
  else if (view === 'result') renderResult();
  else if (view === 'archive') renderArchive();
}

function go(next) {
  view = next;
  if (next !== 'case') drawerState = null;
  app.dataset.view = next;
  render();
  setDusk();
  window.scrollTo(0, 0);
}

// The room darkens as candles burn; the candles sit at the top, so the light falls off away from them.
function setDusk() {
  const on = play && ['case', 'diagnose', 'verdict'].includes(view);
  const burnt = on ? spent() / MAX_CANDLES : 0;
  duskEl.style.opacity = burnt;
  document.documentElement.style.setProperty('--lit', (1 - burnt).toFixed(2));
  document.body.classList.toggle('low-light', burnt >= 0.5);
}

function rerenderKeepScroll(fn) {
  const y = window.scrollY;
  fn();
  window.scrollTo(0, y);
}

/* ---------- modal: onboarding, sicil ---------- */

function openModal(html, label) {
  modal.innerHTML = `<div class="modal-card" role="dialog" aria-modal="true" aria-label="${label}">${html}</div>`;
  modal.hidden = false;
  modal.onclick = (e) => {
    const act = e.target.closest('[data-modal]')?.dataset.modal;
    if (e.target === modal || act === 'close') closeModal();
    else if (act === 'start') { closeModal(); startCase(todayNo, 'daily'); }
    else if (act === 'call') { closeModal(); startChallenge(); }
    else if (act === 'keep') showKeep();
    else if (act === 'ics') downloadReminder();
    else if (act === 'install') { installEvt?.prompt(); installEvt = null; closeModal(); }
  };
}

function startChallenge() {
  const ch = data.challenge;
  if (!ch || resultFor(ch.no)) return go('home');
  startCase(ch.no, ch.no === todayNo ? 'daily' : 'archive');
}

// A link for a case this player has already closed is settled on the spot; otherwise it waits on the home screen.
function acceptChallenge(ch) {
  const mine = resultFor(ch.no);
  if (!mine) { data.challenge = ch; return; }
  data.duels[ch.no] = { ...ch, result: duel({ outcome: mine.outcome, used: MAX_CANDLES - mine.candlesLeft }, ch) };
  data.challenge = null;
  homeDuel = ch.no;
}

async function sendChallenge(no) {
  const res = resultFor(no);
  if (!res) return;
  const text = challengeText(res, challengeLink(res));
  if (navigator.share) {
    try { await navigator.share({ text }); return; } catch (err) { if (err && err.name === 'AbortError') return; }
  }
  toast((await copyText(text)) ? 'Çağrı kopyalandı. Arkadaşına yapıştır.' : 'Kopyalanamadı');
}

function downloadReminder() {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([reminderICS(returnUrl(), todayISO)], { type: 'text/calendar' }));
  a.download = 'kara-defter.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast('Dosya indi. Açınca takvimine eklenir.');
}

// A static page cannot send notifications, so the evening reminder is a calendar entry the player adds themself.
function showKeep() {
  const url = returnUrl();
  const ua = navigator.userAgent;
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  let home = '';
  if (standalone) home = '';
  else if (/Instagram|FBAN|FBAV|TikTok|musical_ly/.test(ua)) {
    home = '<p class="section-s">Tarayıcıda aç</p><p class="lede">Şu an bir uygulamanın içindeki tarayıcıdasın. Menüden “Tarayıcıda aç”ı seçersen defter kendi tarayıcında durur ve ana ekrana eklenebilir. Kayıt tarayıcıya göre tutulur; orada baştan başlar.</p>';
  } else if (installEvt) {
    home = '<p class="section-s">Ana ekran</p><button class="btn btn-ghost" data-modal="install">Ana ekrana ekle</button>';
  } else if (/iPhone|iPad|iPod/.test(ua)) {
    home = '<p class="section-s">Ana ekran</p><p class="lede">Safari’de Paylaş düğmesine, sonra “Ana Ekrana Ekle”ye dokun. Defter bir uygulama gibi açılır.</p>';
  }
  openModal(`
    <p class="kicker">Hatırlatma</p>
    <h2 class="title">Zarf her gece yarısı gelir.</h2>
    <p class="lede">Bu sayfa bildirim gönderemez. Takvimine her akşam dokuza bir hatırlatma ekleyebilirsin; istediğin gün silersin.</p>
    <a class="btn btn-blood" href="${esc(reminderGoogleUrl(url, todayISO))}" target="_blank" rel="noopener">Google Takvim’e ekle</a>
    <button class="btn btn-ghost" data-modal="ics">Takvim dosyası indir</button>
    ${home}
    <button class="link modal-close" data-modal="close">Kapat</button>`, 'Hatırlatma');
}

function sealsHTML() {
  const s = summary(data, todayNo);
  return `<ul class="seals">${SEALS.map((seal) => {
    const [have, need] = seal.prog(s);
    const on = !!data.seals[seal.id];
    return `<li class="seal${on ? ' on' : ''}"><span class="seal-wax" aria-hidden="true">${on ? 'KD' : ''}</span>
      <span class="seal-text"><b>${seal.name}</b><span>${seal.how}${!on && need > 1 ? ` <i>${have}/${need}</i>` : ''}</span></span></li>`;
  }).join('')}</ul>`;
}

function closeModal() {
  modal.hidden = true;
  modal.innerHTML = '';
  if (!data.onboarded) { data.onboarded = true; persist(); }
}

function showIntro() {
  const ch = data.challenge;
  openModal(`
    <p class="kicker">Kara Defter</p>
    <h2 class="title">Köylerden mektup geliyor.</h2>
    <p class="lede">Elinde, Anadolu’dan Türk dünyasına anlatılan elli yaratığın yazılı olduğu bir defter var. Her gün bir köy yardım istiyor.</p>
    <p class="lede">Altı mumun var. Her soruşturma bir mum yakar; aldığın notlar defterdeki sayfaları eler. Emin olunca hükmünü yaz: gelen neydi, köy neyi saklıyordu.</p>
    ${ch ? `<p class="lede intro-call"><b>Bir avcı seni Vaka #${ch.no} için çağırdı:</b> ${theirs(ch)}.</p>` : ''}
    ${ch ? '<button class="btn btn-blood" data-modal="call">Çağrıyı kabul et</button>'
    : `<button class="btn btn-blood" data-modal="${data.results[todayNo] ? 'close' : 'start'}">${data.results[todayNo] ? 'Anladım' : 'İlk mektubu aç'}</button>`}
    <details class="howto intro-how"><summary>Bütün kurallar</summary>${howtoList()}</details>
    <button class="link modal-close" data-modal="close">Kapat</button>`, 'Nasıl oynanır');
}

function showStats() {
  const s = stats();
  const max = Math.max(1, ...s.hist);
  const bars = s.hist.map((n, i) => ({ n, i })).reverse()
    .map(({ n, i }) => `<div class="bar"><span class="bar-k">${i}</span><span class="bar-v" style="width:${Math.max(6, (n / max) * 100)}%">${n}</span></div>`).join('');
  const pages = caughtCount();
  const up = nextRank(pages);
  openModal(`
    <p class="kicker">Sicil</p>
    <h2 class="title">Avcının defteri</h2>
    <p class="rank-line">Rütbe: <b>${rankName(pages)}</b>${up ? ` · ${up.name} rütbesine ${up.at - pages} sayfa` : ''}</p>
    <div class="stat-row">
      <div><b>${s.played}</b><span>vaka</span></div>
      <div><b>${s.played ? Math.round((s.won / s.played) * 100) : 0}%</b><span>tam hüküm</span></div>
      <div><b>${s.streak}</b><span>seri</span></div>
      <div><b>${s.best}</b><span>en uzun</span></div>
    </div>
    <p class="section-s">Tam hükümlerde kalan mum</p>
    <div class="bars">${bars}</div>
    <p class="section-s">Defter</p>
    <p class="lede">${caughtCount()} / ${CREATURES.length} sayfa avlandı, ${Object.keys(data.seen).filter((id) => !data.caught[id]).length} sayfanın izi sürüldü.</p>
    <p class="section-s">Mühürler · ${Object.keys(data.seals).length}/${SEALS.length}</p>
    ${sealsHTML()}
    <p class="section-s">Seri</p>
    <p class="lede">Yedi günde bir yedek mum kazanırsın, elinde en çok bir tane durur. Kaçırdığın ya da yanıldığın bir geceyi o kurtarır.${data.spare ? ' Şu an bir yedek mumun var.' : ''}</p>
    <button class="btn btn-ghost" data-modal="keep">Akşam hatırlatması ekle</button>
    <p class="hint">Kayıt yalnızca bu tarayıcıda tutuluyor.</p>
    <button class="btn btn-ghost" data-modal="close">Kapat</button>`, 'Sicil');
}

/* ---------- drawer: a defter page beside the notes, or the tools to test ---------- */

function pageDrawerHTML() {
  const { ids, i } = drawerState;
  const cr = BY_ID[ids[i]];
  const struck = play.struck.includes(cr.id);
  const inPool = pool().some((x) => x.id === cr.id);
  return `<div class="drawer-bar">
      <span class="dp-nav">${ids.length > 1 ? `<button class="link" data-dr="prev" aria-label="Önceki sayfa">‹</button><span>${i + 1} / ${ids.length}</span><button class="link" data-dr="next" aria-label="Sonraki sayfa">›</button>` : ''}</span>
      ${slot() ? '' : '<button class="link" data-dr="close">Kapat</button>'}
    </div>
    <header class="dp-head">
      <span class="dp-fig">${silhouette(cr.id, known(cr.id) ? 'full' : 'veiled')}</span>
      <div class="dp-titles">
        <h2 class="dp-name${struck ? ' struck' : ''}"${inPool && !struck ? ' data-strike' : ''}><span>${cr.name}</span><svg class="strike-ink" aria-hidden="true"><path/></svg></h2>
        <p class="dp-epi">${cr.epithet}</p>
      </div>
    </header>
    ${inPool && !struck && !data.strikeTaught ? `<p class="dp-hint">Uymuyorsa adının üstünü çiz${wide.matches ? ' ya da X tuşuna bas' : ''}.</p>` : ''}
    ${compareTable(cr)}
    <details class="dp-lore"><summary>Köylerde anlatılanlar</summary><p class="lore">${esc(cr.lore)}</p></details>
    <div class="dp-actions">
      <button class="btn btn-blood" data-dr="choose" data-id="${cr.id}">Hükmü yaz: ${cr.name}</button>
      ${inPool ? `<button class="btn btn-ghost" data-dr="strike" data-id="${cr.id}">${struck ? 'Elemeyi geri al' : 'Bu değil, ele'}</button>` : ''}
    </div>`;
}

// On a wide screen the drawer's content sits on the right-hand page of the open defter instead of over the table.
const slot = () => (wide.matches ? document.getElementById('desk-page') : null);

function paintDrawer(dir = 0) {
  const isPage = drawerState.kind === 'page';
  const host = slot();
  const html = `<div class="drawer-card${host ? ' in-slot' : ''}${dir ? (dir > 0 ? ' from-right' : ' from-left') : ''}" role="${host ? 'region' : 'dialog'}"${host ? '' : ' aria-modal="true"'} tabindex="-1" aria-label="${isPage ? BY_ID[drawerState.ids[drawerState.i]].name : 'Sınama'}">
    ${isPage ? pageDrawerHTML() : toolsDrawerHTML()}</div>`;
  if (host) {
    host.innerHTML = html;
    app.querySelectorAll('.slip').forEach((x) => x.classList.toggle('on', isPage && x.dataset.id === drawerState.ids[drawerState.i]));
  } else {
    drawerEl.innerHTML = html;
    drawerEl.hidden = false;
    document.body.classList.add('locked');
    drawerEl.firstElementChild.focus({ preventScroll: true });
  }
  const card = (host || drawerEl).firstElementChild;
  if (isPage) {
    const nameEl = card.querySelector('[data-strike]');
    if (nameEl) bindStrike(nameEl, drawerState.ids[drawerState.i]);
    bindSwipe(card);
  }
}

const poolOrder = () => {
  const inPool = pool();
  return [...inPool.filter((c) => !play.struck.includes(c.id)), ...inPool.filter((c) => play.struck.includes(c.id))].map((c) => c.id);
};

// Keeps the right-hand page in step after the table is redrawn: follows the open page, or opens the first candidate
// once the shortlist is short enough to compare.
function syncDesk() {
  const host = slot();
  if (!host || view !== 'case') return;
  const ids = poolOrder();
  if (drawerState?.kind === 'page') {
    const id = drawerState.ids[drawerState.i];
    if (ids.includes(id)) drawerState = { kind: 'page', ids, i: ids.indexOf(id) };
    else drawerState = null;
  }
  const liveFirst = ids.find((id) => !play.struck.includes(id));
  if (!drawerState && ids.length <= 8 && liveFirst) drawerState = { kind: 'page', ids, i: ids.indexOf(liveFirst) };
  if (drawerState) paintDrawer();
  else host.innerHTML = '<p class="desk-empty">Bir sayfa seç, notlarınla yan yana görürsün.</p>';
}

function openPage(id) {
  const ordered = poolOrder();
  const ids = ordered.includes(id) ? ordered : [id];
  drawerState = { kind: 'page', ids, i: ids.indexOf(id) };
  paintDrawer();
}

function closeDrawer() {
  drawerState = null;
  drawerEl.hidden = true;
  drawerEl.innerHTML = '';
  document.body.classList.remove('locked');
  syncDesk();
}

function turnPage(dir) {
  const st = drawerState;
  if (st?.kind !== 'page' || st.ids.length < 2) return;
  st.i = (st.i + dir + st.ids.length) % st.ids.length;
  paintDrawer(dir);
}

function setStruck(id, on) {
  play.struck = on ? [...new Set([...play.struck, id])] : play.struck.filter((x) => x !== id);
  saveProgress();
  rerenderKeepScroll(render);
}

function strikeAndMoveOn(id) {
  setStruck(id, true);
  navigator.vibrate?.(14);
  if (!data.strikeTaught) { data.strikeTaught = true; persist(); }
  drawerEl.querySelector('.dp-name')?.classList.add('struck');
  setTimeout(() => {
    const st = drawerState;
    if (st?.kind !== 'page' || st.ids[st.i] !== id) return;
    const live = st.ids.filter((x) => !play.struck.includes(x));
    if (live.length < 2) { closeDrawer(); return; }
    for (let k = 1; k < st.ids.length; k++) {
      const j = (st.i + k) % st.ids.length;
      if (!play.struck.includes(st.ids[j])) { st.i = j; break; }
    }
    paintDrawer(1);
  }, 460);
}

// Crossing out a name with a finger: the line follows the pointer, and covering most of the name commits it.
function bindStrike(nameEl, id) {
  const path = nameEl.querySelector('path');
  let pts = null;
  let box = null;
  const add = (e) => {
    pts.push([e.clientX - box.left, e.clientY - box.top]);
    path.setAttribute('d', pts.map(([x, y], k) => `${k ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' '));
  };
  nameEl.addEventListener('pointerdown', (e) => {
    box = nameEl.getBoundingClientRect();
    nameEl.setPointerCapture(e.pointerId);
    pts = [];
    path.style.opacity = 1;
    add(e);
  });
  nameEl.addEventListener('pointermove', (e) => { if (pts) add(e); });
  const finish = () => {
    if (!pts) return;
    const xs = pts.map(([x]) => x);
    const text = nameEl.querySelector('span').getBoundingClientRect().width;
    const covered = Math.min(text, Math.max(...xs)) - Math.max(0, Math.min(...xs));
    pts = null;
    if (covered >= text * 0.6) strikeAndMoveOn(id);
    else path.style.opacity = 0;
  };
  nameEl.addEventListener('pointerup', finish);
  nameEl.addEventListener('pointercancel', () => { pts = null; path.style.opacity = 0; });
}

// A sideways swipe anywhere on the page, except on the name, turns to the next page.
function bindSwipe(card) {
  let start = null;
  card.addEventListener('touchstart', (e) => {
    start = e.target.closest('[data-strike]') ? null : { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });
  card.addEventListener('touchend', (e) => {
    if (!start) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    start = null;
    if (Math.abs(dx) > 56 && Math.abs(dy) < 44) turnPage(dx < 0 ? 1 : -1);
  }, { passive: true });
}

function onDrawerClick(e) {
  const quote = e.target.closest('.note-quote');
  if (quote) { quote.classList.toggle('open'); return; }
  const b = e.target.closest('[data-dr]');
  if (!b) return;
  const act = b.dataset.dr;
  if (act === 'close') closeDrawer();
  else if (act === 'prev') turnPage(-1);
  else if (act === 'next') turnPage(1);
  else if (act === 'test') { const id = b.dataset.id; closeDrawer(); runTest(id); }
  else if (act === 'choose') {
    const id = b.dataset.id;
    closeDrawer();
    play.diagnosis = id;
    play.verdict = {};
    go('verdict');
  } else if (act === 'strike') {
    const id = b.dataset.id;
    if (play.struck.includes(id)) { setStruck(id, false); paintDrawer(); } else strikeAndMoveOn(id);
  }
}

drawerEl.addEventListener('click', (e) => {
  if (e.target === drawerEl) return closeDrawer();
  onDrawerClick(e);
});
app.addEventListener('click', (e) => { if (e.target.closest('#desk-page')) onDrawerClick(e); });

document.addEventListener('keydown', (e) => {
  if (!drawerState || !sheet.hidden || !modal.hidden || e.metaKey || e.ctrlKey || e.altKey) return;
  const onPage = drawerState.kind === 'page';
  if (e.key === 'Escape') {
    if (!slot() || !onPage) closeDrawer();
  } else if (onPage && e.key === 'ArrowLeft') turnPage(-1);
  else if (onPage && e.key === 'ArrowRight') turnPage(1);
  else if (onPage && (e.key === 'x' || e.key === 'X')) {
    const id = drawerState.ids[drawerState.i];
    if (pool().some((c) => c.id === id) && !play.struck.includes(id)) strikeAndMoveOn(id);
  }
});

// Crossing the 980px line swaps drawer and right-hand page, so redraw the screen in the new layout.
wide.addEventListener('change', () => {
  drawerState = null;
  drawerEl.hidden = true;
  drawerEl.innerHTML = '';
  document.body.classList.remove('locked');
  render();
});

/* ---------- defter sheet ---------- */

function sheetListHTML() {
  const caught = caughtCount();
  return `<div class="sheet-head"><p class="sheet-title">Defter</p><button class="link" data-sheet="close">Kapat</button></div>
    <p class="lede">${caught}/${CREATURES.length} sayfa avlandı. Her sayfada köylerde anlatılanlar yazılı; avladığın yaratığın çizimi ve av notları sayfasına işlenir.</p>
    ${backNotesHTML(caught)}
    <ul class="pages">${CREATURES.map((cr) => `<li><button class="page-tile${data.caught[cr.id] ? ' caught' : ''}" data-sheet="page" data-id="${cr.id}">
        <span class="tile-fig">${silhouette(cr.id, known(cr.id) ? 'full' : 'veiled')}</span>
        <span class="tile-name">${cr.name}</span>
        <span class="tile-state">${data.caught[cr.id] ? 'Avlandı' : data.seen[cr.id] ? 'İzi sürüldü' : 'Avlanmadı'}</span>
      </button></li>`).join('')}</ul>`;
}

function backNotesHTML(caught) {
  const notes = BACK_NOTES.filter((n) => caught >= n.at);
  const next = nextNote(caught);
  if (!notes.length) return next ? `<p class="back-wait">Defterin arkasında başka bir elin yazısı var. İlk not ${next.at - caught} sayfa sonra okunur.</p>` : '';
  return `<details class="back-notes"${notes.length === BACK_NOTES.length || notesOpen ? ' open' : ''}>
    <summary>Defterin arkasında yazılanlar · ${notes.length}/${BACK_NOTES.length}</summary>
    ${notes.map((n) => `<p class="hand">${esc(n.text)}</p>`).join('')}
    ${next ? `<p class="back-wait">Sıradaki not ${next.at - caught} sayfa sonra okunur.</p>` : ''}
  </details>`;
}

function sheetPageHTML(id) {
  const cr = BY_ID[id];
  const caught = data.caught[id];
  return `<div class="sheet-head"><button class="link" data-sheet="list">← Defter</button><button class="link" data-sheet="close">Kapat</button></div>
    <article class="page">
      <div class="page-fig">${plate(id, { place: cr.traits.yer[0], time: cr.traits.zaman[0], mode: known(id) ? 'full' : 'veiled' })}</div>
      <h2 class="page-name">${cr.name}</h2>
      <p class="aka">${cr.aka.join(' · ')}</p>
      <p class="epithet">${cr.epithet}</p>
      <p class="region">${cr.region}</p>
      <p class="lore">${esc(cr.lore)}</p>
      <h3 class="page-sub">İşaretler</h3>
      ${traitsTable(cr)}
      ${caught ? `<section class="av-notes">
          <h3>Av notları</h3>
          <p>Vaka #${caught.no}, ${formatDateTR(caught.date)} · ${caught.candlesLeft} mum artırarak avlandı${caught.mode && caught.mode !== 'daily' ? ` (${caught.mode === 'dev' ? 'deneme' : 'arşiv'})` : ''}</p>
        </section>
        <p class="hand kenar">${esc(generateCase(caught.no).story.kenar)}</p>
        ${caught.outcome ? `<details class="dp-lore"><summary>Köyden gelen mektup</summary><p class="letter-body">${esc(codaText(generateCase(caught.no).story, caught.outcome, caught.late))}</p></details>` : ''}`
    : `<p class="locked-note">Çizimi ve av notları, onu avladığında bu sayfaya işlenir.</p>`}
    </article>`;
}

function openSheet(page = null) {
  sheet.innerHTML = `<div class="sheet-card">${page ? sheetPageHTML(page) : sheetListHTML()}</div>`;
  sheet.hidden = false;
  document.body.classList.add('locked');
  sheet.scrollTop = 0;
}

function closeSheet() {
  notesOpen = false;
  sheet.hidden = true;
  sheet.innerHTML = '';
  document.body.classList.remove('locked');
}

sheet.addEventListener('click', (e) => {
  const b = e.target.closest('[data-sheet]');
  if (e.target === sheet) return closeSheet();
  if (!b) return;
  const act = b.dataset.sheet;
  if (act === 'close') closeSheet();
  else if (act === 'list') openSheet(null);
  else if (act === 'page') openSheet(b.dataset.id);
});

/* ---------- case flow ---------- */

function startCase(no, mode) {
  const c = generateCase(no);
  const saved = data.inProgress && data.inProgress.no === no && data.inProgress.mode === mode ? data.inProgress : null;
  const used = saved ? saved.used.filter((d) => c.sources.includes(d)) : [];
  const tests = saved ? [...(saved.tests || [])] : [];
  const steps = new Set([...used, ...tests.map((t) => `t:${t}`)]);
  play = {
    c, mode, used, tests, struck: saved ? [...(saved.struck || [])] : [],
    order: saved?.order ? saved.order.filter((o) => o === 'y' || steps.has(o)) : [...steps],
    diagnosis: null, verdict: {}, fresh: null, showRest: false, letterOpen: false,
  };
  saveProgress();
  go('case');
}

function saveProgress() {
  data.inProgress = { no: play.c.no, mode: play.mode, used: play.used, tests: play.tests, order: play.order, struck: play.struck };
  persist();
}

function afterStep() {
  burning = MAX_CANDLES - spent();
  // pages ruled out by the new note no longer need striking
  const ids = new Set(pool().map((c) => c.id));
  play.struck = play.struck.filter((id) => ids.has(id));
  saveProgress();
  rerenderKeepScroll(renderCase);
  setDusk();
  [...app.querySelectorAll('.fresh')].pop()?.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

function ask(dimId) {
  if (play.used.includes(dimId) || spent() >= MAX_CANDLES || !play.c.sources.includes(dimId)) return;
  play.used.push(dimId);
  play.order.push(dimId);
  play.fresh = dimId;
  afterStep();
}

function runTest(toolId) {
  if (play.tests.includes(toolId) || spent() >= MAX_CANDLES) return;
  play.tests.push(toolId);
  play.order.push(`t:${toolId}`);
  play.fresh = `t:${toolId}`;
  afterStep();
}

function codaText(story, outcome, late) {
  const base = outcome === 'success' ? story.cevap.tam : story.cevap.eksik;
  return late ? `${base}\n\nNot: ${story.cevap.gec}` : base;
}

function finishVerdict() {
  const { c, diagnosis, verdict, tests, mode } = play;
  const cr = BY_ID[c.creatureId];
  const sirOk = c.sirOptions[verdict.sir] === c.story.sir.right;
  const outcome = diagnosis !== cr.id ? 'fail' : sirOk ? 'success' : 'partial';
  const before = { pages: caughtCount(), had: !!data.caught[cr.id] };
  const res = {
    no: c.no, date: c.date, village: c.village, creature: cr.id, diagnosis, tests: [...tests], outcome,
    sir: { right: c.story.sir.right, ok: sirOk }, late: spent() >= 5,
    candlesLeft: MAX_CANDLES - spent(), par: c.par, place: c.place, time: c.time, mode,
  };
  bucket(mode)[c.no] = res;
  if (outcome !== 'fail') {
    const prev = data.caught[cr.id];
    const rank = (m) => (m === 'daily' ? 2 : m === 'archive' ? 1 : 0);
    if (!prev || (outcome === 'success' && prev.outcome !== 'success') || rank(mode) > rank(prev.mode) || (rank(mode) === rank(prev.mode) && prev.candlesLeft < res.candlesLeft)) {
      data.caught[cr.id] = { no: c.no, date: c.date, candlesLeft: res.candlesLeft, mode, outcome, late: res.late };
    }
  } else {
    data.seen[cr.id] = true;
  }
  data.inProgress = null;

  // what this verdict earned, in the order it is read on the result screen
  const gains = [];
  const pages = caughtCount();
  if (!before.had && data.caught[cr.id]) gains.push(`Defterine yeni sayfa işlendi: <b>${cr.name}</b>`);
  if (mode === 'daily') {
    if (outcome === 'fail') {
      if (coverFail(data, c.no)) gains.push('Yedek mumun bu geceyi kurtardı. Seri bozulmadı.');
    } else if (earnSpare(data, c.no)) {
      gains.push('Yedi gün doldu: bir <b>yedek mum</b> kazandın. Kaçırdığın ya da yanıldığın bir geceyi o kurtarır.');
    }
  }
  if (mode !== 'dev' && data.challenge && data.challenge.no === c.no) {
    data.duels[c.no] = { ...data.challenge, result: duel({ outcome, used: spent() }, data.challenge) };
    data.challenge = null;
  }
  if (rankIndex(pages) > rankIndex(before.pages)) gains.push(`Rütben yükseldi: <b>${rankName(pages)}</b>`);
  syncSeals(data, todayNo).forEach((seal) => gains.push(`Yeni mühür: <b>${seal.name}</b>`));
  if (BACK_NOTES.some((n) => before.pages < n.at && pages >= n.at)) {
    gains.push('Defterin arkasında yeni bir not açıldı. <button class="link" data-act="back-notes">Oku</button>');
  }
  lastGains = gains;
  persist();
  lastResult = res;
  return res;
}

const sentences = (text) => text.match(/[^.?…]+[.?…]+[”’]*\s*|[^.?…]+$/g) || [text];

function runScene() {
  const res = finishVerdict();
  const { c } = play;
  const cr = BY_ID[res.creature];
  const good = res.outcome !== 'fail';
  const blocks = [c.story.sahne, good ? c.story.kovma : c.story.yanlis];
  const revealAt = sentences(blocks[0]).length;
  const coda = good ? codaText(c.story, res.outcome, res.late) : null;

  huntEl.innerHTML = `<div class="hunt-inner">
      <div class="hunt-fig">${plate(cr.id, { place: c.place, time: c.time })}</div>
      <div class="hunt-lines">${blocks.map((b) => `<p>${sentences(b).map((s) => `<span class="s">${esc(s)}</span>`).join('')}</p>`).join('')}</div>
      <button class="btn btn-paper hunt-done" data-act="hunt-next">${coda ? 'Haftalar sonra' : 'Sonucu gör'}</button>
      <p class="hunt-skip">Geçmek için ${window.matchMedia('(hover: hover)').matches ? 'tıkla' : 'dokun'}</p>
    </div>`;
  huntEl.hidden = false;
  document.body.classList.add('locked');
  huntEl.scrollTop = 0;
  const spans = [...huntEl.querySelectorAll('.hunt-lines .s')];
  const fig = huntEl.querySelector('.hunt-fig');
  let i = 0;
  let timer = 0;
  let onLetter = false;
  const step = () => {
    if (i >= spans.length) { huntEl.classList.add('done'); return; }
    spans[i].classList.add('on');
    if (i === revealAt - 1) setTimeout(() => fig.classList.add('on'), 700);
    const wait = Math.max(1000, spans[i].textContent.length * 46) + (i === revealAt - 1 ? 1400 : 0);
    i++;
    timer = setTimeout(step, wait);
  };
  const finish = () => {
    clearTimeout(timer);
    huntEl.hidden = true;
    huntEl.innerHTML = '';
    huntEl.onclick = null;
    huntEl.classList.remove('done', 'letter-up');
    document.body.classList.remove('locked');
    go('result');
  };
  const showLetter = () => {
    onLetter = true;
    huntEl.classList.add('letter-up');
    huntEl.innerHTML = `<div class="hunt-inner hunt-letter">
        <p class="coda-when">Haftalar sonra postadan bir zarf çıktı. ${esc(c.village)} köyünden.</p>
        <article class="letter${c.official ? ' letter-official' : ''}"><p class="letter-body">${esc(coda)}</p></article>
        <button class="btn btn-paper" data-act="hunt-done">Sonucu gör</button>
      </div>`;
    huntEl.scrollTop = 0;
  };
  huntEl.classList.remove('done', 'letter-up');
  timer = setTimeout(step, 500);
  huntEl.onclick = (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'hunt-done') return finish();
    if (act === 'hunt-next') return coda ? showLetter() : finish();
    if (onLetter || huntEl.classList.contains('done')) return;
    clearTimeout(timer);
    spans.forEach((sp) => sp.classList.add('on'));
    fig.classList.add('on');
    huntEl.classList.add('done');
  };
}

/* ---------- events ---------- */

app.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  const act = b.dataset.act;
  if (act === 'start') {
    if (data.results[todayNo]) return go('home');
    startCase(todayNo, 'daily');
  } else if (act === 'archive-play') {
    startCase(parseInt(b.dataset.no, 10), 'archive');
  } else if (act === 'home') {
    go('home');
  } else if (act === 'defter') {
    openSheet(null);
  } else if (act === 'page') {
    openSheet(b.dataset.id);
  } else if (act === 'archive') {
    go('archive');
  } else if (act === 'stats') {
    showStats();
  } else if (act === 'ask') {
    ask(b.dataset.dim);
  } else if (act === 'trap') {
    drawerState = { kind: 'tools' };
    paintDrawer();
  } else if (act === 'letter') {
    play.letterOpen = !play.letterOpen;
    rerenderKeepScroll(renderCase);
  } else if (act === 'page-open') {
    openPage(b.dataset.id);
  } else if (act === 'diagnose') {
    go('diagnose');
  } else if (act === 'back-case') {
    go('case');
  } else if (act === 'toggle-rest') {
    play.showRest = !play.showRest;
  } else if (act === 'choose') {
    play.diagnosis = b.dataset.id;
    play.verdict = {};
    go('verdict');
  } else if (act === 'sir') {
    play.verdict.sir = parseInt(b.dataset.i, 10);
    rerenderKeepScroll(renderVerdict);
  } else if (act === 'confront') {
    play.order.push('y');
    play.fresh = 'y';
    saveProgress();
    rerenderKeepScroll(renderCase);
    [...app.querySelectorAll('.fresh')].pop()?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  } else if (act === 'call-start') {
    startChallenge();
  } else if (act === 'call-drop') {
    data.challenge = null;
    persist();
    go('home');
  } else if (act === 'call-send') {
    b.disabled = true;
    try { await sendChallenge(parseInt(b.dataset.no, 10)); } finally { b.disabled = false; }
  } else if (act === 'keep') {
    showKeep();
  } else if (act === 'back-notes') {
    notesOpen = true;
    openSheet(null);
    sheet.querySelector('.back-notes .hand:last-of-type')?.scrollIntoView({ block: 'center' });
  } else if (act === 'seal') {
    if (b.disabled) return;
    navigator.vibrate?.(22);
    runScene();
  } else if (act === 'share-result' || act === 'share-today') {
    const res = act === 'share-today' ? data.results[todayNo] : lastResult;
    if (!res) return;
    b.disabled = true;
    try {
      const how = await shareCard(shareInfo(res));
      if (how === 'shared') toast('Paylaşıldı');
    } catch {
      toast('Kart hazırlanamadı');
    } finally {
      b.disabled = false;
    }
  }
});

setInterval(() => {
  const el = app.querySelector('[data-countdown]');
  if (!el) return;
  const ms = msUntilNextCase();
  el.textContent = formatCountdown(ms);
  if (ms <= 0) location.reload();
}, 1000);

/* ---------- boot ---------- */

if (challengeIn) acceptChallenge(challengeIn);
if (coverMissed(data, todayNo)) bootNote = 'Dün gelmedin. Yedek mumun seriyi korudu.';
syncSeals(data, todayNo); // saves from before the seals existed get theirs without fanfare
persist();

if (devNo) {
  startCase(devNo, 'dev');
} else if (data.inProgress && data.inProgress.mode !== 'dev' && !resultFor(data.inProgress.no)
  && (data.inProgress.mode === 'archive' || data.inProgress.no === todayNo)) {
  startCase(data.inProgress.no, data.inProgress.mode);
} else {
  go('home');
  if (!data.onboarded) showIntro();
}
