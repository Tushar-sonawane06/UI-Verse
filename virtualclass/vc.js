  /*  TIMER  */
  let elapsed = 0;
  const timerEl = document.getElementById('timer');
  setInterval(() => {
    elapsed++;
    const h = String(Math.floor(elapsed/3600)).padStart(2,'0');
    const m = String(Math.floor((elapsed%3600)/60)).padStart(2,'0');
    const s = String(elapsed%60).padStart(2,'0');
    timerEl.textContent = `${h}:${m}:${s}`;
  }, 1000);

  /*  TOAST  */
  function showToast(msg, accent=false) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast' + (accent ? ' accent' : '');
    void t.offsetWidth;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

  /*  MIC TOGGLE  */
  let micOn = true;
  document.getElementById('micBtn').addEventListener('click', function(){
    micOn = !micOn;
    this.innerHTML = micOn ? '<i class="ti ti-microphone"></i>' : '<i class="ti ti-microphone-off"></i>';
    this.classList.toggle('off', !micOn);
    showToast(micOn ? 'Microphone on' : 'Microphone muted', micOn);
  });

  /*  CAMERA TOGGLE  */
  let camOn = true;
  document.getElementById('camBtn').addEventListener('click', function(){
    camOn = !camOn;
    this.innerHTML = camOn ? '<i class="ti ti-camera"></i>' : '<i class="ti ti-camera-off"></i>';
    this.classList.toggle('off', !camOn);
    showToast(camOn ? 'Camera on' : 'Camera off', camOn);
  });

  /*  SCREEN SHARE TOGGLE  */
  let screenOn = false;
  document.getElementById('screenBtn').addEventListener('click', function(){
    screenOn = !screenOn;
    this.innerHTML = screenOn ? '<i class="ti ti-screen-share"></i>' : '<i class="ti ti-screen-share-off"></i>';
    this.classList.toggle('off', !screenOn);
    showToast(screenOn ? 'Screen sharing started' : 'Screen sharing stopped', screenOn);
  });

  /*  LEAVE  */
  document.getElementById('leaveBtn').addEventListener('click', () => {
    if(confirm('Are you sure you want to leave the class?')) {
      showToast('You left the class.');
    }
  });

  /*  CHAT  */
  const sendBtn   = document.getElementById('sendBtn');
  const chatInput = document.getElementById('chatInput');
  const messages  = document.getElementById('messages');

  function sendMessage() {
    const text = chatInput.value.trim();
    if(!text) return;
    const div = document.createElement('div');
    div.className = 'message student';
    div.innerHTML = `<div class="sender">You</div>${escapeHtml(text)}`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    chatInput.value = '';
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', e => { if(e.key === 'Enter') sendMessage(); });

  /*  SIDEBAR NAV  */
  document.querySelectorAll('.menu li').forEach(li => {
    li.addEventListener('click', function(){
      document.querySelectorAll('.menu li').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
    });
  });