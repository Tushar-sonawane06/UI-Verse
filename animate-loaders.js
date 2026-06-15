const loader = document.querySelector(".loader");
const button = document.getElementById("toggleBtn");
const loadingText = document.getElementById("loadingText");


let isRunning = true;

button.addEventListener("click", () => {
  isRunning = !isRunning;

  if (isRunning) {
    loader.classList.remove("paused");
    button.textContent = "Stop Loader";
    loadingText.textContent = "Loading...";
  } else {
    loader.classList.add("paused");
    button.textContent = "Start Loader";
    loadingText.textContent = "Paused";
  }
});