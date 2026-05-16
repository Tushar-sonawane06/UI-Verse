
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