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

function updateVitals() {
  let hr = Math.floor(70 + Math.random() * 30);
  let oxygen = Math.floor(92 + Math.random() * 8);

  document.getElementById("heartRate").textContent = hr;
  document.getElementById("oxygenValue").textContent = oxygen;
  document.getElementById("oxygenFill").style.width = oxygen + "%";

  // Emergency condition
  const alertBox = document.getElementById("alertBox");

  if (hr > 100 || oxygen < 94) {
    let li = document.createElement("li");
    li.textContent = "⚠ Patient vitals abnormal detected!";
    alertBox.appendChild(li);
  }
}

setInterval(updateVitals, 3000);