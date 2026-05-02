/* ================= POPUP ================= */
const popup = document.getElementById("popup");

function openPopup() {
  popup?.classList.add("open-popup");
}

function closePopup() {
  popup?.classList.remove("open-popup");
}

/* ================= DEBUG ================= */
function vall() {
  console.log("happy");
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

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-visible");
    });
  });

  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2000);
}

/* ================= TOGGLE CODE BLOCK ================= */
function toggleCode(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.toggle("show");
}

/* ================= COPY CODE ================= */
function copyCode(id, btn) {
  const codeEl = document.getElementById(id);
  if (!codeEl) return;

  const code = codeEl.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      showToast("Code copied!");

      if (btn) {
        btn.innerText = "Copied!";
        btn.style.background = "#00b894";

        setTimeout(() => {
          btn.innerText = "Copy";
          btn.style.background = "#111";
        }, 1500);
      }
    })
    .catch(() => {
      if (btn) btn.innerText = "Error";
    });
}

/* ================= COPY COLOR ================= */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}

/* ================= SIDEBAR ================= */
function toggleSidebar() {
  if (window.innerWidth <= 900) {
    document.body.classList.toggle("sidebar-open");
  } else {
    const isHidden = document.body.classList.toggle("sidebar-hidden");
    sessionStorage.setItem("sidebarHidden", isHidden ? "1" : "0");
  }
}

function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem("sidebarHidden") === "1") {
    document.body.classList.add("sidebar-hidden");
  }
}

function updateSidebarActiveLink() {
  const currentPage =
    (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".sidebar ul li").forEach((li) => {
    const anchor = li.querySelector("a");
    if (!anchor) return;

    if (anchor.getAttribute("href").toLowerCase() === currentPage) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
}

function initSidebarLinkClose() {
  document.querySelectorAll(".sidebar ul li a").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        document.body.classList.remove("sidebar-open");
      }
    });
  });
}

/* ================= SEARCH (FILTER) ================= */
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    components.forEach((item) => {
      const text = item.dataset.name.toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

/* ================= SEARCH (ROUTING) ================= */
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();

    const routes = {
      button: "button.html",
      buttons: "button.html",
      navbar: "navbar.html",
      navbars: "navbar.html",
      card: "cards.html",
      cards: "cards.html",
      form: "form.html",
      forms: "form.html",
      footer: "footer.html",
      color: "color.html",
      colors: "color.html",
    };

    for (let key in routes) {
      if (query.includes(key)) {
        window.location.href = routes[key];
        return;
      }
    }

    showToast("No component found 😢");
  }
}

/* ================= DARK MODE ================= */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (!toggleBtn) return;

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️ Light Mode";
  }

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
}

/* ================= INIT ================= */
window.addEventListener("DOMContentLoaded", () => {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
  initTheme();
});
/* ================= ACCORDION ================= */


=======
/* Toggle Sidebar on mobile and desktop */
// popup

let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}





/* Toggle Code Block */
function toggleCode(id) {
  const el = document.getElementById(id);
/* TOAST NOTIFICATION */
}
function showToast(message) {

  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();
 
  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;
 
  document.body.appendChild(toast);
 
  // Trigger slide-in
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
 

/* TOGGLE CODE BLOCK */
function toggleCode(id) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  if (codeBlock.style.display === "block" || codeBlock.classList.contains("show")) {
    codeBlock.style.display = "none";
    codeBlock.classList.remove("show");
  } else {
    codeBlock.style.display = "block";
    codeBlock.classList.add("show");
  }
}
 
/* COPY CODE */
function copyCode(id, btn) {
  const element = document.getElementById(id);
  if (!element) return;
  
  const code = (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') ? element.value : element.innerText;
 
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
      if (btn) btn.innerText = "Error";
    });
}
 
/* COPY COLOR */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}
 
/* SIDEBAR TOGGLE */
function toggleSidebar() {
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
    if (backdrop) {
      backdrop.classList.toggle('active');
    }
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}
 
function updateSidebarActiveLink() {
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

/* Restore sidebar hidden state on desktop */
 
function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}
 
function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
        const backdrop = document.querySelector('.sidebar-backdrop');
        if (backdrop) {
          backdrop.classList.remove('active');
        }
      }
    });
  });
}

