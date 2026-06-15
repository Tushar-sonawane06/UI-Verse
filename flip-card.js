const flipCard = document.getElementById("flipCard");
const learnBtn = document.getElementById("learnBtn");

// Toggle flip on card click
flipCard.addEventListener("click", () => {
  flipCard.classList.toggle("active");
});

// Handle button click on the back of the card
learnBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the card from immediately toggling back during this click

  alert("More frontend content coming soon!");

  // FIX: Explicitly unflip the card back to the front side after they close the alert
  flipCard.classList.remove("active");
});