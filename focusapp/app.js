const START = 25 * 60;
const DAILY_GOAL = 8;
let timeLeft = START;
let ticking = null;
let sessions = 0;
let focusMins = 0;

const timerEl = document.getElementById('timerEl');
const timerSub = document.getElementById('timerSub');
const arcFill = document.getElementById('arcFill');
const sessionsEl = document.getElementById('sessionsEl');
const minutesEl = document.getElementById('minutesEl');
const productivityEl = document.getElementById('productivityEl');
const progFill = document.getElementById('progFill');
const progLabel = document.getElementById('progLabel');

function fmt(s){
  const m = Math.floor(s/60), sec = s%60;
  return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
}

function renderTimer(){
  timerEl.textContent = fmt(timeLeft);
  const pct = (timeLeft / START) * 100;
  arcFill.style.width = pct + '%';
  if(timeLeft === 0){arcFill.style.background='var(--red)';}
  else if(!ticking){arcFill.style.background='var(--amber)';}
  else{arcFill.style.background='var(--green)';}
}

function renderStats(){
  sessionsEl.textContent = sessions;
  minutesEl.textContent = focusMins;
  const pct = Math.min(Math.round((sessions/DAILY_GOAL)*100),100);
  productivityEl.textContent = pct+'%';
  progFill.style.width = pct+'%';
  progLabel.textContent = sessions+' / '+DAILY_GOAL+' sessions';
}

document.getElementById('startBtn').addEventListener('click',()=>{
  if(ticking) return;
  timerEl.classList.remove('paused','done');
  ticking = setInterval(()=>{
    if(timeLeft > 0){
      timeLeft--;
      renderTimer();
    } else {
      clearInterval(ticking); ticking = null;
      sessions++; focusMins += 25;
      renderStats();
      timerEl.classList.add('done');
      timerSub.textContent = 'Session complete! 🎉';
      setTimeout(()=>{
        timeLeft = START;
        timerSub.textContent = '25 min session';
        timerEl.classList.remove('done');
        renderTimer();
      }, 3000);
    }
  },1000);
  timerSub.textContent = 'Stay focused…';
});

document.getElementById('pauseBtn').addEventListener('click',()=>{
  if(!ticking) return;
  clearInterval(ticking); ticking = null;
  timerEl.classList.add('paused');
  timerEl.classList.remove('done');
  timerSub.textContent = 'Paused';
  arcFill.style.background='var(--amber)';
});

document.getElementById('resetBtn').addEventListener('click',()=>{
  clearInterval(ticking); ticking = null;
  timeLeft = START;
  timerEl.classList.remove('paused','done');
  timerSub.textContent = '25 min session';
  arcFill.style.background = 'var(--green)';
  renderTimer();
});

const searchEl = document.getElementById('searchEl');
const cards = document.querySelectorAll('.file-card');
let activeFolder = 'all';

function filterCards(){
  const term = searchEl.value.toLowerCase();
  cards.forEach(c=>{
    const name = c.querySelector('h3').textContent.toLowerCase();
    const folder = c.dataset.folder || '';
    const matchSearch = name.includes(term);
    const matchFolder = activeFolder==='all' || folder===activeFolder;
    c.style.display = (matchSearch && matchFolder) ? '' : 'none';
  });
}

searchEl.addEventListener('input', filterCards);

window.filterFolder = function(el, folder){
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  activeFolder = folder;
  filterCards();
};

renderTimer();
renderStats();
