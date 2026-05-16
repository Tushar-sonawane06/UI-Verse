/* ================= SEARCH ================= */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🔍 Searching for: " +
      searchInput.value
    );

  }

});

/* ================= FAVORITE ================= */

const favoriteBtns =
document.querySelectorAll(
".favorite-btn"
);

favoriteBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const icon =
    btn.querySelector("i");

    icon.classList.toggle(
    "fa-regular"
    );

    icon.classList.toggle(
    "fa-solid"
    );

    btn.classList.toggle(
    "active"
    );

  });

});

/* ================= READ BUTTON ================= */

const readBtns =
document.querySelectorAll(
".book-btn"
);

readBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const title =
    btn.parentElement
    .querySelector("h3")
    .textContent;

    alert(
      `📖 Opening "${title}"...`
    );

  });

});

/* ================= HERO BUTTON ================= */

const startBtn =
document.querySelector(
".read-btn"
);

startBtn.addEventListener(
"click",
() => {

  alert(
    "📚 Starting Atomic Habits..."
  );

});

/* ================= NOTIFICATION ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 4 new book recommendations."
  );

});

/* ================= CARD HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".book-card"
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
    rgba(139,92,246,0.16),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});