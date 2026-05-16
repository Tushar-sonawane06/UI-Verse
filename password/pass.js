const password =
  document.getElementById("password");

const strengthFill =
  document.getElementById("strengthFill");

const strengthText =
  document.getElementById("strengthText");

const toggleBtn =
  document.getElementById("toggleBtn");

password.addEventListener("input", () => {

  const value = password.value;

  let strength = 0;

  if(value.length >= 6){
    strength++;
  }

  if(/[A-Z]/.test(value)){
    strength++;
  }

  if(/[0-9]/.test(value)){
    strength++;
  }

  if(/[@$!%*?&]/.test(value)){
    strength++;
  }

  if(strength <= 1){

    strengthFill.style.width = "25%";

    strengthFill.style.background =
      "#ef4444";

    strengthText.textContent =
      "Weak Password";
  }
  else if(strength <= 3){

    strengthFill.style.width = "65%";

    strengthFill.style.background =
      "#facc15";

    strengthText.textContent =
      "Medium Password";
  }
  else{

    strengthFill.style.width = "100%";

    strengthFill.style.background =
      "#22c55e";

    strengthText.textContent =
      "Strong Password";
  }

});

toggleBtn.addEventListener("click", () => {

  if(password.type === "password"){

    password.type = "text";

    toggleBtn.textContent = "Hide";
  }
  else{

    password.type = "password";

    toggleBtn.textContent = "Show";
  }

});