// Deterministic fight simulation. Produces an event timeline the arena animates.
import { makeRng, clamp } from './rng.js';
import { INJURIES, ARMS, QUIRKS, stanceById, injuryById } from './data.js';

const beats = (a, b) => ARMS.find((x) => x.id === a)?.beats === b;
const adv = (a, b) => (beats(a, b) ? 1 : beats(b, a) ? -1 : 0);

const HIT_VERBS = {
  murmillo: ['kalkanla itip gladiusu sapladı', 'kalkanın ardından kısa bir hamle yaptı', 'kalkanını çarpıp kılıcı indirdi'],
  retiarius: ['tridentle dürttü', 'mesafeyi koruyup tridentle deldi', 'tridenti bacaklara savurdu'],
  dimachaerus: ['iki kılıçla üst üste vurdu', 'çapraz kesti', 'kılıçlardan birini aldatıp ötekiyle vurdu'],
};
const MISS_VERBS = {
  murmillo: ['darbeyi kalkanla karşıladı', 'kalkanın arkasına çekildi'],
  retiarius: ['yana sıçradı', 'geri çekilip mesafe aldı'],
  dimachaerus: ['kılıçlarını çaprazlayıp savuşturdu', 'eğilip kurtuldu'],
};

export function fighterFrom(g, eff, extra = {}) {
  return {
    name: g.name, origin: g.origin, stats: eff,
    quirkId: g.quirk >= 0 ? QUIRKS[g.quirk]?.id : null, arm: extra.arm || g.arm, stance: extra.stance || 'dengeli',
    injuries: (g.injuries || []).map((i) => i.id),
  };
}

export function maxHp(f) { return 30 + f.stats.day * 4; }

