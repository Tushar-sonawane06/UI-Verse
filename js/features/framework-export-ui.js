/**
 * Framework Export UI
 * M3: Injects per-component framework export buttons into component cards
 */

const FrameworkExportUI = (() => {
  'use strict';

  function injectButtons() {
    document.querySelectorAll('.component-card').forEach(card => {
      if (card.querySelector('.fw-export-btn')) return;

      const actions = card.querySelector('.actions');
      if (!actions) return;

      const btn = document.createElement('button');
      btn.className = 'action-btn fw-export-btn';
      btn.title = 'Export to Framework';
      btn.innerHTML = '<i class="fa-solid fa-layer-group"></i> Framework';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openFrameworkModal(card);
      });

      actions.appendChild(btn);
    });

    injectStyles();
  }

  function injectStyles() {
    if (document.getElementById('fw-export-styles')) return;
    const style = document.createElement('style');
    style.id = 'fw-export-styles';
    style.textContent = `
      .fw-export-btn{background:rgba(16,185,129,0.08);color:#10b981;border:1.5px solid rgba(16,185,129,0.25)!important;}
      .fw-export-btn:hover{background:rgba(16,185,129,0.18)!important;border-color:#10b981!important;}
    `;
    document.head.appendChild(style);
  }

  function extractCardCode(card) {
    const codeBlock = card.querySelector('.code-block');
    if (codeBlock) {
      const text = codeBlock.textContent || '';
      const htmlMatch = text.match(/<<html>([\s\S]*?)<<\/html>/i);
      const cssMatch = text.match(/<<style>([\s\S]*?)<<\/style>/i);
      let html = '';
      let css = '';
      if (htmlMatch) {
        html = htmlMatch[1].replace(/<<body>([\s\S]*)<<\/body>/i, '$1').trim();
      } else if (text.includes('<') && text.includes('>')) {
        html = text.split('<style>')[0].trim();
      }
      if (cssMatch) css = cssMatch[1];
      return { html, css };
    }

    const preview = card.querySelector('.card-preview');
    if (preview) {
      const html = preview.innerHTML.trim();
      const classes = Array.from(preview.querySelectorAll('*')).flatMap(el => Array.from(el.classList)).filter(Boolean);
      let css = '';
      try {
        for (const sheet of document.styleSheets) {
          for (const rule of sheet.cssRules || []) {
            if (classes.some(cls => rule.selectorText && rule.selectorText.includes(cls))) {
              css += rule.cssText + '\n';
            }
          }
        }
      } catch (e) { /* cross-origin stylesheets */ }
      return { html, css };
    }

    return { html: '', css: '' };
  }

  function openFrameworkModal(card) {
    const { html, css } = extractCardCode(card);
    const name = card.dataset.name || 'component';

    if (!html) {
      showToast('No code found for this component');
      return;
    }

    if (window.FrameworkPreview) {
      window.FrameworkPreview.open(html, css, name);
    } else {
      showToast('Framework preview not loaded');
    }
  }

  function showToast(message) {
    const existing = document.querySelector('.fw-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'fw-toast';
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:80px;right:20px;background:#111;color:#fff;padding:10px 14px;border-radius:8px;font-size:14px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.2);';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  function init() {
    if (!document.querySelector('.component-card')) return;
    injectButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, injectButtons };
})();

if (typeof window !== 'undefined') window.FrameworkExportUI = FrameworkExportUI;
if (typeof module !== 'undefined' && module.exports) module.exports = FrameworkExportUI;