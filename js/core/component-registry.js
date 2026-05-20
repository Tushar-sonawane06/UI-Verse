/*
Component registry for UI-Verse Web Components
Auto-registers components when their module is imported.
Provides helper to register multiple components and backward-compatibility wrappers.
*/

const ComponentRegistry = (function () {
  const registry = new Map();

  function define(tagName, elementClass) {
    if (!tagName || typeof tagName !== 'string') throw new Error('Invalid tagName');
    if (customElements.get(tagName)) return; // already defined
    customElements.define(tagName, elementClass);
    registry.set(tagName, elementClass);
    return elementClass;
  }

  function get(tagName) {
    return registry.get(tagName) || customElements.get(tagName);
  }

  function list() {
    return Array.from(registry.keys());
  }

  // Create a backward compat wrapper: replace elements with custom element
  function upgradeExisting(selector = '[data-uv-component]') {
    document.querySelectorAll(selector).forEach((el) => {
      const type = el.getAttribute('data-uv-component');
      if (!type) return;
      const tag = `uv-${type}`;
      if (!customElements.get(tag)) return;
      try {
        const attrs = Array.from(el.attributes).reduce((acc, a) => {
          acc[a.name] = a.value; return acc;
        }, {});
        const newEl = document.createElement(tag);
        Object.keys(attrs).forEach((name) => newEl.setAttribute(name, attrs[name]));
        // Move children
        while (el.firstChild) newEl.appendChild(el.firstChild);
        el.replaceWith(newEl);
      } catch (e) {
        console.warn('upgradeExisting failed for', el, e);
      }
    });
  }

  return { define, get, list, upgradeExisting };
})();

export default ComponentRegistry;
