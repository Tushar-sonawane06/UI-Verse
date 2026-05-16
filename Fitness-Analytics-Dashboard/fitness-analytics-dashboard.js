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
      "🔍 Searching workout: " +
      searchInput.value
    );

  }

});

/* NOTIFICATIONS */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You reached today's fitness goal!"
  );

});

/* HERO BUTTONS */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "🏋️ Workout session started."
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
    "📊 Opening analytics reports."
  );

});

/* START BUTTONS */

const startButtons =
document.querySelectorAll(
".start-btn"
);

startButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Started";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Start";

      btn.style.opacity = "1";

    },2000);

  });

});

/* VIEW BUTTONS */

const viewButtons =
document.querySelectorAll(
".view-btn"
);

viewButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📅 Opening activity details."
    );

  });

});

/* CARD GLOW EFFECT */

const workoutCards =
document.querySelectorAll(
".workout-card"
);

workoutCards.forEach(card => {

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