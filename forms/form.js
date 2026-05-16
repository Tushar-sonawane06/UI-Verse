const FormWizard = {
  _state: {
    initialized: false,
    currentStep: 0,
    steps: [],
    indicators: [],
    prevBtn: null,
    nextBtn: null,
    listeners: []
  },

  init() {
    if (this._state.initialized) return;

    this._state.steps = Array.from(document.querySelectorAll(".form-step"));
    this._state.indicators = Array.from(document.querySelectorAll(".step"));
    this._state.prevBtn = document.getElementById("prevBtn");
    this._state.nextBtn = document.getElementById("nextBtn");

    if (!this._state.steps.length || !this._state.prevBtn || !this._state.nextBtn) {
      this._state.initialized = true;
      return;
    }

    const onNext = () => {
      if (this._state.currentStep < this._state.steps.length - 1) {
        this._state.currentStep++;
        this.updateForm();
      }
    };

    const onPrev = () => {
      if (this._state.currentStep > 0) {
        this._state.currentStep--;
        this.updateForm();
      }
    };

    this._bind(this._state.nextBtn, "click", onNext);
    this._bind(this._state.prevBtn, "click", onPrev);
    this.updateForm();
    this._state.initialized = true;
  },

  updateForm() {
    const { steps, indicators, currentStep, prevBtn, nextBtn } = this._state;
    if (!steps.length || !prevBtn || !nextBtn) return;

    steps.forEach((step) => step.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    steps[currentStep]?.classList.add("active");
    for (let i = 0; i <= currentStep && i < indicators.length; i++) {
      indicators[i].classList.add("active");
    }

    prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
    nextBtn.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
  },

  _bind(el, event, handler) {
    if (!el) return;
    el.addEventListener(event, handler);
    this._state.listeners.push({ el, event, handler });
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.currentStep = 0;
    this._state.initialized = false;
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => FormWizard.init());
} else {
  FormWizard.init();
}