/**
 * UIverse - URL State Integration Utilities
 * 
 * Helper functions to make existing filter functions URL-aware
 * These extend existing page functionality to support URL parameters
 */

const URLStateIntegration = {
  _state: {
    initialized: false,
    stateChangeListener: null
  },

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
    if (this._state.stateChangeListener) return;

    this._state.stateChangeListener = (event) => {
      if (callback && typeof callback === 'function') {
        callback(event.detail);
      }
    };

    document.addEventListener('urlistatechange', this._state.stateChangeListener);
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
    const baseURL = getNormalizedURL();
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
    baseURL.search = queryString;
    baseURL.hash = '';
    return baseURL.href;
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
    button.title = 'Copy shareable link with current filters';

    const idleHtml = '<i class="fa-solid fa-share-nodes"></i> Share Filter';
    const copiedHtml = '<i class="fa-solid fa-check"></i> Copied!';
    let resetTimer = null;

    const setIdleState = () => {
      button.innerHTML = idleHtml;
      button.classList.remove('copied');
    };

    const setCopiedState = () => {
      button.innerHTML = copiedHtml;
      button.classList.add('copied');
    };

    setIdleState();

    button.addEventListener('click', async () => {
      const result = await this.copyShareableURL();
      if (result.success) {
        if (resetTimer) {
          clearTimeout(resetTimer);
        }

        setCopiedState();

        resetTimer = setTimeout(() => {
          setIdleState();
          resetTimer = null;
        }, 2000);
      }
    });

    return button;
  },

  /**
   * Initialize URL state integration
   */
  init() {
    if (this._state.initialized) return;

    // Listen for URL state changes
    this.observeStateChanges((state) => {
      if (window.UIVERSE_DEBUG) console.log('[URLStateIntegration] State changed:', state);
    });

    if (window.UIVERSE_DEBUG) console.log('[URLStateIntegration] Initialized');
    this._state.initialized = true;
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
