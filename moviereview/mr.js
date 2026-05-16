const reviewButtons =
  document.querySelectorAll(".review-btn");

reviewButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.textContent =
      "Review Added";

    button.style.background =
      "#22c55e";

  });

});