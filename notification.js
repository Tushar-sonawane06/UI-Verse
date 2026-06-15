/* =====================================================
FILTER BUTTONS
===================================================== */

const filterBtns =
  document.querySelectorAll(
    ".filter-btn"
  );

filterBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      filterBtns.forEach(b=>
        b.classList.remove("active")
      );

      btn.classList.add("active");

    }
  );

});

/* =====================================================
MARK AS READ
===================================================== */


document.querySelectorAll(".mark-read").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".activity-item").classList.remove("unread");
    btn.textContent = "Done";
    btn.disabled = true;
    updateNotificationCount();
  });
});



function updateCounter() {
  const unread = document.querySelectorAll(
    ".activity-item.unread"
  ).length;

  document.getElementById("counter").textContent = unread;
}

updateCounter();

document.querySelectorAll(".mark-read")
.forEach(button => {

  button.addEventListener("click", () => {

    const item = button.closest(".activity-item");

    item.classList.remove("unread");

    button.textContent = "Done";
    button.disabled = true;

    updateCounter();

  });

});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  document.querySelectorAll(".notification-card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(value)
        ? ""
        : "none";
  });
});

const toastContainer =
  document.getElementById("toastContainer");

document.querySelectorAll(".toast-btn")
  .forEach(button => {
    button.addEventListener("click", () => {

      const toast = document.createElement("div");

      toast.className = "toast";

      toast.innerHTML = `
        <i class="fa-solid fa-bell"></i>
        ${button.dataset.toast}
      `;

      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("show");
      }, 50);

      setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
          toast.remove();
        }, 300);

      }, 3000);

    });
});

function subscribe() {

  const email =
    document.querySelector(
      ".newsletter-form input"
    ).value;

  if (!email.trim()) {
    alert("Please enter an email address.");
    return;
  }

  alert("Subscribed successfully!");
}

const markBtns =
  document.querySelectorAll(
    ".mark-read"
  );

const counter =
  document.getElementById(
    "counter"
  );

let count =
  parseInt(counter.innerText);

markBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      const item =
        btn.parentElement;

      if(
        item.classList.contains(
          "unread"
        )
      ){

        item.classList.remove(
          "unread"
        );

        count--;

        counter.innerText =
          count;

        btn.innerText =
          "Read";

        btn.style.opacity = ".6";

      }

    }
  );

});

/* =====================================================
TOASTS
===================================================== */

const toastBtns =
  document.querySelectorAll(
    ".toast-btn"
  );

const toastContainer =
  document.getElementById(
    "toastContainer"
  );

toastBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      createToast(btn);

    }
  );

});

function createToast(btn){

  const toast =
    document.createElement("div");

  toast.classList.add("toast");

  if(
    btn.classList.contains(
      "success-btn"
    )
  ){

    toast.classList.add("success");

  }else if(
    btn.classList.contains(
      "warning-btn"
    )
  ){

    toast.classList.add("warning");

  }else{

    toast.classList.add("error");

  }

  toast.innerText =
    btn.dataset.toast;

  toastContainer.appendChild(
    toast
  );

  setTimeout(()=>{

    toast.remove();

  },3000);

}

/* =====================================================
SEARCH
===================================================== */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const cards =
  document.querySelectorAll(
    ".notification-card"
  );

searchInput.addEventListener(
  "input",
  e=>{

    const value =
      e.target.value.toLowerCase();

    cards.forEach(card=>{

      const text =
        card.innerText.toLowerCase();

      card.style.display =
        text.includes(value)
        ? "block"
        : "none";

    });

  }
);

/* =====================================================
NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("open");
}
