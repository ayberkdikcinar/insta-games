// Ink figures, plates (figure + backdrop + sky) and the candle.
//
// Figure format (js/art/figures-*.js), viewBox 0 0 200 280, ground at y≈266, figure ≤ ~250 tall:
//   label            Turkish description, used as aria-label
//   body             filled with ink (several subpaths allowed)
//   detail           optional strokes in paper colour on top of the ink (hair, folds, ribs)
//   line             optional ink strokes, not filled (props, bed, thread, water)
//   faint            optional second filled shape drawn at 45%; `true` reuses body
//   faintTransform   optional transform for faint
//   eyes             optional [[x, y], ...] glints, shown in plates and the hunt
//   ground           false to skip the default ground stroke
//
// Scenes (js/art/scenes.js) are SVG fragments in the plate viewBox -60 0 320 280, drawn behind the figure
// with classes sc-fill, sc-line, sc-ground; skies use sky-*.
import F0 from './art/figures-0.js';
import F1 from './art/figures-1.js';
import F2 from './art/figures-2.js';
import F3 from './art/figures-3.js';
import { SCENES, SKIES } from './art/scenes.js';

export const FIGURES = { ...F0, ...F1, ...F2, ...F3 };

export function silhouetteLabel(id) {
  return FIGURES[id] ? FIGURES[id].label : '';
}

// Figures whose `line` draws a doorway/arch that their usual scene already has; plates skip it.
const SCENE_PROPS = new Set(['umaci', 'cadi', 'hamamiyesi']);

function figureInk(s, veiled, skipLine = false) {
  const faintD = s.faint === true ? s.body : s.faint;
  const faint = faintD ? `<path class="sil-body sil-behind"${s.faintTransform ? ` transform="${s.faintTransform}"` : ''} d="${faintD}"/>` : '';
  const extras = veiled ? '' : `${s.detail ? `<path class="sil-detail" d="${s.detail}"/>` : ''}`;
  const line = s.line && !veiled && !skipLine ? `<path class="sil-line" d="${s.line}"/>` : '';
  return `<g class="sil-ink" filter="url(#ink)">${faint}${line}<path class="sil-body" d="${s.body}"/>${extras}</g>`;
}

function eyesSVG(s) {
  return (s.eyes || []).map(([x, y]) => `<circle class="sil-eye" cx="${x}" cy="${y}" r="2.1"/>`).join('');
}

// Figure alone: defter tiles, small spots. mode 'full' | 'veiled'
export function silhouette(id, mode = 'full') {
  const s = FIGURES[id];
  if (!s) return '';
  const veiled = mode === 'veiled';
  const ground = veiled || s.ground === false || s.line ? '' : '<path class="sil-ground" d="M30 268 C70 266 130 270 170 267"/>';
  return `<svg class="sil sil-${mode}" viewBox="0 0 200 280" role="img" aria-label="${veiled ? 'Örtülü sayfa' : s.label}">
    ${figureInk(s, veiled)}${veiled ? '' : eyesSVG(s)}${ground}
  </svg>`;
}

// Figure in its scene: defter page, hunt, result. place = yer trait, time = zaman trait.
export function plate(id, { place, time, mode = 'full' } = {}) {
  const s = FIGURES[id];
  if (!s) return '';
  const veiled = mode === 'veiled';
  const scene = SCENES[place] || '<path class="sc-ground" d="M-60 266 C20 262 120 270 260 264"/>';
  const sky = SKIES[time] || '';
  return `<svg class="plate plate-${mode}" viewBox="-60 0 320 280" role="img" aria-label="${veiled ? 'Örtülü sayfa' : s.label}">
    <g class="pl-sky">${sky}</g>
    <g class="pl-scene" filter="url(#ink)">${scene}</g>
    ${figureInk(s, veiled, SCENE_PROPS.has(id))}${veiled ? '' : eyesSVG(s)}
  </svg>`;
}

// state: 'lit' | 'out' | 'burning'
// A spent candle has melted down; the burning one is already short and its flame snuffs out.
export function candleSVG(state, delay = 0) {
  const top = state === 'lit' ? 30 : 54;
  const drop = top - 30;
  return `<svg class="candle candle-${state}" viewBox="0 0 30 84" style="--d:${delay}s" aria-hidden="true">
    <path class="wax" d="M8 ${top} H22 V80 H8 Z"/>
    <path class="drip" d="M8 ${top} H22 V${top + 5} C22 ${top + 9} 19 ${top + 9} 19 ${top + 5} C19 ${top + 3} 17 ${top + 3} 17 ${top + 6} C17 ${top + 13} 13 ${top + 13} 13 ${top + 6} C13 ${top + 3} 11 ${top + 3} 11 ${top + 5} C11 ${top + 8} 8 ${top + 8} 8 ${top + 4} Z"/>
    <path class="wick" d="M15 ${top} V${top - 6}"/>
    ${state === 'out' ? '' : `<g transform="translate(0 ${drop})"><g class="flame-g">
      <path class="flame" d="M15 4 C19 11 21.5 15.5 21.5 19 C21.5 23 18.6 26 15 26 C11.4 26 8.5 23 8.5 19 C8.5 15.5 11 11 15 4 Z"/>
      <path class="flame-core" d="M15 13 C16.8 16 17.8 18.2 17.8 20.2 C17.8 22.2 16.6 23.6 15 23.6 C13.4 23.6 12.2 22.2 12.2 20.2 C12.2 18.2 13.2 16 15 13 Z"/>
    </g>${state === 'burning' ? '<path class="smoke" d="M15 22 C12 18 18 15 15 11 C12 7 17 4 15 0"/>' : ''}</g>`}
  </svg>`;
}

export function candleRow(total, left, burningIndex = -1) {
  let html = '';
  for (let i = 0; i < total; i++) {
    const state = i === burningIndex ? 'burning' : i < left ? 'lit' : 'out';
    html += candleSVG(state, ((i * 0.37) % 1.6).toFixed(2));
  }
  return html;
}
