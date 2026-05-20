/**
 * UI-Verse - Preview Isolator
 * Provides Shadow DOM isolation for component previews
 * Prevents CSS leakage between parent site and preview components
 */

const PreviewIsolator = {
  /**
   * Create an isolated preview container using Shadow DOM
   */
  createIsolatedContainer(container, options = {}) {
    const shadowRoot = container.attachShadow({ mode: 'open' });
    
    const wrapper = document.createElement('div');
    wrapper.className = 'uiv-preview-wrapper';
    wrapper.dataset.component = options.componentName || 'preview';
    
    shadowRoot.appendChild(wrapper);
    
    this.injectStyles(shadowRoot, options.styles);
    
    return {
      container,
      shadowRoot,
      wrapper,
      render: (html) => this.renderHTML(wrapper, html, shadowRoot),
      clear: () => this.clear(wrapper)
    };
  },

  /**
   * Inject scoped styles into Shadow DOM
   */
  injectStyles(shadowRoot, customStyles = '') {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        width: 100%;
      }
      .uiv-preview-wrapper {
        min-height: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      * {
        box-sizing: border-box;
      }
      ${customStyles}
    `;
    shadowRoot.appendChild(style);
  },

  /**
   * Render HTML content into Shadow DOM
   */
  renderHTML(wrapper, html, shadowRoot) {
    wrapper.innerHTML = html;
  },

  /**
   * Clear preview content
   */
  clear(wrapper) {
    wrapper.innerHTML = '';
  },

  /**
   * Wrap all component cards with isolated previews
   */
  initAll() {
    const cards = document.querySelectorAll('.component-card');
    
    cards.forEach(card => {
      const preview = card.querySelector('.card-preview');
      if (!preview) return;
      
      const componentName = card.querySelector('h3')?.textContent?.toLowerCase().replace(/\s+/g, '-') || 'component';
      
      const isolated = this.createIsolatedContainer(preview, {
        componentName,
        styles: this.getComponentStyles(card)
      });
      
      const originalContent = preview.innerHTML;
      isolated.render(originalContent);
      preview.dataset.isolated = 'true';
    });
  },

  /**
   * Extract component-specific styles from card
   */
  getComponentStyles(card) {
    const styleEl = card.querySelector('style');
    return styleEl ? styleEl.textContent : '';
  }
};

if (typeof window !== 'undefined') {
  window.PreviewIsolator = PreviewIsolator;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PreviewIsolator.initAll());
  } else {
    PreviewIsolator.initAll();
  }
}

export default PreviewIsolator;