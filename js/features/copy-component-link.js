/**
 * Copy Component Link Feature
 *
 * Adds share/copy actions to component cards and preview areas.
 * Stores recent copied links and integrates with Toast notifications.
 */

const CopyComponentLink = {
  _state: {
    initialized: false,
    storageKey: 'uiVerseCopiedLinks',
    maxHistory: 25,
    history: [],
    observers: [],
    buttonsCreated: 0
  },

  /**
   * Initialize feature
   */
  init() {
    if (this._state.initialized) return;

    this._injectStyles();
    this._loadHistory();

    this._injectCardButtons();
    this._injectPreviewButtons();

    this._observeDOM();

    this._registerKeyboardShortcuts();

    this._state.initialized = true;

    console.info(
      '[CopyComponentLink] initialized'
    );
  },

  /**
   * Load history from localStorage
   */
  _loadHistory() {
    try {
      const raw = localStorage.getItem(
        this._state.storageKey
      );

      this._state.history = raw
        ? JSON.parse(raw)
        : [];
    } catch (err) {
      console.warn(
        '[CopyComponentLink] Failed to load history',
        err
      );

      this._state.history = [];
    }
  },

  /**
   * Save history
   */
  _saveHistory() {
    try {
      localStorage.setItem(
        this._state.storageKey,
        JSON.stringify(
          this._state.history.slice(
            0,
            this._state.maxHistory
          )
        )
      );
    } catch (err) {
      console.warn(
        '[CopyComponentLink] Failed to save history',
        err
      );
    }
  },

  /**
   * Add history item
   */
  _addHistory(item) {
    const filtered =
      this._state.history.filter(
        entry => entry.url !== item.url
      );

    this._state.history = [
      item,
      ...filtered
    ].slice(
      0,
      this._state.maxHistory
    );

    this._saveHistory();
  },

  /**
   * Build share URL
   */
  _buildComponentURL(card) {
    const componentId =
      card.dataset.name ||
      card.id ||
      'component';

    const base =
      window.location.origin;

    const path =
      window.location.pathname;

    return `${base}${path}#${componentId}`;
  },

  /**
   * Copy text helper
   */
  async _copyText(text) {
    try {
      if (
        navigator.clipboard &&
        navigator.clipboard.writeText
      ) {
        await navigator.clipboard.writeText(
          text
        );

        return true;
      }
    } catch (err) {
      console.warn(
        '[CopyComponentLink] Clipboard API failed'
      );
    }

    try {
      const textarea =
        document.createElement(
          'textarea'
        );

      textarea.value = text;

      textarea.style.position =
        'fixed';

      textarea.style.opacity =
        '0';

      document.body.appendChild(
        textarea
      );

      textarea.select();

      document.execCommand(
        'copy'
      );

      textarea.remove();

      return true;
    } catch (err) {
      console.error(
        '[CopyComponentLink] Fallback copy failed',
        err
      );

      return false;
    }
  },

  /**
   * Show toast
   */
  _notify(message) {
    try {
      if (
        typeof Toast !==
          'undefined' &&
        typeof Toast.show ===
          'function'
      ) {
        Toast.show(message);
        return;
      }

      if (
        typeof showToast ===
        'function'
      ) {
        showToast(message);
        return;
      }

      console.log(message);
    } catch (err) {
      console.log(message);
    }
  },

  /**
   * Copy component link
   */
  async copyComponent(card) {
    const url =
      this._buildComponentURL(
        card
      );

    const success =
      await this._copyText(
        url
      );

    if (!success) {
      this._notify(
        'Failed to copy link'
      );

      return;
    }

    const componentName =
      card.dataset.name ||
      'Component';

    this._addHistory({
      url,
      componentName,
      timestamp: Date.now()
    });

    this._notify(
      'Link copied successfully'
    );
  },

  /**
   * Create button
   */
  _createButton(label) {
    const button =
      document.createElement(
        'button'
      );

    button.type = 'button';

    button.className =
      'uiv-copy-link-btn';

    button.innerHTML = `
      <span class="uiv-copy-icon">
        🔗
      </span>
      <span class="uiv-copy-text">
        ${label}
      </span>
    `;

    return button;
  },

  /**
   * Attach button to card
   */
  _attachCardButton(card) {
    if (
      card.querySelector(
        '.uiv-copy-link-btn'
      )
    ) {
      return;
    }

    const button =
      this._createButton(
        'Copy Link'
      );

    button.addEventListener(
      'click',
      event => {
        event.preventDefault();
        event.stopPropagation();

        this.copyComponent(
          card
        );
      }
    );

    card.appendChild(
      button
    );

    this._state.buttonsCreated++;
  },

  /**
   * Inject card buttons
   */
  _injectCardButtons() {
    document
      .querySelectorAll(
        '.component-card'
      )
      .forEach(card => {
        this._attachCardButton(
          card
        );
      });
  
},
  /**
   * Attach copy button to preview areas
   */
  _attachPreviewButton(preview) {
    if (
      preview.querySelector(
        '.uiv-preview-copy-btn'
      )
    ) {
      return;
    }

    const button =
      this._createButton(
        'Copy Preview Link'
      );

    button.classList.add(
      'uiv-preview-copy-btn'
    );

    button.addEventListener(
      'click',
      async event => {
        event.preventDefault();
        event.stopPropagation();

        const url =
          this._buildPreviewURL(
            preview
          );

        const success =
          await this._copyText(
            url
          );

        if (success) {
          this._addHistory({
            url,
            componentName:
              'Preview',
            timestamp:
              Date.now()
          });

          this._notify(
            'Preview link copied'
          );
        }
      }
    );

    preview.appendChild(
      button
    );
  },

  /**
   * Create preview URL
   */
  _buildPreviewURL(
    preview
  ) {
    const previewId =
      preview.id ||
      preview.dataset.preview ||
      'preview';

    return `${window.location.origin}${window.location.pathname}#${previewId}`;
  },

  /**
   * Inject preview buttons
   */
  _injectPreviewButtons() {
    const previews =
      document.querySelectorAll(
        '.preview-box, .card-preview, [class*="-preview"]'
      );

    previews.forEach(
      preview => {
        this._attachPreviewButton(
          preview
        );
      }
    );
  },

  /**
   * Observe DOM changes
   */
  _observeDOM() {
    const observer =
      new MutationObserver(
        mutations => {
          mutations.forEach(
            mutation => {
              mutation.addedNodes.forEach(
                node => {
                  if (
                    !node ||
                    node.nodeType !== 1
                  ) {
                    return;
                  }

                  if (
                    node.matches &&
                    node.matches(
                      '.component-card'
                    )
                  ) {
                    this._attachCardButton(
                      node
                    );
                  }

                  if (
                    node.matches &&
                    node.matches(
                      '.preview-box, .card-preview'
                    )
                  ) {
                    this._attachPreviewButton(
                      node
                    );
                  }

                  const cards =
                    node.querySelectorAll
                      ? node.querySelectorAll(
                          '.component-card'
                        )
                      : [];

                  cards.forEach(
                    card =>
                      this._attachCardButton(
                        card
                      )
                  );

                  const previews =
                    node.querySelectorAll
                      ? node.querySelectorAll(
                          '.preview-box, .card-preview'
                        )
                      : [];

                  previews.forEach(
                    preview =>
                      this._attachPreviewButton(
                        preview
                      )
                  );
                }
              );
            }
          );
        }
      );

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

    this._state.observers.push(
      observer
    );
  },

  /**
   * Register shortcuts
   */
  _registerKeyboardShortcuts() {
    document.addEventListener(
      'keydown',
      event => {
        const isCopyShortcut =
          event.ctrlKey &&
          event.shiftKey &&
          event.key.toLowerCase() ===
            'c';

        if (
          !isCopyShortcut
        ) {
          return;
        }

        const firstCard =
          document.querySelector(
            '.component-card'
          );

        if (
          !firstCard
        ) {
          return;
        }

        event.preventDefault();

        this.copyComponent(
          firstCard
        );
      }
    );
  },

  /**
   * Get copied history
   */
  getHistory() {
    return [
      ...this._state.history
    ];
  },

  /**
   * Clear history
   */
  clearHistory() {
    this._state.history = [];

    localStorage.removeItem(
      this._state.storageKey
    )

    this._notify(
      'Copy history cleared'
    );
  },

  /**
   * Build history panel
   */
  _createHistoryPanel() {
    const panel =
      document.createElement(
        'div'
      );

    panel.className =
      'uiv-copy-history';

    const title =
      document.createElement(
        'h3'
      );

    title.textContent =
      'Recently Copied';

    panel.appendChild(
      title
    );

    const list =
      document.createElement(
        'div'
      );

    list.className =
      'uiv-copy-history-list';

    this._state.history
      .slice(0, 10)
      .forEach(item => {
        const row =
          document.createElement(
            'div'
          );

        row.className =
          'uiv-history-row';

        row.textContent =
          item.componentName ||
          'Component';

        list.appendChild(
          row
        );
      });

    panel.appendChild(
      list
    );

    return panel;
  },

  /**
   * Render history panel
   */
  renderHistoryPanel() {
    const existing =
      document.querySelector(
        '.uiv-copy-history'
      );

    if (existing) {
      existing.remove();
    }

    const panel =
      this._createHistoryPanel();

    const target =
      document.querySelector(
        'main'
      );

    if (target) {
      target.prepend(
        panel
      );
    }
  },
    /**
   * Analytics hook
   */
  _trackEvent(
    eventName,
    payload = {}
  ) {
    try {
      if (
        window.UIVERSE_DEBUG
      ) {
        console.log(
          '[CopyComponentLink]',
          eventName,
          payload
        );
      }

      window.dispatchEvent(
        new CustomEvent(
          'uiverse-copy-link',
          {
            detail: {
              event:
                eventName,
              payload,
              timestamp:
                Date.now()
            }
          }
        )
      );
    } catch (err) {
      console.warn(
        '[CopyComponentLink] analytics error',
        err
      );
    }
  },

  /**
   * Share menu
   */
  _createShareMenu(
    card
  ) {
    const menu =
      document.createElement(
        'div'
      );

    menu.className =
      'uiv-share-menu';

    const actions = [
      {
        label:
          'Copy Component Link',
        action: () =>
          this.copyComponent(
            card
          )
      },
      {
        label:
          'Copy Page Link',
        action: async () => {
          await this._copyText(
            window.location.href
          );

          this._notify(
            'Page link copied'
          );
        }
      },
      {
        label:
          'Copy Component Name',
        action: async () => {
          const name =
            card.dataset.name ||
            'Component';

          await this._copyText(
            name
          );

          this._notify(
            'Component name copied'
          );
        }
      }
    ];

    actions.forEach(
      config => {
        const button =
          document.createElement(
            'button'
          );

        button.type =
          'button';

        button.className =
          'uiv-share-action';

        button.textContent =
          config.label;

        button.addEventListener(
          'click',
          config.action
        );

        menu.appendChild(
          button
        );
      }
    );

    return menu;
  },

  /**
   * Attach share menu
   */
  _attachShareMenu(
    card
  ) {
    if (
      card.querySelector(
        '.uiv-share-menu'
      )
    ) {
      return;
    }

    const menu =
      this._createShareMenu(
        card
      );

    card.appendChild(
      menu
    );
  },

  /**
   * Accessibility
   */
  _enhanceAccessibility() {
    document
      .querySelectorAll(
        '.uiv-copy-link-btn'
      )
      .forEach(btn => {
        btn.setAttribute(
          'aria-label',
          'Copy component link'
        );

        btn.setAttribute(
          'title',
          'Copy component link'
        );
      });

    document
      .querySelectorAll(
        '.uiv-preview-copy-btn'
      )
      .forEach(btn => {
        btn.setAttribute(
          'aria-label',
          'Copy preview link'
        );

        btn.setAttribute(
          'title',
          'Copy preview link'
        );
      });
  },

  /**
   * Style injection
   */
  _injectStyles() {
    if (
      document.getElementById(
        'uiv-copy-link-styles'
      )
    ) {
      return;
    }

    const style =
      document.createElement(
        'style'
      );

    style.id =
      'uiv-copy-link-styles';

    style.textContent = `
      .uiv-copy-link-btn,
      .uiv-preview-copy-btn {
        display:flex;
        align-items:center;
        justify-content:center;
        gap:8px;

        padding:8px 12px;
        margin-top:10px;

        border:none;
        border-radius:8px;

        cursor:pointer;

        font-size:12px;
        font-weight:600;

        transition:
          all .2s ease;
      }

      .uiv-copy-link-btn:hover,
      .uiv-preview-copy-btn:hover {
        transform:
          translateY(-2px);
      }

      .uiv-copy-icon {
        display:flex;
        align-items:center;
      }

      .uiv-copy-history {
        padding:16px;
        margin-bottom:20px;

        border-radius:12px;
      }

      .uiv-copy-history-list {
        display:flex;
        flex-direction:column;
        gap:8px;
      }

      .uiv-history-row {
        padding:8px;
        border-radius:6px;
      }

      .uiv-share-menu {
        display:flex;
        flex-direction:column;
        gap:8px;

        margin-top:12px;
      }

      .uiv-share-action {
        padding:8px 10px;
        border-radius:8px;
        cursor:pointer;
      }

      .uiv-share-action:hover {
        opacity:.9;
      }

      @media (max-width:768px) {
        .uiv-copy-link-btn,
        .uiv-preview-copy-btn {
          width:100%;
        }

        .uiv-share-menu {
          width:100%;
        }
      }
    `;

    document.head.appendChild(
      style
    );
  },

  /**
   * Destroy
   */
  destroy() {
    this._state.observers.forEach(
      observer => {
        observer.disconnect();
      }
    );

    this._state.observers =
      [];

    this._state.initialized =
      false;
  }
};

if (
  typeof module !==
    'undefined' &&
  module.exports
) {
  module.exports =
    CopyComponentLink;
};