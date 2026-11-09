// Builds tools/story-plan.json: for each creature, the signs a hand-written case uses, which three sources are open,
// the rivals left on the shortlist, its village and the voice of its letter. Run once; stories copy chosen/open from it.
import { writeFileSync } from 'node:fs';
import { CREATURES, BY_ID } from '../js/bestiary.js';
import { CLUE_DIMS, FAMILY_OF, TRAIT, TOOL_BY_ID } from '../js/traits.js';

const dims = CLUE_DIMS.map((d) => d.id);
const FIXED = {
  karakoncolos: { chosen: { kurban: 'hane', iz: 'buyuk_iz', tanik: 'cagiran', zaman: 'zemheri', yer: 'esik', sebep: 'cevap' }, open: ['kurban', 'tanik', 'yer'], village: 'Aşağı Yayla', voice: 'Muhtar, numaralı resmî yazı' },
  albasti: { chosen: { kurban: 'lohusa', iz: 'sac', tanik: 'uzun_sacli', zaman: 'kirk', yer: 'oda', sebep: 'yalniz' }, open: ['kurban', 'yer', 'sebep'], village: 'Yukarı Söğüt', voice: 'Eğitmen, kaynanın ağzından' },
  definebekcisi: { chosen: { kurban: 'defineci', iz: 'mezar', tanik: 'golge', zaman: 'gece_yarisi', yer: 'harabe', sebep: 'define' }, open: ['kurban', 'yer', 'sebep'], village: 'Çukurhan', voice: 'Köy bakkalı, bir şey saklıyor' },
};
const VOICES = {
  karabasan: 'Kasaba hekimi; bilime inanıyor, yazarken inancı çatlıyor', gulyabani: 'Kamyon şoförü; yol raporu gibi kısa, ama elleri titrer', hortlak: 'Yeni dul kalmış kadın; kocasının hâlâ geldiğini söylemekten utanıyor',
  ecinni: 'Düğün evinin sahibi; düğün yarım kaldı', suanasi: 'Çocuğu kaybolan baba, imama yazdırıyor', carsamba: 'Genç dokumacı kız; yasak gecede tezgâh başındaydı', obur: 'Köy imamı; cemaatine bakarak yazıyor',
  cadi: 'Cadılıkla suçlanan kadının kendisi', tepegoz: 'Yayla ağası; çobanlarını sayıyor, sayı tutmuyor', yelmoguz: 'Kız kardeşini arayan abla', dev: 'Yol amelesi çavuşu; rapor', devanasi: 'Mağaradan dönen tek kişi',
  peri: 'Nişanlısı değişen genç kız', umaci: 'Köye yeni atanmış şehirli öğretmen hanım', surale: 'Orman muhafaza memuru; tutanak', bicura: 'Yaşlı ev kadını; gençler inanmıyor', yuha: 'Oğlunu yeni evlendirmiş ana',
  bakirtirnak: 'İstasyon şefi; telgraf gibi kısa cümleler', eviyesi: 'Yeni gelin; gizlice yazıyor, kimse bilmemeli', ahiriyesi: 'Seyis; hayvanların dilinden konuşur', hamamiyesi: 'Köy hamamının natırı, kadın', degirmeniyesi: 'Değirmenci',
  agaciyesi: 'Ulu ağacı kestiren ağa; suçunu kabul etmiyor', odana: 'Ocağı söndüren evin büyük oğlu', yelana: 'Harman sahibi', evren: 'Köy yolunu ölçen harita memuru', sahmeran: 'Kaybolan kuyucunun anası', evyilani: 'On yaşında çocuk; okul defterinden yırtılmış kâğıda yazıyor',
  kurtadam: 'Avcı arkadaşı; ne gördüğünü yazmaktan kaçınıyor', ummusibyan: 'Bir bebeğini yitirmiş, ikincisi için yazan ana', kayberen: 'Avcının karısı', uor: 'Köyün mezarcısı', abasi: 'Gezgin tüccar', yeriyesi: 'Yeni yerleşmiş göçmen aile',
  dagiyesi: 'Yörük obası büyüğü', almasti: 'Nalbant', sulmus: 'Yetim kız; okuma yazmayı yeni söküyor', ifrit: 'Kaybolan kaçakçının kardeşi', karakedi: 'Köy terzisi', suaygiri: 'Balıkçı', kuyuanasi: 'Köy heyeti adına üç kişinin imzaladığı yazı',
  ekiniyesi: 'Harmancı kadın', karakopek: 'Köyün gece bekçisi', kormos: 'Ölüm döşeğindeki yaşlı adam; son mektubu', kiremet: 'Köy hocası; inancıyla köylünün inancı arasında', sirtlan: 'Cenaze yıkayıcısı kadın', denizkizi: 'Deniz feneri bekçisi',
};
const VILLAGES = ['Karaağaç','Akpınar','Söğütlü','Kavaklıdere','Çamlıbel','Kızılöz','Taşoluk','Değirmendere','Yeşilyurt','Ortaköy','Kuşluca','Bozkuyu','Sarıçiçek','Gölbaşı','Kirazlı','Dereiçi','Yukarı Kavak','Aşağı Çiftlik','Eskihisar','Beşevler','Karatepe','Ilıca','Kocapınar','Dutluca','Armutlu','Kayabaşı','Hacıbey','Salkımlı','Kuyucak','Ardıçlı','Çalıköy','Tepecik','Yenice','Alacahan','Karaköprü','Yazılı','Meşeli','Sazlıdere','Köprübaşı','Taşkesen','Elmacık','Gökçeli','Yaylacık','Ballıca','Korucuk','Kumluca','Demirciler'];

