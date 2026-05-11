/* UI-Verse - Consolidated script.js
   Single canonical implementations: toggleSidebar, toggleCode(id, btn), copyCode(id, btn), scrollToTop(), dark mode handlers, etc.

   ============================================================================
   COMPONENT DETAILS PAGE TEMPLATE GUIDE FOR CONTRIBUTORS
   ============================================================================
   
   This guide helps you add new components consistently with proper structure,
   styling, and functionality. Follow this template to maintain quality and
   enable faster contributor onboarding.

   TEMPLATE STRUCTURE:
   ==================
   
   <div class="component-card" data-name="component name keywords" data-cat="category" data-tags="tag1, tag2, tag3">
     
     <!-- 1. COMPONENT HEADER -->
     <div class="card-top">
       <span class="card-label">Component Name</span>
       <span class="card-tag tag-popular">Popular|Essential|Trending|New</span>
     </div>

     <!-- 2. LIVE PREVIEW -->
     <div class="card-preview">
       <!-- Add the live component HTML here -->
     </div>

     <!-- 3. DESCRIPTION -->
     <p class="card-desc">Brief description (1-2 sentences) of what the component does.</p>

     <!-- 4. ACTION BUTTONS -->
     <div class="actions">
       <button class="action-btn view-btn" onclick="toggleCode('unique-id', this)">
         <i class="fa-solid fa-code"></i> View Code
       </button>
       <button class="action-btn copy-btn" onclick="copyCode('unique-id', this)">
         <i class="fa-solid fa-copy"></i> Copy
       </button>
       <button onclick="addToCollection('Component Name')">Add to My Collection</button>
     </div>

     <!-- 5. CODE BLOCK (HIDDEN) -->
     <pre id="unique-id" class="code-block"><code>
       &lt;!-- Component HTML --&gt;
       
       /* Component CSS */
       .component-class {
         /* styles here */
       }
     </code></pre>

     <!-- 6. CUSTOMIZATION SECTION (OPTIONAL) -->
     <div class="component-customization">
       <h4>✨ Customization</h4>
       <div class="customization-item">
         <p><strong>Property Name:</strong> Description of what can be customized</p>
         <div class="customization-example">
           CSS property example
         </div>
       </div>
     </div>

     <!-- 7. ACCESSIBILITY NOTES (RECOMMENDED) -->
     <div class="component-a11y">
       <h4><i class="fa-solid fa-universal-access"></i> Accessibility</h4>
       <ul>
         <li>Accessibility feature 1</li>
         <li>Accessibility feature 2</li>
         <li>Consider adding aria-label for screen readers</li>
       </ul>
     </div>

     <!-- 8. BROWSER SUPPORT / VARIANTS (OPTIONAL) -->
     <div class="component-variants">
       <h4>🌐 Browser Support</h4>
       <div class="browser-support">
         <div class="browser-support-item supported">Chrome 26+</div>
         <div class="browser-support-item supported">Firefox 16+</div>
         <div class="browser-support-item supported">Safari 6.1+</div>
       </div>
     </div>

   </div>

   IMPORTANT ATTRIBUTES:
   ====================
   
   data-cat="category": Used for category filtering
     - Allowed: style, effect, status, profile, content, commerce, etc.
   
   data-tags="tag1, tag2, tag3": CSV of tags for advanced filtering
     - Examples: modern, minimal, glowing, depth, interactive, animation
   
   data-name="component name keywords": Used for search filtering
     - Include component name and related keywords for discoverability

   CSS CLASSES:
   ============
   
   .component-card - Main container (required for filtering)
   .action-btn - Base button styling
   .view-btn - View code button
   .copy-btn - Copy button (shows "Copied!" feedback)
   .code-block - Code display (hidden by default)
   .component-customization - Props/customization section
   .component-a11y - Accessibility notes section
   .component-variants - Variants and browser support
   
   ID NAMING:
   ==========
   
   Use sequential IDs: c1, c2, c3... for buttons
                       a1, a2, a3... for alerts
                       etc.
   
   Ensure each component has a UNIQUE ID for code block and button.onclick

   FUNCTIONS USED:
   ===============
   
   toggleCode('code-id', this) - Show/hide code block
   copyCode('code-id', this) - Copy code to clipboard with feedback
   addToCollection('Component Name') - Save to user collection
   
   DARK MODE:
   ==========
   
   All template sections have built-in dark mode support via .dark-mode class.
   No additional styling needed - handled in style.css automatically.

   BEST PRACTICES:
   ===============
   
   1. Always include alt text and proper semantic HTML
   2. Add aria-labels for interactive elements
   3. Test keyboard navigation (tab, enter)
   4. Ensure sufficient color contrast (WCAG AA minimum)
   5. Include browser support information
   6. Document customization options clearly
   7. Use simple, clear language in descriptions
   8. Test copy functionality works correctly
   9. Verify in both light and dark modes
   10. Test on mobile devices for responsiveness

