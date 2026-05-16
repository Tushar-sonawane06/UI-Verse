const form = document.querySelector(".login-form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message.textContent = "Login Successful";
});