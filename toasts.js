const ToastWidget = {
  _state: {
    initialized: false,
    listeners: []
  },

  codeLibrary: {
    success: `
<div class="toast success-toast">
  ✅ Success Notification
</div>
`,
    error: `
<div class="toast error-toast">
  ❌ Error Notification
</div>
`,
    warning: `
<div class="toast warning-toast">
  ⚠ Warning Notification
</div>
`,
    info: `
<div class="toast info-toast">
  ℹ Info Notification
</div>
`
  },

  init() {
    if (this._state.initialized) return;

    this._state.toastContainer = document.getElementById("toast-container");
    this._state.modalOverlay = document.getElementById("modalOverlay");
    this._state.modalCode = document.getElementById("modalCode");
    this._state.closeModal = document.getElementById("closeModal");

    if (!this._state.toastContainer) {
      this._state.initialized = true;
      return;
    }

    const bind = (el, event, handler) => {
      if (!el) return;
      el.addEventListener(event, handler);
      this._state.listeners.push({ el, event, handler });
    };

    bind(document.querySelector(".success-demo"), "click", () => this.showToast("success", "✅ Successfully Saved!"));
    bind(document.querySelector(".error-demo"), "click", () => this.showToast("error", "❌ Something Went Wrong!"));
    bind(document.querySelector(".warning-demo"), "click", () => this.showToast("warning", "⚠ Check Your Input!"));
    bind(document.querySelector(".info-demo"), "click", () => this.showToast("info", "ℹ New Update Available!"));

    document.querySelectorAll(".copy-btn").forEach((button) => {
      const handler = () => {
        const type = button.dataset.copy;
        navigator.clipboard.writeText(this.codeLibrary[type]);
        this.showToast("success", "📋 Code Copied!");
      };
      bind(button, "click", handler);
    });

    document.querySelectorAll(".view-btn").forEach((button) => {
      const handler = () => {
        const type = button.dataset.view;
        if (this._state.modalCode) {
          this._state.modalCode.textContent = this.codeLibrary[type];
        }
        if (this._state.modalOverlay) {
          this._state.modalOverlay.style.display = "flex";
        }
      };
      bind(button, "click", handler);
    });

    bind(this._state.closeModal, "click", () => {
      if (this._state.modalOverlay) {
        this._state.modalOverlay.style.display = "none";
      }
    });

    bind(this._state.modalOverlay, "click", (e) => {
      if (e.target === this._state.modalOverlay) {
        this._state.modalOverlay.style.display = "none";
      }
    });

    this._state.initialized = true;
  },

  showToast(type, message) {
    if (!this._state.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}-toast`;
    // Use textContent to avoid injecting untrusted HTML into toasts
    toast.textContent = message;
    this._state.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.initialized = false;
  }
};

function showToast(type, message) {
  ToastWidget.showToast(type, message);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ToastWidget.init());
} else {
  ToastWidget.init();
}