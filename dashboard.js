/* ======================================================
COUNT ANIMATION
====================================================== */

function animateValue(id,start,end,duration){

  let range = end - start;

  let current = start;

  let increment = end > start ? 1 : -1;

  let stepTime =
    Math.abs(
      Math.floor(duration / range)
    );

  const obj =
    document.getElementById(id);

  const timer =
    setInterval(()=>{

      current += increment;

      if(id === "growthCount"){

        obj.innerHTML =
          current + "%";

      }else{

        obj.innerHTML =
          current.toLocaleString();

      }

      if(current == end){

        clearInterval(timer);
      }

    },stepTime);

}

animateValue(
  "usersCount",
  0,
  15420,
  1200
);

animateValue(
  "componentsCount",
  0,
  842,
  1200
);

animateValue(
  "viewsCount",
  0,
  98450,
  1200
);

animateValue(
  "growthCount",
  0,
  78,
  1200
);

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  const expanded =
    sidebar.classList.contains("active");

  mobileToggle.setAttribute(
    "aria-expanded",
    expanded
  );

  sidebarOverlay.classList.toggle("active");
});

/* ======================================================
SEARCH DEMO
====================================================== */

const searchInput =
  document.querySelector(
    ".search-bar input"
  );

searchInput.addEventListener(
  "focus",
  ()=>{

    searchInput.parentElement.style.borderColor =
      "#7b61ff";

  }
);

searchInput.addEventListener(
  "blur",
  ()=>{

    searchInput.parentElement.style.borderColor =
      "rgba(255,255,255,.08)";

  }
);

function animateCounter(id, target, suffix = "") {
  const el = document.getElementById(id);

  let start = 0;

  const duration = 1800;
  const increment = target / (duration / 16);

  function update() {
    start += increment;

    if (start >= target) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    el.textContent =
      Math.floor(start).toLocaleString() + suffix;

    requestAnimationFrame(update);
  }

  update();
}

window.addEventListener("load", () => {
  animateCounter("usersCount", 12840);
  animateCounter("componentsCount", 426);
  animateCounter("viewsCount", 98500);
  animateCounter("growthCount", 82, "%");
});


const sidebar = document.querySelector(".sidebar");
const mobileToggle = document.getElementById("mobileToggle");
const overlay = document.getElementById("sidebarOverlay");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

/* =========================================
   ACTIVE SIDEBAR LINKS
========================================= */

document.querySelectorAll(".sidebar-nav a")
.forEach(link => {
  link.addEventListener("click", () => {

    document
      .querySelectorAll(".sidebar-nav a")
      .forEach(l => l.classList.remove("active"));

    link.classList.add("active");
  });
});

/* =========================================
   SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 20);
});

/* =========================================
   SIMPLE CHART ANIMATION
========================================= */

window.addEventListener("load", () => {

  document.querySelectorAll(".line-chart span")
    .forEach((bar, index) => {

      const originalHeight = bar.style.height;

      bar.style.height = "0";

      setTimeout(() => {
        bar.style.height = originalHeight;
      }, index * 120);
    });

});


document.querySelectorAll(".nav-btn, .card-header button")
.forEach(btn => {

  btn.addEventListener("click", function (e) {

    const circle = document.createElement("span");

    const diameter =
      Math.max(this.clientWidth, this.clientHeight);

    const radius = diameter / 2;

    circle.style.width =
      circle.style.height =
      `${diameter}px`;

    circle.style.left =
      `${e.clientX - this.offsetLeft - radius}px`;

    circle.style.top =
      `${e.clientY - this.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple =
      this.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });

});


document.querySelectorAll(".counter").forEach(counter => {

  const updateCounter = () => {

    const target =
      +counter.getAttribute("data-target");

    const current =
      +counter.innerText;

    const increment = target / 100;

    if (current < target) {

      counter.innerText =
        Math.ceil(current + increment);

      requestAnimationFrame(updateCounter);

    } else {

      counter.innerText =
        target.toLocaleString();

    }

  };

  updateCounter();

});

function updateClock(){

  const now = new Date();

  document.getElementById("liveClock").textContent =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();
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