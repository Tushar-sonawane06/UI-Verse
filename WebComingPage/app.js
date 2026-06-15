// Get seconds, minutes, hours & days elements
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const days = document.querySelector(".days");

// Set defined values
let defSeconds = 12;
let defMinutes = 7;
let defHours = 3;
let defDays = 29;

// TimeFunction for calculating remaining time
const timeFunction = setInterval(() => {
  defSeconds--;
  if (defSeconds == 0) {
    defMinutes--;
    defSeconds = 60;
  }
  if (defMinutes == 0) {
    defHours--;
    defMinutes = 60;
  }
  if (defHours == 0) {
    defDays--;
    defHours = 24;
  }

  // If days becomes 0
  if (defDays == 0) {
    clearInterval(timeFunction);
  }
  // Set values of the elements
  seconds.innerHTML = defSeconds < 10 ? `0${defSeconds}` : defSeconds;
  minutes.innerHTML = defMinutes < 10 ? `0${defMinutes}` : defMinutes;
  hours.innerHTML = defHours < 10 ? `0${defHours}` : defHours;
  days.innerHTML = defDays < 10 ? `0${defDays}` : defDays;
}, 1000); // 1000ms = 1s