const consultButtons = document.querySelectorAll(".doctor-footer button");

consultButtons.forEach((button) => {

  button.addEventListener("click", () => {

    button.innerText = "Booked ✓";
    button.style.background = "#16a34a";

  });

});

const appointmentBtn = document.querySelector(".primary-btn");

appointmentBtn.addEventListener("click", () => {

  alert("Appointment booking page opened!");

});

const consultButtons = document.querySelectorAll(".doctor-bottom button");

consultButtons.forEach((button) => {

  button.addEventListener("click", () => {

    button.innerText = "Booked ✓";

    button.style.background =
      "linear-gradient(135deg,#16a34a,#22c55e)";

  });

});

const notificationBtn =
  document.querySelector(".notification");

notificationBtn.addEventListener("click", () => {

  alert("You have 3 new patient notifications.");

});

const primaryBtn =
  document.querySelector(".primary-btn");

primaryBtn.addEventListener("click", () => {

  alert("Redirecting to appointment booking.");

});