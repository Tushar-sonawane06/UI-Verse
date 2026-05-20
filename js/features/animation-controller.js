/**
 * UI-Verse - Animation Controller
 * Interactive playback controls for component previews
 */

const AnimationController = {
  isPlaying: true,
  playbackRate: 1,
  container: null,

  init(containerSelector = '.card-preview') {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.injectControls();
    this.observeAnimations();
  },

  injectControls() {
    const controls = document.createElement('div');
    controls.className = 'animation-controls';
    controls.innerHTML = `
      <button class="anim-btn play" title="Play">
        <i class="fa-solid fa-play"></i>
      </button>
      <button class="anim-btn pause" title="Pause">
        <i class="fa-solid fa-pause"></i>
      </button>
      <button class="anim-btn restart" title="Restart">
        <i class="fa-solid fa-rotate-right"></i>
      </button>
      <button class="anim-btn speed-05" title="0.5x">0.5x</button>
      <button class="anim-btn speed-1 active" title="1x">1x</button>
      <button class="anim-btn speed-2" title="2x">2x</button>
    `;

    controls.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 100;
      display: flex;
      gap: 4px;
      background: rgba(0,0,0,0.7);
      padding: 4px;
      border-radius: 6px;
    `;

    const buttons = controls.querySelectorAll('.anim-btn');
    buttons.forEach(btn => {
      btn.style.cssText = `
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        transition: background 0.2s;
      `;
      btn.addEventListener('mouseenter', () => btn.style.background = 'rgba(255,255,255,0.2)');
      btn.addEventListener('mouseleave', () => btn.style.background = 'transparent');
    });

    controls.querySelector('.play').addEventListener('click', () => this.play());
    controls.querySelector('.pause').addEventListener('click', () => this.pause());
    controls.querySelector('.restart').addEventListener('click', () => this.restart());
    controls.querySelector('.speed-05').addEventListener('click', () => this.setSpeed(0.5));
    controls.querySelector('.speed-1').addEventListener('click', () => this.setSpeed(1));
    controls.querySelector('.speed-2').addEventListener('click', () => this.setSpeed(2));

    if (this.container) {
      this.container.style.position = 'relative';
      this.container.appendChild(controls);
    }
  },

  observeAnimations() {
    const observer = new MutationObserver(() => {
      this.updateAnimations();
    });
    
    if (this.container) {
      observer.observe(this.container, { childList: true, subtree: true });
    }
  },

  updateAnimations() {
    const elements = this.container?.querySelectorAll('*') || [];
    elements.forEach(el => {
      const computed = getComputedStyle(el);
      if (computed.animationName !== 'none') {
        el.style.animationPlayState = this.isPlaying ? 'running' : 'paused';
        el.style.animationDuration = this.getScaledDuration(computed.animationDuration);
      }
    });
  },

  getScaledDuration(duration) {
    const num = parseFloat(duration);
    if (isNaN(num)) return duration;
    return (num / this.playbackRate) + 's';
  },

  play() {
    this.isPlaying = true;
    this.updateAnimations();
  },

  pause() {
    this.isPlaying = false;
    this.updateAnimations();
  },

  restart() {
    const elements = this.container?.querySelectorAll('*') || [];
    elements.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = null;
      el.style.animationPlayState = this.isPlaying ? 'running' : 'paused';
    });
  },

  setSpeed(speed) {
    this.playbackRate = speed;
    this.updateAnimations();
    
    document.querySelectorAll('.anim-btn.speed-05, .anim-btn.speed-1, .anim-btn.speed-2').forEach(btn => {
      btn.classList.remove('active');
      btn.style.fontWeight = 'normal';
    });
    document.querySelector(`.speed-${speed === 0.5 ? '05' : speed}`)?.classList.add('active');
  }
};

if (typeof window !== 'undefined') {
  window.AnimationController = AnimationController;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AnimationController.init());
  } else {
    AnimationController.init();
  }
}

export default AnimationController;