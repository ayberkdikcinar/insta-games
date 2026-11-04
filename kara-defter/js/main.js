import { CREATURES, BY_ID, TOOLS, TOOL_BY_ID, CATEGORIES, MAX_CANDLES } from './data.js';
import { generateCase, fillText } from './cases.js';
import { istanbulToday, caseNoForDate, formatDateTR, msUntilNextCase, formatCountdown } from './util.js';
import * as store from './store.js';
import { silhouette, candleRow } from './art.js';
import { prepareCard, shareCard, returnUrl, outcomeLine, toast } from './share.js';

const app = document.getElementById('app');
const sheet = document.getElementById('sheet');
const huntEl = document.getElementById('hunt');

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

let data = store.load();
let view = 'home';
let play = null; // { c, used, diagnosis, tools, dev, expanded }
let burning = -1;
let lastResult = null;
let sheetPage = null;

const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const persist = () => store.save(data);
const toolNames = (ids) => ids.map((t) => TOOL_BY_ID[t].name).join(' + ');

function currentStreak() {
  const ok = (n) => data.results[n] && data.results[n].outcome === 'success';
  let n = data.results[todayNo] ? todayNo : todayNo - 1;
  let s = 0;
  while (n >= 1 && ok(n)) { s++; n--; }
  return s;
}

function shareInfo(res) {
  return {
    no: res.no, date: res.date, village: res.village, outcome: res.outcome,
    candlesLeft: res.candlesLeft, streak: res.dev ? 0 : currentStreak(), url: returnUrl(),
  };
}

/* ---------- screens ---------- */

function masthead() {
  return `<header class="mast">
    <p class="mast-title">Kara Defter</p>
    <p class="mast-sub">Köylerden gelen vakalar · her gün bir tane</p>
  </header>`;
}

function renderHome() {
  const res = data.results[todayNo];
  const c = generateCase(todayNo);
  const inProgress = data.inProgress && data.inProgress.no === todayNo && !data.inProgress.dev;
  const caught = Object.keys(data.caught).length;
  const streak = currentStreak();
  let today;
  if (res) {
    const cr = BY_ID[res.creature];
    today = `
      <div class="closed">
        <p class="kicker">Vaka #${todayNo} kapandı</p>
        <h1 class="title">${esc(outcomeLine(res))}</h1>
        <p class="lede">${esc(c.village)} köyündeki iş ${res.outcome === 'fail' ? 'çözülemedi' : 'bitti'}: <b>${cr.name}</b>.</p>
        <div class="candles candles-sm">${candleRow(MAX_CANDLES, res.candlesLeft)}</div>
        <button class="btn btn-blood" data-act="share-today">Sonucu paylaş</button>
        <p class="next">Yeni vaka <span data-countdown>${formatCountdown(msUntilNextCase())}</span> sonra.</p>
      </div>`;
  } else {
    today = `
      <p class="kicker">Vaka #${todayNo} · ${formatDateTR(todayISO)}</p>
      <h1 class="title">${esc(c.village)} köyünden bir mektup var.</h1>
      <p class="lede">Altı mumun var. Her soruşturma bir mum yakar. Yaratığı teşhis et, iki şeyle hazırlan, ava çık.</p>
      <button class="btn btn-blood" data-act="start">${inProgress ? 'Vakaya dön' : 'Mektubu aç'}</button>`;
  }
  app.innerHTML = `
    ${masthead()}
    <section class="today">${today}</section>
    <nav class="rows">
      <button class="row" data-act="defter"><span>Defter</span><em>${caught}/${CREATURES.length} sayfa dolu</em></button>
      <button class="row" data-act="archive"><span>Arşiv</span><em>Geçmiş vakalar</em></button>
    </nav>
    <p class="streak">Seri <b>${streak}</b> gün</p>
    <details class="howto">
      <summary>Nasıl oynanır?</summary>
      <ol>
        <li>Her gün herkes aynı vakayı oynar. Yeni vaka İstanbul saatiyle gece yarısı gelir.</li>
        <li>Altı mumun var. Kurbanı görmek, izlere bakmak, tanığı dinlemek: her soruşturma bir mum yakar. İstediğin an durabilirsin.</li>
        <li>Notlarını defterdeki bilgilerle karşılaştır ve yaratığı teşhis et.</li>
        <li>Zaafı olan iki şeyi seçip ava çık. Teşhis ve hazırlık doğruysa av tamamdır; kalan her mum puanındır.</li>
      </ol>
    </details>`;
  if (res) prepareCard(shareInfo(res)).catch(() => {});
}