export function simulate(A, B, { seed, rule = {} } = {}) {
  const r = makeRng(seed);
  const F = [A, B].map((x) => ({
    ...x, st: stanceById(x.stance), hp: maxHp(x), max: maxHp(x), usedAdak: false,
    hesitate: false, netted: false, revenge: false, newInj: [],
    avail: INJURIES.map((i) => i.id).filter((id) => !x.injuries.includes(id)),
  }));
  const ev = [];
  let crowd = 35;
  let shoutedHigh = false, shoutedLow = false;
  const snap = () => ({ hp: [F[0].hp, F[1].hp], crowd: Math.round(crowd) });
  let n = 0;

  while (n < 22 && F[0].hp > 0 && F[1].hp > 0) {
    n++;
    let pA = 0.5 + (F[0].stats.cev - F[1].stats.cev) * 0.03;
    if (F[0].stance === 'kalabalik') pA += 0.05;
    if (F[1].stance === 'kalabalik') pA -= 0.05;
    pA = clamp(pA, 0.2, 0.8);
    let ai = r.next() < pA ? 0 : 1;
    if (F[0].netted) ai = 1;
    if (F[1].netted) ai = 0;
    const att = F[ai], def = F[1 - ai];
    const wasNetted = def.netted;
    F[0].netted = F[1].netted = false;

    if (att.hesitate) {
      att.hesitate = false;
      crowd -= 2;
      ev.push({ type: 'hesitate', a: ai, text: `${att.name} kanı görünce bir an duraksadı.`, ...snap() });
      continue;
    }

    if (att.arm === 'retiarius' && !wasNetted && r.next() < 0.17) {
      const ok = r.next() < 0.55 + (att.stats.cev - def.stats.cev) * 0.04;
      if (ok) def.netted = true;
      crowd += ok ? 5 * att.st.crowd * (rule.crowdMul || 1) : -1;
      crowd = clamp(crowd);
      ev.push({ type: 'net', a: ai, ok, text: ok ? `${att.name} ağı fırlattı. ${def.name} dolandı!` : `${att.name} ağı fırlattı, boşa gitti.`, ...snap() });
      continue;
    }

    let hit = 0.6 + (att.stats.cev - def.stats.cev) * 0.035 + adv(att.arm, def.arm) * 0.07 + (rule.hitAdd || 0);
    if (def.arm === 'murmillo') hit -= 0.05;
    if (att.quirkId === 'solak' && n <= 3) hit += 0.15;
    if (def.quirkId === 'kibirli' && def.hp > att.hp) hit += 0.08;
    if (wasNetted) hit += 0.22;
    if (att.quirkId === 'sarhos') hit += r.float(-0.15, 0.08);
    hit = clamp(hit, 0.15, 0.92);

    if (r.next() < hit) {
      let dmg = (8 + att.stats.guc * 1.8) * r.float(0.75, 1.3);
      dmg *= att.st.dealt * def.st.taken;
      if (adv(att.arm, def.arm) > 0) dmg *= 1.12;
      if (att.arm === 'dimachaerus') dmg *= 1.06;
      if (att.quirkId === 'coskun' && crowd > 60) dmg *= 1.2;
      if (att.quirkId === 'sabirli') dmg *= 1 + Math.min(n, 6) * 0.04;
      if (att.quirkId === 'nefes' && n > 6) dmg *= 0.8;
      if (att.quirkId === 'sarhos') dmg *= r.float(0.6, 1.5);
      if (att.revenge) { dmg *= 1.4; att.revenge = false; }
      if (def.quirkId === 'lejyoner') dmg *= 0.88;
      dmg -= def.stats.day * 0.3;
      const heavy = r.next() < 0.1 + att.stats.sov * 0.008;
      if (heavy) dmg *= 1.6;
      dmg = Math.max(2, Math.round(dmg));

      let adak = false;
      if (def.hp - dmg <= 0 && def.quirkId === 'adak' && !def.usedAdak) {
        def.usedAdak = true;
        dmg = def.hp - 1;
        adak = true;
      }
      def.hp = Math.max(0, def.hp - dmg);

      let crowdGain = (3 + att.stats.sov * 0.6) * att.st.crowd * (rule.crowdMul || 1) + (heavy ? 8 : 0);
      if (att.quirkId === 'kibirli') crowdGain *= 1.3;
      if (att.quirkId === 'sessiz') crowdGain *= 0.6;
      crowd += crowdGain;

      let inj = null;
      const bigHit = heavy || dmg >= def.max * 0.3;
      if (bigHit && def.avail.length && r.next() < 0.2 * (def.quirkId === 'kemik' ? 0.5 : 1)) {
        inj = r.pick(def.avail);
        def.avail = def.avail.filter((x) => x !== inj);
        def.newInj.push({ id: inj, by: att.origin, byName: att.name });
        crowd += 6;
      }
      if (dmg >= def.max * 0.18 && def.quirkId === 'kinci') def.revenge = true;
      if (att.quirkId === 'kan' && r.next() < 0.3) att.hesitate = true;

      let text = `${att.name} ${r.pick(HIT_VERBS[att.arm])}.`;
      if (heavy) text = `Ağır darbe! ${text}`;
      if (inj) text += ` ${def.name} ${injuryById(inj).hit}!`;
      if (adak) text += ` ${def.name} düşmedi: Nemesis'e adağı onu ayakta tuttu.`;
      crowd = clamp(crowd);
      ev.push({ type: 'hit', a: ai, dmg, heavy, inj, adak, text, final: def.hp <= 0, ...snap() });
    } else {
      crowd -= 1;
      crowd = clamp(crowd);
      ev.push({ type: 'miss', a: ai, text: `${att.name} saldırdı; ${def.name} ${r.pick(MISS_VERBS[def.arm])}.`, ...snap() });
    }

    crowd -= F[0].st.boredom + F[1].st.boredom;
    crowd = clamp(crowd);
    if (!shoutedHigh && crowd >= 75) { shoutedHigh = true; ev.push({ type: 'shout', text: 'Kalabalık ayakta!', ...snap() }); }
    if (!shoutedLow && crowd <= 15 && n > 3) { shoutedLow = true; ev.push({ type: 'shout', text: 'Kalabalık ıslıklıyor.', ...snap() }); }
  }

  const res = { events: ev, crowd: Math.round(crowd), hp: [F[0].hp, F[1].hp], max: [F[0].max, F[1].max], newInj: [F[0].newInj, F[1].newInj], exchanges: n };
  if (F[0].hp > 0 && F[1].hp > 0) {
    res.draw = true;
    res.winner = null;
    ev.push({ type: 'draw', text: 'İkisi de ayakta. Stantes missi: ikisi de onurla gönderildi.', ...snap() });
    return res;
  }
  const li = F[0].hp <= 0 ? 0 : 1;
  const loser = F[li];
  let spare = 0.18 + (crowd / 100) * 0.75 + loser.stats.sov * 0.02 - (loser.stance === 'hayatta' ? 0.12 : 0);
  spare = clamp(spare, 0.08, 0.92) * (rule.spareMul || 1);
  res.winner = 1 - li;
  res.loser = li;
  res.spareChance = spare;
  res.spared = r.next() < spare;
  ev.push({ type: 'fall', a: res.winner, l: li, text: `${loser.name} kuma düştü.`, ...snap() });
  ev.push({ type: 'verdict', l: li, spared: res.spared, text: res.spared ? `Kalabalık “Missio!” diye bağırdı. ${loser.name} bağışlandı.` : `Kalabalık “Iugula!” istedi. ${loser.name} kumdan kalkmadı.`, ...snap() });
  return res;
}
