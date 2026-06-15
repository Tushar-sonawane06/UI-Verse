// script.js

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

const form = document.getElementById("eventForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  successMessage.textContent = "Successfully Registered!";
  form.reset();
});

// FORM SUBMIT

const form = document.getElementById("eventForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

  e.preventDefault();

  message.innerText = "✅ Registration Successful!";
  form.reset();

  setTimeout(() => {
    message.innerText = "";
  }, 3000);

});


// DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    themeToggle.innerText = "☀️";
  }else{
    themeToggle.innerText = "🌙";
  }

});