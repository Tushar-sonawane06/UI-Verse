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
      "🔍 Searching Auctions: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const bidBtn =
document.querySelector(
".bid-btn"
);

const watchBtn =
document.querySelector(
".watch-btn"
);

bidBtn.addEventListener(
"click",
() => {

  alert(
    "🔨 Opening Live Bid Panel..."
  );

});

watchBtn.addEventListener(
"click",
() => {

  alert(
    "💖 Added To Watchlist!"
  );

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
      "⚡ Redirecting To Auction..."
    );

  });

});

/* ADD FUNDS */

const fundBtn =
document.querySelector(
".wallet-card button"
);

fundBtn.addEventListener(
"click",
() => {

  alert(
    "💰 Opening Wallet Funding..."
  );

});

/* GLOW EFFECT */

const cards =
document.querySelectorAll(
".auction-card"
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
    rgba(139,92,246,0.25),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* ACTIVE SIDEBAR */

const links =
document.querySelectorAll(
".sidebar-nav a"
);

links.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    links.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});