*/

// Utility
function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
// Profile editor (attached to button .btnn if present)
const editBtn = document.querySelector('.btnn');
if (editBtn) {
  editBtn.addEventListener('click', () => {
    const currentInfo = document.querySelectorAll('.info p');
    if (!currentInfo || currentInfo.length < 3) return;

    const currentName = currentInfo[0].textContent;
    const currentEmail = currentInfo[1].textContent;
    const currentUsername = currentInfo[2].textContent;

    const existing = document.getElementById('profile-editor-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'profile-editor-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="modal-backdrop" data-close="1" aria-hidden="true"></div>
      <div class="modal-card">
        <div class="modal-header">
          <h3>Edit Profile</h3>
          <button type="button" class="modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="modal-body">
          <label><span>Full Name</span><input type="text" id="profile-editor-name" value="${escapeAttr(currentName)}"/></label>
          <label><span>Email</span><input type="email" id="profile-editor-email" value="${escapeAttr(currentEmail)}"/></label>
          <label><span>Username</span><input type="text" id="profile-editor-username" value="${escapeAttr(currentUsername)}"/></label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-secondary" data-cancel="1">Cancel</button>
          <button type="button" class="btn-primary" data-save="1">Save</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => modal.remove();
    modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
    modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
    modal.querySelector('[data-cancel="1"]')?.addEventListener('click', closeModal);

    modal.querySelector('[data-save="1"]')?.addEventListener('click', () => {
      const newName = modal.querySelector('#profile-editor-name')?.value?.trim();
      const newEmail = modal.querySelector('#profile-editor-email')?.value?.trim();
      const newUsername = modal.querySelector('#profile-editor-username')?.value?.trim();

      if (newName) {
        currentInfo[0].textContent = newName;
        document.querySelector('.profile-header h2')?.textContent = newName;
      }
      if (newEmail) {
        currentInfo[1].textContent = newEmail;
        document.querySelector('.profile-header p')?.textContent = newEmail;
      }
      if (newUsername) currentInfo[2].textContent = newUsername;

      showToastSafe('Profile Updated Successfully! ✅');
      modal.remove();
    });

    setTimeout(() => modal.querySelector('#profile-editor-name')?.focus?.(), 0);
  });
}

// Lightweight toasts
function showToast(message) {
  const existing = document.getElementById('toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('toast-visible')));

  setTimeout(() => {
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-hidden');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 2000);
}
function showToastSafe(message) { try { if (typeof showToast === 'function') showToast(message); } catch (e) {} }

// Toggle code block (used by inline HTML: toggleCode('id', this))
function toggleCode(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.toggle('show');
  el.style.display = isOpen ? 'block' : 'none';
  if (btn) {
    const showHtml = btn.getAttribute('data-show') || '<i class="fa-solid fa-code"></i> View Code';
    const hideHtml = btn.getAttribute('data-hide') || '<i class="fa-solid fa-eye-slash"></i> Hide Code';
    btn.innerHTML = isOpen ? hideHtml : showHtml;
  }
}

// Copy code (used by inline HTML: copyCode('id', this))
function copyCode(id, btn) {
  const element = document.getElementById(id);
  if (!element) return;

  // Prefer .value for form controls, otherwise use textContent which preserves formatting
  let code;
  const tag = (element.tagName || '').toUpperCase();
  if (tag === 'TEXTAREA' || tag === 'INPUT') code = element.value;
  else if (tag === 'CODE' || tag === 'PRE') code = element.textContent;
  else code = element.textContent || '';

  const finishSuccess = () => {
    showToastSafe('Code copied!');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 1500);
    }
  };

  const finishFail = () => { showToastSafe('Failed to copy ❌'); if (btn) btn.innerText = 'Error'; };

  // Use Clipboard API when available, otherwise fallback to execCommand copy
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(code).then(finishSuccess).catch(() => {
      try {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = code;
        ta.style.position = 'fixed'; ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        finishSuccess();
      } catch (e) { finishFail(); }
    });
  } else {
    try {
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      finishSuccess();
    } catch (e) { finishFail(); }
  }
}

// Copy color helpers
function copyColor(color) { navigator.clipboard.writeText(color); showToastSafe(color + ' copied!'); }
function copyRGB(value) { navigator.clipboard.writeText(`rgb(${value})`); showToastSafe(`rgb(${value}) copied!`); }

// Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar') || document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop') || document.querySelector('.sidebar-backdrop');
  if (!sidebar) return;

  const isOpen = sidebar.classList.toggle('open');
  document.body.classList.toggle('sidebar-open', isOpen);

  if (backdrop) {
    backdrop.classList.toggle('visible', isOpen);
    backdrop.classList.toggle('active', isOpen);
  }
}
function updateSidebarActiveLink() {
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.sidebar ul li').forEach(li => {
    const a = li.querySelector('a'); if (!a) return;
    a.getAttribute('href').toLowerCase() === currentPage ? li.classList.add('active') : li.classList.remove('active');
  });
}
function restoreSidebarState() { sessionStorage.removeItem('sidebarHidden'); }
function initSidebarLinkClose() { document.querySelectorAll('.sidebar ul li a').forEach(a => a.addEventListener('click', () => { document.body.classList.remove('sidebar-open'); document.querySelector('#sidebarBackdrop')?.classList.remove('visible'); document.querySelector('.sidebar-backdrop')?.classList.remove('active'); document.getElementById('sidebar')?.classList.remove('open'); document.querySelector('.sidebar')?.classList.remove('open'); })); }
function initSidebar() { restoreSidebarState(); updateSidebarActiveLink(); initSidebarLinkClose(); }

