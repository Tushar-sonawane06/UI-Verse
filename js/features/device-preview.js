/**
 * Device Preview Feature
 * Adds responsive device viewport simulation controls to preview containers.
 */

const DevicePreview = {
  _state: {
    initialized: false,
    hosts: [],
    activeMode: 'desktop',
    customWidth: null,
    dragging: null,
    listeners: []
  },

  _storageKeys: {
    mode: 'uiVerseDevicePreviewMode',
    customWidth: 'uiVerseDevicePreviewCustomWidth'
  },

  _widths: {
    mobile: 375,
    tablet: 768,
    desktop: 1200
  },

  _selectors: [
    '.sandbox-preview-slot',
    '.card-preview',
    '.preview-box',
    '.preview'
  ],

  init() {
    if (this._state.initialized) return;

    const targets = this._collectTargets();
    if (targets.length === 0) {
      this._state.initialized = true;
      return;
    }

    this._injectStyles();
    this._restoreState();
    this._enhanceTargets(targets);
    this._applyMode(this._state.activeMode, this._state.customWidth, { persist: false });

    this._state.initialized = true;
  },

  _collectTargets() {
    const found = this._selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)));

    return found.filter((target) => {
      if (!target || target.closest('.uiv-device-preview-host')) return false;
      if (target.classList.contains('code-block')) return false;
      if (target.tagName === 'TEXTAREA') return false;
      return true;
    });
  },

  _restoreState() {
    const savedMode = sessionStorage.getItem(this._storageKeys.mode);
    const savedWidth = Number.parseInt(sessionStorage.getItem(this._storageKeys.customWidth) || '', 10);

    this._state.activeMode = (savedMode === 'custom' || this._widths[savedMode]) ? savedMode : 'desktop';
    this._state.customWidth = Number.isFinite(savedWidth) ? savedWidth : null;
  },

  _persistState(mode, width) {
    sessionStorage.setItem(this._storageKeys.mode, mode);

    if (Number.isFinite(width)) {
      sessionStorage.setItem(this._storageKeys.customWidth, String(width));
    } else {
      sessionStorage.removeItem(this._storageKeys.customWidth);
    }
  },

  _enhanceTargets(targets) {
    targets.forEach((target, index) => {
      const host = document.createElement('div');
      host.className = 'uiv-device-preview-host';
      host.dataset.previewHost = String(index + 1);

      const toolbar = this._createToolbar();
      const frame = document.createElement('div');
      frame.className = 'uiv-device-frame';

      const viewport = document.createElement('div');
      viewport.className = 'uiv-device-viewport';
      viewport.dataset.width = '1200';

      const handle = document.createElement('button');
      handle.type = 'button';
      handle.className = 'uiv-device-resize-handle';
      handle.setAttribute('aria-label', 'Drag to resize preview width');
      handle.title = 'Drag for custom width';

      const indicator = document.createElement('div');
      indicator.className = 'uiv-device-width-indicator';
      indicator.textContent = '1200px';

      frame.appendChild(viewport);
      frame.appendChild(handle);
      frame.appendChild(indicator);
      host.appendChild(toolbar);
      host.appendChild(frame);

      target.replaceWith(host);
      viewport.appendChild(target);

      const state = { host, toolbar, frame, viewport, handle, indicator };
      this._state.hosts.push(state);
      this._bindToolbar(state);
      this._bindResizeHandle(state);
    });
  },

  _createToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'uiv-device-toolbar';

    toolbar.innerHTML = `
      <button type="button" class="uiv-device-btn" data-device="mobile" data-width="375">
        <i class="fa-solid fa-mobile-screen"></i>
        <span>Mobile</span>
      </button>
      <button type="button" class="uiv-device-btn" data-device="tablet" data-width="768">
        <i class="fa-solid fa-tablet-screen-button"></i>
        <span>Tablet</span>
      </button>
      <button type="button" class="uiv-device-btn" data-device="desktop" data-width="1200">
        <i class="fa-solid fa-desktop"></i>
        <span>Desktop</span>
      </button>
    `;

    return toolbar;
  },

  _bindToolbar(state) {
    const buttons = state.toolbar.querySelectorAll('.uiv-device-btn');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const mode = button.dataset.device;
        const width = Number.parseInt(button.dataset.width || '', 10);
        this._applyMode(mode, width, { persist: true });
      });
    });
  },

  _bindResizeHandle(state) {
    const onPointerDown = (event) => {
      event.preventDefault();
      state.handle.setPointerCapture?.(event.pointerId);

      const currentWidth = Number.parseInt(state.viewport.dataset.width || '', 10) || this._widths.desktop;
      this._state.dragging = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startWidth: currentWidth,
        state
      };
    };

    const onPointerMove = (event) => {
      const drag = this._state.dragging;
      if (!drag || drag.pointerId !== event.pointerId) return;

      const delta = event.clientX - drag.startX;
      const nextWidth = this._clampWidth(drag.startWidth + delta, drag.state.frame);
      this._applyMode('custom', nextWidth, { persist: true });
    };

    const onPointerUp = (event) => {
      const drag = this._state.dragging;
      if (!drag || drag.pointerId !== event.pointerId) return;

      drag.state.handle.releasePointerCapture?.(event.pointerId);
      this._state.dragging = null;
    };

    state.handle.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    this._state.listeners.push({ el: state.handle, event: 'pointerdown', handler: onPointerDown });
    this._state.listeners.push({ el: window, event: 'pointermove', handler: onPointerMove });
    this._state.listeners.push({ el: window, event: 'pointerup', handler: onPointerUp });
    this._state.listeners.push({ el: window, event: 'pointercancel', handler: onPointerUp });
  },

  _clampWidth(width, frame) {
    const minWidth = 280;
    const maxWidthByFrame = Math.max(minWidth, (frame?.clientWidth || width) - 14);
    const maxWidth = Math.min(1600, maxWidthByFrame);
    return Math.max(minWidth, Math.min(maxWidth, Math.round(width)));
  },

  _resolveWidth(mode, preferredWidth, frame) {
    if (mode === 'custom' && Number.isFinite(preferredWidth)) {
      return this._clampWidth(preferredWidth, frame);
    }

    const fallbackWidth = this._widths[mode] || this._widths.desktop;
    return this._clampWidth(Number.isFinite(preferredWidth) ? preferredWidth : fallbackWidth, frame);
  },

  _applyMode(mode, preferredWidth, options = { persist: true }) {
    const normalizedMode = mode === 'custom' ? 'custom' : (this._widths[mode] ? mode : 'desktop');
    this._state.activeMode = normalizedMode;
    this._state.customWidth = normalizedMode === 'custom'
      ? preferredWidth
      : null;

    this._state.hosts.forEach((state) => {
      const width = this._resolveWidth(normalizedMode, preferredWidth, state.frame);
      state.viewport.style.width = `${width}px`;
      state.viewport.dataset.width = String(width);
      state.indicator.textContent = `${width}px`;
      state.host.dataset.deviceMode = normalizedMode;

      state.toolbar.querySelectorAll('.uiv-device-btn').forEach((button) => {
        const buttonMode = button.dataset.device;
        button.classList.toggle('is-active', buttonMode === normalizedMode && normalizedMode !== 'custom');
      });
    });

    if (options.persist) {
      this._persistState(normalizedMode, normalizedMode === 'custom' ? preferredWidth : null);
    }
  },

  _injectStyles() {
    if (document.getElementById('uiv-device-preview-style')) return;

    const style = document.createElement('style');
    style.id = 'uiv-device-preview-style';
    style.textContent = `
      .uiv-device-preview-host {
        display: grid;
        gap: 10px;
        margin: 12px 0 16px;
      }

      .uiv-device-toolbar {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .uiv-device-btn {
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 999px;
        background: rgba(8, 10, 14, 0.62);
        color: #e9eef7;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1;
        padding: 8px 12px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .uiv-device-btn:hover {
        border-color: rgba(235, 104, 53, 0.6);
        color: #fff;
      }

      .uiv-device-btn.is-active {
        border-color: rgba(235, 104, 53, 0.85);
        background: linear-gradient(135deg, rgba(235, 104, 53, 0.35), rgba(124, 73, 255, 0.3));
        color: #fff;
      }

      .uiv-device-frame {
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 14px;
        background: linear-gradient(180deg, rgba(17, 19, 24, 0.78), rgba(11, 12, 16, 0.92));
        padding: 12px;
        overflow: hidden;
      }

      .uiv-device-viewport {
        margin: 0 auto;
        max-width: 100%;
        min-height: 120px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(0, 0, 0, 0.22);
        overflow: hidden;
        transition: width 180ms ease;
      }

      .uiv-device-resize-handle {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        width: 14px;
        height: 56px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(235, 104, 53, 0.45));
        cursor: ew-resize;
      }

      .uiv-device-width-indicator {
        position: absolute;
        top: 8px;
        right: 24px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(6, 8, 11, 0.7);
        color: #d8deea;
        font-size: 11px;
        font-weight: 700;
        padding: 3px 9px;
      }

      .uiv-device-viewport .sandbox-preview-frame {
        width: 100%;
      }

      @media (max-width: 900px) {
        .uiv-device-btn span {
          display: none;
        }
      }
    `;

    document.head.appendChild(style);
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });

    this._state.listeners = [];
    this._state.hosts = [];
    this._state.dragging = null;
    this._state.initialized = false;
  }
};

if (typeof window !== 'undefined') {
  window.DevicePreview = DevicePreview;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DevicePreview;
}
