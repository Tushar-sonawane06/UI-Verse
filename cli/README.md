# UI-Verse CLI

A command-line tool to install UI-Verse components into your projects.

## Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/UI-Verse.git
cd UI-Verse

# Install dependencies
cd cli
npm install
```

## Usage

### List available components

```bash
node cli/src/index.js list
# or
npm run cli:list
```

### Add a component to your project

```bash
node cli/src/index.js add <component-name>
# or
npm run cli:add button
```

Options:
- `-d, --directory <path>` - Target directory for installation (default: current directory)

Example:
```bash
# Add button component to current directory
npx uiverse add button

# Add button component to specific directory
npx uiverse add button --directory ./my-project
```

### Initialize a new UI-Verse project

```bash
node cli/src/index.js init
# or
npm run cli:init
```

This creates a basic project structure with:
- `index.html`
- `css/styles.css`
- `js/main.js`
- `components/` directory

## Available Components

- **button** - Button styles (gradient, outline, neon, glass, etc.)
- **navbar** - Navigation bars
- **cards** - Card layouts
- **badges** - Status badges
- **form** - Form controls
- **footer** - Footer patterns
- **alerts** - Alerts and toasts
- **toggles** - Toggle switches
- **pricing** - Pricing tables
- **testimonials** - Testimonial components
- **clock** - Clock components
- **weather** - Weather dashboard
- **todo** - Todo list app
- **music** - Music player
- **admin** - Admin dashboard

## Registry

Components are defined in `data/registry.json`. You can add more components to this file to extend the CLI.

## How it works

1. The CLI reads the `registry.json` file to find component metadata
2. When you run `add`, it searches for the component files in:
   - Component folder (e.g., `button/`)
   - Root folder (e.g., `button.css`, `button.html`)
   - Data snippets folder (e.g., `data/snippets/button/`)
3. Files are copied to the target directory with a README

## License

MIT