const test = require('node:test');
const assert = require('node:assert/strict');

const ComponentDiscovery = require('../../js/core/component-discovery.js');
const ComponentVersioning = require('../../js/core/component-versioning.js');

function resetDiscoveryState() {
  ComponentDiscovery._state.initialized = false;
  ComponentDiscovery._state.items = [];
  ComponentDiscovery._state.facets = { categories: [], tags: [] };
  ComponentDiscovery._state.recentFilters = [];
  ComponentDiscovery._state.docsById = new Map();
}

function seedCatalog() {
  resetDiscoveryState();
  global.ComponentVersioning = ComponentVersioning;

  const items = [
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html',
      aliases: ['btn'],
      tags: ['controls', 'components'],
      description: 'Button styles and variants'
    },
    {
      id: 'navbar',
      title: 'Navbar',
      path: 'navbar.html',
      aliases: ['nav', 'navigation'],
      tags: ['navigation', 'components'],
      description: 'Top navigation bars and variants'
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      path: 'testimonials.html',
      aliases: ['reviews'],
      tags: ['content', 'components'],
      description: 'Testimonial components and examples'
    }
  ];

  const docsItems = [
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html',
      aliases: ['primary action'],
      tags: ['action'],
      description: 'Call-to-action controls'
    },
    {
      id: 'navbar',
      title: 'Navbar',
      path: 'navbar.html',
      aliases: ['nav menu'],
      tags: ['navigation', 'menu'],
      description: 'Site navigation patterns'
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      path: 'testimonials.html',
      aliases: ['reviews'],
      tags: ['reviews', 'feedback'],
      description: 'Customer feedback components'
    }
  ];

  const registryItems = [
    {
      name: 'calendar',
      title: 'Calendar',
      description: 'Calendar component and date picker layouts',
      category: 'utilities',
      files: { html: 'calendar.html', css: 'calendar.css' },
      tags: ['calendar', 'date', 'schedule'],
      dependencies: []
    }
  ];

  return ComponentDiscovery.init({ items, docsItems, registryItems });
}

test('ranks semantically related results ahead of weaker matches', async () => {
  await seedCatalog();

  const result = ComponentDiscovery.discover('cta', { limit: 5 });

  assert.equal(result.results[0].id, 'button');
  assert.ok(result.results[0].matchedTerms.includes('cta'));
  assert.ok(result.results[0].matchReasons.some((reason) => reason.startsWith('term:cta') || reason.startsWith('aliases:')));
});

test('understands synonym queries for navigation and reviews', async () => {
  await seedCatalog();

  const navResults = ComponentDiscovery.discover('nav menu', { limit: 5 }).results;
  const reviewResults = ComponentDiscovery.discover('reviews', { limit: 5 }).results;

  assert.equal(navResults[0].id, 'navbar');
  assert.equal(reviewResults[0].id, 'testimonials');
});

test('resolve falls back to semantic matching when exact lookup misses', async () => {
  await seedCatalog();

  const resolved = ComponentDiscovery.resolve('cta');

  assert.equal(resolved.found, true);
  assert.equal(resolved.id, 'button');
  assert.equal(resolved.compatibility.status, 'semantic');
  assert.ok(Array.isArray(resolved.matchReasons));
});

test('includes registry-only entries in discovery results', async () => {
  resetDiscoveryState();
  global.ComponentVersioning = ComponentVersioning;

  await ComponentDiscovery.init({
    registryItems: [
      {
        name: 'roadmap',
        title: 'Roadmap',
        description: 'Interactive product roadmap timeline',
        category: 'planning',
        files: { html: 'roadmap/index.html', css: 'timeline.css' },
        tags: ['roadmap', 'timeline', 'milestones'],
        dependencies: []
      }
    ],
    items: [],
    docsItems: []
  });

  const result = ComponentDiscovery.discover('roadmap', { limit: 5 });

  assert.equal(result.results[0].id, 'roadmap');
  assert.equal(result.results[0].source, 'registry');
  assert.equal(result.results[0].path, 'roadmap/index.html');
});
