const addNoteBtn = document.getElementById("addNoteBtn");
const noteText = document.getElementById("noteText");
const notesGrid = document.getElementById("notesGrid");

addNoteBtn.addEventListener("click", addNote);

function addNote(){

  const text = noteText.value.trim();

  if(text === ""){
    return;
  }

  const noteCard = document.createElement("div");

  noteCard.classList.add("note-card");

  noteCard.innerHTML = `
    <button class="delete-btn">×</button>
    <p>${text}</p>
  `;

  const deleteBtn = noteCard.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    noteCard.remove();
  });

  notesGrid.appendChild(noteCard);

  noteText.value = "";
}