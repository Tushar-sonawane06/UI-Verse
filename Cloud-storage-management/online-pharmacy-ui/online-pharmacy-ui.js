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
      "🔍 Searching medicine: " +
      searchInput.value
    );

  }

});

/* CART */

const cartBtn =
document.querySelector(
".cart-btn"
);

cartBtn.addEventListener(
"click",
() => {

  alert(
    "🛒 Opening Shopping Cart..."
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
    "📄 Upload Prescription Started..."
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
    "💊 Opening Medicine Catalog..."
  );

});

/* PROFILE BUTTON */

const profileBtn =
document.querySelector(
".profile-card button"
);

profileBtn.addEventListener(
"click",
() => {

  alert(
    "👤 Opening User Account..."
  );

});

/* BUY BUTTONS */

const buyButtons =
document.querySelectorAll(
".buy-btn"
);

buyButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "✅ Medicine Added to Cart!"
    );

  });

});

/* CARD GLOW EFFECT */

const medicineCards =
document.querySelectorAll(
".medicine-card"
);

medicineCards.forEach(card => {

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

/* ORDER STATUS */

const orderStatus =
document.querySelectorAll(
".order-status"
);

orderStatus.forEach(status => {

  status.addEventListener(
  "click",
  () => {

    alert(
      "📦 Order Status: " +
      status.innerText
    );

  });

});