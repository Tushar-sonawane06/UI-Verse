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
      "🔍 Searching template: " +
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
    "🔔 Resume tips and updates available."
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
    "✨ Creating a new resume."
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
    "📄 Opening resume preview."
  );

});

/* TEMPLATE BUTTONS */

const templateButtons =
document.querySelectorAll(
".use-btn"
);

templateButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Selected";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Use Template";

      btn.style.opacity = "1";

    },2000);

  });

});

/* DOWNLOAD BUTTON */

const downloadBtn =
document.querySelector(
".user-card button"
);

downloadBtn.addEventListener(
"click",
() => {

  alert(
    "⬇️ Downloading resume PDF..."
  );

});

/* CARD GLOW EFFECT */

const templateCards =
document.querySelectorAll(
".template-card"
);

templateCards.forEach(card => {

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