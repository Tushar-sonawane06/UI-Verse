// =========================================================
// FILTER ACTIVE
// =========================================================

const filters =
  document.querySelectorAll(".filter-btn");

filters.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    filters.forEach((b)=>{

      b.classList.remove("active");

    });

    btn.classList.add("active");

  });

});

// =========================================================
// BOOKING BUTTON ACTIVE
// =========================================================

const bookingBtns =
  document.querySelectorAll(".booking-days button");

bookingBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    bookingBtns.forEach((b)=>{

      b.classList.remove("active-book");

    });

    btn.classList.add("active-book");

  });

});

// =========================================================
// HERO CALENDAR SWITCH
// =========================================================

const activeDay =
  document.querySelector(".active-day");

activeDay.addEventListener("click",()=>{

  activeDay.classList.toggle("pulse");

});


const modal = document.getElementById("eventModal");
const overlay = document.getElementById("eventModalOverlay");
const openBtn = document.querySelector(".floating-event-btn");
const closeBtn = document.getElementById("closeEventModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}
