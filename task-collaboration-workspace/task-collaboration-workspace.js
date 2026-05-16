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
      "🔍 Searching Projects: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const createBtn =
document.querySelector(
".primary-btn"
);

const inviteBtn =
document.querySelector(
".secondary-btn"
);

createBtn.addEventListener(
"click",
() => {

  alert(
    "🚀 Creating New Project..."
  );

});

inviteBtn.addEventListener(
"click",
() => {

  alert(
    "👥 Opening Team Invitations..."
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
".stat-card, .member-card, .task-card-small"
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
    rgba(59,130,246,0.25),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

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
    "🔔 You have 6 new collaboration notifications."
  );

});

/* ACTIVITY FEED */

const activityBtn =
document.querySelector(
".activity-card button"
);

activityBtn.addEventListener(
"click",
() => {

  alert(
    "📢 Opening Team Activity Feed..."
  );

});

/* TEAM INSIGHTS */

const insightBtn =
document.querySelector(
".team-card button"
);

insightBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Opening Productivity Insights..."
  );

});