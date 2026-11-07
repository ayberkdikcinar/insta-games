import { CREATURES, BY_ID } from './bestiary.js';
import { CLUE_DIMS, DIMS, TOOLS, TOOL_BY_ID, MAX_CANDLES } from './traits.js';
import { generateCase, fillText, candidates, famLabel, traitLabel } from './cases.js';
import { istanbulToday, caseNoForDate, formatDateTR, msUntilNextCase, formatCountdown } from './util.js';
import * as store from './store.js';
import { silhouette, plate, candleRow } from './art.js';
import { prepareCard, shareCard, returnUrl, outcomeLine, toast } from './share.js';

const app = document.getElementById('app');
const sheet = document.getElementById('sheet');
const huntEl = document.getElementById('hunt');
const modal = document.getElementById('modal');

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
let play = null; // { c, mode, used, struck, diagnosis, tools, open, fresh, showRest }
let burning = -1;
let lastResult = null;

const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const persist = () => store.save(data);
const toolNames = (ids) => ids.map((t) => TOOL_BY_ID[t].name).join(' + ');
const DIM = Object.fromEntries(DIMS.map((d) => [d.id, d]));
const caughtCount = () => Object.keys(data.caught).length;
const known = (id) => !!(data.caught[id] || data.seen[id]);
const modeLabel = (mode) => (mode === 'archive' ? ' · arşiv' : mode === 'dev' ? ' · deneme' : '');
const bucket = (mode) => (mode === 'archive' ? data.archive : mode === 'dev' ? data.dev : data.results);
const resultFor = (no) => data.results[no] || data.archive[no] || null;

function currentStreak() {
  const ok = (n) => data.results[n] && data.results[n].outcome === 'success';
  let n = data.results[todayNo] ? todayNo : todayNo - 1;
  let s = 0;
  while (n >= 1 && ok(n)) { s++; n--; }
  return s;
}

