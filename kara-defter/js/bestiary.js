// Assembles the 50 creatures: roster skeleton (traits, tools) + prose (bestiary-*.js) + generic clue texts.
import { ROSTER } from './content/roster.js';
import A from './content/bestiary-a.js';
import B from './content/bestiary-b.js';
import C from './content/bestiary-c.js';
import D from './content/bestiary-d.js';
import GENERIC from './content/clues-generic.js';

const PROSE = { ...A, ...B, ...C, ...D };

export const CREATURES = ROSTER.map((r) => ({ ...r, ...PROSE[r.id] }));
export const BY_ID = Object.fromEntries(CREATURES.map((c) => [c.id, c]));
export { GENERIC };

export const NAMES = {
  f: ['Zehra', 'Fadime', 'Emine', 'Hatice', 'Gülsüm', 'Şerife', 'Meryem', 'Sultan', 'Hacer', 'Nazlı', 'Döndü', 'Kevser', 'Esma', 'Saniye', 'Nuriye', 'Havva', 'Ayşe', 'Elmas', 'Gülizar', 'Hanife', 'Zeliha', 'Medine', 'Şaziye', 'Cennet'],
  m: ['Hüseyin', 'Mehmet', 'Osman', 'Halil', 'İsmail', 'Mustafa', 'Yusuf', 'Rıza', 'Kâzım', 'Veli', 'Bekir', 'Durmuş', 'Hasan', 'Ramazan', 'Cemal', 'İbrahim', 'Süleyman', 'Ömer', 'Recep', 'Hamdi', 'Ali', 'Musa', 'Nuri', 'Şükrü'],
  child: ['Ahmet', 'Fatma', 'Hamza', 'Zeynep', 'Yakup', 'Ümmü', 'Selim', 'Rukiye', 'Kadir', 'Elif', 'Yunus', 'Hatçe', 'Emin', 'Sefa', 'Bilal', 'Gülcan'],
};

export const ELDERS = ['Hacer Nine', 'Dursun Dede', 'Kör Osman', 'Ebe Hatun', 'Molla Rıza', 'Şerife Nine', 'Hafız Bekir', 'Gülizar Nine', 'Topal Hasan', 'Cennet Nine', 'Deli Musa', 'Hatçe Ebe'];

export const SIGNERS = ['muhtarı', 'imamı', 'ebesi', 'bekçisi', 'öğretmeni', 'azalarından'];

export const VILLAGES = [
  'Akpınar', 'Karaağaç', 'Söğütlü', 'Kızılkaya', 'Dereköy', 'Yassıören', 'Çamlıbel', 'Kuyucak',
  'Taşoluk', 'Gökçeyurt', 'Değirmenli', 'Yeşilöz', 'Kavaklıdere', 'Sarıbük', 'Eskiköy', 'Bademli',
  'Pınarbaşı', 'Hacılar', 'Gümüşsu', 'Ilıca', 'Kocapınar', 'Ardıçlı', 'Yukarıçamlı', 'Karapınar',
  'Çataltepe', 'Ortaköy', 'Kayadibi', 'Sazlıca', 'Örencik', 'Bozdağ', 'Kırkpınar', 'Yanıkören',
  'Alacahan', 'Kuşçular', 'Delikkaya', 'Kemerdere', 'Tepecik', 'Ağıllı', 'Gölcük', 'Kurtini',
];
