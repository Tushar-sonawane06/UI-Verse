const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {

  card.addEventListener("click", () => {

    videoCards.forEach(video => {
      video.style.border = "none";
    });

    card.style.border = "2px solid #3b82f6";

  });

});

// video.js

const cards = document.querySelectorAll(".video-card");

cards.forEach((card) => {

  card.addEventListener("click", () => {

    const title = card.querySelector("h3").innerText;

    document.querySelector(".video-details h1").innerText = title;

    document.querySelector(".video-description").innerText =
      "Now playing: " + title + ". Enjoy this premium UI tutorial experience with smooth animations and responsive layouts.";

  });

});

const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {

  playBtn.innerHTML = "❚❚";

  setTimeout(() => {

    playBtn.innerHTML = "▶";

  }, 3000);

});