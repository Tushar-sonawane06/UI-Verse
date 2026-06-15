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

const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save notes to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Render notes
function renderNotes(filter = "") {
  notesContainer.innerHTML = "";

  const filtered = notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    notesContainer.innerHTML = `<p style="opacity:0.5;">No notes found</p>`;
    return;
  }

  filtered.forEach((note, index) => {
    const noteEl = document.createElement("div");
    noteEl.classList.add("note");

    noteEl.innerHTML = `
      <span>${note.text}</span>
      <small class="delete">🗑</small>
    `;

    // Delete note
    noteEl.querySelector(".delete").addEventListener("click", (e) => {
      e.stopPropagation();
      notes.splice(index, 1);
      saveNotes();
      renderNotes(searchInput.value);
    });

    // Click effect (optional future expansion)
    noteEl.addEventListener("click", () => {
      noteInput.value = note.text;
    });

    notesContainer.appendChild(noteEl);
  });
}

// Add note
addBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();

  if (!text) return;

  notes.unshift({
    text,
    time: new Date().toLocaleString()
  });

  noteInput.value = "";
  saveNotes();
  renderNotes(searchInput.value);
});

// Enter key support
noteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Search notes
searchInput.addEventListener("input", (e) => {
  renderNotes(e.target.value);
});

// Initial render
renderNotes();