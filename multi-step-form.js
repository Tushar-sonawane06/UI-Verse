document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('multiStepForm');
  const steps = Array.from(document.querySelectorAll('.form-step'));
  const indicators = Array.from(document.querySelectorAll('.step-indicator'));
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  const copyBtn = document.querySelector('.copy-btn');
  const togglePassBtn = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  let currentStep = 0;

  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  applyTheme(localStorage.getItem('theme') !== 'light');

  themeToggle.addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark-mode'));
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      if (index <= currentStep) {
        currentStep = index;
        updateFormProgress();
      }
    });
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      validateStep(currentStep);
      currentStep += 1;
      updateFormProgress();
      return;
    }

    const stepOneValid = validateStep(0);
    const stepTwoValid = validateStep(1);

    if (!stepOneValid) {
      currentStep = 0;
      updateFormProgress();
      return;
    }

    if (!stepTwoValid) {
      currentStep = 1;
      updateFormProgress();
      return;
    }

    alert('Form submitted successfully!');
    form.reset();
    currentStep = 0;
    updateFormProgress();
    updatePasswordStrength();
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep -= 1;
      updateFormProgress();
    }
  });

  function updateFormProgress() {
    steps.forEach((step, index) => {
      const isActive = index === currentStep;
      step.classList.toggle('active', isActive);
      step.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    indicators.forEach((indicator, index) => {
      const isActive = index === currentStep;
      const isCompleted = index < currentStep;

      indicator.classList.toggle('active', isActive);
      indicator.classList.toggle('completed', isCompleted);
      indicator.setAttribute('aria-selected', isActive ? 'true' : 'false');
      indicator.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === steps.length - 1 ? 'Submit' : 'Next Step';
  }

  function validateStep(stepIndex) {
    let isValid = true;

    if (stepIndex === 0) {
      const name = document.getElementById('fullName');
      const email = document.getElementById('email');
      const title = document.getElementById('title');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim()) {
        showError('nameError', 'Full Name is required');
        isValid = false;
      } else {
        clearError('nameError');
      }

      if (!email.value.trim()) {
        showError('emailError', 'Email address is required');
        isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
      } else {
        clearError('emailError');
      }

      if (!title.value.trim()) {
        showError('titleError', 'Professional Title is required');
        isValid = false;
      } else {
        clearError('titleError');
      }
    }

    if (stepIndex === 1) {
      if (passwordInput.value.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
        isValid = false;
      } else {
        clearError('passwordError');
      }
    }

    return isValid;
  }

  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }

  function clearError(id) {
    document.getElementById(id).textContent = '';
  }

  togglePassBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    const icon = togglePassBtn.querySelector('i');
    icon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
    togglePassBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });

  function updatePasswordStrength() {
    const value = passwordInput.value;
    let score = 0;

    if (value.length >= 8) score += 25;
    if (/[A-Z]/.test(value)) score += 25;
    if (/[0-9]/.test(value)) score += 25;
    if (/[^A-Za-z0-9]/.test(value)) score += 25;

    const bar = document.getElementById('strengthBar');
    const label = document.getElementById('strengthLabel');
    const percent = document.getElementById('strengthPercent');

    bar.style.width = `${score}%`;
    percent.textContent = `${score}%`;

    if (score === 0) {
      bar.style.backgroundColor = 'transparent';
      label.textContent = 'Enter a password';
    } else if (score <= 25) {
      bar.style.backgroundColor = 'var(--error)';
      label.textContent = 'Weak';
    } else if (score <= 75) {
      bar.style.backgroundColor = 'var(--warning)';
      label.textContent = 'Fair';
    } else {
      bar.style.backgroundColor = 'var(--success)';
      label.textContent = 'Strong';
    }
  }

  passwordInput.addEventListener('input', updatePasswordStrength);

  copyBtn.addEventListener('click', async () => {
    const originalText = copyBtn.innerHTML;
    const source = document.documentElement.outerHTML;

    try {
      await navigator.clipboard.writeText(source);
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    } catch {
      copyBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Copy failed';
    }

    window.setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 1800);
  });

  updateFormProgress();
  updatePasswordStrength();
});