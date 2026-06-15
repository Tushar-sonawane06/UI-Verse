// Lightweight global state manager for components with time-travel debugging
const state = {};
const subs = new Map(); // key -> Set of callbacks

// Time-travel debugging support
const history = {
  stack: [],           // Array of state snapshots
  currentIndex: -1,    // Current position in history (-1 = at state, no history)
  maxSize: 1000,       // Maximum history entries
  paused: false,       // When true, changes don't add to history
  syncPaused: false,   // When true, cross-tab sync is paused
  actions: []          // Action log for display
};

let actionIdCounter = 0;

function deepClone(obj) {
  if (obj === undefined) return undefined;
  if (obj === null) return null;
  return JSON.parse(JSON.stringify(obj));
}

function createSnapshot(action = null) {
  return {
    state: deepClone(state),
    timestamp: Date.now(),
    action: action || {
      id: ++actionIdCounter,
      type: 'INIT',
      path: null,
      value: null
    }
  };
}

function addToHistory(snapshot) {
  if (history.paused) return;
  
  // Remove any future history if we're not at the end
  if (history.currentIndex < history.stack.length - 1) {
    history.stack = history.stack.slice(0, history.currentIndex + 1);
    history.actions = history.actions.slice(0, history.currentIndex + 1);
  }
  
  // Add new snapshot
  history.stack.push(snapshot);
  history.actions.push(snapshot.action);
  
  // Enforce max size
  if (history.stack.length > history.maxSize) {
    history.stack.shift();
    history.actions.shift();
  } else {
    history.currentIndex++;
  }
  
  // Dispatch event for devtools
  dispatchHistoryEvent('stateChanged', {
    index: history.currentIndex,
    total: history.stack.length,
    action: snapshot.action
  });
}

function dispatchHistoryEvent(type, detail) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('stateHistory:' + type, { detail }));
  }
}

function get(path) {
  if (!path) return deepClone(state);
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), state);
}

function set(path, value, skipHistory = false) {
  if (!path) throw new Error('StateManager.set requires a path');
  const parts = path.split('.');
  let cur = state;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] === undefined) cur[p] = {};
    cur = cur[p];
  }
  
  const oldValue = cur[parts[parts.length - 1]];
  cur[parts[parts.length - 1]] = value;
  
  // Add to history unless explicitly skipped
  if (!skipHistory) {
    const snapshot = createSnapshot({
      id: ++actionIdCounter,
      type: 'SET',
      path,
      value,
      oldValue
    });
    addToHistory(snapshot);
  }
  
  notify(path, value);
}

function subscribe(path, callback) {
  if (!subs.has(path)) subs.set(path, new Set());
  subs.get(path).add(callback);
  // return unsubscribe
  return () => subs.get(path).delete(callback);
}

function notify(path, value) {
  // notify exact path subscribers
  const set_ = subs.get(path);
  if (set_) set_.forEach((cb) => cb(value));
  // notify wildcard subscribers (top-level)
  const parts = path.split('.');
  for (let i = parts.length - 1; i > 0; i--) {
    const parent = parts.slice(0, i).join('.');
    const pset = subs.get(parent);
    if (pset) pset.forEach((cb) => cb(get(parent)));
  }
}

function reset() {
  // Clear state
  Object.keys(state).forEach((k) => delete state[k]);
  subs.forEach((set) => set.forEach((cb) => cb(undefined)));
  
  // Clear history
  history.stack = [];
  history.currentIndex = -1;
  history.actions = [];
  
  // Add reset to history
  const snapshot = createSnapshot({
    id: ++actionIdCounter,
    type: 'RESET',
    path: null,
    value: null
  });
  addToHistory(snapshot);
}

// Time-travel debugging functions
function undo() {
  if (history.currentIndex <= 0) {
    console.warn('[StateManager] No more history to undo');
    return false;
  }
  
  history.currentIndex--;
  const snapshot = history.stack[history.currentIndex];
  
  // Pause history recording and sync during time-travel
  const prevPaused = history.paused;
  const prevSyncPaused = history.syncPaused;
  history.paused = true;
  history.syncPaused = true;
  
  // Restore state
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, deepClone(snapshot.state));
  
  // Notify subscribers
  subs.forEach((set) => set.forEach((cb) => cb(get())));
  
  // Resume
  history.paused = prevPaused;
  history.syncPaused = prevSyncPaused;
  
  dispatchHistoryEvent('jumped', {
    index: history.currentIndex,
    action: snapshot.action,
    direction: 'undo'
  });
  
  return true;
}

