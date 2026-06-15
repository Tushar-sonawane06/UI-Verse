function searchMovie(){

  const input = document.getElementById("searchInput").value;

  if(input.trim() === ""){
    alert("Please enter a movie name");
  }
  else{
    alert(`Searching for "${input}"`);
  }

}

function searchMovie() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const movies = document.querySelectorAll(".movie-card");

  movies.forEach(movie => {
    const title = movie.getAttribute("data-title");

    if (title.includes(input)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}