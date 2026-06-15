# Unified State Management Protocol

## Overview

UIverse implements a unified state management system to handle interactive component state consistently across the entire library. This protocol ensures:

- **Consistency** - All components use the same state API
- **Persistence** - State automatically saves to localStorage
- **Synchronization** - State syncs across browser tabs/windows
- **Reactivity** - Components react to state changes via subscribers
- **Transactionality** - Multi-step state updates are atomic
- **Debuggability** - Debug mode tracks all state changes

## Core Components

### 1. StateManager Class

The central state management class that handles all state operations.

```javascript
// Initialize with options
const stateManager = new UIVerseStateManager({
  storageKey: 'uiverse-state',      // LocalStorage key prefix
  enableSync: true,                 // Cross-tab sync (default: true)
  enableDebug: false                // Debug logging (default: false)
});
```

## API Reference

### setState(key, value, options)

Set a single state value with optional validation.

```javascript
// Simple state update
UIVerseStateManager.setState('theme.dark', true);

// With nested keys
UIVerseStateManager.setState('modal.visible', true);

// With options
UIVerseStateManager.setState('user.name', 'John', {
  persist: true,      // Save to localStorage
  notify: true,       // Trigger listeners
  validator: (val) => val.length > 0  // Custom validator
});
```

### getState(key, defaultValue)

Retrieve a state value.

```javascript
// Get simple state
const isDarkMode = UIVerseStateManager.getState('theme.dark');

// Get with default value
const name = UIVerseStateManager.getState('user.name', 'Guest');

// Get nested state
const isVisible = UIVerseStateManager.getState('modal.visible', false);
```

### setStates(updates, options)

Update multiple state values atomically.

```javascript
// Update multiple values
UIVerseStateManager.setStates({
  'theme.dark': true,
  'sidebar.expanded': false,
  'user.id': 123
});

// With transactional support (rollback on any failure)
UIVerseStateManager.setStates(
  {
    'form.step': 2,
    'form.validated': true
  },
  { transactional: true }
);
```

### subscribe(keyPattern, callback)

Listen for state changes.

```javascript
// Subscribe to specific key
const unsubscribe = UIVerseStateManager.subscribe('theme.dark', (newValue, oldValue, key) => {
  console.log(`${key} changed from ${oldValue} to ${newValue}`);
  updateTheme(newValue);
});

// Subscribe to pattern (all theme changes)
UIVerseStateManager.subscribe('theme', (newValue) => {
  console.log('Theme updated:', newValue);
});

// Unsubscribe
unsubscribe();
```

### once(key, callback)

Listen for state change once, then auto-unsubscribe.

```javascript
UIVerseStateManager.once('modal.visible', (newValue) => {
  console.log('Modal visibility changed:', newValue);
});
```

### loadState()

Load state from localStorage on page load.

```javascript
// Call on page initialization
UIVerseStateManager.loadState();
```

### clearState(options)

Clear all persisted state.

```javascript
// Clear both memory and localStorage
UIVerseStateManager.clearState();

// Clear only localStorage, keep in-memory state
UIVerseStateManager.clearState({ memory: false });
```

### getAll()

Get complete state object.

```javascript
const allState = UIVerseStateManager.getAll();
console.log(allState);
```

### reset(initialState)

Reset state to initial values.

```javascript
UIVerseStateManager.reset({
  'theme.dark': false,
  'sidebar.expanded': true
});
```

## Usage Patterns

### Pattern 1: Dark Mode Toggle

```javascript
// Setup
UIVerseStateManager.subscribe('theme.dark', (isDark) => {
  document.body.classList.toggle('dark-mode', isDark);
});

// Toggle dark mode
function toggleDarkMode() {
  const current = UIVerseStateManager.getState('theme.dark', false);
  UIVerseStateManager.setState('theme.dark', !current);
}
```

### Pattern 2: Form State Management

```javascript
// Initialize form state
UIVerseStateManager.setStates({
  'form.name': '',
  'form.email': '',
  'form.submitted': false,
  'form.errors': {}
});

// Update form field
function updateFormField(fieldName, value) {
  UIVerseStateManager.setState(`form.${fieldName}`, value);
}

// Handle form submission
function handleSubmit() {
  const formData = UIVerseStateManager.getState('form');
  
  UIVerseStateManager.setStates({
    'form.submitted': true,
    'form.loading': true
  });

  // Submit form...
}

// Listen for form changes
UIVerseStateManager.subscribe('form', (newFormState) => {
  console.log('Form state changed:', newFormState);
});
```

