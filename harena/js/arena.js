// Arena animation: plays a simulated fight's event timeline on a canvas.
import { lookFor, shade } from './portrait.js';
import { makeRng } from './rng.js';

const INK = '#1E1A17';
const SAND = '#E3CF9E';
const BLOOD = '#6E1C14';

const DUR = { hit: 0.95, miss: 0.85, net: 1.15, hesitate: 0.9, shout: 0.75, fall: 1.4, verdict: 2.6, draw: 2.2 };
const ease = (t) => (t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t));
const lerp = (a, b, t) => a + (b - a) * t;
const seg = (p, a, b) => ease((p - a) / (b - a));

function limb(ctx, pts, w, color) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = INK;
  ctx.lineWidth = w + 3.4;
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.stroke();
}

function poly(ctx, pts, fill, lw = 2.4) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = lw;
  ctx.strokeStyle = INK;
  ctx.lineJoin = 'round';
  ctx.stroke();
}

// Two-segment arm from shoulder to hand with an elbow that bends downward.
function arm(ctx, sh, hand, color, w = 7) {
  const mx = (sh[0] + hand[0]) / 2, my = (sh[1] + hand[1]) / 2;
  const dx = hand[0] - sh[0], dy = hand[1] - sh[1];
  const len = Math.hypot(dx, dy) || 1;
  const bend = Math.max(0, 30 - len) * 0.5 + 3;
  const el = [mx - (dy / len) * bend * -1, my + (dx / len) * bend * 0.2 + bend * 0.6];
  limb(ctx, [sh, el, hand], w, color);
  return el;
}

function blade(ctx, hand, ang, len, curved) {
  ctx.save();
  ctx.translate(hand[0], hand[1]);
  ctx.rotate(ang);
  ctx.beginPath();
  if (curved) {
    ctx.moveTo(0, -2.2);
    ctx.quadraticCurveTo(len * 0.6, -4, len, 4);
    ctx.quadraticCurveTo(len * 0.55, 2.5, 0, 2.2);
  } else {
    ctx.moveTo(0, -2.4);
    ctx.lineTo(len - 5, -2.4);
    ctx.lineTo(len, 0);
    ctx.lineTo(len - 5, 2.4);
    ctx.lineTo(0, 2.4);
  }
  ctx.closePath();
  ctx.fillStyle = '#CFC7B6';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = INK;
  ctx.stroke();
  ctx.fillStyle = '#A9783A';
  ctx.fillRect(-3, -4.5, 4, 9);
  ctx.strokeRect(-3, -4.5, 4, 9);
  ctx.restore();
}

function netMesh(ctx, cx, cy, rx, ry, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.clip();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 1.3;
  for (let i = -6; i <= 6; i++) {
    ctx.beginPath(); ctx.moveTo(cx + i * 7 - ry, cy - ry); ctx.lineTo(cx + i * 7 + ry, cy + ry); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + i * 7 + ry, cy - ry); ctx.lineTo(cx + i * 7 - ry, cy + ry); ctx.stroke();
  }
  ctx.restore();
}

