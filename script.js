/**
 * UIverse - Backward Compatibility Layer
 * 
 * This file provides legacy global functions for backward compatibility.
 * All functionality has been refactored into modular components.
 * 
 * NEW CODE: Use the modular approach via UIverse.modules or direct module objects
 * LEGACY CODE: These global functions remain for compatibility with inline onclick handlers
 */

// Ensure theme API is available on pages that include only script.js
(function(){
  if (!window.ThemeAPI) {
    const s = document.createElement('script');
    s.src = '/js/theme-api.js';
    s.defer = true;
    document.head.appendChild(s);
  }
})();

// =====================================================================
// LEGACY GLOBAL FUNCTIONS (BACKWARD COMPATIBILITY)
// =====================================================================

/**
 * Toggle code block visibility
 * @deprecated Use CodeTools module or toggleCode function
 */
window.toggleCode = window.toggleCode || function(id, btn) {
  if (typeof CodeTools !== 'undefined' && CodeTools.toggleCode) {
    CodeTools.toggleCode(id);
    if (btn) {
      const isOpen = document.getElementById(id)?.classList.contains('show');
      const showHtml = btn.getAttribute('data-show') || '<i class="fa-solid fa-code"></i> View Code';
      const hideHtml = btn.getAttribute('data-hide') || '<i class="fa-solid fa-eye-slash"></i> Hide Code';
      btn.innerHTML = isOpen ? hideHtml : showHtml;
    }
  }
};

/**
 * Copy code to clipboard
 * @deprecated Use CodeTools module
 */
window.copyCode = window.copyCode || function(id, btn) {
  if (typeof CodeTools !== 'undefined' && CodeTools.copyCode) {
    CodeTools.copyCode(id, btn);
  }
};

/**
 * Copy color value to clipboard
 * @deprecated Use CodeTools module
 */
window.copyColor = window.copyColor || function(color) {
  if (typeof CodeTools !== 'undefined' && CodeTools.copyColor) {
    CodeTools.copyColor(color);
  }
};

/**
 * Copy RGB value to clipboard
 * @deprecated Use CodeTools module
 */
window.copyRGB = window.copyRGB || function(value) {
  if (typeof CodeTools !== 'undefined' && CodeTools.copyRGB) {
    CodeTools.copyRGB(value);
  }
};

/**
 * Toggle sidebar visibility
 * @deprecated Use Sidebar module
 */
window.toggleSidebar = window.toggleSidebar || function() {
  if (typeof Sidebar !== 'undefined' && Sidebar.toggle) {
    Sidebar.toggle();
  }
};

/**
 * Alias for toggleSidebar
 * @deprecated Use Sidebar module
 */
window.toggleMenu = window.toggleMenu || function() {
  window.toggleSidebar();
};

/**
 * Close sidebar
 * @deprecated Use Sidebar module
 */
window.closeSidebar = window.closeSidebar || function() {
  if (typeof Sidebar !== 'undefined' && Sidebar.close) {
    Sidebar.close();
  }
};

/**
 * Scroll to top of page
 * @deprecated Use Scroll module
 */
