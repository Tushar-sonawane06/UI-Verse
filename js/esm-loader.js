/**
 * UIverse - ES Module Loader
 * Modern ESM entry point with dynamic imports for code splitting
 * 
 * Usage: <script type="module" src="js/esm-loader.js"></script>
 */

import { lazyModules, eagerModules, criticalModules } from './lazy-modules.config.js';

const ESMLoader = {
  loadedScripts: new Map(),
  moduleCache: new Map(),

  async init() {
    console.log('[ESMLoader] Starting module initialization...');
    
    await this.loadCriticalModules();
    await this.loadEagerModules();
    this.setupLazyLoading();
    this.setupPreloading();
    
    console.log('[ESMLoader] Module initialization complete');
  },

  async loadCriticalModules() {
    console.log('[ESMLoader] Loading critical modules...');
    for (const module of criticalModules) {
      await this.loadScript(module);
    }
  },

  async loadEagerModules() {
    console.log('[ESMLoader] Loading eager modules...');
    const promises = eagerModules.map(module => this.loadScript(module));
    await Promise.all(promises);
  },

  async loadScript(modulePath) {
    if (this.loadedScripts.has(modulePath)) {
      return this.loadedScripts.get(modulePath);
    }

    const promise = (async () => {
      try {
        const module = await import(`./${modulePath}`);
        this.loadedScripts.set(modulePath, module);
        this.moduleCache.set(modulePath, module);
        console.log(`[ESMLoader] Loaded: ${modulePath}`);
        return module;
      } catch (error) {
        console.error(`[ESMLoader] Failed to load ${modulePath}:`, error);
        return null;
      }
    })();

    this.loadedScripts.set(modulePath, promise);
    return promise;
  },

  setupLazyLoading() {
    Object.entries(lazyModules).forEach(([name, config]) => {
      config.triggers.forEach(trigger => {
        if (trigger.event === 'click') {
          document.addEventListener('click', (e) => {
            if (e.target.closest(trigger.selector)) {
              this.loadModule(name);
            }
          });
        } else if (trigger.event === 'keyboard') {
          document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === trigger.key.replace('Ctrl+', '').replace('Meta+', '')) {
              this.loadModule(name);
            }
          });
        } else if (trigger.event === 'popstate') {
          window.addEventListener('popstate', () => {
            this.loadModule(name);
          });
        }
      });
    });

    document.addEventListener('lazy-load', (e) => {
      const moduleName = e.detail?.module;
      if (moduleName && lazyModules[moduleName]) {
        this.loadModule(moduleName);
      }
    });
  },

  setupPreloading() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const moduleName = entry.target.dataset.lazyModule;
          if (moduleName && lazyModules[moduleName]) {
            this.preloadModule(moduleName);
            observer.unobserve(entry.target);
          }
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('[data-lazy-module]').forEach(el => observer.observe(el));
  },

  async loadModule(name) {
    const config = lazyModules[name];
    if (!config) {
      console.warn(`[ESMLoader] Unknown module: ${name}`);
      return null;
    }

    if (this.moduleCache.has(name)) {
      console.log(`[ESMLoader] Module already loaded: ${name}`);
      return this.moduleCache.get(name);
    }

    console.log(`[ESMLoader] Lazy loading: ${name}`);
    
    try {
      const module = await import(config.path);
      this.moduleCache.set(name, module);

      if (config.initialize && typeof module.init === 'function') {
        module.init();
      }

      document.dispatchEvent(new CustomEvent('uiverse:module-loaded', {
        detail: { module: name, exports: module }
      }));

      return module;
    } catch (error) {
      console.error(`[ESMLoader] Failed to load module ${name}:`, error);
      return null;
    }
  },

  preloadModule(name) {
    console.log(`[ESMLoader] Preloading: ${name}`);
    return this.loadModule(name);
  },

  getModule(name) {
    return this.moduleCache.get(name);
  },

  getLoadedModules() {
    return Array.from(this.moduleCache.keys());
  }
};

document.addEventListener('DOMContentLoaded', () => ESMLoader.init());

window.ESMLoader = ESMLoader;
export default ESMLoader;