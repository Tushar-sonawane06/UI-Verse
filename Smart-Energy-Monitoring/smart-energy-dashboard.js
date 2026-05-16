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
      "Searching device: " +
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
     Activated`;

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

/* ================= ROOM HOVER ================= */

const roomCards =
document.querySelectorAll(
".room-card"
);

roomCards.forEach(card => {

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
    rgba(34,197,94,0.18),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

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
    "⚡ Energy alert: Consumption exceeded daily average."
  );

});