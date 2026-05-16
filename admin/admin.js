// Sidebar active link

const links = document.querySelectorAll(".sidebar-nav a");

links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});

// Dark mode toggle simulation

const themeBtn = document.querySelector(".top-btn:last-child");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

// Fake analytics animation

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {

  bar.style.animationDelay = `${index * 0.1}s`;

});

// Notification demo

const bellBtn = document.querySelector(".top-btn");

bellBtn.addEventListener("click", () => {

  if (window.UIVERSE_DEBUG) alert("You have 3 new notifications!");

});