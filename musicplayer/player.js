const playBtn = document.getElementById("play");

let isPlaying = false;

playBtn.addEventListener("click", () => {

  if(!isPlaying){
    playBtn.textContent = "⏸";
    isPlaying = true;
  }
  else{
    playBtn.textContent = "▶";
    isPlaying = false;
  }

});