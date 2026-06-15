

const cpuValue = document.getElementById("cpuValue");
const ramValue = document.getElementById("ramValue");

let cpu = 72;
let ram = 58;

setInterval(() => {

  cpu = Math.floor(Math.random() * 40) + 40;
  ram = Math.floor(Math.random() * 40) + 30;

  cpuValue.textContent = `${cpu}%`;
  ramValue.textContent = `${ram}%`;

}, 3000);

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movieCards = document.querySelectorAll(".movie-card");

// search function
function searchMovie() {
  const query = searchInput.value.toLowerCase().trim();

  movieCards.forEach(card => {
    const title = card.dataset.title;

    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// event listeners
searchBtn.addEventListener("click", searchMovie);

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchMovie();
  }
});