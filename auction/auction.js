const bidBtn =
  document.getElementById("bidBtn");

const bidInput =
  document.getElementById("bidInput");

const bidAmount =
  document.getElementById("bidAmount");

const bidHistory =
  document.getElementById("bidHistory");

const timer =
  document.getElementById("timer");

let time = 60;

setInterval(() => {

  let minutes =
    Math.floor(time / 60);

  let seconds =
    time % 60;

  seconds =
    seconds < 10
      ? "0" + seconds
      : seconds;

  timer.textContent =
    `${minutes}:${seconds}`;

  if(time > 0){
    time--;
  }

}, 1000);

bidBtn.addEventListener("click", () => {

  const value =
    bidInput.value;

  if(value === ""){
    return;
  }

  bidAmount.textContent =
    `₹${value}`;

  const item =
    document.createElement("div");

  item.classList.add("history-item");

  item.textContent =
    `You bid ₹${value}`;

  bidHistory.prepend(item);

  bidInput.value = "";

});

let currentBid = 12000;
let totalBids = 12;

const bidAmount =
document.getElementById("bidAmount");

const floatingBid =
document.getElementById("floatingBid");

const bidInput =
document.getElementById("bidInput");

const bidBtn =
document.getElementById("bidBtn");

const bidHistory =
document.querySelector(".history-list");

const bidCount =
document.getElementById("bidCount");

function formatPrice(price){
  return "₹" + price.toLocaleString("en-IN");
}

function addBid(amount){

  if(amount <= currentBid){

    alert(
      "Your bid must be higher than the current bid."
    );

    return;
  }

  currentBid = amount;
  totalBids++;

  bidAmount.textContent =
  formatPrice(currentBid);

  floatingBid.textContent =
  formatPrice(currentBid);

  bidCount.textContent =
  totalBids;

  const newBid =
  document.createElement("div");

  newBid.className =
  "history-item";

  newBid.innerHTML = `
  
    <div class="history-user">

      <img
        src="https://randomuser.me/api/portraits/lego/1.jpg"
      />

      <div>
        <h4>You</h4>
        <span>Just now</span>
      </div>

    </div>

    <div class="history-price">
      ${formatPrice(currentBid)}
    </div>

  `;

  bidHistory.prepend(newBid);

  bidInput.value = "";

}

bidBtn.addEventListener("click",()=>{

  const value =
  Number(bidInput.value);

  if(!value){

    alert(
      "Please enter a bid amount."
    );

    return;
  }

  addBid(value);

});

document
.querySelectorAll(".quick-bids button")
.forEach(button=>{

  button.addEventListener("click",()=>{

    const amount =
    Number(
      button.innerText
      .replace(/[^\d]/g,"")
    );

    addBid(currentBid + amount);

  });

});

// TIMER

let totalSeconds = 60;

const timer =
document.getElementById("timer");

const countdown =
setInterval(()=>{

  let minutes =
  Math.floor(totalSeconds / 60);

  let seconds =
  totalSeconds % 60;

  minutes =
  minutes < 10
  ? "0" + minutes
  : minutes;

  seconds =
  seconds < 10
  ? "0" + seconds
  : seconds;

  timer.textContent =
  `${minutes}:${seconds}`;

  if(totalSeconds <= 10){

    timer.style.color =
    "#ef4444";

    timer.style.animation =
    "pulse 1s infinite";
  }

  if(totalSeconds <= 0){

    clearInterval(countdown);

    timer.textContent =
    "ENDED";

    bidBtn.disabled = true;

    bidBtn.style.opacity = ".5";

    bidBtn.innerHTML =
    "Auction Closed";

  }

  totalSeconds--;

},1000);