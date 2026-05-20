/**
 * Accessibility Compliance Checker
 * 
 * Displays WCAG compliance badges on components with:
 * - Accessibility scores (Green/Yellow/Red)
 * - WCAG AA, Keyboard Nav, Screen Reader support indicators
 * - Filter toggle to show only accessible components
 * - Links to WAVE and axe DevTools for detailed reports
 */

const AccessibilityChecker = {
  _state: {
    initialized: false,
    badgesInjected: false,
    filterActive: false,
    showOnlyAccessible: false
  },

  /**
   * Define accessibility levels and scores
   */
  _levels: {
    green: { name: 'Compliant', score: 85, icon: '✓', color: '#22c55e' },
    yellow: { name: 'Partial', score: 50, icon: '◐', color: '#eab308' },
    red: { name: 'Issues', score: 0, icon: '✕', color: '#ef4444' }
  },

  /**
   * Extract a11y features from component card data attributes
   * @param {HTMLElement} card - Component card element
   * @returns {Object} Accessibility features object
   */
  _extractA11yFeatures(card) {
    return {
      wcagAA: card.dataset.wcagAa === 'true' || card.dataset.wcagAa === '1',
      wcagAAA: card.dataset.wcagAaa === 'true' || card.dataset.wcagAaa === '1',
      keyboardNav: card.dataset.keyboardNav === 'true' || card.dataset.keyboardNav === '1',
      screenReader: card.dataset.screenReader === 'true' || card.dataset.screenReader === '1',
      focusVisible: card.dataset.focusVisible === 'true' || card.dataset.focusVisible === '1',
      colorContrast: card.dataset.colorContrast === 'true' || card.dataset.colorContrast === '1',
      ariaLabels: card.dataset.ariaLabels === 'true' || card.dataset.ariaLabels === '1',
      semanticHTML: card.dataset.semanticHtml === 'true' || card.dataset.semanticHtml === '1',
      customNotes: card.dataset.a11yNotes || ''
    };
  },

  /**
   * Calculate accessibility score based on features
   * @param {Object} features - Accessibility features object
   * @returns {Object} Score object with level and percentage
   */
  _calculateScore(features) {
    const checks = [
      features.wcagAA,
      features.keyboardNav,
      features.screenReader,
      features.focusVisible,
      features.colorContrast,
      features.ariaLabels,
      features.semanticHTML
    ];

    const passed = checks.filter(Boolean).length;
    const total = checks.length;
    const percentage = Math.round((passed / total) * 100);

    let level = 'red';
    if (percentage >= 85) level = 'green';
    else if (percentage >= 50) level = 'yellow';

    return { level, percentage, passed, total };
  },

  /**
   * Create accessibility badge HTML
   * @param {string} level - Badge level (green/yellow/red)
   * @param {number} percentage - Accessibility score percentage
   * @param {Object} features - Accessibility features
   * @returns {HTMLElement}
   */
  _createBadge(level, percentage, features) {
    const badge = document.createElement('div');
    badge.className = 'a11y-badge';
    badge.setAttribute('data-level', level);
    badge.setAttribute('aria-label', `Accessibility: ${this._levels[level].name} (${percentage}%)`);

    const levelInfo = this._levels[level];
    
    const innerHTML = `
      <div class="a11y-badge-icon" style="background-color: ${levelInfo.color}">
        ${levelInfo.icon}
      </div>
      <div class="a11y-badge-content">
        <div class="a11y-badge-score">${percentage}%</div>
        <div class="a11y-badge-label">${levelInfo.name}</div>
      </div>
      <button class="a11y-badge-details" title="View accessibility details" aria-label="View accessibility details">
        <i class="fa-solid fa-info"></i>
      </button>
    `;

    badge.innerHTML = innerHTML;

    // Attach details button handler
    const detailsBtn = badge.querySelector('.a11y-badge-details');
    detailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._showAccessibilityModal(features, level, percentage);
    });

    return badge;
  },

  /**
   * Create and show detailed accessibility modal
   * @param {Object} features - Accessibility features
   * @param {string} level - Accessibility level
   * @param {number} percentage - Score percentage
   */
  _showAccessibilityModal(features, level, percentage) {
    const levelInfo = this._levels[level];
    
    const modal = document.createElement('div');
    modal.className = 'a11y-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    const checklist = Object.entries(features).filter(([key]) => key !== 'customNotes').map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const icon = value ? '✓' : '✗';
      const className = value ? 'checked' : 'unchecked';
      return `<li class="a11y-check-item ${className}"><span class="a11y-check-icon">${icon}</span> ${label}</li>`;
    }).join('');

    modal.innerHTML = `
      <div class="a11y-modal-overlay"></div>
      <div class="a11y-modal-content">
        <div class="a11y-modal-header">
          <h3>Accessibility Details</h3>
          <button class="a11y-modal-close" aria-label="Close modal">&times;</button>
        </div>
        <div class="a11y-modal-body">
          <div class="a11y-score-display" style="border-color: ${levelInfo.color}">
            <div class="a11y-score-value">${percentage}%</div>
            <div class="a11y-score-label">${levelInfo.name}</div>
          </div>
          <div class="a11y-checks">
            <h4>Compliance Checklist</h4>
            <ul>${checklist}</ul>
          </div>
          ${features.customNotes ? `<div class="a11y-notes"><strong>Notes:</strong> ${features.customNotes}</div>` : ''}
          <div class="a11y-tools">
            <h4>Testing Tools</h4>
            <a href="https://wave.webaim.org/extension/" target="_blank" rel="noopener" class="a11y-tool-link">
              <i class="fa-solid fa-external-link"></i> WAVE Browser Extension
            </a>
            <a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener" class="a11y-tool-link">
              <i class="fa-solid fa-external-link"></i> axe DevTools
            </a>
            <a href="https://www.w3.org/WAI/test-evaluate/" target="_blank" rel="noopener" class="a11y-tool-link">
              <i class="fa-solid fa-external-link"></i> W3C Testing Methods
            </a>
          </div>
        </div>
      </div>
    `;

    // Close button handler
    const closeBtn = modal.querySelector('.a11y-modal-close');
    const overlay = modal.querySelector('.a11y-modal-overlay');
    
    const closeModal = () => modal.remove();
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    }, { once: true });

    document.body.appendChild(modal);
  },

  /**
   * Inject accessibility badges on component cards
   */
  _injectBadges() {
    document.querySelectorAll('.component-card').forEach((card) => {
      if (card.dataset.a11yBadgeInjected === '1') return;

      const features = this._extractA11yFeatures(card);
      const score = this._calculateScore(features);

      // Only show badge if at least some a11y data is present
      const hasA11yData = Object.values(features).some(v => v && typeof v === 'boolean' && v);
      if (!hasA11yData) {
        card.dataset.a11yBadgeInjected = '1';
        return;
      }

      const badge = this._createBadge(score.level, score.percentage, features);
      card.appendChild(badge);

      // Store accessibility level for filtering
      card.dataset.a11yLevel = score.level;
      card.dataset.a11yScore = score.percentage;

      card.dataset.a11yBadgeInjected = '1';
    });

    this._state.badgesInjected = true;
  },

  /**
   * Inject filter toggle button to page
   */
  _injectFilterToggle() {
    // Check if filter button already exists
    if (document.querySelector('[data-a11y-filter-toggle]')) return;

    // Find the filter bar or create one
    let filterBar = document.querySelector('.filter-bar') || document.querySelector('.filter-search')?.parentElement;
    
    if (!filterBar) {
      // Create a simple filter bar if none exists
      const header = document.querySelector('.page-hero') || document.querySelector('main > div:first-child');
      if (!header) return;

      filterBar = document.createElement('div');
      filterBar.className = 'a11y-filter-bar';
      header.insertAdjacentElement('afterend', filterBar);
    }

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'a11y-filter-toggle';
    toggle.setAttribute('data-a11y-filter-toggle', 'true');
    toggle.setAttribute('title', 'Show only accessible components (WCAG AA+)');
    toggle.setAttribute('aria-label', 'Filter accessible components');
    toggle.setAttribute('aria-pressed', 'false');
    toggle.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      <span>Accessible Only</span>
    `;

    toggle.addEventListener('click', () => {
      this._state.showOnlyAccessible = !this._state.showOnlyAccessible;
      toggle.setAttribute('aria-pressed', this._state.showOnlyAccessible ? 'true' : 'false');
      toggle.classList.toggle('active', this._state.showOnlyAccessible);
      this._applyAccessibilityFilter();
    });

    filterBar.appendChild(toggle);
  },

  /**
   * Apply accessibility filter to cards
   */
  _applyAccessibilityFilter() {
    document.querySelectorAll('.component-card').forEach((card) => {
      const level = card.dataset.a11yLevel;
      const shouldShow = !this._state.showOnlyAccessible || level === 'green';
      card.style.display = shouldShow ? '' : 'none';
    });
  },

  /**
   * Inject styles for badges and modals
   */
  _injectStyles() {
    if (document.getElementById('a11y-checker-styles')) return;

    const style = document.createElement('style');
    style.id = 'a11y-checker-styles';
    style.textContent = `
      /* ========== ACCESSIBILITY BADGE ========== */
      .a11y-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        background: rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        margin-top: 8px;
        font-size: 11px;
        font-weight: 600;
        position: relative;
      }

      .a11y-badge[data-level="green"] {
        background: rgba(34, 197, 94, 0.08);
        border-color: rgba(34, 197, 94, 0.2);
      }

      .a11y-badge[data-level="yellow"] {
        background: rgba(234, 179, 8, 0.08);
        border-color: rgba(234, 179, 8, 0.2);
      }

      .a11y-badge[data-level="red"] {
        background: rgba(239, 68, 68, 0.08);
        border-color: rgba(239, 68, 68, 0.2);
      }

      .a11y-badge-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        color: white;
        font-weight: 700;
        font-size: 10px;
        flex-shrink: 0;
      }

      .a11y-badge-content {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .a11y-badge-score {
        font-weight: 700;
        color: var(--text-primary, #1a202c);
      }

      .a11y-badge-label {
        font-size: 10px;
        opacity: 0.7;
      }

      .a11y-badge-details {
        background: transparent;
        border: none;
        color: var(--text-secondary, #64748b);
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        transition: color 0.2s;
      }

      .a11y-badge-details:hover {
        color: var(--accent, #eb6835);
      }

      body.dark-mode .a11y-badge {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(255, 255, 255, 0.08);
      }

      body.dark-mode .a11y-badge-score,
      body.dark-mode .a11y-badge-label {
        color: rgba(255, 255, 255, 0.9);
      }

      /* ========== ACCESSIBILITY FILTER ========== */
      .a11y-filter-bar {
        padding: 16px 24px;
        background: var(--card-bg, #ffffff);
        border-bottom: 1px solid var(--card-border, #e2e8f0);
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .a11y-filter-toggle {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.06);
        color: var(--text-primary, #1a202c);
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }

      .a11y-filter-toggle:hover {
        background: rgba(0, 0, 0, 0.06);
        border-color: rgba(0, 0, 0, 0.12);
      }

      .a11y-filter-toggle.active {
        background: rgba(34, 197, 94, 0.15);
        border-color: rgba(34, 197, 94, 0.3);
        color: #22c55e;
      }

      body.dark-mode .a11y-filter-toggle {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.9);
      }

      body.dark-mode .a11y-filter-toggle:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.12);
      }

      /* ========== ACCESSIBILITY MODAL ========== */
      .a11y-modal {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .a11y-modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
      }

      .a11y-modal-content {
        position: relative;
        background: var(--card-bg, #ffffff);
        border: 1px solid var(--card-border, #e2e8f0);
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        max-width: 500px;
        max-height: 80vh;
        overflow-y: auto;
        width: 90%;
        z-index: 10001;
      }

      .a11y-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid var(--card-border, #e2e8f0);
      }

      .a11y-modal-header h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
      }

      .a11y-modal-close {
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--text-secondary, #64748b);
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: all 0.2s;
      }

      .a11y-modal-close:hover {
        background: rgba(0, 0, 0, 0.05);
        color: var(--text-primary, #1a202c);
      }

      .a11y-modal-body {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .a11y-score-display {
        padding: 16px;
        border-radius: 12px;
        border-left: 4px solid;
        background: rgba(0, 0, 0, 0.02);
        text-align: center;
      }

      .a11y-score-value {
        font-size: 32px;
        font-weight: 700;
        color: var(--text-primary, #1a202c);
      }

      .a11y-score-label {
        font-size: 12px;
        color: var(--text-secondary, #64748b);
        margin-top: 4px;
      }

      .a11y-checks {
        padding: 16px;
        background: rgba(0, 0, 0, 0.02);
        border-radius: 12px;
      }

      .a11y-checks h4 {
        margin: 0 0 12px;
        font-size: 13px;
        font-weight: 700;
      }

      .a11y-checks ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .a11y-check-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 0;
        font-size: 12px;
      }

      .a11y-check-item.checked {
        color: #22c55e;
        font-weight: 600;
      }

      .a11y-check-item.unchecked {
        color: #ef4444;
        opacity: 0.7;
      }

      .a11y-check-icon {
        display: inline-block;
        width: 16px;
        text-align: center;
        font-weight: 700;
      }

      .a11y-notes {
        padding: 12px;
        background: rgba(59, 130, 246, 0.08);
        border-radius: 8px;
        font-size: 12px;
        border-left: 3px solid #3b82f6;
      }

      .a11y-tools {
        padding: 12px;
        background: rgba(0, 0, 0, 0.02);
        border-radius: 12px;
      }

      .a11y-tools h4 {
        margin: 0 0 8px;
        font-size: 12px;
        font-weight: 700;
      }

      .a11y-tool-link {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 6px;
        color: var(--accent, #eb6835);
        text-decoration: none;
        font-size: 11px;
        font-weight: 600;
        transition: all 0.2s;
        margin-bottom: 4px;
      }

      .a11y-tool-link:hover {
        background: rgba(235, 104, 53, 0.1);
      }

      body.dark-mode .a11y-modal-content {
        background: #1a1a2e;
        border-color: rgba(255, 255, 255, 0.08);
      }

      body.dark-mode .a11y-modal-header {
        border-bottom-color: rgba(255, 255, 255, 0.08);
      }

      body.dark-mode .a11y-modal-close:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      @media (max-width: 768px) {
        .a11y-badge {
          font-size: 10px;
          padding: 4px 8px;
        }

        .a11y-modal-content {
          width: 95%;
        }

        .a11y-score-value {
          font-size: 24px;
        }
      }
    `;
    document.head.appendChild(style);
  },

  /**
   * Initialize accessibility checker
   */
  init() {
    if (this._state.initialized) return;

    const hasComponentCards = document.querySelector('.component-card');
    if (!hasComponentCards) return;

    this._injectStyles();
    this._injectBadges();
    this._injectFilterToggle();

    this._state.initialized = true;
    console.info('[AccessibilityChecker] Initialized. Add data-wcag-aa, data-keyboard-nav, data-screen-reader to component cards.');
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AccessibilityChecker;
}
