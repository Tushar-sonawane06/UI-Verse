/**
 * UIverse - URL State Integration Utilities
 * 
 * Helper functions to make existing filter functions URL-aware
 * These extend existing page functionality to support URL parameters
 */

const URLStateIntegration = {
  /**
   * Wrap an existing filter function to make it URL-aware
   */
  wrapFilterFunction(filterFn, filterName = 'filter') {
    return function (query) {
      // Call original filter
      filterFn(query);

      // Update URL state
      if (typeof URLStateManager !== 'undefined') {
        URLStateManager.onSearchChange(query);
      }
    };
  },

  /**
   * Create an enhanced category filter that updates URL
   */
  createCategoryFilter(originalFn) {
    return function (category, button) {
      // Call original filter
      if (originalFn) {
        originalFn(category, button);
      }

      // Update URL state
      if (typeof URLStateManager !== 'undefined') {
        URLStateManager.onCategoryChange(category);
      }
    };
  },

  /**
   * Create a reset filter button that clears URL state
   */
  createResetFilter(originalFn) {
    return function () {
      // Call original if exists
      if (originalFn) {
        originalFn();
      }

      // Clear URL state
      if (typeof URLStateManager !== 'undefined') {
        URLStateManager.clearState();
      }
    };
  },

  /**
   * Listen to URL state changes and update UI
   */
  observeStateChanges(callback) {
    document.addEventListener('urlistatechange', (event) => {
      if (callback && typeof callback === 'function') {
        callback(event.detail);
      }
    });
  },

  /**
   * Get current URL state
   */
  getCurrentState() {
    if (typeof URLStateManager !== 'undefined') {
      return URLStateManager.getState();
    }
    return { searchQuery: '', selectedCategory: 'all', sortOrder: 'default' };
  },

  /**
   * Create shareable URL with current filter state
   */
  getShareableURL() {
    const baseURL = window.location.origin + window.location.pathname;
    const state = this.getCurrentState();
    const params = new URLSearchParams();

    if (state.searchQuery) {
      params.set('search', state.searchQuery);
    }
    if (state.selectedCategory && state.selectedCategory !== 'all') {
      params.set('category', state.selectedCategory);
    }
    if (state.sortOrder && state.sortOrder !== 'default') {
      params.set('sort', state.sortOrder);
    }

    const queryString = params.toString();
    return queryString ? baseURL + '?' + queryString : baseURL;
  },

  /**
   * Copy shareable URL to clipboard
   */
  async copyShareableURL() {
    try {
      const url = this.getShareableURL();
      await navigator.clipboard.writeText(url);
      return { success: true, url, message: 'URL copied to clipboard!' };
    } catch (err) {
      console.error('[URLStateIntegration] Failed to copy URL', err);
      return { success: false, message: 'Failed to copy URL' };
    }
  },

  /**
   * Generate a shareable link element
   */
  createShareButton() {
    const button = document.createElement('button');
    button.className = 'url-share-btn';
    button.innerHTML = '<i class="fa-solid fa-share-nodes"></i> Share Filter';
    button.title = 'Copy shareable link with current filters';

    button.addEventListener('click', async () => {
      const result = await this.copyShareableURL();
      if (result.success) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        button.classList.add('copied');

        setTimeout(() => {
          button.innerHTML = originalText;
          button.classList.remove('copied');
        }, 2000);
      }
    });

    return button;
  },

  /**
   * Initialize URL state integration
   */
  init() {
    // Listen for URL state changes
    this.observeStateChanges((state) => {
      console.log('[URLStateIntegration] State changed:', state);
    });

    console.log('[URLStateIntegration] Initialized');
  }
};

// Expose globally
window.URLStateIntegration = URLStateIntegration;

// Auto-initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    URLStateIntegration.init();
  });
} else {
  URLStateIntegration.init();
}
