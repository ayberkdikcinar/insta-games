// Save lives in localStorage when it can; otherwise only in memory for this visit.
const KEY = 'kara-defter:v1';
let memory = null;

const blank = () => ({ v: 1, results: {}, dev: {}, caught: {}, seen: {}, inProgress: null });

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && d.v === 1) return { ...blank(), ...d };
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
  try { localStorage.removeItem(KEY); } catch { /* nothing to clear */ }
}
