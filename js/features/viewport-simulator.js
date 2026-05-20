/**
 * UI-Verse - Viewport Simulator
 * Responsive device toolbar for component previews
 */

const ViewportSimulator = {
  currentViewport: 'desktop',
  container: null,
  deviceWidths: {
    mobile: 375,
    tablet: 768,
    desktop: 1440
  },

  init(containerSelector = '.card-preview') {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.injectToolbar();
  },

  injectToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'viewport-toolbar';
    toolbar.innerHTML = `
      <button class="vp-btn mobile" data-width="375">
        <i class="fa-solid fa-mobile-screen"></i> Mobile
      </button>
      <button class="vp-btn tablet" data-width="768">
        <i class="fa-solid fa-tablet-screen"></i> Tablet
      </button>
      <button class="vp-btn desktop active" data-width="1440">
        <i class="fa-solid fa-desktop"></i> Desktop
      </button>
      <button class="vp-btn reset" title="Reset">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
    `;

    toolbar.style.cssText = `
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 100;
      display: flex;
      gap: 4px;
      background: rgba(0,0,0,0.7);
      padding: 4px;
      border-radius: 6px;
    `;

    const buttons = toolbar.querySelectorAll('.vp-btn');
    buttons.forEach(btn => {
      btn.style.cssText = `
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 11px;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: background 0.2s;
      `;
      btn.addEventListener('mouseenter', () => btn.style.background = 'rgba(255,255,255,0.2)');
      btn.addEventListener('mouseleave', () => btn.style.background = 'transparent');
    });

    toolbar.querySelector('.mobile').addEventListener('click', () => this.setViewport('mobile'));
    toolbar.querySelector('.tablet').addEventListener('click', () => this.setViewport('tablet'));
    toolbar.querySelector('.desktop').addEventListener('click', () => this.setViewport('desktop'));
    toolbar.querySelector('.reset').addEventListener('click', () => this.reset());

    if (this.container) {
      this.container.style.position = 'relative';
      this.container.parentElement.style.position = 'relative';
      this.container.parentElement.appendChild(toolbar);
    }
  },

  setViewport(device) {
    this.currentViewport = device;
    const width = this.deviceWidths[device];
    
    if (this.container) {
      this.container.style.maxWidth = width + 'px';
      this.container.style.margin = '0 auto';
      this.container.style.transition = 'max-width 0.3s ease';
    }

    document.querySelectorAll('.vp-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.style.fontWeight = 'normal';
    });
    document.querySelector(`.vp-btn.${device}`)?.classList.add('active');
  },

  reset() {
    if (this.container) {
      this.container.style.maxWidth = '';
      this.container.style.margin = '';
    }
    this.currentViewport = 'desktop';
    document.querySelectorAll('.vp-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.style.fontWeight = 'normal';
    });
    document.querySelector('.vp-btn.desktop')?.classList.add('active');
  }
};

if (typeof window !== 'undefined') {
  window.ViewportSimulator = ViewportSimulator;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ViewportSimulator.init());
  } else {
    ViewportSimulator.init();
  }
}

export default ViewportSimulator;