/* Initialize sidebar on every page load */
function initSidebar() {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
}

/* Run on page load */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebar);
} else {
  initSidebar(); // Already loaded
}

// Other functionality
function toggleCode(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === "block" ? "none" : "block";
  }
}

function copyCode(id, btn) {
  const code = document.getElementById(id);
  if (!code) return;
  
  navigator.clipboard.writeText(code.innerText)
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

// Search functionality
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");
 
window.addEventListener('DOMContentLoaded', function () {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
  initLiveSandboxes();
});

/* LIVE IFRAME SANDBOX INITIALIZATION */
function initLiveSandboxes() {
  const componentCards = document.querySelectorAll('.component-card');

  componentCards.forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const actions = card.querySelector('.actions');
    const existingCodeBlock = card.querySelector('.code-block');
    
    // Find static preview elements (exclude h3, actions, code-block, script)
    const previewNodes = Array.from(card.childNodes).filter(node => {
      return (node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')) && 
             node !== h3 && 
             node !== actions && 
             node !== existingCodeBlock && 
             node.nodeName !== 'SCRIPT';
    });
    
    if (previewNodes.length === 0 && !existingCodeBlock) return;
    
    // Extract HTML code
    let initialHTML = '';
    if (existingCodeBlock) {
      initialHTML = existingCodeBlock.textContent.trim();
    } else {
      initialHTML = previewNodes.map(n => n.outerHTML || n.textContent).join('\\n').trim();
    }
    
    // Replace old preview elements
    previewNodes.forEach(node => node.remove());

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.minHeight = '160px';
    iframe.style.border = '1px solid #e8ebf2';
    iframe.style.borderRadius = '8px';
    iframe.style.background = 'transparent';
    
    // Create textarea
    const textarea = document.createElement('textarea');
    if (existingCodeBlock) {
      textarea.id = existingCodeBlock.id;
      textarea.className = existingCodeBlock.className;
      textarea.style.display = existingCodeBlock.style.display || 'none';
    } else {
      textarea.id = 'live-code-' + index;
      textarea.className = 'code-block';
      textarea.style.display = 'none';
      if (actions) {
        const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]');
        const copyBtn = actions.querySelector('button[onclick^="copyCode"]');
        if (toggleBtn) toggleBtn.setAttribute('onclick', 'toggleCode(\"' + textarea.id + '\")');
        if (copyBtn) copyBtn.setAttribute('onclick', 'copyCode(\"' + textarea.id + '\", this)');
      }
    }
    
    textarea.value = initialHTML;
    textarea.style.width = '100%';
    textarea.style.minHeight = '120px';
    textarea.style.boxSizing = 'border-box';
    textarea.style.resize = 'vertical';
    
    // Function to render iframe content
    const renderIframe = (htmlContent) => {
      const srcDocContent = `
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
        <body>
          ${htmlContent}
        </body>
        </html>
      `;
      iframe.srcdoc = srcDocContent;
    };
    
    renderIframe(initialHTML);
    
    // Debounced input
    let timeout;
    textarea.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        renderIframe(e.target.value);
      }, 300);
    });
    
    // Insert iframe and textarea
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
 
/* SEARCH (INLINE FILTER) */
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");
 
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    components.forEach((item) => {
      const text = item.dataset.name?.toLowerCase() || '';
      item.style.display = text.includes(value) ? "block" : "none";
    });
      const text = item.dataset.name.toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    });

    const toggleBtn = document.getElementById("themeToggle");

// ✅ Apply saved theme on load
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }
}

// ✅ Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// ✅ Auto detect system theme (first time only)
if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

// Run on load
loadTheme();
 
/* SEARCH (PAGE ROUTING) */
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();
 
    const routes = {
      "button":  "button.html",
      "buttons": "button.html",
      "navbar":  "navbar.html",
      "navbars": "navbar.html",
      "card":    "cards.html",
      "cards":   "cards.html",
      "form":    "form.html",
      "forms":   "form.html",
      "footer":  "footer.html",
      "color":   "color.html",
      "colors":  "color.html"
    };
 
    for (let key in routes) {
      if (query.includes(key)) {
        window.location.href = routes[key];
        return;
      }
    }
 
    showToast("No component found 😢");
  }
}
 
