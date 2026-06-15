const bookButtons = document.querySelectorAll(".book-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
}); 
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const bookButtons = document.querySelectorAll(".book-btn");

// Open modal
bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const eventName = btn.dataset.event;

    modalTitle.textContent = "Booking Confirmed 🎉";
    modalText.textContent = `You have successfully booked: ${eventName}`;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

// Close modal
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeModal);

// Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
const stats = document.querySelectorAll('.stat-card h2');

stats.forEach(counter => {

  const target =
  parseInt(counter.innerText);

  let count = 0;

  const update = () => {

    count += Math.ceil(target / 50);

    if(count < target){
      counter.innerText = count + '+';
      requestAnimationFrame(update);
    }
    else{
      counter.innerText =
      target + '+';
    }
  };

  update();
});
const targetDate =
new Date("December 31, 2026 23:59:59");

function updateCountdown(){

  const now = new Date();

  const diff =
  targetDate - now;

  const days =
  Math.floor(diff/(1000*60*60*24));

  const hours =
  Math.floor((diff/(1000*60*60))%24);

  const minutes =
  Math.floor((diff/(1000*60))%60);

  const seconds =
  Math.floor((diff/1000)%60);

  document.getElementById('days').textContent=days;
  document.getElementById('hours').textContent=hours;
  document.getElementById('minutes').textContent=minutes;
  document.getElementById('seconds').textContent=seconds;
}

setInterval(updateCountdown,1000);
updateCountdown();
const subscribeBtn =
document.querySelector('.newsletter button');

subscribeBtn.addEventListener('click',()=>{

  const email =
  document.querySelector('.newsletter input');

  if(email.value.trim()===''){
    alert('Enter your email');
    return;
  }

  subscribeBtn.innerHTML =
  '✓ Subscribed';

  subscribeBtn.style.background =
  '#10b981';

  email.value='';
});