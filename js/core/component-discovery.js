(function (global) {
  const DEFAULT_LIMIT = 20;
  const STORAGE_KEY = 'uiverse_component_discovery_recent_filters';

  const CATEGORY_RULES = [
    { test: (id, title, desc, tags) => /button|btn/i.test([id, title, desc, tags].join(' ')), category: 'Buttons', icon: 'fa-solid fa-hand-pointer' },
    { test: (id, title, desc, tags) => /navbar|nav/i.test([id, title, desc, tags].join(' ')), category: 'Navigation', icon: 'fa-solid fa-bars' },
    { test: (id, title, desc, tags) => /card/i.test([id, title, desc, tags].join(' ')), category: 'Cards', icon: 'fa-solid fa-table-cells-large' },
    { test: (id, title, desc, tags) => /form|input/i.test([id, title, desc, tags].join(' ')), category: 'Forms', icon: 'fa-solid fa-keyboard' },
    { test: (id, title, desc, tags) => /badge/i.test([id, title, desc, tags].join(' ')), category: 'Badges', icon: 'fa-solid fa-award' },
    { test: (id, title, desc, tags) => /alert|toast/i.test([id, title, desc, tags].join(' ')), category: 'Alerts', icon: 'fa-solid fa-triangle-exclamation' },
    { test: (id, title, desc, tags) => /loader|spinner/i.test([id, title, desc, tags].join(' ')), category: 'Loaders', icon: 'fa-solid fa-spinner' },
    { test: (id, title, desc, tags) => /modal|popup/i.test([id, title, desc, tags].join(' ')), category: 'Modals', icon: 'fa-solid fa-window-maximize' },
    { test: (id, title, desc, tags) => /table/i.test([id, title, desc, tags].join(' ')), category: 'Tables', icon: 'fa-solid fa-table' },
    { test: (id, title, desc, tags) => /tab/i.test([id, title, desc, tags].join(' ')), category: 'Tabs', icon: 'fa-solid fa-table-columns' },
    { test: (id, title, desc, tags) => /footer/i.test([id, title, desc, tags].join(' ')), category: 'Layout', icon: 'fa-solid fa-shapes' },
    { test: (id, title, desc, tags) => /color|palette/i.test([id, title, desc, tags].join(' ')), category: 'Colors', icon: 'fa-solid fa-palette' },
    { test: (id, title, desc, tags) => /icon/i.test([id, title, desc, tags].join(' ')), category: 'Icons', icon: 'fa-solid fa-icons' },
    { test: (id, title, desc, tags) => /animation|transition/i.test([id, title, desc, tags].join(' ')), category: 'Animations', icon: 'fa-solid fa-wand-magic-sparkles' },
    { test: (id, title, desc, tags) => /chart|graph/i.test([id, title, desc, tags].join(' ')), category: 'Charts', icon: 'fa-solid fa-chart-line' },
    { test: (id, title, desc, tags) => /calendar|date/i.test([id, title, desc, tags].join(' ')), category: 'Calendar', icon: 'fa-solid fa-calendar' },
    { test: (id, title, desc, tags) => /pricing/i.test([id, title, desc, tags].join(' ')), category: 'Pricing', icon: 'fa-solid fa-tags' },
    { test: (id, title, desc, tags) => /testimonial|review/i.test([id, title, desc, tags].join(' ')), category: 'Testimonials', icon: 'fa-solid fa-comments' },
    { test: (id, title, desc, tags) => /gallery|image/i.test([id, title, desc, tags].join(' ')), category: 'Gallery', icon: 'fa-solid fa-images' },
    { test: (id, title, desc, tags) => /blog|article/i.test([id, title, desc, tags].join(' ')), category: 'Content', icon: 'fa-solid fa-newspaper' },
    { test: (id, title, desc, tags) => /about|faq|documentation/i.test([id, title, desc, tags].join(' ')), category: 'Utility', icon: 'fa-solid fa-circle-info' }
  ];

  const COMMON_TAGS = ['responsive', 'dark', 'light', 'modern', 'minimal', 'gradient', 'glass', 'neon', 'animated', 'interactive', 'accessible'];

  const _state = {
    initialized: false,
    items: [],
    facets: {
      categories: [],
      tags: []
    },
    recentFilters: [],
    docsById: new Map()
  };

  function safeStorage() {
    try {
      return global.localStorage;
    } catch (_) {
      return null;
    }
  }

  function readJsonText(text, fallback) {
    try {
      return JSON.parse(text);
    } catch (_) {
      return fallback;
    }
  }

  async function fetchJson(url) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) return null;
      return await response.json();
    } catch (_) {
      return null;
    }
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function normalizeString(value) {
    return String(value || '').trim();
  }

  function normalizeTags(tags) {
    return Array.from(new Set(toArray(tags).map((tag) => normalizeString(tag).toLowerCase()).filter(Boolean)));
  }

  function guessCategory(item) {
    const base = [item.id, item.title, item.description, normalizeTags(item.tags).join(' ')].join(' ');
    const match = CATEGORY_RULES.find((rule) => rule.test(item.id || '', item.title || '', item.description || '', normalizeTags(item.tags)));
    return match ? match.category : 'Component';
  }

  function guessIcon(item, category) {
    const match = CATEGORY_RULES.find((rule) => rule.category === category && rule.test(item.id || '', item.title || '', item.description || '', normalizeTags(item.tags)));
    return match ? match.icon : 'fa-solid fa-circle';
  }

  function parseMetaItem(component, metaDoc) {
    const tags = normalizeTags([].concat(component.tags || [], metaDoc?.tags || [], metaDoc?.metadata?.tags || []));
    const title = normalizeString(metaDoc?.title || component.title || component.id);
    const description = normalizeString(metaDoc?.description || component.description || '');
    const category = normalizeString(component.category || metaDoc?.category || guessCategory(component));
    const icon = normalizeString(component.icon || metaDoc?.icon || guessIcon(component, category));
    const hasPage = Boolean(component.path);
    const hasDocs = Boolean(metaDoc || component.description || component.tags?.length);
    const score = Number(metaDoc?.documentationScore || metaDoc?.score || component.score || 0);

    return {
      id: component.id,
      title,
      path: component.path || '',
      description,
      category,
      icon,
      tags,
      aliases: normalizeTags(component.aliases || []),
      hasPage,
      hasDocs,
      documentationScore: Number.isFinite(score) ? score : 0,
      source: component.source || 'metadata',
      metadata: component,
      doc: metaDoc || null,
      searchableText: [component.id, title, description, category, tags.join(' '), normalizeTags(component.aliases || []).join(' ')].join(' ').toLowerCase()
    };
  }

  function buildFacets(items) {
    const categories = new Map();
    const tags = new Map();

    items.forEach((item) => {
      categories.set(item.category, (categories.get(item.category) || 0) + 1);
      item.tags.forEach((tag) => tags.set(tag, (tags.get(tag) || 0) + 1));
    });

    return {
      categories: Array.from(categories.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => a.name.localeCompare(b.name)),
      tags: Array.from(tags.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    };
  }

  function getWeightScore(item, query) {
    if (!query) return 0;
    const q = query.toLowerCase().trim();
    if (!q) return 0;

    let score = 0;
    const fields = [item.id, item.title, item.description, item.category, item.aliases.join(' '), item.tags.join(' ')].map((value) => normalizeString(value).toLowerCase());

    fields.forEach((field, index) => {
      if (!field) return;
      if (field === q) score += 120 - index * 6;
      if (field.startsWith(q)) score += 80 - index * 4;
      if (field.includes(q)) score += 45 - index * 3;
    });

    q.split(/\s+/).forEach((term) => {
      if (!term) return;
      if (item.searchableText.includes(term)) score += 10;
      if (item.tags.includes(term)) score += 12;
      if (item.category.toLowerCase().includes(term)) score += 14;
      if (item.aliases.some((alias) => alias.includes(term))) score += 11;
    });

    return score;
  }

  function matchesFilters(item, filters = {}) {
    const categories = normalizeTags(filters.categories);
    const tags = normalizeTags(filters.tags);
    const excludeTags = normalizeTags(filters.excludeTags);

    if (categories.length > 0 && !categories.includes(item.category.toLowerCase())) {
      return false;
    }

    if (tags.length > 0 && !tags.every((tag) => item.tags.includes(tag))) {
      return false;
    }

    if (excludeTags.length > 0 && excludeTags.some((tag) => item.tags.includes(tag))) {
      return false;
    }

    if (filters.hasDocs === true && !item.hasDocs) return false;
    if (filters.hasDocs === false && item.hasDocs) return false;
    if (filters.hasPage === true && !item.hasPage) return false;
    if (filters.hasPage === false && item.hasPage) return false;
    if (typeof filters.minScore === 'number' && item.documentationScore < filters.minScore) return false;
    if (typeof filters.maxScore === 'number' && item.documentationScore > filters.maxScore) return false;

    return true;
  }

  function applySort(items, sort = 'relevance', query = '') {
    const cloned = items.slice();

    if (sort === 'title') {
      return cloned.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === 'score') {
      return cloned.sort((a, b) => b.documentationScore - a.documentationScore || a.title.localeCompare(b.title));
    }

    if (sort === 'category') {
      return cloned.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
    }

    if (query) {
      return cloned.sort((a, b) => b._score - a._score || b.documentationScore - a.documentationScore || a.title.localeCompare(b.title));
    }

    return cloned.sort((a, b) => b.documentationScore - a.documentationScore || a.title.localeCompare(b.title));
  }

  function serializeFilters(filters) {
    return {
      categories: normalizeTags(filters.categories),
      tags: normalizeTags(filters.tags),
      excludeTags: normalizeTags(filters.excludeTags),
      hasDocs: typeof filters.hasDocs === 'boolean' ? filters.hasDocs : null,
      hasPage: typeof filters.hasPage === 'boolean' ? filters.hasPage : null,
      minScore: typeof filters.minScore === 'number' ? filters.minScore : null,
      maxScore: typeof filters.maxScore === 'number' ? filters.maxScore : null,
      sort: filters.sort || 'relevance'
    };
  }

  function parseQuerySyntax(query) {
    const filters = {
      categories: [],
      tags: [],
      excludeTags: [],
      hasDocs: null,
      hasPage: null,
      minScore: null,
      maxScore: null,
      sort: 'relevance'
    };

    const textParts = [];
    const terms = normalizeString(query).match(/(?:[^"]\S*|".+?")+/g) || [];

    terms.forEach((term) => {
      const stripped = term.replace(/^"|"$/g, '');
      const lower = stripped.toLowerCase();

      if (lower.startsWith('tag:')) {
        filters.tags.push(lower.slice(4));
        return;
      }
      if (lower.startsWith('-tag:')) {
        filters.excludeTags.push(lower.slice(5));
        return;
      }
      if (lower.startsWith('category:')) {
        filters.categories.push(lower.slice(9));
        return;
      }
      if (lower === 'docs' || lower === 'has:docs') {
        filters.hasDocs = true;
        return;
      }
      if (lower === 'page' || lower === 'has:page') {
        filters.hasPage = true;
        return;
      }
      if (lower.startsWith('score>')) {
        filters.minScore = Number(lower.slice(6)) || null;
        return;
      }
      if (lower.startsWith('score<')) {
        filters.maxScore = Number(lower.slice(6)) || null;
        return;
      }
      if (lower.startsWith('sort:')) {
        filters.sort = lower.slice(5);
        return;
      }

      textParts.push(stripped);
    });

    return {
      query: textParts.join(' ').trim(),
      filters
    };
  }

  function getRecentFilters() {
    const storage = safeStorage();
    if (!storage) return [];
    try {
      const raw = storage.getItem(STORAGE_KEY);
      return raw ? readJsonText(raw, []) : [];
    } catch (_) {
      return [];
    }
  }

  function saveRecentFilters(items) {
    const storage = safeStorage();
    if (!storage) return;
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 8)));
    } catch (_) {
      // ignore storage errors
    }
  }

  function recordRecentSearch(entry) {
    const next = [{ ...entry, at: new Date().toISOString() }].concat(_state.recentFilters.filter((item) => item.query !== entry.query || JSON.stringify(item.filters) !== JSON.stringify(entry.filters)));
    _state.recentFilters = next.slice(0, 8);
    saveRecentFilters(_state.recentFilters);
  }

  async function init(options = {}) {
    if (_state.initialized) return _state;

    let metadataList = [];
    if (Array.isArray(options.items)) {
      metadataList = options.items;
    } else {
      const [componentsData, docsData] = await Promise.all([
        fetchJson(options.componentsUrl || '/data/components.json'),
        fetchJson(options.docsUrl || '/data/meta/documentation-catalog.json')
      ]);
      metadataList = toArray(componentsData);
      const docsArray = toArray(docsData?.components || docsData?.pages || docsData);
      const docsMap = new Map(docsArray.filter(Boolean).map((doc) => [doc.id, doc]));
      _state.docsById = docsMap;
      metadataList = metadataList.length > 0 ? metadataList : toArray(options.fallbackItems);
      if (metadataList.length === 0) {
        metadataList = docsArray.map((doc) => ({
          id: doc.id,
          title: doc.title,
          path: doc.path,
          tags: doc.tags || [],
          description: doc.description || '',
          category: doc.category || 'Component'
        }));
      }
    }

    if (Array.isArray(options.docsItems)) {
      _state.docsById = new Map(options.docsItems.filter(Boolean).map((doc) => [doc.id, doc]));
    }

    const docsArray = Array.from(_state.docsById.entries()).map(([id, doc]) => doc);
    const docsMap = _state.docsById.size > 0 ? _state.docsById : new Map(docsArray.map((doc) => [doc.id, doc]));
    const items = metadataList.map((component) => {
      const doc = docsMap.get(component.id) || null;
      const item = parseMetaItem(component, doc);
      if (!item.tags.length) {
        item.tags = Array.from(new Set(COMMON_TAGS.filter((tag) => item.searchableText.includes(tag))));
      }
      item.category = item.category || guessCategory(item);
      item.icon = item.icon || guessIcon(item, item.category);
      return item;
    });

    _state.items = items;
    _state.facets = buildFacets(items);
    _state.recentFilters = getRecentFilters();
    _state.initialized = true;
    return _state;
  }

  function discover(query = '', options = {}) {
    const parsed = parseQuerySyntax(query);
    const mergedFilters = {
      ...serializeFilters(parsed.filters),
      ...serializeFilters(options.filters || {})
    };
    const searchText = options.query !== undefined ? options.query : parsed.query;
    const queryText = normalizeString(searchText);
    const limit = typeof options.limit === 'number' ? options.limit : DEFAULT_LIMIT;
    const sort = options.sort || mergedFilters.sort || 'relevance';

    const filtered = _state.items.filter((item) => matchesFilters(item, mergedFilters));
    const scored = filtered.map((item) => {
      const _score = queryText ? getWeightScore(item, queryText) : item.documentationScore;
      return { ...item, _score };
    }).filter((item) => !queryText || item._score > 0 || matchesFilters(item, mergedFilters));

    const ranked = applySort(scored, sort, queryText).slice(0, limit);
    const summary = {
      total: filtered.length,
      returned: ranked.length,
      categories: new Set(ranked.map((item) => item.category)).size,
      docs: ranked.filter((item) => item.hasDocs).length,
      pages: ranked.filter((item) => item.hasPage).length
    };

    recordRecentSearch({ query: queryText, filters: mergedFilters, sort });

    return {
      query: queryText,
      filters: mergedFilters,
      results: ranked,
      summary,
      facets: _state.facets,
      recentFilters: _state.recentFilters
    };
  }

  function search(query, options = {}) {
    return discover(query, options).results;
  }

  function getAll() {
    return _state.items.slice();
  }

  function getById(id) {
    return _state.items.find((item) => item.id === id) || null;
  }

  function getFacets() {
    return {
      ..._state.facets,
      total: _state.items.length
    };
  }

  function getRecentFiltersList() {
    return _state.recentFilters.slice();
  }

  function exportQuery(query, options = {}) {
    const result = discover(query, options);
    return JSON.stringify({ query: result.query, filters: result.filters, sort: options.sort || result.filters.sort }, null, 2);
  }

  function resolve(query) {
    // Use ComponentVersioning if available for advanced resolution
    const versioning = global.ComponentVersioning;
    if (versioning && typeof versioning.resolve === 'function') {
      const catalog = _state.items.map((item) => ({ id: item.id, title: item.title, path: item.path, version: item.metadata?.version || item.version || '0.0.0', versions: item.metadata?.versions || [], aliases: item.aliases, tags: item.tags, doc: item.doc, description: item.description }));
      return versioning.resolve(query, catalog);
    }

    // Fallback: simple id/title match
    const id = String(query || '').toLowerCase().trim();
    const found = _state.items.find((it) => (it.id || '').toLowerCase() === id || (it.title || '').toLowerCase() === id || (it.aliases || []).map(a => a.toLowerCase()).includes(id));
    if (!found) return { found: false, query: String(query), compatibility: { status: 'missing', fallbackUsed: false } };
    return { found: true, id: found.id, path: found.path, title: found.title, version: found.version || '0.0.0', latestVersion: found.latestVersion || found.version, compatibility: { status: 'exact', fallbackUsed: false } };
  }

  const ComponentDiscovery = {
    init,
    discover,
    search,
    getAll,
    getById,
    getFacets,
    getRecentFilters: getRecentFiltersList,
    exportQuery,
    resolve,
    _state
  };

  global.ComponentDiscovery = ComponentDiscovery;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentDiscovery;
  }
})(typeof window !== 'undefined' ? window : globalThis);
