const timer = document.getElementById("timer");

let time = 1800;

function updateTimer(){

  let minutes = Math.floor(time / 60);

  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  timer.textContent = `${minutes}:${seconds}`;

  if(time > 0){
    time--;
  }
}

setInterval(updateTimer, 1000);

updateTimer();

const navButtons =
  document.querySelectorAll(".question-nav button");

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    navButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

  });

});