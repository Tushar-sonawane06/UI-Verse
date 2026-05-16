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
      "🩸 Searching Blood Group: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const donorBtn =
document.querySelector(
".donor-btn"
);

const requestBtn =
document.querySelector(
".request-btn"
);

donorBtn.addEventListener(
"click",
() => {

  alert(
    "❤️ Finding Nearby Donors..."
  );

});

requestBtn.addEventListener(
"click",
() => {

  alert(
    "🚨 Emergency Blood Request Sent!"
  );

});

/* DONOR BUTTONS */

const cardBtns =
document.querySelectorAll(
".card-btn"
);

cardBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📞 Connecting To Donor..."
    );

  });

});

/* EMERGENCY CARD */

const emergencyBtn =
document.querySelector(
".emergency-card button"
);

emergencyBtn.addEventListener(
"click",
() => {

  alert(
    "🚑 Opening Emergency Blood Request..."
  );

});

/* COMMUNITY BUTTON */

const communityBtn =
document.querySelector(
".community-card button"
);

communityBtn.addEventListener(
"click",
() => {

  alert(
    "❤️ Appreciation Sent To Donor!"
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

/* DONOR CARD GLOW */

const cards =
document.querySelectorAll(
".donor-card"
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
    rgba(239,68,68,0.25),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});