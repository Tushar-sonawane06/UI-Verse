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
      "🔍 Searching workspace: " +
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
    "🔔 You have 6 unread notifications."
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
    "🏢 Joining virtual workspace..."
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
    "📊 Opening productivity analytics."
  );

});

/* USER CARD BUTTON */

const meetingBtn =
document.querySelector(
".user-card button"
);

meetingBtn.addEventListener(
"click",
() => {

  alert(
    "📹 Starting a new meeting..."
  );

});

/* OPEN TEAM */

const manageButtons =
document.querySelectorAll(
".manage-btn"
);

manageButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Opened";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Open";

      btn.style.opacity = "1";

    },2000);

  });

});

/* JOIN MEETING */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎥 Joining meeting room..."
    );

  });

});

/* CARD GLOW EFFECT */

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