/**
 * Sidebar Feature
 * Manages sidebar navigation, state, and active link highlighting
 */

const Sidebar = {
  _state: {
    initialized: false,
    listeners: []
  },

  getComponentsIndexRoute() {
    const homeAnchor = document.querySelector('.sidebar a[href$="index.html"]');
    const homeHref = homeAnchor?.getAttribute('href') || 'index.html';
    if (/index\.html$/i.test(homeHref)) {
      return homeHref.replace(/index\.html$/i, 'components/index.html');
    }
    return 'components/index.html';
  },

  ensureComponentsIndexLink() {
    const sidebarList = document.querySelector('.sidebar ul');
    if (!sidebarList) return;

    const hasLink = Array.from(sidebarList.querySelectorAll('a')).some((anchor) => {
      const href = (anchor.getAttribute('href') || '').toLowerCase();
      return href.includes('components/index.html');
    });

    if (hasLink) return;

    const li = document.createElement('li');
    const a = document.createElement('a');
    const icon = document.createElement('i');
    const label = document.createElement('span');

    a.setAttribute('href', this.getComponentsIndexRoute());
    icon.className = 'fa-solid fa-table-cells-large';
    label.textContent = 'Components Index';

    a.appendChild(icon);
    a.appendChild(label);
    li.appendChild(a);
    sidebarList.appendChild(li);
  },

  getFavoritesRoute() {
    const homeAnchor = document.querySelector('.sidebar a[href$="index.html"]');
    const homeHref = homeAnchor?.getAttribute('href') || 'index.html';
    if (/index\.html$/i.test(homeHref)) {
      return homeHref.replace(/index\.html$/i, 'favorites.html');
    }
    return 'favorites.html';
  },

  ensureFavoritesLink() {
    const sidebarList = document.querySelector('.sidebar ul');
    if (!sidebarList) return;

    const hasLink = Array.from(sidebarList.querySelectorAll('a')).some((anchor) => {
      const href = (anchor.getAttribute('href') || '').toLowerCase();
      return href.includes('favorites.html');
    });

    if (hasLink) return;

    const li = document.createElement('li');
    const a = document.createElement('a');
    const icon = document.createElement('i');
    const label = document.createElement('span');
    const count = document.createElement('span');

    a.setAttribute('href', this.getFavoritesRoute());
    icon.className = 'fa-solid fa-star';
    label.textContent = 'Favorites';
    count.className = 'favorites-count-badge';
    count.style.marginLeft = 'auto';
    count.style.opacity = '0.9';
    count.style.fontSize = '11px';
    count.textContent = '0';

    a.appendChild(icon);
    a.appendChild(label);
    a.appendChild(count);
    li.appendChild(a);
    sidebarList.appendChild(li);
  },

  getFavoritesCount() {
    try {
      const raw = localStorage.getItem('uiVerseFavorites');
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.length : 0;
    } catch (error) {
      return 0;
    }
  },

  syncFavoritesCount() {
    const badge = document.querySelector('.favorites-count-badge');
    if (!badge) return;
    badge.textContent = String(this.getFavoritesCount());
  },

  initFavoritesCountSync() {
    if (this._state.listeners.some((entry) => entry.key === 'favorites-count-sync')) return;

    const onFavoritesChanged = () => this.syncFavoritesCount();
    document.addEventListener('uiverse:favorites:changed', onFavoritesChanged);
    window.addEventListener('storage', onFavoritesChanged);
    this._state.listeners.push({ key: 'favorites-count-sync', el: document, event: 'uiverse:favorites:changed', handler: onFavoritesChanged });
    this._state.listeners.push({ key: 'favorites-count-sync-storage', el: window, event: 'storage', handler: onFavoritesChanged });

    this.syncFavoritesCount();
  },

  /**
   * Toggle sidebar visibility
   */
  toggle() {
    const backdrop = document.querySelector(".sidebar-backdrop");

    if (window.innerWidth <= 900) {
      document.body.classList.toggle("sidebar-open");
      backdrop?.classList.toggle("active");
    } else {
      const isHidden = document.body.classList.toggle("sidebar-hidden");
      sessionStorage.setItem("sidebarHidden", isHidden ? "1" : "0");
    }
  },

  /**
   * Update active link in sidebar based on current page
   */
  updateActiveLink() {
    const currentPath = new URL(window.location.href).pathname.toLowerCase();

    document.querySelectorAll(".sidebar ul li").forEach((li) => {
      const anchor = li.querySelector("a");
      if (!anchor) return;

      const anchorPath = new URL(anchor.getAttribute("href") || "index.html", window.location.href)
        .pathname
        .toLowerCase();

      if (anchorPath === currentPath) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  },

  /**
   * Restore sidebar state from session storage
   */
  restoreState() {
    if (window.innerWidth > 900 && sessionStorage.getItem("sidebarHidden") === "1") {
      document.body.classList.add("sidebar-hidden");
    }
  },

  /**
   * Close sidebar when link is clicked on mobile
   */
  initLinkClose() {
    if (this._state.listeners.some((entry) => entry.key === 'link-close')) return;

    const onClick = (event) => {
      const anchor = event.target.closest(".sidebar ul li a");
      if (!anchor) return;

      if (window.innerWidth <= 900) {
        document.body.classList.remove("sidebar-open");
        document.querySelector(".sidebar-backdrop")?.classList.remove("active");
      }
    };

    document.addEventListener("click", onClick);
    this._state.listeners.push({ key: 'link-close', el: document, event: "click", handler: onClick });
  },

  /**
   * Toggle menu (alternative method for backward compatibility)
   */
  toggleMenu() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
  },

  /**
   * Initialize sidebar feature
   */
  init() {
    if (this._state.initialized) return;

    this.restoreState();
    this.ensureComponentsIndexLink();
    this.ensureFavoritesLink();
    this.initFavoritesCountSync();
    this.updateActiveLink();
    this.initLinkClose();

    // Expose to global for backward compatibility
    window.toggleSidebar = () => { this.toggle(); this._syncMenuToggleAttributes(); };
    window.toggleMenu = () => this.toggleMenu();

    // Ensure menu-toggle buttons have accessible attributes
    this._ensureMenuToggleA11y();

    // Sync initial state
    this._syncMenuToggleAttributes();

    this._state.initialized = true;
  },

  _ensureMenuToggleA11y() {
    const toggles = Array.from(document.querySelectorAll('.menu-toggle'));
    toggles.forEach((btn) => {
      if (!btn.hasAttribute('aria-controls')) btn.setAttribute('aria-controls', 'sidebar');
      if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
      if (!btn.hasAttribute('aria-label')) btn.setAttribute('aria-label', 'Toggle sidebar');
      if (!btn.hasAttribute('type')) btn.setAttribute('type', 'button');
    });
  },

  _syncMenuToggleAttributes() {
    const isOpen = document.body.classList.contains('sidebar-open') || document.body.classList.contains('sidebar-hidden') === false;
    const toggles = Array.from(document.querySelectorAll('.menu-toggle'));
    toggles.forEach((btn) => {
      try { btn.setAttribute('aria-expanded', String(isOpen === true)); } catch (e) {}
    });
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.initialized = false;
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sidebar;
}
