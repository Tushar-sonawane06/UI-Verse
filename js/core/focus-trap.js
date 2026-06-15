/**
 * UIverse - Focus Trap Utility
 * Traps keyboard focus within modal/drawer elements
 */

const FocusTrap = {
  activeTrap: null,
  previousFocus: null,
  boundHandler: null,

  activate(container) {
    if (this.activeTrap) {
      this.deactivate();
    }

    this.previousFocus = document.activeElement;
    this.boundHandler = this._handleKeyDown.bind(this);
    
    container.addEventListener('keydown', this.boundHandler);
    container.setAttribute('data-focus-trap', 'active');
    this.activeTrap = container;

    const firstFocusable = container.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 50);
    }

    console.log('[FocusTrap] Activated for:', container.id || container.className);
  },

  deactivate() {
    if (!this.activeTrap) return;

    this.activeTrap.removeEventListener('keydown', this.boundHandler);
    this.activeTrap.removeAttribute('data-focus-trap');
    
    if (this.previousFocus && typeof this.previousFocus.focus === 'function') {
      setTimeout(() => this.previousFocus.focus(), 50);
    }

    this.activeTrap = null;
    this.previousFocus = null;
    this.boundHandler = null;

    console.log('[FocusTrap] Deactivated');
  },

  _handleKeyDown(event) {
    const contract = window.KeyboardContract || globalThis.KeyboardContract || null;
    if (contract && typeof contract.isTabKey === 'function' && !contract.isTabKey(event)) return;
    if (!contract && event.key !== 'Tab') return;

    const trap = this.activeTrap;
    const focusables = Array.from(
      trap.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => el.offsetParent !== null);

    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  },

  isActive() {
    return this.activeTrap !== null;
  }
};

if (typeof window !== 'undefined') {
  window.FocusTrap = FocusTrap;
}

export default FocusTrap;