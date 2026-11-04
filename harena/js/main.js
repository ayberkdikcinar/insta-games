// Harena prototype: screens, state and flow.
import { makeRng, xmur3, dailyNumber, dailyDateLabel, setDayOverride, clamp } from './rng.js';
import { ORIGINS, ARMS, STANCES, LUDUS_NAMES, STAT_KEYS, STAT_LABELS, armById, stanceById, injuryById, quirkOf } from './data.js';
import { makeGladiator, effStats, powerOf, recruitPrice, marketFor, opponentsFor, TIERS, fermanFor, grantNick, featNicks, epitaph, genitive } from './gen.js';
import { portraitSVG } from './portrait.js';
import { simulate, fighterFrom } from './fight.js';
import { playFight } from './arena.js';
import { snapshot, encodeLink, parseHash, encodeCode, decodeCode } from './codec.js';
import { loadSave, writeSave, clearSave, loadPending, writePending } from './store.js';
import { championCard, tombstoneCard, fermanCard, openShare } from './share.js';

const app = document.getElementById('app');
const MAX_ROSTER = 4;
const MEDICUS = 20;
let S = null;
let handlers = {};

// --- dev params ----------------------------------------------------------------
const params = new URLSearchParams(location.search);
if (params.has('reset')) {
  clearSave();
  params.delete('reset');
  history.replaceState(null, '', location.pathname + (params.toString() ? '?' + params : '') + location.hash);
}
if (params.has('gun')) setDayOverride(parseInt(params.get('gun'), 10));

// --- helpers -------------------------------------------------------------------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const save = () => { if (S) writeSave(S); };
const baseUrl = () => location.origin + location.pathname;
const alive = () => S.roster.filter((g) => g.alive);
const byId = (id) => S.roster.find((g) => g.id === id);
const nickHtml = (g) => (g.nick ? ` <em>“${esc(g.nick)}”</em>` : '');
const coin = '<svg class="coin" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8.2" fill="#C8963E" stroke="#1E1A17" stroke-width="1.6"/><path d="M6.5 10h7M10 6.5v7" stroke="#1E1A17" stroke-width="1.4" stroke-linecap="round"/></svg>';
const money = (n) => `<span class="purse">${coin}<b>${n}</b></span>`;

function render(html, h = {}) {
  app.innerHTML = html;
  handlers = h;
}
app.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled || b.tagName === 'FORM') return;
  const fn = handlers[b.dataset.act];
  if (fn) { e.preventDefault(); fn(b.dataset, b); }
});
app.addEventListener('submit', (e) => {
  e.preventDefault();
  const fn = handlers[e.target.dataset.act];
  if (fn) fn(e.target);
});

function go(fn, ...args) {
  window.scrollTo(0, 0);
  fn(...args);
}

let toastTimer;
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('on'), 2600);
}

function statBars(g) {
  const s = effStats(g);
  return `<dl class="stats">${STAT_KEYS.map((k) => `<div><dt>${STAT_LABELS[k]}</dt><dd><span class="bar">${Array.from({ length: 10 }, (_, i) => `<i class="${i < s[k] ? 'on' : ''}"></i>`).join('')}</span></dd></div>`).join('')}</dl>`;
}

function condition(g) {
  if (!g.alive) return '<span class="cond dead">Öldü</span>';
  if (g.rest > 0) return `<span class="cond hurt">Yaralı · ${g.rest} gün dinlenmeli</span>`;
  if (S && g.foughtDay === S.day) return '<span class="cond">Bugün dövüştü</span>';
  return '<span class="cond ok">Dövüşe hazır</span>';
}

function injuryChips(g) {
  if (!g.injuries?.length) return '';
  return `<ul class="chips">${g.injuries.map((i) => {
    const d = injuryById(i.id);
    const mods = Object.entries(d.mod).map(([k, v]) => `${STAT_LABELS[k]} ${v > 0 ? '+' : '−'}${Math.abs(v)}`).join(', ');
    return `<li title="${esc(mods)}">${esc(d.label)}</li>`;
  }).join('')}</ul>`;
}

function gladCard(g, { actions = '', compact = false, showCond = true } = {}) {
  const q = quirkOf(g);
  return `<article class="gcard${compact ? ' compact' : ''}">
    <div class="portrait">${portraitSVG(g, { w: 200, h: 240 })}</div>
    <div class="ginfo">
      <h3>${esc(g.name)}${nickHtml(g)}</h3>
      <p class="meta">${ORIGINS[g.origin].label} · ${armById(g.arm).label}${g.age ? ` · ${g.age} yaşında` : ''}</p>
      <p class="rec"><b>${g.rec.w}</b> galibiyet · <b>${g.rec.l}</b> mağlubiyet${g.rec.k ? ` · <b>${g.rec.k}</b> öldürme` : ''}</p>
      ${statBars(g)}
      ${q ? `<p class="quirk"><span>${esc(q.label)}.</span> ${esc(q.desc)}</p>` : ''}
      ${injuryChips(g)}
      ${showCond ? `<p class="condrow">${condition(g)}</p>` : ''}
      ${actions ? `<div class="gactions">${actions}</div>` : ''}
    </div>
  </article>`;
}

