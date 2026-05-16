const favButtons =
  document.querySelectorAll(".fav-btn");

favButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("active");

    if(button.classList.contains("active")){
      button.textContent = "♥";
    } else {
      button.textContent = "♡";
    }

  });

});