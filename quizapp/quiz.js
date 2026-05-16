const optionButtons =
  document.querySelectorAll(".option-btn");

const scoreElement =
  document.getElementById("score");

let score = 0;

optionButtons.forEach(button => {

  button.addEventListener("click", () => {

    optionButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    if(button.textContent ===
      "Hyper Text Markup Language"){

      score = 1;
    }
    else{

      score = 0;
    }

    scoreElement.textContent = score;

  });

});

document.getElementById("nextBtn")
.addEventListener("click", () => {

  if (window.UIVERSE_DEBUG) alert("Next question feature can be extended.");

});