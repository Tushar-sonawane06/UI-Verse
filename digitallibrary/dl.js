const readButtons =
  document.querySelectorAll(".read-btn");

readButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.textContent = "Reading...";
    button.style.background = "#22c55e";

  });

});