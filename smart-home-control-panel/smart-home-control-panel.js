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
      "🔍 Searching Device: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const addDeviceBtn =
document.querySelector(
".primary-btn"
);

const createRoutineBtn =
document.querySelector(
".secondary-btn"
);

addDeviceBtn.addEventListener(
"click",
() => {

  alert(
    "📱 Opening Device Setup..."
  );

});

createRoutineBtn.addEventListener(
"click",
() => {

  alert(
    "🤖 Creating Smart Routine..."
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

/* CARD HOVER EFFECT */

const cards =
document.querySelectorAll(
".stat-card, .automation-item, tr"
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
    rgba(59,130,246,0.20),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* NOTIFICATION */

const notifyBtn =
document.querySelector(
".notification-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 3 smart alerts detected."
  );

});

/* INSIGHTS */

const insightBtn =
document.querySelector(
".insights-card button"
);

insightBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Opening Smart Home Insights..."
  );

});

/* ENERGY */

const energyBtn =
document.querySelector(
".energy-card button"
);

energyBtn.addEventListener(
"click",
() => {

  alert(
    "⚡ Opening Energy Analytics..."
  );

});