function stats() {
  const rs = Object.values(data.results);
  let best = 0;
  let run = 0;
  for (let n = 1; n <= todayNo; n++) {
    if (data.results[n]?.outcome === 'success') { run++; best = Math.max(best, run); } else run = 0;
  }
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
    url: returnUrl(), mode: res.mode,
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
  const inProgress = data.inProgress && data.inProgress.no === todayNo && data.inProgress.mode === 'daily';
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
      <p class="lede">Altı mumun var. Her soruşturma bir mum yakar. Defterdeki elli sayfadan doğrusunu bul, iki şeyle hazırlan, ava çık.</p>
      <button class="btn btn-blood" data-act="start">${inProgress ? 'Vakaya dön' : 'Mektubu aç'}</button>`;
  }
  app.innerHTML = `
    ${masthead()}
    <section class="today">${today}</section>
    <nav class="rows">
      <button class="row" data-act="defter"><span>Defter</span><em>${caughtCount()}/${CREATURES.length} sayfa dolu</em></button>
      <button class="row" data-act="archive"><span>Arşiv</span><em>Geçmiş vakalar</em></button>
      <button class="row" data-act="stats"><span>Sicil</span><em>Seri, mumlar, avlar</em></button>
    </nav>
    <p class="streak">Seri <b>${streak}</b> gün</p>
    <details class="howto">
      <summary>Nasıl oynanır?</summary>
      ${howtoList()}
    </details>`;
  if (res) prepareCard(shareInfo(res)).catch(() => {});
}

function howtoList() {
  return `<ol>
    <li>Her gün herkes aynı vakayı oynar. Yeni vaka İstanbul saatiyle gece yarısı gelir.</li>
    <li>Altı mumun var. Kurbanı görmek, izlere bakmak, tanığı dinlemek: her soruşturma bir mum yakar.</li>
    <li>Her not defterde bir işarete karşılık gelir. Defter, notlarına kabaca uyan sayfaları ayırır; ayrıntıyı okuyup kalanları sen elersin.</li>
    <li>Teşhisini koy, zaafı olan iki şeyi seçip ava çık. Kalan her mum puanındır. Avladığın yaratığın çizimi ve av notları defterine işlenir.</li>
  </ol>`;
}

function letterHTML(c) {
  return `<article class="letter">
    <p class="letter-head">${esc(c.village)} köyünden, Kara Defter’in sahibine</p>
    <p class="letter-body">${esc(c.letter.body)}</p>
    <p class="letter-sign">${esc(c.letter.sign)}</p>
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

const pool = () => candidates(play.c, play.used);
const livePool = () => pool().filter((cr) => !play.struck.includes(cr.id));

function clueHTML(dimId, fresh) {
  const clue = play.c.clues[dimId];
  return `<li class="clue${fresh ? ' fresh' : ''}">
    <p class="clue-head"><span class="clue-cat">${DIM[dimId].name}</span><span class="tag">${famLabel(dimId, clue.fam)}</span></p>
    <p>${esc(clue.text)}</p></li>`;
}

function poolLine() {
  const all = pool().length;
  const live = livePool().length;
  const struck = all - live;
  if (live === 1) return 'Defterde tek sayfa kaldı';
  return `Defterde uyan sayfa: <b>${live}</b>${struck ? ` <span class="muted">(${struck} sayfayı eledin)</span>` : ''}`;
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
      ${CLUE_DIMS.map((d) => used.includes(d.id)
        ? clueHTML(d.id, d.id === play.fresh)
        : `<li><button class="ask" data-act="ask" data-dim="${d.id}" ${left === 0 ? 'disabled' : ''}>
            <span class="ask-cat">${d.name}</span><span class="ask-act">${d.action}</span><span class="ask-cost">1 mum</span>
          </button></li>`).join('')}
    </ol>
    <div class="dock">
      <p class="pool">${poolLine()}</p>
      <button class="btn btn-ink" data-act="diagnose">Deftere bak, teşhis koy</button>
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
  const { used } = play;
  if (!used.length) return '<p class="notes-empty">Not almadın. Elinde yalnızca mektup var.</p>';
  return `<ul class="notes-list">${CLUE_DIMS.filter((d) => used.includes(d.id)).map((d) => clueHTML(d.id, false)).join('')}</ul>`;
}

function traitsTable(cr, highlight = []) {
  return `<dl class="signs">${CLUE_DIMS.map((d) => `<div class="${highlight.includes(d.id) ? 'hl' : ''}">
      <dt>${d.page}</dt><dd>${cr.traits[d.id].map((t) => traitLabel(d.id, t)).join(' · ')}</dd></div>`).join('')}</dl>`;
}

function dxItem(cr, inPool) {
  const open = play.open === cr.id;
  const struck = play.struck.includes(cr.id);
  return `<li class="dx-item${open ? ' open' : ''}${struck ? ' struck' : ''}${inPool ? '' : ' out'}">
    <button class="dx-head" data-act="expand" data-id="${cr.id}" aria-expanded="${open}">
      <span class="dx-fig">${silhouette(cr.id, known(cr.id) ? 'full' : 'veiled')}</span>
      <span class="dx-text"><span class="dx-name">${cr.name}</span><span class="dx-epi">${cr.epithet}</span></span>
    </button>
    ${open ? `<div class="dx-body">
      ${traitsTable(cr, play.used)}
      <p class="lore">${esc(cr.lore)}</p>
      <div class="dx-actions">
        <button class="btn btn-blood" data-act="choose" data-id="${cr.id}">Teşhisim: ${cr.name}</button>
        ${inPool ? `<button class="btn btn-ghost" data-act="strike" data-id="${cr.id}">${struck ? 'Elemeyi geri al' : 'Bu değil, ele'}</button>` : ''}
      </div>
    </div>` : ''}
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
    <h1 class="title">Teşhis</h1>
    <p class="lede">${play.used.length
      ? `Notlarına kabaca uyan ${inPool.length} sayfa var. Sayfaları notlarınla karşılaştır; uymayanı ele.`
      : 'Henüz not almadın; defterin elli sayfası da açık. Soruşturmaya dönüp mum yakabilirsin.'}</p>
    <details class="notes"${play.used.length ? ' open' : ''}><summary>Notların</summary>${notesHTML()}</details>
    <p class="pool">${poolLine()}</p>
    <ul class="dx">${live.map((c) => dxItem(c, true)).join('')}${struck.map((c) => dxItem(c, true)).join('')}</ul>
    ${rest.length ? `<details class="rest"${play.showRest ? ' open' : ''}>
      <summary data-act="toggle-rest">Notlarına uymayan sayfalar (${rest.length})</summary>
      <ul class="dx">${rest.map((c) => dxItem(c, false)).join('')}</ul>
    </details>` : ''}
    <div class="dock"><button class="btn btn-ghost" data-act="back-case">Soruşturmaya dön</button></div>`;
}

function renderPrepare() {
  const cr = BY_ID[play.diagnosis];
  const n = play.tools.length;
  app.innerHTML = `
    ${caseBar('back-diagnose', 'Teşhis')}
    <p class="kicker">Teşhisin: ${cr.name}</p>
    <h1 class="title">Hazırlık</h1>
    <p class="lede">Yanına yalnızca iki şey alabilirsin. Defterde ${cr.name} için ne yazıyordu?</p>
    <details class="notes"><summary>${cr.name} sayfası</summary><p class="lore">${esc(cr.lore)}</p></details>
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
      <span class="casebar-no">Vaka #${res.no}${modeLabel(res.mode)}</span>
      <button class="link" data-act="defter">Defter</button>
    </header>
    <div class="stamp stamp-${res.outcome}">${title}</div>
    <div class="result-fig">${plate(cr.id, { place: res.place, time: res.time })}</div>
    <h1 class="title center">${cr.name}</h1>
    <p class="aka center">${cr.aka.join(' · ')}</p>
    <dl class="facts">
      <div><dt>Teşhisin</dt><dd>${BY_ID[res.diagnosis].name}${right ? '' : ' <span class="wrong">(yanlış)</span>'}</dd></div>
      <div><dt>Hazırlığın</dt><dd>${toolNames(res.tools)}</dd></div>
      <div><dt>Zaafları</dt><dd>${toolNames(cr.tools)}</dd></div>
      <div><dt>Mum</dt><dd>${used === 0 ? 'Hiç yanmadı' : `${used} tane yandı`}, ${res.candlesLeft} tane kaldı</dd></div>
      <div><dt>Usta avcı</dt><dd>${res.par} mumla kesinleştirirdi</dd></div>
    </dl>
    <div class="candles candles-sm">${candleRow(MAX_CANDLES, res.candlesLeft)}</div>
    ${res.mode === 'daily' ? `<p class="streak">Seri <b>${currentStreak()}</b> gün · Defter <b>${caughtCount()}</b>/${CREATURES.length}</p>` : `<p class="streak">Defter <b>${caughtCount()}</b>/${CREATURES.length}</p>`}
    <div class="actions">
      <button class="btn btn-blood" data-act="share-result">Sonucu paylaş</button>
      <button class="btn btn-ghost" data-act="page" data-id="${cr.id}">Defterde aç</button>
      ${res.mode === 'dev' ? '<p class="hint">Deneme vakası: sonuç seriye ve günlük kilide yazılmadı.</p>'
        : res.mode === 'archive' ? '<p class="hint">Arşiv vakası: seriyi etkilemez; av defterine işlendi.</p>'
          : `<p class="next">Yeni vaka <span data-countdown>${formatCountdown(msUntilNextCase())}</span> sonra.</p>`}
    </div>`;
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
  else if (view === 'prepare') renderPrepare();
  else if (view === 'result') renderResult();
  else if (view === 'archive') renderArchive();
}

function go(next) {
  view = next;
  render();
  window.scrollTo(0, 0);
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
  };
}