/* DARK MODE TOGGLE */
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.innerText = "☀️ Light Mode";
    }
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
}

const btn = document.getElementById("scrollTopBtn");

// show btn when scrolling down
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// scroll to top
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const toggleBtn = document.getElementById("darkModeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Toggle dark mode
toggleBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
};

/* CLOSE ALERT */
function closeAlert(alertId) {
  const alert = document.getElementById(alertId);
  if (alert) {
    alert.style.display = "none";
  }
}
  }
})
/* Toggle Sidebar on mobile and desktop */

/* ================= POPUP ================= */
let popup = document.getElementById("popup");

function openPopup(){
  popup?.classList.add("open-popup");
}

function closePopup(){
  popup?.classList.remove("open-popup");
}


/* ================= TOAST ================= */
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();
 
  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;
 
  document.body.appendChild(toast);
 
  requestAnimationFrame(() => {
    toast.classList.add("toast-visible");
  });
 
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2000);
}


/* ================= TOGGLE CODE ================= */
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
  
  const code = element.value || element.innerText;
 
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
      if (btn) btn.innerText = "Error";
    });
}


/* ================= COPY COLOR ================= */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}


/* ================= SIDEBAR ================= */
function toggleSidebar() {
  const backdrop = document.querySelector('.sidebar-backdrop');

  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
    backdrop?.classList.toggle('active');
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}


function updateSidebarActiveLink() {
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


function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}


function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
        document.querySelector('.sidebar-backdrop')?.classList.remove('active');
      }
    });
  });
}


/* ================= INIT SIDEBAR ================= */
function initSidebar() {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
}


/* ================= LIVE SANDBOX ================= */
function initLiveSandboxes() {
  const componentCards = document.querySelectorAll('.component-card');

  componentCards.forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const actions = card.querySelector('.actions');
    const existingCodeBlock = card.querySelector('.code-block');

    const previewNodes = Array.from(card.childNodes).filter(node => {
      return (node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')) &&
             node !== h3 &&
             node !== actions &&
             node !== existingCodeBlock &&
             node.nodeName !== 'SCRIPT';
    });

    if (previewNodes.length === 0 && !existingCodeBlock) return;

    let initialHTML = existingCodeBlock
      ? existingCodeBlock.textContent.trim()
      : previewNodes.map(n => n.outerHTML || n.textContent).join('\n').trim();

    previewNodes.forEach(node => node.remove());

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.minHeight = '160px';
    iframe.style.border = '1px solid #e8ebf2';
    iframe.style.borderRadius = '8px';

    const textarea = document.createElement('textarea');
    textarea.id = existingCodeBlock ? existingCodeBlock.id : 'live-code-' + index;
    textarea.className = 'code-block';
    textarea.value = initialHTML;
    textarea.style.display = 'none';

    const renderIframe = (html) => {
      iframe.srcdoc = `
        <html>
        <body style="display:flex;justify-content:center;align-items:center;min-height:100vh;">
          ${html}
        </body>
        </html>`;
    };

    renderIframe(initialHTML);

    textarea.addEventListener('input', (e) => renderIframe(e.target.value));

    h3?.after(iframe);
    actions?.after(textarea);
  });
}


/* ================= SEARCH FILTER ================= */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".component-card").forEach((item) => {
      const text = item.dataset.name?.toLowerCase() || '';
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
}


/* ================= SEARCH ROUTING ================= */
function handleSearch(event) {
  if (event.key !== "Enter") return;

  const query = event.target.value.toLowerCase();

  const routes = {
    button: "button.html",
    navbar: "navbar.html",
    card: "cards.html",
    form: "form.html",
    footer: "footer.html",
    color: "color.html"
  };

  for (let key in routes) {
    if (query.includes(key)) {
      window.location.href = routes[key];
      return;
    }
  }

  showToast("No component found 😢");
}


/* ================= DARK MODE (FINAL) ================= */
const themeToggle = document.getElementById("themeToggle");

function loadTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
    themeToggle && (themeToggle.textContent = "☀️");
  } else {
    document.body.classList.remove("dark");
    themeToggle && (themeToggle.textContent = "🌙");
  }
}

