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
      "🔍 Searching patient: " +
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
    "🔔 You have 12 new hospital notifications."
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
    "➕ Add patient panel opened."
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
    "📊 Opening hospital reports."
  );

});

/* MANAGE BUTTONS */

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
      "Manage";

      btn.style.opacity = "1";

    },2000);

  });

});

/* OPEN APPOINTMENT */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📋 Opening patient appointment."
    );

  });

});

/* CARD GLOW EFFECT */

const doctorCards =
document.querySelectorAll(
".doctor-card"
);

doctorCards.forEach(card => {

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