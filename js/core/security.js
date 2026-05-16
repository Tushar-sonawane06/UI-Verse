/**
 * Frontend Security utilities
 * - Injects a Content-Security-Policy meta tag
 * - Safely migrates inline event handlers to addEventListener with strict validation
 * - Warns about external assets missing integrity attributes
 * - Provides testing utilities for CSP scenarios
 *
 * This file is safe to include via <script> early in the page head.
 * 
 * SECURITY MODEL:
 * - All inline handler functions MUST be explicitly whitelisted
 * - Function signatures are validated
 * - Arguments are strictly validated (no variadic args, object spreading, etc.)
 * - Handler migration fails gracefully with detailed warnings
 * - CSP meta tag prevents any unapproved inline scripts
 */

const Security = (function () {
  // =====================================================================
  // SECURITY CONFIGURATION
  // =====================================================================

  /**
   * STRICT WHITELIST of allowed inline handlers
   * Each entry specifies:
   * - funcName: Name of the function (must exist on window)
   * - maxArgs: Maximum allowed arguments
   * - allowedArgs: Regex patterns for allowed arguments
   * - description: What this handler does
   * 
   * ⚠️  CRITICAL: Only add handlers that are explicitly safe to call from HTML.
   * Do NOT add handlers that accept complex arguments or can be exploited.
   */
  const ALLOWED_HANDLERS = {
    // Code display utilities
    'toggleCode': {
      maxArgs: 2,
      allowedArgs: ['id', 'btn'],  // First arg is ID, second is optional 'this' reference
      description: 'Toggle code block visibility'
    },
    'copyCode': {
      maxArgs: 2,
      allowedArgs: ['id', 'this'],
      description: 'Copy code to clipboard'
    },
    'copyColor': {
      maxArgs: 1,
      allowedArgs: ['color'],
      description: 'Copy color value to clipboard'
    },
    'copyRGB': {
      maxArgs: 1,
      allowedArgs: ['value'],
      description: 'Copy RGB value to clipboard'
    },

    // Navigation utilities
    'toggleSidebar': {
      maxArgs: 0,
      allowedArgs: [],
      description: 'Toggle sidebar menu visibility'
    },
    'toggleMenu': {
      maxArgs: 0,
      allowedArgs: [],
      description: 'Alias for toggleSidebar'
    },
    'closeSidebar': {
      maxArgs: 0,
      allowedArgs: [],
      description: 'Close sidebar menu'
    },
    'scrollToTop': {
      maxArgs: 0,
      allowedArgs: [],
      description: 'Scroll page to top'
    },

    // Modal/popup utilities
    'openPopup': {
      maxArgs: 0,
      allowedArgs: [],
      description: 'Open popup/modal dialog'
    },
    'closePopup': {
      maxArgs: 0,
      allowedArgs: [],
      description: 'Close popup/modal dialog'
    },

    // Alert utilities
    'closeAlert': {
      maxArgs: 1,
      allowedArgs: ['alertId', 'this'],
      description: 'Close alert by ID or element reference'
    },
    'subscribe': {
      maxArgs: 1,
      allowedArgs: ['event'],
      description: 'Handle newsletter subscription'
    },

    // Collection/gallery utilities
    'addToCollection': {
      maxArgs: 2,
      allowedArgs: ['name', 'html'],
      description: 'Add component to collection'
    },
    'handleSearch': {
      maxArgs: 1,
      allowedArgs: ['event'],
      description: 'Handle search input'
    }
  };

  /**
   * Pragmatic CSP policy that:
   * - Blocks ALL inline scripts (no 'unsafe-inline' for scripts)
   * - Allows styles inline (needed for dynamic theming)
   * - Allows safe external resources
   * - Restricts framing and plugins
   */
  const CSP_POLICY = [
    "default-src 'self'",
    "script-src 'self'",
    "connect-src 'self' https:",
    "img-src 'self' data: https:",
    "style-src 'self' 'unsafe-inline' https:",
    "font-src 'self' data: https:",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ].join('; ');

  // =====================================================================
  // EVENT HANDLER MIGRATION
  // =====================================================================

  /**
   * Validate that an inline handler call is safe to migrate
   * @param {string} funcName - Name of function to call
   * @param {string} argsRaw - Raw arguments string from HTML
   * @returns {object} { valid: boolean, error: string|null }
   */
  function validateHandler(funcName, argsRaw) {
    // Check if handler is whitelisted
    if (!ALLOWED_HANDLERS[funcName]) {
      return {
        valid: false,
        error: `Handler "${funcName}" is not whitelisted. Add to ALLOWED_HANDLERS in security.js if safe.`
      };
    }

    const config = ALLOWED_HANDLERS[funcName];
    const args = parseArguments(argsRaw);

    // Check argument count
    if (args.length > config.maxArgs) {
      return {
        valid: false,
        error: `Handler "${funcName}" expects max ${config.maxArgs} args, got ${args.length}`
      };
    }

    // Validate each argument
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const allowed = config.allowedArgs[i];

      // Check if argument matches allowed pattern
      if (!isArgumentAllowed(arg, allowed)) {
        return {
          valid: false,
          error: `Handler "${funcName}" arg ${i}: "${arg}" not in allowed list [${config.allowedArgs.join(', ')}]`
        };
      }
    }

    // Check that function exists and is callable
    if (typeof window[funcName] !== 'function') {
      return {
        valid: false,
        error: `Handler "${funcName}" is not a function on window`
      };
    }

    return { valid: true, error: null };
  }

  /**
   * Parse arguments from raw HTML string
   * Only accepts simple literals and keywords: 'string', variable names, event, this
   * Rejects: function calls, template literals, spread syntax, etc.
   * @param {string} argsRaw - Raw arguments from HTML onclick, etc.
   * @returns {string[]} Array of argument strings
   */
  function parseArguments(argsRaw) {
    if (!argsRaw || argsRaw.trim() === '') return [];

    // Split by comma but be careful about quoted strings
    const args = [];
    let current = '';
    let inQuote = false;
    let quoteChar = '';

    for (let i = 0; i < argsRaw.length; i++) {
      const char = argsRaw[i];

      if ((char === '"' || char === "'") && (i === 0 || argsRaw[i - 1] !== '\\')) {
        if (!inQuote) {
          inQuote = true;
          quoteChar = char;
        } else if (char === quoteChar) {
          inQuote = false;
        }
      }

      if (char === ',' && !inQuote) {
        args.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    if (current.trim()) args.push(current.trim());

    return args;
  }

  /**
   * Check if argument matches allowed pattern
   * @param {string} arg - Argument value
   * @param {string} allowed - Allowed pattern (variable name or 'event' or 'this')
   * @returns {boolean}
   */
  function isArgumentAllowed(arg, allowed) {
    if (!allowed) return false;

    // Direct match: 'event', 'this', or variable name
    if (arg === allowed) return true;

    // If allowed pattern is 'id', accept string literals
    if (allowed === 'id' && /^['"].*['"]$/.test(arg)) return true;

    // If allowed pattern is 'color' or 'value', accept string literals
    if ((allowed === 'color' || allowed === 'value' || allowed === 'html' || allowed === 'name') &&
        /^['"].*['"]$/.test(arg)) return true;

    return false;
  }

  /**
   * Migrate inline event handlers to addEventListener
   * Only migrates handlers that pass strict validation
   */
  function migrateInlineHandlers() {
    try {
      const attrs = ['onclick', 'onchange', 'onsubmit', 'oninput', 'onkeydown', 'onkeyup', 'onfocus', 'onblur'];
      let migrated = 0;
      let skipped = 0;
      let failed = 0;

      const elements = Array.from(document.querySelectorAll('*'));
      
      elements.forEach((el) => {
        attrs.forEach((attr) => {
          if (!el.hasAttribute || !el.hasAttribute(attr)) return;

          const code = el.getAttribute(attr).trim();
          if (!code) return;

          // Match pattern: funcName(args)
          // Stricter regex: must start with letter/underscore, only alphanumeric/underscore in name
          const m = code.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*\((.*)\)\s*;?$/);
          
          if (!m) {
            // Cannot parse - keep attribute and warn
            console.warn(`[Security] Unable to parse inline ${attr}="${code}" on <${el.tagName.toLowerCase()}>. ` +
              `Only simple function calls like func() or func(arg1, arg2) are supported.`);
            failed++;
            return;
          }

          const funcName = m[1];
          const argsRaw = m[2].trim();
          const eventName = attr.slice(2);

          // Validate using strict whitelist
          const validation = validateHandler(funcName, argsRaw);
          
          if (!validation.valid) {
            console.warn(`[Security] Cannot migrate inline ${attr}="${code}" on <${el.tagName.toLowerCase()}>: ${validation.error}`);
            failed++;
            return;
          }

          // Migration is safe - attach listener
          try {
            const args = parseArguments(argsRaw);
            el.addEventListener(eventName, function (ev) {
              try {
                const callArgs = [];
                args.forEach(arg => {
                  if (arg === 'event' || arg === 'this') {
                    // These get replaced at call time
                    callArgs.push(arg === 'this' ? this : ev);
                  } else if (/^['"].*['"]$/.test(arg)) {
                    // String literal - remove quotes
                    callArgs.push(arg.slice(1, -1));
                  } else {
                    // Variable reference - get from window
                    callArgs.push(window[arg]);
                  }
                });
                window[funcName].apply(this, callArgs);
              } catch (err) {
                console.error(`[Security] Error in migrated handler ${funcName}()`, err);
              }
            });
            
            el.removeAttribute(attr);
            if (window.UIVERSE_DEBUG) {
              console.info(`[Security] ✓ Migrated ${attr}="${code}" on <${el.tagName.toLowerCase()}> (event: ${eventName})`);
            }
            migrated++;
          } catch (err) {
            console.error(`[Security] Failed to attach listener for ${funcName}()`, err);
            failed++;
          }
        });
      });

      console.info(`[Security] Handler migration complete: ${migrated} migrated, ${failed} failed, ${skipped} skipped`);
    } catch (e) {
      console.error('[Security] Inline handler migration failed', e);
    }
  }

  /**
   * Check external assets for integrity attributes
   * Warns about external scripts/stylesheets without SRI
   */
  function warnExternalAssets() {
    try {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"][href]'));

      // Check scripts
      scripts.forEach((s) => {
        const src = s.getAttribute('src') || '';
        if (/^https?:\/\//.test(src) && !s.hasAttribute('integrity')) {
          console.warn(`[Security] External script without integrity attribute: ${src}`);
        }
      });

      // Check stylesheets
      links.forEach((l) => {
        const href = l.getAttribute('href') || '';
        if (/^https?:\/\//.test(href) && !l.hasAttribute('integrity')) {
          console.warn(`[Security] External stylesheet without integrity attribute: ${href}`);
        }
      });
    } catch (e) {
      console.error('[Security] Asset trust check failed', e);
    }
  }

  /**
   * Inject CSP meta tag
   */
  function injectCSP() {
    try {
      if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', CSP_POLICY);
        document.head.prepend(meta);
        console.info('[Security] Injected Content-Security-Policy meta tag');
      }
    } catch (e) {
      console.error('[Security] CSP injection failed', e);
    }
  }

  /**
   * Public API for testing
   */
  function getStatus() {
    return {
      cspPolicy: CSP_POLICY,
      allowedHandlers: Object.keys(ALLOWED_HANDLERS),
      handlersCount: Object.keys(ALLOWED_HANDLERS).length
    };
  }

  /**
   * Public API for validating handlers in tests
   */
  function testValidation(funcName, args) {
    return validateHandler(funcName, args);
  }

  function init() {
    // Inject CSP as early as possible
    injectCSP();

    // Defer DOM-walking to DOMContentLoaded to ensure elements are present
    document.addEventListener('DOMContentLoaded', () => {
      migrateInlineHandlers();
      warnExternalAssets();
    });
  }

  return {
    init,
    getStatus,
    testValidation,
    ALLOWED_HANDLERS
  };
})();

// Expose globally
window.Security = Security;
