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