function redo() {
  if (history.currentIndex >= history.stack.length - 1) {
    console.warn('[StateManager] No more future history to redo');
    return false;
  }
  
  history.currentIndex++;
  const snapshot = history.stack[history.currentIndex];
  
  // Pause history recording and sync during time-travel
  const prevPaused = history.paused;
  const prevSyncPaused = history.syncPaused;
  history.paused = true;
  history.syncPaused = true;
  
  // Restore state
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, deepClone(snapshot.state));
  
  // Notify subscribers
  subs.forEach((set) => set.forEach((cb) => cb(get())));
  
  // Resume
  history.paused = prevPaused;
  history.syncPaused = prevSyncPaused;
  
  dispatchHistoryEvent('jumped', {
    index: history.currentIndex,
    action: snapshot.action,
    direction: 'redo'
  });
  
  return true;
}

function jumpTo(index) {
  if (index < 0 || index >= history.stack.length) {
    console.warn('[StateManager] Invalid history index:', index);
    return false;
  }
  
  if (index === history.currentIndex) {
    return true; // Already at this index
  }
  
  const direction = index > history.currentIndex ? 'redo' : 'undo';
  history.currentIndex = index;
  const snapshot = history.stack[history.currentIndex];
  
  // Pause history recording and sync during time-travel
  const prevPaused = history.paused;
  const prevSyncPaused = history.syncPaused;
  history.paused = true;
  history.syncPaused = true;
  
  // Restore state
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, deepClone(snapshot.state));
  
  // Notify subscribers
  subs.forEach((set) => set.forEach((cb) => cb(get())));
  
  // Resume
  history.paused = prevPaused;
  history.syncPaused = prevSyncPaused;
  
  dispatchHistoryEvent('jumped', {
    index: history.currentIndex,
    action: snapshot.action,
    direction
  });
  
  return true;
}

function getHistory() {
  return {
    stack: [...history.stack],
    currentIndex: history.currentIndex,
    actions: [...history.actions],
    canUndo: history.currentIndex > 0,
    canRedo: history.currentIndex < history.stack.length - 1,
    isPaused: history.paused,
    isSyncPaused: history.syncPaused
  };
}

function getStateAt(index) {
  if (index < 0 || index >= history.stack.length) {
    return null;
  }
  return deepClone(history.stack[index].state);
}

function exportState() {
  return JSON.stringify({
    current: deepClone(state),
    history: history.stack.map((s, i) => ({
      index: i,
      timestamp: s.timestamp,
      action: s.action,
      state: s.state
    })),
    exportedAt: new Date().toISOString()
  }, null, 2);
}

function importState(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    
    if (data.current) {
      // Pause history during import
      const prevPaused = history.paused;
      history.paused = true;
      
      // Clear current state
      Object.keys(state).forEach((k) => delete state[k]);
      Object.assign(state, deepClone(data.current));
      
      history.paused = prevPaused;
      
      // Notify subscribers
      subs.forEach((set) => set.forEach((cb) => cb(get())));
    }
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function pauseHistory() {
  history.paused = true;
  dispatchHistoryEvent('paused', { type: 'history' });
}

function resumeHistory() {
  history.paused = false;
  dispatchHistoryEvent('resumed', { type: 'history' });
}

function pauseSync() {
  history.syncPaused = true;
  dispatchHistoryEvent('paused', { type: 'sync' });
}

function resumeSync() {
  history.syncPaused = false;
  dispatchHistoryEvent('resumed', { type: 'sync' });
}

function setMaxHistorySize(size) {
  history.maxSize = Math.max(1, Math.min(size, 10000));
  
  // Trim if necessary
  while (history.stack.length > history.maxSize) {
    history.stack.shift();
    history.actions.shift();
    history.currentIndex--;
  }
}

function clearHistory() {
  history.stack = [];
  history.currentIndex = -1;
  history.actions = [];
  dispatchHistoryEvent('cleared', {});
}

const StateManager = { 
  get, 
  set, 
  subscribe, 
  reset,
  // Time-travel functions
  undo, 
  redo, 
  jumpTo,
  // History access
  getHistory,
  getStateAt,
  exportState,
  importState,
  // Control functions
  pauseHistory,
  resumeHistory,
  pauseSync,
  resumeSync,
  setMaxHistorySize,
  clearHistory,
  // Direct state access (for advanced usage)
  _state: state,
  _history: history
};

// Set on window for regular script usage
if (typeof window !== 'undefined') window.StateManager = StateManager;

// Set on module.exports for Node.js CommonJS usage
if (typeof module !== 'undefined' && module.exports) module.exports = StateManager;