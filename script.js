/* =================================================================
   script.js  –  UI-Verse
   Refactored: deduped utilities, ARIA accessibility, perf hardening.
   ================================================================= */

"use strict";

/* ─────────────────────────────────────────────
   §1  CONSTANTS & SHARED STATE
───────────────────────────────────────────── */

/** Single source of truth for the dark-mode class name. */
const DARK_CLASS = "dark-mode";

/** LocalStorage key for the persisted theme preference. */
const THEME_KEY = "theme";

/** SessionStorage key for sidebar collapsed state (desktop). */
const SIDEBAR_HIDDEN_KEY = "sidebarHidden";

/** LocalStorage key for saved favourites. */
const FAVOURITES_KEY = "uiVerseFavorites";


/* ─────────────────────────────────────────────
   §2  DOM HELPERS
───────────────────────────────────────────── */

/**
 * QuerySelector with an optional root element.
 * @param {string} selector
 * @param {ParentNode} [root=document]
 * @returns {Element|null}
 */
const qs = (selector, root = document) => root.querySelector(selector);

/**
 * querySelectorAll as an Array.
 * @param {string} selector
 * @param {ParentNode} [root=document]
 * @returns {Element[]}
 */
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));


/* ─────────────────────────────────────────────
   §3  TOAST NOTIFICATION  (single implementation)
   – Replaces two near-identical versions from the
     original file.
───────────────────────────────────────────── */

/**
 * Display a transient toast message.
 * Uses role="status" so screen readers announce it
 * without interrupting the user's current task.
 *
 * @param {string} message
 * @param {number} [duration=2000] - ms before auto-dismiss
 */
let lastToastShownAt = 0;

function showToast(message, duration = 2000) {
  lastToastShownAt = Date.now();
  const TOAST_ID = "toast-notification";

  // Remove any existing toast immediately
  document.getElementById(TOAST_ID)?.remove();

  const toast = Object.assign(document.createElement("div"), {
    id: TOAST_ID,
    className: "toast",
    textContent: message,
  });

  // Accessibility: polite live region so AT announces without intrusion
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.setAttribute("aria-atomic", "true");

  document.body.appendChild(toast);

  // Double-rAF ensures layout/paint before the transition class lands
  requestAnimationFrame(() =>
    requestAnimationFrame(() => toast.classList.add("toast-visible"))
  );

  setTimeout(() => {
    toast.classList.replace("toast-visible", "toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, duration);
}


/* ─────────────────────────────────────────────
   §4  CLIPBOARD UTILITIES
   – Consolidates copyCode / copyHTML / copyCSS
     and the colour helpers.
───────────────────────────────────────────── */

// Show feedback for copy actions that call the Clipboard API directly.
try {
  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    const originalWriteText = navigator.clipboard.writeText;
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: function (text) {
        return originalWriteText.call(navigator.clipboard, text)
          .then((value) => {
            const copiedAt = Date.now();
            setTimeout(() => {
              if (lastToastShownAt < copiedAt) {
                showToast("Code copied to clipboard!");
              }
            }, 0);
            return value;
          });
      },
      configurable: true,
      writable: true
    });
  }
} catch (e) {
  console.warn("Could not intercept clipboard writer:", e);
}

/**
 * Decode HTML entities (e.g. &lt; → <) from a code block's innerHTML.
 * @param {string} raw
 * @returns {string}
 */
function decodeEntities(raw) {
  const scratch = document.createElement("textarea");
  scratch.innerHTML = raw;
  return scratch.value;
}

/**
 * Split the text content of a code block into its HTML and CSS parts.
 * HTML always comes first; CSS begins at the first line that looks like
 * a CSS rule (has a selector-like prefix AND contains a `{`).
 *
 * @param {string} rawInnerText
 * @returns {{ html: string, css: string }}
 */
