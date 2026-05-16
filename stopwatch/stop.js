const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

function updateTimer(){

  seconds++;

  if(seconds === 60){
    seconds = 0;
    minutes++;
  }

  if(minutes === 60){
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timer.textContent = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", () => {

  if(interval === null){
    interval = setInterval(updateTimer, 1000);
  }

});

pauseBtn.addEventListener("click", () => {

  clearInterval(interval);

  interval = null;
});

resetBtn.addEventListener("click", () => {

  clearInterval(interval);

  interval = null;

  seconds = 0;
  minutes = 0;
  hours = 0;

  timer.textContent = "00:00:00";
});