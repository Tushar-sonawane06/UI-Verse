/* =================================================================
   script.js  –  UI-Verse
   Single consolidated file. Each function is declared exactly once.
   ================================================================= */


/* ================= POPUP ================= */
let popup;

document.addEventListener("DOMContentLoaded", () => {
  popup = document.getElementById("popup");
});

function openPopup() {
  if (popup) popup.classList.add("open-popup");
}

function closePopup() {
  if (popup) popup.classList.remove("open-popup");
}


/* ================= TOAST NOTIFICATION ================= */
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  // Trigger slide-in (double rAF ensures the element is painted first)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-visible");
    });
  });

  // Auto-dismiss after 2 seconds
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2000);
}


/* ================= TOGGLE CODE BLOCK ================= */
function toggleCode(id) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;

  if (codeBlock.classList.contains("show")) {
    codeBlock.style.display = "none";
    codeBlock.classList.remove("show");
  } else {
    codeBlock.style.display = "block";
    codeBlock.classList.add("show");
  }
}


/* ================= COPY CODE ================= */
function copyCode(id, btn) {
  const element = document.getElementById(id);
  if (!element) return;

  // Support both <textarea>/<input> (use .value) and any other element (use .innerText)
  const code = (element.tagName === "TEXTAREA" || element.tagName === "INPUT")
    ? element.value
    : element.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      showToast("Code copied!");

      if (btn) {
        const originalText = btn.innerText;
        btn.innerText = "Copied ✓";
        btn.classList.add("copied");

        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove("copied");
        }, 1500);
      }
    })
    .catch(() => {
      showToast("Failed to copy ❌");
      if (btn) btn.innerText = "Error";
    });
}


/* ================= COPY COLOR ================= */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}

function copyRGB(value) {
  navigator.clipboard.writeText(`rgb(${value})`);
  showToast(`rgb(${value}) copied!`);
}


/* ================= SIDEBAR ================= */
function toggleSidebar() {
  const backdrop = document.querySelector(".sidebar-backdrop");

  if (window.innerWidth <= 900) {
    document.body.classList.toggle("sidebar-open");
    backdrop?.classList.toggle("active");
  } else {
    const isHidden = document.body.classList.toggle("sidebar-hidden");
    sessionStorage.setItem("sidebarHidden", isHidden ? "1" : "0");
  }
}

function getNormalizedRoutePath(href = window.location.href) {
  const normalized = new URL(href, window.location.href);
  return normalized.pathname.toLowerCase();
}

function getComponentsIndexSidebarHref() {
  const homeAnchor = document.querySelector('.sidebar a[href$="index.html"]');
  const homeHref = homeAnchor?.getAttribute('href') || 'index.html';

  if (/index\.html$/i.test(homeHref)) {
    return homeHref.replace(/index\.html$/i, 'components/index.html');
  }

  return 'components/index.html';
}

function ensureSidebarComponentsIndexLink() {
  const sidebarList = document.querySelector(".sidebar ul");
  if (!sidebarList) return;

  const alreadyExists = Array.from(sidebarList.querySelectorAll("a")).some((anchor) => {
    const href = (anchor.getAttribute("href") || "").toLowerCase();
    return href.includes("components/index.html");
  });

  if (alreadyExists) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <a href="${getComponentsIndexSidebarHref()}">
      <i class="fa-solid fa-table-cells-large"></i>
      <span>Components Index</span>
    </a>
  `;
  sidebarList.appendChild(li);
}

function getFavoritesSidebarHref() {
  const homeAnchor = document.querySelector('.sidebar a[href$="index.html"]');
  const homeHref = homeAnchor?.getAttribute('href') || 'index.html';

  if (/index\.html$/i.test(homeHref)) {
    return homeHref.replace(/index\.html$/i, 'favorites.html');
  }

  return 'favorites.html';
}

function getLegacyFavoritesCount() {
  try {
    const raw = localStorage.getItem('uiVerseFavorites');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch (error) {
    return 0;
  }
}

function syncLegacyFavoritesCountBadge() {
  const badge = document.querySelector('.favorites-count-badge');
  if (!badge) return;
  badge.textContent = String(getLegacyFavoritesCount());
}

function ensureSidebarFavoritesLink() {
  const sidebarList = document.querySelector('.sidebar ul');
  if (!sidebarList) return;

  const alreadyExists = Array.from(sidebarList.querySelectorAll('a')).some((anchor) => {
    const href = (anchor.getAttribute('href') || '').toLowerCase();
    return href.includes('favorites.html');
  });

  if (alreadyExists) {
    syncLegacyFavoritesCountBadge();
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <a href="${getFavoritesSidebarHref()}">
      <i class="fa-solid fa-star"></i>
      <span>Favorites</span>
      <span class="favorites-count-badge" style="margin-left:auto;font-size:11px;opacity:0.9;">0</span>
    </a>
  `;
  sidebarList.appendChild(li);
  syncLegacyFavoritesCountBadge();
}