function closeModal() {
  modal.hidden = true;
  modal.innerHTML = '';
  if (!data.onboarded) { data.onboarded = true; persist(); }
}

function showIntro() {
  openModal(`
    <p class="kicker">Kara Defter</p>
    <h2 class="title">Köylerden mektup geliyor.</h2>
    <p class="lede">Elinde, Anadolu’dan Türk dünyasına anlatılan elli yaratığın yazılı olduğu bir defter var. Her gün bir köy yardım istiyor.</p>
    ${howtoList()}
    <button class="btn btn-blood" data-modal="${data.results[todayNo] ? 'close' : 'start'}">${data.results[todayNo] ? 'Anladım' : 'İlk mektubu aç'}</button>
    <button class="link modal-close" data-modal="close">Kapat</button>`, 'Nasıl oynanır');
}

function showStats() {
  const s = stats();
  const max = Math.max(1, ...s.hist);
  const bars = s.hist.map((n, i) => ({ n, i })).reverse()
    .map(({ n, i }) => `<div class="bar"><span class="bar-k">${i}</span><span class="bar-v" style="width:${Math.max(6, (n / max) * 100)}%">${n}</span></div>`).join('');
  openModal(`
    <p class="kicker">Sicil</p>
    <h2 class="title">Avcının defteri</h2>
    <div class="stat-row">
      <div><b>${s.played}</b><span>vaka</span></div>
      <div><b>${s.played ? Math.round((s.won / s.played) * 100) : 0}%</b><span>tam av</span></div>
      <div><b>${s.streak}</b><span>seri</span></div>
      <div><b>${s.best}</b><span>en uzun</span></div>
    </div>
    <p class="section-s">Tam avlarda kalan mum</p>
    <div class="bars">${bars}</div>
    <p class="section-s">Defter</p>
    <p class="lede">${caughtCount()} / ${CREATURES.length} sayfa avlandı, ${Object.keys(data.seen).filter((id) => !data.caught[id]).length} sayfanın izi sürüldü.</p>
    <p class="hint">Kayıt yalnızca bu tarayıcıda tutuluyor.</p>
    <button class="btn btn-ghost" data-modal="close">Kapat</button>`, 'Sicil');
}

/* ---------- defter sheet ---------- */

