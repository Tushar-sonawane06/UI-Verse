document.addEventListener('DOMContentLoaded', () => {
  const dropdownWrappers = document.querySelectorAll('.dropdown-wrapper');

  dropdownWrappers.forEach(wrapper => {
    const btn = wrapper.querySelector('.dropdown-btn');
    if (!btn) return;

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close other dropdowns
      dropdownWrappers.forEach(other => {
        if (other !== wrapper) {
          other.classList.remove('active');
        }
      });

      wrapper.classList.toggle('active');
    });

    // Handle selection and close
    const items = wrapper.querySelectorAll('.dropdown-menu .dropdown-item');
    items.forEach(item => {
      // Avoid selecting submenus triggers directly
      if (item.querySelector('.dropdown-submenu') || item.closest('.dropdown-submenu')) {
        if (item.closest('.dropdown-submenu')) {
          item.addEventListener('click', (e) => {
            e.stopPropagation();
            const btnSpan = btn.querySelector('span');
            if (btnSpan) {
              const itemSpan = item.querySelector('span');
              btnSpan.textContent = itemSpan ? itemSpan.textContent : item.textContent.trim();
            }
            wrapper.classList.remove('active');
          });
        }
        return;
      }

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Update button text if there is a span
        const btnSpan = btn.querySelector('span');
        if (btnSpan && !btn.classList.contains('actions-btn') && !btn.classList.contains('notification-btn')) {
          const itemTextElement = item.querySelector('span:not(.lang-flag)');
          const flagElement = item.querySelector('.lang-flag, .flag');
          
          let selectedHTML = '';
          if (flagElement) {
            selectedHTML += `<span class="${flagElement.className}">${flagElement.textContent}</span> `;
          }
          selectedHTML += itemTextElement ? itemTextElement.textContent : item.textContent.trim();
          btnSpan.innerHTML = selectedHTML;
        }

        // Handle language active visual checks
        if (wrapper.classList.contains('language-wrap')) {
          wrapper.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active-lang'));
          item.classList.add('active-lang');
          wrapper.querySelectorAll('.check-icon').forEach(icon => {
            icon.className = 'fa-solid fa-circle check-icon empty';
          });
          const activeCheck = item.querySelector('.check-icon');
          if (activeCheck) {
            activeCheck.className = 'fa-solid fa-circle-check check-icon';
          }
        }

        // Close dropdown
        wrapper.classList.remove('active');
      });
    });

    // Search filter logic
    const searchInput = wrapper.querySelector('.dropdown-search-input');
    if (searchInput) {
      searchInput.addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid closing dropdown when clicking inside input
      });
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const searchItems = wrapper.querySelectorAll('.dropdown-items-list .dropdown-item');
        searchItems.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    dropdownWrappers.forEach(wrapper => {
      wrapper.classList.remove('active');
    });
  });

  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
  scrollBtn.addEventListener("click", scrollToTop);
}

  window.addEventListener("scroll", () => {
  if (!scrollBtn) return;

  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
});

// ✅ Global scroll-to-top function (outside DOMContentLoaded)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Expand/Collapse Code Block
let toastTimer;
window.toggleCode = function(id, btn) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  codeBlock.classList.toggle('open');
  if (codeBlock.classList.contains('open')) {
    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide Code';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-code"></i> View Code';
  }
};

// Copy Code Snippet
window.copyCode = function(id, btn) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  const code = codeBlock.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
      btn.classList.add('copied');
      
      const toast = document.getElementById("copyToast");
      if (toast) {
        toast.classList.add("show");
      }

      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        if (toast) {
          toast.classList.remove("show");
        }
        btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        btn.classList.remove('copied');
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
};
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
});/* ============================================================
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