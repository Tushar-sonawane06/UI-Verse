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
      "Searching campaign: " +
      searchInput.value
    );

  }

});

/* ================= QUICK ACTIONS ================= */

const actionButtons =
document.querySelectorAll(
".quick-actions button"
);

actionButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const original =
    btn.innerHTML;

    btn.innerHTML =
    `<i class="fa-solid fa-check"></i>
     Completed`;

    btn.style.opacity =
    "0.85";

    setTimeout(() => {

      btn.innerHTML =
      original;

      btn.style.opacity =
      "1";

    },2000);

  });

});

/* ================= CAMPAIGN HOVER ================= */

const campaignCards =
document.querySelectorAll(
".campaign-card"
);

campaignCards.forEach(card => {

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
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* ================= NOTIFICATIONS ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔥 Viral alert: Your latest campaign is trending."
  );

});