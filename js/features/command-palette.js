/**
 * UIverse - Command Palette Feature
 * 
 * Keyboard-first command palette for fuzzy component navigation
 * - Opens with Cmd+K / Ctrl+K
 * - Supports fuzzy search with ranked results
 * - Remembers recent destinations
 * - Lightweight and performant
 */

const CommandPalette = (function () {
  const _state = {
    initialized: false,
    isOpen: false,
    selectedIndex: 0,
    results: [],
    recentItems: [],
    allItems: [],
    listeners: [],
    modalCleanup: null,
    restoreFocusTo: null
  };

  const STORAGE_KEY = 'uiverse_command_palette_recent';
  const MAX_RECENT = 8;

  // Fuzzy search algorithm - scores how well query matches text
  function fuzzyScore(query, text) {
    if (!query || !text) return 0;
    
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    
    let score = 0;
    let qIdx = 0;
    let lastMatchIdx = -1;
    
    for (let i = 0; i < t.length && qIdx < q.length; i++) {
      if (t[i] === q[qIdx]) {
        score += 10;
        if (lastMatchIdx === i - 1) score += 5; // Consecutive match bonus
        lastMatchIdx = i;
        qIdx++;
      }
    }
    
    // Penalize if query not fully matched
    if (qIdx !== q.length) return 0;
    
    // Bonus for match at start
    if (t.startsWith(q)) score += 20;
    
    return score;
  }

  // Build component list from page navigation
  function buildComponentList() {
    const items = [];
    
    // Get all navigation links from sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    
    sidebarLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const iconEl = link.querySelector('i');
      const textEl = link.querySelector('span');
      
      if (href && textEl) {
        items.push({
          id: href.replace('.html', ''),
          title: textEl.textContent.trim(),
          path: href,
          icon: iconEl ? iconEl.className : 'fa-solid fa-circle',
          category: 'Component'
        });
      }
    });

    // Add utility pages
    const utilityPages = [
      { title: 'Documentation', path: 'documentation.html', icon: 'fa-solid fa-book', category: 'Utility' },
      { title: 'FAQ', path: 'faq.html', icon: 'fa-solid fa-circle-question', category: 'Utility' },
      { title: 'About', path: 'about.html', icon: 'fa-solid fa-circle-info', category: 'Utility' },
      { title: 'Contributing', path: 'howtocontribute.html', icon: 'fa-solid fa-code', category: 'Utility' }
    ];

    utilityPages.forEach((page) => {
      items.push({
        id: page.path.replace('.html', ''),
        title: page.title,
        path: page.path,
        icon: page.icon,
        category: page.category
      });
    });
    
    return items;
  }

  // Filter and rank results based on query
  function search(query) {
    if (!query.trim()) {
      _state.results = [];
      return [];
    }

    const scored = _state.allItems.map((item) => {
      const titleScore = fuzzyScore(query, item.title);
      const categoryScore = fuzzyScore(query, item.category) * 0.5;
      const totalScore = Math.max(titleScore, categoryScore);
      
      return { ...item, score: totalScore };
    });

    const ranked = scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    _state.results = ranked;
    return ranked;
  }

  // Load recent items from storage
  function loadRecent() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      _state.recentItems = stored ? JSON.parse(stored) : [];
    } catch (e) {
      _state.recentItems = [];
    }
  }

  // Save item to recent history
  function addToRecent(item) {
    const filtered = _state.recentItems.filter((r) => r.id !== item.id);
    filtered.unshift(item);
    _state.recentItems = filtered.slice(0, MAX_RECENT);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(_state.recentItems));
    } catch (e) {
      console.warn('[CommandPalette] Failed to save recent items', e);
    }
  }

  // Navigate to selected item
  function navigateToItem(item) {
    if (!item) return;
    
    addToRecent(item);
    window.location.href = item.path;
  }

  // Render results UI
  function renderResults() {
    const resultsEl = document.getElementById('commandPaletteResults');
    if (!resultsEl) return;

    resultsEl.innerHTML = '';

    if (_state.results.length === 0) {
      const input = document.getElementById('commandPaletteInput');
      const hasQuery = input && input.value.trim().length > 0;

      const emptyItem = document.createElement('li');
      emptyItem.className = 'command-palette-empty';
      emptyItem.textContent = hasQuery
        ? 'No components found. Try a different search.'
        : 'Type to search for components...';
      resultsEl.appendChild(emptyItem);
      return;
    }

    const fragment = document.createDocumentFragment();

    _state.results.forEach((item, idx) => {
      const resultItem = document.createElement('li');
      resultItem.className = `command-palette-item ${idx === _state.selectedIndex ? 'highlighted' : ''}`;
      resultItem.dataset.index = String(idx);

      const iconWrap = document.createElement('div');
      iconWrap.className = 'command-palette-item-icon';

      const icon = document.createElement('i');
      icon.className = item.icon;
      iconWrap.appendChild(icon);

      const content = document.createElement('div');
      content.className = 'command-palette-item-content';

      const title = document.createElement('div');
      title.className = 'command-palette-item-title';
      title.textContent = item.title;

      const category = document.createElement('div');
      category.className = 'command-palette-item-category';
      category.textContent = item.category;

      content.appendChild(title);
      content.appendChild(category);
      resultItem.appendChild(iconWrap);
      resultItem.appendChild(content);
      fragment.appendChild(resultItem);
    });

    resultsEl.appendChild(fragment);

    // Scroll highlighted item into view
    const highlightedItem = resultsEl.querySelector('.command-palette-item.highlighted');
    if (highlightedItem) {
      highlightedItem.scrollIntoView({ block: 'nearest' });
    }
  }

  // Handle input changes
  function handleInput(event) {
    const query = event.target.value;
    _state.selectedIndex = 0;
    search(query);
    renderResults();
  }

  // Handle keyboard navigation
  function handleKeydown(event) {
    if (!_state.isOpen) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        close();
        break;

      case 'ArrowDown':
        event.preventDefault();
        _state.selectedIndex = Math.min(_state.selectedIndex + 1, _state.results.length - 1);
        renderResults();
        break;

      case 'ArrowUp':
        event.preventDefault();
        _state.selectedIndex = Math.max(_state.selectedIndex - 1, 0);
        renderResults();
        break;

      case 'Enter':
        event.preventDefault();
        if (_state.results[_state.selectedIndex]) {
          navigateToItem(_state.results[_state.selectedIndex]);
        }
        break;

      case 'Tab':
        event.preventDefault();
        if (event.shiftKey) {
          _state.selectedIndex = Math.max(_state.selectedIndex - 1, 0);
        } else {
          _state.selectedIndex = Math.min(_state.selectedIndex + 1, _state.results.length - 1);
        }
        renderResults();
        break;
    }
  }

  // Open palette
  function open() {
    if (_state.isOpen) return;

    _state.isOpen = true;
    _state.selectedIndex = 0;
    _state.results = [];
    _state.restoreFocusTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const overlay = document.getElementById('commandPaletteOverlay');
    const input = document.getElementById('commandPaletteInput');

    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Command palette');
    }
    if (input) {
      input.setAttribute('aria-label', 'Search components');
      input.focus();
      input.value = '';
      renderResults();
    }

    if (window.Accessibility && typeof window.Accessibility.openModal === 'function') {
      _state.modalCleanup = window.Accessibility.openModal(overlay, {
        initialFocus: input,
        restoreFocusTo: _state.restoreFocusTo,
        onEscape: close
      });
    }
  }

  // Close palette
  function close() {
    _state.isOpen = false;
    const overlay = document.getElementById('commandPaletteOverlay');

    if (_state.modalCleanup) {
      _state.modalCleanup();
      _state.modalCleanup = null;
    } else if (window.Accessibility && typeof window.Accessibility.closeModal === 'function') {
      window.Accessibility.closeModal(overlay);
    }

    if (overlay) overlay.classList.remove('open');

    if (_state.restoreFocusTo && document.contains(_state.restoreFocusTo)) {
      _state.restoreFocusTo.focus({ preventScroll: true });
    }

    _state.restoreFocusTo = null;
  }

  // Toggle palette
  function toggle() {
    if (_state.isOpen) {
      close();
    } else {
      open();
    }
  }

  // HTML escape utility
  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  }

  // Initialize feature
  function init() {
    if (_state.initialized) return;

    // Check for palette elements
    if (!document.getElementById('commandPaletteOverlay')) {
      console.warn('[CommandPalette] Palette DOM not found. Skipping initialization.');
      _state.initialized = true;
      return;
    }

    _state.allItems = buildComponentList();
    loadRecent();

    const input = document.getElementById('commandPaletteInput');
    const overlay = document.getElementById('commandPaletteOverlay');
    const onOverlayClick = (event) => {
      if (event.target === overlay) {
        close();
      }
    };
    const onDocumentClick = (event) => {
      const item = event.target.closest('.command-palette-item');
      if (item) {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        if (_state.results[idx]) {
          navigateToItem(_state.results[idx]);
        }
      }

      const recentItem = event.target.closest('.command-palette-recent-item');
      if (recentItem) {
        const id = recentItem.getAttribute('data-id');
        const item = _state.allItems.find((i) => i.id === id);
        if (item) {
          navigateToItem(item);
        }
      }
    };
    const onDocumentKeydown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        toggle();
      }
    };

    if (input) {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeydown);
      _state.listeners.push({ el: input, event: 'input', handler: handleInput });
      _state.listeners.push({ el: input, event: 'keydown', handler: handleKeydown });
    }

    if (overlay) {
      overlay.addEventListener('click', onOverlayClick);
      _state.listeners.push({ el: overlay, event: 'click', handler: onOverlayClick });
    }

    // Add click handlers to result items
    document.addEventListener('click', onDocumentClick);
    _state.listeners.push({ el: document, event: 'click', handler: onDocumentClick });

    // Keyboard shortcut: Cmd+K or Ctrl+K
    document.addEventListener('keydown', onDocumentKeydown);
    _state.listeners.push({ el: document, event: 'keydown', handler: onDocumentKeydown });

    if (window.UIVERSE_DEBUG) console.log('[CommandPalette] Initialized with', _state.allItems.length, 'items');
    _state.initialized = true;
  }

  function destroy() {
    _state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    _state.listeners = [];
    if (_state.modalCleanup) {
      _state.modalCleanup();
      _state.modalCleanup = null;
    }
    _state.initialized = false;
  }

  return {
    init,
    open,
    close,
    toggle,
    destroy
  };
})();

// Expose globally
window.CommandPalette = CommandPalette;
