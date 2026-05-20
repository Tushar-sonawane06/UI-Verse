/**
 * UI-Verse Web Components
 * Framework-agnostic custom elements for universal compatibility
 */

class UivButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['variant', 'size', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  get size() {
    return this.getAttribute('size') || 'medium';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  render() {
    const variants = {
      primary: 'background: #eb6835; color: white;',
      secondary: 'background: #6c5ce7; color: white;',
      outline: 'background: transparent; border: 2px solid #eb6835; color: #eb6835;',
      ghost: 'background: transparent; color: #333;'
    };

    const sizes = {
      small: 'padding: 8px 16px; font-size: 12px;',
      medium: 'padding: 10px 24px; font-size: 14px;',
      large: 'padding: 12px 32px; font-size: 16px;'
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        button {
          border: none;
          border-radius: 8px;
          cursor: ${this.disabled ? 'not-allowed' : 'pointer'};
          font-weight: 600;
          transition: all 0.3s ease;
          font-family: inherit;
          ${variants[this.variant]}
          ${sizes[this.size]}
          opacity: ${this.disabled ? '0.5' : '1'};
        }
        button:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }
      </style>
      <button ${this.disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;
  }
}

class UivCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['shadow', 'radius'];
  }

  get shadow() {
    return this.getAttribute('shadow') || 'medium';
  }

  get radius() {
    return this.getAttribute('radius') || '8';
  }

  render() {
    const shadows = {
      none: 'none',
      small: '0 2px 4px rgba(0,0,0,0.1)',
      medium: '0 4px 12px rgba(0,0,0,0.12)',
      large: '0 8px 24px rgba(0,0,0,0.15)'
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          background: white;
          padding: 16px;
          border-radius: ${this.radius}px;
          box-shadow: ${shadows[this.shadow]};
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        :host([hoverable]) .card:hover {
          transform: translateY(-4px);
          box-shadow: ${shadows.large};
        }
      </style>
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

class UivBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['color', 'size'];
  }

  get color() {
    return this.getAttribute('color') || 'primary';
  }

  get size() {
    return this.getAttribute('size') || 'medium';
  }

  render() {
    const colors = {
      primary: 'background: #eb6835;',
      success: 'background: #00b894;',
      warning: 'background: #fdcb6e; color: #333;',
      danger: 'background: #d63031;',
      info: 'background: #6c5ce7;'
    };

    const sizes = {
      small: 'padding: 2px 8px; font-size: 10px;',
      medium: 'padding: 4px 12px; font-size: 12px;',
      large: 'padding: 6px 16px; font-size: 14px;'
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        .badge {
          border-radius: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          ${colors[this.color]}
          ${s[this.size]}
        }
      </style>
      <span class="badge"><slot></slot></span>
    `;
  }
}

// Register custom elements
customElements.define('uiv-button', UivButton);
customElements.define('uiv-card', UivCard);
customElements.define('uiv-badge', UivBadge);

export { UivButton, UivCard, UivBadge };