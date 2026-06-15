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

  const SEMANTIC_GROUPS = [
    ['button', 'buttons', 'btn', 'cta', 'action', 'actions'],
    ['navbar', 'nav', 'navigation', 'menu', 'header', 'topbar'],
    ['card', 'cards', 'panel', 'panels', 'tile', 'tiles'],
    ['form', 'forms', 'input', 'inputs', 'field', 'fields', 'textfield'],
    ['alert', 'alerts', 'toast', 'toasts', 'notification', 'notifications', 'message', 'messages'],
    ['loader', 'loaders', 'spinner', 'spinners', 'skeleton', 'loading'],
    ['tab', 'tabs', 'segment', 'segments', 'switcher'],
    ['pricing', 'plan', 'plans', 'subscription', 'billing'],
    ['testimonial', 'testimonials', 'review', 'reviews', 'quote', 'quotes'],
    ['gallery', 'galleries', 'image', 'images', 'photo', 'photos', 'carousel', 'slider'],
    ['color', 'colors', 'palette', 'theme', 'themes', 'token', 'tokens'],
    ['chart', 'charts', 'graph', 'graphs', 'analytics', 'stats', 'dashboard'],
    ['footer', 'footers', 'layout', 'site'],
    ['about', 'faq', 'docs', 'documentation', 'guide', 'guidelines', 'help']
  ];

  function buildSemanticLookup(groups) {
    const lookup = new Map();

    groups.forEach((group) => {
      const normalizedTokens = Array.from(new Set(group.flatMap((term) => splitTokens(term))));
      const tokenSet = new Set(normalizedTokens);

      normalizedTokens.forEach((token) => {
        const existing = lookup.get(token) || new Set();
        tokenSet.forEach((value) => existing.add(value));
        lookup.set(token, existing);
      });
    });

    return lookup;
  }

  const SEMANTIC_LOOKUP = buildSemanticLookup(SEMANTIC_GROUPS);

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

  function normalizeRegistryItems(registryItems = []) {
    return toArray(registryItems).filter(Boolean).map((entry) => {
      const files = entry.files || {};
      const htmlPath = normalizeString(files.html || entry.path || entry.file || '');
      const cssPath = normalizeString(files.css || entry.css || '');
      const jsPath = normalizeString(files.js || entry.js || '');
      const tags = normalizeTags(entry.tags || []);
      const aliases = Array.from(new Set([
        normalizeString(entry.name),
        normalizeString(entry.title),
        ...tags,
        ...(entry.aliases || [])
      ].map((value) => normalizeString(value).toLowerCase()).filter(Boolean)));

      return {
        id: normalizeString(entry.name || entry.id || htmlPath.replace(/\.html?$/i, '')).toLowerCase(),
        title: normalizeString(entry.title || entry.name || entry.id || htmlPath),
        path: htmlPath,
        css: cssPath,
        js: jsPath,
        category: normalizeString(entry.category || guessCategory({
          id: entry.name || entry.id || '',
          title: entry.title || entry.name || '',
          description: entry.description || '',
          tags
        })),
        tags,
        aliases,
        description: normalizeString(entry.description || ''),
        source: 'registry',
        registry: entry,
        dependencies: toArray(entry.dependencies || [])
      };
    });
  }

  function mergeComponentSources(primaryList, secondaryList) {
    const merged = new Map();

    toArray(primaryList).filter(Boolean).forEach((item) => {
      if (!item || !item.id) return;
      merged.set(item.id, { ...item });
    });

    toArray(secondaryList).filter(Boolean).forEach((item) => {
      if (!item || !item.id) return;
      if (merged.has(item.id)) {
        const current = merged.get(item.id);
        merged.set(item.id, {
          ...item,
          ...current,
          tags: Array.from(new Set([...(current.tags || []), ...(item.tags || [])])),
          aliases: Array.from(new Set([...(current.aliases || []), ...(item.aliases || [])])),
          description: current.description || item.description || '',
          path: current.path || item.path || '',
          category: current.category || item.category || 'Component'
        });
        return;
      }

      merged.set(item.id, { ...item });
    });

    return Array.from(merged.values());
  }

  function splitTokens(value) {
    return normalizeString(value)
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
  }

  function expandToken(token) {
    const variants = new Set([token]);

    if (token.length > 4 && token.endsWith('ies')) {
      variants.add(`${token.slice(0, -3)}y`);
    }

    if (token.length > 4 && token.endsWith('ses')) {
      variants.add(token.slice(0, -2));
    }

    if (token.length > 3 && token.endsWith('s')) {
      variants.add(token.slice(0, -1));
    }

    if (token.length > 5 && token.endsWith('ing')) {
      variants.add(token.slice(0, -3));
    }

    return Array.from(variants);
  }

  function collectSearchTokens(item) {
    const tokens = new Set();
    [item.id, item.title, item.description, item.category, item.tags.join(' '), item.aliases.join(' ')].forEach((value) => {
      splitTokens(value).forEach((token) => {
        expandToken(token).forEach((variant) => tokens.add(variant));
      });
    });

    tokens.forEach((token) => {
      const synonyms = SEMANTIC_LOOKUP.get(token);
      if (!synonyms) return;
      synonyms.forEach((value) => tokens.add(value));
    });

    return Array.from(tokens);
  }

  function expandQueryTerms(query) {
    const rawTerms = splitTokens(query);
    const expanded = new Set();

    rawTerms.forEach((term) => {
      expandToken(term).forEach((variant) => expanded.add(variant));
      const synonyms = SEMANTIC_LOOKUP.get(term);
      if (synonyms) {
        synonyms.forEach((value) => expanded.add(value));
      }
    });

    return {
      rawTerms,
      expandedTerms: Array.from(expanded)
    };
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
      searchTokens: collectSearchTokens({
        id: component.id,
        title,
        description,
        category,
        tags,
        aliases: normalizeTags(component.aliases || [])
      }),
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

  function scoreSearchResult(item, query) {
    if (!query) {
      return {
        score: item.documentationScore,
        reasons: [],
        matchedTerms: []
      };
    }

    const q = normalizeString(query).toLowerCase();
    if (!q) {
      return {
        score: item.documentationScore,
        reasons: [],
        matchedTerms: []
      };
    }

    const { rawTerms, expandedTerms } = expandQueryTerms(q);
    const searchableTokens = new Set(item.searchTokens || []);
    const searchableText = item.searchableText || '';
    let score = 0;
    const reasons = [];
    const matchedTerms = new Set();

    const fields = [
      { name: 'id', value: item.id, weight: 140 },
      { name: 'title', value: item.title, weight: 130 },
      { name: 'aliases', value: item.aliases.join(' '), weight: 110 },
      { name: 'category', value: item.category, weight: 95 },
      { name: 'tags', value: item.tags.join(' '), weight: 85 },
      { name: 'description', value: item.description, weight: 65 }
    ];

    fields.forEach((field, index) => {
      const normalized = normalizeString(field.value).toLowerCase();
      if (!normalized) return;

      if (normalized === q) {
        score += field.weight;
        reasons.push(`${field.name}:exact`);
      } else if (normalized.startsWith(q)) {
        score += Math.max(12, field.weight - 18 - index * 2);
        reasons.push(`${field.name}:prefix`);
      } else if (normalized.includes(q)) {
        score += Math.max(8, field.weight - 42 - index * 2);
        reasons.push(`${field.name}:contains`);
      }
    });

    rawTerms.forEach((term) => {
      const variants = new Set([term]);
      expandToken(term).forEach((variant) => variants.add(variant));
      const synonyms = SEMANTIC_LOOKUP.get(term);
      if (synonyms) {
        synonyms.forEach((value) => variants.add(value));
      }

      let matched = false;
      variants.forEach((variant) => {
        if (matched) return;
        if (searchableTokens.has(variant) || searchableText.includes(variant)) {
          matched = true;
          matchedTerms.add(term);
          score += 18;
          reasons.push(`term:${term}->${variant}`);
        }
      });

      if (!matched && item.aliases.some((alias) => variants.has(alias) || alias.includes(term))) {
        matchedTerms.add(term);
        matched = true;
        score += 16;
        reasons.push(`alias:${term}`);
      }

      if (!matched && item.tags.some((tag) => variants.has(tag) || tag.includes(term))) {
        matchedTerms.add(term);
        matched = true;
        score += 14;
        reasons.push(`tag:${term}`);
      }

      if (!matched && item.category.toLowerCase().includes(term)) {
        matchedTerms.add(term);
        matched = true;
        score += 14;
        reasons.push(`category:${term}`);
      }
    });

    const expandedCoverage = expandedTerms.filter((term) => searchableTokens.has(term) || searchableText.includes(term));
    if (expandedTerms.length > 0) {
      const coverageScore = Math.round((expandedCoverage.length / expandedTerms.length) * 40);
      if (coverageScore > 0) {
        score += coverageScore;
        reasons.push(`coverage:${expandedCoverage.length}/${expandedTerms.length}`);
      }
    }

    const queryWeight = rawTerms.length * 4;
    score += queryWeight;
    score += Math.min(18, Math.round(item.documentationScore / 6));
    if (item.hasDocs) score += 6;
    if (item.hasPage) score += 4;

    return {
      score,
      reasons,
      matchedTerms: Array.from(matchedTerms)
    };
  }

  
function prioritizeTitleMatch(results, query) {
  return results.sort((a, b) => {
    const aTitle = (a.name || '').toLowerCase();
    const bTitle = (b.name || '').toLowerCase();
    const q = query.toLowerCase();
    if (aTitle.includes(q) && !bTitle.includes(q)) return -1;
    if (bTitle.includes(q) && !aTitle.includes(q)) return 1;
    return 0;
  });
}
    
function rankSearchResults(items, query, filters = {}, sort = 'relevance', limit = DEFAULT_LIMIT) {
    const filtered = items.filter((item) => matchesFilters(item, filters));
    const scored = filtered.map((item) => {
      const ranking = scoreSearchResult(item, query);
      return {
        ...item,
        _score: ranking.score,
        matchReasons: ranking.reasons,
        matchedTerms: ranking.matchedTerms
      };
    }).filter((item) => !query || item._score > 0 || matchesFilters(item, filters));

    return applySort(scored, sort, query).slice(0, limit);
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
    let registryList = [];
    if (Array.isArray(options.items)) {
      metadataList = options.items;
    } else {
      const [componentsData, docsData] = await Promise.all([
        fetchJson(options.componentsUrl || '/data/components.json'),
        fetchJson(options.docsUrl || '/data/meta/documentation-catalog.json')
      ]);
      metadataList = toArray(componentsData?.components || componentsData);
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

    if (Array.isArray(options.registryItems)) {
      registryList = options.registryItems;
    } else if (options.registryUrl) {
      const registryData = await fetchJson(options.registryUrl);
      registryList = toArray(registryData?.registry || registryData);
    }

    const docsArray = Array.from(_state.docsById.entries()).map(([id, doc]) => doc);
    const docsMap = _state.docsById.size > 0 ? _state.docsById : new Map(docsArray.map((doc) => [doc.id, doc]));
    const normalizedRegistry = normalizeRegistryItems(registryList);
    const normalizedMetadata = toArray(metadataList).map((component) => ({
      ...component,
      id: normalizeString(component.id || component.name || component.path || '').toLowerCase(),
      title: normalizeString(component.title || component.name || component.id || component.path || ''),
      path: normalizeString(component.path || component.files?.html || ''),
      description: normalizeString(component.description || ''),
      category: normalizeString(component.category || ''),
      tags: normalizeTags(component.tags || []),
      aliases: normalizeTags(component.aliases || []),
      source: component.source || 'metadata'
    }));
    const sourceList = mergeComponentSources(normalizedMetadata, normalizedRegistry);
    const items = sourceList.map((component) => {
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

    const ranked = rankSearchResults(_state.items, queryText, mergedFilters, sort, limit);
    const filtered = _state.items.filter((item) => matchesFilters(item, mergedFilters));
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

  function getCategoryItems(category) {
    const target = String(category || '').toLowerCase().trim();
    return _state.items.filter((item) => String(item.category || '').toLowerCase().trim() === target);
  }

  function getCategories() {
    const cats = new Map();
    _state.items.forEach((item) => {
      const cat = String(item.category || 'Component').toLowerCase().trim();
      if (!cats.has(cat)) {
        cats.set(cat, { name: item.category || 'Component', count: 0, items: [] });
      }
      const bucket = cats.get(cat);
      bucket.count++;
      bucket.items.push(item);
    });
    return Array.from(cats.entries()).map(([name, data]) => ({ name, ...data }));
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
      const resolved = versioning.resolve(query, catalog);
      if (resolved && resolved.found) return resolved;
    }

    const ranked = rankSearchResults(_state.items, query, {}, 'relevance', 1);
    const found = ranked[0];
    if (!found) {
      return { found: false, query: String(query), compatibility: { status: 'missing', fallbackUsed: false } };
    }

    return {
      found: true,
      id: found.id,
      path: found.path,
      title: found.title,
      version: found.version || '0.0.0',
      latestVersion: found.latestVersion || found.version,
      aliases: found.aliases,
      compatibility: { status: 'semantic', fallbackUsed: true },
      matchReasons: found.matchReasons,
      matchedTerms: found.matchedTerms
    };
  }

  const ComponentDiscovery = {
    init,
    discover,
    search,
    getAll,
    getById,
    getCategoryItems,
    getCategories,
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
