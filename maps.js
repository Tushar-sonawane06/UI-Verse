/* =====================================================
MAPS
===================================================== */

const map =
  L.map('map').setView(
    [22.5726,88.3639],
    12
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:'© OpenStreetMap'
  }
).addTo(map);

L.marker([22.5726,88.3639])
  .addTo(map)
  .bindPopup("UIverse Map")
  .openPopup();

/* SECOND MAP */

const map2 =
  L.map('map2').setView(
    [19.0760,72.8777],
    11
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map2);

/* THIRD MAP */

const map3 =
  L.map('map3').setView(
    [28.7041,77.1025],
    10
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map3);

/* FOURTH MAP - MINI MARKER */

const map4 =
  L.map('map4').setView(
    [13.0827,80.2707],
    12
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map4);

L.marker([13.0827,80.2707])
  .addTo(map4)
  .bindPopup('Mini Marker - Chennai')
  .openPopup();

/* FIFTH MAP - ROUTE / POLYLINE */

const map5 =
  L.map('map5').setView(
    [12.9716,77.5946],
    6
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map5);

const route = [
  [12.9716,77.5946],
  [13.0827,80.2707],
  [19.0760,72.8777]
];

L.polyline(route, { color: '#ff7a3d', weight: 4 }).addTo(map5);

map5.fitBounds(route);

/* SIXTH MAP - HOTSPOTS (simple heat effect using circles) */

const map6 =
  L.map('map6').setView(
    [21.1458,79.0882],
    5
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map6);

const hotspots = [
  [19.0760,72.8777,20000],
  [22.5726,88.3639,20000],
  [28.7041,77.1025,20000],
  [13.0827,80.2707,20000]
];

hotspots.forEach(h => {
  L.circle([h[0], h[1]], {
    radius: h[2],
    color: '#7b61ff',
    fillColor: '#7b61ff',
    fillOpacity: 0.12,
    weight: 0
  }).addTo(map6);
});

/* =====================================================
SEARCH DEMO
===================================================== */

const searchBtn =
  document.querySelector(
    ".search-location button"
  );

searchBtn.addEventListener(
  "click",
  ()=>{

    searchBtn.innerHTML =
      "Searching...";

    setTimeout(()=>{

      searchBtn.innerHTML =
        "Found";

    },1200);

  }
);

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(".navbar");

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.8)";
    }

  }
);
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