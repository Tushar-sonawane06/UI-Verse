/**
 * Component Download Feature
 * Downloads individual component packages (HTML + CSS + JS) as ZIP files.
 */

const Download = {
  _state: {
    initialized: false,
    jsZipPromise: null
  },

  _storageKeys: {
    counts: 'uiVerseDownloadCounts'
  },

  init() {
    if (this._state.initialized) return;

    this._injectStyles();
    this._injectDownloadButtons();
    this._state.initialized = true;
  },

  _injectStyles() {
    if (document.getElementById('uiverse-download-style')) return;

    const style = document.createElement('style');
    style.id = 'uiverse-download-style';
    style.textContent = `
      .download-zip-btn .download-count-pill {
        margin-left: 6px;
        border: 1px solid rgba(255, 255, 255, 0.24);
        border-radius: 999px;
        padding: 1px 6px;
        font-size: 10px;
        line-height: 1;
        opacity: 0.9;
      }
    `;
    document.head.appendChild(style);
  },

  _normalizePath(value) {
    return String(value || '').split('?')[0].split('#')[0];
  },

  _normalizeId(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  _getPageSlug() {
    const pathname = this._normalizePath(window.location.pathname || '');
    const segment = pathname.split('/').filter(Boolean).pop() || 'index.html';
    return segment.replace(/\.html?$/i, '').toLowerCase();
  },

  _loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-download-lib="${src}"]`);
      if (existing) {
        if (window.JSZip) {
          resolve();
        } else {
          existing.addEventListener('load', () => resolve(), { once: true });
          existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        }
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.dataset.downloadLib = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  },

  _loadJSZip() {
    if (window.JSZip) {
      return Promise.resolve(window.JSZip);
    }

    if (!this._state.jsZipPromise) {
      this._state.jsZipPromise = this._loadScript('https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js')
        .then(() => window.JSZip)
        .catch((error) => {
          this._state.jsZipPromise = null;
          throw error;
        });
    }

    return this._state.jsZipPromise;
  },

  _readCounts() {
    try {
      const raw = localStorage.getItem(this._storageKeys.counts);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
      return {};
    }
  },

  _writeCounts(data) {
    localStorage.setItem(this._storageKeys.counts, JSON.stringify(data || {}));
  },

  _incrementCount(componentId) {
    const id = this._normalizeId(componentId);
    if (!id) return 0;

    const counts = this._readCounts();
    counts[id] = Number(counts[id] || 0) + 1;
    this._writeCounts(counts);
    return counts[id];
  },

  _getCount(componentId) {
    const id = this._normalizeId(componentId);
    if (!id) return 0;

    const counts = this._readCounts();
    return Number(counts[id] || 0);
  },

  _extractCodeId(actions) {
    const copyButton = actions.querySelector('button[onclick*="copyCode"]');
    const toggleButton = actions.querySelector('button[onclick*="toggleCode"]');
    const reference = copyButton || toggleButton;
    const onclick = reference ? (reference.getAttribute('onclick') || '') : '';
    const match = onclick.match(/['"]([^'"]+)['"]/);
    return match ? match[1] : '';
  },

  _resolveCodeTextById(codeId) {
    const element = document.getElementById(codeId);
    if (!element) return '';

    return (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT')
      ? element.value
      : (element.innerText || element.textContent || '');
  },

  _resolveCodeTextFromCard(card) {
    if (!card) return '';

    const codeNode = card.querySelector('.code-block, pre code, pre, textarea');
    if (!codeNode) return '';

    if (codeNode.tagName === 'TEXTAREA' || codeNode.tagName === 'INPUT') {
      return codeNode.value || '';
    }

    return codeNode.innerText || codeNode.textContent || '';
  },

  _extractHtmlCssJs(rawCode) {
    const text = String(rawCode || '').trim();
    if (!text) {
      return { html: '', css: '', js: '' };
    }

    const cssMatch = text.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const jsMatch = text.match(/<script[^>]*>([\s\S]*?)<\/script>/i);

    let html = text
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .trim();

    if (/<!doctype html>/i.test(text) || /<html[\s>]/i.test(text)) {
      return {
        html: text,
        css: cssMatch ? cssMatch[1].trim() : '',
        js: jsMatch ? jsMatch[1].trim() : ''
      };
    }

    if (!/<[a-z][\s\S]*>/i.test(html)) {
      html = `<div class="component-root">${html}</div>`;
    }

    return {
      html,
      css: cssMatch ? cssMatch[1].trim() : '',
      js: jsMatch ? jsMatch[1].trim() : ''
    };
  },

  _collectLocalStylesheets() {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"][href]'));
    return links
      .map((link) => this._normalizePath(link.getAttribute('href')))
      .filter((href) => href && !/^https?:\/\//i.test(href) && !href.startsWith('data:'))
      .filter((href) => !href.toLowerCase().includes('font-awesome'));
  },

  _collectLocalScripts() {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    return scripts
      .map((script) => this._normalizePath(script.getAttribute('src')))
      .filter((href) => href && !/^https?:\/\//i.test(href) && !href.startsWith('data:'))
      .filter((href) => !href.toLowerCase().endsWith('bootstrap.js'))
      .filter((href) => !href.toLowerCase().endsWith('script.js'));
  },

  async _fetchAssetText(assetPath) {
    const resolved = new URL(assetPath, document.baseURI).href;
    const response = await fetch(resolved, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Failed to fetch ${assetPath}`);
    return response.text();
  },

  _buildTemplateHtml(componentHtml) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UIverse Component Export</title>
  <link rel="stylesheet" href="component.css">
