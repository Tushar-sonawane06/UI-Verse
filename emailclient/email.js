const emailItems = document.querySelectorAll(".email-item");

emailItems.forEach(item => {

  item.addEventListener("click", () => {

    emailItems.forEach(email => {
      email.classList.remove("active-email");
    });

    item.classList.add("active-email");

  });

});