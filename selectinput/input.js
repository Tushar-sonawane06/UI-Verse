const selectBox = document.getElementById("selectBox");
const optionsList = document.getElementById("optionsList");
const selectedText = document.getElementById("selectedText");

const options = document.querySelectorAll(".option");

selectBox.addEventListener("click", () => {

  optionsList.classList.toggle("show");

});

options.forEach(option => {

  option.addEventListener("click", () => {

    selectedText.textContent = option.textContent;

    optionsList.classList.remove("show");

  });

});