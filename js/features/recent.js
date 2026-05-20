/**
 * Recently Viewed Components Tracker
 * 
 * Tracks recently viewed components in sessionStorage
 * Stores up to 10 most recent component IDs
 * Auto-injects "Recently Viewed" section on homepage
 * Clears automatically on browser close
 */

const Recent = {
  _state: {
    initialized: false,
    maxItems: 10,
    storageKey: 'uiVerseRecentComponents',
    recentSection: null,
    grid: null
  },

  /**
   * Get recent component IDs from sessionStorage
   * @returns {Array} Array of recent component identifiers
   */
  _readStorage() {
    try {
      const stored = sessionStorage.getItem(this._state.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('[Recent] Failed to read storage:', e.message);
      return [];
    }
  },

  /**
   * Write recent component IDs to sessionStorage
   * @param {Array} items - Array of component identifiers
   */
  _writeStorage(items) {
    try {
      const trimmed = items.slice(0, this._state.maxItems);
      sessionStorage.setItem(this._state.storageKey, JSON.stringify(trimmed));
    } catch (e) {
      console.warn('[Recent] Failed to write storage:', e.message);
    }
  },

  /**
   * Track a component visit
   * @param {string} componentId - Unique component identifier (from data-name)
   * @param {string} componentLabel - Display name of component (from card-label or h3)
   * @param {string} pageUrl - URL of the page containing the component
   */
  trackComponentView(componentId, componentLabel, pageUrl) {
    if (!componentId || !componentLabel) return;

    const recent = this._readStorage();

    // Create entry object
    const entry = {
      id: componentId,
      label: componentLabel,
      page: pageUrl || window.location.pathname,
      timestamp: Date.now()
    };

    // Remove duplicate if it exists
    const filtered = recent.filter(item => item.id !== componentId);

    // Add new entry at the front
    const updated = [entry, ...filtered].slice(0, this._state.maxItems);

    this._writeStorage(updated);
  },

  /**
   * Get all recent components with full details
   * @returns {Array} Array of recent component objects
   */
  getRecent() {
    return this._readStorage();
  },

  /**
   * Clear all recent component history
   */
  clearRecent() {
    sessionStorage.removeItem(this._state.storageKey);
  },

  /**
   * Inject click handlers on component cards to track visits
   */
  _injectComponentTracking() {
    document.querySelectorAll('.component-card').forEach((card) => {
      card.addEventListener('click', () => {
        const componentId = card.dataset.name;
        const label = card.querySelector('.card-label')?.textContent || componentId;
        this.trackComponentView(componentId, label);
      });
    });
  },

  /**
   * Create a recently viewed component card
   * @param {Object} item - Recent component entry object
   * @returns {HTMLElement} The card element
   */
  _createRecentCard(item) {
    const card = document.createElement('a');
    card.className = 'recent-card';
    card.href = `${item.page}#${item.id}`;
    card.title = `${item.label} — ${new Date(item.timestamp).toLocaleDateString()}`;

    const cardContent = document.createElement('div');
    cardContent.className = 'recent-card-content';

    const label = document.createElement('span');
    label.className = 'recent-card-label';
    label.textContent = item.label;

    const time = document.createElement('span');
    time.className = 'recent-card-time';
    const elapsed = this._formatTimeDiff(item.timestamp);
    time.textContent = elapsed;

    cardContent.appendChild(label);
    cardContent.appendChild(time);
    card.appendChild(cardContent);

    return card;
  },

  /**
   * Format time difference as a human-readable string
   * @param {number} timestamp - Millisecond timestamp
   * @returns {string} Formatted time (e.g., "2 min ago", "1 day ago")
   */
  _formatTimeDiff(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    return `${Math.floor(days / 30)}mo ago`;
  },

  /**
   * Render "Recently Viewed" section on the homepage
   */
  _renderRecentlyViewedSection() {
    const recent = this.getRecent();
    if (recent.length === 0) return; // Don't show empty section

    const container = document.querySelector('.home-content') || document.querySelector('main');
    if (!container) return;

    // Create section
    const section = document.createElement('section');
    section.className = 'recently-viewed-section';

    // Header
    const header = document.createElement('div');
    header.className = 'recently-viewed-header';

    const title = document.createElement('h2');
    title.className = 'recently-viewed-title';
    title.textContent = 'Recently Viewed';

    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'recent-clear-btn';
    clearBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i> Clear';
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.clearRecent();
      section.remove();
    });

    header.appendChild(title);
    header.appendChild(clearBtn);

    // Grid
    const grid = document.createElement('div');
    grid.className = 'recently-viewed-grid';

    recent.forEach((item) => {
      const card = this._createRecentCard(item);
      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);

    // Insert before the first major section (categories, popular, etc.)
    const firstSection = container.querySelector('section:not(.recently-viewed-section)');
    if (firstSection) {
      container.insertBefore(section, firstSection);
    } else {
      container.appendChild(section);
    }

    this._state.recentSection = section;
    this._state.grid = grid;
  },

  /**
   * Inject styles for recently viewed section
   */
  _injectStyles() {
    if (document.getElementById('recent-styles')) return;

    const style = document.createElement('style');
    style.id = 'recent-styles';
    style.textContent = `
      .recently-viewed-section {
        margin-bottom: 48px;
      }

      .recently-viewed-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .recently-viewed-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--text-primary, #1a202c);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .recently-viewed-title::before {
        content: '🕒';
        font-size: 20px;
      }

      .recent-clear-btn {
        background: transparent;
        border: 1px solid rgba(148, 163, 184, 0.3);
        color: var(--text-secondary, #64748b);
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .recent-clear-btn:hover {
        border-color: rgba(235, 104, 53, 0.5);
        color: var(--accent, #eb6835);
        background: rgba(235, 104, 53, 0.05);
      }

      .recently-viewed-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 12px;
      }

      .recent-card {
        background: var(--card-bg, #ffffff);
        border: 1px solid var(--card-border, #e2e8f0);
        border-radius: 12px;
        padding: 12px;
        text-decoration: none;
        color: inherit;
        transition: all 0.2s ease;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .recent-card:hover {
        border-color: rgba(235, 104, 53, 0.4);
        background: rgba(235, 104, 53, 0.02);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      .recent-card-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .recent-card-label {
        font-size: 13px;
        font-weight: 600;
        color: var(--text-primary, #1a202c);
        line-height: 1.4;
        word-break: break-word;
      }

      .recent-card-time {
        font-size: 11px;
        color: var(--text-secondary, #94a3b8);
      }

      body.dark-mode .recent-clear-btn {
        border-color: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.6);
      }

      body.dark-mode .recent-clear-btn:hover {
        border-color: rgba(235, 104, 53, 0.4);
        color: rgba(235, 104, 53, 0.9);
        background: rgba(235, 104, 53, 0.08);
      }

      body.dark-mode .recent-card {
        background: rgba(20, 20, 30, 0.5);
        border-color: rgba(255, 255, 255, 0.08);
      }

      body.dark-mode .recent-card:hover {
        border-color: rgba(235, 104, 53, 0.3);
        background: rgba(235, 104, 53, 0.06);
      }

      body.dark-mode .recent-card-label {
        color: rgba(255, 255, 255, 0.9);
      }

      body.dark-mode .recent-card-time {
        color: rgba(255, 255, 255, 0.5);
      }

      @media (max-width: 768px) {
        .recently-viewed-grid {
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 10px;
        }

        .recent-card {
          padding: 10px;
        }

        .recently-viewed-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .recent-clear-btn {
          align-self: flex-end;
        }
      }
    `;
    document.head.appendChild(style);
  },

  /**
   * Initialize the Recent Viewer
   */
  init() {
    if (this._state.initialized) return;

    this._injectStyles();
    this._injectComponentTracking();

    // Only render on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
      this._renderRecentlyViewedSection();
    }

    this._state.initialized = true;
    console.info('[Recent] Initialized. Tracking component views in sessionStorage.');
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Recent;
}
