const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");

playBtn.addEventListener("click", () => {

  audio.play();

});

pauseBtn.addEventListener("click", () => {

  audio.pause();

});

volumeControl.addEventListener("input", () => {

  audio.volume = volumeControl.value;

});

audio.addEventListener("timeupdate", () => {

  progressBar.value =
    (audio.currentTime / audio.duration) * 100 || 0;

});

progressBar.addEventListener("input", () => {

  audio.currentTime =
    (progressBar.value / 100) * audio.duration;

});
const cards = document.querySelectorAll(".music-card");

cards.forEach(card => {

  const audio = card.querySelector(".audio");
  const playBtn = card.querySelector(".play-btn");
  const pauseBtn = card.querySelector(".pause-btn");
  const progress = card.querySelector(".progress");
  const volume = card.querySelector(".volume");

  playBtn.addEventListener("click", () => {

    document.querySelectorAll(".audio").forEach(a => {
      if(a !== audio){
        a.pause();
        a.closest(".music-card")
         .classList.remove("playing");
      }
    });

    audio.play();
    card.classList.add("playing");
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
    card.classList.remove("playing");
  });

  audio.addEventListener("timeupdate", () => {

    const percent =
      (audio.currentTime / audio.duration) * 100;

    progress.value = percent || 0;
  });

  progress.addEventListener("input", () => {

    audio.currentTime =
      (progress.value / 100) *
      audio.duration;
  });

  volume.addEventListener("input", () => {
    audio.volume = volume.value;
  });

  audio.addEventListener("ended", () => {
    card.classList.remove("playing");
  });

});
const cards =
document.querySelectorAll(".music-card");

cards.forEach(card=>{

  const audio =
  card.querySelector(".audio");

  const playBtn =
  card.querySelector(".play-btn");

  const pauseBtn =
  card.querySelector(".pause-btn");

  const progress =
  card.querySelector(".progress");

  const volume =
  card.querySelector(".volume");

  playBtn.addEventListener("click",()=>{

    document
    .querySelectorAll(".audio")
    .forEach(song=>{

      if(song!==audio){

        song.pause();

        song.closest(".music-card")
        .classList.remove("playing");

      }

    });

    audio.play();

    card.classList.add("playing");

  });

  pauseBtn.addEventListener("click",()=>{

    audio.pause();

    card.classList.remove("playing");

  });

  audio.addEventListener(
    "timeupdate",
    ()=>{

      const percent =
      (audio.currentTime /
      audio.duration) * 100;

      progress.value =
      percent || 0;

    }
  );

  progress.addEventListener(
    "input",
    ()=>{

      audio.currentTime =
      (progress.value / 100)
      * audio.duration;

    }
  );

  volume.addEventListener(
    "input",
    ()=>{

      audio.volume =
      volume.value;

    }
  );

  audio.addEventListener(
    "ended",
    ()=>{

      card.classList.remove(
      "playing");

    }
  );

});
const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("light-theme");

  themeBtn.textContent =
  document.body.classList.contains(
  "light-theme"
  ) ? "☀️" : "🌙";

});