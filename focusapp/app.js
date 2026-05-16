const timer =
  document.getElementById("timer");

const startBtn =
  document.getElementById("startBtn");

const resetBtn =
  document.getElementById("resetBtn");

let totalSeconds = 1500;
let interval = null;

function updateTimer(){

  let minutes =
    Math.floor(totalSeconds / 60);

  let seconds =
    totalSeconds % 60;

  minutes =
    minutes < 10 ? "0" + minutes : minutes;

  seconds =
    seconds < 10 ? "0" + seconds : seconds;

  timer.textContent =
    `${minutes}:${seconds}`;
}

startBtn.addEventListener("click", () => {

  if(interval){
    return;
  }

  interval = setInterval(() => {

    if(totalSeconds > 0){

      totalSeconds--;

      updateTimer();
    }
    else{

      clearInterval(interval);
    }

  }, 1000);

});

resetBtn.addEventListener("click", () => {

  clearInterval(interval);

  interval = null;

  totalSeconds = 1500;

  updateTimer();

});