const filter = document.getElementById("difficultyFilter");
const cards = document.querySelectorAll(".challenge-card");

filter.addEventListener("change", () => {

  const value = filter.value;

  cards.forEach(card => {

    if(value === "all"){
      card.style.display = "block";
    } else {

      if(card.dataset.level === value){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    }

  });

});