function letterHTML(c) {
  return `<article class="letter">
    <p class="letter-head">${esc(c.village)} köyünden, Kara Defter’in sahibine</p>
    <p class="letter-body">${esc(c.intro)}</p>
    <p class="letter-sign">${esc(c.village)} muhtarı ${esc(c.muhtar)}</p>
  </article>`;
}

function caseBar(back, label) {
  const { c, dev } = play;
  return `<header class="casebar">
    <button class="link" data-act="${back}">← ${label}</button>
    <span class="casebar-no">Vaka #${c.no}${dev ? ' · deneme' : ''}</span>
    <button class="link" data-act="defter">Defter</button>
  </header>`;
}

function renderCase() {
  const { c, used } = play;
  const left = MAX_CANDLES - used.length;
  app.innerHTML = `
    ${caseBar('home', 'Masa')}
    <div class="candles" role="img" aria-label="${left} mum yanıyor">${candleRow(MAX_CANDLES, left, burning)}</div>
    <p class="candle-count">${left === 0 ? 'Mumların bitti' : `${left} mum yanıyor`}</p>
    ${letterHTML(c)}
    <h2 class="section">Soruşturma</h2>
    <ol class="inquiry">
      ${CATEGORIES.map((cat) => used.includes(cat.id)
        ? `<li class="clue${cat.id === play.fresh ? ' fresh' : ''}"><span class="clue-cat">${cat.name}</span><p>${esc(c.clues[cat.id].text)}</p></li>`
        : `<li><button class="ask" data-act="ask" data-cat="${cat.id}" ${left === 0 ? 'disabled' : ''}>
            <span class="ask-cat">${cat.name}</span><span class="ask-act">${cat.action}</span><span class="ask-cost">1 mum</span>
          </button></li>`).join('')}
    </ol>
    <div class="actions">
      <button class="btn btn-ink" data-act="diagnose">Teşhise geç</button>
      <p class="hint">${used.length === 0 ? 'Hiç mum yakmadan da teşhis koyabilirsin. Ama defter tek başına konuşmaz.' : 'Notlarını defterle karşılaştır. Kalan her mum puanındır.'}</p>
    </div>`;
  play.fresh = null;
  if (burning >= 0) {
    const was = burning;
    setTimeout(() => {
      if (burning !== was || view !== 'case') return;
      burning = -1;
      const row = app.querySelector('.candles');
      if (row) row.innerHTML = candleRow(MAX_CANDLES, MAX_CANDLES - play.used.length);
    }, 900);
  }
}

function notesHTML() {
  const { c, used } = play;
  if (!used.length) return '<p class="notes-empty">Not almadın. Teşhisi yalnızca mektuba bakarak koyacaksın.</p>';
  return `<ul class="notes-list">${CATEGORIES.filter((cat) => used.includes(cat.id))
    .map((cat) => `<li><span class="clue-cat">${cat.name}</span><p>${esc(c.clues[cat.id].text)}</p></li>`).join('')}</ul>`;
}

function renderDiagnose() {
  app.innerHTML = `
    ${caseBar('back-case', 'Soruşturma')}
    <h1 class="title">Teşhis</h1>
    <p class="lede">Notlarını defterle karşılaştır. Bu işi kim yaptı?</p>
    <details class="notes" open><summary>Notların</summary>${notesHTML()}</details>
    <ul class="dx">
      ${CREATURES.map((cr) => {
        const open = play.expanded === cr.id;
        return `<li class="dx-item${open ? ' open' : ''}">
          <button class="dx-head" data-act="expand" data-id="${cr.id}" aria-expanded="${open}">
            <span class="dx-name">${cr.name}</span><span class="dx-epi">${cr.epithet}</span>
          </button>
          ${open ? `<div class="dx-body">
            <p class="lore">${esc(cr.lore)}</p>
            <button class="btn btn-blood" data-act="choose" data-id="${cr.id}">Teşhisim: ${cr.name}</button>
          </div>` : ''}
        </li>`;
      }).join('')}
    </ul>`;
}