function initLegacyFavoritesCountSync() {
  document.addEventListener('uiverse:favorites:changed', syncLegacyFavoritesCountBadge);
  window.addEventListener('storage', syncLegacyFavoritesCountBadge);
}

function initLegacyCardFavorites() {
  if (window.Favorites && typeof window.Favorites.init === 'function') return;

  const cards = Array.from(document.querySelectorAll('.component-card'));
  if (cards.length === 0) return;

  const normalizeId = (value) => String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const readFavorites = () => {
    try {
      const raw = localStorage.getItem('uiVerseFavorites');
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  };

  const writeFavorites = (items) => {
    localStorage.setItem('uiVerseFavorites', JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('uiverse:favorites:changed', { detail: { count: items.length } }));
  };

  const isFavorite = (id) => readFavorites().some((item) => normalizeId(item.id) === normalizeId(id));

  const updateButton = (button, active) => {
    button.classList.toggle('is-favorited', Boolean(active));
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    button.innerHTML = active
      ? '<i class="fa-solid fa-star"></i>'
      : '<i class="fa-regular fa-star"></i>';
  };

  cards.forEach((card, index) => {
    const title = card.querySelector('.card-label, h3, h2, h4')?.textContent?.trim() || card.dataset.name || `Component ${index + 1}`;
    const page = (new URL(window.location.href).pathname || '').replace(/^\/+/, '').toLowerCase() || 'index.html';
    const id = normalizeId(card.dataset.componentId || `${page} ${title}`);
    card.dataset.componentId = id;

    const actions = card.querySelector('.actions') || (() => {
      const node = document.createElement('div');
      node.className = 'actions';
      card.appendChild(node);
      return node;
    })();

    let button = card.querySelector('.favorite-btn');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'action-btn favorite-btn icon-only';
      button.setAttribute('aria-label', 'Toggle favorite bookmark');
      actions.insertBefore(button, actions.firstChild || null);
    }

    updateButton(button, isFavorite(id));
    button.addEventListener('click', () => {
      const favorites = readFavorites();
      const exists = favorites.some((item) => normalizeId(item.id) === id);
      const next = exists
        ? favorites.filter((item) => normalizeId(item.id) !== id)
        : [{ id, title, page, category: card.dataset.cat || 'component', tags: [], savedAt: new Date().toISOString() }, ...favorites];

      writeFavorites(next);
      updateButton(button, !exists);
      syncLegacyFavoritesCountBadge();
    });
  });
}

