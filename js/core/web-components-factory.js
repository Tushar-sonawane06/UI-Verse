/*
Base Web Component factory for UI-Verse
Provides a lightweight base class to simplify creating custom elements with optional shadow DOM,
attribute reflection, and simple template rendering.
*/

class UVElement extends HTMLElement {
  constructor({ useShadow = true, template = '', styles = '' } = {}) {
    super();
    this._useShadow = useShadow;
    this._template = template;
    this._styles = styles;
    this._root = this._useShadow ? this.attachShadow({ mode: 'open' }) : this;
  }

  connectedCallback() {
    this.render();
    if (typeof this.init === 'function') {
      try { this.init(); } catch (e) { console.error('UVElement init error', e); }
    }
  }

  disconnectedCallback() {
    if (typeof this.destroy === 'function') {
      try { this.destroy(); } catch (e) { console.error('UVElement destroy error', e); }
    }
  }

  static get observedAttributes() {
    return Array.isArray(this._observed) ? this._observed : [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (typeof this.onAttributeChange === 'function') {
      try { this.onAttributeChange(name, oldValue, newValue); } catch (e) { console.error(e); }
    }
    this.render();
  }

  set template(html) {
    this._template = html;
    this.render();
  }

  get template() { return this._template; }

  render() {
    if (!this._root) return;
    const template = document.createElement('template');
    const styles = this._styles ? `<style>${this._styles}</style>` : '';
    template.innerHTML = `${styles}${this._template}`;
    // Clear
    while (this._root.firstChild) this._root.removeChild(this._root.firstChild);
    this._root.appendChild(template.content.cloneNode(true));
  }
}

// Expose globally so components can extend
window.UVElement = UVElement;

export default UVElement;
