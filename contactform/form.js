const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
    form.reset();
  }, 2000);
});