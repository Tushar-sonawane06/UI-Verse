/* ================= BOOK BUTTON ================= */

const bookButtons =
document.querySelectorAll(
".destination-footer button"
);

bookButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const original =
    btn.innerText;

    btn.innerText =
    "Booked ✓";

    btn.style.opacity =
    "0.8";

    setTimeout(() => {

      btn.innerText =
      original;

      btn.style.opacity =
      "1";

    },2500);

  });

});

/* ================= HERO BUTTON ================= */

const heroBtn =
document.querySelector(
".primary-btn"
);

heroBtn.addEventListener(
"click",
() => {

  heroBtn.innerHTML =
  `<i class="fa-solid fa-check"></i>
   Trip Added`;

  setTimeout(() => {

    heroBtn.innerHTML =
    `<i class="fa-solid fa-plane"></i>
     Start Planning`;

  },3000);

});

/* ================= CARD HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".destination-card"
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
    rgba(37,99,235,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* ================= SEARCH ================= */

const search =
document.querySelector(
".search-box input"
);

search.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "Searching for: " +
      search.value
    );

  }

});