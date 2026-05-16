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
      "🎵 Searching for: " +
      searchInput.value
    );

  }

});

/* ================= NOTIFICATIONS ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 5 new studio notifications."
  );

});

/* ================= PLAY BUTTON ================= */

const playButtons =
document.querySelectorAll(
".play-btn"
);

playButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    '<i class="fa-solid fa-pause"></i>';

    setTimeout(() => {

      btn.innerHTML =
      '<i class="fa-solid fa-play"></i>';

    },2000);

  });

});

/* ================= BUTTONS ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "🎼 New music project created."
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
    "🎧 Opening premium sample library."
  );

});

/* ================= SLIDERS ================= */

const sliders =
document.querySelectorAll(
".slider"
);

sliders.forEach(slider => {

  slider.addEventListener(
  "input",
  () => {

    slider.nextElementSibling.innerHTML =
    `Volume ${slider.value}%`;

  });

});