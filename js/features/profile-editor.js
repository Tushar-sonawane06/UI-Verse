/**
 * Profile Editor Feature
 * Manages in-page profile editing for user profile pages
 * Expected markup: profile page with .btnn button and .info sections with <span> and <p>
 */

const ProfileEditor = {
  _state: {
    initialized: false,
    editBtn: null,
    modalCleanup: null
  },

  /**
   * Escape HTML attributes to prevent XSS
   * @private
   */
  _escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  },

  /**
   * Initialize profile editor
   */
  init() {
    if (this._state.initialized) return;

    const editBtn = document.querySelector('.btnn');
    if (!editBtn) {
      // No profile editor on this page, skip
      this._state.initialized = true;
      return;
    }

    this._state.editBtn = editBtn;
    this._attachEditHandler();
    this._state.initialized = true;
  },

  /**
   * Attach click handler to edit button
   * @private
   */
  _attachEditHandler() {
    this._state.editBtn.addEventListener('click', () => this._openEditModal());
  },

  /**
   * Open the profile edit modal
   * @private
   */
  _openEditModal() {
    const currentInfo = document.querySelectorAll('.info p');
    if (!currentInfo || currentInfo.length < 3) return;

    const currentName = currentInfo[0].textContent;
    const currentEmail = currentInfo[1].textContent;
    const currentUsername = currentInfo[2].textContent;

    // Remove existing modal if present
    const existing = document.getElementById('profile-editor-modal');
    if (existing) existing.remove();

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'profile-editor-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="modal-backdrop" data-close="1" aria-hidden="true"></div>
      <div class="modal-card">
        <div class="modal-header">
          <h3 id="profile-editor-title">Edit Profile</h3>
          <button type="button" class="modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="modal-body">
          <label><span>Full Name</span><input type="text" id="profile-editor-name" value="${this._escapeAttr(currentName)}"/></label>
          <label><span>Email</span><input type="email" id="profile-editor-email" value="${this._escapeAttr(currentEmail)}"/></label>
          <label><span>Username</span><input type="text" id="profile-editor-username" value="${this._escapeAttr(currentUsername)}"/></label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-secondary" data-cancel="1">Cancel</button>
          <button type="button" class="btn-primary" data-save="1">Save</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this._attachModalHandlers(modal, currentInfo);

    if (window.Accessibility && typeof window.Accessibility.openModal === 'function') {
      this._state.modalCleanup = window.Accessibility.openModal(modal, {
        initialFocus: '#profile-editor-name',
        restoreFocusTo: this._state.editBtn
      });
    } else {
      setTimeout(() => modal.querySelector('#profile-editor-name')?.focus?.(), 0);
    }

  },

  /**
   * Attach event handlers to modal
   * @private
   */
  _attachModalHandlers(modal, currentInfo) {
    let closed = false;
    const closeModal = () => {
      if (closed) return;
      closed = true;

      if (this._state.modalCleanup) {
        this._state.modalCleanup();
        this._state.modalCleanup = null;
      } else if (window.Accessibility && typeof window.Accessibility.closeModal === 'function') {
        window.Accessibility.closeModal(modal);
      }

      modal.remove();
    };

    // Close button and backdrop
    modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
    modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
    modal.querySelector('[data-cancel="1"]')?.addEventListener('click', closeModal);

    // Save button
    modal.querySelector('[data-save="1"]')?.addEventListener('click', () => {
      this._saveProfileChanges(modal, currentInfo);
      closeModal();
    });
  },

  /**
   * Save profile changes
   * @private
   */
  _saveProfileChanges(modal, currentInfo) {
    const newName = modal.querySelector('#profile-editor-name')?.value?.trim();
    const newEmail = modal.querySelector('#profile-editor-email')?.value?.trim();
    const newUsername = modal.querySelector('#profile-editor-username')?.value?.trim();

    if (newName) {
      currentInfo[0].textContent = newName;
      const profileName = document.querySelector('.profile-header h2');
      if (profileName) profileName.textContent = newName;
    }

    if (newEmail) {
      currentInfo[1].textContent = newEmail;
      const profileEmail = document.querySelector('.profile-header p');
      if (profileEmail) profileEmail.textContent = newEmail;
    }

    if (newUsername) {
      currentInfo[2].textContent = newUsername;
    }

    // Show confirmation
    if (typeof showToast === 'function') {
      showToast('Profile Updated Successfully! ✅');
    }
  },

  destroy() {
    if (this._state.modalCleanup) {
      this._state.modalCleanup();
      this._state.modalCleanup = null;
    }

    if (this._state.editBtn) {
      // Remove event listeners by removing and re-adding (or store references)
      const newBtn = this._state.editBtn.cloneNode(true);
      if (this._state.editBtn.parentNode) {
        this._state.editBtn.parentNode.replaceChild(newBtn, this._state.editBtn);
      }
    }
    this._state.editBtn = null;
    this._state.initialized = false;
  }
};

// Export to global
if (typeof window !== 'undefined') {
  window.ProfileEditor = ProfileEditor;
}

// ESM export if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProfileEditor;
}
