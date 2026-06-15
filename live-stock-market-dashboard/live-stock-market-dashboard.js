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
      "📈 Searching Stocks: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const tradeBtn =
document.querySelector(
".trade-btn"
);

const watchBtn =
document.querySelector(
".watch-btn"
);

tradeBtn.addEventListener(
"click",
() => {

  alert(
    "💹 Opening Trading Panel..."
  );

});

watchBtn.addEventListener(
"click",
() => {

  alert(
    "⭐ Opening Watchlist..."
  );

});

/* BUY BUTTONS */

const buyBtns =
document.querySelectorAll(
".buy-btn"
);

buyBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "💰 Redirecting To Buy Stocks..."
    );

  });

});

/* INVEST MORE */

const investBtn =
document.querySelector(
".portfolio-card button"
);

investBtn.addEventListener(
"click",
() => {

  alert(
    "🚀 Opening Investment Options..."
  );

});

/* SIDEBAR ACTIVE */

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

/* STOCK ROW HOVER */

const rows =
document.querySelectorAll(
".table-row"
);

rows.forEach(row => {

  row.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    row.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    row.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(139,92,246,0.25),
    rgba(255,255,255,0.04))`;

  });

  row.addEventListener(
  "mouseleave",
  () => {

    row.style.background =
    "rgba(255,255,255,0.04)";

  });

});
setInterval(() => {
  document.querySelectorAll(".row span")[1]?.classList.add("pulse");
}, 3000);

console.debug("TradePulse UI Enhanced Loaded");