function splitHTMLandCSS(rawInnerText) {
  const decoded = decodeEntities(rawInnerText);
  const lines = decoded.split("\n");

  // Regex: line starts with a CSS selector token AND contains a brace
  const CSS_START = /^\s*[.#*@a-zA-Z[: ]/;
  const HAS_BRACE = /\{/;

  let splitIndex = -1;
  let seenHTML = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!seenHTML && line.trim().length > 0) seenHTML = true;
    if (seenHTML && CSS_START.test(line) && HAS_BRACE.test(line)) {
      splitIndex = i;
      break;
    }
  }

  if (splitIndex === -1) return { html: decoded.trim(), css: "" };

  return {
    html: lines.slice(0, splitIndex).join("\n").trim(),
    css: lines.slice(splitIndex).join("\n").trim(),
  };
}

/**
 * Core clipboard writer used by all copy actions.
 * Handles user feedback on the triggering button.
 *
 * @param {string}      text        - Content to copy
 * @param {string}      toastMsg    - Toast shown on success
 * @param {HTMLElement} [btn]       - Button that triggered the copy
 * @param {string}      [doneHTML]  - Button innerHTML shown after success
 * @param {string}      [origHTML]  - Button innerHTML to restore after reset
 * @param {number}      [resetMs=1500]
 */
function writeToClipboard(text, toastMsg, btn, doneHTML, origHTML, resetMs = 1500) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showToast(toastMsg);
      if (btn && doneHTML) {
        const restore = origHTML ?? btn.innerHTML;
        btn.innerHTML = doneHTML;
        btn.classList.add("copied");
        setTimeout(() => {
          btn.innerHTML = restore;
          btn.classList.remove("copied");
        }, resetMs);
      }
    })
    .catch(() => showToast("Failed to copy ❌"));
}
// Clipboard utilities extracted successfully.

/**
 * Copy the full content of a code element (textarea, input, or any element).
 *
 * @param {string}      id  - Element id
 * @param {HTMLElement} [btn]
 */
function copyCode(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const text = ["TEXTAREA", "INPUT"].includes(el.tagName) ? el.value : el.innerText;
  const orig = btn?.innerHTML ?? "Copy";
  writeToClipboard(
    text,
    "Code copied!",
    btn,
    '<i class="fa-solid fa-check"></i> Copied!',
    orig,
    1500
  );
}

/**
 * Copy only the HTML portion of a mixed code block.
 *
 * @param {string}      id
 * @param {HTMLElement} [btn]
 */
function copyHTML(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const { html } = splitHTMLandCSS(el.innerText);
  if (!html) { showToast("No HTML found in this component."); return; }

  const orig = btn?.innerHTML;
  writeToClipboard(
    html,
    "HTML copied!",
    btn,
    '<i class="fa-solid fa-check"></i> HTML Copied!',
    orig,
    2000
  );
}

/**
 * Copy only the CSS portion of a mixed code block.
 *
 * @param {string}      id
 * @param {HTMLElement} [btn]
 */
function copyCSS(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const { css } = splitHTMLandCSS(el.innerText);
  if (!css) { showToast("No CSS found for this component."); return; }

  const orig = btn?.innerHTML;
  writeToClipboard(
    css,
    "CSS copied!",
    btn,
    '<i class="fa-solid fa-check"></i> CSS Copied!',
    orig,
    2000
  );
}

/**
 * Copy a hex colour string to the clipboard.
 * @param {string} color - e.g. "#ff5733"
 */
function copyColor(color) {
  writeToClipboard(color, `${color} copied!`);
}

/**
 * Copy an RGB colour to the clipboard.
 * @param {string} value - e.g. "255, 87, 51"
 */
function copyRGB(value) {
  writeToClipboard(`rgb(${value})`, `rgb(${value}) copied!`);
}


/* ─────────────────────────────────────────────
   §5  TOGGLE CODE BLOCK  (single implementation)
   – Merges the two conflicting toggleCode()
     functions from the original file.
───────────────────────────────────────────── */

/**
 * Show / hide a code block and update the triggering button label.
 * The `btn` parameter is optional for backwards-compatibility with
 * callers that only passed an id.
 *
 * @param {string}      id
 * @param {HTMLElement} [btn]
 */
