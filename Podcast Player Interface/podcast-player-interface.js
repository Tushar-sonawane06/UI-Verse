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
      "🎙 Searching Podcasts: " +
      searchInput.value
    );

  }

});

/* PLAY BUTTON */

const playBtn =
document.querySelector(
".play-btn"
);

playBtn.addEventListener(
"click",
() => {

  alert(
    "▶ Playing Podcast Episode..."
  );

});

/* SAVE BUTTON */

const saveBtn =
document.querySelector(
".save-btn"
);

saveBtn.addEventListener(
"click",
() => {

  alert(
    "🔖 Podcast Saved!"
  );

});

/* LISTEN BUTTONS */

const listenBtns =
document.querySelectorAll(
".listen-btn"
);

listenBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎧 Opening Podcast Episode..."
    );

  });

});

/* PLAYER CONTROL */

const mainPlay =
document.querySelector(
".main-play"
);

let playing = false;

mainPlay.addEventListener(
"click",
() => {

  const icon =
  mainPlay.querySelector("i");

  playing = !playing;

  if(playing){

    icon.className =
    "fa-solid fa-pause";

  }

  else{

    icon.className =
    "fa-solid fa-play";

  }

});

/* CARD HOVER EFFECT */

const cards =
document.querySelectorAll(
".episode-card"
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

const playBtn = document.querySelector(".main-play");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  playBtn.innerHTML = isPlaying
    ? '<i class="fa-solid fa-pause"></i>'
    : '<i class="fa-solid fa-play"></i>';
});

// Progress animation demo
const progress = document.querySelector(".progress");

setInterval(() => {
  let width = parseFloat(progress.style.width) || 30;
  if (isPlaying && width < 100) {
    progress.style.width = (width + 0.5) + "%";
  }
}, 500);
