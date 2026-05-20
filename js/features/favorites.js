/**
 * Favorites Feature
 * Handles bookmarking components and rendering favorites page from localStorage
 */

const Favorites = {
  _storageKey: 'uiVerseFavorites',
  _legacyKeys: ['favorites'],
  _initialized: false,

  init() {
    if (this._initialized) return;

    this._migrateLegacyFavorites();
    this._decorateComponentCards();
    this._renderFavoritesPage();
    this._wireStorageSync();
    this._dispatchChange();

    this._initialized = true;
  },

  _normalizeId(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  _normalizePath(pathname) {
    return String(pathname || '')
      .replace(/^\/+/, '')
      .replace(/\\/g, '/')
      .toLowerCase();
  },

  _getCurrentPagePath() {
    const pathname = new URL(window.location.href).pathname;
    const normalized = this._normalizePath(pathname);
    return normalized || 'index.html';
  },

  _readStorage() {
    try {
      const raw = localStorage.getItem(this._storageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];

      return parsed
        .map((item) => {
          if (!item || typeof item !== 'object') return null;
          const id = this._normalizeId(item.id || item.componentId);
          if (!id) return null;

          return {
            id,
            title: String(item.title || 'Component').trim(),
            category: String(item.category || 'component').trim(),
            tags: Array.isArray(item.tags) ? item.tags.map((tag) => String(tag).trim()).filter(Boolean) : [],
            page: this._normalizePath(item.page || item.path || this._getCurrentPagePath()),
            savedAt: item.savedAt || new Date().toISOString()
          };
        })
        .filter(Boolean);
    } catch (error) {
      if (window.UIVERSE_DEBUG) {
        console.error('[Favorites] Failed to read storage', error);
      }
      return [];
    }
  },

  _writeStorage(items) {
    const deduped = [];
    const seen = new Set();

    (items || []).forEach((item) => {
      const id = this._normalizeId(item?.id);
      if (!id || seen.has(id)) return;

      seen.add(id);
      deduped.push({
        id,
        title: String(item.title || 'Component').trim(),
        category: String(item.category || 'component').trim(),
        tags: Array.isArray(item.tags) ? item.tags.map((tag) => String(tag).trim()).filter(Boolean) : [],
        page: this._normalizePath(item.page || item.path || this._getCurrentPagePath()),
        savedAt: item.savedAt || new Date().toISOString()
      });
    });

    localStorage.setItem(this._storageKey, JSON.stringify(deduped));
    this._dispatchChange();
    return deduped;
  },

  _migrateLegacyFavorites() {
    const existing = this._readStorage();
    if (existing.length > 0) return;

    this._legacyKeys.forEach((key) => {
      try {
        const raw = localStorage.getItem(key);
        const parsed = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(parsed) || parsed.length === 0) return;

        const migrated = parsed
          .map((item) => {
            if (typeof item === 'string') {
              const id = this._normalizeId(item);
              if (!id) return null;
              return {
                id,
                title: 'Saved Component',
                category: 'component',
                tags: [],
                page: 'index.html',
                savedAt: new Date().toISOString()
              };
            }

            if (!item || typeof item !== 'object') return null;
            const id = this._normalizeId(item.id || item.componentId);
            if (!id) return null;
            return {
              id,
              title: String(item.title || 'Saved Component').trim(),
              category: String(item.category || 'component').trim(),
              tags: Array.isArray(item.tags) ? item.tags : [],
              page: this._normalizePath(item.page || item.path || 'index.html'),
              savedAt: item.savedAt || new Date().toISOString()
            };
          })
          .filter(Boolean);

        if (migrated.length > 0) {
          this._writeStorage(migrated);
        }
      } catch (error) {
        if (window.UIVERSE_DEBUG) {
          console.error('[Favorites] Legacy migration failed', error);
        }
      }
    });
  },

  getFavorites() {
    return this._readStorage();
  },

  getFavoriteIds() {
    return this._readStorage().map((item) => item.id);
  },

  isFavoriteId(componentId) {
    const id = this._normalizeId(componentId);
    if (!id) return false;
    return this.getFavoriteIds().includes(id);
  },

  _buildCardRecord(card) {
    const label = card.querySelector('.card-label, h3, h2, h4')?.textContent?.trim();
    const category = (card.dataset.cat || 'component').trim();
    const tags = String(card.dataset.tags || '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    const id = this._normalizeId(
      card.dataset.componentId || [this._getCurrentPagePath(), label || card.dataset.name || card.textContent?.slice(0, 48)].join(' ')
    );

    if (!id) return null;

    return {
      id,
      title: label || card.dataset.name || 'Component',
      category,
      tags,
      page: this._getCurrentPagePath(),
      savedAt: new Date().toISOString()
    };
  },

  _setButtonState(button, isFavorite) {
    if (!button) return;
    button.classList.toggle('is-favorited', Boolean(isFavorite));
    button.setAttribute('aria-pressed', isFavorite ? 'true' : 'false');
    button.setAttribute('title', isFavorite ? 'Remove bookmark' : 'Save bookmark');
    button.innerHTML = isFavorite
      ? '<i class="fa-solid fa-star"></i>'
      : '<i class="fa-regular fa-star"></i>';
  },

  _toggleFavorite(record) {
    const favorites = this._readStorage();
    const exists = favorites.some((item) => item.id === record.id);

    if (exists) {
      this._writeStorage(favorites.filter((item) => item.id !== record.id));
      if (typeof showToast === 'function') showToast(record.title + ' removed from favorites');
      return false;
    }

    this._writeStorage([record, ...favorites]);
    if (typeof showToast === 'function') showToast(record.title + ' added to favorites');
    return true;
  },

  toggleFromCard(card) {
    const record = this._buildCardRecord(card);
    if (!record) return false;
    const nextState = this._toggleFavorite(record);
    this._syncCardButtons();
    return nextState;
  },

  _decorateComponentCards() {
    const cards = Array.from(document.querySelectorAll('.component-card'));
    if (cards.length === 0) return;

    cards.forEach((card, index) => {
      if (!card.dataset.componentId || !card.dataset.componentId.trim()) {
        const fallbackLabel = card.querySelector('.card-label, h3, h2, h4')?.textContent || `component-${index + 1}`;
        card.dataset.componentId = this._normalizeId(`${this._getCurrentPagePath()} ${fallbackLabel}`);
      }

      if (card.querySelector('.favorite-btn')) return;

      const actions = card.querySelector('.actions') || (() => {
        const container = document.createElement('div');
        container.className = 'actions';
        card.appendChild(container);
        return container;
      })();

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'action-btn favorite-btn icon-only';
      button.setAttribute('aria-label', 'Toggle favorite bookmark');
      button.addEventListener('click', () => this.toggleFromCard(card));

      actions.insertBefore(button, actions.firstChild || null);
    });

    this._injectStyles();
    this._syncCardButtons();
  },

  _syncCardButtons() {
    document.querySelectorAll('.component-card').forEach((card) => {
      const button = card.querySelector('.favorite-btn');
      if (!button) return;
      this._setButtonState(button, this.isFavoriteId(card.dataset.componentId));
    });
  },

  _renderFavoritesPage() {
    const root = document.getElementById('favoritesList');
    if (!root) return;

    const favorites = this._readStorage().sort((a, b) => Date.parse(b.savedAt) - Date.parse(a.savedAt));

    if (favorites.length === 0) {
      root.innerHTML = '<div class="favorites-empty">No favorites yet. Bookmark component cards with the star icon.</div>';
      return;
    }

    root.innerHTML = favorites
      .map((item) => {
        const pageHref = item.page || 'index.html';
        const tags = (item.tags || []).slice(0, 4).map((tag) => `<span class="favorite-tag">${tag}</span>`).join('');
        const savedDate = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(item.savedAt));

        let previewHTML = '';
        const cat = String(item.category).toLowerCase();
        if (cat.includes('button')) {
          previewHTML = `<div class="favorite-preview"><button class="mock-btn">Hover Me</button></div>`;
        } else if (cat.includes('card')) {
          previewHTML = `<div class="favorite-preview"><div class="mock-card"><div class="mock-line"></div><div class="mock-line short"></div></div></div>`;
        } else if (cat.includes('navbar')) {
          previewHTML = `<div class="favorite-preview"><div class="mock-nav"><div class="mock-nav-item"></div><div class="mock-nav-item"></div><div class="mock-nav-item"></div></div></div>`;
        } else {
          previewHTML = `<div class="favorite-preview"><div class="mock-generic"><i class="fa-solid fa-layer-group"></i></div></div>`;
        }

        return `
          <article class="favorite-card" data-favorite-id="${item.id}">
            <div class="favorite-head">
              <h3>${item.title}</h3>
              <button type="button" class="remove-favorite-btn" data-remove-favorite="${item.id}" aria-label="Remove favorite">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            ${previewHTML}
            <p class="favorite-meta">${item.category} • Saved ${savedDate}</p>
            <div class="favorite-tags">${tags}</div>
            <a class="favorite-link" href="${pageHref}">Open Source Page</a>
          </article>
        `;
      })
      .join('');

    root.querySelectorAll('[data-remove-favorite]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = this._normalizeId(button.getAttribute('data-remove-favorite'));
        const updated = this._readStorage().filter((item) => item.id !== id);
        this._writeStorage(updated);
        this._renderFavoritesPage();
      });
    });
  },

  _dispatchChange() {
    const count = this._readStorage().length;
    document.dispatchEvent(new CustomEvent('uiverse:favorites:changed', { detail: { count } }));
  },

  _wireStorageSync() {
    window.addEventListener('storage', (event) => {
      if (event.key !== this._storageKey) return;
      this._syncCardButtons();
      this._renderFavoritesPage();
      this._dispatchChange();
    });
  },

  _injectStyles() {
    if (document.getElementById('uiverse-favorites-styles')) return;

    const style = document.createElement('style');
    style.id = 'uiverse-favorites-styles';
    style.textContent = `
      .favorite-btn.icon-only {
        min-width: 42px;
        width: 42px;
        height: 42px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .favorite-btn.icon-only i {
        margin: 0;
      }

      .favorite-btn.is-favorited {
        border-color: rgba(255, 193, 7, 0.45);
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.18), rgba(255, 171, 0, 0.24));
        color: #ffcf54;
      }

      .favorites-empty {
        padding: 24px;
        border-radius: 12px;
        border: 1px dashed rgba(255, 255, 255, 0.22);
        text-align: center;
        color: #d8d8d8;
      }

      .favorite-card {
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(15, 16, 20, 0.6);
        border-radius: 14px;
        padding: 16px;
        display: grid;
        gap: 10px;
      }

      .favorite-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .favorite-head h3 {
        margin: 0;
        font-size: 1rem;
      }

      .remove-favorite-btn {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        width: 30px;
        height: 30px;
        background: transparent;
        color: #f0f0f0;
        cursor: pointer;
      }

      .favorite-meta {
        margin: 0;
        color: #bdbdbd;
        font-size: 0.85rem;
      }

      .favorite-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .favorite-tag {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 999px;
        padding: 3px 9px;
        font-size: 0.74rem;
        color: #d9d9d9;
      }

      .favorite-link {
        color: #9ed3ff;
        text-decoration: none;
        font-weight: 600;
      }

      .favorite-link:hover {
        text-decoration: underline;
      }

      .favorite-preview {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 0;
        overflow: hidden;
      }
      .mock-btn {
        background: linear-gradient(135deg, #eb6835, #f97316);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s;
      }
      .mock-btn:hover {
        transform: scale(1.05);
      }
      .mock-card {
        width: 80%;
        height: 60%;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        backdrop-filter: blur(4px);
      }
      .mock-line {
        height: 8px;
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
        width: 100%;
      }
      .mock-line.short {
        width: 60%;
      }
      .mock-nav {
        width: 90%;
        height: 30px;
        background: rgba(255,255,255,0.08);
        border-radius: 6px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        gap: 8px;
        backdrop-filter: blur(8px);
      }
      .mock-nav-item {
        width: 20px;
        height: 6px;
        background: rgba(255,255,255,0.2);
        border-radius: 3px;
      }
      .mock-generic {
        font-size: 32px;
        color: rgba(255,255,255,0.2);
      }
    `;

    document.head.appendChild(style);
  }
};

if (typeof window !== 'undefined') {
  window.Favorites = Favorites;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Favorites;
}
