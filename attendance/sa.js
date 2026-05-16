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