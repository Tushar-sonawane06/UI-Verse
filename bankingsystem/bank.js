const actionButtons =
  document.querySelectorAll(".quick-actions button");

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    if (window.UIVERSE_DEBUG) alert(`${button.textContent} feature clicked`);

  });

});