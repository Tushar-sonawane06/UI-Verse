/**
 * Component Recommendations Engine
 * Context-aware suggestions based on category relationships, semantic similarity,
 * session co-view patterns, and metadata overlap.
 *
 * Builds on ComponentDiscovery semantic scoring infrastructure.
 * Zero external ML dependencies — pure metadata + session pattern matching.
 */

const ComponentRecommendations = (function () {
  const STORAGE_KEY = 'uiverse_recommendations_dismissed';
  const SESSION_KEY = 'uiverse_recommendations_session_history';
  const MAX_SESSION_HISTORY = 20;
  const DEFAULT_LIMIT = 6;

  // Explicit "pairs well with" category weights
  const CATEGORY_PAIRINGS = new Map([
    ['buttons', new Map([['forms', 35], ['inputs', 40], ['cards', 25], ['navigation', 20], ['alerts', 15], ['badges', 15], ['loaders', 10]])],
    ['inputs', new Map([['forms', 45], ['buttons', 35], ['cards', 20], ['navigation', 15], ['alerts', 10], ['badges', 10]])],
    ['forms', new Map([['inputs', 45], ['buttons', 35], ['cards', 25], ['alerts', 20], ['navigation', 15], ['badges', 15]])],
    ['cards', new Map([['buttons', 25], ['forms', 25], ['inputs', 20], ['layout', 30], ['badges', 15], ['alerts', 15], ['pricing', 20]])],
    ['navigation', new Map([['buttons', 20], ['layout', 35], ['cards', 20], ['forms', 15], ['inputs', 15], ['alerts', 10]])],
    ['layout', new Map([['navigation', 35], ['cards', 30], ['buttons', 20], ['forms', 15], ['footer', 25], ['hero', 20]])],
    ['alerts', new Map([['buttons', 15], ['forms', 20], ['inputs', 10], ['cards', 15], ['feedback', 30], ['notifications', 25]])],
    ['badges', new Map([['buttons', 15], ['cards', 15], ['alerts', 15], ['feedback', 20], ['data-display', 15]])],
    ['loaders', new Map([['buttons', 10], ['forms', 15], ['cards', 15], ['feedback', 25], ['dashboards', 20]])],
    ['feedback', new Map([['alerts', 30], ['notifications', 35], ['buttons', 15], ['forms', 15], ['badges', 20]])],
    ['dashboards', new Map([['charts', 35], ['cards', 30], ['navigation', 25], ['layout', 20], ['tables', 25], ['alerts', 20]])],
    ['charts', new Map([['dashboards', 35], ['data-display', 30], ['cards', 20], ['tables', 20], ['layout', 15]])],
    ['tables', new Map([['data-display', 30], ['dashboards', 25], ['forms', 20], ['inputs', 20], ['cards', 15], ['pagination', 25]])],
    ['pricing', new Map([['cards', 20], ['buttons', 15], ['forms', 15], ['commerce', 30], ['testimonials', 20]])],
    ['testimonials', new Map([['cards', 25], ['pricing', 20], ['commerce', 20], ['layout', 15], ['gallery', 15]])],
    ['gallery', new Map([['layout', 25], ['cards', 20], ['images', 20], ['carousel', 25], ['lightbox', 15]])],
    ['authentication', new Map([['forms', 35], ['inputs', 30], ['buttons', 25], ['cards', 20], ['alerts', 15], ['navigation', 10]])],
    ['commerce', new Map([['pricing', 30], ['cards', 25], ['buttons', 20], ['forms', 20], ['inputs', 15], ['gallery', 15]])],
    ['data-display', new Map([['dashboards', 25], ['charts', 30], ['tables', 25], ['cards', 15], ['forms', 15]])],
    ['footer', new Map([['layout', 30], ['navigation', 25], ['cards', 15], ['forms', 10]])],
    ['hero', new Map([['layout', 30], ['buttons', 20], ['navigation', 20], ['cards', 15]])],
    ['tabs', new Map([['navigation', 35], ['cards', 20], ['buttons', 15], ['forms', 15]])],
    ['popover', new Map([['buttons', 20], ['cards', 20], ['alerts', 15], ['tooltips', 25]])],
    ['tooltip', new Map([['buttons', 20], ['forms', 15], ['inputs', 15], ['cards', 15]])],
    ['modal', new Map([['buttons', 25], ['forms', 20], ['alerts', 15], ['cards', 15]])],
    ['calendar', new Map([['data-display', 30], ['forms', 25], ['inputs', 20], ['dashboards', 15]])],
    ['checkbox', new Map([['forms', 40], ['inputs', 35], ['buttons', 20], ['radio', 25]])],
    ['radio', new Map([['forms', 40], ['inputs', 35], ['checkbox', 25], ['buttons', 20]])],
    ['switch', new Map([['forms', 35], ['inputs', 30], ['buttons', 20], ['settings', 20]])],
    ['slider', new Map([['forms', 30], ['inputs', 25], ['charts', 20], ['dashboards', 15]])],
    ['progress', new Map([['loaders', 30], ['dashboards', 25], ['forms', 15], ['cards', 15]])],
    ['stepper', new Map([['forms', 35], ['buttons', 25], ['navigation', 20], ['progress', 20]])],
    ['breadcrumb', new Map([['navigation', 35], ['cards', 15], ['layout', 20], ['buttons', 10]])],
    ['pagination', new Map([['tables', 30], ['data-display', 25], ['navigation', 20], ['cards', 15]])],
    ['avatar', new Map([['cards', 25], ['profile', 30], ['navigation', 15], ['buttons', 10]])],
    ['chip', new Map([['buttons', 20], ['forms', 20], ['cards', 15], ['tags', 25]])],
    ['tag', new Map([['cards', 20], ['buttons', 15], ['forms', 15], ['chip', 25]])],
    ['divider', new Map([['layout', 30], ['cards', 15], ['forms', 15], ['navigation', 10]])],
    ['skeleton', new Map([['loaders', 30], ['cards', 20], ['dashboards', 20], ['tables', 15]])],
    ['empty-state', new Map([['cards', 25], ['buttons', 20], ['illustration', 15], ['layout', 15]])],
    ['timeline', new Map([['data-display', 30], ['cards', 20], ['dashboards', 20], ['history', 15]])],
    ['tree', new Map([['navigation', 30], ['sidebar', 25], ['data-display', 20], ['files', 15]])],
    ['drawer', new Map([['navigation', 30], ['layout', 25], ['sidebar', 25], ['modal', 15]])],
    ['app-bar', new Map([['navigation', 30], ['layout', 25], ['buttons', 15], ['search', 15]])],
    ['bottom-nav', new Map([['navigation', 30], ['layout', 25], ['buttons', 15], ['app-bar', 20]])],
    ['speed-dial', new Map([['buttons', 30], ['navigation', 20], ['floating-action', 25], ['cards', 10]])],
    ['snackbar', new Map([['feedback', 30], ['alerts', 25], ['buttons', 15], ['toast', 20]])],
    ['toast', new Map([['feedback', 30], ['alerts', 25], ['buttons', 15], ['snackbar', 20]])]
  ]);

  const TAG_OVERLAP_WEIGHT = 12;
  const SEMANTIC_OVERLAP_WEIGHT = 18;
  const POPULARITY_BOOST = 8;
  const SESSION_COVIEW_WEIGHT = 25;

  function safeStorage() {
    try {
      return window.localStorage;
    } catch (_) {
      return null;
    }
  }

  function readJson(text, fallback) {
    try {
      return JSON.parse(text);
    } catch (_) {
      return fallback;
    }
  }

  function getDismissed() {
    const storage = safeStorage();
    if (!storage) return new Set();
    try {
      const raw = storage.getItem(STORAGE_KEY);
      const parsed = raw ? readJson(raw, []) : [];
      return new Set(parsed);
    } catch (_) {
      return new Set();
    }
  }

  function saveDismissed(ids) {
    const storage = safeStorage();
    if (!storage) return;
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
    } catch (_) {
      // ignore
    }
  }

  function getSessionHistory() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      return raw ? readJson(raw, []) : [];
    } catch (_) {
      return [];
    }
  }

  function saveSessionHistory(history) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(history.slice(-MAX_SESSION_HISTORY)));
    } catch (_) {
      // ignore
    }
  }

  function recordPageView(categoryId) {
    const history = getSessionHistory();
    const now = Date.now();
    if (history.length > 0 && history[history.length - 1].category === categoryId) {
      history[history.length - 1].at = now;
    } else {
      history.push({ category: categoryId, at: now });
    }
    saveSessionHistory(history);
  }

  function getCoViewBoost(sourceCategory) {
    const history = getSessionHistory();
    if (history.length < 2) return new Map();

    const boosts = new Map();
    history.forEach((entry, idx) => {
      if (entry.category === sourceCategory) return;
      const windowStart = Math.max(0, idx - 3);
      const windowEnd = Math.min(history.length, idx + 4);
      for (let i = windowStart; i < windowEnd; i++) {
        if (i === idx) continue;
        if (history[i].category === sourceCategory) {
          boosts.set(entry.category, (boosts.get(entry.category) || 0) + 1);
        }
      }
    });

    return boosts;
  }

  function normalizeCategory(cat) {
    return String(cat || '').toLowerCase().trim();
  }

  function ensureDiscovery() {
    let disc = window.ComponentDiscovery || window.ComponentIndex;
    if (!disc && typeof require === 'function') {
      try {
        disc = require('../core/component-discovery.js');
      } catch (_) {
        try {
          disc = require('../core/component-index.js');
        } catch (__) {
          disc = null;
        }
      }
    }
    return disc;
  }

  function ensureDiscoveryInitialized() {
    const disc = ensureDiscovery();
    if (!disc) return null;

    // If discovery has no items, try to initialize from global data
    if (!disc._state || !disc._state.initialized || disc._state.items.length === 0) {
      if (typeof disc.init === 'function' && window.UIVerseComponentsIndexData) {
        try {
          const catalog = window.UIVerseComponentsIndexData;
          if (catalog && Array.isArray(catalog.categories)) {
            const items = [];
            catalog.categories.forEach((cat) => {
              (cat.items || []).forEach((item) => {
                items.push({
                  id: item.id,
                  title: item.title,
                  path: item.path,
                  category: cat.id || cat.name,
                  categoryId: cat.id,
                  popularity: item.popularity || 0,
                  tags: item.tags || [],
                  description: item.description || '',
                  aliases: item.aliases || [],
                  searchTokens: []
                });
              });
            });
            disc.init({ items });
          }
        } catch (e) {
          if (window.UIVERSE_DEBUG) {
            console.warn('[Recommendations] Failed to init discovery from global data:', e);
          }
        }
      }
    }

    return disc;
  }

  function getAllItems() {
    const disc = ensureDiscoveryInitialized();
    if (!disc) return [];
    if (typeof disc.getAll === 'function') {
      return disc.getAll();
    }
    if (disc._state && Array.isArray(disc._state.items)) {
      return disc._state.items;
    }
    return [];
  }

  function getCategoryItems(categoryId) {
    const target = normalizeCategory(categoryId);
    return getAllItems().filter((item) => normalizeCategory(item.category) === target);
  }

  function getCategoryTags(categoryId) {
    const items = getCategoryItems(categoryId);
    const tagCounts = new Map();
    items.forEach((item) => {
      (item.tags || []).forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return tagCounts;
  }

  function scoreRelatedCategory(sourceId, targetId) {
    const source = normalizeCategory(sourceId);
    const target = normalizeCategory(targetId);
    if (source === target) return { score: 0, reasons: [] };

    let score = 0;
    const reasons = [];

    // 1. Explicit pairing weight
    const pairings = CATEGORY_PAIRINGS.get(source);
    if (pairings && pairings.has(target)) {
      const w = pairings.get(target);
      score += w;
      reasons.push(`pairing:${w}`);
    }

    // 2. Tag overlap between categories
    const sourceTags = getCategoryTags(source);
    const targetTags = getCategoryTags(target);
    if (sourceTags.size > 0 && targetTags.size > 0) {
      let overlap = 0;
      sourceTags.forEach((count, tag) => {
        if (targetTags.has(tag)) overlap += Math.min(count, targetTags.get(tag));
      });
      if (overlap > 0) {
        const overlapScore = Math.min(SEMANTIC_OVERLAP_WEIGHT, overlap * TAG_OVERLAP_WEIGHT);
        score += overlapScore;
        reasons.push(`tag-overlap:${overlapScore}`);
      }
    }

    // 3. Session co-view boost
    const coViewBoosts = getCoViewBoost(source);
    if (coViewBoosts.has(target)) {
      const boost = Math.min(SESSION_COVIEW_WEIGHT, coViewBoosts.get(target) * 8);
      score += boost;
      reasons.push(`session:${boost}`);
    }

    // 4. Semantic token overlap via discovery engine
    const disc = ensureDiscoveryInitialized();
    if (disc && disc._state && disc._state.items) {
      const sourceItems = getCategoryItems(source);
      const targetItems = getCategoryItems(target);
      const sourceTokens = new Set();
      const targetTokens = new Set();

      sourceItems.forEach((item) => {
        (item.searchTokens || []).forEach((t) => sourceTokens.add(t));
      });
      targetItems.forEach((item) => {
        (item.searchTokens || []).forEach((t) => targetTokens.add(t));
      });

      let semanticOverlap = 0;
      sourceTokens.forEach((t) => {
        if (targetTokens.has(t)) semanticOverlap++;
      });
      if (semanticOverlap > 0) {
        const semScore = Math.min(20, semanticOverlap * 2);
        score += semScore;
        reasons.push(`semantic:${semScore}`);
      }
    }

    return { score, reasons };
  }

  function getForCategory(categoryId, options = {}) {
    const source = normalizeCategory(categoryId);
    const limit = typeof options.limit === 'number' ? options.limit : DEFAULT_LIMIT;
    const excludeDismissed = options.excludeDismissed !== false;
    const dismissed = excludeDismissed ? getDismissed() : new Set();
    const allItems = getAllItems();

    // Gather all distinct categories present in the catalog
    const categories = new Map();
    allItems.forEach((item) => {
      const cat = normalizeCategory(item.category);
      if (!cat || cat === source) return;
      if (!categories.has(cat)) {
        categories.set(cat, { category: cat, items: [], maxPopularity: 0 });
      }
      const bucket = categories.get(cat);
      bucket.items.push(item);
      bucket.maxPopularity = Math.max(bucket.maxPopularity, item.popularity || item.documentationScore || 0);
    });

    // Score each category
    const scored = [];
    categories.forEach((bucket, cat) => {
      const ranking = scoreRelatedCategory(source, cat);
      const popBoost = Math.min(POPULARITY_BOOST, Math.round((bucket.maxPopularity / 100) * POPULARITY_BOOST));
      const totalScore = ranking.score + popBoost;

      const rep = bucket.items
        .filter((item) => !dismissed.has(item.id))
        .sort((a, b) => (b.popularity || b.documentationScore || 0) - (a.popularity || a.documentationScore || 0))[0];

      if (!rep) return;

      scored.push({
        category: cat,
        score: totalScore,
        confidence: Math.min(100, Math.round(totalScore * 1.2)),
        reasons: ranking.reasons.concat(`popularity:${popBoost}`),
        representative: rep,
        itemCount: bucket.items.length
      });
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit);
  }

  function getForComponent(componentId, options = {}) {
    const allItems = getAllItems();
    const sourceItem = allItems.find((item) => item.id === componentId);
    if (!sourceItem) return getForCategory('other', options);
    const category = normalizeCategory(sourceItem.category);
    return getForCategory(category, options);
  }

  function dismiss(id) {
    const dismissed = getDismissed();
    dismissed.add(id);
    saveDismissed(dismissed);
  }

  function restoreDismissed(id) {
    const dismissed = getDismissed();
    dismissed.delete(id);
    saveDismissed(dismissed);
  }

  function clearSession() {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch (_) {
      // ignore
    }
  }

  function clearAllDismissed() {
    const storage = safeStorage();
    if (storage) {
      try {
        storage.removeItem(STORAGE_KEY);
      } catch (_) {
        // ignore
      }
    }
  }

  return {
    getForCategory,
    getForComponent,
    dismiss,
    restoreDismissed,
    recordPageView,
    clearSession,
    clearAllDismissed,
    _getSessionHistory: getSessionHistory,
    _getDismissed: getDismissed,
    _ensureDiscoveryInitialized: ensureDiscoveryInitialized
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ComponentRecommendations;
}

window.ComponentRecommendations = ComponentRecommendations;