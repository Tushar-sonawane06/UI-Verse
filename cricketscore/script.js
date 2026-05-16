// script.js

const indiaScore = document.getElementById("indiaScore");

let runs = 182;

setInterval(() => {
  runs++;

  indiaScore.textContent = `${runs}/4`;

}, 5000);