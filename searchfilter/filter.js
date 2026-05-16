const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

if (!searchInput) {
  // Page does not include the search filter input.
} else {
  searchInput.addEventListener("keyup", () => {

    const searchValue =
      searchInput.value.toLowerCase();

    cards.forEach(card => {

      const text =
        card.textContent.toLowerCase();

      if(text.includes(searchValue)){

        card.style.display = "block";
      }
      else{

        card.style.display = "none";
      }

    });

  });
}