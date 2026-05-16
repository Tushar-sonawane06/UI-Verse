/* ================= SEARCH ================= */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🔍 Searching for: " +
      searchInput.value
    );

  }

});

/* ================= NOTIFICATION ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 5 new client notifications."
  );

});

/* ================= BUTTONS ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "🚀 New project creation started."
  );

});

const secondaryBtn =
document.querySelector(
".secondary-btn"
);

secondaryBtn.addEventListener(
"click",
() => {

  alert(
    "📩 Client invitation sent."
  );

});

/* ================= CLIENT DETAILS ================= */

const detailBtns =
document.querySelectorAll(
".client-footer button"
);

detailBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const clientName =
    btn.closest(".client-card")
    .querySelector("h3")
    .textContent;

    alert(
      `👤 Opening ${clientName}'s profile`
    );

  });

});

/* ================= CARD HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".client-card"
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
    rgba(139,92,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});