function newSave(ludus, starter) {
  starter.joinedDay = 1;
  return {
    v: 1, seed: Math.random().toString(36).slice(2, 10), ludus, day: 1, money: 150,
    roster: [starter], graveyard: [], trophies: [], fermans: {}, bought: {}, createdAt: Date.now(),
  };
}

function clearHash() {
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
}

// --- intro ---------------------------------------------------------------------
function showIntro(opts = {}) {
  const pending = loadPending();
  const starter = pending?.starter?.alive ? pending.starter : makeGladiator({ power: 18 });
  const defName = LUDUS_NAMES[Math.floor(Math.random() * LUDUS_NAMES.length)];
  render(`<section class="screen intro">
    <p class="kicker">Harena</p>
    <h1 class="display">Kum sana kaldı.</h1>
    <p class="lead">Capua’nın kenarında küçük bir ludus, kasada 150 denarius, avluda tek bir adam. Gerisini arena yazacak.</p>
    ${pending?.trophy ? `<p class="note">Yanında bir ganimetle geliyorsun: ${esc(genitive(pending.trophy.name))} miğferi.</p>` : ''}
    <h2 class="section">İlk gladyatörün</h2>
    ${gladCard(starter, { showCond: false })}
    <form class="field" data-act="start">
      <label for="ludusName">Ludusunun adı</label>
      <input id="ludusName" maxlength="28" autocomplete="off" value="${esc(defName)}">
      <button class="btn primary big" type="submit">Ludusu aç</button>
    </form>
    ${codeForm()}
  </section>`, {
    start: (form) => {
      const name = (form.querySelector('input').value || defName).trim().slice(0, 28) || defName;
      starter.foughtDay = 0;
      S = newSave(name, starter);
      if (pending?.trophy) S.trophies.push(pending.trophy);
      writePending(null);
      save();
      if (opts.then === 'ferman') go(showFerman); else go(showLudus);
    },
    code: submitCode,
  });
}

function codeForm() {
  return `<form class="codeform" data-act="code">
    <label for="codeIn">Bir hikâyede meydan okuma kodu mu gördün?</label>
    <div class="coderow"><input id="codeIn" placeholder="XXXX-XXXX-XXXX-XXXX" autocomplete="off" autocapitalize="characters" spellcheck="false"><button class="btn" type="submit">Aç</button></div>
  </form>`;
}

function submitCode(form) {
  const v = form.querySelector('input').value;
  const g = decodeCode(v);
  if (!g) { toast('Kod okunamadı. Harfleri kontrol et.'); return; }
  go(openGhost, g);
}

