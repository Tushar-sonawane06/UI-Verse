/**
 * UI-Verse - Centralized State Store
 * Manages all localStorage state in one place with reactive updates
 */

const Store = (function() {
  const STORAGE_KEY = 'uiv-state';
  const listeners = new Map();
  
  let state = {
    theme: 'light',
    sidebar: true,
    collection: [],
    filters: {
      category: 'all',
      search: ''
    },
    preferences: {}
  };

  function load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        state = { ...state, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('[Store] Failed to load state:', e);
    }
    return state;
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[Store] Failed to save state:', e);
    }
  }

  function subscribe(key, callback) {
    if (!listeners.has(key)) {
      listeners.set(key, new Set());
    }
    listeners.get(key).add(callback);
    return () => listeners.get(key).delete(callback);
  }

  function notify(key, value) {
    if (listeners.has(key)) {
      listeners.get(key).forEach(cb => cb(value));
    }
    if (listeners.has('*')) {
      listeners.get('*').forEach(cb => cb(state));
    }
  }

  function get(key) {
    return key ? state[key] : state;
  }

  function set(key, value) {
    if (typeof key === 'object') {
      state = { ...state, ...key };
    } else {
      state[key] = value;
    }
    save();
    notify(key, state[key]);
  }

  function update(key, updater) {
    const current = state[key];
    const next = typeof updater === 'function' ? updater(current) : updater;
    state[key] = next;
    save();
    notify(key, next);
  }

  function reset() {
    state = {
      theme: 'light',
      sidebar: true,
      collection: [],
      filters: { category: 'all', search: '' },
      preferences: {}
    };
    save();
    notify('*', state);
  }

  load();

  return { get, set, update, reset, subscribe, state };
})();

window.Store = Store;

// Convenience helpers
window.getTheme = () => Store.get('theme');
window.setTheme = (theme) => Store.set('theme', theme);
window.toggleTheme = () => {
  const current = Store.get('theme');
  Store.set('theme', current === 'light' ? 'dark' : 'light');
};

window.getCollection = () => Store.get('collection');
window.addToCollection = (item) => {
  const current = Store.get('collection') || [];
  if (!current.includes(item)) {
    Store.set('collection', [...current, item]);
  }
};
window.removeFromCollection = (item) => {
  const current = Store.get('collection') || [];
  Store.set('collection', current.filter(i => i !== item));
};

window.getSidebar = () => Store.get('sidebar');
window.setSidebar = (visible) => Store.set('sidebar', visible);