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
      "🎮 Searching: " +
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
    "🔔 12 new tournament updates!"
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
    "⚡ Joining tournament..."
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
    "📺 Opening live streams..."
  );

});

/* HOST BUTTON */

const hostBtn =
document.querySelector(
".profile-card button"
);

hostBtn.addEventListener(
"click",
() => {

  alert(
    "🏆 Creating new tournament..."
  );

});

/* JOIN BUTTONS */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Joined";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Join";

      btn.style.opacity = "1";

    },2000);

  });

});

/* WATCH */

const watchButtons =
document.querySelectorAll(
".watch-btn"
);

watchButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📡 Streaming live match..."
    );

  });

});

/* CARD GLOW EFFECT */

const cards =
document.querySelectorAll(
".tournament-card"
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