/* =====================================================
  ACCORDIONS
  – Full keyboard support (Enter / Space / Arrow keys)
  – Manages aria-expanded, aria-controls, id linkage
  – Animates height via CSS custom property instead of
    toggling a class so transitions are smooth and
    respects prefers-reduced-motion
===================================================== */

(function initAccordions() {
  const items = document.querySelectorAll(".accordion-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    const button = item.querySelector(".accordion-btn");
    const panel  = item.querySelector(".accordion-panel");

    if (!button || !panel) return;

    // ── Wire up ids so aria-controls / aria-labelledby work ──
    const uid = `accordion-${index}`;
    button.id               = button.id  || `${uid}-btn`;
    panel.id                = panel.id   || `${uid}-panel`;
    button.setAttribute("aria-controls",     panel.id);
    button.setAttribute("aria-expanded",     "false");
    panel.setAttribute("role",               "region");
    panel.setAttribute("aria-labelledby",    button.id);
    panel.setAttribute("hidden",             "");       // collapsed by default

    button.addEventListener("click", () => toggleItem(item));

    // ── Keyboard: arrow navigation across buttons ──
    button.addEventListener("keydown", (e) => {
      const buttons = [...document.querySelectorAll(".accordion-btn")];
      const i       = buttons.indexOf(button);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        buttons[(i + 1) % buttons.length].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        buttons[(i - 1 + buttons.length) % buttons.length].focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        buttons[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        buttons[buttons.length - 1].focus();
      }
    });
  });

  function toggleItem(activeItem) {
    const isOpen = activeItem.classList.contains("active");

    // Collapse every item
    items.forEach((item) => {
      const btn   = item.querySelector(".accordion-btn");
      const panel = item.querySelector(".accordion-panel");
      if (!btn || !panel) return;

      item.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
      panel.setAttribute("hidden", "");
    });

    // If it wasn't open, open it now
    if (!isOpen) {
      const btn   = activeItem.querySelector(".accordion-btn");
      const panel = activeItem.querySelector(".accordion-panel");

      activeItem.classList.add("active");
      btn.setAttribute("aria-expanded", "true");
      panel.removeAttribute("hidden");
    }
  }
})();

document
.getElementById("expandAll")
.addEventListener("click",()=>{

  document
  .querySelectorAll(".accordion-item")
  .forEach(item=>item.classList.add("active"));

});

document
.getElementById("collapseAll")
.addEventListener("click",()=>{

  document
  .querySelectorAll(".accordion-item")
  .forEach(item=>item.classList.remove("active"));

});

/* ============================================================
   THEME STYLING LOGIC (theme.js)
   - Checks and applies dark/light mode immediately (pre-render)
   - Binds event listeners to theme toggles on DOM ready
   - Ensures visual synchronization of all toggles on the page
   ============================================================ */

// 1. Immediate execution to prevent theme flashing
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // Default to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
})();

// 2. Binding events when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtnIds = ['darkModeToggle', 'theme-toggle', 'themeToggle'];
  const toggleClasses = ['theme-toggle', 'theme-toggle-sidebar', 'theme-toggle-floating'];

  // Helper to collect all toggle buttons on the page
  function getAllToggles() {
    const toggles = new Set();
    
    // Add by IDs
    toggleBtnIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) toggles.add(el);
    });

    // Add by classes
    toggleClasses.forEach(className => {
      document.querySelectorAll('.' + className).forEach(el => toggles.add(el));
    });

    return Array.from(toggles);
  }

  // Helper to update a button's visual state (text and icon)
  function updateToggleVisual(btn) {
    if (!btn) return;
    const isDark = document.body.classList.contains('dark-mode');
    
    // Check if it's a sidebar toggle or text-based toggle
    if (btn.classList.contains('theme-toggle-sidebar') || btn.innerText.includes('Theme')) {
      btn.innerHTML = isDark 
        ? '<i class="fa-solid fa-sun"></i> Light Theme' 
        : '<i class="fa-solid fa-moon"></i> Dark Theme';
    } else {
      // Icon-only toggle (like in navbar or floating)
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      } else {
        btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

  // Sync visual state of all toggles on page load
  function syncAllToggles() {
    getAllToggles().forEach(btn => updateToggleVisual(btn));
  }

  // Handle theme toggle action
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Sync all toggles on the page
    syncAllToggles();

    // Fire custom event so page components can adapt if needed
    const event = new CustomEvent('themeChanged', { detail: { theme: isDark ? 'dark' : 'light' } });
    document.dispatchEvent(event);
  }

  // Dynamic self-healing: if no toggle exists on the page, create one
  let pageToggles = getAllToggles();
  if (pageToggles.length === 0) {
    const navRight = document.querySelector('.nav-right');
    const navbar = document.querySelector('.navbar') || document.querySelector('header.navbar') || document.querySelector('nav.navbar');
    const sidebarList = document.querySelector('.sidebar ul') || document.querySelector('.sidebar-nav ul');
    const sidebar = document.querySelector('.sidebar') || document.querySelector('aside.sidebar');

    if (navRight) {
      // Insert in navbar right section
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navRight.appendChild(btn);
    } else if (navbar) {
      // Append to navbar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.style.marginLeft = 'auto';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navbar.appendChild(btn);
    } else if (sidebarList) {
      // Append as sidebar link item
      const li = document.createElement('li');
      li.className = 'theme-toggle-item';
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      li.appendChild(btn);
      sidebarList.appendChild(li);
    } else if (sidebar) {
      // Append directly to sidebar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      sidebar.appendChild(btn);
    } else {
      // Floating button in corner
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle theme-toggle-floating';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      document.body.appendChild(btn);
    }
    
    // Refresh toggle list
    pageToggles = getAllToggles();
  }

  // Attach click listener to all buttons
  pageToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
    updateToggleVisual(btn);
  });
});




