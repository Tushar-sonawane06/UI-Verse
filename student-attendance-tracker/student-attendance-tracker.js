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
      "🔍 Searching Student: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const attendanceBtn =
document.querySelector(
".primary-btn"
);

const reportBtn =
document.querySelector(
".secondary-btn"
);

attendanceBtn.addEventListener(
"click",
() => {

  alert(
    "📘 Opening Attendance Manager..."
  );

});

reportBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Generating Attendance Report..."
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

/* HOVER EFFECT */

const cards =
document.querySelectorAll(
".stat-card, .subject-item, tr"
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

/* NOTIFICATIONS */

const notifyBtn =
document.querySelector(
".notification-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 4 attendance alerts received."
  );

});

/* INSIGHT BUTTON */

const insightBtn =
document.querySelector(
".insights-card button"
);

insightBtn.addEventListener(
"click",
() => {

  alert(
    "📈 Opening Attendance Analytics..."
  );

});

/* REPORT BUTTON */

const attendanceReportBtn =
document.querySelector(
".attendance-card button"
);

attendanceReportBtn.addEventListener(
"click",
() => {

  alert(
    "📄 Opening Monthly Attendance Reports..."
  );

});