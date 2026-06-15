const test = require('node:test');
const assert = require('node:assert/strict');

const KeyboardContract = require('../../js/core/keyboard-contract.js');

test('matches shared keyboard shortcuts', () => {
  assert.equal(KeyboardContract.matchesCombo({ key: 'k', ctrlKey: true, metaKey: false, altKey: false, shiftKey: false }, KeyboardContract.shortcuts.commandPalette), true);
  assert.equal(KeyboardContract.matchesCombo({ key: 'k', ctrlKey: false, metaKey: true, altKey: false, shiftKey: false }, KeyboardContract.shortcuts.commandPalette), true);
  assert.equal(KeyboardContract.matchesCombo({ key: '/', ctrlKey: false, metaKey: false, altKey: false, shiftKey: false }, KeyboardContract.shortcuts.focusSearch), true);
  assert.equal(KeyboardContract.matchesCombo({ key: '?', ctrlKey: false, metaKey: false, altKey: false, shiftKey: true }, KeyboardContract.shortcuts.shortcutsHelp), true);
});

test('classifies navigation and typing contexts', () => {
  assert.equal(KeyboardContract.isEscapeKey({ key: 'Escape' }), true);
  assert.equal(KeyboardContract.isEnterKey({ key: 'Enter' }), true);
  assert.equal(KeyboardContract.isTabKey({ key: 'Tab' }), true);
  assert.equal(KeyboardContract.isArrowKey({ key: 'ArrowDown' }), true);
  assert.equal(KeyboardContract.isTypingContext({ tagName: 'INPUT' }), true);
  assert.equal(KeyboardContract.isTypingContext({ tagName: 'DIV' }), false);
});
