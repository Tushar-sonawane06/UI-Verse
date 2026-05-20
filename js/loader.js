// Lightweight runtime loader for UIverse
// Loads registry, core modules, page-specific feature modules, then bootstrap
(function(){
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const core = [
    'js/registry.js',
    'js/core/utils.js',
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
    'js/features/url-state-integration.js'
  ];

  // Per-page overrides (only load what's necessary)
  const pageMap = {
    'index.html': defaultFeatures,
    'button.html': ['js/features/toast.js','js/features/code-tools.js','js/features/sidebar.js','js/features/theme.js','js/features/scroll.js','js/features/search.js','js/features/command-palette.js','js/features/url-state.js','js/features/url-state-integration.js'],
    'cards.html': ['js/features/toast.js','js/features/code-tools.js','js/features/sidebar.js','js/features/search.js','js/features/theme.js','js/features/scroll.js','js/features/sandbox.js','js/features/command-palette.js'],
    'badges.html': ['js/features/toast.js','js/features/sidebar.js','js/features/command-palette.js'],
    'forms.html': ['js/features/toast.js','js/features/alerts.js','js/features/sidebar.js','js/features/command-palette.js']
  };

  const scriptsToLoad = [];

  // ensure Fuse.js is present for search features
  function ensureFuse() {
    if (window.Fuse) return Promise.resolve();
    return loadScript('https://cdn.jsdelivr.net/npm/fuse.js@6.6.2');
  }

  function loadScript(src){
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => resolve();
      s.onerror = () => { console.warn('Failed to load', src); resolve(); };
      document.head.appendChild(s);
    });
  }

  async function run(){
    // load core in sequence
    for (const s of core) await loadScript(s);

    // ensure fuse if Search will be loaded
    const features = pageMap[page] || defaultFeatures;
    if (features.some(f => f.includes('search'))) await ensureFuse();

    // load page features sequentially
    for (const f of features) await loadScript(f);

    // finally load bootstrap to initialize modules
    await loadScript('js/bootstrap.js');
    // mark loader present
    window.UIVERSE_LOADER = true;
  }

  // start after DOM is interactive so CSS and critical assets can load first
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else run();

})();
