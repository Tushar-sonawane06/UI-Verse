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
    const dependencyManager = window.DependencyManager || globalThis.DependencyManager || null;
    const dependenciesFor = (name) => (dependencyManager && typeof dependencyManager.getDependencies === 'function')
      ? dependencyManager.getDependencies(name)
      : [];

    // Register core modules
    if (typeof DependencyManager !== 'undefined') {
      UIverse.register('DependencyManager', DependencyManager, dependenciesFor('DependencyManager'));
    }

    if (typeof Security !== 'undefined') {
      UIverse.register('Security', Security, dependenciesFor('Security'));
    }

    if (typeof DesignTokens !== 'undefined') {
      UIverse.register('DesignTokens', DesignTokens, dependenciesFor('DesignTokens'));
    }

    if (typeof ComponentVersioning !== 'undefined') {
      UIverse.register('ComponentVersioning', ComponentVersioning, dependenciesFor('ComponentVersioning'));
    }

    if (typeof KeyboardContract !== 'undefined') {
      UIverse.register('KeyboardContract', KeyboardContract, dependenciesFor('KeyboardContract'));
    }

    if (typeof ComponentsRegistry !== 'undefined') {
      UIverse.register('ComponentsRegistry', ComponentsRegistry, dependenciesFor('ComponentsRegistry'));
    }

    if (typeof ComponentDiscovery !== 'undefined') {
      UIverse.register('ComponentDiscovery', ComponentDiscovery, dependenciesFor('ComponentDiscovery'));
    }

    if (typeof ComponentIndex !== 'undefined') {
      UIverse.register('ComponentIndex', ComponentIndex, dependenciesFor('ComponentIndex'));
    }
    if (typeof NavigationShortcuts !== 'undefined') {
  UIverse.register(
    'NavigationShortcuts',
    NavigationShortcuts
  );
}

    if (typeof ComponentRecommendations !== 'undefined') {
      UIverse.register('ComponentRecommendations', ComponentRecommendations, dependenciesFor('ComponentRecommendations'));
    }

    if (typeof RecommendationsUI !== 'undefined') {
      UIverse.register('RecommendationsUI', RecommendationsUI, dependenciesFor('RecommendationsUI'), { domSelector: 'main.main-home' });
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
      UIverse.register('Sidebar', Sidebar, { domSelector: '.sidebar' });
    }

    if (typeof Search !== 'undefined') {
      UIverse.register('Search', Search, dependenciesFor('Search'));
    }

    if (typeof Theme !== 'undefined') {
      UIverse.register('Theme', Theme, dependenciesFor('Theme'));
    }

    if (typeof Scroll !== 'undefined') {
      UIverse.register('Scroll', Scroll);
    }

    if (typeof Alerts !== 'undefined') {
      UIverse.register('Alerts', Alerts);
    }

    if (typeof Sandbox !== 'undefined') {
      UIverse.register('Sandbox', Sandbox, { domSelector: '.component-card' });
    }

    if (typeof Accessibility !== 'undefined') {
      UIverse.register('Accessibility', Accessibility);
    }

    if (typeof AccessibilityChecker !== 'undefined') {
      UIverse.register('AccessibilityChecker', AccessibilityChecker);
    }


    if (typeof CommandPalette !== 'undefined') {
      UIverse.register('CommandPalette', CommandPalette, dependenciesFor('CommandPalette'));
    }
    if (
  typeof PreviewZoom !==
  'undefined'
) {
  UIverse.register(
    'PreviewZoom',
    PreviewZoom
  );
}

    if (typeof URLStateManager !== 'undefined') {
      UIverse.register('URLStateManager', URLStateManager);
    }

    if (typeof ProfileEditor !== 'undefined') {
      UIverse.register('ProfileEditor', ProfileEditor, { domSelector: '.btnn' });
    }

    if (typeof ComponentGallery !== 'undefined') {
      UIverse.register('ComponentGallery', ComponentGallery, dependenciesFor('ComponentGallery'), { domSelector: '.component-card' });
    }

    if (typeof Favorites !== 'undefined') {
      UIverse.register('Favorites', Favorites);
    }

    if (typeof DevicePreview !== 'undefined') {
      UIverse.register('DevicePreview', DevicePreview);
    }

    if (typeof KeyboardShortcuts !== 'undefined') {
      UIverse.register('KeyboardShortcuts', KeyboardShortcuts);
    }

    if (typeof Download !== 'undefined') {
      UIverse.register('Download', Download);
    }

    if (typeof BundleExporter !== 'undefined') {
      UIverse.register('BundleExporter', BundleExporter, dependenciesFor('BundleExporter'));
    }

    if (typeof BundleExporterUI !== 'undefined') {
      UIverse.register('BundleExporterUI', BundleExporterUI, dependenciesFor('BundleExporterUI'), { domSelector: '.component-card' });
    }

    if (typeof ComponentRatings !== 'undefined') {
      UIverse.register('ComponentRatings', ComponentRatings, [], { domSelector: '.component-card' });
    }

    if (typeof MarketplaceFeeds !== 'undefined') {
      UIverse.register('MarketplaceFeeds', MarketplaceFeeds);
    }

    if (typeof CreatorProfile !== 'undefined') {
      UIverse.register('CreatorProfile', CreatorProfile, [], { domSelector: '.component-card' });
    }

    if (typeof SubmissionPortal !== 'undefined') {
      UIverse.register('SubmissionPortal', SubmissionPortal);
    }

    if (typeof Recent !== 'undefined') {
      UIverse.register('Recent', Recent);
    }

    if (typeof TagFilter !== 'undefined') {
  UIverse.register('TagFilter', TagFilter);
}

    if (typeof TutorialMode !== 'undefined') {
      UIverse.register('TutorialMode', TutorialMode);
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

    // Initialize all registered modules (with dependencies handled by registry)
    const report = UIverse.initAll();
    
    // Dynamically load CSS variable inspector if component previews are present
    if (document.querySelector('.component-card, .preview-box, .card-preview, [class*="-preview"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'css/css-variable-inspector.css';
      document.head.appendChild(l);

      const s = document.createElement('script');
      s.src = 'js/features/css-variable-inspector.js';
      s.async = true;
      document.head.appendChild(s);
    }

    this.initialized = true;
    this.logStatus(report);
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
