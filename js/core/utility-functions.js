/**
 * UIverse - Shared Utility Functions
 * Centralized utilities to avoid global scope pollution
 */

(function () {
  'use strict';

  // Guard: prevent duplicate definitions
  if (window.__utilityFunctionsLoaded) return;
  window.__utilityFunctionsLoaded = true;

  // ===== Toast Notifications =====
  window.showToast = function (message, isError = false) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.setAttribute('role', 'alert');
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 24px;
      background: ${isError ? '#d63031' : '#00b894'};
      color: white;
      border-radius: 8px;
      font-weight: 500;
      z-index: 10000;
      animation: slideIn 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-family: inherit;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // ===== Code Toggle =====
  window.toggleCode = function (id, btn) {
    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;

    const isVisible = codeBlock.style.display !== 'none';
    codeBlock.style.display = isVisible ? 'none' : 'block';

    if (btn) {
      const icon = btn.querySelector('i');
      const text = btn.querySelector('span') || btn.childNodes[btn.childNodes.length - 1];
      if (icon) icon.className = isVisible ? 'fa-solid fa-code' : 'fa-solid fa-eye';
      if (text && text.textContent) {
        text.textContent = isVisible ? ' View Code' : ' Hide Code';
      }
    }
  };

  // ===== Code Copy =====
  window.copyCode = async function (id, btn) {
    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;

    const code = codeBlock.textContent || '';

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const ta = document.createElement('textarea');
        ta.value = code;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      showToast('Copied to clipboard!');

      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        setTimeout(() => { btn.innerHTML = originalText; }, 2000);
      }
    } catch (err) {
      showToast('Failed to copy', true);
      console.error('[Copy]', err);
    }
  };

  // ===== Live Filter =====
  window.liveFilter = function (query) {
    const cards = document.querySelectorAll('.component-card, .feature-card, .cat-card');
    const q = query.toLowerCase().trim();

    cards.forEach(card => {
      const name = (card.dataset.name || card.textContent).toLowerCase();
      const tags = (card.dataset.tags || '').toLowerCase();
      const category = (card.dataset.cat || '').toLowerCase();

      const match = !q || name.includes(q) || tags.includes(q) || category.includes(q);
      card.style.display = match ? '' : 'none';
    });
  };

  // ===== Add to Collection (localStorage) =====
  window.addToCollection = function (componentName) {
    try {
      const collection = JSON.parse(localStorage.getItem('uiv-collection') || '[]');
      if (!collection.includes(componentName)) {
        collection.push(componentName);
        localStorage.setItem('uiv-collection', JSON.stringify(collection));
        showToast(`Added "${componentName}" to collection`);
      } else {
        showToast('Already in collection');
      }
    } catch (err) {
      showToast('Failed to save', true);
    }
  };

  // ===== Filter Cards =====
  window.filterCards = function (category, btn) {
    const cards = document.querySelectorAll('.component-card');

    if (btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    cards.forEach(card => {
      const cat = card.dataset.cat || '';
      const match = category === 'all' || cat === category;
      card.style.display = match ? '' : 'none';
    });
  };

  console.log('[UtilityFunctions] Loaded');
})();