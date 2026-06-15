/**
 * UIverse State Management - Integration Examples
 * 
 * Real-world examples of how to use the unified state management system
 * with UIverse components.
 * 
 * @version 1.0.0
 */

/**
 * Example 1: Dark Mode Toggle Component
 */
class DarkModeToggle {
  constructor(buttonSelector) {
    this.button = document.querySelector(buttonSelector);
    this.init();
  }

  init() {
    // Load persisted theme on init
    UIVerseStateManager.loadState();
    
    const isDark = UIVerseStateManager.getState('theme.dark', false);
    this.updateUI(isDark);

    // Setup event listener
    this.button.addEventListener('click', () => this.toggle());

    // React to state changes (from other tabs)
    UIVerseStateManager.subscribe('theme.dark', (isDark) => {
      this.updateUI(isDark);
    });
  }

  toggle() {
    const current = UIVerseStateManager.getState('theme.dark', false);
    UIVerseStateManager.setState('theme.dark', !current);
  }

  updateUI(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    this.button.innerHTML = isDark ? '☀️' : '🌙';
  }
}

// Usage:
// new DarkModeToggle('#darkModeToggle');


/**
 * Example 2: Form with Validation
 */
class FormManager {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.init();
  }

  init() {
    const formId = this.form.id || 'default-form';
    
    // Initialize form state
    UIVerseStateManager.setStates({
      [`forms.${formId}.email`]: '',
      [`forms.${formId}.password`]: '',
      [`forms.${formId}.submitted`]: false,
      [`forms.${formId}.errors`]: {},
      [`forms.${formId}.loading`]: false
    });

    // Setup input listeners
    this.form.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', (e) => {
        const fieldName = input.name;
        const value = input.value;
        UIVerseStateManager.setState(
          `forms.${formId}.${fieldName}`,
          value,
          {
            validator: (val) => this.validateField(fieldName, val)
          }
        );
      });
    });

    // Setup submit listener
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit(formId);
    });

    // React to error state changes
    UIVerseStateManager.subscribe(`forms.${formId}.errors`, (errors) => {
      this.displayErrors(errors);
    });
  }

  validateField(fieldName, value) {
    if (fieldName === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    if (fieldName === 'password') {
      return value.length >= 8;
    }
    return true;
  }

  async handleSubmit(formId) {
    UIVerseStateManager.setState(`forms.${formId}.loading`, true);

    try {
      const formData = UIVerseStateManager.getState(`forms.${formId}`);
      
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      if (response.ok) {
        UIVerseStateManager.setStates({
          [`forms.${formId}.submitted`]: true,
          [`forms.${formId}.errors`]: {}
        });
      } else {
        const errors = await response.json();
        UIVerseStateManager.setState(`forms.${formId}.errors`, errors);
      }
    } catch (error) {
      UIVerseStateManager.setState(`forms.${formId}.errors`, {
        submit: error.message
      });
    } finally {
      UIVerseStateManager.setState(`forms.${formId}.loading`, false);
    }
  }

  displayErrors(errors) {
    this.form.querySelectorAll('.error-message').forEach(el => el.remove());
    
    Object.entries(errors).forEach(([field, message]) => {
      const input = this.form.querySelector(`[name="${field}"]`);
      if (input) {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        input.parentElement.appendChild(errorEl);
      }
    });
  }
}

// Usage:
// new FormManager('#loginForm');


/**
 * Example 3: Sidebar Toggle with Persistence
 */
class SidebarToggle {
  constructor(toggleSelector, sidebarSelector) {
    this.toggle = document.querySelector(toggleSelector);
    this.sidebar = document.querySelector(sidebarSelector);
    this.init();
  }

  init() {
    UIVerseStateManager.loadState();
    
    const isExpanded = UIVerseStateManager.getState('ui.sidebarExpanded', true);
    this.updateSidebar(isExpanded);

    this.toggle.addEventListener('click', () => this.toggleSidebar());

    UIVerseStateManager.subscribe('ui.sidebarExpanded', (isExpanded) => {
      this.updateSidebar(isExpanded);
    });
  }

  toggleSidebar() {
    const current = UIVerseStateManager.getState('ui.sidebarExpanded', true);
    UIVerseStateManager.setState('ui.sidebarExpanded', !current);
  }

  updateSidebar(isExpanded) {
    this.sidebar.classList.toggle('expanded', isExpanded);
    this.toggle.textContent = isExpanded ? '←' : '→';
  }
}

// Usage:
// new SidebarToggle('#sidebarToggle', '#sidebar');


/**
 * Example 4: Modal Dialog Manager
 */
class ModalManager {
  constructor(modalSelector, triggersSelector) {
    this.modal = document.querySelector(modalSelector);
    this.triggers = document.querySelectorAll(triggersSelector);
    this.init();
  }

