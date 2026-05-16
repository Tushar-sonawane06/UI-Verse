/**
 * UIverse Lazy Modules Configuration
 * Defines which modules should be loaded lazily and their triggers
 */

export const lazyModules = {
  commandPalette: {
    path: './features/command-palette.js',
    triggers: [
      { event: 'click', selector: '#command-palette-trigger' },
      { event: 'keyboard', key: 'Ctrl+k' },
      { event: 'keyboard', key: 'Meta+k' }
    ],
    initialize: true,
    priority: 'low'
  },

  accessibility: {
    path: './features/accessibility.js',
    triggers: [
      { event: 'click', selector: '#accessibility-trigger' },
      { event: 'focus', selector: 'a11y-toolbar' }
    ],
    initialize: true,
    priority: 'low'
  },

  profileEditor: {
    path: './features/profile-editor.js',
    triggers: [
      { event: 'click', selector: '.btnn' },
      { event: 'click', selector: '[data-profile-edit]' }
    ],
    initialize: true,
    priority: 'low'
  },

  sandbox: {
    path: './features/sandbox.js',
    triggers: [
      { event: 'click', selector: '#sandbox-trigger' },
      { event: 'scroll', selector: '.sandbox-container', threshold: 0.5 }
    ],
    initialize: false,
    priority: 'low'
  },

  compare: {
    path: './features/compare.js',
    triggers: [
      { event: 'click', selector: '#compare-trigger' }
    ],
    initialize: false,
    priority: 'low'
  },

  urlState: {
    path: './features/url-state.js',
    triggers: [
      { event: 'popstate', selector: null }
    ],
    initialize: true,
    priority: 'medium'
  },

  theme: {
    path: './features/theme.js',
    triggers: [
      { event: 'click', selector: '[data-theme-toggle]' }
    ],
    initialize: true,
    priority: 'medium'
  }
};

export const eagerModules = [
  'core/utils.js',
  'core/security.js',
  'core/sanitize.js',
  'core/components-registry.js'
];

export const criticalModules = [
  'registry.js',
  'theme-api.js',
  'bootstrap.js'
];