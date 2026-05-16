/* SEARCH */

const searchBtn =
document.querySelector(
".search-btn"
);

searchBtn.addEventListener(
"click",
() => {

  alert(
    "🎵 Searching Concert Events..."
  );

});

/* HERO BUTTONS */

const heroButtons =
document.querySelectorAll(
".hero-buttons button"
);

heroButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      `🎤 ${btn.innerText} clicked`
    );

  });

});

/* EVENT TICKETS */

const ticketButtons =
document.querySelectorAll(
".ticket-btn"
);

ticketButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎫 Redirecting to Ticket Booking..."
    );

  });

});

/* DOWNLOAD */

const downloadBtn =
document.querySelector(
".download-btn"
);

downloadBtn.addEventListener(
"click",
() => {

  alert(
    "📥 Downloading Ticket..."
  );

});

/* EVENT CARD GLOW */

const cards =
document.querySelectorAll(
".event-card"
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
    rgba(236,72,153,0.25),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* NAVBAR SCROLL */

window.addEventListener(
"scroll",
() => {

  const navbar =
  document.querySelector(
  ".navbar"
  );

  if(window.scrollY > 60){

    navbar.style.background =
    "rgba(2,6,23,0.9)";

    navbar.style.backdropFilter =
    "blur(14px)";
  }

  else{

    navbar.style.background =
    "transparent";
  }

});