function toggleCode(id, btn) {
  const block = document.getElementById(id);
  if (!block) return;

  const isOpen = block.classList.toggle("open");

  // Visibility: use the CSS class rather than inline display so
  // stylesheet rules remain in control of the transition.
  block.hidden = !isOpen;

  // Update aria-expanded on the button (accessibility)
  if (btn) {
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.innerHTML = isOpen
      ? '<i class="fa-solid fa-eye-slash"></i> Hide Code'
      : '<i class="fa-solid fa-code"></i> View Code';
  }
}


/* ─────────────────────────────────────────────
   §6  DARK MODE  (single implementation)
   – Merges the two conflicting dark-mode blocks.
───────────────────────────────────────────── */

function initDarkMode() {
  const saved = localStorage.getItem(THEME_KEY);

  // Apply system preference on first visit only
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark = saved === "dark" || (!saved && prefersDark);

  document.documentElement.classList.toggle(DARK_CLASS, shouldBeDark);

  /** Sync all toggle button variants to the current theme state. */
  const syncButtons = (isDark) => {
    // Pattern 1: text button
    const textBtn = document.getElementById("theme-toggle");
    if (textBtn) textBtn.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Pattern 2: icon button
    const iconBtn = document.getElementById("darkModeToggle");
    if (iconBtn) {
      const icon = iconBtn.querySelector("i");
      if (icon) icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  };

  syncButtons(shouldBeDark);

  /** Shared click handler for both button patterns. */
  const handleToggle = () => {
    const isDark = document.documentElement.classList.toggle(DARK_CLASS);
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    syncButtons(isDark);
  };

  document.getElementById("theme-toggle")?.addEventListener("click", handleToggle);
  document.getElementById("darkModeToggle")?.addEventListener("click", handleToggle);
}


/* ─────────────────────────────────────────────
   §7  SCROLL UTILITIES  (single implementation)
   – Merges the two conflicting scroll-top /
     progress-bar / navbar-scroll blocks.
───────────────────────────────────────────── */

/**
 * Wire up the scroll-to-top button and the reading-progress bar.
 * Uses a single passive scroll listener with requestAnimationFrame
 * throttling for both concerns.
 */
function initScrollFeatures() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  const progressBar = document.getElementById("progressBar");
  const navbar = document.getElementById("navbar");

  if (!scrollBtn && !progressBar && !navbar) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;
    const docEl = document.documentElement;
    const maxScroll = docEl.scrollHeight - docEl.clientHeight;

    // Scroll-to-top button
    if (scrollBtn) {
      const visible = scrollY > 300;
      scrollBtn.classList.toggle("visible", visible);
      // Keep in sync with any legacy inline-style callers
      scrollBtn.style.display = visible ? "block" : "none";
      scrollBtn.style.opacity = visible ? "1" : "0";
    }

    // Progress bar
    if (progressBar && maxScroll > 0) {
      progressBar.style.width = `${(scrollY / maxScroll) * 100}%`;
    }

    // Navbar shadow-on-scroll
    if (navbar) {
      navbar.classList.toggle("scrolled", scrollY > 40);
    }

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Scroll-to-top click handler
  scrollBtn?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/**
 * Imperative scroll-to-top for inline onclick callers (legacy support).
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ─────────────────────────────────────────────
   §8  SIDEBAR  (single implementation)
   – Merges the two conflicting toggleSidebar()
     functions and their helpers.
───────────────────────────────────────────── */

/**
 * Normalise a URL href to a lowercase pathname for comparison.
 * @param {string} [href=window.location.href]
 * @returns {string}
 */
function getNormalizedRoutePath(href = window.location.href) {
  return new URL(href, window.location.href).pathname.toLowerCase();
}

function getComponentsIndexSidebarHref() {
  const homeHref = qs('.sidebar a[href$="index.html"]')?.getAttribute("href") || "index.html";
  return /index\.html$/i.test(homeHref)
    ? homeHref.replace(/index\.html$/i, "components/index.html")
    : "components/index.html";
}

function getFavoritesSidebarHref() {
  const homeHref = qs('.sidebar a[href$="index.html"]')?.getAttribute("href") || "index.html";
  return /index\.html$/i.test(homeHref)
    ? homeHref.replace(/index\.html$/i, "favorites.html")
    : "favorites.html";
}

function getLegacyFavoritesCount() {
  try {
    const parsed = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

function syncLegacyFavoritesCountBadge() {
  const badge = qs(".favorites-count-badge");
  if (badge) badge.textContent = String(getLegacyFavoritesCount());
}

function ensureSidebarComponentsIndexLink() {
  const list = qs(".sidebar ul");
  if (!list) return;

  const exists = qsa("a", list).some((a) =>
    (a.getAttribute("href") || "").toLowerCase().includes("components/index.html")
  );
  if (exists) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <a href="${getComponentsIndexSidebarHref()}">
      <i class="fa-solid fa-table-cells-large" aria-hidden="true"></i>
      <span>Components Index</span>
    </a>`;
  list.appendChild(li);
}

function ensureSidebarFavoritesLink() {
  const list = qs(".sidebar ul");
  if (!list) return;

  const exists = qsa("a", list).some((a) =>
    (a.getAttribute("href") || "").toLowerCase().includes("favorites.html")
  );

  if (exists) {
    syncLegacyFavoritesCountBadge();
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <a href="${getFavoritesSidebarHref()}">
      <i class="fa-solid fa-star" aria-hidden="true"></i>
      <span>Favorites</span>
      <span class="favorites-count-badge" aria-label="favourites count" style="margin-left:auto;font-size:11px;opacity:0.9;">0</span>
    </a>`;
  list.appendChild(li);
  syncLegacyFavoritesCountBadge();
}

function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem(SIDEBAR_HIDDEN_KEY) === "1") {
    document.body.classList.add("sidebar-hidden");
  }
}

function updateSidebarActiveLink() {
  const current = getNormalizedRoutePath();
  qsa(".sidebar ul li").forEach((li) => {
    const anchor = li.querySelector("a");
    if (!anchor) return;
    const match = getNormalizedRoutePath(anchor.getAttribute("href") || "index.html") === current;
    li.classList.toggle("active", match);
    // Accessibility: aria-current on the active link
    anchor.setAttribute("aria-current", match ? "page" : "false");
  });
}

function initSidebarLinkClose() {
  qsa(".sidebar ul li a").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        document.body.classList.remove("sidebar-open");
        qs(".sidebar-backdrop")?.classList.remove("active");
      }
    });
  });
}

