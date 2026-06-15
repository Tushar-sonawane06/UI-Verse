/**
 * UIverse Keyboard Navigation Contract
 * Shared keyboard semantics for global shortcuts, modal dismissal, and list navigation.
 */

const KeyboardContract = (function () {
  const SHORTCUTS = Object.freeze({
    focusSearch: ['/'],
    commandPalette: ['Ctrl+K', 'Cmd+K'],
    shortcutsHelp: ['Shift+/'],
    dismiss: ['Escape']
  });

  const DIRECTION_KEYS = new Set(['arrowup', 'arrowdown', 'arrowleft', 'arrowright']);
  const ACTIVATION_KEYS = new Set(['enter', ' ']);

  function normalizeKey(key) {
    const value = String(key || '').trim();
    if (!value) return '';
    if (value === 'Esc') return 'escape';
    if (value === 'Spacebar') return ' ';
    if (value.length === 1) return value;
    return value.toLowerCase();
  }

  function isEditableTarget(target) {
    if (!target || typeof target !== 'object') return false;
    const tag = target.tagName ? String(target.tagName).toLowerCase() : '';
    return Boolean(
      target.isContentEditable ||
      tag === 'input' ||
      tag === 'textarea' ||
      tag === 'select'
    );
  }

  function isTypingContext(target) {
    return isEditableTarget(target);
  }

  function parseCombo(combo) {
    return String(combo || '')
      .split(/\s+\/\s+/)
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const pieces = part.split('+').map((piece) => piece.trim().toLowerCase()).filter(Boolean);
        const key = normalizeKey(pieces.pop() || '');
        const modifiers = {
          ctrl: pieces.includes('ctrl') || pieces.includes('control'),
          meta: pieces.includes('cmd') || pieces.includes('meta') || pieces.includes('mod'),
          alt: pieces.includes('alt') || pieces.includes('option'),
          shift: pieces.includes('shift')
        };

        return { key, modifiers };
      });
  }

  function normalizeCombos(combo) {
    if (Array.isArray(combo)) {
      return combo.flatMap((entry) => (typeof entry === 'string' ? parseCombo(entry) : [entry])).filter(Boolean);
    }

    return parseCombo(combo);
  }

  function matchesCombo(event, combo) {
    if (!event) return false;
    const combos = normalizeCombos(combo);
    const eventKey = normalizeKey(event.key);

    return combos.some((entry) => {
      if (!entry || !entry.key) return false;
      const keyMatches = entry.key === eventKey || (entry.key === '/' && eventKey === '?' && event.shiftKey) || (entry.key === '?' && eventKey === '/' && entry.modifiers.shift);
      if (!keyMatches) return false;

      return Boolean(
        !!event.ctrlKey === !!entry.modifiers.ctrl &&
        !!event.metaKey === !!entry.modifiers.meta &&
        !!event.altKey === !!entry.modifiers.alt &&
        !!event.shiftKey === !!entry.modifiers.shift
      );
    });
  }

  function isKey(eventOrKey, expected) {
    const key = typeof eventOrKey === 'object' && eventOrKey !== null ? eventOrKey.key : eventOrKey;
    return normalizeKey(key) === normalizeKey(expected);
  }

  function isEscapeKey(eventOrKey) {
    return isKey(eventOrKey, 'Escape');
  }

  function isEnterKey(eventOrKey) {
    return isKey(eventOrKey, 'Enter');
  }

  function isTabKey(eventOrKey) {
    return isKey(eventOrKey, 'Tab');
  }

  function isArrowKey(eventOrKey) {
    const key = normalizeKey(typeof eventOrKey === 'object' && eventOrKey !== null ? eventOrKey.key : eventOrKey);
    return DIRECTION_KEYS.has(key);
  }

  function isActivationKey(eventOrKey) {
    const key = normalizeKey(typeof eventOrKey === 'object' && eventOrKey !== null ? eventOrKey.key : eventOrKey);
    return ACTIVATION_KEYS.has(key);
  }

  function getShortcutEntries() {
    return [
      { id: 'focus-search', key: SHORTCUTS.focusSearch.join(' / '), description: 'Focus search input' },
      { id: 'command-palette', key: SHORTCUTS.commandPalette.join(' / '), description: 'Open command palette or focus search' },
      { id: 'shortcuts-help', key: SHORTCUTS.shortcutsHelp.join(' / '), description: 'Show keyboard shortcuts help' },
      { id: 'dismiss', key: SHORTCUTS.dismiss.join(' / '), description: 'Close open modals, overlays, and popups' }
    ];
  }

  return {
    shortcuts: SHORTCUTS,
    parseCombo,
    normalizeCombos,
    matchesCombo,
    isEditableTarget,
    isTypingContext,
    isEscapeKey,
    isEnterKey,
    isTabKey,
    isArrowKey,
    isActivationKey,
    getShortcutEntries
  };
})();

if (typeof window !== 'undefined') {
  window.KeyboardContract = KeyboardContract;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KeyboardContract;
}
