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
      "🎬 Searching movie: " +
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
    "🔔 3 new movie releases available!"
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
    "🍿 Opening booking system..."
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
    "▶ Playing movie trailer..."
  );

});

/* REWARD BUTTON */

const rewardBtn =
document.querySelector(
".profile-card button"
);

rewardBtn.addEventListener(
"click",
() => {

  alert(
    "🎁 Opening reward points..."
  );

});

/* BOOK BUTTON */

const bookButtons =
document.querySelectorAll(
".book-btn"
);

bookButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Booked";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Book";

      btn.style.opacity = "1";

    },2000);

  });

});

/* SELECT SEAT */

const seatButtons =
document.querySelectorAll(
".seat-btn"
);

seatButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "💺 Opening seat selection..."
    );

  });

});

/* CARD GLOW */

const cards =
document.querySelectorAll(
".movie-card"
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