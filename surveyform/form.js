const formInputs =
  document.querySelectorAll(
    "input, select, textarea"
  );

const progressBar =
  document.getElementById("progressBar");

function updateProgress(){

  let filled = 0;

  formInputs.forEach(input => {

    if(input.value.trim() !== ""){

      filled++;
    }

  });

  const progress =
    (filled / formInputs.length) * 100;

  progressBar.style.width =
    progress + "%";
}

formInputs.forEach(input => {

  input.addEventListener(
    "input",
    updateProgress
  );

});

document
.getElementById("surveyForm")
.addEventListener("submit", e => {

  e.preventDefault();

  if (window.UIVERSE_DEBUG) alert("Survey submitted successfully!");

});