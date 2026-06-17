/**
 * UI-Verse Micro-Frontend Runtime Loader
 * 
 * A client runtime loader that:
 * 1. Consumes component JSON registrations
 * 2. Loads corresponding assets dynamically
 * 3. Registers Custom Elements programmatically
 * 4. Renders components inside closed Shadow Roots (style encapsulation)
 * 5. Executes scripts inside isolated JavaScript Realms (sandboxed iframes)
 */

(function(global) {
  'use strict';

  // Configuration
  const CONFIG = {
    registryUrl: null,
    realmTimeout: 5000,
    styleEncapsulation: true,
    debug: false,
    ...(global.UVMicroConfig || {})
  };

  // Component registry cache
  const componentRegistry = new Map();

  // Loaded scripts cache to prevent duplicate loading
  const loadedScripts = new Set();

  // Realm pool for script isolation
  const realmPool = [];
  const MAX_REALMS = 5;

  // Debug logger
  function log(...args) {
    if (CONFIG.debug) {
      console.log('[UVMicro]', ...args);
    }
  }

  /**
   * Create an isolated JavaScript Realm using a sandboxed iframe
   */
  function createRealm() {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'display: none; width: 0; height: 0; border: none;';
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.setAttribute('aria-hidden', 'true');
    
    // Store reference before appending
    const realm = { iframe, context: null, busy: false };
    
    document.body.appendChild(iframe);
    
    // Wait for iframe to be ready
    return new Promise((resolve, reject) => {
      iframe.onload = () => {
        try {
          realm.context = iframe.contentWindow;
          resolve(realm);
        } catch (e) {
          reject(e);
        }
      };
      
      iframe.onerror = (e) => reject(new Error('Realm creation failed'));
      
      // Timeout fallback
      setTimeout(() => {
        if (!realm.context) {
          resolve(realm); // Resolve anyway, may work
        }
      }, CONFIG.realmTimeout);
    });
  }

  /**
   * Get an available realm from the pool or create a new one
   */
  async function getRealm() {
    // Find an available (not busy) realm
    for (const realm of realmPool) {
      if (!realm.busy) {
        realm.busy = true;
        return realm;
      }
    }
    
    // Create new realm if under limit
    if (realmPool.length < MAX_REALMS) {
      const realm = await createRealm();
      realm.busy = true;
      realmPool.push(realm);
      return realm;
    }
    
    // Wait for an available realm
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        for (const realm of realmPool) {
          if (!realm.busy) {
            realm.busy = true;
            clearInterval(checkInterval);
            resolve(realm);
            return;
          }
        }
      }, 100);
    });
  }

  /**
   * Release a realm back to the pool
   */
  function releaseRealm(realm) {
    realm.busy = false;
  }

  /**
   * Execute code in an isolated realm
   */
  async function executeInRealm(code, context = {}) {
    const realm = await getRealm();
    
    try {
      // Create execution context
      const wrappedCode = `
        (function(window, document, console, ${Object.keys(context).join(',')}) {
          'use strict';
          ${code}
        })(window, document, console, ${Object.values(context).map(v => JSON.stringify(v)).join(',')});
      `;
      
      // Execute in iframe context
      const fn = new realm.context.Function(wrappedCode);
      return fn();
    } catch (error) {
      log('Realm execution error:', error);
      throw error;
    } finally {
      releaseRealm(realm);
    }
  }

  /**
   * Fetch JSON with caching
   */
  async function fetchJSON(url) {
    const cacheKey = `__uv_cache_${url}`;
    if (componentRegistry.has(cacheKey)) {
      return componentRegistry.get(cacheKey);
    }
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    
    const data = await response.json();
    componentRegistry.set(cacheKey, data);
    return data;
  }

  /**
   * Load external stylesheet
   */
  function loadStyles(href, target) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
      target.appendChild(link);
    });
  }

  /**
   * Load external script
   */
  function loadScript(src, target) {
    return new Promise((resolve, reject) => {
      if (loadedScripts.has(src)) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.type = 'module' ;
      script.onload = () => {
        loadedScripts.add(src);
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      target.appendChild(script);
    });
  }

  /**
   * Parse HTML template and extract styles and scripts
   */
  function parseTemplate(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    
    const styles = [];
    const scripts = [];
    let content = '';
    
    // Extract style elements
    const styleElements = template.content.querySelectorAll('style');
    styleElements.forEach(style => {
      styles.push(style.textContent);
      style.remove();
    });
    
    // Extract link elements (external styles)
    const linkElements = template.content.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(link => {
      styles.push({ href: link.href });
      link.remove();
    });
    
    // Extract script elements
    const scriptElements = template.content.querySelectorAll('script');
    scriptElements.forEach(script => {
      scripts.push({
        src: script.src || null,
        code: script.textContent || ''
      });
      script.remove();
    });
    
    // Get remaining content
    content = template.innerHTML;
    
    return { styles, scripts, content };
  }

  /**
   * Create a scoped style tag that encapsulates CSS
   */
  function createScopedStyle(css, prefix = 'uv-scope') {
    // Generate unique prefix for this component
    const scopeId = `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Simple CSS scoping (adds prefix to selectors)
    // Note: This is a simplified approach. For production, use Shadow DOM + adoptedStyleSheets
    const scopedCSS = css
      .replace(/:host\s*\{/g, `[${scopeId}] {`)
      .replace(/:host\(/g, `[${scopeId}](`)
      .replace(/\.([a-zA-Z][\w-]*)/g, (match, className) => {
        // Don't scope global selectors
        const globalClasses = ['container', 'wrapper', 'content', 'item', 'row', 'col'];
        if (globalClasses.includes(className)) {
          return match;
        }
        return `.${scopeId} .${className}`;
      });
    
    const style = document.createElement('style');
    style.textContent = scopedCSS;
    style.setAttribute('data-scoped', scopeId);
    
    return { style, scopeId };
  }

  /**
   * Component Loader Class
   */
  class ComponentLoader {
    constructor(tagName, definition) {
      this.tagName = tagName;
      this.definition = definition;
      this.initialized = false;
    }

    async init() {
      if (this.initialized) return;
      
      // Load template if provided
      if (this.definition.template) {
        const response = await fetch(this.definition.template);
        this.definition._templateHTML = await response.text();
      }
      
      this.initialized = true;
    }

    async loadAssets(shadowRoot) {
      const assets = this.definition.assets || {};
      
      // Load styles
      if (assets.styles) {
        const styles = Array.isArray(assets.styles) ? assets.styles : [assets.styles];
        for (const style of styles) {
          if (typeof style === 'string') {
            // Inline CSS
            const { style: styleEl } = createScopedStyle(style, this.tagName);
            shadowRoot.appendChild(styleEl);
          } else if (style.href) {
            // External stylesheet
            await loadStyles(style.href, shadowRoot);
          }
        }
      }
      
      // Load and execute scripts in realm
      if (assets.scripts) {
        const scripts = Array.isArray(assets.scripts) ? assets.scripts : [assets.scripts];
        for (const script of scripts) {
          if (script.src) {
            await loadScript(script.src, shadowRoot);
          }
          if (script.code) {
            await executeInRealm(script.code, {
              element: shadowRoot.host,
              shadowRoot: shadowRoot
            });
          }
        }
      }
    }

    render(attributes = {}, children = []) {
      const shadowRoot = this.createShadowRoot();
      
      // Parse and render template
      if (this.definition._templateHTML) {
        const { content } = parseTemplate(this.definition._templateHTML);
        shadowRoot.innerHTML = content;
      }
      
      // Handle children
      if (children.length > 0) {
        const slot = document.createElement('slot');
        shadowRoot.appendChild(slot);
      }
      
      return shadowRoot;
    }

    createShadowRoot() {
      // Create element to hold shadow root
      const element = this.createElement();
      
      // Attach closed shadow root
      const shadow = element.attachShadow({ mode: 'closed' });
      
      return shadow;
    }

    createElement() {
      // This will be called when the custom element is created
      return document.createElement(this.tagName);
    }
  }

  /**
   * Custom Element wrapper with Shadow DOM
   */
  class MicroComponent extends HTMLElement {
    constructor() {
      super();
      
      // Store loader reference
      this._loader = null;
      this._shadow = null;
      this._initialized = false;
      
      // Create closed shadow root
      this._shadow = this.attachShadow({ mode: 'closed' });
    }

    static get observedAttributes() {
      return [];
    }

    async connectedCallback() {
      if (this._initialized) return;
      this._initialized = true;
      
      // Get component definition
      const tagName = this.localName;
      const definition = componentRegistry.get(`__def_${tagName}`);
      
      if (!definition) {
        console.error(`[UVMicro] Component not registered: ${tagName}`);
        return;
      }
      
      // Load assets
      const loader = new ComponentLoader(tagName, definition);
      await loader.init();
      
      // Parse template
      if (definition._templateHTML) {
        const { styles, content } = parseTemplate(definition._templateHTML);
        
        // Add scoped styles
        for (const css of styles) {
          if (typeof css === 'string') {
            const { style, scopeId } = createScopedStyle(css, tagName);
            this._shadow.appendChild(style);
          } else if (css.href) {
            try {
              await loadStyles(css.href, this._shadow);
            } catch (e) {
              console.warn(`[UVMicro] Failed to load styles: ${css.href}`);
            }
          }
        }
        
        // Set content
        this._shadow.innerHTML = content;
        
        // Execute component initialization code
        if (definition.assets?.scripts) {
          for (const script of definition.assets.scripts) {
            if (script.code) {
              try {
                await executeInRealm(script.code, {
                  element: this,
                  shadowRoot: this._shadow,
                  attributes: this.getAttributes()
                });
              } catch (e) {
                console.warn(`[UVMicro] Script execution error in ${tagName}:`, e);
              }
            }
          }
        }
      }
      
      // Add slot for distributed content
      const slot = document.createElement('slot');
      this._shadow.appendChild(slot);
      
      log(`Component ${tagName} initialized`);
    }

    getAttributes() {
      const attrs = {};
      for (const attr of this.attributes) {
        attrs[attr.name] = attr.value;
      }
      return attrs;
    }

    disconnectedCallback() {
      log(`Component ${this.localName} disconnected`);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
      // Emit custom event for attribute changes
      this.dispatchEvent(new CustomEvent('attribute-change', {
        detail: { name, oldValue, newValue }
      }));
    }
  }

  /**
   * UVMicro Public API
   */
  const UVMicro = {
    /**
     * Initialize with a component registry URL
     */
    async init(registryUrl) {
      CONFIG.registryUrl = registryUrl;
      
      // Load registry
      const registry = await fetchJSON(registryUrl);
      
      // Register all components
      for (const [tagName, definition] of Object.entries(registry.components || {})) {
        await this.register(tagName, definition);
      }
      
      log('UVMicro initialized with', Object.keys(registry.components || {}).length, 'components');
      return this;
    },

    /**
     * Register a single component
     */
    async register(tagName, definition) {
      // Store definition
      componentRegistry.set(`__def_${tagName}`, definition);
      
      // Skip if already defined
      if (customElements.get(tagName)) {
        log(`Component ${tagName} already registered`);
        return this;
      }
      
      // Create custom element class
      class RegisteredComponent extends MicroComponent {
        static get observedAttributes() {
          return definition.props || [];
        }
      }
      
      // Define the custom element
      customElements.define(tagName, RegisteredComponent);
      log(`Component ${tagName} registered`);
      
      return this;
    },

    /**
     * Register multiple components at once
     */
    registerAll(components) {
      for (const [tagName, definition] of Object.entries(components)) {
        this.register(tagName, definition);
      }
      return this;
    },

    /**
     * Load a component from a URL
     */
    async load(url) {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.tagName) {
        await this.register(data.tagName, data);
      }
      
      return this;
    },

    /**
     * Execute code in an isolated realm
     */
    executeInRealm,

    /**
     * Get component definition
     */
    getDefinition(tagName) {
      return componentRegistry.get(`__def_${tagName}`);
    },

    /**
     * Check if component is registered
     */
    isRegistered(tagName) {
      return customElements.get(tagName) !== undefined;
    },

    /**
     * Configuration
     */
    config: CONFIG
  };

  // Export to global
  global.UVMicro = UVMicro;
  global.UVMicroVersion = '1.0.0';

  // Auto-initialize if configured
  if (CONFIG.registryUrl) {
    UVMicro.init(CONFIG.registryUrl);
  }

})(typeof window !== 'undefined' ? window : global);