function renderPrepare() {
  const cr = BY_ID[play.diagnosis];
  const n = play.tools.length;
  app.innerHTML = `
    ${caseBar('back-diagnose', 'Teşhis')}
    <p class="kicker">Teşhisin: ${cr.name}</p>
    <h1 class="title">Hazırlık</h1>
    <p class="lede">Yanına yalnızca iki şey alabilirsin. Ona karşı ne işe yarar?</p>
    <ul class="tools">
      ${TOOLS.map((t) => {
        const on = play.tools.includes(t.id);
        return `<li><button class="tool${on ? ' on' : ''}" data-act="tool" data-id="${t.id}" aria-pressed="${on}">
          <span class="tool-name">${t.name}</span><span class="tool-note">${t.note}</span>
        </button></li>`;
      }).join('')}
    </ul>
    <div class="actions sticky-actions">
      <button class="btn btn-blood" data-act="hunt" ${n === 2 ? '' : 'disabled'}>${n === 2 ? 'Ava çık' : `${2 - n} şey daha seç`}</button>
    </div>`;
}

function renderResult() {
  const res = lastResult;
  const cr = BY_ID[res.creature];
  const right = res.diagnosis === res.creature;
  const title = res.outcome === 'success' ? 'Av tamam'
    : res.outcome === 'partial' ? 'Kaçtı ama köy kurtuldu'
      : right ? 'Hazırlık eksikti' : 'Yanlış teşhis';
  const used = MAX_CANDLES - res.candlesLeft;
  app.innerHTML = `
    <header class="casebar">
      <button class="link" data-act="home">← Masa</button>
      <span class="casebar-no">Vaka #${res.no}${res.dev ? ' · deneme' : ''}</span>
      <button class="link" data-act="defter">Defter</button>
    </header>
    <div class="stamp stamp-${res.outcome}">${title}</div>
    <div class="result-fig">${silhouette(cr.id, 'full')}</div>
    <h1 class="title center">${cr.name}</h1>
    <p class="aka center">${cr.aka.join(' · ')}</p>
    <dl class="facts">
      <div><dt>Teşhisin</dt><dd>${BY_ID[res.diagnosis].name}${right ? '' : ' <span class="wrong">(yanlış)</span>'}</dd></div>
      <div><dt>Hazırlığın</dt><dd>${toolNames(res.tools)}</dd></div>
      <div><dt>Zaafları</dt><dd>${toolNames(cr.tools)}</dd></div>
      <div><dt>Mum</dt><dd>${used === 0 ? 'Hiç yanmadı' : `${used} tane yandı`}, ${res.candlesLeft} tane kaldı</dd></div>
    </dl>
    <div class="candles candles-sm">${candleRow(MAX_CANDLES, res.candlesLeft)}</div>
    ${res.dev ? '' : `<p class="streak">Seri <b>${currentStreak()}</b> gün</p>`}
    <div class="actions">
      <button class="btn btn-blood" data-act="share-result">Sonucu paylaş</button>
      <button class="btn btn-ghost" data-act="page" data-id="${cr.id}">Defterde aç</button>
      ${res.dev ? '<p class="hint">Deneme vakası: sonuç seriye ve günlük kilide yazılmadı.</p>'
        : `<p class="next">Yeni vaka <span data-countdown>${formatCountdown(msUntilNextCase())}</span> sonra.</p>`}
    </div>`;
  prepareCard(shareInfo(res)).catch(() => {});
}

function renderArchive() {
  const rows = [];
  for (let n = todayNo; n >= 1; n--) {
    const res = data.results[n];
    const date = formatDateTR(caseDate(n));
    if (n === todayNo) {
      rows.push(`<li><button class="row" data-act="${res ? 'home' : 'start'}"><span>Vaka #${n}</span><em>${date} · ${res ? esc(outcomeLine(res)) : 'bugün, açık'}</em></button></li>`);
    } else {
      rows.push(`<li><div class="row locked"><span>Vaka #${n}</span><em>${date} · ${res ? esc(outcomeLine(res)) : 'kilitli'}</em></div></li>`);
    }
  }
  app.innerHTML = `
    <header class="casebar"><button class="link" data-act="home">← Masa</button><span class="casebar-no">Arşiv</span><span></span></header>
    <h1 class="title">Arşiv</h1>
    <p class="lede">Bugünün vakası herkese açık. Geçmiş vakaları yeniden açmak Lonca üyeliğiyle mümkün olacak.</p>
    <div class="guild"><p class="guild-title">Lonca üyeliği</p><p>Yakında.</p></div>
    <ul class="archive">${rows.join('')}</ul>`;
}

function caseDate(n) {
  return generateCase(n).date;
}

