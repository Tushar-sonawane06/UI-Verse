/* ================= SEARCH BUTTON ================= */

const searchBtn =
document.querySelector(
".search-btn"
);

searchBtn.addEventListener(
"click",
() => {

  alert(
    "🚘 Searching available rental cars..."
  );

});

/* ================= BOOK BUTTON ================= */

const bookButtons =
document.querySelectorAll(
".book-btn"
);

bookButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const car =
    btn.parentElement
    .querySelector("h3")
    .textContent;

    alert(
      `✅ ${car} booked successfully!`
    );

  });

});

/* ================= WISHLIST ================= */

const wishlistBtns =
document.querySelectorAll(
".wishlist-btn"
);

wishlistBtns.forEach(btn => {

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

/* ================= HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".car-card"
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
    rgba(124,58,237,0.18),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.06)";

  });

});

/* ================= BUTTON ANIMATION ================= */

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

    btn.style.transition =
    "0.3s ease";

  });

  btn.addEventListener(
  "mouseleave",
  () => {

    btn.style.transform =
    "translateY(0px)";

  });

});