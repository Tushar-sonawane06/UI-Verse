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

// script.js

const moodButtons = document.querySelectorAll('.mood-btn');
const saveBtn = document.getElementById('saveBtn');
const journalInput = document.getElementById('journalInput');
const entriesList = document.getElementById('entriesList');
const charCount = document.getElementById('charCount');
const totalEntries = document.getElementById('totalEntries');
const selectedMoodText = document.getElementById('selectedMood');

let selectedMood = '😊';

const moods = {
  '😊':'Happy',
  '😌':'Relaxed',
  '😔':'Sad',
  '😴':'Tired',
  '😎':'Confident'
};

moodButtons.forEach(button => {

  button.addEventListener('click', () => {

    moodButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    selectedMood = button.textContent;

    selectedMoodText.textContent = moods[selectedMood];

  });

});

moodButtons[0].classList.add('active');

journalInput.addEventListener('input', () => {

  charCount.textContent = journalInput.value.length;

});

function getEntries(){

  return JSON.parse(localStorage.getItem('journalEntries')) || [];

}

function saveEntries(entries){

  localStorage.setItem('journalEntries', JSON.stringify(entries));

}

function renderEntries(){

  const entries = getEntries();

  totalEntries.textContent = entries.length;

  if(entries.length === 0){

    entriesList.innerHTML = `
      <div class="empty-state">
        <h3>No journal entries yet</h3>
        <p>Start writing your first memory today ✨</p>
      </div>
    `;

    return;

  }

  entriesList.innerHTML = '';

  entries.reverse().forEach((entry,index) => {

    const entryCard = document.createElement('div');

    entryCard.classList.add('entry-card');

    entryCard.innerHTML = `
      <div class="entry-top">
        <div class="entry-mood">${entry.mood}</div>
        <div class="entry-date">${entry.date}</div>
      </div>

      <div class="entry-text">
        ${entry.text}
      </div>

      <button class="delete-btn" onclick="deleteEntry(${index})">
        Delete
      </button>
    `;

    entriesList.appendChild(entryCard);

  });

}

saveBtn.addEventListener('click', () => {

  const text = journalInput.value.trim();

  if(text === ''){

    alert('Please write something in your journal.');

    return;

  }

  const entries = getEntries();

  entries.push({
    mood:selectedMood,
    text:text,
    date:new Date().toLocaleString()
  });

  saveEntries(entries);

  journalInput.value = '';

  charCount.textContent = '0';

  renderEntries();

});

function deleteEntry(index){

  const entries = getEntries();

  entries.reverse();

  entries.splice(index,1);

  entries.reverse();

  saveEntries(entries);

  renderEntries();

}

renderEntries();

// script.js

const moodButtons =
  document.querySelectorAll('.mood-btn');

const journalInput =
  document.getElementById('journalInput');

const saveBtn =
  document.getElementById('saveBtn');

const entriesList =
  document.getElementById('entriesList');

const charCount =
  document.getElementById('charCount');

const totalEntries =
  document.getElementById('totalEntries');

const selectedMoodText =
  document.getElementById('selectedMoodText');

const searchInput =
  document.getElementById('searchInput');

const clearBtn =
  document.getElementById('clearBtn');

const deleteAllBtn =
  document.getElementById('deleteAllBtn');

const currentDate =
  document.getElementById('currentDate');

const quoteText =
  document.getElementById('quoteText');

const quotes = [

  "Your future is created by what you do today.",

  "Every moment matters.",

  "Small progress is still progress.",

  "Write what your heart wants to say.",

  "Memories fade, journals stay forever.",

  "A calm mind creates a happy life."

];

quoteText.textContent =
  quotes[Math.floor(Math.random() * quotes.length)];

currentDate.textContent =
  new Date().toLocaleDateString('en-US',{
    weekday:'long',
    day:'numeric',
    month:'long'
  });

let selectedMood = '😊';

const moodNames = {

  '😊':'Happy',
  '😌':'Relaxed',
  '😔':'Sad',
  '😴':'Sleepy',
  '😎':'Cool',
  '🤩':'Excited',
  '😡':'Angry',
  '🥳':'Celebrating'

};

