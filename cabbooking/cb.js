const rideCards = document.querySelectorAll(".ride-card");

rideCards.forEach(card => {

  card.addEventListener("click", () => {

    rideCards.forEach(c => c.classList.remove("active"));

    card.classList.add("active");

  });

});

function bookRide(){
  alert("Ride Booked Successfully!");
}