function render() {
  if (view === 'home') renderHome();
  else if (view === 'case') renderCase();
  else if (view === 'diagnose') renderDiagnose();
  else if (view === 'prepare') renderPrepare();
  else if (view === 'result') renderResult();
  else if (view === 'archive') renderArchive();
}

function go(next) {
  view = next;
  render();
  window.scrollTo(0, 0);
}

/* ---------- defter sheet ---------- */

function sheetListHTML() {
  return `<div class="sheet-head"><p class="mast-title">Defter</p><button class="link" data-sheet="close">Kapat</button></div>
    <p class="lede">Her sayfada köylerde anlatılanlar yazılı. Avladığın yaratığın sayfasına av notların eklenir.</p>
    <ul class="pages">${CREATURES.map((cr) => {
      const known = data.caught[cr.id] || data.seen[cr.id];
      return `<li><button class="page-tile${data.caught[cr.id] ? ' caught' : ''}" data-sheet="page" data-id="${cr.id}">
        <span class="tile-fig">${silhouette(cr.id, known ? 'full' : 'veiled')}</span>
        <span class="tile-name">${cr.name}</span>
        <span class="tile-state">${data.caught[cr.id] ? 'Avlandı' : data.seen[cr.id] ? 'İzi sürüldü' : 'Avlanmadı'}</span>
      </button></li>`;
    }).join('')}</ul>`;
}

function sheetPageHTML(id) {
  const cr = BY_ID[id];
  const caught = data.caught[id];
  const known = caught || data.seen[id];
  return `<div class="sheet-head"><button class="link" data-sheet="list">← Defter</button><button class="link" data-sheet="close">Kapat</button></div>
    <article class="page">
      <div class="page-fig">${silhouette(id, known ? 'full' : 'veiled')}</div>
      <h2 class="page-name">${cr.name}</h2>
      <p class="aka">${cr.aka.join(' · ')}</p>
      <p class="region">${cr.region}</p>
      <p class="lore">${esc(cr.lore)}</p>
      ${caught ? `<section class="av-notes">
          <h3>Av notları</h3>
          <p>Zaafları: <b>${toolNames(cr.tools)}</b></p>
          <p>Vaka #${caught.no}, ${formatDateTR(caught.date)} · ${caught.candlesLeft} mum artırarak avlandı${caught.dev ? ' (deneme)' : ''}</p>
        </section>`
        : `<p class="locked-note">Av notları, onu avladığında bu sayfaya yazılır.</p>`}
    </article>`;
}

function openSheet(page = null) {
  sheetPage = page;
  sheet.innerHTML = `<div class="sheet-card">${page ? sheetPageHTML(page) : sheetListHTML()}</div>`;
  sheet.hidden = false;
  document.body.classList.add('locked');
  sheet.scrollTop = 0;
}