if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeToggle.textContent = isDark ? "☀️" : "🌙";
});


/* ================= SCROLL TOP ================= */
const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (!btn) return;
  btn.style.display = window.scrollY > 50 ? "block" : "none";
});

btn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ================= INIT ================= */
window.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initLiveSandboxes();
  loadTheme();
});


/* ================= ALERT ================= */
function closeAlert(alertId) {
  const alert = document.getElementById(alertId);
  if (alert) alert.style.display = "none";
}
/* Toggle Sidebar on mobile and desktop */
// popup

let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}





/* Toggle Code Block */
function toggleCode(id) {
  const el = document.getElementById(id);
/* TOAST NOTIFICATION */
}
function showToast(message) {

  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();
 
  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;
 
  document.body.appendChild(toast);
 
  // Trigger slide-in
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
 

/* TOGGLE CODE BLOCK */
function toggleCode(id) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  if (codeBlock.style.display === "block" || codeBlock.classList.contains("show")) {
    codeBlock.style.display = "none";
    codeBlock.classList.remove("show");
  } else {
    codeBlock.style.display = "block";
    codeBlock.classList.add("show");
  }
}
 
/* COPY CODE */
function copyCode(id, btn) {
  const element = document.getElementById(id);
  if (!element) return;
  
  const code = (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') ? element.value : element.innerText;
 
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
      if (btn) btn.innerText = "Error";
    });
}
 
/* COPY COLOR */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}
 
/* SIDEBAR TOGGLE */
function toggleSidebar() {
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
    if (backdrop) {
      backdrop.classList.toggle('active');
    }
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}
 
function updateSidebarActiveLink() {
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

/* Restore sidebar hidden state on desktop */
 
function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}
 
function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
        const backdrop = document.querySelector('.sidebar-backdrop');
        if (backdrop) {
          backdrop.classList.remove('active');
        }
      }
    });
  });
}

/* Initialize sidebar on every page load */
function initSidebar() {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
}

/* Run on page load */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebar);
} else {
  initSidebar(); // Already loaded
}

// Other functionality
function toggleCode(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === "block" ? "none" : "block";
  }
}

function copyCode(id, btn) {
  const code = document.getElementById(id);
  if (!code) return;
  
  navigator.clipboard.writeText(code.innerText)
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

// Search functionality
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");
 
window.addEventListener('DOMContentLoaded', function () {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
  initLiveSandboxes();
});

/* LIVE IFRAME SANDBOX INITIALIZATION */
function initLiveSandboxes() {
  const componentCards = document.querySelectorAll('.component-card');

  componentCards.forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const actions = card.querySelector('.actions');
    const existingCodeBlock = card.querySelector('.code-block');
    
    // Find static preview elements (exclude h3, actions, code-block, script)
    const previewNodes = Array.from(card.childNodes).filter(node => {
      return (node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')) && 
             node !== h3 && 
             node !== actions && 
             node !== existingCodeBlock && 
             node.nodeName !== 'SCRIPT';
    });
    
    if (previewNodes.length === 0 && !existingCodeBlock) return;
    
    // Extract HTML code
    let initialHTML = '';
    if (existingCodeBlock) {
      initialHTML = existingCodeBlock.textContent.trim();
    } else {
      initialHTML = previewNodes.map(n => n.outerHTML || n.textContent).join('\\n').trim();
    }
    
    // Replace old preview elements
    previewNodes.forEach(node => node.remove());

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.minHeight = '160px';
    iframe.style.border = '1px solid #e8ebf2';
    iframe.style.borderRadius = '8px';
    iframe.style.background = 'transparent';
    
    // Create textarea
    const textarea = document.createElement('textarea');
    if (existingCodeBlock) {
      textarea.id = existingCodeBlock.id;
      textarea.className = existingCodeBlock.className;
      textarea.style.display = existingCodeBlock.style.display || 'none';
    } else {
      textarea.id = 'live-code-' + index;
      textarea.className = 'code-block';
      textarea.style.display = 'none';
      if (actions) {
        const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]');
        const copyBtn = actions.querySelector('button[onclick^="copyCode"]');
        if (toggleBtn) toggleBtn.setAttribute('onclick', 'toggleCode(\"' + textarea.id + '\")');
        if (copyBtn) copyBtn.setAttribute('onclick', 'copyCode(\"' + textarea.id + '\", this)');
      }
    }
    
    textarea.value = initialHTML;
    textarea.style.width = '100%';
    textarea.style.minHeight = '120px';
    textarea.style.boxSizing = 'border-box';
    textarea.style.resize = 'vertical';
    
    // Function to render iframe content
    const renderIframe = (htmlContent) => {
      const srcDocContent = `
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
        <body>
          ${htmlContent}
        </body>
        </html>
      `;
      iframe.srcdoc = srcDocContent;
    };
    
    renderIframe(initialHTML);
    
    // Debounced input
    let timeout;
    textarea.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        renderIframe(e.target.value);
      }, 300);
    });
    
    // Insert iframe and textarea
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
 