function product(cr) {
  let out = [{}];
  for (const d of dims) out = out.flatMap((o) => cr.traits[d].map((t) => ({ ...o, [d]: t })));
  return out;
}
function subsets(k) {
  const res = [];
  for (let m = 1; m < 64; m++) { const s = dims.filter((_, i) => m >> i & 1); if (s.length === k) res.push(s); }
  return res;
}
const exact = (ch, s) => CREATURES.filter((x) => s.every((d) => x.traits[d].includes(ch[d])));
const family = (ch, s) => CREATURES.filter((x) => s.every((d) => x.traits[d].some((t) => FAMILY_OF[d][t] === FAMILY_OF[d][ch[d]])));

const used = {};
const plan = {};
const bump = (s) => { used[s.join('+')] = (used[s.join('+')] || 0) + 1; };
for (const id of Object.keys(FIXED)) bump(FIXED[id].open);
let v = 0;
for (const cr of CREATURES) {
  if (FIXED[cr.id]) { plan[cr.id] = { ...FIXED[cr.id] }; continue; }
  let best = null;
  for (const k of [3, 2, 4]) {
    for (const ch of product(cr)) for (const s of subsets(k)) {
      const ex = exact(ch, s).length;
      if (ex < 2 || ex > 4 || family(ch, s).length > 8) continue;
      const score = (used[s.join('+')] || 0) * 3 + Math.abs(ex - 3) + (s.includes('tanik') ? 0 : 1) + (s.includes('kurban') && s.includes('sebep') ? 0.5 : 0);
      if (!best || score < best.score) best = { score, ch, s };
    }
    if (best) break;
  }
  if (!best) throw new Error(`no plan for ${cr.id}`);
  bump(best.s);
  plan[cr.id] = { chosen: best.ch, open: best.s, village: VILLAGES[v++], voice: VOICES[cr.id] || 'Serbest; önceki vakalardan farklı bir ses' };
}
const out = {};
for (const cr of CREATURES) {
  const p = plan[cr.id];
  const short = exact(p.chosen, p.open);
  out[cr.id] = {
    name: cr.name, village: p.village, voice: p.voice, chosen: p.chosen, open: p.open,
    closed: dims.filter((d) => !p.open.includes(d)),
    signs: Object.fromEntries(dims.map((d) => [d, TRAIT[d][p.chosen[d]].label])),
    weaknesses: cr.tools.map((t) => TOOL_BY_ID[t].name),
    rivals: short.filter((x) => x.id !== cr.id).map((x) => ({ name: x.name, weaknesses: x.tools.map((t) => TOOL_BY_ID[t].name), signs: Object.fromEntries(dims.map((d) => [d, x.traits[d].map((t) => TRAIT[d][t].label)])) })),
    lore: cr.lore,
  };
}
writeFileSync(new URL('./story-plan.json', import.meta.url), JSON.stringify(out, null, 1));
const combos = Object.values(plan).reduce((a, p) => { const k = p.open.join('+'); a[k] = (a[k] || 0) + 1; return a; }, {});
console.log(Object.keys(out).length, 'plans'); console.log(combos);
console.log('shortlist sizes', Object.values(out).reduce((a, p) => { const n = p.rivals.length + 1; a[n] = (a[n] || 0) + 1; return a; }, {}));
console.log('no voice:', Object.entries(out).filter(([, p]) => p.voice.startsWith('Serbest')).map(([k]) => k).join(','));
