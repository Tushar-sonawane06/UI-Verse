const card         = document.getElementById('psCard');
const input        = document.getElementById('psInput');
const bar          = document.getElementById('psBar');
const strengthText = document.getElementById('psStrengthText');
const entropyEl    = document.getElementById('psEntropy');
const toggle       = document.getElementById('psToggle');
const eyeIcon      = document.getElementById('eyeIcon');
const psCopy       = document.getElementById('psCopy');
const psClear      = document.getElementById('psClear');
const psGen        = document.getElementById('psGenerate');

const criteria = {
  cLen:   v => v.length >= 8,
  cLen12: v => v.length >= 12,
  cUpper: v => /[A-Z]/.test(v),
  cLower: v => /[a-z]/.test(v),
  cNum:   v => /[0-9]/.test(v),
  cSym:   v => /[^A-Za-z0-9]/.test(v),
};

const levels = [
  { label: '—',           color: '#888780', pct: 0   },
  { label: 'very weak',   color: '#E24B4A', pct: 16  },
  { label: 'weak',        color: '#EF9F27', pct: 33  },
  { label: 'fair',        color: '#FAC775', pct: 50  },
  { label: 'good',        color: '#1D9E75', pct: 75  },
  { label: 'strong',      color: '#0F6E56', pct: 88  },
  { label: 'very strong', color: '#378ADD', pct: 100 },
];

function setAccent(color) {
  card.style.setProperty('--accent', color);
}

function calcEntropy(v) {
  let pool = 0;
  if (/[a-z]/.test(v)) pool += 26;
  if (/[A-Z]/.test(v)) pool += 26;
  if (/[0-9]/.test(v)) pool += 10;
  if (/[^A-Za-z0-9]/.test(v)) pool += 32;
  if (pool === 0) return 0;
  return Math.round(v.length * Math.log2(pool));
}

function update() {
  const v = input.value;
  let score = 0;

  for (const [id, fn] of Object.entries(criteria)) {
    const el = document.getElementById(id);
    const met = fn(v);
    el.classList.toggle('met', met);
    if (met) score++;
  }

  const lvl = v.length === 0 ? levels[0] : levels[Math.min(score, 6)];
  bar.style.width = lvl.pct + '%';
  bar.style.background = lvl.color;
  setAccent(lvl.color);
  strengthText.style.color = lvl.color;
  strengthText.textContent = v.length === 0 ? '—' : lvl.label;

  const bits = calcEntropy(v);
  entropyEl.textContent = bits > 0 ? bits + ' bits entropy' : '';
}

function generatePassword(len = 16) {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghjkmnpqrstuvwxyz';
  const nums  = '23456789';
  const syms  = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const all   = upper + lower + nums + syms;

  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);

  // Guarantee at least one of each required type
  let pwd = [
    upper[arr[0] % upper.length],
    lower[arr[1] % lower.length],
    nums [arr[2] % nums.length],
    syms [arr[3] % syms.length],
  ];

  for (let i = 4; i < len; i++) {
    pwd.push(all[arr[i] % all.length]);
  }

  // Fisher-Yates shuffle using same random values
  for (let i = pwd.length - 1; i > 0; i--) {
    const j = arr[i] % (i + 1);
    [pwd[i], pwd[j]] = [pwd[j], pwd[i]];
  }

  return pwd.join('');
}

//  Event listeners 

input.addEventListener('input', update);

toggle.addEventListener('click', () => {
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  eyeIcon.className = isPass ? 'ti ti-eye-off' : 'ti ti-eye';
  toggle.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
});

psCopy.addEventListener('click', async () => {
  if (!input.value) return;
  try {
    await navigator.clipboard.writeText(input.value);
    const orig = psCopy.innerHTML;
    psCopy.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> copied';
    setTimeout(() => { psCopy.innerHTML = orig; }, 1500);
  } catch {
    // clipboard not available
  }
});

psClear.addEventListener('click', () => {
  input.value = '';
  update();
  input.focus();
});

psGen.addEventListener('click', () => {
  input.value = generatePassword(16);
  if (input.type === 'text') {
    input.type = 'password';
    eyeIcon.className = 'ti ti-eye';
  }
  update();
  input.focus();
});

// Init
setAccent('#888780');