// Live sandboxes
function initLiveSandboxes() {
  document.querySelectorAll('.component-card').forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const actions = card.querySelector('.actions');
    const existingCodeBlock = card.querySelector('.code-block');
    const previewNodes = Array.from(card.childNodes).filter(node => ((node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')) && node !== h3 && node !== actions && node !== existingCodeBlock && node.nodeName !== 'SCRIPT'));
    if (previewNodes.length === 0 && !existingCodeBlock) return;

    const initialHTML = existingCodeBlock ? existingCodeBlock.textContent.trim() : previewNodes.map(n => n.outerHTML || n.textContent).join('\n').trim();
    previewNodes.forEach(n => n.remove());

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%'; iframe.style.minHeight = '160px'; iframe.style.border = '1px solid #e8ebf2'; iframe.style.borderRadius = '8px'; iframe.style.background = 'transparent';

    const textarea = document.createElement('textarea');
    if (existingCodeBlock) { textarea.id = existingCodeBlock.id; textarea.className = existingCodeBlock.className; textarea.style.display = existingCodeBlock.style.display || 'none'; }
    else { textarea.id = 'live-code-' + index; textarea.className = 'code-block'; textarea.style.display = 'none'; if (actions) { const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]'); const copyBtn = actions.querySelector('button[onclick^="copyCode"]'); if (toggleBtn) toggleBtn.setAttribute('onclick', `toggleCode("${textarea.id}", this)`); if (copyBtn) copyBtn.setAttribute('onclick', `copyCode("${textarea.id}", this)`); } }

    textarea.value = initialHTML; textarea.style.width = '100%'; textarea.style.minHeight = '120px'; textarea.style.boxSizing = 'border-box'; textarea.style.resize = 'vertical';

    const renderIframe = html => { iframe.srcdoc = `<!doctype html><html><head><link rel="stylesheet" href="style.css"><style>body{margin:0;background:transparent;padding:20px;box-sizing:border-box}</style></head><body>${html}</body></html>`; };
    renderIframe(initialHTML);

    let timeout;
    textarea.addEventListener('input', e => { clearTimeout(timeout); timeout = setTimeout(() => renderIframe(e.target.value), 300); });

    if (h3) h3.after(iframe); else card.insertBefore(iframe, card.firstChild);
    if (existingCodeBlock) existingCodeBlock.replaceWith(textarea); else if (actions) actions.after(textarea);
  });
}

// ============= COMPONENT GALLERY FILTERING =============
// State for selected filters
window.filterState = {
  selectedCategory: null,
  selectedTags: new Set(),
  searchQuery: ''
};

// Extract unique categories and tags from component cards
function extractFilterMetadata() {
  const categories = new Set();
  const tags = new Set();
  
  document.querySelectorAll('.component-card').forEach(card => {
    if (card.dataset.cat) categories.add(card.dataset.cat);
    if (card.dataset.tags) {
      const cardTags = card.dataset.tags.split(',').map(t => t.trim());
      cardTags.forEach(tag => tags.add(tag));
    }
  });
  
  return { categories: Array.from(categories).sort(), tags: Array.from(tags).sort() };
}

// Create filter controls UI
function createFilterUI() {
  const container = document.querySelector('.filter-bar');
  if (!container) return; // Only add if filter-bar exists
  
  const metadata = extractFilterMetadata();
  
  // Create category filter section
  const categoryContainer = document.createElement('div');
  categoryContainer.className = 'category-filters';
  categoryContainer.innerHTML = '<div class="filter-label">Categories:</div>';
  
  const categoryChips = document.createElement('div');
  categoryChips.className = 'filter-chips';
  
  // Add "All" chip
  const allChip = document.createElement('button');
  allChip.className = 'filter-chip active';
  allChip.textContent = 'All';
  allChip.dataset.category = 'all';
  allChip.addEventListener('click', (e) => selectCategory(e.target.dataset.category, e.target));
  categoryChips.appendChild(allChip);
  
  // Add category chips
  metadata.categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip';
    chip.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    chip.dataset.category = cat;
    chip.addEventListener('click', (e) => selectCategory(e.target.dataset.category, e.target));
    categoryChips.appendChild(chip);
  });
  
  categoryContainer.appendChild(categoryChips);
  container.appendChild(categoryContainer);
  
  // Create tag filter section
  if (metadata.tags.length > 0) {
    const tagContainer = document.createElement('div');
    tagContainer.className = 'tag-filters';
    tagContainer.innerHTML = '<div class="filter-label">Tags:</div>';
    
    const tagChips = document.createElement('div');
    tagChips.className = 'filter-chips';
    
    metadata.tags.forEach(tag => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip';
      chip.textContent = tag;
      chip.dataset.tag = tag;
      chip.addEventListener('click', (e) => toggleTag(e.target.dataset.tag, e.target));
      tagChips.appendChild(chip);
    });
    
    tagContainer.appendChild(tagChips);
    container.appendChild(tagContainer);
  }
}

