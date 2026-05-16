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
      "🔍 Searching tasks for: " +
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
    "🔔 You have 6 new task notifications."
  );

});

/* ================= CREATE TASK ================= */

const createTaskBtn =
document.querySelector(
".primary-btn"
);

createTaskBtn.addEventListener(
"click",
() => {

  alert(
    "✅ New task creation panel opened."
  );

});

/* ================= AI SUGGESTION ================= */

const aiBtn =
document.querySelector(
".secondary-btn"
);

aiBtn.addEventListener(
"click",
() => {

  alert(
    "🤖 AI generated smart productivity suggestions."
  );

});

/* ================= TEAM HOVER EFFECT ================= */

const teamCards =
document.querySelectorAll(
".team-card"
);

teamCards.forEach(card => {

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