
const form = document.getElementById("bookmarkForm");
const bookmarkList = document.getElementById("bookmarkList");
const searchInput = document.getElementById("searchInput");

let bookmarks =
  JSON.parse(localStorage.getItem("bookmarks")) || [];

  

// Display Bookmarks

function displayBookmarks(data){

  bookmarkList.innerHTML = "";

  data.forEach((bookmark, index) => {

    bookmarkList.innerHTML += `
      <div class="bookmark">
        <h3>${bookmark.name}</h3>
        <p>Category: ${bookmark.category}</p>

        <a href="${bookmark.url}" target="_blank">
          Visit Site
        </a>

        <div class="actions">
          <button onclick="deleteBookmark(${index})"
            class="delete-btn">
            Delete
          </button>
        </div>
      </div>
    `;

  });

}


// Add Bookmark

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const bookmark = {
    name: document.getElementById("siteName").value,
    url: document.getElementById("siteURL").value,
    category: document.getElementById("category").value
  };

  bookmarks.push(bookmark);

  localStorage.setItem(
    "bookmarks",
    JSON.stringify(bookmarks)
  );

  displayBookmarks(bookmarks);

  form.reset();

});


// Delete Bookmark

function deleteBookmark(index){

  bookmarks.splice(index, 1);

  localStorage.setItem(
    "bookmarks",
    JSON.stringify(bookmarks)
  );

  displayBookmarks(bookmarks);

}


// Search Bookmarks

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  const filtered = bookmarks.filter((bookmark) => {

    return bookmark.name.toLowerCase().includes(value);

  });

  displayBookmarks(filtered);

});

displayBookmarks(bookmarks);

const defaultBookmarks = [
  {
    name: "GitHub",
    url: "https://github.com",
    category: "Development"
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    category: "Development"
  },
  {
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    category: "Development"
  },
  {
    name: "Figma",
    url: "https://figma.com",
    category: "Design"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    category: "Design"
  },
  {
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    category: "Education"
  },
  {
    name: "Coursera",
    url: "https://www.coursera.org",
    category: "Education"
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    category: "Entertainment"
  },
  {
    name: "Dev.to",
    url: "https://dev.to",
    category: "Development"
  }
];

function renderBookmarks(list = bookmarks) {
  const container = document.getElementById("bookmarkList");
  container.innerHTML = "";

  list.forEach((b, index) => {
    container.innerHTML += `
      <div class="bookmark">
        <div>
          <a href="${b.url}" target="_blank">${b.name}</a>
          <span class="tag">${b.category}</span>
        </div>
        <button onclick="deleteBookmark(${index})">❌</button>
      </div>
    `;
  });
}

const form = document.getElementById("bookmarkForm");
const bookmarkList = document.getElementById("bookmarkList");
const searchInput = document.getElementById("searchInput");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks(filter = "") {

  bookmarkList.innerHTML = "";

  const filtered = bookmarks.filter(bookmark =>
    bookmark.name.toLowerCase().includes(filter.toLowerCase()) ||
    bookmark.category.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    bookmarkList.innerHTML =
      `<div class="empty-state">No bookmarks found.</div>`;
    return;
  }

  filtered.forEach((bookmark, index) => {

    const div = document.createElement("div");
    div.className = "bookmark";

    div.innerHTML = `
      <div class="bookmark-info">
        <a href="${bookmark.url}"
           target="_blank"
           rel="noopener noreferrer">
          ${bookmark.name}
        </a>

        <span class="tag">${bookmark.category}</span>
      </div>

      <div class="bookmark-actions">
        <a
          href="${bookmark.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="visit-btn">Visit</button>
        </a>

        <button
          class="delete-btn"
          onclick="deleteBookmark(${index})"
        >
          Delete
        </button>
      </div>
    `;

    bookmarkList.appendChild(div);
  });
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  saveBookmarks();
  renderBookmarks(searchInput.value);
}

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("siteName").value.trim();
  let url = document.getElementById("siteURL").value.trim();
  const category = document.getElementById("category").value;

  if (!url.startsWith("http://") &&
      !url.startsWith("https://")) {
    url = "https://" + url;
  }

  bookmarks.unshift({
    name,
    url,
    category
  });

  saveBookmarks();
  renderBookmarks();

  form.reset();
});

searchInput.addEventListener("input", (e) => {
  renderBookmarks(e.target.value);
});

renderBookmarks();