/**
 * Toggle the sidebar open/closed.
 * On narrow viewports uses the "sidebar-open" + backdrop pattern.
 * On wide viewports collapses with "sidebar-hidden" and persists the state.
 */
function toggleSidebar() {

    // Keyboard navigation focus loop inside sidebar drawer
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggleSidebar();
            }
        });
    }
    
  // Support the id-based sidebar pattern used in newer markup
  const sidebarById = document.getElementById("sidebar");
  if (sidebarById) {
    sidebarById.classList.toggle("open");
    document.getElementById("sidebarBackdrop")?.classList.toggle("visible");
    return;
  }

  const backdrop = qs(".sidebar-backdrop");
  if (window.innerWidth <= 900) {
    document.body.classList.toggle("sidebar-open");
    backdrop?.classList.toggle("active");
  } else {
    const isHidden = document.body.classList.toggle("sidebar-hidden");
    sessionStorage.setItem(SIDEBAR_HIDDEN_KEY, isHidden ? "1" : "0");
  }
}

/** Legacy alias used by some markup. */
function toggleMenu() {
  qs(".sidebar")?.classList.toggle("active");
}

function initSidebar() {
  restoreSidebarState();
  ensureSidebarComponentsIndexLink();
  ensureSidebarFavoritesLink();
  // React to favourites changes from any tab
  document.addEventListener("uiverse:favorites:changed", syncLegacyFavoritesCountBadge);
  window.addEventListener("storage", syncLegacyFavoritesCountBadge);
  updateSidebarActiveLink();
  initSidebarLinkClose();
}


/* ─────────────────────────────────────────────
   §9  POPUP
───────────────────────────────────────────── */

/** Cached reference set after DOM ready. */
let _popup = null;