  init() {
    const modalId = this.modal.id || 'modal';
    
    // Initialize modal state
    UIVerseStateManager.setState(`modals.${modalId}.visible`, false);

    // Setup trigger listeners
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.openModal(modalId);
      });
    });

    // Setup close listeners
    const closeBtn = this.modal.querySelector('[data-close]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeModal(modalId);
      });
    }

    // React to visibility changes
    UIVerseStateManager.subscribe(`modals.${modalId}.visible`, (isVisible) => {
      this.updateModalUI(isVisible);
    });

    // Close on backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal(modalId);
      }
    });
  }

  openModal(modalId) {
    UIVerseStateManager.setState(`modals.${modalId}.visible`, true);
  }

  closeModal(modalId) {
    UIVerseStateManager.setState(`modals.${modalId}.visible`, false);
  }

  updateModalUI(isVisible) {
    this.modal.style.display = isVisible ? 'flex' : 'none';
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

// Usage:
// new ModalManager('#confirmModal', '[data-modal-trigger]');


/**
 * Example 5: Search with Debounce and Caching
 */
class SearchComponent {
  constructor(inputSelector, resultsSelector) {
    this.input = document.querySelector(inputSelector);
    this.results = document.querySelector(resultsSelector);
    this.searchCache = {};
    this.debounceTimer = null;
    this.init();
  }

  init() {
    UIVerseStateManager.setStates({
      'search.query': '',
      'search.results': [],
      'search.loading': false,
      'search.error': null
    });

    this.input.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });

    UIVerseStateManager.subscribe('search.results', (results) => {
      this.displayResults(results);
    });

    UIVerseStateManager.subscribe('search.loading', (isLoading) => {
      this.results.classList.toggle('loading', isLoading);
    });
  }

  handleSearch(query) {
    UIVerseStateManager.setState('search.query', query);

    clearTimeout(this.debounceTimer);
    
    if (!query) {
      UIVerseStateManager.setState('search.results', []);
      return;
    }

    this.debounceTimer = setTimeout(() => {
      this.performSearch(query);
    }, 300);
  }

  async performSearch(query) {
    if (this.searchCache[query]) {
      UIVerseStateManager.setState('search.results', this.searchCache[query]);
      return;
    }

    UIVerseStateManager.setState('search.loading', true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const results = await response.json();
      
      this.searchCache[query] = results;
      UIVerseStateManager.setStates({
        'search.results': results,
        'search.error': null
      });
    } catch (error) {
      UIVerseStateManager.setState('search.error', error.message);
    } finally {
      UIVerseStateManager.setState('search.loading', false);
    }
  }

  displayResults(results) {
    this.results.innerHTML = results
      .map(r => `<div class="result">${r.title}</div>`)
      .join('');
  }
}

// Usage:
// new SearchComponent('#searchInput', '#searchResults');


/**
 * Example 6: Tab Navigation with State
 */
class TabNavigation {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabs = this.container.querySelectorAll('[data-tab]');
    this.init();
  }

  init() {
    UIVerseStateManager.setState('ui.activeTab', this.tabs[0]?.dataset.tab || 'tab1');

    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        UIVerseStateManager.setState('ui.activeTab', tab.dataset.tab);
      });
    });

    UIVerseStateManager.subscribe('ui.activeTab', (activeTab) => {
      this.updateTabs(activeTab);
    });
  }

  updateTabs(activeTab) {
    this.tabs.forEach(tab => {
      const isActive = tab.dataset.tab === activeTab;
      tab.classList.toggle('active', isActive);
      
      const content = this.container.querySelector(`[data-content="${activeTab}"]`);
      if (content) {
        content.style.display = isActive ? 'block' : 'none';
      }
    });
  }
}

// Usage:
// new TabNavigation('#tabContainer');


/**
 * Example 7: Multi-Step Form with State
 */
class MultiStepForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.currentStep = 1;
    this.totalSteps = 3;
    this.init();
  }

  init() {
    UIVerseStateManager.setStates({
      'form.multiStep.currentStep': 1,
      'form.multiStep.step1': {},
      'form.multiStep.step2': {},
      'form.multiStep.step3': {},
      'form.multiStep.completed': false
    });

    const nextBtn = this.form.querySelector('[data-next]');
    const prevBtn = this.form.querySelector('[data-prev]');
    const submitBtn = this.form.querySelector('[data-submit]');

    nextBtn?.addEventListener('click', () => this.nextStep());
    prevBtn?.addEventListener('click', () => this.prevStep());
    submitBtn?.addEventListener('click', () => this.submit());

    UIVerseStateManager.subscribe('form.multiStep.currentStep', (step) => {
      this.displayStep(step);
    });
  }

  nextStep() {
    const current = UIVerseStateManager.getState('form.multiStep.currentStep', 1);
    if (current < this.totalSteps) {
      UIVerseStateManager.setState('form.multiStep.currentStep', current + 1);
    }
  }

  prevStep() {
    const current = UIVerseStateManager.getState('form.multiStep.currentStep', 1);
    if (current > 1) {
      UIVerseStateManager.setState('form.multiStep.currentStep', current - 1);
    }
  }

  displayStep(step) {
    this.form.querySelectorAll('[data-step]').forEach(el => {
      el.style.display = parseInt(el.dataset.step) === step ? 'block' : 'none';
    });
  }

  async submit() {
    const state = UIVerseStateManager.getState('form.multiStep');
    const formData = { ...state.step1, ...state.step2, ...state.step3 };
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        UIVerseStateManager.setState('form.multiStep.completed', true);
      }
    } catch (error) {
      console.error('Submit failed:', error);
    }
  }
}

// Usage:
// new MultiStepForm('#multiStepForm');


/**
 * Initialize all components on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  // Load persisted state
  UIVerseStateManager.loadState();

  // Initialize components
  if (document.querySelector('#darkModeToggle')) {
    new DarkModeToggle('#darkModeToggle');
  }

  if (document.querySelector('#loginForm')) {
    new FormManager('#loginForm');
  }

  if (document.querySelector('#sidebarToggle')) {
    new SidebarToggle('#sidebarToggle', '#sidebar');
  }

  if (document.querySelector('[data-modal]')) {
    document.querySelectorAll('[data-modal]').forEach(modal => {
      new ModalManager(`#${modal.id}`, `[data-modal-trigger="${modal.id}"]`);
    });
  }

  if (document.querySelector('#searchInput')) {
    new SearchComponent('#searchInput', '#searchResults');
  }

  if (document.querySelector('#tabContainer')) {
    new TabNavigation('#tabContainer');
  }

  if (document.querySelector('[data-form="multiStep"]')) {
    new MultiStepForm('[data-form="multiStep"]');
  }
});