// --- ludus ---------------------------------------------------------------------
function showLudus() {
  clearHash();
  const n = dailyNumber();
  const fer = fermanFor(n);
  const done = S.fermans[n];
  const list = alive();
  const slots = MAX_ROSTER - list.length;
  render(`<section class="screen ludus">
    <header class="topbar">
      <div><p class="kicker">Gün ${S.day}</p><h1>${esc(S.ludus)}</h1></div>
      ${money(S.money)}
    </header>
    <button class="ferman-banner" data-act="ferman">
      <span class="kicker">Ferman #${n} · ${dailyDateLabel(n)}</span>
      <span class="ferman-text">${esc(fer.rule.text)}</span>
      <span class="ferman-state">${done ? 'Bugünkü fermanı tamamladın' : 'Herkese aynı dövüş, tek hak ›'}</span>
    </button>
    <h2 class="section">Gladyatörler <small>${list.length}/${MAX_ROSTER}</small></h2>
    ${list.map((g) => gladCard(g, {
      actions: `<button class="btn small" data-act="shareG" data-id="${g.id}">Kartını paylaş</button>${g.rest > 0 ? `<button class="btn small" data-act="medicus" data-id="${g.id}" ${S.money < MEDICUS ? 'disabled' : ''}>Medicus · ${MEDICUS} ${coin}</button>` : ''}`,
    })).join('')}
    ${Array.from({ length: slots }, () => '<button class="slot" data-act="market">Boş yatak <span>Pazara git ›</span></button>').join('')}
    <div class="slot locked">5. yatak <span>Yakında</span></div>
    ${S.graveyard.length ? `<h2 class="section">Mezarlık</h2><ul class="graves">${S.graveyard.map((g) => `<li><button data-act="grave" data-id="${g.id}"><span class="stone" aria-hidden="true"></span><span><b>${esc(g.name)}</b>${g.nick ? ` “${esc(g.nick)}”` : ''}<small>${g.rec.w + g.rec.l} dövüş · ${g.rec.w} galibiyet · ${g.death?.day ? `${g.death.day}. gün` : ''}</small></span></button></li>`).join('')}</ul>` : ''}
    ${S.trophies.length ? `<h2 class="section">Ganimetler</h2><ul class="trophies">${S.trophies.map((t) => `<li><span class="helm" aria-hidden="true"></span><span><b>${esc(genitive(t.name))} miğferi</b><small>${t.nick ? `“${esc(t.nick)}” · ` : ''}${t.ludus ? esc(t.ludus) : 'Meydan okuma'}</small></span></li>`).join('')}</ul>` : ''}
    ${codeForm()}
    <nav class="actionbar">
      <button class="btn" data-act="market">Pazar</button>
      <button class="btn primary" data-act="fight">Dövüş</button>
      <button class="btn" data-act="endday">Günü bitir</button>
    </nav>
  </section>`, {
    ferman: () => go(showFerman),
    market: () => go(showMarket),
    fight: () => {
      const ready = alive().filter((g) => g.rest === 0 && g.foughtDay !== S.day);
      if (!ready.length) { toast(alive().length ? 'Bugün dövüşe hazır kimse yok. Günü bitir.' : 'Ludusun boş. Pazardan birini al.'); return; }
      go(showSetup, { mode: 'normal' });
    },
    endday: endDay,
    medicus: ({ id }) => {
      const g = byId(id);
      if (!g || S.money < MEDICUS) return;
      S.money -= MEDICUS;
      g.rest = Math.max(0, g.rest - 1);
      save();
      toast(`Medicus ${g.name} ile ilgilendi.`);
      showLudus();
    },
    shareG: ({ id }) => shareChampion(byId(id)),
    grave: ({ id }) => go(showEpitaph, S.graveyard.find((g) => g.id === id), { own: true }),
    code: submitCode,
  });
}

function endDay() {
  const upkeep = 3 * alive().length;
  S.day++;
  S.money = Math.max(0, S.money - upkeep);
  for (const g of S.roster) g.rest = Math.max(0, g.rest - 1);
  save();
  window.scrollTo(0, 0);
  showLudus();
  toast(`Gün ${S.day}. Yiyecek −${upkeep} denarius. Pazar yenilendi.`);
}

// --- market --------------------------------------------------------------------
function showMarket() {
  const list = marketFor(S);
  const bought = S.bought[S.day] || [];
  const full = alive().length >= MAX_ROSTER;
  render(`<section class="screen market">
    <header class="subbar"><button class="back" data-act="back">‹ Ludus</button><span class="kicker">Pazar · Gün ${S.day}</span>${money(S.money)}</header>
    <h1>Pazar</h1>
    <p class="lead">Her gün üç adam getirilir. Ucuz olanın bir bildiği vardır, pahalı olanın da.</p>
    ${full ? '<p class="note">Yataklar dolu. Yer açılmadan kimseyi alamazsın.</p>' : ''}
    ${list.map((g, i) => {
      const price = recruitPrice(g);
      const sold = bought.includes(i);
      return gladCard(g, {
        showCond: false,
        actions: sold ? '<span class="sold">Satın alındı</span>' : `<button class="btn primary small" data-act="buy" data-i="${i}" ${full || S.money < price ? 'disabled' : ''}>${price ? `Satın al · ${price} ${coin}` : 'Gönüllü · ücretsiz'}</button>`,
      }) + (g.free ? '<p class="note small">Auctoratus: kendi isteğiyle sözleşme imzalayan özgür bir adam.</p>' : '');
    }).join('')}
  </section>`, {
    back: () => go(showLudus),
    buy: ({ i }) => {
      const g = list[+i];
      const price = recruitPrice(g);
      if (S.money < price || alive().length >= MAX_ROSTER) return;
      S.money -= price;
      g.joinedDay = S.day;
      delete g.free;
      if (S.roster.some((x) => x.id === g.id)) g.id += 'x';
      S.roster.push(g);
      S.bought[S.day] = [...bought, +i];
      save();
      toast(`${g.name} artık ${S.ludus} adına dövüşecek.`);
      showMarket();
    },
  });
}

// --- fight setup ---------------------------------------------------------------
const UI = { setup: null };