/* SEARCH (INLINE FILTER) */
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");
 
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    components.forEach((item) => {
      const text = item.dataset.name?.toLowerCase() || '';
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
      const text = item.dataset.name.toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    };

    const toggleBtn = document.getElementById("themeToggle");

// ✅ Apply saved theme on load
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }
}

// ✅ Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// ✅ Auto detect system theme (first time only)
if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

// Run on load
loadTheme();
 
/* SEARCH (PAGE ROUTING) */
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();
 
    const routes = {
      "button":  "button.html",
      "buttons": "button.html",
      "navbar":  "navbar.html",
      "navbars": "navbar.html",
      "card":    "cards.html",
      "cards":   "cards.html",
      "form":    "form.html",
      "forms":   "form.html",
      "footer":  "footer.html",
      "color":   "color.html",
      "colors":  "color.html"
    };
 
    for (let key in routes) {
      if (query.includes(key)) {
        window.location.href = routes[key];
        return;
      }
    }
 
    showToast("No component found 😢");
  }
}
 

function copyColor(value) {
  navigator.clipboard.writeText(value);
  showToast(`${value} copied!`);
}

function copyRGB(value) {
  navigator.clipboard.writeText(`rgb(${value})`);
  showToast(`rgb(${value}) copied!`);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

/* DARK MODE TOGGLE */
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.innerText = "☀️ Light Mode";
    }
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
  }
});

const btn = document.getElementById("scrollTopBtn");

// show btn when scrolling down
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// scroll to top
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const toggleBtn = document.getElementById("darkModeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Toggle dark mode
toggleBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
};

window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};

/* CLOSE ALERT */
function closeAlert(alertId) {
  const alert = document.getElementById(alertId);
  if (alert) {
    alert.style.display = "none";
  }
}


// SIDEBAR
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// DARK MODE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

/* Toggle Sidebar on mobile and desktop */

/* ================= POPUP ================= */
let popup = document.getElementById("popup");

function openPopup(){
  popup?.classList.add("open-popup");
}

function closePopup(){
  popup?.classList.remove("open-popup");
}


/* ================= TOAST ================= */
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();
 
  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;
 
  document.body.appendChild(toast);
 
  requestAnimationFrame(() => {
    toast.classList.add("toast-visible");
  });
 
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2000);
}


/* ================= TOGGLE CODE ================= */
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
  
  const code = element.value || element.innerText;
 
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
      if (btn) btn.innerText = "Error";
    });
}


/* ================= COPY COLOR ================= */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}


/* ================= SIDEBAR ================= */
function toggleSidebar() {
  const backdrop = document.querySelector('.sidebar-backdrop');

  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
    backdrop?.classList.toggle('active');
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}


function updateSidebarActiveLink() {
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


function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}


function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
        document.querySelector('.sidebar-backdrop')?.classList.remove('active');
      }
    });
  });
}


/* ================= INIT SIDEBAR ================= */
function initSidebar() {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
}


