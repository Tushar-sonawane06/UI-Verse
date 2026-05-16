/* ================= PLAY BUTTONS ================= */

const playButtons =
document.querySelectorAll(
".card-play"
);

playButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    `<i class="fa-solid fa-pause"></i>`;

    setTimeout(() => {

      btn.innerHTML =
      `<i class="fa-solid fa-play"></i>`;

    },2000);

  });

});

/* ================= MAIN PLAYER ================= */

const mainPlay =
document.querySelector(
".main-play"
);

let isPlaying = false;

mainPlay.addEventListener(
"click",
() => {

  isPlaying = !isPlaying;

  mainPlay.innerHTML =
  isPlaying
  ?
  `<i class="fa-solid fa-pause"></i>`
  :
  `<i class="fa-solid fa-play"></i>`;

});

/* ================= PROGRESS BAR ================= */

const progress =
document.querySelector(
".progress"
);

let width = 40;

setInterval(() => {

  if(isPlaying){

    width += 0.3;

    if(width >= 100){

      width = 0;

    }

    progress.style.width =
    width + "%";

  }

},100);

/* ================= PLAYLIST ACTIVE ================= */

const playlistItems =
document.querySelectorAll(
".playlist-section li"
);

playlistItems.forEach(item => {

  item.addEventListener(
  "click",
  () => {

    playlistItems.forEach(i => {

      i.style.color =
      "#94a3b8";

    });

    item.style.color =
    "white";

  });

});