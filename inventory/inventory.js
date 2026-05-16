const searchInput =
  document.getElementById("searchInput");

const productCards =
  document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

  const value =
    searchInput.value.toLowerCase();

  productCards.forEach(card => {

    const title =
      card.querySelector("h2")
      .textContent
      .toLowerCase();

    if(title.includes(value)){

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});

const manageButtons =
  document.querySelectorAll(".manage-btn");

manageButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.textContent =
      "Updated";

    button.style.background =
      "#22c55e";

  });

});