/* ================= LIVE SANDBOX ================= */
function initLiveSandboxes() {
  const componentCards = document.querySelectorAll('.component-card');

  componentCards.forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const actions = card.querySelector('.actions');
    const existingCodeBlock = card.querySelector('.code-block');

    const previewNodes = Array.from(card.childNodes).filter(node => {
      return (node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')) &&
             node !== h3 &&
             node !== actions &&
             node !== existingCodeBlock &&
             node.nodeName !== 'SCRIPT';
    });

    if (previewNodes.length === 0 && !existingCodeBlock) return;

    let initialHTML = existingCodeBlock
      ? existingCodeBlock.textContent.trim()
      : previewNodes.map(n => n.outerHTML || n.textContent).join('\n').trim();

    previewNodes.forEach(node => node.remove());

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.minHeight = '160px';
    iframe.style.border = '1px solid #e8ebf2';
    iframe.style.borderRadius = '8px';

    const textarea = document.createElement('textarea');
    textarea.id = existingCodeBlock ? existingCodeBlock.id : 'live-code-' + index;
    textarea.className = 'code-block';
    textarea.value = initialHTML;
    textarea.style.display = 'none';

    const renderIframe = (html) => {
      iframe.srcdoc = `
        <html>
        <body style="display:flex;justify-content:center;align-items:center;min-height:100vh;">
          ${html}
        </body>
        </html>`;
    };

    renderIframe(initialHTML);

    textarea.addEventListener('input', (e) => renderIframe(e.target.value));

    h3?.after(iframe);
    actions?.after(textarea);
  });
}


/* ================= SEARCH FILTER ================= */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".component-card").forEach((item) => {
      const text = item.dataset.name?.toLowerCase() || '';
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
}


/* ================= SEARCH ROUTING ================= */
function handleSearch(event) {
  if (event.key !== "Enter") return;

  const query = event.target.value.toLowerCase();

  const routes = {
    button: "button.html",
    navbar: "navbar.html",
    card: "cards.html",
    form: "form.html",
    footer: "footer.html",
    color: "color.html"
  };

  for (let key in routes) {
    if (query.includes(key)) {
      window.location.href = routes[key];
      return;
    }
  }

  showToast("No component found 😢");
}


/* ================= DARK MODE (FINAL) ================= */
const themeToggle = document.getElementById("themeToggle");

function loadTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
    themeToggle && (themeToggle.textContent = "☀️");
  } else {
    document.body.classList.remove("dark");
    themeToggle && (themeToggle.textContent = "🌙");
  }
}

if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeToggle.textContent = isDark ? "☀️" : "🌙";
});
function subscribe(e) {
  e.preventDefault();
  alert("Subscribed successfully! 🎉");
}
// ================= POPUP =================
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


// ================= TOAST NOTIFICATION =================
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("toast-visible");
  });

  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2000);
}


// ================= TOGGLE CODE BLOCK =================
function toggleCode(id) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;

  codeBlock.classList.toggle("show");
}


// ================= COPY CODE =================
function copyCode(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const code = el.innerText;

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


// ================= COPY COLOR =================
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}


// ================= SIDEBAR =================
function toggleSidebar() {
  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}

function updateSidebarActiveLink() {
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

function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}

function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
      }
    });
  });
}


// ================= SEARCH (FILTER) =================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const components = document.querySelectorAll(".component-card");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const value = this.value.toLowerCase();

      components.forEach((item) => {
        const text = (item.dataset.name || item.innerText).toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
      });
    });
  }
});


// ================= SEARCH (ROUTING) =================
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase().trim();

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

    for (let key in routes) {
      if (query.includes(key)) {
        window.location.href = routes[key];
        return;
      }
    }

    showToast("No component found 😢");
  }
}


// ================= DARK MODE =================
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.getElementById("theme-toggle");

  if (toggleBtn) {
    toggleBtn.innerText = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";

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
  }

  // Init sidebar after DOM ready
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
});
/* ================= POPUP ================= */
let popup = document.getElementById("popup");

function openPopup() {
  popup?.classList.add("open-popup");
}

function closePopup() {
  popup?.classList.remove("open-popup");
}


/* ================= TOAST ================= */
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("toast-visible");
  });

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
  if (codeBlock.style.display === "block" || codeBlock.classList.contains("show")) {
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

  const code = element.value || element.innerText;

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
      if (btn) btn.innerText = "Error";
    });
}


/* ================= COPY COLOR ================= */
function copyColor(color) {
  navigator.clipboard.writeText(color);
  showToast(color + " copied!");
}


