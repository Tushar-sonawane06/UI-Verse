// script.js

const temperature = document.getElementById("temperature");

let temp = 28;

setInterval(() => {

  temp = Math.floor(Math.random() * 8) + 22;

  temperature.textContent = `${temp}°C`;

}, 4000);