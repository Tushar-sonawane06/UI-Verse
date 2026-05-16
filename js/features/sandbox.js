/**
 * Live Sandbox Feature
 * Provides live preview iframe for code examples
 */

const Sandbox = {
  _state: {
    initialized: false
  },

  /**
   * Sanitize HTML to prevent XSS and unsafe content
   */
  sanitizeHTML(html) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
  },

  /**
   * Remove potentially dangerous elements and attributes
   */
  removeUnsafePatterns(html) {
    let sanitized = html;
    sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/javascript:/gi, '');
    sanitized = sanitized.replace(/data:(?!text\/css)(?!image\/)/gi, '');
    return sanitized;
  },

  /**
   * Initialize live sandboxes (iframes with editable code)
   */
  init() {
    if (this._state.initialized) return;

    const componentCards = document.querySelectorAll(".component-card");
    if (componentCards.length === 0) return;

    componentCards.forEach((card, index) => {
      const h3 = card.querySelector("h3");
      const actions = card.querySelector(".actions");
      const existingCodeBlock = card.querySelector(".code-block");

      const previewNodes = Array.from(card.childNodes).filter((node) => {
        return (
          (node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "")) &&
          node !== h3 &&
          node !== actions &&
          node !== existingCodeBlock &&
          node.nodeName !== "SCRIPT"
        );
      });

      if (previewNodes.length === 0 && !existingCodeBlock) return;

      let initialHTML = existingCodeBlock
        ? existingCodeBlock.textContent.trim()
        : previewNodes.map((n) => n.outerHTML || n.textContent).join("\n").trim();

      previewNodes.forEach((node) => node.remove());

      // Create iframe preview
      const iframe = document.createElement("iframe");
      iframe.style.width = "100%";
      iframe.style.minHeight = "160px";
      iframe.style.border = "1px solid #e8ebf2";
      iframe.style.borderRadius = "8px";
      iframe.style.background = "transparent";
      iframe.setAttribute("sandbox", "allow-scripts");
      iframe.setAttribute("title", "Live component preview");
      iframe.loading = "lazy";

      // Create editable textarea
      const textarea = document.createElement("textarea");
      if (existingCodeBlock) {
        textarea.id = existingCodeBlock.id;
        textarea.className = existingCodeBlock.className;
        textarea.style.display = existingCodeBlock.style.display || "none";
      } else {
        textarea.id = "live-code-" + index;
        textarea.className = "code-block";
        textarea.style.display = "none";

        if (actions) {
          const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]');
          const copyBtn = actions.querySelector('button[onclick^="copyCode"]');
          if (toggleBtn) toggleBtn.setAttribute("onclick", `toggleCode("${textarea.id}")`);
          if (copyBtn) copyBtn.setAttribute("onclick", `copyCode("${textarea.id}", this)`);
        }
      }

      textarea.value = initialHTML;
      textarea.style.width = "100%";
      textarea.style.minHeight = "120px";
      textarea.style.boxSizing = "border-box";
      textarea.style.resize = "vertical";

      const renderIframe = (htmlContent) => {
        const safeHTML = Sandbox.removeUnsafePatterns(Sandbox.sanitizeHTML(htmlContent));
        iframe.srcdoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <style>
              :root {
                color-scheme: light;
              }

              body {
                min-height: 100vh;
                margin: 0;
                background: transparent;
                padding: 20px;
                box-sizing: border-box;
                position: relative;
                font-family: inherit;
              }

              #sandbox-root {
                min-height: calc(100vh - 40px);
              }

              .sandbox-error-overlay {
                position: fixed;
                inset: 12px;
                z-index: 9999;
                display: none;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 16px;
                background: rgba(127, 29, 29, 0.94);
                color: #fff;
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 12px;
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
                font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
              }

              .sandbox-error-overlay.is-visible {
                display: flex;
              }

              .sandbox-error-card {
                width: 100%;
                max-width: 100%;
              }

              .sandbox-error-title {
                margin: 0 0 8px;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: uppercase;
              }

              .sandbox-error-message {
                margin: 0;
                font-size: 13px;
                line-height: 1.6;
                white-space: pre-wrap;
                word-break: break-word;
              }

              .sandbox-error-meta {
                margin-top: 10px;
                font-size: 12px;
                opacity: 0.85;
              }

              .sandbox-error-hint {
                margin-top: 12px;
                font-size: 12px;
                opacity: 0.8;
              }
            </style>
            <script>
              (function () {
                const overlayId = 'sandbox-error-overlay';

                function getOverlay() {
                  let overlay = document.getElementById(overlayId);
                  if (overlay) return overlay;

                  overlay = document.createElement('div');
                  overlay.id = overlayId;
                  overlay.className = 'sandbox-error-overlay';
                  overlay.innerHTML = [
                    '<div class="sandbox-error-card">',
                    '<p class="sandbox-error-title">Live preview error</p>',
                    '<p class="sandbox-error-message"></p>',
                    '<div class="sandbox-error-meta"></div>',
                    '<div class="sandbox-error-hint">Fix the code in the editor below and the preview will refresh automatically.</div>',
                    '</div>'
                  ].join('');
                  document.body.appendChild(overlay);
                  return overlay;
                }

                function formatError(event) {
                  if (!event) return 'An unknown runtime error occurred.';

                  if (event.message) {
                    const location = event.filename ? ' (' + event.filename + ':' + (event.lineno || '?') + ':' + (event.colno || '?') + ')' : '';
                    return event.message + location;
                  }

                  if (event.reason) {
                    if (typeof event.reason === 'string') return event.reason;
                    if (event.reason.message) return event.reason.message;
                  }

                  return 'An unknown runtime error occurred.';
                }

                function showError(event) {
                  const overlay = getOverlay();
                  const messageEl = overlay.querySelector('.sandbox-error-message');
                  const metaEl = overlay.querySelector('.sandbox-error-meta');

                  const formatted = formatError(event);
                  messageEl.textContent = formatted;
                  metaEl.textContent = event && event.error && event.error.stack ? event.error.stack : '';
                  overlay.classList.add('is-visible');

                  // notify parent window about the error for UI integration
                  try {
                    window.parent && window.parent.postMessage && window.parent.postMessage({
                      type: 'sandbox:error',
                      message: formatted,
                      meta: metaEl.textContent
                    }, '*');
                  } catch (e) { /* ignore */ }
                }

                function clearError() {
                  const overlay = document.getElementById(overlayId);
                  if (overlay) overlay.classList.remove('is-visible');
                  try { window.parent && window.parent.postMessage && window.parent.postMessage({ type: 'sandbox:clear' }, '*'); } catch (e) {}
                }

                window.addEventListener('error', showError);
                window.addEventListener('unhandledrejection', function (event) {
                  showError(event);
                });

                window.addEventListener('load', function () {
                  clearError();
                });
              })();
            </script>
          </head>
          <body>
            <div id="sandbox-root">${safeHTML}</div>
          </body>
          </html>`;
      };

      renderIframe(initialHTML);

      // Debounced live update
      let timeout;
      textarea.addEventListener("input", (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => renderIframe(e.target.value), 300);
      });

      if (h3) {
        h3.after(iframe);
      } else {
        card.insertBefore(iframe, card.firstChild);
      }

      if (existingCodeBlock) {
        existingCodeBlock.replaceWith(textarea);
      } else if (actions) {
        actions.after(textarea);
      }

      // Parent-level overlay: show iframe-reported runtime errors in the host page
      (function () {
        function getParentOverlay() {
          const id = 'parent-sandbox-error-overlay';
          let el = document.getElementById(id);
          if (el) return el;
          el = document.createElement('div');
          el.id = id;
          el.style.position = 'absolute';
          el.style.zIndex = 99999;
          el.style.pointerEvents = 'auto';
          el.style.left = iframe.offsetLeft + 'px';
          el.style.top = (iframe.offsetTop + 8) + 'px';
          el.style.right = (document.body.clientWidth - iframe.offsetWidth - iframe.offsetLeft) + 'px';
          el.style.background = 'rgba(127,29,29,0.96)';
          el.style.color = '#fff';
          el.style.padding = '12px';
          el.style.borderRadius = '8px';
          el.style.maxWidth = 'min(90%, 600px)';
          el.style.fontFamily = 'ui-monospace, SFMono-Regular, Consolas, monospace';
          el.style.display = 'none';
          el.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          el.innerHTML = '<div class="ps-title" style="font-weight:700;margin-bottom:6px;font-size:13px">Live preview error</div><div class="ps-message" style="font-size:13px;white-space:pre-wrap"></div><div style="margin-top:8px;text-align:right"><button class="ps-close" style="background:transparent;border:1px solid rgba(255,255,255,0.12);color:#fff;padding:6px 8px;border-radius:6px;cursor:pointer">Dismiss</button></div>';
          document.body.appendChild(el);
          el.querySelector('.ps-close').addEventListener('click', () => el.style.display = 'none');
          return el;
        }

        function handleMessage(e) {
          const data = e.data || {};
          if (!data || (data.type !== 'sandbox:error' && data.type !== 'sandbox:clear')) return;
          // ensure message from this iframe
          if (e.source !== iframe.contentWindow) return;
          const overlay = getParentOverlay();
          if (data.type === 'sandbox:clear') {
            overlay.style.display = 'none';
            return;
          }
          overlay.querySelector('.ps-message').textContent = data.message + (data.meta ? '\n\n' + data.meta : '');
          // position overlay near iframe
          const rect = iframe.getBoundingClientRect();
          overlay.style.left = (rect.left + window.scrollX + 8) + 'px';
          overlay.style.top = (rect.top + window.scrollY + 8) + 'px';
          overlay.style.display = 'block';
        }

        window.addEventListener('message', handleMessage, false);
      })();
    });

    this._state.initialized = true;
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sandbox;
}
