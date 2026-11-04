// Save handling. Storage can throw (private mode, blocked site data); the game keeps
// running from memory when it does.
const KEY = 'harena.save.v1';
const PENDING = 'harena.pending.v1';
let memory = null;
let memoryPending = null;

export function loadSave() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall back to memory */ }
  return memory;
}

export function writeSave(s) {
  memory = s;
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* memory only */ }
}

export function clearSave() {
  memory = null;
  memoryPending = null;
  try { localStorage.removeItem(KEY); localStorage.removeItem(PENDING); } catch (e) { /* ignore */ }
}

// A newcomer's challenge result, carried into their first ludus.
export function loadPending() {
  try {
    const raw = localStorage.getItem(PENDING);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return memoryPending;
}

export function writePending(p) {
  memoryPending = p;
  try {
    if (p) localStorage.setItem(PENDING, JSON.stringify(p));
    else localStorage.removeItem(PENDING);
  } catch (e) { /* ignore */ }
}
