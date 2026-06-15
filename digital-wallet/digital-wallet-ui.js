/* SEARCH */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🔍 Searching Payments: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const sendBtn =
document.querySelector(
".primary-btn"
);

const balanceBtn =
document.querySelector(
".secondary-btn"
);

sendBtn.addEventListener(
"click",
() => {

  alert(
    "💸 Opening Money Transfer..."
  );

});

balanceBtn.addEventListener(
"click",
() => {

  alert(
    "💰 Adding Wallet Balance..."
  );

});

/* SIDEBAR ACTIVE */

const sidebarLinks =
document.querySelectorAll(
".sidebar-menu a"
);

sidebarLinks.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    sidebarLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});

/* CARD HOVER */

const cards =
document.querySelectorAll(
".stat-card, .contact-item"
);

cards.forEach(card => {

  card.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(59,130,246,0.25),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* NOTIFICATIONS */

const notifyBtn =
document.querySelector(
".notification-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 4 new wallet notifications."
  );

});

/* SECURITY */

const securityBtn =
document.querySelector(
".security-card button"
);

securityBtn.addEventListener(
"click",
() => {

  alert(
    "🔒 Opening Security Settings..."
  );

});

/* QUICK REPORT */

const reportBtn =
document.querySelector(
".quick-card button"
);

reportBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Opening Spending Report..."
  );

});
// =========================
// SIDEBAR ACTIVE STATE
// =========================

const menuItems = document.querySelectorAll(".sidebar-menu a");

menuItems.forEach(item => {
  item.addEventListener("click", () => {

    menuItems.forEach(link => {
      link.classList.remove("active");
    });

    item.classList.add("active");

  });
});

// =========================
// FLOATING BUTTON
// =========================

const fab = document.createElement("button");

fab.classList.add("floating-btn");

fab.innerHTML = `<i class="fa-solid fa-plus"></i>`;

document.body.appendChild(fab);

// =========================
// SIMPLE NOTIFICATION
// =========================

fab.addEventListener("click", () => {

  const toast = document.createElement("div");

  toast.innerText = "✨ Quick Action Opened";

  toast.style.position = "fixed";
  toast.style.bottom = "120px";
  toast.style.right = "30px";
  toast.style.padding = "16px 24px";
  toast.style.borderRadius = "16px";
  toast.style.background = "rgba(17,24,39,.95)";
  toast.style.color = "#fff";
  toast.style.fontWeight = "600";
  toast.style.zIndex = "999";
  toast.style.border = "1px solid rgba(255,255,255,.08)";
  toast.style.backdropFilter = "blur(10px)";
  toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  toast.style.animation = "fadeIn .3s ease";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);

});

// =========================
// SEARCH FILTER
// =========================

const searchInput = document.querySelector(".search-box input");

const transactions = document.querySelectorAll(".transaction-item");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  transactions.forEach(item => {

    const text = item.innerText.toLowerCase();

    item.style.display = text.includes(value)
      ? "flex"
      : "none";

  });

});

// =========================
// CARD HOVER EFFECT
// =========================

const walletCard = document.querySelector(".wallet-card");

walletCard.addEventListener("mousemove", (e) => {

  const rect = walletCard.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = ((x / rect.width) - 0.5) * 16;
  const rotateX = ((y / rect.height) - 0.5) * -16;

  walletCard.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.02)
  `;

});

walletCard.addEventListener("mouseleave", () => {

  walletCard.style.transform = `
    perspective(1000px)
    rotateX(0)
    rotateY(0)
    scale(1)
  `;

});

// =========================
// LIVE BALANCE COUNTER
// =========================

const balance = document.querySelector(".wallet-balance h1");

let count = 0;
let target = 48920;

const counter = setInterval(() => {

  count += 640;

  if(count >= target){
    count = target;
    clearInterval(counter);
  }

  balance.innerText = `$${count.toLocaleString()}`;

}, 20);

// ===============================
// Notification Button Animation
// ===============================

const notificationBtn = document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

  notificationBtn.classList.toggle("active");

  notificationBtn.innerHTML =
    notificationBtn.classList.contains("active")
      ? '<i class="fa-solid fa-check"></i>'
      : '<i class="fa-solid fa-bell"></i>';

});

// ===============================
// Fake Search Interaction
// ===============================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {
  searchInput.parentElement.style.borderColor = "#7c3aed";
});

searchInput.addEventListener("blur", () => {
  searchInput.parentElement.style.borderColor =
    "rgba(255,255,255,0.12)";
});

// ===============================
// Animated Chart Bars
// ===============================

const bars = document.querySelectorAll(".chart-bar");

bars.forEach((bar, index) => {

  const finalHeight = bar.offsetHeight;

  bar.style.height = "0px";

  setTimeout(() => {
    bar.style.transition = "1s ease";
    bar.style.height = finalHeight + "px";
  }, index * 150);

});

// ===============================
// Smooth Hover Effect
// ===============================

const cards = document.querySelectorAll(
  ".stat-card, .transaction-card, .analytics-card, .contacts-card, .security-card, .wallet-card"
);

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});