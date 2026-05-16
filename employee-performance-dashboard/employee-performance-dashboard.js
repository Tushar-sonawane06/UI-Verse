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
      "🔍 Searching employee: " +
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
    "📢 5 new employee performance updates!"
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
    "👨‍💼 Opening Employee Registration..."
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
    "📄 Generating Performance Report..."
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
    "👤 Opening HR Manager Profile..."
  );

});

/* EMPLOYEE BUTTON */

const employeeButtons =
document.querySelectorAll(
".employee-btn"
);

employeeButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📊 Opening Employee Details..."
    );

  });

});

/* CARD GLOW EFFECT */

const employeeCards =
document.querySelectorAll(
".employee-card"
);

employeeCards.forEach(card => {

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
    rgba(59,130,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* TASK STATUS INTERACTION */

const taskStatus =
document.querySelectorAll(
".task-status"
);

taskStatus.forEach(status => {

  status.addEventListener(
  "click",
  () => {

    alert(
      "📌 Task Status: " +
      status.innerText
    );

  });

});