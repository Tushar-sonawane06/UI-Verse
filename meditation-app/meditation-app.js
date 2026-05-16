/* ================= SESSION PLAY ================= */

const overlays =
document.querySelectorAll(
".play-overlay"
);

overlays.forEach(overlay => {

  overlay.addEventListener(
  "click",
  () => {

    const icon =
    overlay.querySelector("i");

    icon.classList.remove(
    "fa-play"
    );

    icon.classList.add(
    "fa-pause"
    );

    setTimeout(() => {

      icon.classList.remove(
      "fa-pause"
      );

      icon.classList.add(
      "fa-play"
      );

    },2000);

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
  `<i class="fa-solid fa-pause"></i>
   Session Started`;

  setTimeout(() => {

    heroBtn.innerHTML =
    `<i class="fa-solid fa-play"></i>
     Start Session`;

  },3000);

});

/* ================= BREATH TEXT ================= */

const breathCircle =
document.querySelector(
".breath-circle"
);

let inhale = true;

setInterval(() => {

  if(inhale){

    breathCircle.innerText =
    "Inhale";

  } else {

    breathCircle.innerText =
    "Exhale";

  }

  inhale = !inhale;

},3000);

/* ================= STREAK HOVER ================= */

const streak =
document.querySelector(
".streak-card"
);

streak.addEventListener(
"mouseenter",
() => {

  streak.style.transform =
  "translateY(-8px)";

});

streak.addEventListener(
"mouseleave",
() => {

  streak.style.transform =
  "translateY(0px)";

});