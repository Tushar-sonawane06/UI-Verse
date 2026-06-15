
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Active menu highlight
const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});

// Fake notification animation
const notificationBtn = document.querySelector(".notification-btn");

setInterval(() => {
  notificationBtn.classList.toggle("pulse");
}, 2000);

