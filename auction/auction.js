const bidBtn =
  document.getElementById("bidBtn");

const bidInput =
  document.getElementById("bidInput");

const bidAmount =
  document.getElementById("bidAmount");

const bidHistory =
  document.getElementById("bidHistory");

const timer =
  document.getElementById("timer");

let time = 60;

setInterval(() => {

  let minutes =
    Math.floor(time / 60);

  let seconds =
    time % 60;

  seconds =
    seconds < 10
      ? "0" + seconds
      : seconds;

  timer.textContent =
    `${minutes}:${seconds}`;

  if(time > 0){
    time--;
  }

}, 1000);

bidBtn.addEventListener("click", () => {

  const value =
    bidInput.value;

  if(value === ""){
    return;
  }

  bidAmount.textContent =
    `₹${value}`;

  const item =
    document.createElement("div");

  item.classList.add("history-item");

  item.textContent =
    `You bid ₹${value}`;

  bidHistory.prepend(item);

  bidInput.value = "";

});