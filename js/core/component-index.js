/**
 * Component Index
 * Compatibility wrapper around the centralized discovery engine.
 */

const ComponentIndex = (function () {
  const _state = {
    initialized: false,
    components: [],
    facets: null,
    discovery: null
  };

  async function ensureDiscovery() {
    if (_state.discovery) return _state.discovery;

    let discovery = globalThis.ComponentDiscovery;
    if (!discovery && typeof require === 'function') {
      try {
        discovery = require('./component-discovery.js');
      } catch (_) {
        discovery = null;
      }
    }

    if (!discovery) {
      throw new Error('ComponentDiscovery is not available');
    }

    _state.discovery = discovery;
    return discovery;
  }

  async function init() {
    if (_state.initialized) return _state;

    const discovery = await ensureDiscovery();
    await discovery.init();
    _state.components = discovery.getAll();
    _state.facets = discovery.getFacets();
    _state.initialized = true;
    return _state;
  }

  function search(query, options = {}) {
    if (!_state.discovery) {
      return _state.components.slice(0, 10);
    }
    return _state.discovery.search(query, options);
  }

  function resolve(query, options = {}) {
    if (_state.discovery && typeof _state.discovery.resolve === 'function') {
      return _state.discovery.resolve(query, options);
    }
    return { found: false, query: query || '', compatibility: { status: 'unavailable', fallbackUsed: false } };
  }

  function discover(query, options = {}) {
    if (!_state.discovery) {
      return {
        query: query || '',
        filters: options.filters || {},
        results: _state.components.slice(0, options.limit || 10),
        summary: { total: _state.components.length, returned: Math.min(_state.components.length, options.limit || 10), categories: 0, docs: 0, pages: 0 },
        facets: _state.facets || { categories: [], tags: [] },
        recentFilters: []
      };
    }
    return _state.discovery.discover(query, options);
  }

  function getAll() {
    return _state.discovery ? _state.discovery.getAll() : _state.components;
  }

  function getById(id) {
    return _state.discovery ? _state.discovery.getById(id) : _state.components.find((comp) => comp.id === id);
  }

  function getByCategory(category) {
    const target = String(category || '').toLowerCase();
    return getAll().filter((comp) => String(comp.category || '').toLowerCase() === target);
  }

  function getFacets() {
    return _state.discovery ? _state.discovery.getFacets() : (_state.facets || { categories: [], tags: [], total: 0 });
  }

  return {
    init,
    search,
    discover,
    getAll,
    getById,
    getByCategory,
    getFacets,
    _state
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ComponentIndex;
}

window.ComponentIndex = ComponentIndex;
