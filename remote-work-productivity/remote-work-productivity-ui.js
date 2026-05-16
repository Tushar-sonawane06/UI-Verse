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
      "🔍 Searching: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const primaryBtn =
document.querySelector(
".primary-btn"
);

const secondaryBtn =
document.querySelector(
".secondary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "📹 Starting Team Meeting..."
  );

});

secondaryBtn.addEventListener(
"click",
() => {

  alert(
    "✅ Creating New Task..."
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

/* PROJECT CARD HOVER */

const projectCards =
document.querySelectorAll(
".project-card"
);

projectCards.forEach(card => {

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
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* VIEW REPORT */

const reportBtn =
document.querySelector(
".focus-card button"
);

reportBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Opening Productivity Report..."
  );

});

/* JOIN MEETING */

const joinBtn =
document.querySelector(
".video-card button"
);

joinBtn.addEventListener(
"click",
() => {

  alert(
    "🎥 Joining Live Team Meeting..."
  );

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
    "🔔 You have 5 new notifications."
  );

});