/**
 * UIverse - JavaScript Bootstrap Module
 * 
 * Entry point for all JavaScript functionality
 * Registers and initializes all features using the UIverse registry system
 * with automatic dependency management, lazy loading, and duplicate prevention
 * 
 * All feature modules must be loaded before this script:
 * - js/registry.js (UIverse registry)
 * - js/core/*.js (core modules)
 * - js/features/*.js (feature modules)
 * 
 * Lazy loading is handled by js/core/lazy-loader.js
 * Duplicate prevention via js/core/script-loader.js
 */

const Bootstrap = {
  initialized: false,
  /**
   * Register all available modules with the UIverse registry
   */
  registerModules() {
    // Register core modules
    if (typeof Security !== 'undefined') {
      UIverse.register('Security', Security);
    }

    if (typeof ComponentsRegistry !== 'undefined') {
      UIverse.register('ComponentsRegistry', ComponentsRegistry);
    }

    // Register feature modules (with optional conditional initialization)
    if (typeof Toast !== 'undefined') {
      UIverse.register('Toast', Toast);
    }

    if (typeof Popup !== 'undefined') {
      UIverse.register('Popup', Popup);
    }

    if (typeof CodeTools !== 'undefined') {
      UIverse.register('CodeTools', CodeTools);
    }

    if (typeof Sidebar !== 'undefined') {
      UIverse.register('Sidebar', Sidebar);
    }

    if (typeof Search !== 'undefined') {
      UIverse.register('Search', Search, ['ComponentsRegistry']);
    }

    if (typeof Theme !== 'undefined') {
      UIverse.register('Theme', Theme);
    }

    if (typeof Scroll !== 'undefined') {
      UIverse.register('Scroll', Scroll);
    }

    if (typeof Alerts !== 'undefined') {
      UIverse.register('Alerts', Alerts);
    }

    if (typeof Sandbox !== 'undefined') {
      UIverse.register('Sandbox', Sandbox);
    }

    if (typeof Accessibility !== 'undefined') {
      UIverse.register('Accessibility', Accessibility);
    }

    if (typeof CommandPalette !== 'undefined') {
      UIverse.register('CommandPalette', CommandPalette);
    }

    if (typeof URLStateManager !== 'undefined') {
      UIverse.register('URLStateManager', URLStateManager);
    }

    if (typeof ProfileEditor !== 'undefined') {
      UIverse.register('ProfileEditor', ProfileEditor);
    }

    if (typeof ComponentGallery !== 'undefined') {
      UIverse.register('ComponentGallery', ComponentGallery);
    }

    if (window.UIVERSE_DEBUG) {
      console.info('[Bootstrap] All modules registered with UIverse registry');
    }
  },

/**
    * Initialize all features with conditional DOM checks
    */
  init() {
    if (this.initialized) {
      console.warn('[Bootstrap] Already initialized, skipping duplicate init');
      return;
    }
    
    if (!window.UIverse) {
      console.error('[Bootstrap] UIverse registry not found. Make sure js/registry.js is loaded first.');
      return;
    }

    // Register all modules
    this.registerModules();

    // Initialize only modules with required DOM elements
    this.initConditionalModules();

    // Initialize all registered modules (with dependencies handled by registry)
    const report = UIverse.initAll();
    
    this.initialized = true;
    this.logStatus(report);
  },

  /**
   * Initialize only modules that have required DOM elements
   * This prevents errors from modules expecting specific page elements
   */
  initConditionalModules() {
    // Skip Sidebar if element not present
    if (!document.querySelector(".sidebar")) {
      UIverse.modules['Sidebar'] && (UIverse.modules['Sidebar'].module.init = () => {});
    }

    // Skip Sandbox if component cards not present
    if (!document.querySelector(".component-card")) {
      UIverse.modules['Sandbox'] && (UIverse.modules['Sandbox'].module.init = () => {});
      UIverse.modules['ComponentGallery'] && (UIverse.modules['ComponentGallery'].module.init = () => {});
    }

    // Skip ProfileEditor if profile button not present
    if (!document.querySelector('.btnn')) {
      UIverse.modules['ProfileEditor'] && (UIverse.modules['ProfileEditor'].module.init = () => {});
    }
  },

  /**
   * Log initialization status (development only)
   */
  logStatus(report) {
    if (window.UIVERSE_DEBUG && typeof console !== 'undefined' && console.log) {
      console.log('[UIverse] Bootstrap complete. Initialization report:', {
        initialized: report.initialized.length,
        failed: report.failed.length,
        details: report
      });
    }
  }
};

/**
  * Start bootstrap on DOM ready
  */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize lazy loader for dynamic imports
  if (typeof LazyLoader !== 'undefined') {
    LazyLoader.init();
    console.log('[Bootstrap] Lazy loader initialized');
  }
  
  Bootstrap.init();
});

// Also expose bootstrap to window for debugging
window.UIverseBootstrap = Bootstrap;
