const voteButtons = document.querySelectorAll(".vote-btn");

let votes = {
  html: 40,
  react: 35,
  vue: 25
};

voteButtons.forEach(button => {

  button.addEventListener("click", () => {

    const option = button.dataset.option;

    votes[option] += 5;

    updateResults();
  });

});

function updateResults(){

  document.getElementById("html-count").textContent =
    votes.html + "%";

  document.getElementById("react-count").textContent =
    votes.react + "%";

  document.getElementById("vue-count").textContent =
    votes.vue + "%";

  document.getElementById("html-progress").style.width =
    votes.html + "%";

  document.getElementById("react-progress").style.width =
    votes.react + "%";

  document.getElementById("vue-progress").style.width =
    votes.vue + "%";
}