function eligible(mode) {
  return alive().filter((g) => g.rest === 0 && (mode !== 'normal' || g.foughtDay !== S.day));
}

function showSetup(cfg) {
  const st = UI.setup = { ...cfg };
  const pool = st.starter ? [st.starter] : eligible(st.mode);
  if (!pool.length) { toast('Dövüşe hazır gladyatörün yok.'); go(showLudus); return; }
  if (!st.gid || !pool.some((g) => g.id === st.gid)) st.gid = pool[0].id;
  st.oi ??= 1;
  st.stance ??= 'dengeli';
  drawSetup(pool);
}

function drawSetup(pool) {
  const st = UI.setup;
  const g = pool.find((x) => x.id === st.gid);
  const rule = st.rule || {};
  const opps = st.mode === 'normal' ? opponentsFor(S, g) : [st.opp];
  const opp = opps[st.mode === 'normal' ? st.oi : 0];
  const forced = rule.forceArm;
  if (!st.arm || (st.armFor !== g.id && !st.armTouched)) { st.arm = g.arm; st.armFor = g.id; }
  if (forced) st.arm = forced;
  if (rule.banArm && st.arm === rule.banArm) st.arm = ARMS.find((a) => a.id !== rule.banArm).id;
  const title = st.mode === 'ferman' ? `Ferman #${st.n}` : st.mode === 'challenge' ? 'Meydan okuma' : 'Arena';
  const reward = st.mode === 'normal' ? Math.round(TIERS[st.oi].pay * stanceById(st.stance).pay) : st.mode === 'ferman' ? Math.round(50 * (rule.payMul || 1) * stanceById(st.stance).pay) : 20;
  const y = window.scrollY;
  const matchup = (a) => {
    const A = armById(a);
    if (A.beats === opp.arm) return '<span class="tag good">Üstün</span>';
    if (armById(opp.arm).beats === a) return '<span class="tag bad">Zayıf</span>';
    return '<span class="tag">Denk</span>';
  };
  const oppRow = (o, i) => `<button class="opp ${st.mode !== 'normal' || i === st.oi ? 'sel' : ''}" ${st.mode === 'normal' ? `data-act="selO" data-i="${i}"` : 'disabled'}>
      <span class="mini">${portraitSVG(o, { w: 60, h: 72, frame: false })}</span>
      <span class="otext">
        ${st.mode === 'normal' ? `<span class="tier t${i}">${TIERS[i].label}</span>` : ''}
        <b>${esc(o.name)}${o.nick ? ` “${esc(o.nick)}”` : ''}</b>
        <small>${ORIGINS[o.origin].label} · ${armById(o.arm).label} · güç ${powerOf(o)}</small>
        ${st.mode === 'normal' ? `<small>Ödül ≈ ${Math.round(TIERS[i].pay * stanceById(st.stance).pay)} denarius</small>` : ''}
      </span>
    </button>`;

  render(`<section class="screen setup">
    <header class="subbar"><button class="back" data-act="back">‹ ${st.mode === 'challenge' ? 'Vazgeç' : 'Ludus'}</button><span class="kicker">${title}</span>${S ? money(S.money) : ''}</header>
    ${st.mode === 'ferman' ? `<p class="rule">${esc(rule.text)}</p>` : ''}
    <h2 class="step"><span>1</span> Kim çıkacak?</h2>
    <div class="picks">${pool.map((x) => `<button class="pick ${x.id === st.gid ? 'sel' : ''}" data-act="selG" data-id="${x.id}">
      <span class="mini">${portraitSVG(x, { w: 60, h: 72, frame: false })}</span>
      <span class="otext"><b>${esc(x.name)}${x.nick ? ` “${esc(x.nick)}”` : ''}</b><small>${ORIGINS[x.origin].label} · güç ${powerOf(x)} · ${x.rec.w}G ${x.rec.l}M</small></span>
    </button>`).join('')}</div>
    <h2 class="step"><span>2</span> ${st.mode === 'normal' ? 'Rakibini seç' : 'Rakibin'}</h2>
    <div class="opps">${opps.map(oppRow).join('')}</div>
    <h2 class="step"><span>3</span> Silah</h2>
    <div class="arms">${ARMS.map((a) => {
      const dis = (forced && a.id !== forced) || rule.banArm === a.id;
      return `<button class="arm ${st.arm === a.id ? 'sel' : ''}" data-act="selA" data-id="${a.id}" ${dis ? 'disabled' : ''}>
        <b>${a.label}</b><small>${a.gear}</small>${dis ? '<span class="tag">Fermanla kapalı</span>' : matchup(a.id)}
      </button>`;
    }).join('')}</div>
    <p class="hint">Kalkan çift kılıcı, ağ kalkanı, çift kılıç ağı yener.</p>
    <h2 class="step"><span>4</span> Tavır</h2>
    <div class="stances">${STANCES.map((s) => `<button class="stance ${st.stance === s.id ? 'sel' : ''}" data-act="selS" data-id="${s.id}"><b>${s.label}</b><small>${s.desc}</small></button>`).join('')}</div>
    <div class="go">
      <p>Ödül ≈ <b>${reward}</b> denarius · Bu dövüşte ölüm gerçek.</p>
      <button class="btn primary big" data-act="go">Arenaya çık</button>
    </div>
  </section>`, {
    back: () => (st.mode === 'challenge' ? go(openGhost, st.opp) : go(showLudus)),
    selG: ({ id }) => { st.gid = id; st.armTouched = false; drawSetup(pool); },
    selO: ({ i }) => { st.oi = +i; drawSetup(pool); },
    selA: ({ id }) => { st.arm = id; st.armTouched = true; drawSetup(pool); },
    selS: ({ id }) => { st.stance = id; drawSetup(pool); },
    go: () => go(runFight, { ...st, g, opp }),
  });
  window.scrollTo(0, y);
}

