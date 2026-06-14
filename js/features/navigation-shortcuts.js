/**
 * Navigation Shortcuts
 * Provides keyboard shortcuts for faster navigation
 *
 * /      -> Focus search
 * Esc    -> Close dialogs/modals
 * ← / →  -> Navigate component sections
 */

const NavigationShortcuts = {
  initialized: false,

  shortcuts: {
    search: "/",
    escape: "Escape",
    next: "ArrowRight",
    previous: "ArrowLeft"
  },

  init() {
    if (this.initialized) return;

    this.bindEvents();
    this.initialized = true;

    console.info("[NavigationShortcuts] initialized");
  },

  bindEvents() {
    document.addEventListener(
      "keydown",
      this.handleKeydown.bind(this),
      true
    );
  },

  handleKeydown(event) {
    const activeTag =
      document.activeElement &&
      document.activeElement.tagName
        ? document.activeElement.tagName.toLowerCase()
        : "";

    const isTyping =
      activeTag === "input" ||
      activeTag === "textarea" ||
      document.activeElement.isContentEditable;

    if (
      event.key === this.shortcuts.search &&
      !isTyping
    ) {
      event.preventDefault();
      this.focusSearch();
      return;
    }

    if (event.key === this.shortcuts.escape) {
      this.closeDialogs();
      return;
    }

    if (
      event.key === this.shortcuts.next &&
      !isTyping
    ) {
      this.goNextSection();
      return;
    }

    if (
      event.key === this.shortcuts.previous &&
      !isTyping
    ) {
      this.goPreviousSection();
    }
  },

  focusSearch() {
    const searchSelectors = [
      'input[type="search"]',
      ".search-input",
      "#search",
      "#component-search",
      ".search-box input"
    ];

    for (const selector of searchSelectors) {
      const element = document.querySelector(selector);

      if (element) {
        element.focus();

        if (typeof element.select === "function") {
          element.select();
        }

        this.notify("Search focused");
        return;
      }
    }
  },

  closeDialogs() {
    const closeButtons = document.querySelectorAll(
      [
        '[data-close]',
        '.modal-close',
        '.popup-close',
        '[aria-label="Close"]'
      ].join(",")
    );

    if (closeButtons.length > 0) {
      closeButtons[0].click();
      this.notify("Dialog closed");
      return;
    }

    const modals = document.querySelectorAll(
      ".modal.open, .popup.open"
    );

    modals.forEach((modal) => {
      modal.classList.remove("open");
    });
  },

  getSections() {
    return Array.from(
      document.querySelectorAll(
        "section, .component-section, .component-card"
      )
    ).filter(
      (section) =>
        section.offsetParent !== null
    );
  },

  getCurrentSection(sections) {
    const scrollPosition =
      window.scrollY + window.innerHeight / 3;

    let current = 0;

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPosition) {
        current = index;
      }
    });

    return current;
  },

  goNextSection() {
    const sections = this.getSections();

    if (!sections.length) return;

    const current =
      this.getCurrentSection(sections);

    const next = Math.min(
      current + 1,
      sections.length - 1
    );

    sections[next].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    this.highlight(sections[next]);
  },

  goPreviousSection() {
    const sections = this.getSections();

    if (!sections.length) return;

    const current =
      this.getCurrentSection(sections);

    const previous = Math.max(
      current - 1,
      0
    );

    sections[previous].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    this.highlight(sections[previous]);
  },

  highlight(element) {
    element.classList.add(
      "navigation-shortcuts-active"
    );

    setTimeout(() => {
      element.classList.remove(
        "navigation-shortcuts-active"
      );
    }, 1000);
  },

  notify(message) {
    if (
      typeof Toast !== "undefined" &&
      Toast.show
    ) {
      Toast.show(message);
      return;
    }

    console.info(
      `[NavigationShortcuts] ${message}`
    );
  }
};

if (
  typeof module !== "undefined" &&
  module.exports
) {
  module.exports =
    NavigationShortcuts;
}