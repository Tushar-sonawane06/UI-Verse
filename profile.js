/* profile.js – UIverse Profile Page */

// ── Tabs ──────────────────────────────────────────
const tabs   = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// ── Save / Toast ──────────────────────────────────
const saveBtn    = document.getElementById('saveBtn');
const discardBtn = document.getElementById('discardBtn');
const toast      = document.getElementById('toast');
const displayName  = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');

function showToast() {
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    const name  = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    if (name)  displayName.textContent  = name;
    if (email) displayEmail.textContent = email;
    showToast();
  });
}

if (discardBtn) {
  discardBtn.addEventListener('click', () => {
    document.getElementById('fullName').value = displayName.textContent;
    document.getElementById('email').value    = displayEmail.textContent;
  });
}

// ── Avatar upload preview ─────────────────────────
const avatarInput   = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');

if (avatarInput && avatarPreview) {
  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { avatarPreview.src = ev.target.result; };
    reader.readAsDataURL(file);
  });
}

// ── Dark mode toggle ──────────────────────────────
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
  darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', darkToggle.checked);
  });
}

// ── Password show/hide ────────────────────────────
document.querySelectorAll('.toggle-pass').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (!input) return;
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    btn.querySelector('i').className = isPass ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
  });
});