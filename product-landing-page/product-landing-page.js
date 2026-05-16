/* ================= NAVBAR SCROLL ================= */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
() => {

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(6,8,22,0.92)";

    navbar.style.backdropFilter =
    "blur(22px)";

  }

  else{

    navbar.style.background =
    "rgba(6,8,22,0.65)";

  }

});

/* ================= BUTTON INTERACTIONS ================= */

const buttons =
document.querySelectorAll(
"button"
);

buttons.forEach(btn => {

  btn.addEventListener(
  "mouseenter",
  () => {

    btn.style.transform =
    "translateY(-3px)";

  });

  btn.addEventListener(
  "mouseleave",
  () => {

    btn.style.transform =
    "translateY(0px)";

  });

});

/* ================= FEATURE CARD GLOW ================= */

const featureCards =
document.querySelectorAll(
".feature-card"
);

featureCards.forEach(card => {

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
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* ================= CTA BUTTON ================= */

const ctaBtn =
document.querySelector(
".cta .primary-btn"
);

ctaBtn.addEventListener(
"click",
() => {

  alert(
    "🎉 Welcome to NovaAI Free Trial!"
  );

});