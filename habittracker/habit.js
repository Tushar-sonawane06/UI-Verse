const completeButtons =
  document.querySelectorAll(".complete-btn");

completeButtons.forEach(button => {

  button.addEventListener("click", () => {

    const progress =
      button.parentElement
      .querySelector(".progress");

    progress.style.width = "100%";

    button.textContent = "Completed";

    button.disabled = true;

    button.style.background = "#22c55e";

  });

});