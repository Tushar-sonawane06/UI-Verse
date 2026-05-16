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
      "🔍 Searching Smart City Systems: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const liveBtn =
document.querySelector(
".primary-btn"
);

const reportBtn =
document.querySelector(
".secondary-btn"
);

liveBtn.addEventListener(
"click",
() => {

  alert(
    "📡 Opening Live Monitoring..."
  );

});

reportBtn.addEventListener(
"click",
() => {

  alert(
    "📄 Generating Smart City Report..."
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
".stat-card, .service-item, .system-item"
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

/* NOTIFICATION */

const notifyBtn =
document.querySelector(
".notification-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 5 new city alerts received."
  );

});

/* SECURITY BUTTON */

const securityBtn =
document.querySelector(
".security-card button"
);

securityBtn.addEventListener(
"click",
() => {

  alert(
    "🔒 Opening Security Monitoring Center..."
  );

});

/* REPORT BUTTON */

const cityReportBtn =
document.querySelector(
".city-status button"
);

cityReportBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Opening Smart City Reports..."
  );

});