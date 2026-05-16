const habitList = document.getElementById("habitList");

function addHabit(){

  const input = document.getElementById("habitInput");
  const habitText = input.value.trim();

  if(habitText === ""){
    alert("Please enter a habit");
    return;
  }

  const habitCard = document.createElement("div");
  habitCard.classList.add("habit-card");

  habitCard.innerHTML = `
    <span>${habitText}</span>
    <button onclick="markDone(this)">Done</button>
  `;

  habitList.appendChild(habitCard);

  input.value = "";
}

function markDone(button){
  button.innerText = "Completed";
  button.style.background = "#2563eb";
}