### Pattern 3: Modal/Sidebar Management

```javascript
// Setup modal state
const modalState = {
  'modals.confirmDelete.visible': false,
  'modals.confirmDelete.itemId': null,
  'modals.confirmDelete.title': ''
};

UIVerseStateManager.setStates(modalState);

// Open modal
function openConfirmModal(itemId, title) {
  UIVerseStateManager.setStates({
    'modals.confirmDelete.visible': true,
    'modals.confirmDelete.itemId': itemId,
    'modals.confirmDelete.title': title
  });
}

// Close modal
function closeConfirmModal() {
  UIVerseStateManager.setState('modals.confirmDelete.visible', false);
}

// React to modal visibility
UIVerseStateManager.subscribe('modals.confirmDelete.visible', (isVisible) => {
  const modal = document.getElementById('confirmModal');
  if (isVisible) {
    modal.showModal();
  } else {
    modal.close();
  }
});
```

### Pattern 4: User Session Management

```javascript
// Setup user state
UIVerseStateManager.setStates({
  'user.authenticated': false,
  'user.id': null,
  'user.email': null,
  'user.role': null,
  'user.lastLogin': null
});

// Login user
async function loginUser(email, password) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    const user = await response.json();
    
    // Atomic update of multiple user fields
    UIVerseStateManager.setStates({
      'user.authenticated': true,
      'user.id': user.id,
      'user.email': user.email,
      'user.role': user.role,
      'user.lastLogin': new Date().toISOString()
    }, { transactional: true });
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Check if authenticated
function isAuthenticated() {
  return UIVerseStateManager.getState('user.authenticated', false);
}

// Listen to user changes
UIVerseStateManager.subscribe('user', (newUserState) => {
  updateUserUI(newUserState);
});
```

### Pattern 5: Component-Level State

```javascript
// In component initialization
class MyComponent {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.setupState();
    this.setupListeners();
    this.setupEventHandlers();
  }

  setupState() {
    const componentId = `components.${this.element.id}`;
    UIVerseStateManager.setStates({
      [`${componentId}.expanded`]: false,
      [`${componentId}.selected`]: null,
      [`${componentId}.loading`]: false,
      [`${componentId}.data`]: []
    });
  }

  setupListeners() {
    const componentId = `components.${this.element.id}`;
    
    UIVerseStateManager.subscribe(`${componentId}.expanded`, (isExpanded) => {
      this.element.classList.toggle('expanded', isExpanded);
    });

    UIVerseStateManager.subscribe(`${componentId}.loading`, (isLoading) => {
      this.element.classList.toggle('loading', isLoading);
    });
  }

  setupEventHandlers() {
    this.element.addEventListener('click', () => this.toggle());
  }

  toggle() {
    const componentId = `components.${this.element.id}`;
    const current = UIVerseStateManager.getState(`${componentId}.expanded`, false);
    UIVerseStateManager.setState(`${componentId}.expanded`, !current);
  }
}
```

## State Structure Conventions

### Naming Conventions

- Use camelCase for keys
- Use dot notation for nested state: `category.subcategory.property`
- Group related state: `theme.*`, `form.*`, `user.*`, `modals.*`

### Recommended State Schema

```javascript
{
  // Theme/appearance state
  theme: {
    dark: false,
    accentColor: '#6c5ce7',
    fontSize: 'medium'
  },

  // UI state
  ui: {
    sidebarExpanded: true,
    menuOpen: false
  },

  // Modal states
  modals: {
    confirmDelete: {
      visible: false,
      itemId: null,
      title: ''
    },
    editProfile: {
      visible: false,
      data: null
    }
  },

  // Form states
  forms: {
    login: {
      email: '',
      password: '',
      submitted: false,
      errors: {}
    }
  },

  // User state
  user: {
    authenticated: false,
    id: null,
    email: null,
    role: null
  },

  // Component states
  components: {
    accordion1: {
      expanded: false
    },
    dropdown1: {
      open: false,
      selected: null
    }
  }
}
```

## Cross-Tab Synchronization

State automatically syncs across browser tabs/windows.

```javascript
// In Tab 1
UIVerseStateManager.setState('theme.dark', true);

// In Tab 2 (automatically updated)
const isDark = UIVerseStateManager.getState('theme.dark');  // true
```

