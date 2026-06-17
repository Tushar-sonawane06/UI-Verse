# UI-Verse Web Components API Reference

> Version 1.0.0 — TypeScript custom elements built with Lit-like patterns

## Table of Contents

- [UVButton](#uvbutton)
- [UVModal](#uvmodal)
- [UVTooltip](#uvtooltip)
- [UVDropdown](#uvdropdown)
- [UVTabs](#uvtabs)
- [UVThemeSwitcher](#uvthemeswitcher)
- [UVLanguageSwitcher](#uvlanguageswitcher)

---

## UVButton

`<uv-button>` — A styled button element integrated with the design token system.

### Attributes

| Attribute      | Type      | Default | Description                             |
|---------------|-----------|---------|-----------------------------------------|
| `variant`     | `string`  | `null`  | Visual variant (maps to token classes). |
| `disabled`    | `boolean` | `false` | Disables the button when present.       |

### Slots

| Slot      | Description                          |
|-----------|--------------------------------------|
| `default` | Button label or content.             |

### CSS Custom Properties

| Property               | Default    | Description              |
|------------------------|------------|--------------------------|
| `--uv-button-bg`       | token base | Button background color. |
| `--uv-button-color`    | token base | Button text color.       |

### Example

```html
<uv-button variant="primary">Click Me</uv-button>
<uv-button disabled>Disabled</uv-button>
```

---

## UVModal

`<uv-modal>` — A modal dialog with overlay, focus trap, and Escape-key dismissal.

### Attributes

| Attribute | Type      | Default | Description                       |
|-----------|-----------|---------|-----------------------------------|
| `opened`  | `boolean` | `false` | Shows the modal when present.     |

### Properties

| Property | Type       | Description              |
|----------|------------|--------------------------|
| `open()` | `void`     | Opens the modal.         |
| `close()`| `void`     | Closes the modal.        |

### Events

| Event      | Description                    |
|------------|--------------------------------|
| `open`     | Fired after modal opens.       |
| `close`    | Fired after modal closes.      |

### Slots

| Slot      | Description                          |
|-----------|--------------------------------------|
| `default` | Modal dialog content.                |
| `header`  | Optional header content.             |

### Example

```html
<uv-modal id="myModal">
  <h2 slot="header">Modal Title</h2>
  <p>Modal content goes here.</p>
</uv-modal>

<script>
  document.querySelector('#myModal').open();
</script>
```

### Keyboard Support

| Key      | Action          |
|----------|-----------------|
| `Escape` | Closes modal.   |

---

## UVTooltip

`<uv-tooltip>` — A positioned tooltip element.

### Properties

| Property   | Type       | Description              |
|------------|------------|--------------------------|
| `show()`   | `void`     | Shows the tooltip.       |
| `hide()`   | `void`     | Hides the tooltip.       |

### Slots

| Slot      | Description                          |
|-----------|--------------------------------------|
| `default` | Tooltip content.                     |
| `trigger` | The element that triggers tooltip.   |

### Example

```html
<uv-tooltip id="tooltip">
  <span slot="trigger">Hover me</span>
  <span slot="default">Tooltip text</span>
</uv-tooltip>

<script>
  const tooltip = document.querySelector('#tooltip');
  tooltip.show();
</script>
```

---

## UVDropdown

`<uv-dropdown>` — A dropdown with toggle and outside-click dismissal.

### Slots

| Slot      | Description                          |
|-----------|--------------------------------------|
| `trigger` | The button/element that opens dropdown. |
| `content` | Dropdown content panel.              |

### Events

| Event      | Description                    |
|------------|--------------------------------|
| `toggle`   | Fired on open/close.           |

### Example

```html
<uv-dropdown>
  <button slot="trigger">Menu</button>
  <div slot="content">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
  </div>
</uv-dropdown>
```

### Keyboard Support

| Key       | Action                    |
|-----------|---------------------------|
| `Escape`  | Closes dropdown.          |
| `Tab`     | Moves focus to next item. |

---

## UVTabs

`<uv-tabs>` — A tabbed interface with keyboard-navigable tabs and panels.

### Slots

| Slot      | Description                          |
|-----------|--------------------------------------|
| `tab`     | Tab button elements.                 |
| `panel`   | Content panels with `[active]` attribute. |

### Attributes

The component reads `[active]` attribute on tab and panel elements to determine the active state.

### Example

```html
<uv-tabs>
  <button slot="tab" active>Tab 1</button>
  <button slot="tab">Tab 2</button>
  <div slot="panel" active>Panel 1 content</div>
  <div slot="panel">Panel 2 content</div>
</uv-tabs>
```

### Keyboard Support

| Key             | Action                          |
|-----------------|---------------------------------|
| `ArrowLeft`     | Previous tab.                   |
| `ArrowRight`    | Next tab.                       |
| `Home`          | First tab.                      |
| `End`           | Last tab.                       |

---

## UVThemeSwitcher

`<uv-theme-switcher>` — A `<select>` element that switches themes via the `DesignTokens` API.

### Attributes

| Attribute  | Type     | Default | Description                     |
|------------|----------|---------|---------------------------------|
| `themes`   | `string` | `""`    | Comma-separated theme names.    |

### Example

```html
<uv-theme-switcher themes="light,dark,high-contrast"></uv-theme-switcher>
```

---

## UVLanguageSwitcher

`<uv-language-switcher>` — A language selector that integrates with the i18n module.

### Attributes

| Attribute  | Type     | Default | Description                         |
|------------|----------|---------|-------------------------------------|
| `languages`| `string` | `""`    | Comma-separated locale codes.       |

### Example

```html
<uv-language-switcher languages="en,es,fr,de,ja"></uv-language-switcher>
```

---

## Design Tokens API

The `DesignTokens` class provides a centralized theme management system.

### Methods

| Method                                    | Description                          |
|-------------------------------------------|--------------------------------------|
| `getTheme()`                              | Returns current theme name.          |
| `setTheme(name: string)`                  | Sets and applies a theme.            |
| `getToken(path: string)`                  | Gets a token value by path.          |
| `getAllTokens()`                          | Returns all token values.            |
| `registerTheme(name: string, tokens: object)` | Registers a custom theme.       |

### Available Themes

- `light` — Default light theme.
- `dark` — Dark mode variant.
- `high-contrast` — Accessibility-optimized theme.

### Example

```javascript
import { DesignTokens } from 'ui-verse/design-tokens';

const tokens = new DesignTokens();
tokens.setTheme('dark');
const bgColor = tokens.getToken('bg-primary');
```

---

## Internationalization (i18n) API

### Methods

| Method                                           | Description                        |
|--------------------------------------------------|------------------------------------|
| `setLocale(locale: string)`                      | Sets active locale.                |
| `getLocale()`                                    | Returns current locale.             |
| `translate(key: string, params?: object)`         | Returns translated string.          |
| `loadLocale(locale: string)`                     | Dynamically loads a locale bundle.  |

### Supported Locales

`en`, `es`, `fr`, `de`, `ja`, `ko`, `zh`, `ar`, `hi`, `pt`, `ru`, `it`, `nl`, `pl`, `sv`, `tr`

### Example

```javascript
import { i18n } from 'ui-verse';

await i18n.setLocale('es');
const greeting = i18n.translate('welcome.message');
```

---

## Migration Guide: HTML Components → Web Components

### Before (HTML-only)

```html
<button class="btn btn-primary">Click</button>
<script src="js/buttons.js"></script>
```

### After (Web Component)

```html
<uv-button variant="primary">Click</uv-button>
<script type="module">
  import 'ui-verse/button';
</script>
```

---

## Browser Compatibility

| Browser         | Support          |
|-----------------|------------------|
| Chrome 67+       | ✅ Full           |
| Firefox 63+      | ✅ Full           |
| Safari 13.1+     | ✅ Full           |
| Edge 79+         | ✅ Full           |
| IE 11            | ❌ Not supported  |

---

## Contributing New Components

1. Create a new `.ts` file in `src/components/uv-your-component.ts`
2. Extend `HTMLElement` and register via `customElements.define()`
3. Add exports in `src/index.ts`
4. Build with `npm run build`
5. Add tests in `tests/webcomponents/`

See the [Components Development Guide](./Docs/COMPONENT_DEVELOPMENT_GUIDE.md) for detailed instructions.
