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
      const [componentsRes, docsRes] = await Promise.all([
        fetch(url, { cache: 'no-store' }),
        fetch('/data/meta/documentation-catalog.json', { cache: 'no-store' }).catch(() => null)
      ]);
      if (!componentsRes.ok) throw new Error('Failed to load registry');
      const componentsJson = await componentsRes.json();
      const docsJson = docsRes && docsRes.ok ? await docsRes.json() : {};
      const docsItems = Array.isArray(docsJson.components) ? docsJson.components : Array.isArray(docsJson.pages) ? docsJson.pages : Array.isArray(docsJson) ? docsJson : [];
      const versioning = globalThis.ComponentVersioning;
      _state.items = versioning ? versioning.buildCatalog(Array.isArray(componentsJson) ? componentsJson : [], docsItems) : (Array.isArray(componentsJson) ? componentsJson : []);
      _state.index = buildIndex(_state.items);
      _state.versioning = versioning || null;
      _state.loaded = true;
      return _state;
    } catch (err) {
      console.error('[ComponentsRegistry] Load error', err);
      _state.items = [];
      _state.index = [];
      _state.versioning = null;
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
        item.version || '',
        (item.versions || []).join(' '),
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
    const resolved = resolve(query);
    return resolved ? resolved.path : null;
  }

  function searchIndex(query) {
    if (!query) return [];
    const q = query.toLowerCase().trim();
    return _state.items.filter((item) => {
      const hay = [item.id, item.title, item.version].concat(item.aliases || [], item.tags || []).join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  function resolve(query) {
    if (!_state.items.length) return null;
    const versioning = _state.versioning || globalThis.ComponentVersioning;
    if (versioning && typeof versioning.resolve === 'function') {
      return versioning.resolve(query, _state.items);
    }

    if (!query) return null;
    const q = String(query).toLowerCase().trim();
    for (const item of _state.items) {
      if (!item) continue;
      const hay = [item.id, item.title].concat(item.aliases || [], item.tags || []).join(' ').toLowerCase();
      if (hay.includes(q) || q.includes(item.id)) {
        return { path: item.path, id: item.id, title: item.title, version: item.version || '', compatibility: { status: 'legacy', fallbackUsed: false } };
      }
    }
    return null;
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

// Auto-load on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ComponentsRegistry.load());
} else {
  ComponentsRegistry.load();
}
