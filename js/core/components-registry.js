/**
 * Components Registry
 * Loads a JSON metadata file and exposes querying utilities.
 */

const ComponentsRegistry = (function () {
  const _state = {
    loaded: false,
    items: [],
    index: []
  };

  async function load(url = '/data/components.json') {
    if (_state.loaded) return _state;
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load registry');
      const json = await res.json();
      _state.items = Array.isArray(json) ? json : [];
      _state.index = buildIndex(_state.items);
      _state.loaded = true;
      return _state;
    } catch (err) {
      console.error('[ComponentsRegistry] Load error', err);
      _state.items = [];
      _state.index = [];
      _state.loaded = true; // mark loaded to avoid retries in init flow
      return _state;
    }
  }

  function buildIndex(items) {
    // Simple flattened search index using title, id, aliases and tags
    return items.map((item) => {
      const tokens = [
        item.id || '',
        item.title || '',
        (item.aliases || []).join(' '),
        (item.tags || []).join(' '),
        item.description || ''
      ].join(' ').toLowerCase();

      return {
        id: item.id,
        path: item.path,
        tokens
      };
    });
  }

  function findRoute(query) {
    if (!query) return null;
    const q = query.toLowerCase().trim();

    // 1) direct id/alias/tag substring match
    for (const item of _state.items) {
      if (!item) continue;
      const hay = [item.id, item.title].concat(item.aliases || [], item.tags || []).join(' ').toLowerCase();
      if (hay.includes(q) || q.includes(item.id)) return item.path;
    }

    // 2) index tokens match
    for (const e of _state.index) {
      if (e.tokens.includes(q)) return e.path;
    }

    return null;
  }

  function searchIndex(query) {
    if (!query) return [];
    const q = query.toLowerCase().trim();
    return _state.items.filter((item) => {
      const hay = [item.id, item.title].concat(item.aliases || [], item.tags || []).join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  return {
    load,
    findRoute,
    searchIndex,
    _state // exported for debugging
  };
})();

// Expose to global for other modules
window.ComponentsRegistry = ComponentsRegistry;
