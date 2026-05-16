const repoCards = document.querySelectorAll(".repo-card");

repoCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 20px rgba(88,166,255,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});