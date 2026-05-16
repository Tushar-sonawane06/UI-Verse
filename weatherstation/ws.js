const forecastCards =
  document.querySelectorAll(".forecast-card");

forecastCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.background =
      "rgba(96,165,250,0.2)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
      "rgba(255,255,255,0.05)";

  });

});