function closeSheet() {
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

function startCase(no, dev) {
  const c = generateCase(no);
  const saved = data.inProgress && data.inProgress.no === no && !!data.inProgress.dev === !!dev ? data.inProgress : null;
  play = { c, used: saved ? [...saved.used] : [], diagnosis: null, tools: [], dev, expanded: null, fresh: null };
  data.inProgress = { no, dev, used: play.used };
  persist();
  go('case');
}

function ask(catId) {
  if (play.used.includes(catId) || play.used.length >= MAX_CANDLES) return;
  play.used.push(catId);
  play.fresh = catId;
  burning = MAX_CANDLES - play.used.length;
  data.inProgress = { no: play.c.no, dev: play.dev, used: play.used };
  persist();
  const y = window.scrollY;
  renderCase();
  window.scrollTo(0, y);
}

function finishHunt() {
  const { c, diagnosis, tools, used, dev } = play;
  const cr = BY_ID[c.creatureId];
  const right = diagnosis === cr.id;
  const hits = tools.filter((t) => cr.tools.includes(t)).length;
  const outcome = right ? (hits === 2 ? 'success' : hits === 1 ? 'partial' : 'fail') : 'fail';
  const res = {
    no: c.no, date: c.date, village: c.village, creature: cr.id, diagnosis, tools: [...tools],
    outcome, candlesLeft: MAX_CANDLES - used.length, dev: !!dev,
  };
  if (dev) data.dev[c.no] = res; else data.results[c.no] = res;
  if (outcome === 'success') {
    const prev = data.caught[cr.id];
    if (!prev || (prev.dev && !dev) || (!!prev.dev === !!dev && prev.candlesLeft < res.candlesLeft)) {
      data.caught[cr.id] = { no: c.no, date: c.date, candlesLeft: res.candlesLeft, dev: !!dev };
    }
  } else if (outcome === 'partial') {
    data.seen[cr.id] = true;
  }
  data.inProgress = null;
  persist();
  lastResult = res;
  return res;
}

function runHunt() {
  const res = finishHunt();
  const { c } = play;
  const cr = BY_ID[res.creature];
  const f = (s) => fillText(s, c);
  let tail;
  if (res.outcome === 'success') tail = cr.hunt.success.map(f);
  else if (res.outcome === 'partial') tail = cr.hunt.partial.map(f);
  else if (res.diagnosis === res.creature) {
    tail = ['Teşhisin doğruydu, ama yanındakiler ona işlemedi.', 'Kapıya kadar geldi, kimse onu durduramadı. Köy bir gece daha korkuyla bekledi.'];
  } else {
    tail = [`Hazırlığın ${BY_ID[res.diagnosis].name} içindi. Gelen o değildi.`, `Sabah köyün yaşlıları başka bir ad fısıldıyordu: ${cr.name}.`];
  }
  const lines = [...cr.hunt.intro.map(f), ...tail];
  const revealAt = cr.hunt.intro.length;

  huntEl.innerHTML = `<div class="hunt-inner">
      <div class="hunt-fig">${silhouette(cr.id, 'full')}</div>
      <div class="hunt-lines">${lines.map((l) => `<p>${esc(l)}</p>`).join('')}</div>
      <button class="btn btn-paper hunt-done" data-act="hunt-done">Sonucu gör</button>
      <p class="hunt-skip">Geçmek için dokun</p>
    </div>`;
  huntEl.hidden = false;
  document.body.classList.add('locked');
  const ps = [...huntEl.querySelectorAll('.hunt-lines p')];
  const fig = huntEl.querySelector('.hunt-fig');
  let i = 0;
  let timer = 0;
  const step = () => {
    if (i < ps.length) {
      ps[i].classList.add('on');
      if (i === revealAt - 1) setTimeout(() => fig.classList.add('on'), 700);
      i++;
      timer = setTimeout(step, i === revealAt ? 2400 : 1900);
    } else {
      huntEl.classList.add('done');
    }
  };
  huntEl.classList.remove('done');
  timer = setTimeout(step, 500);
  huntEl.onclick = (e) => {
    if (e.target.closest('[data-act="hunt-done"]')) {
      clearTimeout(timer);
      huntEl.hidden = true;
      huntEl.innerHTML = '';
      huntEl.onclick = null;
      document.body.classList.remove('locked');
      go('result');
      return;
    }
    if (!huntEl.classList.contains('done')) {
      clearTimeout(timer);
      ps.forEach((p) => p.classList.add('on'));
      fig.classList.add('on');
      huntEl.classList.add('done');
    }
  };
}

/* ---------- events ---------- */

app.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  const act = b.dataset.act;
  if (act === 'start') {
    if (data.results[todayNo]) return go('home');
    startCase(todayNo, false);
  } else if (act === 'home') {
    go('home');
  } else if (act === 'defter') {
    openSheet(null);
  } else if (act === 'page') {
    openSheet(b.dataset.id);
  } else if (act === 'archive') {
    go('archive');
  } else if (act === 'ask') {
    ask(b.dataset.cat);
  } else if (act === 'diagnose') {
    go('diagnose');
  } else if (act === 'back-case') {
    go('case');
  } else if (act === 'expand') {
    play.expanded = play.expanded === b.dataset.id ? null : b.dataset.id;
    renderDiagnose();
    app.querySelector('.dx-item.open')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  } else if (act === 'choose') {
    play.diagnosis = b.dataset.id;
    play.tools = [];
    go('prepare');
  } else if (act === 'back-diagnose') {
    go('diagnose');
  } else if (act === 'tool') {
    const id = b.dataset.id;
    if (play.tools.includes(id)) play.tools = play.tools.filter((t) => t !== id);
    else if (play.tools.length < 2) play.tools.push(id);
    else { play.tools.shift(); play.tools.push(id); }
    const y = window.scrollY;
    renderPrepare();
    window.scrollTo(0, y);
  } else if (act === 'hunt') {
    if (play.tools.length === 2) runHunt();
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

if (devNo) {
  startCase(devNo, true);
} else if (data.inProgress && data.inProgress.no === todayNo && !data.inProgress.dev && !data.results[todayNo]) {
  startCase(todayNo, false);
} else {
  go('home');
}
