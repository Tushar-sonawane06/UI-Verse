const batteryLevel =
  document.getElementById("batteryLevel");

const batteryPercentage =
  document.getElementById("batteryPercentage");

const batteryStatus =
  document.getElementById("batteryStatus");

const toggleBtn =
  document.getElementById("toggleBtn");

let charging = true;

if (!batteryLevel || !batteryPercentage || !batteryStatus || !toggleBtn) {
  // Page does not include the battery widget.
} else {
  toggleBtn.addEventListener("click", () => {

    charging = !charging;

    if(charging){

      batteryLevel.style.width = "80%";

      batteryLevel.style.background =
        "#22c55e";

      batteryPercentage.textContent =
        "80%";

      batteryStatus.textContent =
        "Charging";
    }
    else{

      batteryLevel.style.width = "30%";

      batteryLevel.style.background =
        "#ef4444";

      batteryPercentage.textContent =
        "30%";

      batteryStatus.textContent =
        "Low Battery";
    }

  });
}