// Select a category (single select)
function selectCategory(category, element) {
  // Clear previous category selection
  document.querySelectorAll('.category-filters .filter-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  
  element.classList.add('active');
  window.filterState.selectedCategory = category === 'all' ? null : category;
  applyFilters();
}

// Toggle a tag (multi-select)
function toggleTag(tag, element) {
  element.classList.toggle('active');
  if (element.classList.contains('active')) {
    window.filterState.selectedTags.add(tag);
  } else {
    window.filterState.selectedTags.delete(tag);
  }
  applyFilters();
}

// Apply all active filters (categories + tags + search)
function applyFilters() {
  const cards = document.querySelectorAll('.component-card');
  
  cards.forEach(card => {
    const cardCategory = card.dataset.cat;
    const cardTags = card.dataset.tags ? card.dataset.tags.split(',').map(t => t.trim()) : [];
    const cardName = (card.dataset.name || card.innerText).toLowerCase();
    
    // Check category filter
    const categoryMatch = !window.filterState.selectedCategory || cardCategory === window.filterState.selectedCategory;
    
    // Check tag filters (OR logic - card must have at least one selected tag, or no tags selected)
    const tagMatch = window.filterState.selectedTags.size === 0 || 
                     Array.from(window.filterState.selectedTags).some(tag => cardTags.includes(tag));
    
    // Check search filter
    const searchMatch = window.filterState.searchQuery === '' || cardName.includes(window.filterState.searchQuery);
    
    // Show card only if all filters match
    card.style.display = (categoryMatch && tagMatch && searchMatch) ? '' : 'none';
  });
}

// Search filter and routing
function initSearchFilter() {
  const searchInput = document.getElementById('searchInput'); 
  if (!searchInput) return;
  
  searchInput.addEventListener('keyup', function () { 
    window.filterState.searchQuery = this.value.toLowerCase().trim();
    applyFilters();
  });
}

function handleSearch(event) {
  if (event.key !== 'Enter') return;
  const query = (event.target.value || '').toLowerCase().trim();
  const routes = {
    button: 'button.html',
    buttons: 'button.html',
    navbar: 'navbar.html',
    navbars: 'navbar.html',
    card: 'cards.html',
    cards: 'cards.html',
    form: 'form.html',
    forms: 'form.html',
    footer: 'footer.html',
    color: 'color.html',
    colors: 'color.html'
  };

  for (const k in routes) {
    if (query.includes(k)) {
      window.location.href = routes[k];
      return;
    }
  }

  showToastSafe('No component found \u{1F622}');
}

// Dark mode
function updateToggleVisual(toggleEl, isDark) { const icon = toggleEl?.querySelector?.('i'); if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'; else toggleEl.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode'; }
function loadTheme(toggleEl) { const saved = localStorage.getItem('theme'); if (saved === 'dark') { document.body.classList.add('dark-mode'); if (toggleEl) updateToggleVisual(toggleEl, true); } else if (saved === 'light') { document.body.classList.remove('dark-mode'); if (toggleEl) updateToggleVisual(toggleEl, false); } else { const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; document.body.classList.toggle('dark-mode', prefersDark); if (toggleEl) updateToggleVisual(toggleEl, prefersDark); } }
function initDarkMode() { const toggleEl = document.getElementById('theme-toggle') || document.getElementById('themeToggle') || document.getElementById('darkModeToggle'); loadTheme(toggleEl); if (toggleEl) toggleEl.addEventListener('click', () => { document.body.classList.toggle('dark-mode'); const isDark = document.body.classList.contains('dark-mode'); localStorage.setItem('theme', isDark ? 'dark' : 'light'); updateToggleVisual(toggleEl, isDark); }); }

// Accessibility Mode
function scanA11yIssues() {
  // Clear previous flags
  document.querySelectorAll('[data-a11y-flag]').forEach(el => {
    el.removeAttribute('data-a11y-flag');
  });
  
  const issues = [];
  
  // Check inputs/selects without labels
  document.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.type === 'hidden' || el.closest('[data-no-a11y-scan]')) return;
    
    const hasLabel = el.id && document.querySelector(`label[for="${el.id}"]`);
    const hasAriaLabel = el.getAttribute('aria-label');
    const hasPlaceholder = el.getAttribute('placeholder');
    const hasVisibleLabel = hasLabel || (hasAriaLabel && hasAriaLabel.trim());
    
    if (!hasVisibleLabel && !hasPlaceholder) {
      el.setAttribute('data-a11y-flag', 'missing-label');
      issues.push({ type: 'missing-label', element: el, label: 'Input without label' });
    }
  });
  
  // Check buttons without accessible names
  document.querySelectorAll('button').forEach(el => {
    if (el.closest('[data-no-a11y-scan]')) return;
    
    const hasText = el.textContent?.trim().length > 0;
    const hasAriaLabel = el.getAttribute('aria-label')?.trim();
    const hasTitle = el.getAttribute('title')?.trim();
    const hasAccessibleName = hasText || hasAriaLabel || hasTitle;
    
    // Allow icon-only buttons with title/aria-label
    const isIconOnly = el.querySelector('i, svg, img') && !hasText;
    const isAccessibleIconBtn = isIconOnly && (hasAriaLabel || hasTitle);
    
    if (!hasAccessibleName && !isAccessibleIconBtn) {
      el.setAttribute('data-a11y-flag', 'missing-name');
      issues.push({ type: 'missing-name', element: el, label: 'Button without accessible name' });
    }
  });
  
  // Check images without alt text
  document.querySelectorAll('img').forEach(el => {
    if (el.closest('[data-no-a11y-scan]')) return;
    
    const hasAlt = el.hasAttribute('alt');
    const hasTitle = el.getAttribute('title');
    const isDecorative = el.hasAttribute('aria-hidden') || el.getAttribute('role') === 'presentation';
    
    if (!isDecorative && !hasAlt && !hasTitle) {
      el.setAttribute('data-a11y-flag', 'missing-alt');
      issues.push({ type: 'missing-alt', element: el, label: 'Image without alt text' });
    }
  });
  
  return issues;
}

