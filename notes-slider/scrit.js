const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");

let notes = [];

function renderNotes(filteredNotes = notes) {
  notesContainer.innerHTML = "";

  filteredNotes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    noteDiv.innerHTML = `
      <span>${note}</span>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    notesContainer.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

addBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();

  if (noteText !== "") {
    notes.push(noteText);
    renderNotes();
    noteInput.value = "";
  }
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = notes.filter(note =>
    note.toLowerCase().includes(searchValue)
  );

  renderNotes(filtered);
});