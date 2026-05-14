const actionButtons =
  document.querySelectorAll(".quick-actions button");

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert(`${button.textContent} feature clicked`);

  });

});