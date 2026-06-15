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

function bookRide() {
  alert("🚖 Ride Booked Successfully!");
}

function selectRide(element) {
  let cards = document.querySelectorAll(".ride-card");
  cards.forEach(card => card.classList.remove("active"));
  element.classList.add("active");
}

function bookRide() {
  alert("🚖 Ride Confirmed! Driver is on the way.");
}

function selectRide(el) {
  document.querySelectorAll(".ride").forEach(r => r.classList.remove("active"));
  el.classList.add("active");
}

const ridesData = [
  { name: "Mini", price: 120, eta: 5 },
  { name: "Sedan", price: 220, eta: 7 },
  { name: "SUV", price: 350, eta: 10 }
];

let selectedRide = 0;

// Render rides dynamically
const ridesContainer = document.getElementById("rides");

function renderRides() {
  ridesContainer.innerHTML = "";

  ridesData.forEach((ride, index) => {
    const div = document.createElement("div");
    div.className = "ride" + (index === selectedRide ? " active" : "");

    div.innerHTML = `
      <h4>${ride.name}</h4>
      <p>₹${ride.price}</p>
      <small>${ride.name === "Mini" ? "Budget" : ride.name === "Sedan" ? "Comfort" : "Premium"}</small>
    `;

    div.onclick = () => selectRide(index);
    ridesContainer.appendChild(div);
  });

  updateFare();
}

function selectRide(index) {
  selectedRide = index;
  renderRides();
}

function updateFare() {
  document.getElementById("fare").innerText =
    "₹" + ridesData[selectedRide].price;

  document.getElementById("eta").innerText =
    ridesData[selectedRide].eta;
}

function bookRide() {
  const pickup = document.getElementById("pickup").value.trim();
  const drop = document.getElementById("drop").value.trim();

  if (!pickup || !drop) {
    showToast("Please enter pickup and destination!");
    return;
  }

  const ride = ridesData[selectedRide];

  showToast(
    `🚖 Ride booked: ${ride.name} | ₹${ride.price} | ETA ${ride.eta} min`
  );
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = "";
  }, 3000);
}

renderRides();