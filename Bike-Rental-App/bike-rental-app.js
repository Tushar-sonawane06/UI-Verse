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
      "🚴 Searching for: " +
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
    "🔔 You have 3 new ride notifications."
  );

});

/* ================= HERO BUTTONS ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "⚡ Redirecting to bike rental page."
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
    "🗺 Opening nearby station map."
  );

});

/* ================= RENT BUTTONS ================= */

const rentButtons =
document.querySelectorAll(
".rent-btn"
);

rentButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Booked";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Rent";

      btn.style.opacity = "1";

    },2000);

  });

});

/* ================= STATION BUTTONS ================= */

const stationButtons =
document.querySelectorAll(
".station-btn"
);

stationButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📍 Navigation started."
    );

  });

});

/* ================= BIKE CARD HOVER EFFECT ================= */

const bikeCards =
document.querySelectorAll(
".bike-card"
);

bikeCards.forEach(card => {

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