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