moodButtons.forEach(button=>{

  button.addEventListener('click',()=>{

    moodButtons.forEach(btn=>{

      btn.classList.remove('active');

    });

    button.classList.add('active');

    selectedMood =
      button.textContent.trim();

    selectedMoodText.textContent =
      `${selectedMood} ${moodNames[selectedMood]}`;

  });

});
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  const text = document.getElementById("journalInput").value;
  const title = document.getElementById("entryTitle").value;
  const tags = document.getElementById("entryTags").value;
  const mood = document.querySelector(".mood-btn.active").innerText;

  if (!text.trim()) return;

  const entry = {
    id: Date.now(),
    title: title || "Untitled Entry",
    text,
    tags: tags.split(",").map(t => t.trim()),
    mood,
    date: new Date().toLocaleString()
  };

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.unshift(entry);

  localStorage.setItem("entries", JSON.stringify(entries));

  renderEntries();
});

function renderEntries() {
  const list = document.getElementById("entriesList");
  let entries = JSON.parse(localStorage.getItem("entries")) || [];

  list.innerHTML = "";

  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry-card";

    div.innerHTML = `
      <h3>${entry.title} ${entry.mood}</h3>
      <small>${entry.date}</small>
      <p>${entry.text}</p>
      <div class="tags">
        ${entry.tags.map(t => `<span>#${t}</span>`).join(" ")}
      </div>
    `;

    list.appendChild(div);
  });
}


document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  const filtered = entries.filter(entry =>
    entry.text.toLowerCase().includes(value) ||
    entry.title.toLowerCase().includes(value) ||
    entry.tags.join(" ").toLowerCase().includes(value)
  );

  renderFiltered(filtered);
});

journalInput.addEventListener('input',()=>{

  charCount.textContent =
    journalInput.value.length;

});

function getEntries(){

  return JSON.parse(
    localStorage.getItem('journalEntries')
  ) || [];

}

function saveEntries(entries){

  localStorage.setItem(
    'journalEntries',
    JSON.stringify(entries)
  );

}

function renderEntries(search=''){

  const entries = getEntries();

  totalEntries.textContent =
    entries.length;

  entriesList.innerHTML = '';

  const filteredEntries =
    entries.filter(entry=>
      entry.text.toLowerCase()
      .includes(search.toLowerCase())
    );

  if(filteredEntries.length === 0){

    entriesList.innerHTML = `

      <div class="empty-state">

        <i class="fa-solid fa-book"></i>

        <h2>No Entries Found</h2>

        <p>
          Start writing your thoughts &
          memories today ✨
        </p>

      </div>

    `;

    return;

  }

  filteredEntries
    .reverse()
    .forEach((entry,index)=>{

    const entryCard =
      document.createElement('div');

    entryCard.classList.add('entry-card');

    entryCard.innerHTML = `

      <div class="entry-top">

        <div class="entry-mood">
          ${entry.mood}
        </div>

        <div class="entry-date">
          ${entry.date}
        </div>

      </div>

      <div class="entry-text">
        ${entry.text}
      </div>

      <div class="entry-actions">

        <button
          class="delete-btn"
          onclick="deleteEntry(${index})"
        >
          Delete
        </button>

      </div>

    `;

    entriesList.appendChild(entryCard);

  });

}

saveBtn.addEventListener('click',()=>{

  const text =
    journalInput.value.trim();

  if(text === ''){

    alert(
      'Please write something first.'
    );

    return;

  }

  const entries = getEntries();

  entries.push({

    mood:selectedMood,

    text:text,

    date:new Date().toLocaleString()

  });

  saveEntries(entries);

  renderEntries();

  journalInput.value = '';

  charCount.textContent = '0';

});

function deleteEntry(index){

  const entries = getEntries();

  entries.reverse();

  entries.splice(index,1);

  entries.reverse();

  saveEntries(entries);

  renderEntries();

}

clearBtn.addEventListener('click',()=>{

  journalInput.value = '';

  charCount.textContent = '0';

});

deleteAllBtn.addEventListener('click',()=>{

  const confirmDelete =
    confirm(
      'Delete all journal entries?'
    );

  if(confirmDelete){

    localStorage.removeItem(
      'journalEntries'
    );

    renderEntries();

  }

});

searchInput.addEventListener('input',()=>{

  renderEntries(searchInput.value);

});

renderEntries();