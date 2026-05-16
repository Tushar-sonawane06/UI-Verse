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