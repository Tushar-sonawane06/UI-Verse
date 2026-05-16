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

/* ADD JOB */

const addBtn =
document.querySelector(
".add-btn"
);

addBtn.addEventListener(
"click",
() => {

  alert(
    "💼 Add new job panel opened."
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
    "🚀 New job posting created."
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
    "📊 Opening recruitment reports."
  );

});

/* MANAGE BUTTONS */

const applyButtons =
document.querySelectorAll(
".apply-btn"
);

applyButtons.forEach(btn => {

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

/* JOIN BUTTONS */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎥 Joining interview room."
    );

  });

});

/* CARD GLOW EFFECT */

const jobCards =
document.querySelectorAll(
".job-card"
);

jobCards.forEach(card => {

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