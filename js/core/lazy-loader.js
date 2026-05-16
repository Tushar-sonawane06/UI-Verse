/**
 * UIverse - Lazy Loader Module
 * Dynamic ES Module loader with code splitting and lazy initialization
 */

const LazyLoader = {
  loadedModules: new Map(),
  loadingPromises: new Map(),
  lazyLoaded: new Set(),

  config: {
    commandPalette: {
      trigger: ['click', '#command-palette-trigger'],
      module: () => import('../features/command-palette.js'),
      initialize: true
    },
    accessibility: {
      trigger: ['click', '#accessibility-trigger'],
      module: () => import('../features/accessibility.js'),
      initialize: true
    },
    profileEditor: {
      trigger: ['click', '.btnn'],
      module: () => import('../features/profile-editor.js'),
      initialize: true
    },
    sandbox: {
      trigger: ['click', '#sandbox-trigger'],
      module: () => import('../features/sandbox.js'),
      initialize: false
    },
    compare: {
      trigger: ['click', '#compare-trigger'],
      module: () => import('../features/compare.js'),
      initialize: false
    },
    theme: {
      trigger: ['click', '[data-theme-toggle]'],
      module: () => import('../features/theme.js'),
      initialize: true
    }
  },

  init() {
    this.setupLazyTriggers();
    this.setupIntersectionObserver();
    console.log('[LazyLoader] Initialized with lazy loading');
  },

  setupLazyTriggers() {
    Object.entries(this.config).forEach(([name, config]) => {
      config.trigger.forEach((eventType) => {
        if (eventType === 'click') {
          document.addEventListener('click', (e) => {
            const selector = config.trigger.find(t => t !== 'click');
            if (selector && e.target.closest(selector)) {
              this.loadModule(name);
            }
          }, { once: false });
        }
      });
    });
  },

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const moduleName = entry.target.dataset.lazyModule;
          if (moduleName && this.config[moduleName]) {
            this.preloadModule(moduleName);
          }
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('[data-lazy-module]').forEach(el => {
      observer.observe(el);
    });
  },

  async loadModule(name) {
    if (this.lazyLoaded.has(name)) {
      return this.loadedModules.get(name);
    }

    if (this.loadingPromises.has(name)) {
      return this.loadingPromises.get(name);
    }

    const config = this.config[name];
    if (!config) {
      console.warn(`[LazyLoader] Module "${name}" not found in config`);
      return null;
    }

    console.log(`[LazyLoader] Lazy loading module: ${name}`);

    const loadPromise = (async () => {
      try {
        const module = await config.module();
        
        this.lazyLoaded.add(name);
        this.loadedModules.set(name, module);

        if (config.initialize && typeof module.default?.init === 'function') {
          module.default.init();
        }

        document.dispatchEvent(new CustomEvent(`uiverse:module-loaded`, {
          detail: { module: name }
        }));

        return module;
      } catch (error) {
        console.error(`[LazyLoader] Failed to load module "${name}":`, error);
        this.loadingPromises.delete(name);
        return null;
      }
    })();

    this.loadingPromises.set(name, loadPromise);
    return loadPromise;
  },

  async preloadModule(name) {
    if (this.lazyLoaded.has(name) || this.loadingPromises.has(name)) {
      return;
    }

    const config = this.config[name];
    if (!config) return;

    console.log(`[LazyLoader] Preloading module: ${name}`);
    return this.loadModule(name);
  },

  async loadMultiple(names) {
    return Promise.all(names.map(name => this.loadModule(name)));
  },

  isLoaded(name) {
    return this.lazyLoaded.has(name);
  },

  getLoadedModules() {
    return Array.from(this.lazyLoaded);
  },

  registerLazyModule(name, config) {
    this.config[name] = config;
  }
};

window.LazyLoader = LazyLoader;
export default LazyLoader;