function sheetListHTML() {
  const caught = caughtCount();
  return `<div class="sheet-head"><p class="mast-title">Defter</p><button class="link" data-sheet="close">Kapat</button></div>
    <p class="lede">${caught}/${CREATURES.length} sayfa avlandı. Her sayfada köylerde anlatılanlar yazılı; avladığın yaratığın çizimi ve av notları sayfasına işlenir.</p>
    <ul class="pages">${CREATURES.map((cr) => `<li><button class="page-tile${data.caught[cr.id] ? ' caught' : ''}" data-sheet="page" data-id="${cr.id}">
        <span class="tile-fig">${silhouette(cr.id, known(cr.id) ? 'full' : 'veiled')}</span>
        <span class="tile-name">${cr.name}</span>
        <span class="tile-state">${data.caught[cr.id] ? 'Avlandı' : data.seen[cr.id] ? 'İzi sürüldü' : 'Avlanmadı'}</span>
      </button></li>`).join('')}</ul>`;
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
          <p>Zaafları: <b>${toolNames(cr.tools)}</b></p>
          <p>Vaka #${caught.no}, ${formatDateTR(caught.date)} · ${caught.candlesLeft} mum artırarak avlandı${caught.mode && caught.mode !== 'daily' ? ` (${caught.mode === 'dev' ? 'deneme' : 'arşiv'})` : ''}</p>
        </section>`
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
  play = {
    c, mode, used: saved ? [...saved.used] : [], struck: saved ? [...(saved.struck || [])] : [],
    diagnosis: null, tools: [], open: null, fresh: null, showRest: false,
  };
  saveProgress();
  go('case');
}

function saveProgress() {
  data.inProgress = { no: play.c.no, mode: play.mode, used: play.used, struck: play.struck };
  persist();
}

function ask(dimId) {
  if (play.used.includes(dimId) || play.used.length >= MAX_CANDLES) return;
  play.used.push(dimId);
  play.fresh = dimId;
  burning = MAX_CANDLES - play.used.length;
  // pages ruled out by the new clue no longer need striking
  const ids = new Set(pool().map((c) => c.id));
  play.struck = play.struck.filter((id) => ids.has(id));
  saveProgress();
  rerenderKeepScroll(renderCase);
}

function finishHunt() {
  const { c, diagnosis, tools, used, mode } = play;
  const cr = BY_ID[c.creatureId];
  const right = diagnosis === cr.id;
  const hits = tools.filter((t) => cr.tools.includes(t)).length;
  const outcome = right ? (hits === 2 ? 'success' : hits === 1 ? 'partial' : 'fail') : 'fail';
  const res = {
    no: c.no, date: c.date, village: c.village, creature: cr.id, diagnosis, tools: [...tools], outcome,
    candlesLeft: MAX_CANDLES - used.length, par: c.par, place: c.place, time: c.time, mode,
  };
  bucket(mode)[c.no] = res;
  if (outcome === 'success') {
    const prev = data.caught[cr.id];
    const rank = (m) => (m === 'daily' ? 2 : m === 'archive' ? 1 : 0);
    if (!prev || rank(mode) > rank(prev.mode) || (rank(mode) === rank(prev.mode) && prev.candlesLeft < res.candlesLeft)) {
      data.caught[cr.id] = { no: c.no, date: c.date, candlesLeft: res.candlesLeft, mode };
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
      <div class="hunt-fig">${plate(cr.id, { place: c.place, time: c.time })}</div>
      <div class="hunt-lines">${lines.map((l) => `<p>${esc(l)}</p>`).join('')}</div>
      <button class="btn btn-paper hunt-done" data-act="hunt-done">Sonucu gör</button>
      <p class="hunt-skip">Geçmek için dokun</p>
    </div>`;
  huntEl.hidden = false;
  document.body.classList.add('locked');
  huntEl.scrollTop = 0;
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
  } else if (act === 'diagnose') {
    play.open = null;
    go('diagnose');
  } else if (act === 'back-case') {
    go('case');
  } else if (act === 'toggle-rest') {
    play.showRest = !play.showRest;
  } else if (act === 'expand') {
    play.open = play.open === b.dataset.id ? null : b.dataset.id;
    rerenderKeepScroll(renderDiagnose);
    app.querySelector('.dx-item.open')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  } else if (act === 'strike') {
    const id = b.dataset.id;
    play.struck = play.struck.includes(id) ? play.struck.filter((x) => x !== id) : [...play.struck, id];
    if (play.struck.includes(id)) play.open = null;
    saveProgress();
    rerenderKeepScroll(renderDiagnose);
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
    rerenderKeepScroll(renderPrepare);
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
  startCase(devNo, 'dev');
} else if (data.inProgress && data.inProgress.mode !== 'dev' && !resultFor(data.inProgress.no)
  && (data.inProgress.mode === 'archive' || data.inProgress.no === todayNo)) {
  startCase(data.inProgress.no, data.inProgress.mode);
} else {
  go('home');
  if (!data.onboarded) showIntro();
}
