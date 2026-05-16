const recordBtn =
  document.getElementById("recordBtn");

const stopBtn =
  document.getElementById("stopBtn");

const timer =
  document.getElementById("timer");

let seconds = 0;
let interval = null;

recordBtn.addEventListener("click", () => {

  if(interval !== null){
    return;
  }

  interval = setInterval(() => {

    seconds++;

    let mins =
      Math.floor(seconds / 60);

    let secs =
      seconds % 60;

    mins =
      mins < 10 ? "0" + mins : mins;

    secs =
      secs < 10 ? "0" + secs : secs;

    timer.textContent =
      `${mins}:${secs}`;

  }, 1000);

});

stopBtn.addEventListener("click", () => {

  clearInterval(interval);

  interval = null;

});