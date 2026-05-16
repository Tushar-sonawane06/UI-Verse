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
      "🔍 Searching food: " +
      searchInput.value
    );

  }

});

/* NOTIFICATION */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🥗 You reached 78% of today's nutrition goal!"
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
    "🍽 Opening Add Meal Panel..."
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
    "📈 Opening Nutrition Analytics..."
  );

});

/* PROFILE BUTTON */

const profileBtn =
document.querySelector(
".profile-card button"
);

profileBtn.addEventListener(
"click",
() => {

  alert(
    "⭐ Premium Nutrition Plan Activated!"
  );

});

/* MEAL CARD EFFECT */

const mealCards =
document.querySelectorAll(
".meal-card"
);

mealCards.forEach(card => {

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
    rgba(34,197,94,0.2),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* ANIMATED STATS */

const statCards =
document.querySelectorAll(
".stat-card h2"
);

statCards.forEach(stat => {

  stat.addEventListener(
  "mouseenter",
  () => {

    stat.style.transform =
    "scale(1.1)";

    stat.style.transition =
    "0.3s";
  });

  stat.addEventListener(
  "mouseleave",
  () => {

    stat.style.transform =
    "scale(1)";
  });

});