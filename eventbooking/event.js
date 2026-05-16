const bookButtons = document.querySelectorAll(".book-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
}); 