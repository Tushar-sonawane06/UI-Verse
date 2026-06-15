# Keyboard Navigation Contract

UI-Verse uses a shared keyboard contract so global shortcuts, overlays, search dropdowns, and focus traps all follow the same rules.

## Standard keys

- `Escape` closes open overlays, modals, command palettes, and dropdowns.
- `Tab` moves focus forward and backward in trapped dialogs.
- `Enter` activates the current selection or confirms the current action.
- `ArrowUp` and `ArrowDown` move between list items and command results.
- `/` focuses the global search field when the user is not typing in an input.
- `Ctrl+K` on Windows/Linux and `Cmd+K` on macOS opens the command palette or falls back to search.
- `?` opens the keyboard shortcuts help panel.

## Contract rules

- Do not attach ad-hoc keyboard behavior when a shared helper already exists.
- Avoid overriding shortcut keys while the user is typing in a text field, textarea, select box, or contenteditable region.
- Keep help text, modal behavior, and actual bindings in sync.

## Shared module

The shared implementation lives in `js/core/keyboard-contract.js` and is loaded through the common runtime loader.

## Contributor rule

When adding a new interactive component, reuse the shared contract instead of inventing a new shortcut pattern.
