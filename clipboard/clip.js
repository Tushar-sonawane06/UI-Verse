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

const input = document.getElementById("clipboardInput");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("clipboardList");

let clipboardData = [];

// Load from localStorage (optional persistence)
window.onload = () => {
  const saved = localStorage.getItem("clipboardData");
  if (saved) {
    clipboardData = JSON.parse(saved);
    renderList();
  }
};

// Save button click
saveBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) return;

  clipboardData.push(text);
  input.value = "";

  updateStorage();
  renderList();
});

// Render list
function renderList() {
  list.innerHTML = "";

  if (clipboardData.length === 0) {
    list.innerHTML = "<p>No clipboard items yet.</p>";
    return;
  }

  clipboardData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "clipboard-card";

    card.innerHTML = `
      <p>${item}</p>
      <div class="card-buttons">
        <button class="copy-btn">Copy</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Copy functionality
    card.querySelector(".copy-btn").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(item);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Copy failed:", err);
      }
    });

    // Delete functionality
    card.querySelector(".delete-btn").addEventListener("click", () => {
      clipboardData.splice(index, 1);
      updateStorage();
      renderList();
    });

    list.appendChild(card);
  });
}

// Save to localStorage
function updateStorage() {
  localStorage.setItem("clipboardData", JSON.stringify(clipboardData));
}

const input = document.getElementById("clipboardInput");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("clipboardList");

let items = [];

// Load saved data
window.onload = () => {
  const saved = localStorage.getItem("clipboardItems");
  if (saved) {
    items = JSON.parse(saved);
  }
  render();
};

// Save new item
saveBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  items.unshift(text); // newest on top
  input.value = "";

  updateStorage();
  render();
});

// Render UI
function render() {
  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = `<p>No clipboard items yet</p>`;
    return;
  }

  items.forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "clipboard-card";

    card.innerHTML = `
      <p>${text}</p>
      <div class="card-buttons">
        <button class="copy-btn">Copy</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // COPY
    card.querySelector(".copy-btn").addEventListener("click", async () => {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    });

    // DELETE
    card.querySelector(".delete-btn").addEventListener("click", () => {
      items.splice(index, 1);
      updateStorage();
      render();
    });

    list.appendChild(card);
  });
}

// Save to localStorage
function updateStorage() {
  localStorage.setItem("clipboardItems", JSON.stringify(items));
}