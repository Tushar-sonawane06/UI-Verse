/* SEARCH */

const searchInput =
document.querySelector(
".search-box input"
);

const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
}); 
searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🔍 Searching Workouts: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const startBtn =
document.querySelector(
".start-btn"
);

const planBtn =
document.querySelector(
".plan-btn"
);

startBtn.addEventListener(
"click",
() => {

  alert(
    "🏋️ Starting Workout Session..."
  );

});

planBtn.addEventListener(
"click",
() => {

  alert(
    "📋 Opening Membership Plans..."
  );

});

/* WORKOUT BUTTONS */

const cardBtns =
document.querySelectorAll(
".card-btn"
);

cardBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🔥 Workout Plan Activated!"
    );

  });

});

/* MEMBERSHIP BUTTON */

const membershipBtn =
document.querySelector(
".membership-card button"
);

membershipBtn.addEventListener(
"click",
() => {

  alert(
    "💎 Opening Upgrade Membership..."
  );

});

/* TRAINER BUTTON */

const trainerBtn =
document.querySelector(
".trainer-card button"
);

trainerBtn.addEventListener(
"click",
() => {

  alert(
    "📅 Booking Personal Training Session..."
  );

});

/* SIDEBAR ACTIVE */

const links =
document.querySelectorAll(
".sidebar-nav a"
);

links.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    links.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});

/* CARD HOVER GLOW */

const cards =
document.querySelectorAll(
".workout-card"
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
    rgba(139,92,246,0.25),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});