// --- fight ---------------------------------------------------------------------
async function runFight(ctx) {
  const { g, opp, arm, stance, rule = {} } = ctx;
  const A = fighterFrom(g, effStats(g), { arm, stance });
  const B = fighterFrom(opp, effStats(opp), { arm: opp.arm, stance: 'dengeli' });
  const seed = xmur3(`${S?.seed || 'misafir'}:${g.id}:${opp.id}:${Date.now()}:${Math.random()}`);
  const res = simulate(A, B, { seed, rule });
  const bar = (f, i) => `<div class="hp ${i ? 'right' : ''}">
      <b>${esc(f.name)}</b>${f.nick ? `<em>“${esc(f.nick)}”</em>` : ''}
      <div class="hpbar"><i id="hp${i}" style="width:100%"></i></div>
    </div>`;
  render(`<section class="screen fight">
    <div class="hprow">${bar(g, 0)}<span class="vs" lang="la">${armById(arm).label}<br>${armById(opp.arm).label}</span>${bar(opp, 1)}</div>
    <div class="arena" id="arenaHost"></div>
    <div class="crowd"><span>Kalabalık</span><div class="meter"><i id="crowd" style="width:35%"></i></div><b id="crowdN">35</b></div>
    <ol class="log" id="log"></ol>
    <button class="btn ghost skip" data-act="skip">Geç ›</button>
  </section>`, {});
  const host = document.getElementById('arenaHost');
  const log = document.getElementById('log');
  const player = playFight(host, {
    gA: g, gB: opp, armA: arm, armB: opp.arm, result: res,
    onEvent: (e) => {
      document.getElementById('hp0').style.width = `${(100 * e.hp[0]) / res.max[0]}%`;
      document.getElementById('hp1').style.width = `${(100 * e.hp[1]) / res.max[1]}%`;
      document.getElementById('crowd').style.width = `${e.crowd}%`;
      document.getElementById('crowdN').textContent = e.crowd;
      const li = document.createElement('li');
      li.textContent = e.text;
      if (e.type === 'verdict' || e.type === 'fall' || e.heavy || e.inj) li.className = 'strong';
      log.prepend(li);
      while (log.children.length > 4) log.lastChild.remove();
    },
  });
  handlers = { skip: () => player.skip() };
  await player.promise;
  handlers = {};
  const skipBtn = app.querySelector('.skip');
  if (skipBtn) skipBtn.remove();
  await new Promise((r) => setTimeout(r, 900));
  const out = applyOutcome(ctx, res);
  go(showResult, ctx, res, out);
}

