/**
 * UIverse Module Registry
 * Central registry for all UI modules with dependency tracking
 * Provides debugging and module lifecycle management
 */

const UIverse = {
  /**
   * Registry of all modules with their metadata
   */
  modules: {},

  /**
   * Register a module
   * @param {string} name - Module identifier
   * @param {Object} module - Module object with init() and optional destroy()
   * @param {Array<string>|Object} dependenciesOrOptions - Optional dependency list or metadata object
   * @param {Object} options - Optional metadata when dependencies are passed separately
   */
  register(name, module, dependenciesOrOptions = [], options = {}) {
    if (this.modules[name]) {
      if (window.UIVERSE_DEBUG) {
        console.warn(`[UIverse Registry] Module '${name}' is already registered, skipping duplicate`);
      }
      return;
    }

    const dependencies = Array.isArray(dependenciesOrOptions)
      ? dependenciesOrOptions
      : Array.isArray(dependenciesOrOptions && dependenciesOrOptions.dependencies)
        ? dependenciesOrOptions.dependencies
        : [];

    const metadata = Array.isArray(dependenciesOrOptions)
      ? (options || {})
      : (dependenciesOrOptions || {});

    this.modules[name] = {
      name,
      module,
      dependencies,
      metadata,
      initialized: false,
      error: null
    };

    if (window.UIVERSE_DEBUG) {
      console.info(`[UIverse Registry] Registered module: ${name}`, { dependencies });
    }
  },

  /**
   * Check whether a module is allowed to initialize in the current DOM state
   * @param {Object} entry - Registered module entry
   * @returns {boolean}
   */
  canInitialize(entry) {
    if (!entry || !entry.metadata) return true;

    const { domSelector } = entry.metadata;
    if (!domSelector) return true;

    if (typeof document === 'undefined') return false;

    return !!document.querySelector(domSelector);
  },

  /**
   * Initialize a specific module
   * @param {string} name - Module name
   * @returns {boolean} - True if initialized successfully
   */
  initModule(name) {
    const entry = this.modules[name];
    if (!entry) {
      if (window.UIVERSE_DEBUG) {
        console.warn(`[UIverse Registry] Module '${name}' not found`);
      }
      return false;
    }

    if (entry.initialized) {
      return true;
    }

    // Initialize dependencies first
    for (const depName of entry.dependencies) {
      if (!this.initModule(depName)) {
        entry.error = `Dependency '${depName}' failed to initialize`;
        if (window.UIVERSE_DEBUG) {
          console.error(`[UIverse Registry] ${entry.error}`);
        }
        return false;
      }
    }

    if (!this.canInitialize(entry)) {
      if (window.UIVERSE_DEBUG) {
        console.info(`[UIverse Registry] Skipping '${name}' because DOM selector is missing`, entry.metadata);
      }
      return false;
    }

    try {
      if (entry.module.init && typeof entry.module.init === 'function') {
        entry.module.init();
        entry.initialized = true;
        if (window.UIVERSE_DEBUG) {
          console.info(`[UIverse Registry] ✓ Initialized: ${name}`);
        }
        return true;
      } else {
        entry.initialized = true; // Mark as initialized even without init() method
        return true;
      }
    } catch (error) {
      entry.error = error.message;
      if (window.UIVERSE_DEBUG) {
        console.error(`[UIverse Registry] Failed to initialize '${name}':`, error);
      }
      return false;
    }
  },

  /**
   * Initialize all registered modules
   * @returns {Object} - Status report with initialized and failed modules
   */
  initAll() {
    const report = {
      initialized: [],
      failed: [],
      skipped: []
    };

    for (const name in this.modules) {
      const entry = this.modules[name];

      if (!this.canInitialize(entry)) {
        report.skipped.push({ name, reason: 'domSelector', selector: entry.metadata && entry.metadata.domSelector ? entry.metadata.domSelector : null });
        continue;
      }

      if (this.initModule(name)) {
        report.initialized.push(name);
      } else {
        report.failed.push({ name, error: entry.error });
      }
    }

    if (window.UIVERSE_DEBUG) {
      console.info('[UIverse Registry] Initialization report:', {
        initialized: report.initialized.length,
        failed: report.failed.length,
        details: report
      });
    }

    return report;
  },

  /**
   * Destroy a specific module
   * @param {string} name - Module name
   */
  destroyModule(name) {
    const entry = this.modules[name];
    if (!entry) return;

    try {
      if (entry.module.destroy && typeof entry.module.destroy === 'function') {
        entry.module.destroy();
      }
      entry.initialized = false;
      if (window.UIVERSE_DEBUG) {
        console.info(`[UIverse Registry] Destroyed: ${name}`);
      }
    } catch (error) {
      if (window.UIVERSE_DEBUG) {
        console.error(`[UIverse Registry] Failed to destroy '${name}':`, error);
      }
    }
  },

  /**
   * Destroy all modules in reverse initialization order
   */
  destroyAll() {
    const names = Object.keys(this.modules).reverse();
    names.forEach(name => this.destroyModule(name));
  },

  /**
   * Get module initialization status
   * @param {string} name - Optional module name. If not provided, returns all modules
   * @returns {Object} - Module status
   */
  getStatus(name) {
    if (name) {
      const entry = this.modules[name];
      return entry ? {
        name: entry.name,
        initialized: entry.initialized,
        dependencies: entry.dependencies,
        error: entry.error
      } : null;
    }

    // Return all modules status
    const status = {};
    for (const name in this.modules) {
      const entry = this.modules[name];
      status[name] = {
        initialized: entry.initialized,
        dependencies: entry.dependencies,
        error: entry.error
      };
    }
    return status;
  }
};

// Export to global
if (typeof window !== 'undefined') {
  window.UIverse = UIverse;
}

// ESM export if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIverse;
}
