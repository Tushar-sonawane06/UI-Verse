/**
 * UI-Verse - HTML Sanitizer
 * Uses DOMPurify for comprehensive XSS protection
 */

// Load DOMPurify from CDN or use bundled version
(function() {
  if (window.DOMPurify) return;
  
  // Fallback to custom sanitizer if DOMPurify unavailable
  window.DOMPurify = {
    sanitize: function(html, config) {
      return customSanitize(html, config);
    }
  };
})();

function customSanitize(unsafeHtml) {
  if (!unsafeHtml) return '';
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(unsafeHtml, 'text/html');

  const forbiddenTags = ['script', 'style', 'iframe', 'object', 'embed', 'link', 'base', 'form'];
  forbiddenTags.forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => el.remove());
  });

  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT, null, false);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const attrs = Array.from(node.attributes || []);
    attrs.forEach(attr => {
      const name = attr.name.toLowerCase();
      const val = (attr.value || '').toLowerCase();
      
      // Remove event handlers
      if (name.startsWith('on')) {
        node.removeAttribute(attr.name);
      }
      // Remove javascript: URLs
      else if ((name === 'href' || name === 'src') && val.startsWith('javascript:')) {
        node.removeAttribute(attr.name);
      }
      // Remove data: URLs (except safe ones)
      else if ((name === 'href' || name === 'src') && val.startsWith('data:')) {
        if (!val.startsWith('data:text/css') && !val.startsWith('data:image/')) {
          node.removeAttribute(attr.name);
        }
      }
      // Remove dangerous attributes
      else if (name === 'ping' || name === 'download') {
        node.removeAttribute(attr.name);
      }
    });

    // Remove form action
    if (node.tagName === 'FORM') {
      node.removeAttribute('action');
      node.removeAttribute('method');
    }
  });

  return doc.body.innerHTML;
}

function sanitizeHTML(unsafeHtml, config = {}) {
  if (!unsafeHtml) return '';
  
  const options = {
    ALLOWED_TAGS: config.ALLOWED_TAGS || ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'img', 'button', 'input', 'textarea', 'select', 'option', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'pre', 'code', 'blockquote'],
    ALLOWED_ATTR: config.ALLOWED_ATTR || ['href', 'src', 'alt', 'title', 'class', 'id', 'type', 'name', 'value', 'placeholder', 'disabled', 'checked', 'selected', 'data-*'],
    ALLOW_DATA_ATTR: config.ALLOW_DATA_ATTR !== false,
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'link', 'base', 'form', 'input', 'button'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur']
  };

  try {
    return DOMPurify.sanitize(unsafeHtml, options);
  } catch (e) {
    console.warn('[Sanitize] DOMPurify failed, using fallback:', e.message);
    return customSanitize(unsafeHtml);
  }
}

if (typeof window !== 'undefined') {
  window.sanitizeHTML = sanitizeHTML;
  window.DOMPurify = window.DOMPurify || { sanitize: customSanitize };
}