function initDevicePreviewFeature() {
  const hasCards = document.querySelector('.component-card');
  if (!hasCards) return;

  const start = () => {
    if (window.DevicePreview && typeof window.DevicePreview.init === 'function') {
      window.DevicePreview.init();
    }
  };

  if (window.DevicePreview && typeof window.DevicePreview.init === 'function') {
    start();
    return;
  }

  const existingScript = document.querySelector('script[src$="js/features/device-preview.js"]');
  if (existingScript) {
    existingScript.addEventListener('load', start, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'js/features/device-preview.js';
  script.onload = start;
  document.body.appendChild(script);
}

function initKeyboardShortcutsFeature() {
  const start = () => {
    if (window.KeyboardShortcuts && typeof window.KeyboardShortcuts.init === 'function') {
      window.KeyboardShortcuts.init();
    }
  };

  if (window.KeyboardShortcuts && typeof window.KeyboardShortcuts.init === 'function') {
    start();
    return;
  }

  const existingScript = document.querySelector('script[src$="js/features/keyboard-shortcuts.js"]');
  if (existingScript) {
    existingScript.addEventListener('load', start, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'js/features/keyboard-shortcuts.js';
  script.onload = start;
  document.body.appendChild(script);
}

function initDownloadFeature() {
  const hasCards = document.querySelector('.component-card');
  const hasActions = document.querySelector('.actions');
  if (!hasCards && !hasActions) return;

  const start = () => {
    if (window.Download && typeof window.Download.init === 'function') {
      window.Download.init();
    }
  };

  if (window.Download && typeof window.Download.init === 'function') {
    start();
    return;
  }

  const existingScript = document.querySelector('script[src$="js/features/download.js"]');
  if (existingScript) {
    existingScript.addEventListener('load', start, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'js/features/download.js';
  script.onload = start;
  document.body.appendChild(script);
}

function initRecentComponentsTracker() {
  const hasCards = document.querySelector('.component-card');
  if (!hasCards) return;

  const start = () => {
    if (window.Recent && typeof window.Recent.init === 'function') {
      window.Recent.init();
    }
  };

  if (window.Recent && typeof window.Recent.init === 'function') {
    start();
    return;
  }

  const existingScript = document.querySelector('script[src$="js/features/recent.js"]');
  if (existingScript) {
    existingScript.addEventListener('load', start, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'js/features/recent.js';
  script.onload = start;
  document.body.appendChild(script);
}

function updateSidebarActiveLink() {
  const currentRoute = getNormalizedRoutePath();

  document.querySelectorAll(".sidebar ul li").forEach((li) => {
    const anchor = li.querySelector("a");
    if (!anchor) return;

    const anchorRoute = getNormalizedRoutePath(anchor.getAttribute("href") || "index.html");

    if (anchorRoute === currentRoute) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
}

function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem("sidebarHidden") === "1") {
    document.body.classList.add("sidebar-hidden");
  }
}

function initSidebarLinkClose() {
  document.querySelectorAll(".sidebar ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove("sidebar-open");
        document.querySelector(".sidebar-backdrop")?.classList.remove("active");
      }
    });
  });
}

function toggleMenu() {
  document.querySelector(".sidebar")?.classList.toggle("active");
}

function initSidebar() {
  restoreSidebarState();
  ensureSidebarComponentsIndexLink();
  ensureSidebarFavoritesLink();
  initLegacyFavoritesCountSync();
  updateSidebarActiveLink();
  initSidebarLinkClose();
}


/* ================= LIVE IFRAME SANDBOX ================= */
function initLiveSandboxes() {
  const componentCards = document.querySelectorAll(".component-card");

  componentCards.forEach((card, index) => {
    const h3 = card.querySelector("h3");
    const actions = card.querySelector(".actions");
    const existingCodeBlock = card.querySelector(".code-block");

    const previewNodes = Array.from(card.childNodes).filter((node) => {
      return (
        (node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "")) &&
        node !== h3 &&
        node !== actions &&
        node !== existingCodeBlock &&
        node.nodeName !== "SCRIPT"
      );
    });

    if (previewNodes.length === 0 && !existingCodeBlock) return;

    let initialHTML = existingCodeBlock
      ? existingCodeBlock.textContent.trim()
      : previewNodes.map((n) => n.outerHTML || n.textContent).join("\n").trim();

    previewNodes.forEach((node) => node.remove());

    // Create iframe preview
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.minHeight = "160px";
    iframe.style.border = "1px solid #e8ebf2";
    iframe.style.borderRadius = "8px";
    iframe.style.background = "transparent";

    // Create editable textarea
    const textarea = document.createElement("textarea");
    if (existingCodeBlock) {
      textarea.id = existingCodeBlock.id;
      textarea.className = existingCodeBlock.className;
      textarea.style.display = existingCodeBlock.style.display || "none";
    } else {
      textarea.id = "live-code-" + index;
      textarea.className = "code-block";
      textarea.style.display = "none";

      if (actions) {
        const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]');
        const copyBtn = actions.querySelector('button[onclick^="copyCode"]');
        if (toggleBtn) toggleBtn.setAttribute("onclick", `toggleCode("${textarea.id}")`);
        if (copyBtn) copyBtn.setAttribute("onclick", `copyCode("${textarea.id}", this)`);
      }
    }

    textarea.value = initialHTML;
    textarea.style.width = "100%";
    textarea.style.minHeight = "120px";
    textarea.style.boxSizing = "border-box";
    textarea.style.resize = "vertical";

    const renderIframe = (htmlContent) => {
      iframe.srcdoc = `
        <!DOCTYPE html>
        <html>
        <head>
          <link rel="stylesheet" href="style.css">
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background: transparent;
              padding: 20px;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>${htmlContent}</body>
        </html>`;
    };

    renderIframe(initialHTML);

    // Debounced live update
    let timeout;
    textarea.addEventListener("input", (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => renderIframe(e.target.value), 300);
    });

    if (h3) {
      h3.after(iframe);
    } else {
      card.insertBefore(iframe, card.firstChild);
    }

    if (existingCodeBlock) {
      existingCodeBlock.replaceWith(textarea);
    } else if (actions) {
      actions.after(textarea);
    }
  });
}


/* ================= SEARCH – INLINE FILTER ================= */
// Initialised inside DOMContentLoaded to avoid a const re-declaration at top level.
function initSearchFilter() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase().trim();

    document.querySelectorAll(".component-card").forEach((item) => {
      const text = (item.dataset.name || item.innerText).toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
}


/* ================= SEARCH – PAGE ROUTING ================= */
function handleSearch(event) {
  if (event.key !== "Enter") return;

  const query = event.target.value.toLowerCase().trim();

  const routes = {
    button:  "button.html",
    buttons: "button.html",
    navbar:  "Navbar.html",
    navbars: "Navbar.html",
    card:    "cards.html",
    cards:   "cards.html",
    form:    "form.html",
    forms:   "form.html",
    footer:  "footer.html",
    color:   "color.html",
    colors:  "color.html",
    pricing: "pricing.html",
    subscription: "subscription.html",
    subscriptions: "subscription.html",
    billing: "subscription.html",
    auth: "auth.html",
    login: "auth.html",
    signup: "auth.html",
    authentication: "auth.html",
  };

  for (const key in routes) {
    if (query.includes(key)) {
      window.location.href = routes[key];
      return;
    }
  }

  showToast("No component found 😢");
}


/* ================= DARK MODE ================= */
// Uses a single toggle element id ("theme-toggle") and the "dark-mode" class.
function loadTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.innerText = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggle) themeToggle.innerText = "🌙 Dark Mode";
  }
}

