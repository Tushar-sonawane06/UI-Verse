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

/* THEME BUTTON */

const themeBtn =
document.querySelector(
".theme-btn"
);

themeBtn.addEventListener(
"click",
() => {

  alert(
    "🌙 Dark mode customization coming soon!"
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
    "💼 Opening Portfolio Projects..."
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
    "📄 Resume Download Started!"
  );

});

/* PROJECT BUTTONS */

const liveButtons =
document.querySelectorAll(
".live-btn"
);

liveButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🚀 Opening Live Demo..."
    );

  });

});

const codeButtons =
document.querySelectorAll(
".code-btn"
);

codeButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "💻 Opening GitHub Repository..."
    );

  });

});

/* PROJECT CARD GLOW */

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

/* PROFILE SOCIALS */

const socials =
document.querySelectorAll(
".profile-socials a"
);

socials.forEach(icon => {

  icon.addEventListener(
  "click",
  () => {

    alert(
      "🌐 Opening Social Profile..."
    );

  });

});