function applyOutcome(ctx, res) {
  const { g, opp, mode, arm, stance, rule = {} } = ctx;
  const won = res.winner === 0, lost = res.winner === 1, draw = !!res.draw;
  const ownPower = powerOf(g), oppPower = powerOf(opp);
  const day = S?.day || 1;
  const out = { won, lost, draw, pay: 0, newInj: [], nicks: [], died: false, spared: false, killed: false, rest: 0, nickBefore: g.nick };
  for (const inj of res.newInj[0]) {
    g.injuries.push({ ...inj, day });
    out.newInj.push(inj.id);
    const n = grantNick(g, injuryById(inj.id).nick, 1);
    if (n) out.nicks.push(n);
  }
  if (won) { g.rec.w++; g.streak = (g.streak || 0) + 1; if (!res.spared) { g.rec.k++; out.killed = true; } }
  if (lost) {
    g.rec.l++;
    g.streak = 0;
    if (res.spared) { g.spared = (g.spared || 0) + 1; out.spared = true; } else {
      g.alive = false;
      out.died = true;
      g.death = { byName: opp.name, byOrigin: opp.origin, stance, oppPower, ownPower, day, crowd: res.crowd };
    }
  }
  out.nicks.push(...featNicks(g, { won, spared: out.spared, oppPower, ownPower }));
  const lossRatio = 1 - res.hp[0] / res.max[0];
  out.rest = out.died ? 0 : lost ? 3 : lossRatio > 0.7 ? 3 : lossRatio > 0.45 ? 2 : lossRatio > 0.2 ? 1 : 0;
  g.rest = Math.max(g.rest || 0, out.rest);
  g.arm = arm;
  g.log = g.log || [];
  g.log.push({ d: day, opp: opp.name, oo: opp.origin, r: won ? 'w' : lost ? 'l' : 'd', inj: out.newInj, mode });

  const stancePay = stanceById(stance).pay;
  if (mode === 'normal') {
    g.foughtDay = day;
    out.pay = won ? Math.round(TIERS[ctx.oi].pay * stancePay) + Math.round(res.crowd / 10) * 2 : draw ? 15 : 5;
  } else if (mode === 'ferman') {
    out.pay = won ? Math.round(50 * (rule.payMul || 1) * stancePay) + Math.round(res.crowd / 5) : 10;
    S.fermans[ctx.n] = {
      n: ctx.n, rule: rule.text, won, draw, spared: out.spared, died: out.died, crowd: res.crowd,
      mine: { seed: g.seed, origin: g.origin, name: g.name, nick: g.nick, age: g.age, injuries: g.injuries.map((i) => ({ id: i.id })) },
      opp: { seed: opp.seed, origin: opp.origin, name: opp.name, nick: opp.nick, age: opp.age, injuries: [] },
    };
  } else if (mode === 'challenge') {
    out.pay = won ? 20 : 0;
    if (won) out.trophy = { name: opp.name, nick: opp.nick, ludus: opp.ludus, origin: opp.origin, seed: opp.seed, day };
  }

  if (S) {
    S.money += out.pay;
    if (out.trophy) S.trophies.unshift(out.trophy);
    if (out.died) {
      S.roster = S.roster.filter((x) => x.id !== g.id);
      S.graveyard.unshift(g);
    }
    save();
  } else {
    // newcomer: carry the starter and any trophy into their first ludus
    writePending({ starter: g, trophy: out.trophy || null });
  }
  return out;
}

