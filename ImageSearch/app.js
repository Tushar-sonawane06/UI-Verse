const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const gallery = document.getElementById("gallery");

let query = "";

function fetchImages() {
  gallery.innerHTML = "";

  if (!query) return;

  for (let i = 1; i <= 20; i++) {
    const img = document.createElement("img");

    // stable working image source
    img.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000 + i)}`;

    gallery.appendChild(img);
  }
}

searchBtn.addEventListener("click", () => {
  query = searchInput.value.trim();
  fetchImages();
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    query = searchInput.value.trim();
    fetchImages();
  }
});