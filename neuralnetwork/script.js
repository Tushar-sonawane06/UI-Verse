// script.js

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

let progress = 65;

setInterval(() => {

  if(progress < 100){
    progress++;
  } else {
    progress = 65;
  }

  progressBar.style.width = progress + "%";
  progressText.textContent = progress + "%";

}, 1000);