/**
 * Shared Utility Functions
 * Core helpers used across multiple features
 */

// Production builds keep debug output disabled unless explicitly enabled.
window.UIVERSE_DEBUG = Boolean(window.UIVERSE_DEBUG);

/**
 * Create a normalized URL object from any href/path.
 * Always resolves against the current page so relative routes work
 * from nested directories and when query/hash values are present.
 * @param {string} href
 * @returns {URL}
 */
function getNormalizedURL(href = window.location.href) {
  return new URL(href, window.location.href);
}

/**
 * Get the current page filename without query or hash.
 * Examples: "index.html", "button.html".
 * @param {string} href
 * @returns {string}
 */
function getCurrentPageName(href = window.location.href) {
  const normalizedURL = getNormalizedURL(href);
  const segments = normalizedURL.pathname.split('/').filter(Boolean);
  return (segments.pop() || 'index.html').toLowerCase();
}

/**
 * Resolve a route against the current page and optionally attach search params.
 * @param {string} path
 * @param {Record<string, string|number|boolean|undefined|null>} params
 * @returns {string}
 */
function resolveRouteURL(path, params = {}) {
  const url = getNormalizedURL(path);
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value === undefined || value === null || String(value).trim() === '') return;
    url.searchParams.set(key, String(value));
  });
  url.hash = '';
  return url.href;
}

/**
 * Show a toast notification message
 * @param {string} message - The message to display
 */
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  // Trigger slide-in (double rAF ensures the element is painted first)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-visible");
    });
  });

  // Auto-dismiss after 2 seconds
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2000);
}

/**
 * Check if element exists in DOM
 * @param {string} id - Element ID
 * @returns {HTMLElement|null}
 */
function getElement(id) {
  return document.getElementById(id) || null;
}

/**
 * Safely add event listener with existence check
 * @param {string} selector - Element selector
 * @param {string} event - Event type
 * @param {Function} handler - Handler function
 */
function addEventListener(selector, event, handler) {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
    elements.forEach(el => el.addEventListener(event, handler));
  }
}
