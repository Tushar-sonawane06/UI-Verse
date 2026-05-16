const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {

  card.addEventListener("click", () => {

    videoCards.forEach(video => {
      video.style.border = "none";
    });

    card.style.border = "2px solid #3b82f6";

  });

});