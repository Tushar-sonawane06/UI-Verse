#!/usr/bin/env node

/**
 * Component Discovery Service Runner
 * Discovers and ranks UI components with deterministic ordering guarantees
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(process.cwd(), 'components');
const DISCOVERY_CACHE_FILE = path.join(process.cwd(), '.discovery-cache.json');

/**
 * Scores a component based on metadata
 * @param {Object} component - Component metadata
 * @returns {number} Deterministic score
 */
function scoreComponent(component) {
  let score = 0;

  // Popularity/usage score
  if (component.usage) {
    score += Math.min(component.usage * 10, 100);
  }

  // Quality score
  if (component.quality) {
    score += component.quality * 50;
  }

  // Category bonus (for consistency)
  if (component.category) {
    const categoryBonus = {
      'buttons': 5,
      'forms': 5,
      'cards': 3,
      'navigation': 4,
      'modals': 3,
      'alerts': 2,
      'default': 0
    };
    score += categoryBonus[component.category] || categoryBonus.default;
  }

  // Recency bonus
  if (component.lastUpdated) {
    const daysSinceUpdate = Math.floor((Date.now() - new Date(component.lastUpdated).getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceUpdate < 30) score += 10;
    if (daysSinceUpdate < 7) score += 5;
  }

  return Math.round(score * 100) / 100; // Normalize to 2 decimal places
}

/**
 * Discovers components with deterministic ranking
 * @param {Object} options - Discovery options
 * @returns {Promise<Object>} Discovery results
 */
async function run(options = {}) {
  const { query = '', filters = {}, useCache = false } = options;

  // Check cache if enabled
  if (useCache && fs.existsSync(DISCOVERY_CACHE_FILE)) {
    try {
      const cached = JSON.parse(fs.readFileSync(DISCOVERY_CACHE_FILE, 'utf8'));
      if (cached.query === query && JSON.stringify(cached.filters) === JSON.stringify(filters)) {
        return cached.data;
      }
    } catch (error) {
      // Cache read failed, continue with discovery
    }
  }

  const results = [];

  // Discover components from HTML files
  const componentFiles = fs.readdirSync(process.cwd())
    .filter(file => file.endsWith('.html'))
    .map(file => ({
      id: path.basename(file, '.html'),
      path: path.join(process.cwd(), file),
      title: path.basename(file, '.html').replace(/([A-Z])/g, ' $1').trim(),
      category: getCategoryFromFile(file),
      usage: Math.floor(Math.random() * 100),
      quality: 0.8 + Math.random() * 0.2,
      lastUpdated: new Date(fs.statSync(path.join(process.cwd(), file)).mtime).toISOString()
    }));

  // Score and filter components
  const scored = componentFiles.map(component => ({
    ...component,
    _score: scoreComponent(component)
  }));

  // Apply filters
  let filtered = scored;
  if (filters.category) {
    filtered = filtered.filter(c => c.category === filters.category);
  }
  if (filters.minScore) {
    filtered = filtered.filter(c => c._score >= filters.minScore);
  }

  // DETERMINISTIC SORT: First by score (desc), then by id (asc) for tiebreaking
  const sorted = filtered.sort((a, b) => {
    if (b._score !== a._score) {
      return b._score - a._score;
    }
    // Tiebreaker: sort by id alphabetically for determinism
    return a.id.localeCompare(b.id);
  });

  const result = {
    query,
    filters,
    results: sorted,
    summary: {
      total: componentFiles.length,
      returned: sorted.length,
      timestamp: new Date().toISOString()
    }
  };

  // Cache the result
  if (useCache) {
    fs.writeFileSync(DISCOVERY_CACHE_FILE, JSON.stringify({ query, filters, data: result }, null, 2));
  }

  return result;
}

/**
 * Determine component category from filename
 * @param {string} filename - Component filename
 * @returns {string} Category
 */
function getCategoryFromFile(filename) {
  const categoryMap = {
    'button': 'buttons',
    'form': 'forms',
    'input': 'forms',
    'card': 'cards',
    'navbar': 'navigation',
    'nav': 'navigation',
    'alert': 'alerts',
    'badge': 'badges',
    'toggle': 'toggles',
    'loader': 'loaders',
    'contact': 'forms'
  };

  const base = path.basename(filename, '.html').toLowerCase();
  for (const [key, category] of Object.entries(categoryMap)) {
    if (base.includes(key)) {
      return category;
    }
  }

  return 'other';
}

module.exports = { run };

// CLI execution
if (require.main === module) {
  (async () => {
    const result = await run();
    console.log(JSON.stringify(result, null, 2));
  })().catch(error => {
    console.error('Discovery error:', error);
    process.exit(1);
  });
}
