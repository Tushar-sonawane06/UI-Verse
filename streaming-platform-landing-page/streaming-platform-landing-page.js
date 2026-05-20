/* NAVBAR SCROLL */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
() => {

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(5,8,22,0.85)";

  }

  else{

    navbar.style.background =
    "rgba(5,8,22,0.45)";
  }

});

/* HERO BUTTONS */

const watchBtn =
document.querySelector(
".watch-btn"
);

const trailerBtn =
document.querySelector(
".trailer-btn"
);

watchBtn.addEventListener(
"click",
() => {

  alert(
    "🎬 Starting Stream..."
  );

});

trailerBtn.addEventListener(
"click",
() => {

  alert(
    "🎞 Playing Trailer..."
  );

});

/* SIGN IN */

const signinBtn =
document.querySelector(
".signin-btn"
);

signinBtn.addEventListener(
"click",
() => {

  alert(
    "👤 Opening Sign In..."
  );

});

/* MOVIE CARDS */

const movieCards =
document.querySelectorAll(
".movie-card"
);

movieCards.forEach(card => {

  card.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.transform =
    `
    perspective(1000px)
    rotateX(${(y - rect.height / 2) / 25}deg)
    rotateY(${-(x - rect.width / 2) / 25}deg)
    translateY(-10px)
    `;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.transform =
    "translateY(0px)";
  });

});

/* CARD BUTTONS */

const cardBtns =
document.querySelectorAll(
".card-btn"
);

cardBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "▶ Playing Movie..."
    );

  });

});

/* PRICING BUTTONS */

const pricingBtns =
document.querySelectorAll(
".pricing-card button"
);

pricingBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "💎 Subscription Selected!"
    );

  });

});