/**
 * Category-specific tutorial steps configuration.
 * Keeps selectors/instructions in one place.
 */

(function () {
  const Steps = {
    cards: [
      {
        selector: '.filter-bar',
        title: 'Start with filters',
        instruction: 'Use the filter buttons to quickly narrow down cards by category.',
      },
      {
        selector: '.filter-bar .filter-search input, .filter-search input, #searchInput',
        title: 'Search components',
        instruction: 'Type a keyword to find a component instantly. Press Next when you see your results.',
      },
      {
        selector: '.cards-grid .component-card:first-of-type, .component-card:first-of-type',
        title: 'Pick a component',
        instruction: 'Hover and explore any card. Each card includes actions for viewing and copying code.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="toggleCode"], .component-card:first-of-type .actions .view-btn',
        title: 'View code',
        instruction: 'Click “View Code” to expand the HTML/CSS snippet for the selected card.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="copyCode"], .component-card:first-of-type .actions .copy-btn',
        title: 'Copy to clipboard',
        instruction: 'Click “Copy” to put the snippet on your clipboard.',
      },
      {
        selector: '#playgroundDrawer',
        title: 'Playground',
        instruction: 'If enabled on this page, use the playground drawer to tweak component options.',
        // No onEnter hook: we rely on the UI already being present.
      },
    ],

    button: [
      {
        selector: '.filter-bar',
        title: 'Filter buttons',
        instruction: 'Use categories to jump between different button styles (style/status/effects).',
      },
      {
        selector: '.filter-bar .filter-search input, .filter-search input, #searchInput',
        title: 'Search',
        instruction: 'Type a keyword to find your button style quickly.',
      },
      {
        selector: '.button-grid .component-card:first-of-type, .component-card:first-of-type',
        title: 'Choose a button example',
        instruction: 'Pick a card, then use the actions area to explore its snippet.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="toggleCode"], .component-card:first-of-type .actions .view-btn',
        title: 'View code',
        instruction: 'Open the code snippet for this button.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="copyCode"], .component-card:first-of-type .actions .copy-btn',
        title: 'Copy',
        instruction: 'Copy the snippet to your clipboard so you can reuse it.',
      },
      {
        selector: '#playgroundDrawer',
        title: 'Playground (optional)',
        instruction: 'Try the playground drawer to experiment with button parameters when available.',
      },
    ],

    inputs: [
      {
        selector: '.filter-bar',
        title: 'Filter input types',
        instruction: 'Use the filter buttons to switch between basic/date/advanced/selection/attribute examples.',
      },
      {
        selector: '.filter-bar .filter-search input, .filter-search input, #searchInput',
        title: 'Live search',
        instruction: 'Type to filter input cards by name.',
      },
      {
        selector: '.inputs-grid .component-card:first-of-type, .component-card:first-of-type',
        title: 'Pick an input',
        instruction: 'Select an input card and inspect its preview.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="toggleCode"], .component-card:first-of-type .actions .view-btn',
        title: 'View code',
        instruction: 'Open the HTML snippet for the selected input.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="copyCode"], .component-card:first-of-type .actions .copy-btn',
        title: 'Copy',
        instruction: 'Copy the snippet to clipboard.',
      },
      {
        selector: '#playgroundDrawer',
        title: 'Playground',
        instruction: 'If the playground is enabled on this page, tweak parameters in the drawer.',
      },
    ],

    forms: [
      {
        selector: '.forms-grid, .forms-grid .form-component-card, .form-component-card:first-of-type',
        title: 'Pick a form template',
        instruction: 'Forms are grouped as cards—each one has preview, “View Code”, and “Copy”.',
      },
      {
        selector: '.form-component-card:first-of-type .actions button[onclick^="toggleCode"], .form-component-card:first-of-type .actions .view-btn',
        title: 'View code',
        instruction: 'Expand the form HTML snippet to learn the structure.',
      },
      {
        selector: '.form-component-card:first-of-type .actions button[onclick^="copyCode"], .form-component-card:first-of-type .actions .copy-btn',
        title: 'Copy to clipboard',
        instruction: 'Copy the snippet so you can paste it into your project.',
      },
      {
        selector: '#playgroundDrawer',
        title: 'Playground (optional)',
        instruction: 'Use the playground drawer if available for this category.',
      },
    ],

    default: [
      {
        selector: '#searchInput',
        title: 'Search components',
        instruction: 'Use the top search to find components by keyword.',
      },
      {
        selector: '.component-card:first-of-type',
        title: 'Pick a component',
        instruction: 'Open a component card to see its preview and actions.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="toggleCode"], .component-card:first-of-type .actions .view-btn',
        title: 'View code',
        instruction: 'Expand code for the selected component.',
      },
      {
        selector: '.component-card:first-of-type .actions button[onclick^="copyCode"], .component-card:first-of-type .actions .copy-btn',
        title: 'Copy',
        instruction: 'Copy the snippet to clipboard.',
      },
      {
        selector: '#playgroundDrawer',
        title: 'Playground (optional)',
        instruction: 'Experiment with the playground if it exists on this page.',
      }
    ],
  };

  window.TutorialModeSteps = Steps;
})();

