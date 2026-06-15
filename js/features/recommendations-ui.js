/**
 * Recommendations UI Panel
 * Injects "You might also like" panel into component category pages.
 * Hooks into loader lifecycle, refreshes per navigation (full page reload).
 */

const RecommendationsUI = (function () {
  const PANEL_ID = 'component-recommendations-panel';
  const CONTAINER_SELECTOR = 'main.main-home';
  const FALLBACK_SELECTOR = 'body';
  const MAX_ITEMS = 6;
  const DEV_MODE = location.search.includes('rec-debug=1');

  function ensureStyles() {
    if (document.getElementById('recommendations-panel-styles')) return;
    const style = document.createElement('style');
    style.id = 'recommendations-panel-styles';
    style.textContent = `
      .rec-panel {
        margin: 32px 24px 48px;
        padding: 24px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(123,97,255,0.06), rgba(235,104,53,0.04));
        border: 1px solid rgba(123,97,255,0.12);
        position: relative;
      }
      .rec-panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        gap: 12px;
        flex-wrap: wrap;
      }
      .rec-panel-title {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: var(--text-primary, #1a1a2e);
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
      }
      .rec-panel-title i {
        color: #7b61ff;
        font-size: 16px;
      }
      .rec-panel-sub {
        font-size: 13px;
        color: var(--text-secondary, #666);
        margin: 4px 0 0;
      }
      .rec-panel-actions {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .rec-panel-debug {
        font-size: 11px;
        font-family: monospace;
        color: #7b61ff;
        background: rgba(123,97,255,0.08);
        padding: 2px 8px;
        border-radius: 6px;
        display: none;
      }
      .rec-panel-debug.visible {
        display: inline-block;
      }
      .rec-dismiss-btn {
        background: none;
        border: none;
        color: var(--text-secondary, #999);
        cursor: pointer;
        font-size: 13px;
        padding: 4px 8px;
        border-radius: 6px;
        transition: 0.2s;
      }
      .rec-dismiss-btn:hover {
        background: rgba(0,0,0,0.06);
        color: #d63031;
      }
      .rec-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 16px;
      }
      .rec-card {
        background: var(--card-bg, #fff);
        border: 1px solid var(--card-border, rgba(0,0,0,0.06));
        border-radius: 12px;
        padding: 16px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
      }
      .rec-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(123,97,255,0.12);
        border-color: rgba(123,97,255,0.25);
      }
      .rec-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .rec-card-category {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #7b61ff;
        background: rgba(123,97,255,0.08);
        padding: 3px 8px;
        border-radius: 6px;
      }
      .rec-card-confidence {
        font-size: 10px;
        font-family: monospace;
        color: #999;
        display: none;
      }
      .rec-card-confidence.visible {
        display: block;
      }
      .rec-card-title {
        font-weight: 600;
        font-size: 15px;
        color: var(--text-primary, #1a1a2e);
        margin: 0;
        line-height: 1.3;
      }
      .rec-card-desc {
        font-size: 13px;
        color: var(--text-secondary, #666);
        line-height: 1.4;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .rec-card-meta {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 12px;
        color: var(--text-muted, #aaa);
        margin-top: auto;
        padding-top: 8px;
        border-top: 1px solid var(--card-border, rgba(0,0,0,0.04));
      }
      .rec-card-meta i {
        font-size: 11px;
      }
      .rec-empty {
        font-size: 14px;
        color: var(--text-secondary, #888);
        padding: 12px 0;
      }
      .rec-toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #111;
        color: #fff;
        padding: 10px 14px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: recFadeIn 0.3s ease;
      }
      @keyframes recFadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      body.dark-mode .rec-panel {
        background: linear-gradient(135deg, rgba(123,97,255,0.1), rgba(235,104,53,0.06));
        border-color: rgba(123,97,255,0.2);
      }
      body.dark-mode .rec-card {
        background: var(--card-bg-dark, #1e1e2f);
        border-color: var(--card-border-dark, rgba(255,255,255,0.06));
      }
      body.dark-mode .rec-card-title {
        color: var(--text-primary-dark, #f0f0f5);
      }
      body.dark-mode .rec-card-desc {
        color: var(--text-secondary-dark, #aaa);
      }
    `;
    document.head.appendChild(style);
  }

  function showToast(message) {
    const existing = document.querySelector('.rec-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'rec-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
  }

  function inferCategoryFromPage() {
    const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const map = {
      'button.html': 'buttons',
      'buttons.html': 'buttons',
      'inputs.html': 'forms',
      'forms.html': 'forms',
      'cards.html': 'cards',
      'navbar.html': 'navigation',
      'navigation.html': 'navigation',
      'badges.html': 'data-display',
      'alerts.html': 'feedback',
      'notifications-premium.html': 'feedback',
      'notifications.html': 'feedback',
      'dashboard.html': 'dashboards',
      'charts.html': 'data-display',
      'table.html': 'data-display',
      'tables.html': 'data-display',
      'pricing.html': 'commerce',
      'ecommerce.html': 'commerce',
      'testimonials.html': 'other',
      'gallery.html': 'layout',
      'hero.html': 'layout',
      'footer.html': 'layout',
      'loaders.html': 'other',
      'loader.html': 'other',
      'timeline.html': 'data-display',
      'map.html': 'data-display',
      'menu.html': 'navigation',
      'tabs.html': 'navigation',
      'auth.html': 'authentication',
      'checkbox.html': 'forms',
      'radiobutton.html': 'buttons',
      'switches.html': 'buttons',
      'toggles.html': 'buttons',
      'color.html': 'other',
      'div.html': 'other',
      'hover.html': 'other',
      'search.html': 'other',
      'widgets.html': 'other',
      'error.html': 'other',
      'article.html': 'other',
      'blog.html': 'other',
      'about.html': 'other',
      'faq.html': 'other',
      'documentation.html': 'other',
      'contact.html': 'other',
      'terms.html': 'other',
      'license.html': 'other',
      'privacy.html': 'other',
      'settings.html': 'other',
      'favorites.html': 'other',
      'mycollection.html': 'other',
      'profile-components.html': 'other',
      'dropdown-components.html': 'navigation',
      'calendar.html': 'data-display',
      'calendarcomponent.html': 'data-display',
      'calendar-components.html': 'data-display',
      'notes-components.html': 'data-display',
      'leaderboard-components.html': 'data-display',
      'breadcrumbs.html': 'data-display',
      'empty-state.html': 'other',
      'url-state.html': 'other',
      'test-url-state.html': 'other',
      'test-command-palette.html': 'other',
      'test-security-csp.html': 'other',
      'step-indicators.html': 'other',
      'progress-premium.html': 'other',
      'ratings-premium.html': 'other',
      'filters-premium.html': 'other',
      'admin-panel.html': 'dashboards',
      'flipcards.html': 'cards',
      'ui-cards.html': 'cards',
      'popover.html': 'feedback',
      'popovers.html': 'feedback',
      'snackbar.html': 'feedback',
      'toasts.html': 'feedback',
      'toast.html': 'feedback',
      'tooltip.html': 'other',
      'spotlightui.html': 'other',
      'retroui.html': 'other',
      'kanbanui.html': 'other',
      'chatui.html': 'other',
      'musicicon.html': 'other',
      'command-palette.html': 'other',
      'compare.html': 'other',
      'sandbox.html': 'other',
      'playground.html': 'other',
      'welcome.html': 'other',
      'index.html': null // home page — skip
    };
    return map[page] || null;
  }

  function buildPanel(recommendations) {
    const panel = document.createElement('div');
    panel.id = PANEL_ID;
    panel.className = 'rec-panel';

    const header = document.createElement('div');
    header.className = 'rec-panel-header';

    const titleBlock = document.createElement('div');
    const title = document.createElement('h3');
    title.className = 'rec-panel-title';
    title.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> You might also like';
    const sub = document.createElement('p');
    sub.className = 'rec-panel-sub';
    sub.textContent = 'Complementary components based on category relationships and usage patterns';
    titleBlock.appendChild(title);
    titleBlock.appendChild(sub);

    const actions = document.createElement('div');
    actions.className = 'rec-panel-actions';

    if (DEV_MODE) {
      const debug = document.createElement('span');
      debug.className = 'rec-panel-debug visible';
      debug.textContent = 'dev';
      actions.appendChild(debug);
    }

    const clearBtn = document.createElement('button');
    clearBtn.className = 'rec-dismiss-btn';
    clearBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Reset';
    clearBtn.title = 'Restore all dismissed recommendations';
    clearBtn.addEventListener('click', () => {
      ComponentRecommendations.clearAllDismissed();
      render();
      showToast('Recommendations restored');
    });
    actions.appendChild(clearBtn);

    header.appendChild(titleBlock);
    header.appendChild(actions);

    const grid = document.createElement('div');
    grid.className = 'rec-grid';

    if (!recommendations || recommendations.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'rec-empty';
      empty.textContent = 'No recommendations available for this category yet.';
      grid.appendChild(empty);
    } else {
      recommendations.forEach((rec) => {
        const item = rec.representative;
        if (!item) return;

        const card = document.createElement('a');
        card.className = 'rec-card';
        card.href = item.path || '#';
        card.setAttribute('data-rec-id', item.id);
        card.setAttribute('data-rec-category', rec.category);

        const top = document.createElement('div');
        top.className = 'rec-card-top';

        const catLabel = document.createElement('span');
        catLabel.className = 'rec-card-category';
        catLabel.textContent = rec.category;

        const conf = document.createElement('span');
        conf.className = 'rec-card-confidence' + (DEV_MODE ? ' visible' : '');
        conf.textContent = rec.confidence + '%';

        top.appendChild(catLabel);
        top.appendChild(conf);

        const t = document.createElement('h4');
        t.className = 'rec-card-title';
        t.textContent = item.title || item.id;

        const desc = document.createElement('p');
        desc.className = 'rec-card-desc';
        desc.textContent = item.description || `Explore ${rec.itemCount} ${rec.category} components`;

        const meta = document.createElement('div');
        meta.className = 'rec-card-meta';
        meta.innerHTML = `<span><i class="fa-solid fa-layer-group"></i> ${rec.itemCount} items</span>`;

        const dismissBtn = document.createElement('button');
        dismissBtn.className = 'rec-dismiss-btn';
        dismissBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        dismissBtn.title = 'Dismiss this recommendation';
        dismissBtn.style.marginLeft = 'auto';
        dismissBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          ComponentRecommendations.dismiss(item.id);
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.remove();
            if (grid.children.length === 0) {
              render();
            }
          }, 200);
          showToast('Dismissed. Reset to restore.');
        });

        meta.appendChild(dismissBtn);

        card.appendChild(top);
        card.appendChild(t);
        card.appendChild(desc);
        card.appendChild(meta);

        grid.appendChild(card);
      });
    }

    panel.appendChild(header);
    panel.appendChild(grid);
    return panel;
  }

  function findInsertPoint() {
    const main = document.querySelector(CONTAINER_SELECTOR);
    if (!main) return document.querySelector(FALLBACK_SELECTOR);

    const grid = main.querySelector('.button-grid, .card-grid, .component-grid, .features, [class*="grid"]');
    if (grid && grid.parentNode === main) {
      return grid;
    }

    const footer = main.querySelector('footer, .footer');
    if (footer) return footer;

    return main.lastElementChild;
  }

  function removeExisting() {
    const existing = document.getElementById(PANEL_ID);
    if (existing) existing.remove();
  }

  function render() {
    const engine = window.ComponentRecommendations;
    if (!engine) {
      console.warn('RecommendationsUI: ComponentRecommendations not loaded');
      return;
    }

    const category = inferCategoryFromPage();
    if (!category) {
      return;
    }

    engine.recordPageView(category);

    const recs = engine.getForCategory(category, { limit: MAX_ITEMS });
    if (!recs.length) return;

    ensureStyles();
    removeExisting();

    const panel = buildPanel(recs);
    const insertAfter = findInsertPoint();
    if (insertAfter && insertAfter.parentNode) {
      insertAfter.parentNode.insertBefore(panel, insertAfter.nextSibling);
    } else {
      const main = document.querySelector(CONTAINER_SELECTOR) || document.body;
      main.appendChild(panel);
    }
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', render);
    } else {
      render();
    }
  }

  return {
    init,
    render,
    inferCategoryFromPage
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RecommendationsUI;
}

window.RecommendationsUI = RecommendationsUI;