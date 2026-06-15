const emailItems = document.querySelectorAll(".email-item");

emailItems.forEach(item => {

  
  item.addEventListener("click", () => {

    emailItems.forEach(email => {
      email.classList.remove("active-email");
    });

    item.classList.add("active-email");

  });

});

// SELECT ELEMENTS
const emailItems = document.querySelectorAll(".email-item");
const previewTitle = document.querySelector(".email-preview h2");
const previewBody = document.querySelector(".email-body");
const composeBtn = document.querySelector(".compose-btn");
const modal = document.querySelector(".compose-modal");
const closeBtn = document.querySelector(".close");

// EMAIL SWITCHING
emailItems.forEach(item => {
  item.addEventListener("click", () => {

    // remove active
    emailItems.forEach(i => i.classList.remove("active-email"));
    item.classList.add("active-email");

    // update preview
    const title = item.querySelector("h3").innerText;
    const desc = item.querySelector("p").innerText;

    previewTitle.innerText = title;
    previewBody.innerHTML = `
      <p>${desc}</p>
      <p style="margin-top:10px;">
        This is a dynamically loaded preview of the selected email.
      </p>
    `;
  });
});

// OPEN COMPOSE MODAL
composeBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// CLOSE COMPOSE MODAL
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// CLOSE ON OUTSIDE CLICK
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});