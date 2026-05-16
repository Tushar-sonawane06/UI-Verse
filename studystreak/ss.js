const markBtn =
  document.getElementById("markBtn");

const message =
  document.getElementById("message");

markBtn.addEventListener("click", () => {

  message.textContent =
    "Today's study session marked successfully!";

});