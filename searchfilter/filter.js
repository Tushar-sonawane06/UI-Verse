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

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

searchInput.addEventListener("input", () => {

  const value = searchInput.value.toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {

    const text = card.textContent.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }

  });

  resultCount.textContent =
    `${visibleCount} Result${visibleCount !== 1 ? "s" : ""}`;

  emptyState.hidden = visibleCount !== 0;

});