The synchronization happens via the `storage` event when one tab modifies localStorage.

## Persistence

All state is automatically persisted to localStorage under the key `uiverse-state`.

```javascript
// Disable persistence for specific update
UIVerseStateManager.setState('temporary.value', 123, {
  persist: false
});

// Load persisted state on page load
UIVerseStateManager.loadState();

// Clear all persisted state
UIVerseStateManager.clearState();
```

## Transactions and Atomicity

Multi-step updates can be made atomic with transactions:

```javascript
UIVerseStateManager.setStates({
  'step1': value1,
  'step2': value2,
  'step3': value3
}, { transactional: true });

// If any update fails, all changes are rolled back
```

## Validation

Validate state updates with custom validators:

```javascript
UIVerseStateManager.setState('user.age', 25, {
  validator: (age) => age >= 0 && age <= 150
});

// Invalid value is rejected
UIVerseStateManager.setState('user.age', -5, {
  validator: (age) => age >= 0 && age <= 150
});  // Returns false
```

## Debug Mode

Enable debug logging to track all state changes:

```javascript
const stateManager = new StateManager({
  enableDebug: true
});

// Console logs all state operations
// [UIverse StateManager] State updated: theme.dark = true
// [UIverse StateManager] Listener subscribed to pattern: /^theme\.dark($|\.)/
```

## Performance Considerations

### Efficient Updates

```javascript
// ✓ Good: Batch multiple updates
UIVerseStateManager.setStates({
  'a': 1,
  'b': 2,
  'c': 3
});

// ✗ Inefficient: Individual updates
UIVerseStateManager.setState('a', 1);
UIVerseStateManager.setState('b', 2);
UIVerseStateManager.setState('c', 3);
```

### Selective Listeners

```javascript
// ✓ Good: Listen to specific key
UIVerseStateManager.subscribe('theme.dark', handler);

// ✗ Inefficient: Listen to entire state
UIVerseStateManager.subscribe('.*', handler);
```

## Migration Guide

### From Inline Storage

**Before:**
```javascript
localStorage.setItem('darkMode', JSON.stringify(isDark));
const isDark = JSON.parse(localStorage.getItem('darkMode') || 'false');
```

**After:**
```javascript
UIVerseStateManager.setState('theme.dark', isDark);
const isDark = UIVerseStateManager.getState('theme.dark', false);
```

### From Global Variables

**Before:**
```javascript
window.appState = {
  darkMode: false,
  sidebarOpen: true
};
```

**After:**
```javascript
UIVerseStateManager.setStates({
  'theme.dark': false,
  'ui.sidebarOpen': true
});
```

## Best Practices

1. **Initialize on Page Load**
   ```javascript
   UIVerseStateManager.loadState();
   ```

2. **Use Dot Notation**
   - Good: `theme.dark`, `form.email`
   - Bad: `themeDark`, `formEmail`

3. **Group Related State**
   - Good: `user.name`, `user.email`, `user.role`
   - Bad: `userName`, `userEmail`, `userRole`

4. **Use Validators for Critical State**
   ```javascript
   UIVerseStateManager.setState('user.age', value, {
     validator: (age) => typeof age === 'number' && age >= 0
   });
   ```

5. **Subscribe in Initialization, Unsubscribe in Cleanup**
   ```javascript
   const unsubscribe = UIVerseStateManager.subscribe('key', handler);
   // Later, in cleanup:
   unsubscribe();
   ```

6. **Use Transactions for Related Updates**
   ```javascript
   UIVerseStateManager.setStates({
     'form.step': 2,
     'form.validated': true
   }, { transactional: true });
   ```

## Browser Support

- Chrome/Edge: 60+
- Firefox: 55+
- Safari: 11+
- All browsers with localStorage support

## Troubleshooting

### State not persisting
- Ensure localStorage is enabled
- Check browser privacy/incognito mode
- Verify `persist: true` option

### State not syncing across tabs
- Ensure `enableSync: true` (default)
- Check for localStorage errors
- Verify same origin policy

### Listeners not firing
- Verify key pattern matches
- Check if state actually changed (same value = no notification)
- Ensure listener not unsubscribed

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-06-11 | Initial unified state management protocol |

## Related Documentation

- `script.js` - Global JavaScript utilities
- `COMPONENT_SCHEMA.md` - Component metadata
- `DEPENDENCIES.md` - Component dependencies