window.scrollToTop = window.scrollToTop || function() {
  if (typeof Scroll !== 'undefined' && Scroll.scrollToTop) {
    Scroll.scrollToTop();
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/**
 * Open popup/modal
 * @deprecated Use Popup module
 */
window.openPopup = window.openPopup || function() {
  if (typeof Popup !== 'undefined' && Popup.open) {
    Popup.open();
  }
};

/**
 * Close popup/modal
 * @deprecated Use Popup module
 */
window.closePopup = window.closePopup || function() {
  if (typeof Popup !== 'undefined' && Popup.close) {
    Popup.close();
  }
};

/**
 * Close alert by ID
 * @deprecated Use Alerts module
 */
window.closeAlert = window.closeAlert || function(alertId) {
  if (typeof Alerts !== 'undefined' && Alerts.close) {
    Alerts.close(alertId);
  }
};

/**
 * Handle newsletter subscription
 * @deprecated Use Alerts module
 */
window.subscribe = window.subscribe || function(e) {
  if (typeof Alerts !== 'undefined' && Alerts.subscribe) {
    Alerts.subscribe(e);
  }
};

/**
 * Add component to collection
 * @deprecated Use ComponentGallery module
 */
window.addToCollection = window.addToCollection || function(name, html) {
  if (typeof ComponentGallery !== 'undefined' && ComponentGallery.addToCollection) {
    ComponentGallery.addToCollection(name, html);
  }
};

/**
 * Handle search with routing
 * @deprecated Use ComponentGallery or Search module
 */
window.handleSearch = window.handleSearch || function(event) {
  if (typeof ComponentGallery !== 'undefined') {
    if (event.key === 'Enter') {
      ComponentGallery._handleSearchEnter(event);
    }
  } else if (typeof Search !== 'undefined' && Search.handleRouting) {
    Search.handleRouting(event);
  }
}

// Scroll to top
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function initScrollTop() { const btn = document.getElementById('scrollTopBtn'); if (!btn) return; window.addEventListener('scroll', () => { const visible = window.scrollY > 50; btn.style.display = visible ? 'block' : 'none'; btn.classList.toggle('visible', window.scrollY > 400); document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 40); }); btn.addEventListener('click', () => scrollToTop()); }

// Progress bar
function initProgressBar() { const bar = document.getElementById('progressBar'); if (!bar) return; window.addEventListener('scroll', () => { const scrollTop = document.documentElement.scrollTop; const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; bar.style.width = ((scrollTop / Math.max(height, 1)) * 100) + '%'; }); }

// Alerts & subscribe
function closeAlert(alertId) { const a = document.getElementById(alertId); if (a) a.style.display = 'none'; }
function subscribe(e) { e.preventDefault(); showToastSafe('Subscribed successfully! 🎉'); }

// Init
window.addEventListener('DOMContentLoaded', () => {
  // Popup reference
  window.popup = document.getElementById('popup');
  // Isolate component styles by wrapping component cards in a Shadow DOM.
  // This keeps component markup scoped and prevents accidental global CSS leakage.
  function initShadowWrap() {
    try {
      const styleHrefs = ['/css/main.css', '/style.css'];
      document.querySelectorAll('.component-card').forEach((card, idx) => {
        if (card.dataset.uiverseIsolated === '1') return;
        // create a host element to hold the shadow root
        const host = document.createElement('div');
        host.className = 'uiverse-component-host';
        // move attributes that may be used for identification
        host.dataset.originalIndex = idx;

        // move card children into host's shadow root
        const shadow = host.attachShadow({ mode: 'open' });

        // add same CSS links inside shadow to preserve component visuals but keep them scoped
        styleHrefs.forEach(href => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          shadow.appendChild(link);
        });

        // copy the innerHTML of the card into the shadow
        const wrapper = document.createElement('div');
        wrapper.className = 'uiverse-component-inner';
        wrapper.innerHTML = card.innerHTML;
        shadow.appendChild(wrapper);

        // clear original card and append host
        card.innerHTML = '';
        card.appendChild(host);
        card.dataset.uiverseIsolated = '1';
      });
    } catch (e) { console.warn('initShadowWrap failed', e); }
  }

  initShadowWrap();

  initAccessibilityHardeningLegacy();
  initSidebar();
  initLiveSandboxes();
  initDarkMode();
  initAccessibilityMode();
  initScrollTop();
  initProgressBar();
  initSearchFilter();
  createFilterUI();  // Initialize filter UI

  // Attach global search handler
  const searchEl = document.getElementById('searchInput');
  if (searchEl) searchEl.addEventListener('keydown', handleSearch);

  // Attach optional form-card buttons toast safely
  try { const btns = document.querySelectorAll('.form-card button'); if (btns[0]) btns[0].addEventListener('click', () => showToastSafe('Login button clicked')); if (btns[1]) btns[1].addEventListener('click', () => showToastSafe('Signup button clicked')); if (btns[2]) btns[2].addEventListener('click', () => showToastSafe('Message sent')); if (btns[3]) btns[3].addEventListener('click', () => showToastSafe('Form submitted')); } catch (e) {}

  // Newsletter subscribe: delegate to centralized subscribe(e)
  try {
    const newsBtn = document.querySelector('.newsletter-form button');
    if (newsBtn) newsBtn.addEventListener('click', (ev) => subscribe(ev));
  } catch (e) {}

  // Menu toggle (legacy id)
  const menuToggle = document.getElementById('menuToggle'); const sidebarEl = document.querySelector('.sidebar'); if (menuToggle && sidebarEl) menuToggle.addEventListener('click', () => sidebarEl.classList.toggle('hide'));
});

// Register service worker for offline-first behavior
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('ServiceWorker registered:', reg.scope);
    }).catch(err => {
      console.warn('ServiceWorker registration failed:', err);
    });
  });
}

// Load offline sync helpers (idb + collection sync) for collection features
(function(){
  if (!window.UIV || !window.UIV.idb) {
    const s = document.createElement('script'); s.src = '/js/idb.js'; s.defer = true; document.head.appendChild(s);
  }
  if (!window.CollectionSync) {
    const s2 = document.createElement('script'); s2.src = '/js/collection-sync.js'; s2.defer = true; document.head.appendChild(s2);
  }
})();

// Wire up collectible buttons and elements to enqueue offline actions
window.addEventListener('DOMContentLoaded', () => {
  try {
    document.querySelectorAll('[data-collectible]').forEach(el => {
      const btn = el.querySelector('.collect-btn') || el;
      btn.addEventListener('click', async (ev) => {
        ev.preventDefault();
        const id = el.dataset.collectible;
        const action = btn.dataset.action || 'add';
        if (window.CollectionSync) {
          if (action === 'remove') {
            await window.CollectionSync.enqueueRemove(id);
            showToastSafe('Removed from collection (offline-first)');
          } else {
            const item = { id: id, html: el.innerHTML };
            await window.CollectionSync.enqueueAdd(item);
            showToastSafe('Added to collection (offline-first)');
          }
        } else {
          showToastSafe('Collection sync not available');
        }
      });
    });
    // provide a manual sync trigger button if present
    const syncBtn = document.getElementById('syncCollectionsBtn');
    if (syncBtn) syncBtn.addEventListener('click', () => {
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage('trigger-sync');
      }
      if (window.CollectionSync) window.CollectionSync.processQueueOnce().then(r => showToastSafe(`Synced ${r.synced} items`)).catch(()=>{});
    });
  } catch (e) { /* ignore */ }
});


// ================= SEARCH (ROUTING) =================
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();

/**
 * If you see console warnings about missing modules:
 * 1. Ensure js/registry.js is loaded
 * 2. Ensure all feature modules are loaded
 * 3. Ensure js/bootstrap.js is loaded last
 * 4. Check browser console for specific module load errors
 */

if (window.UIVERSE_DEBUG) {
  console.info('[script.js] Backward compatibility layer loaded. All functionality is modularized via UIverse.modules');
}
const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {

  if (window.innerWidth > 900) {
    sidebar.classList.toggle("collapsed");
  } else {
    document.body.classList.toggle("sidebar-open");
  }

});