function initAccessibilityMode() {
  const toggle = document.getElementById('a11yModeToggle');
  if (!toggle) return;
  
  // Load saved state
  const saved = localStorage.getItem('a11y-mode');
  if (saved === 'enabled') {
    document.body.classList.add('a11y-mode');
    updateA11yToggleVisual(toggle, true);
    scanA11yIssues();
  }
  
  toggle.addEventListener('click', () => {
    const isEnabled = document.body.classList.toggle('a11y-mode');
    localStorage.setItem('a11y-mode', isEnabled ? 'enabled' : 'disabled');
    updateA11yToggleVisual(toggle, isEnabled);
    
    if (isEnabled) {
      scanA11yIssues();
      showToastSafe('✓ Accessibility Mode enabled - Issues highlighted');
    } else {
      document.querySelectorAll('[data-a11y-flag]').forEach(el => {
        el.removeAttribute('data-a11y-flag');
      });
      showToastSafe('✓ Accessibility Mode disabled');
    }
  });
}

function updateA11yToggleVisual(toggleEl, isEnabled) {
  const icon = toggleEl?.querySelector?.('i');
  if (icon) {
    icon.className = isEnabled ? 'fa-solid fa-universal-access' : 'fa-solid fa-universal-access';
    toggleEl.classList.toggle('active', isEnabled);
  }
}

