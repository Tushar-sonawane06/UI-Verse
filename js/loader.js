// Lightweight runtime loader for UIverse
// Loads registry, core modules, page-specific feature modules, then bootstrap
(function(){
  const pathClean = location.pathname.replace(/\.html$/i, '').toLowerCase();
  const pageSegment = pathClean.split('/').pop() || 'index';
  const page = pageSegment + '.html';

  const core = [
    'js/registry.js',
    'js/core/dependency-manager.js',
    'js/core/utils.js',
    'js/core/keyboard-contract.js',
    'js/features/design-tokens.js',
    'js/core/component-versioning.js',
    'js/core/component-discovery.js',
    'js/core/component-index.js'
  ];

  // Default features used on most pages
const defaultFeatures = [
  'js/features/toast.js',
  'js/features/popup.js',
  'js/features/code-tools.js',
  'js/features/sidebar.js',
  'js/features/search.js',
  'js/features/theme.js',
  'js/features/scroll.js',
  'js/features/alerts.js',
  'js/features/sandbox.js',
  'js/features/accessibility.js',
  'js/features/command-palette.js',
  'js/features/url-state.js',
  'js/features/url-state-integration.js',

];

const pageMap = {
  'index.html': defaultFeatures,

  'button.html': [
    'js/features/toast.js',
    'js/features/code-tools.js',
    'js/features/sidebar.js',
    'js/features/theme.js',
    'js/features/scroll.js',
    'js/features/search.js',
    'js/features/command-palette.js',
    'js/features/url-state.js',
    'js/features/url-state-integration.js',
    'js/features/component-recommendations.js',
    'js/features/recommendations-ui.js',
    'js/features/bundle-exporter.js',
    'js/features/bundle-exporter-ui.js',
    'js/features/recent.js'
  ],

  'cards.html': [
    'js/features/toast.js',
    'js/features/code-tools.js',
    'js/features/sidebar.js',
    'js/features/search.js',
    'js/features/theme.js',
    'js/features/scroll.js',
    'js/features/sandbox.js',
    'js/features/command-palette.js',
