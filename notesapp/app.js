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

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.textContent = '×';

  const p = document.createElement('p');
  p.textContent = text;

  delBtn.addEventListener('click', () => noteCard.remove());

  noteCard.appendChild(delBtn);
  noteCard.appendChild(p);

  notesGrid.appendChild(noteCard);

  noteText.value = "";
}