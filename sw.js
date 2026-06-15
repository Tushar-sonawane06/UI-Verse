const OFFLINE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>You're offline — UIverse</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: #0d0d0f;
    color: #e8e8f0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.18;
    animation: drift 8s ease-in-out infinite alternate;
    pointer-events: none;
  }
  .orb-1 { width: 400px; height: 400px; background: #6c63ff; top: -100px; left: -100px; animation-delay: 0s; }
  .orb-2 { width: 300px; height: 300px; background: #ff6b9d; bottom: -80px; right: -80px; animation-delay: -3s; }
  .orb-3 { width: 200px; height: 200px; background: #4ecdc4; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: -6s; }

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, 20px) scale(1.08); }
  }

  .grid {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  .card {
    position: relative;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 3rem 2.5rem;
    max-width: 420px;
    width: 90%;
    text-align: center;
    backdrop-filter: blur(20px);
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .icon-wrap {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    position: relative;
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
  }

  .icon-bg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(108, 99, 255, 0.15);
    border: 1px solid rgba(108, 99, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-ping {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(108, 99, 255, 0.3);
    animation: ping 2s ease-in-out infinite;
  }
  .icon-ping-2 {
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    border: 1px solid rgba(108, 99, 255, 0.15);
    animation: ping 2s ease-in-out infinite 0.4s;
  }

  @keyframes ping {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.3; transform: scale(1.05); }
  }

  .wifi-icon { color: #6c63ff; }

  .brand {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-bottom: 1rem;
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
  }

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 0.75rem;
    background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  }

  p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.45);
    line-height: 1.6;
    margin-bottom: 2rem;
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 80, 80, 0.12);
    border: 1px solid rgba(255, 80, 80, 0.25);
    border-radius: 999px;
    padding: 0.3rem 0.9rem;
    font-size: 0.78rem;
    color: #ff6b6b;
    margin-bottom: 2rem;
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
  }
  .status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #ff6b6b;
    animation: blink 1.5s ease-in-out infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.2; }
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.75rem 1.75rem;
    background: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    box-shadow: 0 4px 24px rgba(108,99,255,0.35);
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
  }
  button:hover  { background: #7c74ff; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(108,99,255,0.5); }
  button:active { transform: translateY(0); }

  .divider {
    margin: 1.5rem 0;
    border: none;
    border-top: 1px solid rgba(255,255,255,0.07);
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
  }

  .footer-text {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.2);
    animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
  }
  .footer-text span { color: rgba(108,99,255,0.7); font-weight: 500; }
</style>
</head>
<body>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="grid"></div>

  <div class="card">
    <div class="icon-wrap">
      <div class="icon-ping"></div>
      <div class="icon-ping-2"></div>
      <div class="icon-bg">
        <svg class="wifi-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="2" y1="2" x2="22" y2="22"/>
          <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
          <path d="M2 8.82a15 15 0 0 1 4.17-2.65"/>
          <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/>
          <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/>
          <path d="M5 12.5a10 10 0 0 1 5.24-2.72"/>
          <circle cx="12" cy="20" r="1" fill="currentColor"/>
        </svg>
      </div>
    </div>

    <div class="brand">&#x2B21; UIverse</div>
    <div class="status"><span class="status-dot"></span> No internet connection</div>
    <h1>You're offline</h1>
    <p>Looks like your connection dropped. Check your network and try again. We'll reload automatically when you're back.</p>

    <button onclick="location.reload()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
      Try again
    </button>

    <hr class="divider">
    <p class="footer-text">You'll be reconnected automatically &middot; <span>UIverse</span></p>
  </div>

  <script>
    window.addEventListener('online', () => location.reload());
  </script>
