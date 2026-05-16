const statusText = document.getElementById("status");
const scanBtn = document.getElementById("scanBtn");

scanBtn.addEventListener("click", () => {
  statusText.classList.remove("success", "failed");
  statusText.textContent = "Scanning...";

  setTimeout(() => {
    const success = Math.random() > 0.3;

    if (success) {
      statusText.textContent = "Access Granted";
      statusText.classList.add("success");
    } else {
      statusText.textContent = "Access Denied";
      statusText.classList.add("failed");
    }
  }, 3000);
});