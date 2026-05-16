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
      "🎬 Searching clips: " +
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
    "🔔 5 render tasks completed."
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
    "🎥 Creating new project..."
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
    "⚡ Opening editing studio..."
  );

});

/* STORAGE BUTTON */

const upgradeBtn =
document.querySelector(
".storage-card button"
);

upgradeBtn.addEventListener(
"click",
() => {

  alert(
    "☁ Redirecting to upgrade plans..."
  );

});

/* EDIT BUTTON */

const editButtons =
document.querySelectorAll(
".edit-btn"
);

editButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Opening";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Edit";

      btn.style.opacity = "1";

    },2000);

  });

});

/* CARD GLOW EFFECT */

const cards =
document.querySelectorAll(
".project-card"
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