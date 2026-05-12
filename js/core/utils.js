/**
 * Shared Utility Functions
 * Core helpers used across multiple features
 */

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
