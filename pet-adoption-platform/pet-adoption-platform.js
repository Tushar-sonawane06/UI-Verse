pet-adoption-platform.jsz/* NAVBAR SHADOW */

window.addEventListener(
"scroll",
() => {

  const navbar =
  document.querySelector(
  ".navbar"
  );

  if(window.scrollY > 40){

    navbar.style.boxShadow =
    "0 10px 40px rgba(0,0,0,0.08)";

  }

  else{

    navbar.style.boxShadow =
    "none";

  }

});

/* BUTTON INTERACTIONS */

const buttons =
document.querySelectorAll(
"button"
);

buttons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const text =
    btn.innerText;

    alert(
      `🐾 ${text} clicked!`
    );

  });

});

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
      `🔍 Searching for "${searchInput.value}"`
    );

  }

});

/* PET CARD HOVER EFFECT */

const petCards =
document.querySelectorAll(
".pet-card"
);

petCards.forEach(card => {

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
    rgba(255,123,84,0.12),
    rgba(255,255,255,1))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "#ffffff";

  });

});