/* ================= SIDEBAR TOGGLE ================= */
function toggleSidebar() {
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (window.innerWidth <= 900) {
    document.body.classList.toggle('sidebar-open');
    if (backdrop) {
      backdrop.classList.toggle('active');
    }
  } else {
    const isHidden = document.body.classList.toggle('sidebar-hidden');
    sessionStorage.setItem('sidebarHidden', isHidden ? '1' : '0');
  }
}

function updateSidebarActiveLink() {
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

function restoreSidebarState() {
  if (window.innerWidth > 900 && sessionStorage.getItem('sidebarHidden') === '1') {
    document.body.classList.add('sidebar-hidden');
  }
}

function initSidebarLinkClose() {
  document.querySelectorAll('.sidebar ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        document.body.classList.remove('sidebar-open');
        document.querySelector('.sidebar-backdrop')?.classList.remove('active');
      }
    });
  });
}


/* ================= INIT SIDEBAR ================= */
function initSidebar() {
  restoreSidebarState();
  updateSidebarActiveLink();
  initSidebarLinkClose();
}


/* ================= LIVE SANDBOX ================= */
function initLiveSandboxes() {
  const componentCards = document.querySelectorAll('.component-card');

  componentCards.forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const actions = card.querySelector('.actions');
    const existingCodeBlock = card.querySelector('.code-block');

    const previewNodes = Array.from(card.childNodes).filter(node => {
      return (node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')) &&
             node !== h3 &&
             node !== actions &&
             node !== existingCodeBlock &&
             node.nodeName !== 'SCRIPT';
    });

    if (previewNodes.length === 0 && !existingCodeBlock) return;

    let initialHTML = existingCodeBlock
      ? existingCodeBlock.textContent.trim()
      : previewNodes.map(n => n.outerHTML || n.textContent).join('\n').trim();

    previewNodes.forEach(node => node.remove());

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.minHeight = '160px';
    iframe.style.border = '1px solid #e8ebf2';
    iframe.style.borderRadius = '8px';

    const textarea = document.createElement('textarea');
    textarea.id = existingCodeBlock ? existingCodeBlock.id : 'live-code-' + index;
    textarea.className = 'code-block';
    textarea.value = initialHTML;
    textarea.style.display = 'none';

    const renderIframe = (html) => {
      iframe.srcdoc = `
        <html>
        <head><link rel="stylesheet" href="style.css"></head>
        <body style="display:flex;justify-content:center;align-items:center;min-height:100vh;padding:20px;">
          ${html}
        </body>
        </html>`;
    };

    renderIframe(initialHTML);
    textarea.addEventListener('input', (e) => renderIframe(e.target.value));

    h3?.after(iframe);
    actions?.after(textarea);

    if (existingCodeBlock) existingCodeBlock.replaceWith(textarea);
  });
}


/* ================= SEARCH (INLINE FILTER) ================= */
const searchInput = document.getElementById("searchInput");
const components = document.querySelectorAll(".component-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase().trim();
    components.forEach((item) => {
      const name = item.dataset.name?.toLowerCase() || item.innerText.toLowerCase();
      item.style.display = name.includes(value) ? "block" : "none";
    });
  });
}


/* ================= SEARCH (PAGE ROUTING) ================= */
function handleSearch(event) {
  if (event.key !== "Enter") return;

  const query = event.target.value.toLowerCase().trim();

  const routes = {
    "button":  "button.html",
    "buttons": "button.html",
    "navbar":  "navbar.html",
    "navbars": "navbar.html",
    "card":    "cards.html",
    "cards":   "cards.html",
    "form":    "form.html",
    "forms":   "form.html",
    "footer":  "footer.html",
    "color":   "color.html",
    "colors":  "color.html"
  };

  for (let key in routes) {
    if (query.includes(key)) {
      window.location.href = routes[key];
      return;
    }
  }

  showToast("No component found 😢");
}


/* ================= DARK MODE ================= */
const themeToggle = document.getElementById("theme-toggle");

function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.innerText = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggle) themeToggle.innerText = "🌙 Dark Mode";
  }
}

if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
  }
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});


/* ================= SCROLL TO TOP ================= */
const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (!btn) return;
  btn.style.display = window.scrollY > 50 ? "block" : "none";
});

btn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


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


/* ================= INIT ================= */
window.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initLiveSandboxes();
  loadTheme();
});

