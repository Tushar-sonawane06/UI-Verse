// UIverse Main Entry Point
// This file imports all modules for bundling with Vite

// Core modules (must load first)
import '../js/registry.js';
import '../js/core/utils.js';
import '../js/core/security.js';
import '../js/core/components-registry.js';
import '../js/core/sanitize.js';

// Feature modules
import '../js/features/toast.js';
import '../js/features/popup.js';
import '../js/features/code-tools.js';
import '../js/features/sidebar.js';
import '../js/features/search.js';
import '../js/features/theme.js';
import '../js/features/scroll.js';
import '../js/features/alerts.js';
import '../js/features/sandbox.js';
import '../js/features/accessibility.js';
import '../js/features/command-palette.js';
import '../js/features/url-state.js';
import '../js/features/url-state-integration.js';
import '../js/features/profile-editor.js';
import '../js/features/component-gallery.js';

// Bootstrap (initializes all modules)
import '../js/bootstrap.js';

// Lazy-loaded modules (loaded on demand)
export const lazyModules = {
  commandPalette: () => import('../js/features/command-palette.js'),
  accessibility: () => import('../js/features/accessibility.js'),
  profileEditor: () => import('../js/features/profile-editor.js'),
  sandbox: () => import('../js/features/sandbox.js'),
  compare: () => import('../js/features/compare.js')
};

// Export for debugging
if (typeof window !== 'undefined') {
  window.UIVERSE_BUILD = {
    version: '1.0.0',
    bundled: true,
    modules: ['core', 'ui', 'features', 'lazy']
  };
}