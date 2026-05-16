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
      "🔍 Searching Challenges: " +
      searchInput.value
    );

  }

});

/* NOTIFICATION */

const notifyBtn =
document.querySelector(
".notify-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 5 new coding notifications!"
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
    "🚀 Starting Coding Challenge..."
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
    "💻 Opening Challenge Library..."
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
    "👤 Opening Developer Profile..."
  );

});

/* SOLVE BUTTONS */

const solveButtons =
document.querySelectorAll(
".solve-btn"
);

solveButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "⚡ Challenge Opened!"
    );

  });

});

/* CARD GLOW EFFECT */

const challengeCards =
document.querySelectorAll(
".challenge-card"
);

challengeCards.forEach(card => {

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

/* LEADERBOARD CLICK */

const leaders =
document.querySelectorAll(
".leader-item"
);

leaders.forEach(item => {

  item.addEventListener(
  "click",
  () => {

    const name =
    item.querySelector("h3").innerText;

    alert(
      "🏆 Viewing Profile: " +
      name
    );

  });

});