// Scroll to top
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function initScrollTop() { const btn = document.getElementById('scrollTopBtn'); if (!btn) return; window.addEventListener('scroll', () => { const visible = window.scrollY > 50; btn.style.display = visible ? 'block' : 'none'; btn.classList.toggle('visible', window.scrollY > 400); document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 40); }); btn.addEventListener('click', () => scrollToTop()); }

// Progress bar
function initProgressBar() { const bar = document.getElementById('progressBar'); if (!bar) return; window.addEventListener('scroll', () => { const scrollTop = document.documentElement.scrollTop; const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; bar.style.width = ((scrollTop / Math.max(height, 1)) * 100) + '%'; }); }

// Alerts & subscribe
function closeAlert(alertId) { const a = document.getElementById(alertId); if (a) a.style.display = 'none'; }
function subscribe(e) { e.preventDefault(); showToastSafe('Subscribed successfully! 🎉'); }

// Init
window.addEventListener('DOMContentLoaded', () => {
  // Popup reference
  window.popup = document.getElementById('popup');

  initSidebar();
  initLiveSandboxes();
  initDarkMode();
  initAccessibilityMode();
  initScrollTop();
  initProgressBar();
  initSearchFilter();
  createFilterUI();  // Initialize filter UI

  // Attach global search handler
  const searchEl = document.getElementById('searchInput'); if (searchEl) searchEl.addEventListener('keydown', handleSearch);

  // Attach optional form-card buttons toast safely
  try { const btns = document.querySelectorAll('.form-card button'); if (btns[0]) btns[0].addEventListener('click', () => showToastSafe('Login button clicked')); if (btns[1]) btns[1].addEventListener('click', () => showToastSafe('Signup button clicked')); if (btns[2]) btns[2].addEventListener('click', () => showToastSafe('Message sent')); if (btns[3]) btns[3].addEventListener('click', () => showToastSafe('Form submitted')); } catch (e) {}

  // Newsletter subscribe: delegate to centralized subscribe(e)
  try {
    const newsBtn = document.querySelector('.newsletter-form button');
    if (newsBtn) newsBtn.addEventListener('click', (ev) => subscribe(ev));
  } catch (e) {}

  // Menu toggle (legacy id)
  const menuToggle = document.getElementById('menuToggle'); const sidebarEl = document.querySelector('.sidebar'); if (menuToggle && sidebarEl) menuToggle.addEventListener('click', () => sidebarEl.classList.toggle('hide'));
});


// ================= SEARCH (ROUTING) =================
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();

    const routes = {
      "button": "button.html",
      "buttons": "button.html",
      "navbar": "navbar.html",
      "navbars": "navbar.html",
      "card": "cards.html",
      "cards": "cards.html",
      "form": "form.html",
      "forms": "form.html",
      "footer": "footer.html",
      "color": "color.html",
      "colors": "color.html"
    };

    for (let key in routes) {
      if (query.includes(key)) {
        window.location.href = routes[key];
        return;
      }
    }

    showToast("No component found 😢");
  }
}


// ================= DARK MODE =================
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.getElementById("theme-toggle");

  if (toggleBtn) {
    toggleBtn.innerText = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "☀️ Light Mode";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "🌙 Dark Mode";
      }
    });
  }

// Init sidebar after DOM ready
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
});  

