/**
 * Frontend Security utilities
 * - Injects a pragmatic Content-Security-Policy meta tag
 * - Attempts to migrate simple inline event handlers to addEventListener
 * - Warns about external assets missing integrity attributes
 *
 * This file is safe to include via <script> early in the page head.
 */

const Security = (function () {
  function injectCSP() {
    try {
      // Pragmatic CSP that disallows inline scripts but allows styles and common assets
      const policy = [
        "default-src 'self' https:",
        "script-src 'self' https:",
        "connect-src 'self' https:",
        "img-src 'self' data: https:",
        "style-src 'self' 'unsafe-inline' https:",
        "font-src 'self' data: https:",
        "object-src 'none'",
        "base-uri 'self'",
        "frame-ancestors 'none'"
      ].join('; ');

      // Add meta CSP only if not present
      if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', policy);
        document.head.prepend(meta);
        console.info('[Security] Injected pragmatic CSP meta tag');
      }
    } catch (e) {
      console.warn('[Security] CSP injection failed', e);
    }
  }

  function migrateInlineHandlers() {
    try {
      // Attributes to consider
      const attrs = ['onclick','onchange','onsubmit','oninput','onkeydown','onkeyup','onfocus','onblur'];

      const elements = Array.from(document.querySelectorAll('*'));
      elements.forEach((el) => {
        attrs.forEach((attr) => {
          if (!el.hasAttribute || !el.hasAttribute(attr)) return;
          const code = el.getAttribute(attr).trim();
          if (!code) return;

          // Try to match simple function call patterns: funcName() or funcName(event)
          const m = code.match(/^([A-Za-z_$][\w$]*)\s*\((.*)\)\s*;?$/);
          const eventName = attr.slice(2);

          if (m) {
            const funcName = m[1];
            const argsRaw = m[2].trim();

            // Only migrate when no complex args (allow empty or 'event' or 'this')
            const safeArgs = argsRaw === '' || /^\s*(event|this)\s*$/.test(argsRaw);
            if (typeof window[funcName] === 'function' && safeArgs) {
              el.addEventListener(eventName, function (ev) {
                try { window[funcName].call(this, ev); } catch (err) { console.error('[Security] migrated handler error', err); }
              });
              el.removeAttribute(attr);
              console.info(`[Security] Migrated inline ${attr} on <${el.tagName.toLowerCase()}> to addEventListener -> ${funcName}()`);
              return;
            }
          }

          // If we reach here, we cannot safely migrate; log a warning and keep attribute
          console.warn(`[Security] Inline handler kept on <${el.tagName.toLowerCase()}> (${attr}). Consider refactoring to a named function call.`);
        });
      });
    } catch (e) {
      console.warn('[Security] Inline handler migration failed', e);
    }
  }

  function warnExternalAssets() {
    try {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      scripts.forEach((s) => {
        const src = s.getAttribute('src') || '';
        if (/^https?:\/\//.test(src) && !s.hasAttribute('integrity')) {
          console.warn('[Security] External script without `integrity` found:', src);
        }
      });

      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"][href]'));
      links.forEach((l) => {
        const href = l.getAttribute('href') || '';
        if (/^https?:\/\//.test(href) && !l.hasAttribute('integrity')) {
          console.warn('[Security] External stylesheet without `integrity` found:', href);
        }
      });
    } catch (e) {
      console.warn('[Security] Asset trust check failed', e);
    }
  }

  function init() {
    // Run as early as possible
    injectCSP();

    // Defer DOM-walking to DOMContentLoaded to ensure elements present
    document.addEventListener('DOMContentLoaded', () => {
      migrateInlineHandlers();
      warnExternalAssets();
    });
  }

  return { init };
})();

// Expose globally
window.Security = Security;
