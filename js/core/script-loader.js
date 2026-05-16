/**
 * UIverse - Script Loader
 * Prevents duplicate script execution with centralized script management
 */

const ScriptLoader = {
  loadedScripts: new Set(),
  loadingScripts: new Map(),
  initializedModules: new Set(),

  loadScript(src) {
    if (this.loadedScripts.has(src)) {
      console.log(`[ScriptLoader] Script already loaded: ${src}`);
      return Promise.resolve(true);
    }

    if (this.loadingScripts.has(src)) {
      return this.loadingScripts.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'module';
      
      script.onload = () => {
        this.loadedScripts.add(src);
        this.loadingScripts.delete(src);
        console.log(`[ScriptLoader] Loaded: ${src}`);
        resolve(true);
      };
      
      script.onerror = (error) => {
        this.loadingScripts.delete(src);
        console.error(`[ScriptLoader] Failed to load: ${src}`, error);
        reject(error);
      };
      
      document.head.appendChild(script);
    });

    this.loadingScripts.set(src, promise);
    return promise;
  },

  loadMultiple(scripts, parallel = true) {
    if (parallel) {
      return Promise.all(scripts.map(src => this.loadScript(src)));
    }
    
    return scripts.reduce((promise, src) => {
      return promise.then(() => this.loadScript(src));
    }, Promise.resolve());
  },

  registerModule(moduleName, initFn) {
    if (this.initializedModules.has(moduleName)) {
      console.warn(`[ScriptLoader] Module already initialized: ${moduleName}`);
      return false;
    }
    
    if (typeof initFn === 'function') {
      initFn();
      this.initializedModules.add(moduleName);
      console.log(`[ScriptLoader] Initialized module: ${moduleName}`);
      return true;
    }
    
    return false;
  },

  isLoaded(src) {
    return this.loadedScripts.has(src);
  },

  isInitialized(moduleName) {
    return this.initializedModules.has(moduleName);
  },

  getLoadedScripts() {
    return Array.from(this.loadedScripts);
  },

  getInitializedModules() {
    return Array.from(this.initializedModules);
  },

  reset() {
    this.loadedScripts.clear();
    this.loadingScripts.clear();
    this.initializedModules.clear();
  }
};

if (typeof window !== 'undefined') {
  window.ScriptLoader = ScriptLoader;
}

export default ScriptLoader;