function initDarkMode() {
  // Apply system preference on first visit
  if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark-mode");
    }
  }

  loadTheme();

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  }
}


/* ================= SCROLL TO TOP ================= */
function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  let lastScrollY = 0;
  let ticking = false;

  const updateButton = () => {
    const shouldShow = window.scrollY > 300;
    btn.style.display = shouldShow ? "block" : "none";
    btn.style.opacity = shouldShow ? "1" : "0";
    btn.style.transform = shouldShow ? "translateY(0)" : "translateY(10px)";
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateButton);
      ticking = true;
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ================= SCROLL PROGRESS BAR ================= */
function initProgressBar() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = ((scrollTop / height) * 100) + "%";
  });
}


/* ================= ALERT CLOSE ================= */
function closeAlert(alertId) {
  const alert = document.getElementById(alertId);
  if (alert) alert.style.display = "none";
}


/* ================= SUBSCRIBE ================= */
function subscribe(e) {
  e.preventDefault();
  showToast("Subscribed successfully! 🎉");
}


/* ================= INIT (DOMContentLoaded) ================= */
window.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initLegacyCardFavorites();
  initRecentComponentsTracker();
  initLiveSandboxes();
  initDevicePreviewFeature();
  initKeyboardShortcutsFeature();
  initDownloadFeature();
  initDarkMode();
  initScrollTop();
  initProgressBar();
  initSearchFilter();
});

// DARK MODE
  const toggle = document.getElementById('darkModeToggle');
  const icon = toggle.querySelector('i');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.className = 'fa-solid fa-sun';
  }

  toggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');

    icon.className = isDark
      ? 'fa-solid fa-sun'
      : 'fa-solid fa-moon';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

  });


  // SIDEBAR
  function toggleSidebar() {

    document.getElementById('sidebar').classList.toggle('open');

    document.getElementById('sidebarBackdrop')
      .classList.toggle('visible');

  }


  // SCROLL TOP
  function scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }
  // SHOW BUTTON
  window.addEventListener('scroll', () => {

    document.getElementById('scrollTopBtn')
      .classList.toggle('visible', window.scrollY > 400);

    document.getElementById('navbar')
      .classList.toggle('scrolled', window.scrollY > 40);

  });

  // TOGGLE CODE
  function toggleCode(id, btn) {

    const block = document.getElementById(id);

    const isOpen = block.classList.toggle('open');

    btn.innerHTML = isOpen
      ? '<i class="fa-solid fa-eye-slash"></i> Hide Code'
      : '<i class="fa-solid fa-code"></i> View Code';

  }

  // COPY CODE
  function copyCode(id, btn) {

    navigator.clipboard.writeText(
      document.getElementById(id).innerText
    ).then(() => {

      btn.innerHTML =
        '<i class="fa-solid fa-check"></i> Copied!';

      btn.classList.add('copied');

      setTimeout(() => {

        btn.innerHTML =
          '<i class="fa-solid fa-copy"></i> Copy';

        btn.classList.remove('copied');

      }, 2000);

    });

  }

  // SCROLL ANIMATION
  const observer = new IntersectionObserver(entries => {

    entries.forEach(e => {

      if (e.isIntersecting) {
        e.target.classList.add('in-view');
      }

    });

  }, { threshold: 0.08 });

  document.querySelectorAll('.form-component-card')
    .forEach(el => observer.observe(el));
