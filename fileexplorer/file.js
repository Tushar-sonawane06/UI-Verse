const sidebarItems = document.querySelectorAll(".sidebar li");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {

    sidebarItems.forEach(li => {
      li.classList.remove("active");
    });

    item.classList.add("active");
  });
});