</body>
</html>`;

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate') return;

  event.respondWith(
    fetch(event.request).catch(() =>
      new Response(OFFLINE_HTML, {
        headers: { 'Content-Type': 'text/html' }
      })
    )
  );
});

// ===========================
// SERVICE WORKER DASHBOARD JS
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initClock();
  initCounters();
  registerSW();
  monitorConnection();
  setupPWAInstall();
});

// ===========================
// TOAST NOTIFICATIONS
// ===========================

function showToast(message, type = "info") {
  const toast = document.createElement("div");

  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ===========================
// THEME TOGGLE
// ===========================

function initTheme() {
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight =
      document.body.classList.contains("light");

    localStorage.setItem(
      "theme",
      isLight ? "light" : "dark"
    );

    showToast(
      `Theme switched to ${
        isLight ? "Light" : "Dark"
      } mode`
    );
  });
}

// ===========================
// LIVE CLOCK
// ===========================

function initClock() {
  const clock = document.getElementById("liveClock");

  if (!clock) return;

  const updateClock = () => {
    const now = new Date();

    clock.textContent =
      now.toLocaleDateString() +
      " • " +
      now.toLocaleTimeString();
  };

  updateClock();
  setInterval(updateClock, 1000);
}

// ===========================
// ANIMATED COUNTERS
// ===========================

function animateCounter(element, target) {
  let current = 0;

  const increment = Math.ceil(target / 80);

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent =
      current.toLocaleString();
  }, 20);
}

function initCounters() {
  document
    .querySelectorAll("[data-counter]")
    .forEach(el => {
      const target = parseInt(
        el.dataset.counter,
        10
      );

      animateCounter(el, target);
    });
}

// ===========================
// ONLINE / OFFLINE STATUS
// ===========================

function monitorConnection() {
  const status = document.getElementById(
    "connectionStatus"
  );

  const updateStatus = () => {
    const online = navigator.onLine;

    if (status) {
      status.textContent = online
        ? "Online"
        : "Offline";

      status.className = online
        ? "online"
        : "offline";
    }

    showToast(
      online
        ? "Internet connection restored"
        : "You are offline",
      online ? "success" : "warning"
    );
  };

  window.addEventListener(
    "online",
    updateStatus
  );

  window.addEventListener(
    "offline",
    updateStatus
  );

  updateStatus();
}

// ===========================
// SERVICE WORKER
// ===========================

async function registerSW() {
  const swStatus =
    document.getElementById("swStatus");

  if (!("serviceWorker" in navigator)) {
    if (swStatus)
      swStatus.textContent =
        "Not Supported";

    showToast(
      "Service Worker not supported",
      "error"
    );
    return;
  }

  try {
    const registration =
      await navigator.serviceWorker.register(
        "./sw.js"
      );

    if (swStatus)
      swStatus.textContent = "Active";

    showToast(
      "Service Worker Registered",
      "success"
    );

    console.debug(
      "SW Registered:",
      registration
    );

    checkForUpdates(registration);
    getCacheStats();

  } catch (error) {
    console.error(error);

    if (swStatus)
      swStatus.textContent = "Failed";

    showToast(
      "SW Registration Failed",
      "error"
    );
  }
}

// ===========================
// CHECK FOR SW UPDATE
// ===========================

function checkForUpdates(registration) {
  setInterval(() => {
    registration.update();
  }, 60000);

  registration.addEventListener(
    "updatefound",
    () => {
      showToast(
        "New update available",
        "info"
      );
    }
  );
}

// ===========================
// CACHE STORAGE INFO
// ===========================

async function getCacheStats() {
  if (!("caches" in window)) return;

  try {
    const cacheNames =
      await caches.keys();

    const cacheCount =
      document.getElementById(
        "cacheCount"
      );

    if (cacheCount) {
      cacheCount.textContent =
        cacheNames.length;
    }

    let totalRequests = 0;

    for (const name of cacheNames) {
      const cache =
        await caches.open(name);

      const keys =
        await cache.keys();

      totalRequests += keys.length;
    }

    const assets =
      document.getElementById(
        "cachedAssets"
      );

    if (assets) {
      assets.textContent =
        totalRequests.toLocaleString();
    }

  } catch (err) {
    console.error(err);
  }
}

// ===========================
// PWA INSTALL PROMPT
// ===========================

let deferredPrompt = null;

function setupPWAInstall() {
  const installBtn =
    document.getElementById(
      "installBtn"
    );

  window.addEventListener(
    "beforeinstallprompt",
    e => {
      e.preventDefault();

      deferredPrompt = e;

      if (installBtn) {
        installBtn.style.display =
          "inline-flex";
      }
    }
  );

  installBtn?.addEventListener(
    "click",
    async () => {
      if (!deferredPrompt) return;

      deferredPrompt.prompt();

      const result =
        await deferredPrompt.userChoice;

      if (
        result.outcome === "accepted"
      ) {
        showToast(
          "PWA Installed",
          "success"
        );
      }

      deferredPrompt = null;
    }
  );
}

// ===========================
// DEMO LOG GENERATOR
// ===========================

function addLog(message) {
  const logContainer =
    document.getElementById("logs");

  if (!logContainer) return;

  const item =
    document.createElement("div");

  item.className = "log-item";

  item.innerHTML = `
    <span>${new Date().toLocaleTimeString()}</span>
    <span>${message}</span>
  `;

  logContainer.prepend(item);
}

setInterval(() => {
  const logs = [
    "Cache updated",
    "Background sync completed",
    "Network request intercepted",
    "Offline page served",
    "Push notification received"
  ];

  addLog(
    logs[
      Math.floor(
        Math.random() * logs.length
      )
    ]
  );
}, 5000);