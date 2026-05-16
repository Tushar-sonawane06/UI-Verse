const saveBtn =
  document.getElementById("saveBtn");

const journalInput =
  document.getElementById("journalInput");

const entriesList =
  document.getElementById("entriesList");

const moodButtons =
  document.querySelectorAll(".mood-btn");

moodButtons.forEach(button => {

  button.addEventListener("click", () => {

    moodButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

  });

});

saveBtn.addEventListener("click", () => {

  const text = journalInput.value.trim();

  if(text === ""){
    return;
  }

  const entry = document.createElement("div");

  entry.classList.add("entry");

  entry.textContent = text;

  entriesList.prepend(entry);

  journalInput.value = "";

});