const completeBtn =
  document.getElementById("completeBtn");

const message =
  document.getElementById("message");

completeBtn.addEventListener("click", () => {

  message.textContent =
    "Workout marked as completed successfully!";

});