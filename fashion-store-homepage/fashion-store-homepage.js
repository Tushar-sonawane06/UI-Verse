/* NAVBAR SHADOW */

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

/* SHOP NOW BUTTON */

const shopBtn =
document.querySelector(
".primary-btn"
);

shopBtn.addEventListener(
"click",
() => {

  alert(
    "🛍 Opening Fashion Collection..."
  );

});

/* EXPLORE BUTTON */

const exploreBtn =
document.querySelector(
".secondary-btn"
);

exploreBtn.addEventListener(
"click",
() => {

  alert(
    "✨ Exploring New Collection..."
  );

});

/* PRODUCT ADD BUTTONS */

const cartButtons =
document.querySelectorAll(
".cart-btn"
);

cartButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const product =
    btn.closest(".product-card")
    .querySelector("h3").innerText;

    alert(
      `🛒 ${product} added to cart!`
    );

  });

});

/* PRODUCT HOVER GLOW */

const productCards =
document.querySelectorAll(
".product-card"
);

productCards.forEach(card => {

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
    rgba(255,255,255,1),
    rgba(245,245,245,1))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "#ffffff";

  });

});

/* ICON BUTTONS */

const iconBtns =
document.querySelectorAll(
".icon-btn"
);

iconBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "✨ Feature Coming Soon!"
    );

  });

});