const saveBtn =
  document.getElementById("saveBtn");

const clipboardInput =
  document.getElementById("clipboardInput");

const clipboardList =
  document.getElementById("clipboardList");

if (!saveBtn || !clipboardInput || !clipboardList) {
  // Page does not include the clipboard widget.
} else {
  saveBtn.addEventListener("click", () => {

  const text =
    clipboardInput.value.trim();

  if(text === ""){
    return;
  }

  const card =
    document.createElement("div");

  card.classList.add("clipboard-card");

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  const buttons = document.createElement("div");
  buttons.className = "card-buttons";

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.type = "button";
  copyBtn.textContent = "Copy";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";

  buttons.appendChild(copyBtn);
  buttons.appendChild(deleteBtn);
  card.appendChild(paragraph);
  card.appendChild(buttons);

  clipboardList.appendChild(card);

  clipboardInput.value = "";

  copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(text);

    copyBtn.textContent = "Copied";

  });

    deleteBtn.addEventListener("click", () => {

      card.remove();

    });

  });
}