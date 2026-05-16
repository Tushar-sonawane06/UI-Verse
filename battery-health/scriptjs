const batteryLevel = document.getElementById("batteryLevel");
const percentageText = document.getElementById("percentage");
const chargeBtn = document.getElementById("chargeBtn");

let battery = 75;

function updateBattery() {
  batteryLevel.style.width = battery + "%";
  percentageText.textContent = battery + "%";

  batteryLevel.classList.remove("low", "medium", "high");

  if (battery <= 30) {
    batteryLevel.classList.add("low");
  } else if (battery <= 70) {
    batteryLevel.classList.add("medium");
  } else {
    batteryLevel.classList.add("high");
  }
}

chargeBtn.addEventListener("click", () => {
  battery += 10;

  if (battery > 100) {
    battery = 0;
  }

  updateBattery();
});

updateBattery();