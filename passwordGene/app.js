const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const lengthValue = document.getElementById("lengthValue");
const lengthSlider = document.getElementById("length");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
  if (passwordField.value === "") {
    alert("Please generate a password first");
    return;
  }
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied!");
});