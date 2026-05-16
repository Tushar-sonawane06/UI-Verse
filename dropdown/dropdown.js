class DropdownMenu {
  constructor(root) {
    this.root = root;
    this.trigger = root.querySelector('.dropdown-trigger');
    this.panel = root.querySelector('.dropdown-panel');
    this.searchInput = root.querySelector('.dropdown-search');
    this.submenuTriggers = [];
    this.isHover = root.dataset.trigger === 'hover';
    this.handleDocumentClick = this.onDocumentClick.bind(this);
    this.handleRootKeydown = this.onRootKeydown.bind(this);
    this.init();
  }

  init() {
    if (!this.root || !this.trigger || !this.panel) {
      return;
    }

    const panelId = this.panel.id || `dropdown-panel-${Math.random().toString(36).slice(2)}`;
    this.panel.id = panelId;
    this.trigger.setAttribute('aria-controls', panelId);
    this.trigger.setAttribute('aria-haspopup', 'true');
    this.trigger.setAttribute('aria-expanded', 'false');
    this.trigger.setAttribute('type', 'button');

    this.panel.setAttribute('role', 'menu');
    this.panel.setAttribute('aria-hidden', 'true');

    this.root.querySelectorAll('.dropdown-item').forEach((item) => {
      item.setAttribute('role', 'menuitem');
      item.setAttribute('type', 'button');
      item.addEventListener('click', (event) => this.handleItemClick(event));
    });

    this.trigger.addEventListener('click', (event) => {
      if (!this.isHover) {
        event.preventDefault();
        this.toggle();
      }
    });

    this.trigger.addEventListener('keydown', (event) => this.onTriggerKeydown(event));
    this.panel.addEventListener('keydown', (event) => this.onMenuKeydown(event));
    this.root.addEventListener('keydown', this.handleRootKeydown);
    document.addEventListener('click', this.handleDocumentClick);

    if (this.searchInput) {
      const searchId = this.searchInput.id || `dropdown-search-${Math.random().toString(36).slice(2)}`;
      this.searchInput.id = searchId;
      const searchLabel = this.root.querySelector('.dropdown-search-label');
      if (searchLabel) {
        searchLabel.setAttribute('for', searchId);
      }

      this.searchInput.addEventListener('input', () => {
        if (!this.panel.classList.contains('open')) {
          this.open();
        }
        this.filterItems();
      });
    }

    if (this.isHover) {
      this.root.addEventListener('mouseenter', () => this.open());
      this.root.addEventListener('mouseleave', () => this.close());
      this.trigger.addEventListener('click', (event) => {
        event.preventDefault();
        this.toggle();
      });
    }

    this.setupSubmenus();
    this.setPanelState(false);
  }

  setupSubmenus() {
    this.submenuTriggers = [...this.root.querySelectorAll('.dropdown-item--submenu')];

    this.submenuTriggers.forEach((button) => {
      const submenu = button.nextElementSibling;

      if (!submenu || !submenu.classList.contains('dropdown-submenu')) {
        return;
      }

      button.setAttribute('aria-haspopup', 'true');
      button.setAttribute('aria-expanded', 'false');
      button.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          this.openSubmenu(button, submenu);
        }
      });

      button.addEventListener('click', (event) => {
        event.preventDefault();
        this.toggleSubmenu(button, submenu);
      });

      if (this.isHover) {
        button.addEventListener('mouseenter', () => this.openSubmenu(button, submenu));
      }
    });
  }

  handleItemClick(event) {
    const item = event.currentTarget;
    if (!item.classList.contains('dropdown-item--submenu')) {
      this.close();
    }
  }

  setPanelState(isOpen) {
    this.panel.classList.toggle('open', isOpen);
    this.panel.dataset.open = isOpen ? 'true' : 'false';
    this.panel.setAttribute('aria-hidden', String(!isOpen));
    this.trigger.setAttribute('aria-expanded', String(isOpen));
    this.root.classList.toggle('dropdown-open', isOpen);
  }

  open() {
    this.setPanelState(true);
  }

  close() {
    this.setPanelState(false);
    this.closeAllSubmenus();
  }

  toggle() {
    const isOpen = this.panel.classList.contains('open');
    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  closeAllSubmenus() {
    this.root.querySelectorAll('.dropdown-submenu').forEach((submenu) => {
      submenu.classList.remove('open');
      submenu.dataset.open = 'false';
      submenu.setAttribute('aria-hidden', 'true');
      const trigger = submenu.previousElementSibling;
      if (trigger && trigger.classList.contains('dropdown-item--submenu')) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  openSubmenu(trigger, submenu) {
    if (!submenu) {
      return;
    }

    const previouslyOpen = submenu.classList.contains('open');
    this.closeAllSubmenus();

    if (!previouslyOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      submenu.classList.add('open');
      submenu.dataset.open = 'true';
      submenu.setAttribute('aria-hidden', 'false');
      const firstItem = this.getVisibleItems(submenu)[0];
      firstItem?.focus();
    }
  }

  closeSubmenu(trigger, submenu) {
    if (!submenu) {
      return;
    }

    trigger.setAttribute('aria-expanded', 'false');
    submenu.classList.remove('open');
    submenu.dataset.open = 'false';
    submenu.setAttribute('aria-hidden', 'true');
  }

  toggleSubmenu(trigger, submenu) {
    if (submenu.classList.contains('open')) {
      this.closeSubmenu(trigger, submenu);
    } else {
      this.openSubmenu(trigger, submenu);
    }
  }

  getVisibleItems(panel = this.panel) {
    return [...panel.querySelectorAll('.dropdown-item')].filter(
      (item) => item.offsetParent !== null && item.closest('.dropdown-item-wrapper')?.style.display !== 'none'
    );
  }

  focusNextItem(currentItem, direction) {
    const panel = currentItem.closest('.dropdown-panel') || this.panel;
    const items = this.getVisibleItems(panel);
    const currentIndex = items.indexOf(currentItem);
    const nextIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));
    if (items[nextIndex]) {
      items[nextIndex].focus();
    }
  }

  onTriggerKeydown(event) {
    const allowed = ['ArrowDown', 'ArrowUp', 'Enter', ' ', 'Spacebar'];
    if (allowed.includes(event.key)) {
      event.preventDefault();
      this.open();
      const items = this.getVisibleItems();
      const target = event.key === 'ArrowUp' ? items[items.length - 1] : items[0];
      target?.focus();
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      this.trigger.focus();
    }
  }

  onRootKeydown(event) {
    if (event.key === 'Escape' && this.panel.classList.contains('open')) {
      event.preventDefault();
      this.close();
      this.trigger.focus();
    }

    if (event.key === 'Tab' && this.panel.classList.contains('open')) {
      this.close();
    }
  }

  onMenuKeydown(event) {
    const activeElement = document.activeElement;
    if (!activeElement) {
      return;
    }

    if (!activeElement.classList.contains('dropdown-item')) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusNextItem(activeElement, 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusNextItem(activeElement, -1);
        break;
      case 'ArrowRight':
        if (activeElement.classList.contains('dropdown-item--submenu')) {
          event.preventDefault();
          const submenu = activeElement.nextElementSibling;
          this.openSubmenu(activeElement, submenu);
        }
        break;
      case 'ArrowLeft': {
        const submenu = activeElement.closest('.dropdown-submenu');
        if (submenu) {
          event.preventDefault();
          const parentTrigger = submenu.previousElementSibling;
          if (parentTrigger && parentTrigger.classList.contains('dropdown-item--submenu')) {
            this.closeSubmenu(parentTrigger, submenu);
            parentTrigger.focus();
          }
        }
        break;
      }
      case 'Enter':
      case ' ': {
        if (activeElement.classList.contains('dropdown-item--submenu')) {
          event.preventDefault();
          const submenu = activeElement.nextElementSibling;
          this.toggleSubmenu(activeElement, submenu);
        }
        break;
      }
      case 'Escape': {
        event.preventDefault();
        const submenu = activeElement.closest('.dropdown-submenu');
        if (submenu) {
          const parentTrigger = submenu.previousElementSibling;
          this.closeSubmenu(parentTrigger, submenu);
          parentTrigger?.focus();
        } else {
          this.close();
          this.trigger.focus();
        }
        break;
      }
      case 'Tab':
        this.close();
        break;
      default:
        break;
    }
  }

  onDocumentClick(event) {
    if (!this.root.contains(event.target)) {
      this.close();
    }
  }

  filterItems() {
    const filter = this.searchInput.value.trim().toLowerCase();
    const wrappers = [...this.panel.querySelectorAll('.dropdown-item-wrapper')];

    wrappers.forEach((wrapper) => {
      const button = wrapper.querySelector('.dropdown-item');
      const submenu = wrapper.querySelector('.dropdown-submenu');
      const label = button.textContent.trim().toLowerCase();
      const submenuMatches = submenu
        ? [...submenu.querySelectorAll('.dropdown-item')].some((item) => item.textContent.trim().toLowerCase().includes(filter))
        : false;
      const isVisible = !filter || label.includes(filter) || submenuMatches;
      wrapper.style.display = isVisible ? '' : 'none';

      if (submenu) {
        if (submenuMatches) {
          this.openSubmenu(button, submenu);
        } else {
          this.closeSubmenu(button, submenu);
        }
      }
    });
  }
}

function initializeDropdowns() {
  document.querySelectorAll('[data-dropdown]').forEach((dropdownRoot) => new DropdownMenu(dropdownRoot));
}

document.addEventListener('DOMContentLoaded', initializeDropdowns);
