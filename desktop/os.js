const clock =
  document.getElementById("clock");

function updateClock(){

  const now = new Date();

  let hours =
    now.getHours();

  let minutes =
    now.getMinutes();

  hours =
    hours < 10 ? "0" + hours : hours;

  minutes =
    minutes < 10 ? "0" + minutes : minutes;

  clock.textContent =
    `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);

updateClock();