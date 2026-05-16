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
      "🎵 Searching: " +
      searchInput.value
    );

  }

});

/* PLAY / PAUSE */

const playBtn =
document.querySelector(
".play-btn"
);

let playing = false;

playBtn.addEventListener(
"click",
() => {

  const icon =
  playBtn.querySelector("i");

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

/* LYRICS SYNC */

const lyrics =
document.querySelectorAll(
".lyrics-box p"
);

let current = 0;

setInterval(() => {

  lyrics.forEach(line => {

    line.classList.remove(
      "active-line"
    );

  });

  current++;

  if(current >= lyrics.length){

    current = 0;
  }

  lyrics[current].classList.add(
    "active-line"
  );

}, 2500);

/* TRACK PLAY */

const trackButtons =
document.querySelectorAll(
".listen-btn"
);

trackButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎧 Playing Selected Track..."
    );

  });

});

/* TRACK CARD GLOW */

const cards =
document.querySelectorAll(
".track-card"
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

/* SYNC BUTTON */

const syncBtn =
document.querySelector(
".sync-btn"
);

let syncOn = true;

syncBtn.addEventListener(
"click",
() => {

  syncOn = !syncOn;

  syncBtn.innerText =
  syncOn ? "Sync ON" : "Sync OFF";

});