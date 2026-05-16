/**
 * Newsletter Feature
 * Handles newsletter subscription with validation and feedback
 */

const Newsletter = {
  _state: {
    initialized: false,
    form: null,
    input: null,
    submitBtn: null
  },

  _validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  _showFeedback(message, isError = false) {
    const feedback = document.createElement('div');
    feedback.className = `newsletter-feedback ${isError ? 'error' : 'success'}`;
    feedback.textContent = message;
    feedback.style.cssText = `
      position: absolute;
      bottom: -30px;
      left: 0;
      right: 0;
      padding: 8px;
      font-size: 12px;
      text-align: center;
      border-radius: 4px;
      animation: fadeIn 0.3s ease;
      ${isError ? 'color: #d63031;' : 'color: #00b894;'}
    `;
    
    const form = this._state.form;
    form.style.position = 'relative';
    const existing = form.querySelector('.newsletter-feedback');
    if (existing) existing.remove();
    form.appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 3000);
  },

  _setLoading(loading) {
    if (this._state.submitBtn) {
      this._state.submitBtn.disabled = loading;
      this._state.submitBtn.textContent = loading ? 'Subscribing...' : 'Subscribe';
    }
  },

  async _handleSubmit(event) {
    event.preventDefault();
    
    const email = this._state.input.value.trim();
    
    if (!email) {
      this._showFeedback('Please enter your email address', true);
      return;
    }
    
    if (!this._validateEmail(email)) {
      this._showFeedback('Please enter a valid email address', true);
      return;
    }

    this._setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this._showFeedback('Thanks for subscribing! 🎉', false);
      this._state.input.value = '';
      
      if (window.localStorage) {
        const subscribers = JSON.parse(localStorage.getItem('uiv-subscribers') || '[]');
        subscribers.push({ email, date: new Date().toISOString() });
        localStorage.setItem('uiv-subscribers', JSON.stringify(subscribers));
      }
      
    } catch (error) {
      this._showFeedback('Something went wrong. Please try again.', true);
    } finally {
      this._setLoading(false);
    }
  },

  init() {
    if (this._state.initialized) return;

    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    const input = form.querySelector('input[type="email"]') || form.querySelector('input');
    const submitBtn = form.querySelector('button');

    if (!input) return;

    this._state.form = form;
    this._state.input = input;
    this._state.submitBtn = submitBtn;

    form.addEventListener('submit', (e) => this._handleSubmit(e));
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this._handleSubmit(new Event('submit'));
      }
    });

    this._state.initialized = true;
    console.log('[Newsletter] Initialized');
  },

  destroy() {
    if (this._state.form) {
      this._state.form.removeEventListener('submit', this._handleSubmit);
    }
    this._state.initialized = false;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Newsletter;
}