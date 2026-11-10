// Save lives in localStorage when it can; otherwise only in memory for this visit.
// v2: results (daily), archive (past cases replayed), dev (?vaka=N), caught/seen pages, the case in progress.
const KEY = 'kara-defter:v2';
const OLD_KEY = 'kara-defter:v1';
let memory = null;

const blank = () => ({
  v: 2, results: {}, archive: {}, dev: {}, caught: {}, seen: {}, inProgress: null, onboarded: false,
  // the long game: spare candle and the nights it covered, seals earned, a pending challenge, challenges settled
  spare: 0, kept: {}, seals: {}, challenge: null, duels: {},
});

function migrate(old) {
  // v1 kept results/caught/seen with the same creature ids; the case contents changed, so drop progress.
  const d = blank();
  d.results = old.results || {};
  d.caught = old.caught || {};
  d.seen = old.seen || {};
  d.onboarded = true;
  return d;
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && d.v === 2) return { ...blank(), ...d };
    }
    const old = localStorage.getItem(OLD_KEY);
    if (old) {
      const d = migrate(JSON.parse(old));
      localStorage.setItem(KEY, JSON.stringify(d));
      localStorage.removeItem(OLD_KEY);
      return d;
    }
  } catch { /* storage blocked or corrupt */ }
  return memory || blank();
}

export function save(data) {
  memory = data;
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* keep the in-memory copy */ }
}

export function clear() {
  memory = null;
  try { localStorage.removeItem(KEY); localStorage.removeItem(OLD_KEY); } catch { /* nothing to clear */ }
}
