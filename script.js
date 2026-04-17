/* Toggle Code Block */
function toggleCode(id) {
  const el = document.getElementById(id);

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

/* Toggle Sidebar on mobile and desktop */
function toggleSidebar() {
  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    /* Persist desktop sidebar state across page navigations */
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}

/* Active link helper for sidebar navigation */
function updateSidebarActiveLink() {
  /* Normalize to lowercase so 'Navbar.html' matches href='navbar.html' */
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.sidebar ul li').forEach((li) => {
    const anchor = li.querySelector('a');
    if (!anchor) return;
    if (anchor.getAttribute('href').toLowerCase() === currentPage) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
}

/* Restore sidebar hidden state on desktop across page navigations */
function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}

/* Close mobile sidebar when a nav link is clicked */
function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', function () {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
});

/* Copy Code with Better UX */
function copyCode(id, btn) {
  const code = document.getElementById(id).innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      btn.innerText = "Copied!";
      btn.style.background = "#00b894";

      setTimeout(() => {
        btn.innerText = "Copy";
        btn.style.background = "#111";
      }, 1500);
    })
    .catch(() => {
      btn.innerText = "Error";
    });
}
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    components.forEach((item) => {
      const text = item.dataset.name.toLowerCase();

      if (text.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();

    // 🔥 Mapping keywords → pages
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

    // 🔍 Find match
    for (let key in routes) {
      if (query.includes(key)) {
        window.location.href = routes[key];
        return;
      }
    }

    // ❌ No match
    alert("No component found 😢");
  }
}
// 🌙 DARK MODE TOGGLE (ADDED)

const toggleBtn = document.getElementById("theme-toggle");

// Check if button exists (important for multi-pages)
if (toggleBtn) {

  // Toggle on click
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

  // Load saved theme
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.innerText = "☀️ Light Mode";
    }

  });
}
function toggleCode(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

function copyCode(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}