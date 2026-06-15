
const PreviewZoom = {
  version: '1.0.0',

  config: {
    minZoom: 0.5,
    maxZoom: 3,
    defaultZoom: 1,
    zoomStep: 0.1,
    animationDuration: 200,
    storageKey: 'uiverse-preview-zoom',
    enablePersistence: true
  },

  state: {
    initialized: false,
    currentZoom: 1,
    activePreview: null,
    previews: [],
    zoomHistory: [],
    presetLevels: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3],
    listeners: [],
    observer: null,
    keyboardEnabled: true
  },

  init() {
    if (this.state.initialized) {
      return;
    }

    this.loadSavedSettings();
    this.collectPreviewElements();
    this.initializePreviews();
    this.attachGlobalListeners();
    this.setupMutationObserver();

    this.state.initialized = true;

    console.info('[PreviewZoom] Initialized');
  },

  collectPreviewElements() {
    const selectors = [
      '.component-card',
      '.preview-box',
      '.card-preview',
      '.component-preview',
      '[class*="preview"]'
    ];

    const previews = [];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        if (!previews.includes(element)) {
          previews.push(element);
        }
      });
    });

    this.state.previews = previews;
  },

  initializePreviews() {
    this.state.previews.forEach((preview, index) => {
      this.preparePreview(preview, index);
    });
  },

  preparePreview(preview, index) {
    if (!preview) return;

    preview.dataset.zoomId = `preview-${index}`;
    preview.dataset.zoomLevel = this.state.currentZoom;

    preview.style.transformOrigin = 'center center';
    preview.style.transition =
      `transform ${this.config.animationDuration}ms ease`;

    this.attachPreviewEvents(preview);
  },

  attachPreviewEvents(preview) {
    preview.addEventListener('mouseenter', () => {
      this.state.activePreview = preview;
    });

    preview.addEventListener('focusin', () => {
      this.state.activePreview = preview;
    });

    preview.addEventListener('click', () => {
      this.state.activePreview = preview;
    });
  },

  attachGlobalListeners() {
    this.attachKeyboardListeners();
    this.attachWheelListeners();
    this.attachResizeListener();
  },

  attachKeyboardListeners() {
    document.addEventListener('keydown', event => {
      if (!this.state.keyboardEnabled) {
        return;
      }

      const isCtrl =
        event.ctrlKey || event.metaKey;

      if (!isCtrl) {
        return;
      }

      switch (event.key) {
        case '+':
        case '=':
          event.preventDefault();
          this.zoomIn();
          break;

        case '-':
          event.preventDefault();
          this.zoomOut();
          break;

        case '0':
          event.preventDefault();
          this.resetZoom();
          break;

        default:
          break;
      }
    });
  },

  attachWheelListeners() {
    document.addEventListener(
      'wheel',
      event => {
        if (!(event.ctrlKey || event.metaKey)) {
          return;
        }

        event.preventDefault();

        if (event.deltaY < 0) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
      },
      { passive: false }
    );
  },

  attachResizeListener() {
    window.addEventListener('resize', () => {
      this.refreshPreviewLayout();
    });
  },

  refreshPreviewLayout() {
    this.state.previews.forEach(preview => {
      const zoom =
        Number(preview.dataset.zoomLevel) || 1;

      preview.style.transform =
        `scale(${zoom})`;
    });
  },

  setupMutationObserver() {
    if (
      typeof MutationObserver === 'undefined'
    ) {
      return;
    }

    this.state.observer =
      new MutationObserver(mutations => {
        let shouldRefresh = false;

        mutations.forEach(mutation => {
          if (
            mutation.addedNodes &&
            mutation.addedNodes.length
          ) {
            shouldRefresh = true;
          }
        });

        if (shouldRefresh) {
          this.collectPreviewElements();
          this.initializePreviews();
        }
      });

    this.state.observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );
  },

  loadSavedSettings() {
    if (!this.config.enablePersistence) {
      return;
    }

    try {
      const saved =
        localStorage.getItem(
          this.config.storageKey
        );

      if (!saved) {
        return;
      }

      const data = JSON.parse(saved);

      if (
        typeof data.zoom === 'number'
      ) {
        this.state.currentZoom =
          data.zoom;
      }
    } catch (error) {
      console.warn(
        '[PreviewZoom] Failed to load settings',
        error
      );
    }
  },

  saveSettings() {
    if (!this.config.enablePersistence) {
      return;
    }

    try {
      localStorage.setItem(
        this.config.storageKey,
        JSON.stringify({
          zoom: this.state.currentZoom,
          timestamp: Date.now()
        })
      );
    } catch (error) {
      console.warn(
        '[PreviewZoom] Failed to save settings',
        error
      );
    }
  },

  getActivePreview() {
    if (this.state.activePreview) {
      return this.state.activePreview;
    }

    return (
      this.state.previews[0] || null
    );
  },

  setZoom(value) {
    const preview =
      this.getActivePreview();

    if (!preview) {
      return;
    }

    const zoom =
      Math.max(
        this.config.minZoom,
        Math.min(
          this.config.maxZoom,
          value
        )
      );

    this.state.currentZoom = zoom;

    preview.dataset.zoomLevel =
      zoom;

    preview.style.transform =
      `scale(${zoom})`;

    this.state.zoomHistory.push({
      zoom,
      timestamp: Date.now()
    });

    this.saveSettings();
  },

  zoomIn() {
    this.setZoom(
      this.state.currentZoom +
      this.config.zoomStep
    );
  },

  zoomOut() {
    this.setZoom(
      this.state.currentZoom -
      this.config.zoomStep
    );
  },

  resetZoom() {
    this.setZoom(
      this.config.defaultZoom
    );
  },
  
  createToolbar(preview) {
    if (!preview) return;

    if (
      preview.parentElement &&
      preview.parentElement.querySelector(
        '.pz-toolbar'
      )
    ) {
      return;
    }

    const toolbar =
      document.createElement('div');

    toolbar.className =
      'pz-toolbar';

    const zoomOutBtn =
      this.createButton(
        '−',
        'Zoom Out',
        () => this.zoomOut()
      );

    const zoomInBtn =
      this.createButton(
        '+',
        'Zoom In',
        () => this.zoomIn()
      );

    const resetBtn =
      this.createButton(
        '100%',
        'Reset Zoom',
        () => this.resetZoom()
      );

    const fitBtn =
      this.createButton(
        'Fit',
        'Fit To Screen',
        () => this.fitToScreen()
      );

    const presetSelect =
      this.createPresetDropdown();

    const zoomLabel =
      document.createElement('span');

    zoomLabel.className =
      'pz-current-value';

    zoomLabel.textContent =
      `${Math.round(
        this.state.currentZoom * 100
      )}%`;

    toolbar.appendChild(
      zoomOutBtn
    );

    toolbar.appendChild(
      zoomInBtn
    );

    toolbar.appendChild(
      resetBtn
    );

    toolbar.appendChild(
      fitBtn
    );

    toolbar.appendChild(
      presetSelect
    );

    toolbar.appendChild(
      zoomLabel
    );

    preview.parentElement.insertBefore(
      toolbar,
      preview
    );

    preview._zoomToolbar =
      toolbar;

    preview._zoomLabel =
      zoomLabel;
  },

  createButton(
    text,
    title,
    callback
  ) {
    const button =
      document.createElement(
        'button'
      );

    button.type =
      'button';

    button.className =
      'pz-btn';

    button.textContent =
      text;

    button.title =
      title;

    button.setAttribute(
      'aria-label',
      title
    );

    button.addEventListener(
      'click',
      callback
    );

    return button;
  },

  createPresetDropdown() {
    const select =
      document.createElement(
        'select'
      );

    select.className =
      'pz-preset-select';

    this.state.presetLevels.forEach(
      level => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          level;

        option.textContent =
          `${Math.round(
            level * 100
          )}%`;

        if (
          level ===
          this.state.currentZoom
        ) {
          option.selected =
            true;
        }

        select.appendChild(
          option
        );
      }
    );

    select.addEventListener(
      'change',
      event => {
        const value =
          parseFloat(
            event.target.value
          );

        this.setZoom(value);

        this.showToast(
          `Zoom set to ${Math.round(
            value * 100
          )}%`
        );
      }
    );

    return select;
  },

  initializeToolbars() {
    this.state.previews.forEach(
      preview => {
        this.createToolbar(
          preview
        );
      }
    );
  },

  updateZoomLabels() {
    this.state.previews.forEach(
      preview => {
        if (
          preview._zoomLabel
        ) {
          preview._zoomLabel.textContent =
            `${Math.round(
              this.state.currentZoom *
              100
            )}%`;
        }
      }
    );
  },

  updatePresetDropdowns() {
    this.state.previews.forEach(
      preview => {
        const dropdown =
          preview.parentElement?.querySelector(
            '.pz-preset-select'
          );

        if (!dropdown) {
          return;
        }

        dropdown.value =
          this.state.currentZoom;
      }
    );
  },

  fitToScreen() {
    const preview =
      this.getActivePreview();

    if (!preview) {
      return;
    }

    const container =
      preview.parentElement;

    if (!container) {
      return;
    }

    const availableWidth =
      container.clientWidth;

    const contentWidth =
      preview.scrollWidth;

    if (
      !contentWidth
    ) {
      return;
    }

    const zoom =
      Math.min(
        availableWidth /
          contentWidth,
        this.config.maxZoom
      );

    this.setZoom(
      zoom
    );

    this.showToast(
      `Fit to screen (${Math.round(
        zoom * 100
      )}%)`
    );
  },

  showZoomStatus() {
    const existing =
      document.querySelector(
        '.pz-status-overlay'
      );

    if (existing) {
      existing.remove();
    }

    const overlay =
      document.createElement(
        'div'
      );

    overlay.className =
      'pz-status-overlay';

    overlay.textContent =
      `${Math.round(
        this.state.currentZoom *
        100
      )}%`;

    document.body.appendChild(
      overlay
    );

    requestAnimationFrame(
      () => {
        overlay.classList.add(
          'visible'
        );
      }
    );

    setTimeout(
      () => {
        overlay.classList.remove(
          'visible'
        );

        setTimeout(
          () =>
            overlay.remove(),
          250
        );
      },
      1200
    );
  },

  showToast(message) {
    if (
      typeof Toast !==
        'undefined' &&
      Toast.show
    ) {
      Toast.show(
        message
      );

      return;
    }

    console.info(
      '[PreviewZoom]',
      message
    );
  },

  updateToolbarState() {
    this.updateZoomLabels();

    this.updatePresetDropdowns();

    this.showZoomStatus();
  },

  destroyToolbars() {
    document
      .querySelectorAll(
        '.pz-toolbar'
      )
      .forEach(
        toolbar =>
          toolbar.remove()
      );
  },

  rebuildToolbars() {
    this.destroyToolbars();

    this.initializeToolbars();
  },

  refreshToolbarVisibility() {
    const previews =
      this.state.previews;

    previews.forEach(
      preview => {
        const toolbar =
          preview.parentElement?.querySelector(
            '.pz-toolbar'
          );

        if (!toolbar) {
          return;
        }

        toolbar.style.display =
          preview.offsetParent
            ? 'flex'
            : 'none';
      }
    );
  },

  attachToolbarObservers() {
    window.addEventListener(
      'resize',
      () => {
        this.refreshToolbarVisibility();
      }
    );

    document.addEventListener(
      'visibilitychange',
      () => {
        this.refreshToolbarVisibility();
      }
    );
  },

  initializeZoomUI() {
    this.initializeToolbars();

    this.attachToolbarObservers();

    this.updateToolbarState();
  },


  history: {
    undoStack: [],
    redoStack: [],
    maxEntries: 100
  },

  pushHistory(zoomLevel) {
    this.history.undoStack.push({
      zoom: zoomLevel,
      timestamp: Date.now()
    });

    if (
      this.history.undoStack.length >
      this.history.maxEntries
    ) {
      this.history.undoStack.shift();
    }

    this.history.redoStack = [];
  },

  undoZoom() {
    if (
      this.history.undoStack.length <= 1
    ) {
      return;
    }

    const current =
      this.history.undoStack.pop();

    this.history.redoStack.push(
      current
    );

    const previous =
      this.history.undoStack[
        this.history.undoStack.length - 1
      ];

    if (!previous) {
      return;
    }

    this.setZoom(
      previous.zoom
    );

    this.showToast(
      `Undo → ${Math.round(
        previous.zoom * 100
      )}%`
    );
  },

  redoZoom() {
    if (
      !this.history.redoStack.length
    ) {
      return;
    }

    const state =
      this.history.redoStack.pop();

    this.history.undoStack.push(
      state
    );

    this.setZoom(
      state.zoom
    );

    this.showToast(
      `Redo → ${Math.round(
        state.zoom * 100
      )}%`
    );
  },

  initializeHistory() {
    this.history.undoStack = [
      {
        zoom:
          this.state.currentZoom,
        timestamp:
          Date.now()
      }
    ];

    this.history.redoStack = [];
  },

  enableAdvancedKeyboardShortcuts() {
    document.addEventListener(
      'keydown',
      event => {
        const ctrl =
          event.ctrlKey ||
          event.metaKey;

        if (!ctrl) {
          return;
        }

        switch (
          event.key.toLowerCase()
        ) {
          case 'z':
            event.preventDefault();

            if (
              event.shiftKey
            ) {
              this.redoZoom();
            } else {
              this.undoZoom();
            }

            break;

          case '1':
            event.preventDefault();
            this.setZoom(1);
            break;

          case '2':
            event.preventDefault();
            this.setZoom(2);
            break;

          case '3':
            event.preventDefault();
            this.setZoom(3);
            break;

          default:
            break;
        }
      }
    );
  },

  enableWheelZoom() {
    this.state.previews.forEach(
      preview => {
        preview.addEventListener(
          'wheel',
          event => {
            if (
              !(
                event.ctrlKey ||
                event.metaKey
              )
            ) {
              return;
            }

            event.preventDefault();

            if (
              event.deltaY < 0
            ) {
              this.zoomIn();
            } else {
              this.zoomOut();
            }

            this.updateToolbarState();
          },
          {
            passive: false
          }
        );
      }
    );
  },

  touchState: {
    active: false,
    startDistance: 0,
    startZoom: 1
  },

  getTouchDistance(
    touchA,
    touchB
  ) {
    const dx =
      touchA.clientX -
      touchB.clientX;

    const dy =
      touchA.clientY -
      touchB.clientY;

    return Math.sqrt(
      dx * dx + dy * dy
    );
  },

  enableTouchZoom() {
    this.state.previews.forEach(
      preview => {
        preview.addEventListener(
          'touchstart',
          event => {
            if (
              event.touches.length !== 2
            ) {
              return;
            }

            const distance =
              this.getTouchDistance(
                event.touches[0],
                event.touches[1]
              );

            this.touchState.active =
              true;

            this.touchState.startDistance =
              distance;

            this.touchState.startZoom =
              this.state.currentZoom;
          }
        );

        preview.addEventListener(
          'touchmove',
          event => {
            if (
              !this.touchState.active
            ) {
              return;
            }

            if (
              event.touches.length !== 2
            ) {
              return;
            }

            const currentDistance =
              this.getTouchDistance(
                event.touches[0],
                event.touches[1]
              );

            const scale =
              currentDistance /
              this.touchState
                .startDistance;

            const zoom =
              this.touchState
                .startZoom *
              scale;

            this.setZoom(
              zoom
            );

            this.updateToolbarState();
          }
        );

        preview.addEventListener(
          'touchend',
          () => {
            this.touchState.active =
              false;
          }
        );
      }
    );
  },

  panState: {
    enabled: false,
    dragging: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0
  },

  enablePanMode() {
    this.panState.enabled =
      true;

    this.state.previews.forEach(
      preview => {
        preview.addEventListener(
          'mousedown',
          event => {
            if (
              !this.panState.enabled
            ) {
              return;
            }

            this.panState.dragging =
              true;

            this.panState.startX =
              event.pageX;

            this.panState.startY =
              event.pageY;

            this.panState.scrollLeft =
              preview.scrollLeft;

            this.panState.scrollTop =
              preview.scrollTop;
          }
        );

        document.addEventListener(
          'mousemove',
          event => {
            if (
              !this.panState.dragging
            ) {
              return;
            }

            const dx =
              event.pageX -
              this.panState.startX;

            const dy =
              event.pageY -
              this.panState.startY;

            preview.scrollLeft =
              this.panState.scrollLeft -
              dx;

            preview.scrollTop =
              this.panState.scrollTop -
              dy;
          }
        );

        document.addEventListener(
          'mouseup',
          () => {
            this.panState.dragging =
              false;
          }
        );
      }
    );
  },

  enableAccessibility() {
    document
      .querySelectorAll(
        '.pz-btn'
      )
      .forEach(btn => {
        btn.setAttribute(
          'role',
          'button'
        );

        btn.setAttribute(
          'tabindex',
          '0'
        );

        btn.addEventListener(
          'keydown',
          event => {
            if (
              event.key ===
                'Enter' ||
              event.key === ' '
            ) {
              event.preventDefault();
              btn.click();
            }
          }
        );
      });
  },

  initializeAdvancedFeatures() {
    this.initializeHistory();

    this.enableAdvancedKeyboardShortcuts();

    this.enableWheelZoom();

    this.enableTouchZoom();

    this.enablePanMode();

    this.enableAccessibility();
  },
  analytics: {
    enabled: true,
    events: []
  },

  trackEvent(
    type,
    payload = {}
  ) {
    if (
      !this.analytics.enabled
    ) {
      return;
    }

    const event = {
      type,
      payload,
      timestamp:
        Date.now()
    };

    this.analytics.events.push(
      event
    );

    if (
      this.analytics.events
        .length > 500
    ) {
      this.analytics.events.shift();
    }

    if (
      window.UIVERSE_DEBUG
    ) {
      console.log(
        '[PreviewZoom]',
        event
      );
    }
  },

  getAnalytics() {
    return [
      ...this.analytics.events
    ];
  },

  clearAnalytics() {
    this.analytics.events =
      [];
  },

  profiles: {
    active: 'default',
    presets: {}
  },

  createProfile(
    name
  ) {
    if (!name) {
      return;
    }

    this.profiles.presets[
      name
    ] = {
      zoom:
        this.state.currentZoom,
      createdAt:
        Date.now()
    };

    this.saveProfiles();

    this.trackEvent(
      'profile_created',
      { name }
    );
  },

  applyProfile(
    name
  ) {
    const profile =
      this.profiles.presets[
        name
      ];

    if (!profile) {
      return;
    }

    this.setZoom(
      profile.zoom
    );

    this.profiles.active =
      name;

    this.showToast(
      `Profile: ${name}`
    );
  },

  deleteProfile(
    name
  ) {
    delete this.profiles
      .presets[name];

    this.saveProfiles();
  },

  saveProfiles() {
    try {
      localStorage.setItem(
        'uiverse-preview-zoom-profiles',
        JSON.stringify(
          this.profiles
        )
      );
    } catch (
      error
    ) {
      console.warn(
        error
      );
    }
  },

  loadProfiles() {
    try {
      const raw =
        localStorage.getItem(
          'uiverse-preview-zoom-profiles'
        );

      if (!raw) {
        return;
      }

      this.profiles =
        JSON.parse(
          raw
        );
    } catch (
      error
    ) {
      console.warn(
        error
      );
    }
  },

  sync: {
    enabled: false
  },

  enableSyncMode() {
    this.sync.enabled =
      true;

    this.showToast(
      'Sync Mode Enabled'
    );
  },

  disableSyncMode() {
    this.sync.enabled =
      false;

    this.showToast(
      'Sync Mode Disabled'
    );
  },

  synchronizeZoom(
    zoom
  ) {
    if (
      !this.sync.enabled
    ) {
      return;
    }

    this.state.previews.forEach(
      preview => {
        preview.dataset.zoomLevel =
          zoom;

        preview.style.transform =
          `scale(${zoom})`;
      }
    );
  },

  applyZoomToAll(
    zoom
  ) {
    this.state.previews.forEach(
      preview => {
        preview.dataset.zoomLevel =
          zoom;

        preview.style.transform =
          `scale(${zoom})`;
      }
    );

    this.state.currentZoom =
      zoom;

    this.updateToolbarState();
  },

  exportSettings() {
    return {
      version:
        this.version,
      zoom:
        this.state.currentZoom,
      profiles:
        this.profiles,
      analytics:
        this.analytics.events
          .length
    };
  },

  importSettings(
    settings
  ) {
    if (
      !settings
    ) {
      return;
    }

    if (
      typeof settings.zoom ===
      'number'
    ) {
      this.setZoom(
        settings.zoom
      );
    }

    if (
      settings.profiles
    ) {
      this.profiles =
        settings.profiles;
    }

    this.saveProfiles();
  },

  resetAllSettings() {
    this.resetZoom();

    this.profiles = {
      active:
        'default',
      presets: {}
    };

    this.clearAnalytics();

    localStorage.removeItem(
      this.config
        .storageKey
    );

    localStorage.removeItem(
      'uiverse-preview-zoom-profiles'
    );

    this.showToast(
      'Zoom settings reset'
    );
  },

  destroyObserver() {
    if (
      this.state.observer
    ) {
      this.state.observer.disconnect();

      this.state.observer =
        null;
    }
  },

  removeToolbarListeners() {
    document
      .querySelectorAll(
        '.pz-btn'
      )
      .forEach(btn => {
        const clone =
          btn.cloneNode(
            true
          );

        btn.parentNode.replaceChild(
          clone,
          btn
        );
      });
  },

  cleanupPreviews() {
    this.state.previews.forEach(
      preview => {
        preview.style.transform =
          '';

        preview.style.transition =
          '';

        preview.removeAttribute(
          'data-zoom-level'
        );

        preview.removeAttribute(
          'data-zoom-id'
        );
      });
  },

  destroy() {
    this.destroyObserver();

    this.removeToolbarListeners();

    this.destroyToolbars();

    this.cleanupPreviews();

    this.state.initialized =
      false;

    this.showToast(
      'Preview Zoom Destroyed'
    );
  },

  reload() {
    this.destroy();

    this.init();
  },

  debug() {
    return {
      version:
        this.version,
      previews:
        this.state.previews
          .length,
      zoom:
        this.state.currentZoom,
      activeProfile:
        this.profiles.active,
      syncEnabled:
        this.sync.enabled,
      analyticsEvents:
        this.analytics
          .events.length
    };
  }
};

if (
  typeof module !== 'undefined' &&
  module.exports
) {
  module.exports = PreviewZoom;
}