function showResult(ctx, res, out) {
  const { g, opp, mode } = ctx;
  const title = out.died ? 'Öldü' : out.won ? 'Zafer' : out.draw ? 'Berabere' : 'Yenilgi';
  const verdict = res.draw ? 'İkisi de ayakta gönderildi: stantes missi.'
    : out.won ? (out.killed ? `Kalabalık “Iugula!” istedi. ${esc(opp.name)} kumdan kalkmadı.` : `Kalabalık “Missio!” dedi. ${esc(opp.name)} bağışlandı.`)
      : out.spared ? `Kalabalık “Missio!” diye bağırdı. ${esc(g.name)} bağışlandı.` : `Kalabalık “Iugula!” istedi. ${esc(g.name)} kumdan kalkmadı.`;
  const items = [];
  if (out.pay) items.push(`<li><b>+${out.pay}</b> denarius</li>`);
  for (const id of out.newInj) {
    const d = injuryById(id);
    items.push(`<li class="bad">Kalıcı yara: <b>${d.label}</b> <small>(${Object.entries(d.mod).map(([k, v]) => `${STAT_LABELS[k]} ${v > 0 ? '+' : '−'}${Math.abs(v)}`).join(', ')})</small></li>`);
  }
  if (out.nicks.length && g.nick !== out.nickBefore) {
    items.push(`<li class="good">${out.died ? 'Ona' : 'Artık ona'} <b>“${esc(g.nick)}”</b> ${out.died ? 'diyorlardı' : 'diyorlar'}.${out.nickBefore ? ` <small>(eskiden “${esc(out.nickBefore)}”)</small>` : ''}</li>`);
  }
  if (out.trophy) items.push(`<li class="good"><b>${esc(genitive(opp.name))} miğferini</b> aldın.</li>`);
  if (!out.died && out.rest) items.push(`<li>${out.rest} gün dinlenmesi gerek.</li>`);
  if (mode === 'challenge' && !out.won && !out.draw) items.push(`<li>${esc(opp.name)} bir kurban daha aldı.</li>`);

  const newcomer = !S;
  const buttons = [];
  if (out.died) buttons.push('<button class="btn primary big" data-act="grave">Mezar taşı</button>');
  if (mode === 'ferman') buttons.push('<button class="btn primary" data-act="shareF">Ferman kartını paylaş</button>');
  if (!out.died && mode !== 'ferman') buttons.push('<button class="btn" data-act="shareG">Kartını paylaş</button>');
  buttons.push(newcomer ? '<button class="btn primary big" data-act="found">Kendi ludusunu kur</button>' : '<button class="btn" data-act="home">Ludus’a dön</button>');

  render(`<section class="screen result">
    <p class="kicker">${mode === 'ferman' ? `Ferman #${ctx.n}` : mode === 'challenge' ? 'Meydan okuma' : 'Arena'} · ${esc(g.name)} – ${esc(opp.name)}</p>
    <h1 class="outcome ${out.won ? 'won' : out.died ? 'died' : ''}">${title}</h1>
    <p class="lead">${verdict}</p>
    <div class="result-card">${gladCard(g, { showCond: !out.died })}</div>
    ${items.length ? `<ul class="changes">${items.join('')}</ul>` : ''}
    <div class="buttons">${buttons.join('')}</div>
  </section>`, {
    grave: () => go(showEpitaph, g, { own: !!S }),
    shareG: () => shareChampion(g),
    shareF: () => shareFerman(ctx.n),
    home: () => go(showLudus),
    found: () => { clearHash(); go(showIntro); },
  });
}

// --- epitaph -------------------------------------------------------------------
function epitaphHTML(ep, g) {
  return `<div class="stele">
    <p class="dm">${ep.head}</p>
    <div class="medal">${portraitSVG(g, { w: 120, h: 144, frame: false })}</div>
    <h1>${esc(ep.name)}</h1>
    ${ep.nick ? `<p class="snick">“${esc(ep.nick)}”</p>` : ''}
    <p class="sline">${esc(ep.line1)}</p>
    <p class="sorigin">${esc(ep.line2)}</p>
    <p class="smain">${esc(ep.main)}</p>
    ${ep.extra ? `<p class="sextra">${esc(ep.extra)}</p>` : ''}
    ${ep.end ? `<p class="send">${esc(ep.end)}</p>` : ''}
  </div>`;
}

function showEpitaph(g, { own = false, foreign = false } = {}) {
  let ep;
  if (foreign) {
    const base = epitaph({ ...g, death: {} }, g.ludus);
    ep = { ...base, ...(g.epitaph || {}) };
    if (!g.epitaph) ep.main = 'Kumda öldü. Gerisini taşa sığdıramadılar.';
  } else {
    ep = epitaph(g, S?.ludus);
  }
  render(`<section class="screen epitaph">
    ${foreign ? '<p class="kicker">Harena · bir mezar taşı</p>' : '<header class="subbar"><button class="back" data-act="home">‹ Ludus</button><span class="kicker">Mezarlık</span><span></span></header>'}
    ${epitaphHTML(ep, g)}
    <div class="buttons">
      ${foreign ? '' : '<button class="btn primary" data-act="share">Mezar taşını paylaş</button>'}
      ${S ? '<button class="btn" data-act="home">Ludus’a dön</button>' : '<button class="btn primary big" data-act="found">Kendi ludusunu kur</button>'}
    </div>
  </section>`, {
    home: () => go(showLudus),
    found: () => { clearHash(); go(showIntro); },
    share: () => shareTombstone(g, ep),
  });
}

// --- challenge -----------------------------------------------------------------
function openGhost(ghost) {
  if (!ghost.alive) { showEpitaph(ghost, { foreign: true }); return; }
  const ludusLine = ghost.ludus ? `${esc(genitive(ghost.ludus))} gladyatörü ${esc(ghost.name)}` : esc(ghost.name);
  const starter = S ? null : (loadPending()?.starter?.alive ? loadPending().starter : makeGladiator({ seed: (xmur3(`acemi:${ghost.seed}`) & 0xfffff) || 7, power: clamp(powerOf(ghost) - 1, 14, 22) }));
  const ready = S ? eligible('challenge') : [];
  render(`<section class="screen challenge">
    <p class="kicker">Meydan okuma</p>
    <h1>${ludusLine} sana meydan okuyor.</h1>
    ${gladCard(ghost, { showCond: false })}
    ${S ? (ready.length ? '<p class="lead">Ludusundan birini seç. Kaybedersen kalabalık karar verir.</p>' : '<p class="note">Şu an dövüşe hazır gladyatörün yok. Günü bitirip geri gel.</p>')
      : `<p class="lead">Henüz bir ludusun yok. Sana bir acemi verildi; kazanırsan onu ve miğferi kendi ludusuna götürürsün.</p>${gladCard(starter, { showCond: false })}`}
    <div class="buttons">
      ${!S || ready.length ? '<button class="btn primary big" data-act="ready">Hazırlan</button>' : ''}
      <button class="btn ghost" data-act="home">${S ? 'Ludus’a dön' : 'Önce kendi ludusumu kurayım'}</button>
    </div>
  </section>`, {
    ready: () => go(showSetup, { mode: 'challenge', opp: ghost, starter }),
    home: () => { clearHash(); go(S ? showLudus : showIntro); },
  });
}

// --- ferman --------------------------------------------------------------------
function showFerman() {
  const n = dailyNumber();
  const fer = fermanFor(n);
  const done = S.fermans[n];
  const ready = eligible('ferman');
  render(`<section class="screen ferman">
    <header class="subbar"><button class="back" data-act="home">‹ Ludus</button><span class="kicker">Ferman #${n} · ${dailyDateLabel(n)}</span>${money(S.money)}</header>
    <h1 class="rule-title">${esc(fer.rule.text)}</h1>
    <p class="lead">Bugünün fermanı herkese aynı: aynı rakip, aynı kural, tek hak.</p>
    ${gladCard(fer.opp, { showCond: false })}
    ${done ? `<div class="done"><p class="kicker">Sonucun</p><p class="big">${done.died ? 'Öldü' : done.won ? 'Zafer' : done.draw ? 'Berabere' : done.spared ? 'Bağışlandı' : 'Yenilgi'} · kalabalık ${done.crowd}/100</p><p>${esc(done.mine.name)}${done.mine.nick ? ` “${esc(done.mine.nick)}”` : ''} ile çıktın. Yeni ferman yarın.</p></div>`
      : !ready.length ? '<p class="note">Dövüşe hazır gladyatörün yok. Günü bitirip iyileştirebilir, sonra dönebilirsin.</p>' : ''}
    <div class="buttons">
      ${done ? '<button class="btn primary" data-act="share">Ferman kartını paylaş</button>' : ready.length ? '<button class="btn primary big" data-act="ready">Hazırlan</button>' : ''}
      <button class="btn ghost" data-act="home">Ludus’a dön</button>
    </div>
  </section>`, {
    home: () => go(showLudus),
    ready: () => go(showSetup, { mode: 'ferman', n, rule: fer.rule, opp: fer.opp }),
    share: () => shareFerman(n),
  });
}

// --- sharing -------------------------------------------------------------------
async function shareChampion(g) {
  if (!g) return;
  toast('Kart hazırlanıyor…');
  const code = encodeCode(g);
  const url = baseUrl() + encodeLink(snapshot(g, S?.ludus));
  const canvas = await championCard(g, S?.ludus, code);
  openShare(canvas, { filename: `harena-${g.name.toLowerCase()}.png`, text: `${g.name}${g.nick ? ` “${g.nick}”` : ''} seni bekliyor. Onu yenebilir misin?`, url });
}

async function shareTombstone(g, ep) {
  toast('Mezar taşı hazırlanıyor…');
  const code = encodeCode(g);
  const url = baseUrl() + encodeLink(snapshot(g, S?.ludus, { e: { main: ep.main, line2: ep.line2, extra: ep.extra, end: ep.end } }));
  const canvas = await tombstoneCard(g, ep, code);
  openShare(canvas, { filename: `harena-mezar-${g.name.toLowerCase()}.png`, text: `${g.name} kumdan kalkmadı.`, url });
}

async function shareFerman(n) {
  const rec = S?.fermans[n];
  if (!rec) return;
  toast('Kart hazırlanıyor…');
  const canvas = await fermanCard(rec, rec.mine, rec.opp);
  openShare(canvas, { filename: `harena-ferman-${n}.png`, text: `Ferman #${n}: ${rec.rule}`, url: baseUrl() + '#ferman' });
}

// --- boot ----------------------------------------------------------------------
function route() {
  S = loadSave();
  const r = parseHash(location.hash);
  if (r?.type === 'bad') toast('Bu link bozuk görünüyor.');
  if (r?.type === 'ghost') return go(openGhost, r.ghost);
  if (!S) return go(showIntro, { then: r?.type === 'ferman' ? 'ferman' : null });
  if (r?.type === 'ferman') return go(showFerman);
  go(showLudus);
}

window.addEventListener('hashchange', () => {
  if (!location.hash || location.hash.length <= 1) return;
  // a share sheet left open from the previous screen would cover the new one
  document.querySelectorAll('.sheet-wrap').forEach((el) => el.remove());
  route();
});
route();