function openPopup() {
  _popup?.classList.add("open-popup");
}

function closePopup() {
  _popup?.classList.remove("open-popup");
}


/* ─────────────────────────────────────────────
   §10  ALERT
───────────────────────────────────────────── */

function closeAlert(alertId) {
  document.getElementById(alertId)?.remove();
}


/* ─────────────────────────────────────────────
   §11  SUBSCRIBE
───────────────────────────────────────────── */

function subscribe(e) {
  e.preventDefault();
  showToast("Subscribed successfully! 🎉");
}


/* ─────────────────────────────────────────────
   §12  SEARCH
───────────────────────────────────────────── */

/** Map of query keywords → page filenames. */
const SEARCH_ROUTES = {
  button:        "button.html",
  buttons:       "button.html",
  navbar:        "Navbar.html",
  navbars:       "Navbar.html",
  card:          "cards.html",
  cards:         "cards.html",
  form:          "form.html",
  forms:         "form.html",
  footer:        "footer.html",
  color:         "color.html",
  colors:        "color.html",
  pricing:       "pricing.html",
  subscription:  "subscription.html",
  subscriptions: "subscription.html",
  billing:       "subscription.html",
  auth:          "auth.html",
  login:         "auth.html",
  signup:        "auth.html",
  authentication:"auth.html",
};

/**
 * Inline search: hides cards whose text doesn't match the input value.
 */
function initSearchFilter() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.addEventListener("input", function () {
    const needle = this.value.toLowerCase().trim();
    qsa(".component-card").forEach((card) => {
      const haystack = (card.dataset.name || card.innerText).toLowerCase();
      card.hidden = needle.length > 0 && !haystack.includes(needle);
    });
  });
}

/**
 * Route the user to the correct page when they press Enter in a search field.
 * @param {KeyboardEvent} event
 */
function handleSearch(event) {
  if (event.key !== "Enter") return;
  const query = event.target.value.toLowerCase().trim();

  for (const [key, route] of Object.entries(SEARCH_ROUTES)) {
    if (query.includes(key)) {
      window.location.href = route;
      return;
    }
  }

  showToast("No component found 😢");
}


/* ─────────────────────────────────────────────
   §13  FAVOURITES
───────────────────────────────────────────── */

function initLegacyCardFavorites() {
  // Bail if the new Favorites module is already loaded
  if (typeof window.Favorites?.init === "function") return;

  const cards = qsa(".component-card");
  if (cards.length === 0) return;

  const normalize = (v) =>
    String(v || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const readFavs = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const writeFavs = (items) => {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("uiverse:favorites:changed", { detail: { count: items.length } }));
  };

  const isFav = (id) => readFavs().some((f) => normalize(f.id) === normalize(id));

  const updateBtn = (btn, active) => {
    btn.classList.toggle("is-favorited", active);
    btn.setAttribute("aria-pressed", String(active));
    btn.setAttribute("aria-label", active ? "Remove from favourites" : "Add to favourites");
    btn.innerHTML = active
      ? '<i class="fa-solid fa-star" aria-hidden="true"></i>'
      : '<i class="fa-regular fa-star" aria-hidden="true"></i>';
  };

  const page = (new URL(window.location.href).pathname || "").replace(/^\/+/, "").toLowerCase() || "index.html";

  cards.forEach((card, i) => {
    const title =
      card.querySelector(".card-label, h3, h2, h4")?.textContent?.trim() ||
      card.dataset.name ||
      `Component ${i + 1}`;

    const id = normalize(card.dataset.componentId || `${page} ${title}`);
    card.dataset.componentId = id;

    // Ensure an .actions container exists
    const actions = card.querySelector(".actions") ?? (() => {
      const div = document.createElement("div");
      div.className = "actions";
      card.appendChild(div);
      return div;
    })();

    let btn = card.querySelector(".favorite-btn");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "action-btn favorite-btn icon-only";
      actions.insertBefore(btn, actions.firstChild);
    }

    updateBtn(btn, isFav(id));

    btn.addEventListener("click", () => {
      const favs = readFavs();
      const exists = favs.some((f) => normalize(f.id) === id);
      const next = exists
        ? favs.filter((f) => normalize(f.id) !== id)
        : [{ id, title, page, category: card.dataset.cat || "component", tags: [], savedAt: new Date().toISOString() }, ...favs];
      writeFavs(next);
      updateBtn(btn, !exists);
      syncLegacyFavoritesCountBadge();
    });
  });
}


