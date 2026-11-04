// Hand-authored ink silhouettes (viewBox 0 0 200 280, ground at y≈266) and the candle.
// `body` is filled with ink; `detail` strokes are drawn in paper colour on top of the ink.

const SIL = {
  albasti: {
    label: 'Saçları yerlere inen uzun boylu bir kadın',
    body: `M100 18 C114 18 121 29 119 42 C118 50 115 55 113 59 C125 66 129 84 130 104 C132 140 137 188 146 232 C150 248 156 258 162 266 L154 262 L150 270 L143 261 L137 270 L131 261 L125 270 L119 261 L113 270 L107 261 L101 270 L95 261 L89 270 L83 261 L77 270 L71 261 L65 270 L59 262 L52 268 C51 256 55 240 59 222 C66 186 70 140 71 104 C72 84 76 66 87 59 C85 55 82 50 81 42 C79 29 86 18 100 18 Z
      M76 116 C68 142 62 172 58 198 L53 218 L57 215 L58 225 L62 213 L65 220 L66 207 C70 180 76 150 83 124 Z`,
    detail: `M96 70 C94 110 92 160 90 214 M106 72 C108 120 110 170 114 226 M86 92 C82 130 80 170 78 210`,
  },
  karabasan: {
    label: 'Uyuyanın göğsüne çökmüş, sivri külahlı bir gölge',
    body: `M86 114 C90 90 100 66 118 58 C134 52 152 64 162 86 L156 88 C150 76 140 70 132 74 C130 90 130 104 128 114 C142 126 154 146 156 170 C158 194 156 216 150 230 L94 230 C90 222 88 214 90 206 C86 198 84 188 86 178 C88 168 92 160 96 154 C88 150 82 144 82 138 L76 134 L82 128 C82 122 84 118 86 114 Z
      M104 158 C96 170 86 190 76 210 L66 226 L58 232 L62 234 L56 240 L64 238 L62 246 L69 238 L72 244 L74 234 C82 220 94 196 112 170 Z`,
    detail: `M87 127 L94 126 M92 112 C102 108 116 108 126 112`,
    line: `M12 258 C12 247 19 240 30 238 L50 238 C58 240 61 249 60 258 M32 236 C32 226 52 226 52 236 C52 244 32 244 32 236 Z M54 246 C70 238 90 231 110 231 C130 231 150 235 168 241 C180 245 188 251 190 258 M8 258 L194 258`,
  },
  karakoncolos: {
    label: 'İri, kıllı, uzun kollu, kambur bir şey',
    body: `M52 112 L56 106 L54 92 L64 104 L70 104 L74 94 L80 99 L84 86 L92 92 L98 76 L104 84 L112 66 L118 76 L128 62 L132 74 L144 68 L144 82 L156 84 L152 96 L166 104 L158 112 L172 124 L162 130 L174 146 L164 150 L176 168 L166 172 L174 192 L164 194 L170 214 L160 216 L166 240 L164 250 L170 264 L150 264 L148 246 L138 230 L128 246 L130 264 L108 264 L112 244 L110 226 L100 212 L92 206 L84 214 L76 232 L70 250 L72 262 L64 264 L58 262 L50 264 L44 258 L38 262 L42 252 L48 248 C52 234 58 212 62 190 C62 180 60 174 60 170 L56 166 L62 160 L54 154 L60 148 C56 147 52 146 50 146 L42 142 C38 140 36 137 36 134 L38 126 L46 120 C48 117 50 115 52 112 Z`,
    detail: `M46 128 L52 127 M86 118 C96 112 108 108 118 108 M120 120 C134 120 146 128 152 140`,
  },
  gulyabani: {
    label: 'Upuzun, eğik, keçe saçlı bir karaltı',
    body: `M122 24 C136 24 144 36 142 52 C152 68 156 92 154 120 C152 152 148 188 148 224 L150 264 L136 264 L134 228 L128 264 L114 264 L118 222 C116 198 114 178 110 162 C104 178 96 198 86 216 L75 241 L71 236 L67 249 L63 240 L58 251 L56 238 L61 230 L69 224 C77 206 86 180 96 150 C100 132 102 116 100 104 L95 134 L90 112 L85 130 L83 104 L77 118 L79 92 C84 74 96 58 104 48 C108 34 112 24 122 24 Z`,
    detail: `M118 40 C116 60 114 80 112 100`,
  },
  hortlak: {
    label: 'Kefene sarılı bir ölü',
    body: `M96 28 C90 22 92 12 100 11 C108 12 110 22 104 28 C116 32 126 46 127 62 C127 76 120 84 114 88 C130 94 142 104 144 122 C147 150 142 190 134 222 C130 236 126 244 122 250 C128 254 134 260 136 266 L64 266 C66 260 72 254 78 250 C74 244 70 236 66 222 C58 190 53 150 56 122 C58 104 70 94 86 88 C80 84 73 76 73 62 C74 46 84 32 96 28 Z`,
    detail: `M85 90 C94 95 106 95 115 90 M58 152 C84 162 116 162 143 151 M64 212 C86 222 114 222 136 211 M79 249 C92 254 108 254 121 249 M95 28 C98 30 102 30 105 28`,
  },
  ecinni: {
    label: 'Keçi ayaklı, uzun kulaklı küçük bir şey; arkasında bir başkası',
    body: `M96 78 C100 74 108 74 112 78 L142 64 L118 90 C120 100 116 108 110 112 C120 118 126 132 124 150 C130 160 132 172 128 182 L142 210 L132 236 L136 262 L126 264 L124 254 L120 264 L114 262 L120 238 L126 214 L114 196 L104 214 L112 238 L106 264 L100 262 L98 254 L94 264 L86 262 L94 236 L86 210 L92 184 C86 172 86 160 90 150 L72 170 L66 168 L60 174 L62 164 L56 162 L66 156 L84 136 C86 126 90 118 96 112 C90 108 88 100 90 92 L62 68 L92 84 C92 82 93 80 96 78 Z`,
    behind: { transform: 'translate(118 116) scale(0.56)' },
  },
  suanasi: {
    label: 'Sudan yükselen, saçlarını tarayan bir kadın',
    body: `M96 54 C106 54 113 61 113 71 C113 76 111 80 108 83 C122 92 132 110 140 132 C148 154 156 178 166 200 L44 200 C50 176 58 150 66 124 C70 112 74 106 80 102 C84 98 88 94 90 88 C84 86 80 80 80 72 C80 61 87 54 96 54 Z
      M106 97 C118 90 130 82 138 72 C142 66 140 60 134 56 L121 45 L115 50 L128 61 C130 65 130 69 126 73 C120 81 112 87 102 93 Z
      M100 37 L127 48 L124 54 L121 52.8 L120 56 L118 51.8 L116 55 L114.5 50.6 L113 54 L111 49.4 L109.5 53 L108 48.2 L106.5 51.5 L105 47 L97 43 Z`,
    detail: `M110 88 C122 112 136 152 150 196 M102 96 C110 124 122 162 134 198 M92 104 C94 140 96 170 98 198`,
    water: `M26 204 C46 200 64 208 86 204 C108 200 128 208 150 204 C164 202 174 204 182 206 M36 220 C54 216 70 224 92 220 M110 220 C128 216 146 224 166 220 M52 236 C70 233 84 239 100 236 M118 236 C132 233 144 238 156 236 M72 251 C86 249 98 253 112 250`,
  },
  carsamba: {
    label: 'Elinden iğ sarkan iki büklüm yaşlı bir kadın',
    body: `M70 112 L78 106 C80 98 84 92 90 90 C96 76 110 68 126 70 C146 72 162 90 164 116 C166 140 162 168 158 190 C166 214 174 240 178 264 L84 264 C88 240 94 214 100 192 C98 182 96 174 94 168 L74 166 C68 166 64 162 64 158 C64 154 68 152 72 152 L90 148 C88 140 86 134 84 130 C80 128 76 126 74 122 C72 120 70 116 70 112 Z
      M59 190 L61 190 L61 250 L59 250 Z
      M46 236 C46 232 74 232 74 236 C74 240 46 240 46 236 Z`,
    detail: `M92 92 C106 100 124 122 134 156 M100 196 C124 204 148 204 166 196`,
    thread: `M66 160 C63 170 61 180 60 190`,
  },
};

export function silhouetteLabel(id) {
  return SIL[id] ? SIL[id].label : '';
}

export function silhouette(id, mode = 'full') {
  const s = SIL[id];
  if (!s) return '';
  const veiled = mode === 'veiled';
  const label = veiled ? 'Örtülü sayfa' : s.label;
  const extras = veiled ? '' : `
    ${s.detail ? `<path class="sil-detail" d="${s.detail}"/>` : ''}
    ${s.thread ? `<path class="sil-thread" d="${s.thread}"/>` : ''}`;
  const behind = s.behind ? `<path class="sil-body sil-behind" transform="${s.behind.transform}" d="${s.body}"/>` : '';
  const water = s.water ? `<path class="sil-water" d="${s.water}"/>` : '';
  const line = s.line ? `<path class="sil-line" d="${s.line}"/>` : '';
  const ground = veiled || s.line || s.water ? '' : '<path class="sil-ground" d="M30 268 C70 266 130 270 170 267"/>';
  return `<svg class="sil sil-${mode}" viewBox="0 0 200 280" role="img" aria-label="${label}">
    <g class="sil-ink" filter="url(#ink)">
      ${behind}${line}<path class="sil-body" d="${s.body}"/>${extras}${water}
    </g>
    ${ground}
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
