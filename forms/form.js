const steps = document.querySelectorAll(".form-step");
const indicators = document.querySelectorAll(".step");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentStep = 0;

function updateForm(){

  steps.forEach(step => {
    step.classList.remove("active");
  });

  indicators.forEach(indicator => {
    indicator.classList.remove("active");
  });

  steps[currentStep].classList.add("active");

  for(let i = 0; i <= currentStep; i++){
    indicators[i].classList.add("active");
  }

  prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";

  if(currentStep === steps.length - 1){
    nextBtn.textContent = "Submit";
  }
  else{
    nextBtn.textContent = "Next";
  }
}

nextBtn.addEventListener("click", () => {

  if(currentStep < steps.length - 1){
    currentStep++;
    updateForm();
  }
});

prevBtn.addEventListener("click", () => {

  if(currentStep > 0){
    currentStep--;
    updateForm();
  }
});

updateForm();