/* ─────────────────────────────────────────────
   §14  LAZY FEATURE LOADERS
   – Shared pattern: check for the module object,
     fall back to injecting a <script> tag.
───────────────────────────────────────────── */

/* ================= COLLABORATE BUTTONS ================= */
function splitCodeBlock(text) {
  const decoded = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
  const cssStart = decoded.search(/(?:^|\n)\s*([.#@][^{]+\{|[a-z]+[\s,]*\{)/i);
  if (cssStart > 0) {
    return {
      html: decoded.slice(0, cssStart).trim(),
      css: decoded.slice(cssStart).trim(),
      js: ''
    };
  }
  return { html: decoded.trim(), css: '', js: '' };
}

function initCollaborateButtons() {
  const cards = document.querySelectorAll('.component-card');
  if (cards.length === 0) return;

  if (!document.getElementById('collab-btn-styles')) {
    const style = document.createElement('style');
    style.id = 'collab-btn-styles';
    style.textContent = '.action-btn.collab-btn{background:#6c5ce7;color:#fff;border-color:#6c5ce7}.action-btn.collab-btn:hover{background:#5b4cc4}';
    document.head.appendChild(style);
  }

  cards.forEach((card) => {
    const actions = card.querySelector('.actions');
    const codeBlock = card.querySelector('.code-block');
    const preview = card.querySelector('.card-preview');
    if (!actions || !codeBlock || !preview) return;

    const btn = document.createElement('button');
    btn.className = 'action-btn collab-btn';
    btn.innerHTML = '<i class="fa-solid fa-users"></i> Collaborate';
    btn.title = 'Open in collaborative workspace';

    btn.addEventListener('click', () => {
      const raw = codeBlock.innerText;
      const split = splitCodeBlock(raw);
      const title = card.querySelector('.card-label')?.textContent?.trim() || 'component';
      const roomId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.random().toString(36).slice(2, 8);

      const seed = {
        html: split.html || preview.innerHTML,
        css: split.css,
        js: split.js,
        title: title
      };

      sessionStorage.setItem('workspace-seed', JSON.stringify(seed));
      window.location.href = 'workspace.html#room=' + roomId;
    });

    actions.appendChild(btn);
  });
}

/* ================= INIT (DOMContentLoaded) ================= */
window.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initLegacyCardFavorites();
  initRecentComponentsTracker();
  initLiveSandboxes();
  initCollaborateButtons();
  initDevicePreviewFeature();
  initKeyboardShortcutsFeature();
  initDownloadFeature();
  initDarkMode();
  initScrollTop();
  initProgressBar();
  initSearchFilter();
});

/* eof */
/**
 * Generic feature bootstrapper.
 * Skips loading if the guard condition is falsy.
 *
 * @param {string}  scriptPath   - src path relative to document root
 * @param {string}  windowKey    - window property name (e.g. "DevicePreview")
 * @param {string}  [method="init"]
 * @param {boolean} [guard=true] - set to false to skip entirely
 */
function loadFeature(scriptPath, windowKey, method = "init", guard = true) {
  if (!guard) return;

  const start = () => window[windowKey]?.[method]?.();

  if (typeof window[windowKey]?.[method] === "function") {
    start();
    return;
  }

  const existing = document.querySelector(`script[src$="${scriptPath}"]`);
  if (existing) {
    existing.addEventListener("load", start, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src = scriptPath;
  script.onload = start;
  document.body.appendChild(script);
}

const initDevicePreviewFeature = () =>
  loadFeature(
    "js/features/device-preview.js",
    "DevicePreview",
    "init",
    Boolean(qs(".component-card"))
  );

const initKeyboardShortcutsFeature = () =>
  loadFeature("js/features/keyboard-shortcuts.js", "KeyboardShortcuts");

const initDownloadFeature = () =>
  loadFeature(
    "js/features/download.js",
    "Download",
    "init",
    Boolean(qs(".component-card") || qs(".actions"))
  );

const initRecentComponentsTracker = () =>
  loadFeature(
    "js/features/recent.js",
    "Recent",
    "init",
    Boolean(qs(".component-card"))
  );


/* ─────────────────────────────────────────────
   §15  LIVE IFRAME SANDBOX
───────────────────────────────────────────── */

function initLiveSandboxes() {
  qsa(".component-card:not(.no-sandbox)").forEach((card, index) => {
    const h3 = card.querySelector("h3");
    const actions = card.querySelector(".actions");
    const existingCodeBlock = card.querySelector(".code-block");

    const previewNodes = Array.from(card.childNodes).filter(
      (node) =>
        (node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "")) &&
        node !== h3 &&
        node !== actions &&
        node !== existingCodeBlock &&
        node.nodeName !== "SCRIPT"
    );

    if (previewNodes.length === 0 && !existingCodeBlock) return;

    const initialHTML = existingCodeBlock
      ? existingCodeBlock.textContent.trim()
      : previewNodes.map((n) => n.outerHTML ?? n.textContent).join("\n").trim();

    previewNodes.forEach((n) => n.remove());

    // ── iframe ──────────────────────────────
    const iframe = document.createElement("iframe");
    iframe.title = `Live preview for component ${index + 1}`;
    Object.assign(iframe.style, {
      width: "100%",
      minHeight: "160px",
      border: "1px solid #e8ebf2",
      borderRadius: "8px",
      background: "transparent",
    });

    // ── editable textarea ───────────────────
    const textarea = document.createElement("textarea");
    if (existingCodeBlock) {
      textarea.id = existingCodeBlock.id;
      textarea.className = existingCodeBlock.className;
      textarea.style.display = existingCodeBlock.style.display || "none";
    } else {
      textarea.id = `live-code-${index}`;
      textarea.className = "code-block";
      textarea.style.display = "none";

      // Repoint any existing action buttons to the new textarea id
      actions?.querySelector('[onclick^="toggleCode"]')
        ?.setAttribute("onclick", `toggleCode("${textarea.id}", this)`);
      actions?.querySelector('[onclick^="copyCode"]')
        ?.setAttribute("onclick", `copyCode("${textarea.id}", this)`);
    }

    textarea.value = initialHTML;
    Object.assign(textarea.style, {
      width: "100%",
      minHeight: "120px",
      boxSizing: "border-box",
      resize: "vertical",
    });
    textarea.setAttribute("aria-label", `Editable source code for component ${index + 1}`);
    textarea.setAttribute("spellcheck", "false");

    // ── render helper ───────────────────────
    const render = (html) => {
      iframe.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
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
<body>${html}</body>
</html>`;
    };

    render(initialHTML);

    // Debounced live update (300 ms)
    let debounceTimer;
    textarea.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => render(e.target.value), 300);
    });

    // Insert into DOM
    (h3 ? h3.after(iframe) : card.insertBefore(iframe, card.firstChild));

    if (existingCodeBlock) {
      existingCodeBlock.replaceWith(textarea);
    } else {
      actions?.after(textarea);
    }
  });
}


/* ─────────────────────────────────────────────
   §16  SCROLL ANIMATION (Intersection Observer)
───────────────────────────────────────────── */

function initScrollAnimation() {
  const targets = qsa(".form-component-card");
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
    { threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
}


/* ─────────────────────────────────────────────
   §17  BOOTSTRAP
───────────────────────────────────────────── */

window.addEventListener("DOMContentLoaded", () => {
  // Cache popup reference
  _popup = document.getElementById("popup");

  initSidebar();
  initLegacyCardFavorites();
  initRecentComponentsTracker();
  initLiveSandboxes();
  initDevicePreviewFeature();
  initKeyboardShortcutsFeature();
  initDownloadFeature();
  initDarkMode();
  initScrollFeatures();
  initSearchFilter();
  initScrollAnimation();
});
