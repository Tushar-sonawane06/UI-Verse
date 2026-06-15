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

// os.js

function updateClock() {

  const clock = document.getElementById("clock");

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  clock.textContent = `${hours}:${minutes}`;
}

updateClock();

setInterval(updateClock, 1000);

/* Simple Window Animation */

const windowBox = document.querySelector(".window");

windowBox.animate(
  [
    {
      opacity:0,
      transform:"translateX(-50%) translateY(30px)"
    },
    {
      opacity:1,
      transform:"translateX(-50%) translateY(0)"
    }
  ],
  {
    duration:700,
    easing:"ease-out"
  }
);

/* Desktop Icon Interaction */

const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {

  icon.addEventListener("click", () => {

    icons.forEach(i => i.classList.remove("active"));

    icon.classList.add("active");

  });

});