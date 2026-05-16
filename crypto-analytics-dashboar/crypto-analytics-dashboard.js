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
      "🔍 Searching Crypto: " +
      searchInput.value
    );

  }

});

/* NOTIFICATION */

const notifyBtn =
document.querySelector(
".notify-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 3 new crypto alerts!"
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
    "💰 Redirecting to Buy Crypto..."
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
    "📈 Opening Market Overview..."
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
    "👤 Opening Portfolio Manager..."
  );

});

/* MARKET CARD EFFECT */

const marketCards =
document.querySelectorAll(
".market-card"
);

marketCards.forEach(card => {

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

/* TRANSACTION STATUS */

const transactionStatus =
document.querySelectorAll(
".transaction-status"
);

transactionStatus.forEach(status => {

  status.addEventListener(
  "click",
  () => {

    alert(
      "📊 Transaction Status: " +
      status.innerText
    );

  });

});