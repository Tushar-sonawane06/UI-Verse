const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");

const pauseBtn = document.getElementById("pauseBtn");

let time = 300;

let interval;

function updateTimer(){

  let minutes = Math.floor(time / 60);

  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  timer.textContent = `${minutes}:${seconds}`;
}

startBtn.addEventListener("click", () => {

  clearInterval(interval);

  interval = setInterval(() => {

    if(time > 0){

      time--;

      updateTimer();

    }

  }, 1000);

});

pauseBtn.addEventListener("click", () => {

  clearInterval(interval);

});

updateTimer();

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const modeButtons = document.querySelectorAll(".mode-btn");
const breathText = document.getElementById("breathText");

let totalSeconds = 300;
let remainingSeconds = totalSeconds;
let interval = null;

function updateTimerDisplay() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");

  timer.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(interval);
      interval = null;
      alert("Meditation session completed ✨");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  remainingSeconds = totalSeconds;
  updateTimerDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {

    modeButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    totalSeconds = Number(button.dataset.time);
    remainingSeconds = totalSeconds;

    resetTimer();
  });
});

setInterval(() => {
  breathText.textContent =
    breathText.textContent === "Breathe In"
      ? "Breathe Out"
      : "Breathe In";
}, 4000);

updateTimerDisplay();
