const toastContainer = document.getElementById('toast-container');

const icons = {
  success: '✓',
  error: '✕',
  warning: '!',
  info: 'i'
};

function showToast(type, message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = icons[type] || '';
  
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close" aria-label="Close Toast">&times;</button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Handle close button
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    hideToast(toast);
  });
  
  // Auto remove
  setTimeout(() => {
    hideToast(toast);
  }, duration);
}

function hideToast(toast) {
  if (toast.classList.contains('hiding')) return;
  toast.classList.add('hiding');
  toast.addEventListener('animationend', () => {
    toast.remove();
  });
}
const cards = document.querySelectorAll(".floating-toast");

cards.forEach((card,index)=>{

  card.addEventListener("mouseenter",()=>{

    card.style.transform =
    "scale(1.08) translateY(-10px)";

  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform =
    "";

  });

});
const container =
document.getElementById("toast-container");

const count =
document.getElementById("toastCount");

function updateCounter(){
  count.textContent =
  document.querySelectorAll(".toast").length;
}

function showToast(type,message){

  const icons={
    success:"✅",
    error:"❌",
    warning:"⚠️",
    info:"ℹ️"
  };

  const toast=document.createElement("div");

  toast.className=`toast ${type}`;

  toast.innerHTML=`
    <div class="toast-header">
      <span class="toast-icon">
      ${icons[type]}
      </span>
      ${type.toUpperCase()}
    </div>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  updateCounter();

  setTimeout(()=>{
    toast.style.animation=
    "fadeOut .5s forwards";

    setTimeout(()=>{
      toast.remove();
      updateCounter();
    },500);
  },4000);
}
function showProgressToast(){

  const toast=document.createElement("div");

  toast.className="toast info";

  toast.innerHTML=`
    <div class="toast-header">
      📥 Downloading File
    </div>

    <div>Please wait...</div>

    <div class="progress">
      <div class="progress-fill"></div>
    </div>
  `;

  container.appendChild(toast);

  updateCounter();

  let width=0;

  const bar=
  toast.querySelector(".progress-fill");

  const interval=setInterval(()=>{

    width+=5;
    bar.style.width=width+"%";

    if(width>=100){

      clearInterval(interval);

      toast.innerHTML=`
        <div class="toast-header">
          ✅ Download Complete
        </div>
        <div>Your file is ready.</div>
      `;

      setTimeout(()=>{
        toast.remove();
        updateCounter();
      },3000);
    }

  },150);
}
function showLoadingToast(){

  const toast=document.createElement("div");

  toast.className="toast info";

  toast.innerHTML=`
    <div class="toast-header">
      ⏳ Processing Request
    </div>
    <div>Please wait...</div>
  `;

  container.appendChild(toast);

  updateCounter();

  setTimeout(()=>{

    toast.className="toast success";

    toast.innerHTML=`
      <div class="toast-header">
        ✅ Completed
      </div>
      <div>Task finished successfully.</div>
    `;

  },3000);
}
function showActionToast(){

  const toast=document.createElement("div");

  toast.className="toast warning";

  toast.innerHTML=`
    <div class="toast-header">
      📌 New Message
    </div>

    <div>You received a message.</div>

    <div class="toast-actions">
      <button onclick="alert('Opened')">
        Open
      </button>

      <button onclick="this.closest('.toast').remove();updateCounter();">
        Dismiss
      </button>
    </div>
  `;

  container.appendChild(toast);

  updateCounter();
}
function showCelebrationToast(){

  const toast=document.createElement("div");

  toast.className="toast success";

  toast.innerHTML=`
    <div class="toast-header">
      🎉 Achievement Unlocked
    </div>

    <div>
      You completed all tasks today!
    </div>
  `;

  container.appendChild(toast);

  updateCounter();

  toast.animate(
    [
      {transform:"scale(0.8)"},
      {transform:"scale(1.1)"},
      {transform:"scale(1)"}
    ],
    {
      duration:600
    }
  );

  setTimeout(()=>{
    toast.remove();
    updateCounter();
  },5000);
}

function showMessageToast(){

  const toast=document.createElement("div");

  toast.className="toast message";

  toast.innerHTML=`
    <div class="toast-header">
      <span>💬</span>
      <span>New Message</span>
    </div>

    <div>
      Sarah sent you a message.
    </div>
  `;

  addToast(toast);
}

function showAchievementToast(){

  const toast=document.createElement("div");

  toast.className="toast achievement glow";

  toast.innerHTML=`
    <div class="toast-header">
      <span>🏆</span>
      <span>Achievement</span>
    </div>

    <div>
      Level 10 reached successfully!
    </div>
  `;

  addToast(toast);
}

function showMusicToast(){

  const toast=document.createElement("div");

  toast.className="toast music";

  toast.innerHTML=`
    <div class="toast-header">
      <span>🎵</span>
      <span>Now Playing</span>
    </div>

    <div>
      Midnight Dreams - Lofi Mix
    </div>
  `;

  addToast(toast);
}

function showCartToast(){

  const toast=document.createElement("div");

  toast.className="toast cart";

  toast.innerHTML=`
    <div class="toast-header">
      <span>🛒</span>
      <span>Added to Cart</span>
    </div>

    <div>
      Wireless Headphones added.
    </div>
  `;

  addToast(toast);
}

function showLikeToast(){

  const toast=document.createElement("div");

  toast.className="toast like";

  toast.innerHTML=`
    <div class="toast-header">
      <span>❤️</span>
      <span>New Like</span>
    </div>

    <div>
      Emma liked your photo.
    </div>
  `;

  addToast(toast);
}

function showSecurityToast(){

  const toast=document.createElement("div");

  toast.className="toast security";

  toast.innerHTML=`
    <div class="toast-header">
      <span>🔒</span>
      <span>Security Alert</span>
    </div>

    <div>
      New login detected.
    </div>
  `;

  addToast(toast);
}

function showRocketToast(){

  const toast=document.createElement("div");

  toast.className="toast rocket glow";

  toast.innerHTML=`
    <div class="toast-header">
      <span>🚀</span>
      <span>Launch Complete</span>
    </div>

    <div>
      Your website is now live.
    </div>
  `;

  addToast(toast);
}

function addToast(toast){

  container.appendChild(toast);

  updateCounter();

  setTimeout(()=>{

    toast.style.animation=
    "fadeOut .5s forwards";

    setTimeout(()=>{

      toast.remove();
      updateCounter();

    },500);

  },4000);
}

const reveals =
document.querySelectorAll(
'.stat-card,.feature-card,.category,.playground-box'
);

function reveal(){

  reveals.forEach(item=>{

    const top=
    item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      item.classList.add('show');
    }

  });

}

window.addEventListener('scroll',reveal);
reveal();

for(let i=0;i<40;i++){

  const p=
  document.createElement('div');

  p.classList.add('particle');

  p.style.left=
  Math.random()*100+'%';

  p.style.top=
  Math.random()*100+'%';

  p.style.animation=
  `float ${5+Math.random()*10}s infinite`;

  document
  .getElementById('particles')
  .appendChild(p);
}