// script.js

const heartRate = document.getElementById("heartRate");
const alertBox = document.getElementById("alertBox");

let bpm = 78;

setInterval(() => {

  bpm = Math.floor(Math.random() * 20) + 70;

  heartRate.textContent = `${bpm} BPM`;

  if(bpm > 85){

    alertBox.textContent =
      "Emergency Alert: High heart rate detected!";

  } else {

    alertBox.textContent =
      "No emergency alerts.";

  }

}, 3000);