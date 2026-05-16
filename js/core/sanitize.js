// Lightweight HTML sanitizer (DOMParser-based). Not a full replacement for DOMPurify
// Removes <script>, <style>, <iframe>, <object>, <embed> and strips attributes starting with "on" and javascript: URIs.
function sanitizeHTML(unsafeHtml) {
  if (!unsafeHtml) return '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(unsafeHtml, 'text/html');

  const forbiddenTags = ['script', 'style', 'iframe', 'object', 'embed'];
  forbiddenTags.forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => el.remove());
  });

  // Remove event handlers and javascript: URIs
  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT, null, false);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    // copy attributes to avoid modifying while iterating
    const attrs = Array.from(node.attributes || []);
    attrs.forEach(attr => {
      const name = attr.name.toLowerCase();
      const val = (attr.value || '').toLowerCase();
      if (name.startsWith('on')) {
        node.removeAttribute(attr.name);
      } else if ((name === 'href' || name === 'src') && val.startsWith('javascript:')) {
        node.removeAttribute(attr.name);
      }
    });
  });

  return doc.body.innerHTML || '';
}

// Expose for CommonJS/AMD if needed (keeps compatibility with simple script usage)
if (typeof window !== 'undefined') window.sanitizeHTML = sanitizeHTML;
module.exports = typeof module !== 'undefined' ? sanitizeHTML : undefined;