</head>
<body>
${componentHtml}
<script src="component.js"></script>
</body>
</html>
`;
  },

  _downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1200);
  },

  _resolveComponentMeta(actions, fallbackCodeId) {
    const card = actions?.closest?.('.component-card') || null;
    const pageSlug = this._getPageSlug();
    const label = card?.querySelector('.card-label, h3, h2, h4')?.textContent?.trim() || fallbackCodeId || 'component';

    const componentId = this._normalizeId(`${pageSlug}-${label}`);
    const filenameBase = this._normalizeId(label) || componentId || 'component';

    return {
      card,
      componentId,
      filenameBase,
      label
    };
  },

  _setButtonCount(button, componentId) {
    const count = this._getCount(componentId);
    if (count <= 0) return;

    const pill = button.querySelector('.download-count-pill') || (() => {
      const span = document.createElement('span');
      span.className = 'download-count-pill';
      button.appendChild(span);
      return span;
    })();

    pill.textContent = String(count);
  },

  _createOrEnhanceButton(actions, codeId) {
    let button = actions.querySelector('.download-zip-btn');
    if (!button) {
      const existingExport = actions.querySelector('.export-btn');
      button = existingExport || document.createElement('button');

      if (!existingExport) {
        button.type = 'button';
        button.className = 'action-btn download-zip-btn';
        const copyButton = actions.querySelector('button[onclick*="copyCode"]');
        if (copyButton && copyButton.nextSibling) {
          actions.insertBefore(button, copyButton.nextSibling);
        } else {
          actions.appendChild(button);
        }
      }
    }

    button.classList.add('download-zip-btn');
    button.removeAttribute('onclick');
    button.setAttribute('aria-label', 'Download component as zip');
    button.setAttribute('title', 'Download component as zip');
    button.innerHTML = '<i class="fa-solid fa-file-zipper"></i> Download ZIP';

    button.addEventListener('click', () => this.downloadByCodeId(codeId, button));
    return button;
  },

  _injectDownloadButtons() {
    document.querySelectorAll('.actions').forEach((actions) => {
      if (actions.dataset.downloadButtonInjected === '1') return;

      const codeId = this._extractCodeId(actions);
      if (!codeId) return;

      const meta = this._resolveComponentMeta(actions, codeId);
      const button = this._createOrEnhanceButton(actions, codeId);
      this._setButtonCount(button, meta.componentId);

      actions.dataset.downloadButtonInjected = '1';
    });
  },

  async _buildZipPayload(rawCode) {
    const parsed = this._extractHtmlCssJs(rawCode);

    const linkedStyles = this._collectLocalStylesheets();
    const linkedScripts = this._collectLocalScripts();

    const linkedCssChunks = await Promise.all(linkedStyles.map((stylePath) => this._fetchAssetText(stylePath).catch(() => '')));
    const linkedJsChunks = await Promise.all(linkedScripts.map((scriptPath) => this._fetchAssetText(scriptPath).catch(() => '')));

    const css = [...linkedCssChunks, parsed.css]
      .filter((chunk) => String(chunk || '').trim())
      .join('\n\n/* ---------------------------------------- */\n\n');

    const js = [...linkedJsChunks, parsed.js]
      .filter((chunk) => String(chunk || '').trim())
      .join('\n\n// ----------------------------------------\n\n');

    const html = /<!doctype html>/i.test(parsed.html) || /<html[\s>]/i.test(parsed.html)
      ? parsed.html
      : this._buildTemplateHtml(parsed.html || '<!-- No component markup detected -->');

    return {
      html,
      css: css || '/* No page/component CSS detected for this export. */\n',
      js: js || '// No page/component JS detected for this export.\n'
    };
  },

  async downloadByCodeId(codeId, button) {
    const actions = button?.closest?.('.actions') || null;
    const meta = this._resolveComponentMeta(actions, codeId);
    const rawCode = this._resolveCodeTextById(codeId) || this._resolveCodeTextFromCard(meta.card);

    if (!rawCode || !rawCode.trim()) {
      if (typeof showToast === 'function') showToast('No code found for this component');
      return;
    }

    const originalText = button ? button.innerHTML : '';

    try {
      if (button) {
        button.disabled = true;
        button.innerHTML = 'Preparing ZIP...';
      }

      const JSZip = await this._loadJSZip();
      const payload = await this._buildZipPayload(rawCode);

      const zip = new JSZip();
      zip.file('component.html', payload.html);
      zip.file('component.css', payload.css);
      zip.file('component.js', payload.js);
      zip.file('README.md', `# ${meta.label}\n\nGenerated from UIverse (${this._getPageSlug()}).\n\nFiles:\n- component.html\n- component.css\n- component.js\n`);

      const blob = await zip.generateAsync({ type: 'blob' });
      this._downloadBlob(blob, `${meta.filenameBase || 'component'}-component.zip`);

      this._incrementCount(meta.componentId);
      this._setButtonCount(button, meta.componentId);

      if (typeof showToast === 'function') showToast('Component ZIP downloaded');
    } catch (error) {
      console.error('[Download] ZIP export failed', error);
      if (typeof showToast === 'function') showToast('Download failed ❌');
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = originalText || '<i class="fa-solid fa-file-zipper"></i> Download ZIP';
        this._setButtonCount(button, meta.componentId);
      }
    }
  },

  destroy() {
    this._state.initialized = false;
  }
};

if (typeof window !== 'undefined') {
  window.Download = Download;
  window.downloadComponentZip = (codeId, button) => Download.downloadByCodeId(codeId, button);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Download;
}
