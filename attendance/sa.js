const searchInput =
  document.getElementById("searchInput");

const rows =
  document.querySelectorAll("#studentTable tr");

const statusButtons =
  document.querySelectorAll(".status-btn");

searchInput.addEventListener("keyup", () => {

  const value =
    searchInput.value.toLowerCase();

  rows.forEach(row => {

    const name =
      row.children[0].textContent.toLowerCase();

    row.style.display =
      name.includes(value)
        ? ""
        : "none";

  });

});

statusButtons.forEach(button => {

  button.addEventListener("click", () => {

    if(button.classList.contains("present")){

      button.classList.remove("present");

      button.classList.add("absent");

      button.textContent = "Absent";

    } else {

      button.classList.remove("absent");

      button.classList.add("present");

      button.textContent = "Present";

    }

  });

});

// sa.js

const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("#studentTable tr");
const buttons = document.querySelectorAll(".status-btn");

const presentCount = document.getElementById("presentCount");
const absentCount = document.getElementById("absentCount");


// Search Function

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  rows.forEach((row) => {

    const name = row.children[0].textContent.toLowerCase();

    row.style.display = name.includes(value)
      ? ""
      : "none";

  });

});


// Toggle Attendance Status

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    if(button.classList.contains("present")){

      button.classList.remove("present");
      button.classList.add("absent");

      button.textContent = "Absent";

    } else {

      button.classList.remove("absent");
      button.classList.add("present");

      button.textContent = "Present";

    }

    updateCounts();

  });

});


// Update Counts

function updateCounts(){

  let present = 0;
  let absent = 0;

  document.querySelectorAll(".status-btn").forEach((btn) => {

    if(btn.classList.contains("present")){
      present++;
    } else {
      absent++;
    }

  });

  presentCount.textContent = present;
  absentCount.textContent = absent;

}

updateCounts();