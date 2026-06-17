/* =====================================================
CHECKBOX INTERACTIONS
===================================================== */

const checkboxes =
  document.querySelectorAll(
    'input[type="checkbox"]'
  );

checkboxes.forEach(box=>{

  box.addEventListener(
    "change",
    ()=>{

      const card =
        box.closest(
          ".checkbox-card"
        );

      if(card){

        card.style.transform =
          "scale(.98)";

        setTimeout(()=>{

          card.style.transform =
            "scale(1)";

        },180);

      }

    }
  );

});

/* =====================================================
PRIMARY BUTTON
===================================================== */

const exploreBtn =
  document.querySelector(
    ".primary-btn"
  );

exploreBtn.addEventListener(
  "click",
  ()=>{

    exploreBtn.innerText =
      "Loaded ✓";

    setTimeout(()=>{

      exploreBtn.innerText =
        "Explore UI";

    },1800);

  }
);


function copyCode(id) {
  const el = document.getElementById(id);

  if (!el) return;

  navigator.clipboard.writeText(el.textContent)
    .then(() => {
      const btn = event.target.closest("button");

      const original = btn.innerHTML;

      btn.innerHTML =
        '<i class="fa-solid fa-check"></i> Copied';

      setTimeout(() => {
        btn.innerHTML = original;
      }, 1500);
    });
}

function setTheme(theme, persist = true) {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  );

  const icon = document.querySelector(".theme-btn i");

  if (icon) {
    icon.className =
      theme === "dark"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";
  }

  if (persist) {
    localStorage.setItem("theme", theme);
  }
}
/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);


const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  document.querySelectorAll(".component-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    card.style.display =
      title.includes(value) ? "flex" : "none";
  });
});

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".filters button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    const filter = btn.textContent.toLowerCase();

    document.querySelectorAll(".component-card").forEach(card => {

      if (
        filter === "all" ||
        card.dataset.category.includes(filter)
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }

    });
  });
});

function updateCounter() {
  const checked =
    document.querySelectorAll(
      '.card-preview input[type="checkbox"]:checked'
    ).length;

  document.getElementById("checkedCount").textContent =
    checked;
}

document
  .querySelectorAll('.card-preview input[type="checkbox"]')
  .forEach(cb => {
    cb.addEventListener("change", updateCounter);
  });

updateCounter();
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