function drawFighter(ctx, f, p, k) {
  const skinSh = shade(f.skin, -0.18);
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.scale(f.facing * k, k);
  if (p.fall) {
    ctx.translate(-p.fall * 10, 0);
    ctx.rotate(-p.fall * 1.5);
  }
  ctx.translate(0, p.bob || 0);
  ctx.rotate(p.lean || 0);
  const s = p.swing || 0;
  const step = (p.step || 0) * 8;

  // far leg, then near leg
  limb(ctx, [[-3, -62], [-11, -32], [-19 - step * 0.3, 0]], 9, skinSh);
  limb(ctx, [[3, -62], [13, -32], [20 + step, 0]], 9, f.skin);
  if (f.arm === 'murmillo') limb(ctx, [[14, -30], [19 + step, -5]], 6, '#A9783A');
  ctx.fillStyle = INK;
  ctx.beginPath(); ctx.ellipse(-20 - step * 0.3, 0, 7, 3, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(23 + step, 0, 7, 3, 0, 0, Math.PI * 2); ctx.fill();

  // far arm (behind the torso)
  if (f.arm === 'murmillo') {
    const hand = [lerp(-20, 36, s), lerp(-84, -96, s)];
    arm(ctx, [-4, -102], hand, skinSh);
    blade(ctx, hand, lerp(-0.9, 0.05, s), 26, false);
  } else if (f.arm === 'retiarius') {
    const hand = [-16, -78 + Math.sin(p.t * 3) * 1.5];
    arm(ctx, [-4, -102], hand, skinSh);
    if (!p.netThrown) netMesh(ctx, hand[0] - 4, hand[1] + 10, 11, 14);
  } else {
    const s2 = 1 - s;
    const hand = [lerp(-18, 30, s2 * 0.6), lerp(-82, -100, s2 * 0.5)];
    arm(ctx, [-4, -102], hand, skinSh);
    blade(ctx, hand, lerp(-1.1, -0.2, s2 * 0.6), 24, true);
  }

  // loincloth, belt, torso
  poly(ctx, [[-12, -70], [12, -70], [9, -50], [0, -45], [-9, -50]], f.cloth, 2);
  poly(ctx, [[-11, -72], [-16, -104], [0, -111], [16, -104], [11, -72]], f.skin, 2.6);
  ctx.strokeStyle = skinSh; ctx.lineWidth = 1.8;
  ctx.beginPath(); ctx.moveTo(-1, -98); ctx.quadraticCurveTo(6, -92, 12, -97); ctx.stroke();
  poly(ctx, [[-13, -75], [13, -75], [13, -67], [-13, -67]], '#A9783A', 2);

  // head
  const hx = 4, hy = -122;
  ctx.beginPath(); ctx.arc(hx, hy, 12, 0, Math.PI * 2);
  ctx.fillStyle = f.skin; ctx.fill(); ctx.lineWidth = 2.6; ctx.strokeStyle = INK; ctx.stroke();
  if (f.arm === 'murmillo') {
    ctx.beginPath(); ctx.arc(hx, hy + 1, 13.5, Math.PI, 0); ctx.closePath();
    ctx.fillStyle = '#A9783A'; ctx.fill(); ctx.stroke();
    poly(ctx, [[hx - 15, hy + 4], [hx + 17, hy + 4], [hx + 14, hy + 13], [hx - 12, hy + 13]], '#A9783A', 2.2);
    poly(ctx, [[hx + 4, hy - 1], [hx + 15, hy - 1], [hx + 14, hy + 12], [hx + 4, hy + 12]], '#7A5428', 1.8);
    ctx.strokeStyle = INK; ctx.lineWidth = 1.2;
    for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo(hx + 4, hy - 1 + i * 3.2); ctx.lineTo(hx + 14.6, hy - 1 + i * 3.2); ctx.stroke(); }
    ctx.beginPath();
    ctx.moveTo(hx - 12, hy - 6);
    ctx.quadraticCurveTo(hx - 6, hy - 30, hx + 6, hy - 27);
    ctx.quadraticCurveTo(hx + 14, hy - 22, hx + 10, hy - 10);
    ctx.closePath();
    ctx.fillStyle = f.crest; ctx.fill(); ctx.lineWidth = 2.2; ctx.strokeStyle = INK; ctx.stroke();
  } else if (f.arm === 'dimachaerus') {
    ctx.beginPath(); ctx.arc(hx, hy, 13, Math.PI * 1.02, Math.PI * 1.98); ctx.closePath();
    ctx.fillStyle = '#A9783A'; ctx.fill(); ctx.lineWidth = 2.2; ctx.strokeStyle = INK; ctx.stroke();
    poly(ctx, [[hx - 15, hy - 1], [hx + 16, hy - 1], [hx + 14, hy + 3], [hx - 13, hy + 3]], '#A9783A', 2);
    poly(ctx, [[hx + 2, hy + 3], [hx + 13, hy + 3], [hx + 11, hy + 12], [hx + 3, hy + 12]], '#7A5428', 1.6);
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(hx + 7, hy + 6, 1.6, 0, Math.PI * 2); ctx.fill();
  } else {
    ctx.beginPath(); ctx.arc(hx, hy, 12.5, Math.PI * 1.05, Math.PI * 1.85); ctx.lineTo(hx - 4, hy - 2); ctx.closePath();
    ctx.fillStyle = f.hair; ctx.fill(); ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(hx + 7, hy - 2, 1.6, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(hx + 11, hy - 1); ctx.lineTo(hx + 15, hy + 4); ctx.lineTo(hx + 11, hy + 5); ctx.strokeStyle = INK; ctx.lineWidth = 1.8; ctx.stroke();
  }

  // near arm + equipment in front
  if (f.arm === 'murmillo') {
    arm(ctx, [6, -102], [16, -86], f.skin);
    const g = p.guard || 0;
    const sx = 14 + g * 6, sy = -112 + g * 2;
    ctx.save();
    ctx.translate(sx, sy);
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.quadraticCurveTo(10, -2, 18, 2); ctx.lineTo(18, 64); ctx.quadraticCurveTo(10, 68, 0, 66); ctx.closePath();
    ctx.fillStyle = f.shield; ctx.fill(); ctx.lineWidth = 2.6; ctx.strokeStyle = INK; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(3, 5); ctx.quadraticCurveTo(10, 3, 15, 6); ctx.lineTo(15, 60); ctx.quadraticCurveTo(10, 62, 3, 61); ctx.closePath();
    ctx.lineWidth = 1.6; ctx.strokeStyle = '#C8963E'; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(9, 33, 5, 7, 0, 0, Math.PI * 2); ctx.fillStyle = '#A9783A'; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = INK; ctx.stroke();
    ctx.restore();
  } else if (f.arm === 'retiarius') {
    poly(ctx, [[2, -108], [11, -124], [17, -121], [10, -102]], '#A9783A', 2);
    const thrust = s * 22;
    const hand = [16 + thrust * 0.6, -90];
    arm(ctx, [6, -102], hand, f.skin);
    ctx.lineCap = 'round';
    ctx.strokeStyle = INK; ctx.lineWidth = 5.2;
    ctx.beginPath(); ctx.moveTo(-26 + thrust, -80); ctx.lineTo(60 + thrust, -98); ctx.stroke();
    ctx.strokeStyle = '#8A6A44'; ctx.lineWidth = 2.6;
    ctx.beginPath(); ctx.moveTo(-26 + thrust, -80); ctx.lineTo(60 + thrust, -98); ctx.stroke();
    ctx.strokeStyle = INK; ctx.lineWidth = 2.4;
    const tx = 60 + thrust, ty = -98;
    ctx.beginPath();
    ctx.moveTo(tx - 2, ty - 6); ctx.lineTo(tx - 2, ty + 6);
    ctx.moveTo(tx - 2, ty - 6); ctx.lineTo(tx + 10, ty - 8.5);
    ctx.moveTo(tx - 2, ty); ctx.lineTo(tx + 12, ty - 2.5);
    ctx.moveTo(tx - 2, ty + 6); ctx.lineTo(tx + 10, ty + 3.5);
    ctx.stroke();
  } else {
    const hand = [lerp(-8, 40, s), lerp(-84, -98, s)];
    arm(ctx, [6, -102], hand, f.skin);
    blade(ctx, hand, lerp(-1.2, 0.1, s), 26, true);
  }

  if (p.netted) netMesh(ctx, 2, -86, 26, 46, 0.85);
  ctx.restore();
}

export function playFight(host, { gA, gB, armA, armB, result, onEvent }) {
  const W = Math.min(host.clientWidth || 360, 480);
  const H = Math.round(W * 1.02);
  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  canvas.className = 'arena-canvas';
  host.innerHTML = '';
  host.appendChild(canvas);
  const overlay = document.createElement('div');
  overlay.className = 'arena-overlay';
  host.appendChild(overlay);
  const ctx = canvas.getContext('2d');
  const k = W / 345;
  const r = makeRng(result.exchanges * 7919 + result.crowd);

  const lookA = lookFor(gA), lookB = lookFor(gB);
  const fig = [
    { arm: armA, skin: lookA.skin, hair: lookA.hair, crest: '#8E2A1E', shield: '#8E2A1E', cloth: '#E8DCC0', facing: 1 },
    { arm: armB, skin: lookB.skin, hair: lookB.hair, crest: '#3F4A35', shield: '#3F4A35', cloth: '#B9A27A', facing: -1 },
  ];

  // static background
  const bg = document.createElement('canvas');
  bg.width = canvas.width; bg.height = canvas.height;
  const b = bg.getContext('2d');
  b.scale(dpr, dpr);
  const wallTop = H * 0.33, wallBot = H * 0.43;
  b.fillStyle = '#2E241F'; b.fillRect(0, 0, W, wallTop);
  b.fillStyle = SAND; b.fillRect(0, wallBot, W, H - wallBot);
  b.fillStyle = '#D6BF88'; b.fillRect(0, wallBot, W, H * 0.03);
  b.strokeStyle = '#CDB47E'; b.lineWidth = 1.2; b.lineCap = 'round';
  for (let i = 0; i < 34; i++) {
    const x = r.float(0, W), y = r.float(wallBot + H * 0.05, H - 6), l = r.float(14, 40) * k;
    b.beginPath(); b.moveTo(x, y); b.quadraticCurveTo(x + l / 2, y - 2, x + l, y); b.stroke();
  }
  const wall = document.createElement('canvas');
  wall.width = canvas.width; wall.height = canvas.height;
  const wc = wall.getContext('2d');
  wc.scale(dpr, dpr);
  wc.fillStyle = '#8E2A1E'; wc.fillRect(0, wallTop, W, wallBot - wallTop);
  wc.fillStyle = '#C8963E'; wc.fillRect(0, wallTop, W, H * 0.014);
  wc.fillStyle = INK; wc.fillRect(0, wallTop + H * 0.014, W, 1.5); wc.fillRect(0, wallBot - 1.5, W, 1.5);
  const panels = 5;
  wc.strokeStyle = 'rgba(200,150,62,0.75)'; wc.lineWidth = 1.2;
  for (let i = 0; i < panels; i++) {
    const x0 = (W / panels) * i + 8, w0 = W / panels - 16;
    wc.strokeRect(x0, wallTop + H * 0.028, w0, wallBot - wallTop - H * 0.042);
  }

  const crowdPeople = [];
  const rows = 5;
  for (let row = 0; row < rows; row++) {
    const y = H * 0.045 + row * H * 0.062;
    const rad = (5.4 + row * 0.5) * k;
    const n = Math.ceil(W / (rad * 2.5)) + 1;
    for (let i = 0; i < n; i++) {
      crowdPeople.push({
        x: i * rad * 2.5 + (row % 2 ? rad * 1.2 : 0) + r.float(-2, 2), y: y + r.float(-1.5, 1.5), rad,
        head: r.pick(['#3B2A22', '#5A4032', '#2A211C', '#6B4E3A', '#4A3528']),
        body: r.pick(['#7A6A55', '#A08A6A', '#5A5A48', '#8A5A44', '#B8A890', '#6E4A3A']),
        th: r.float(0.35, 0.95), ph: r.float(0, 6.28),
      });
    }
  }

  const tl = [];
  let T = 0;
  for (const e of result.events) {
    const dur = e.final ? 2.8 : DUR[e.type] || 0.9;
    tl.push({ e, t0: T, dur, fired: false });
    T += dur;
  }
  const total = T + 0.3;
  const decals = [];
  const marks = [];
  const groundY = H * 0.86;
  const baseX = [W * 0.33, W * 0.67];
  let crowd = 35;
  let fallen = -1;
  let start = null;
  let done = false;
  let resolveFn;
  let shake = 0;

  const fire = (item) => {
    if (item.fired) return;
    item.fired = true;
    const e = item.e;
    crowd = e.crowd;
    if (e.type === 'hit') {
      const di = 1 - e.a;
      const n = r.int(1, e.heavy ? 4 : 2);
      for (let i = 0; i < n; i++) decals.push({ x: baseX[di] + r.float(-26, 26) * k, y: groundY + r.float(-6, 10) * k, rx: r.float(2, 6) * k, ry: r.float(1.2, 3) * k, a: r.float(0, 3) });
      marks.push({ x: (baseX[0] + baseX[1]) / 2 + (e.a === 0 ? 14 : -14) * k, y: groundY - 95 * k, t: item.t0 + item.dur * 0.45, heavy: e.heavy, slow: e.final ? 2.6 : 1 });
      if (e.heavy || e.final) shake = 1;
    }
    if (e.type === 'fall') fallen = e.l;
    if (e.type === 'fall' || e.type === 'verdict' || e.type === 'draw') {
      const big = e.type === 'verdict' ? (e.spared ? 'Missio' : 'Iugula') : e.type === 'draw' ? 'Stantes missi' : '';
      overlay.innerHTML = big ? `<div class="verdict ${e.type === 'verdict' && !e.spared ? 'dark' : ''}"><strong>${big}</strong><span>${e.type === 'verdict' ? (e.spared ? 'Bağışlandı' : 'Öldür') : 'İkisi de ayakta'}</span></div>` : '';
    }
    onEvent?.(e);
  };

  function frame(now) {
    if (done) return;
    if (start === null) start = now;
    const t = (now - start) / 1000;
    for (const item of tl) if (!item.fired && t >= item.t0 + (item.e.type === 'hit' ? item.dur * 0.45 : 0.05)) fire(item);
    render(t);
    if (t >= total) { finish(); return; }
    requestAnimationFrame(frame);
  }

  function poseAt(t) {
    const pose = [0, 1].map((i) => ({ x: baseX[i], y: groundY, lean: 0, swing: 0, guard: 0, fall: 0, bob: Math.sin(t * 3.2 + i * 2) * 1.4, step: 0, t, netted: false, netThrown: false }));
    let cur = null;
    for (const item of tl) if (t >= item.t0 && t < item.t0 + item.dur) cur = item;
    const lb = { amt: 0, zoom: 1 };
    if (fallen >= 0) pose[fallen].fall = 1;
    if (cur) {
      const p = (t - cur.t0) / cur.dur;
      const e = cur.e;
      const a = e.a, d = 1 - a, dir = a === 0 ? 1 : -1;
      if (e.type === 'hit' || e.type === 'miss') {
        const lunge = p < 0.3 ? -seg(p, 0, 0.3) * 0.03 : p < 0.5 ? lerp(-0.03, 0.12, seg(p, 0.3, 0.45)) : lerp(0.12, 0, seg(p, 0.5, 1));
        pose[a].x += dir * lunge * W;
        pose[a].step = Math.max(0, lunge * 6);
        pose[a].swing = p < 0.3 ? 0 : p < 0.5 ? seg(p, 0.3, 0.45) : 1 - seg(p, 0.55, 1);
        pose[a].lean = dir * 0 + (p > 0.3 && p < 0.6 ? 0.12 : 0);
        if (e.type === 'hit' && p > 0.45) {
          const kb = 1 - seg(p, 0.45, 1);
          pose[d].x += dir * kb * 0.035 * W;
          pose[d].lean = -kb * (e.heavy ? 0.32 : 0.18);
        }
        if (e.type === 'miss') {
          pose[d].guard = p > 0.2 && p < 0.7 ? 1 : 0;
          pose[d].x += dir * seg(p, 0.25, 0.45) * (1 - seg(p, 0.6, 1)) * 0.03 * W;
        }
        if (e.final) {
          lb.amt = seg(p, 0, 0.25);
          lb.zoom = 1 + 0.16 * seg(p, 0, 0.3);
        }
      } else if (e.type === 'net') {
        pose[a].netThrown = p > 0.3;
        cur.netP = p;
      } else if (e.type === 'fall') {
        pose[e.l].fall = seg(p, 0, 0.6);
        pose[e.a].swing = seg(p, 0.5, 0.9);
        pose[e.a].lean = -0.1 * seg(p, 0.5, 0.9);
        lb.amt = 1 - seg(p, 0.6, 1);
        lb.zoom = 1 + 0.16 * (1 - seg(p, 0.4, 1));
      } else if (e.type === 'verdict') {
        const w = 1 - e.l;
        pose[w].swing = 0.9;
        pose[w].lean = -0.08;
        pose[e.l].fall = 1;
      } else if (e.type === 'draw') {
        pose[0].swing = pose[1].swing = seg(p, 0, 0.4);
      }
    }
    // fallen bodies slide toward the centre so the head stays on screen
    for (let i = 0; i < 2; i++) if (pose[i].fall) pose[i].x += fig[i].facing * pose[i].fall * 46 * k;
    // netted state persists until the next exchange starts
    for (let i = 0; i < tl.length; i++) {
      const it = tl[i];
      if (it.e.type === 'net' && it.e.ok && t >= it.t0 + it.dur * 0.6) {
        const nxt = tl[i + 1];
        if (!nxt || t < nxt.t0 + nxt.dur) pose[1 - it.e.a].netted = true;
      }
    }
    return { pose, cur, lb };
  }

  function render(t) {
    const { pose, cur, lb } = poseAt(t);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    if (shake > 0) {
      ctx.translate(r.float(-4, 4) * shake * k, r.float(-3, 3) * shake * k);
      shake = Math.max(0, shake - 0.06);
    }
    if (lb.zoom !== 1) {
      const fx = (pose[0].x + pose[1].x) / 2, fy = groundY - 80 * k;
      ctx.translate(fx, fy); ctx.scale(lb.zoom, lb.zoom); ctx.translate(-fx, -fy);
    }
    ctx.drawImage(bg, 0, 0, W, H);
    // crowd
    const ex = crowd / 100;
    for (const c of crowdPeople) {
      const up = ex > c.th;
      const by = c.y - (up ? Math.max(0, Math.sin(t * 9 + c.ph)) * c.rad * 0.6 * ex : 0);
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(c.x - c.rad * 1.25, by + c.rad * 0.7, c.rad * 2.5, c.rad * 2.6, c.rad * 0.8) : ctx.rect(c.x - c.rad * 1.25, by + c.rad * 0.7, c.rad * 2.5, c.rad * 2.6);
      ctx.fill();
      if (up) {
        ctx.strokeStyle = c.body; ctx.lineWidth = c.rad * 0.55; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(c.x - c.rad, by + c.rad); ctx.lineTo(c.x - c.rad * 1.6, by - c.rad * 1.4);
        ctx.moveTo(c.x + c.rad, by + c.rad); ctx.lineTo(c.x + c.rad * 1.6, by - c.rad * 1.4); ctx.stroke();
      }
      ctx.fillStyle = c.head;
      ctx.beginPath(); ctx.arc(c.x, by, c.rad, 0, Math.PI * 2); ctx.fill();
    }
    ctx.drawImage(wall, 0, 0, W, H);
    // blood on the sand
    ctx.fillStyle = BLOOD;
    for (const d of decals) { ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.rx, d.ry, d.a, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
    // shadows
    for (let i = 0; i < 2; i++) {
      ctx.fillStyle = 'rgba(90,64,30,0.22)';
      ctx.beginPath(); ctx.ellipse(pose[i].x + (pose[i].fall ? -fig[i].facing * 60 * k * pose[i].fall : 0), groundY + 2, (34 + pose[i].fall * 40) * k, 6 * k, 0, 0, Math.PI * 2); ctx.fill();
    }
    const order = fallen >= 0 ? [fallen, 1 - fallen] : [0, 1];
    for (const i of order) drawFighter(ctx, fig[i], pose[i], k);
    // thrown net
    if (cur && cur.e.type === 'net' && cur.netP > 0.3 && cur.netP < 0.62) {
      const q = (cur.netP - 0.3) / 0.32;
      const a = cur.e.a, d = 1 - a;
      const x = lerp(pose[a].x, pose[d].x, q), y = groundY - 90 * k - Math.sin(q * Math.PI) * 40 * k;
      netMesh(ctx, x, y, 18 * k * (0.6 + q), 14 * k * (0.6 + q));
    }
    // impact marks: short ink strokes, no glow
    for (const m of marks) {
      const age = (t - m.t) / (0.22 * m.slow);
      if (age < 0 || age > 1) continue;
      const n = m.heavy ? 9 : 6;
      ctx.strokeStyle = INK; ctx.lineCap = 'round'; ctx.lineWidth = (m.heavy ? 3.2 : 2.4) * k;
      for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2 + 0.3;
        const r0 = (8 + age * 10) * k, r1 = r0 + (m.heavy ? 18 : 11) * k * (1 - age);
        ctx.beginPath(); ctx.moveTo(m.x + Math.cos(ang) * r0, m.y + Math.sin(ang) * r0); ctx.lineTo(m.x + Math.cos(ang) * r1, m.y + Math.sin(ang) * r1); ctx.stroke();
      }
      if (m.heavy) {
        ctx.fillStyle = BLOOD;
        for (let i = 0; i < 4; i++) {
          const ang = -0.6 - i * 0.5;
          ctx.beginPath(); ctx.arc(m.x + Math.cos(ang) * 26 * age * k, m.y + Math.sin(ang) * 22 * age * k + age * age * 30 * k, 2.6 * k, 0, Math.PI * 2); ctx.fill();
        }
      }
    }
    ctx.restore();
    if (lb.amt > 0) {
      ctx.fillStyle = '#120E0C';
      const bh = H * 0.085 * lb.amt;
      ctx.fillRect(0, 0, W, bh); ctx.fillRect(0, H - bh, W, bh);
    }
  }

  function finish() {
    if (done) return;
    done = true;
    for (const item of tl) fire(item);
    render(total);
    resolveFn?.();
  }

  const promise = new Promise((res) => { resolveFn = res; });
  requestAnimationFrame(frame);
  return { promise, skip: finish };
}
