function searchMovie(){

  const input = document.getElementById("searchInput").value;

  if(input.trim() === ""){
    alert("Please enter a movie name");
  }
  else{
    alert(`Searching for "${input}"`);
  }

}