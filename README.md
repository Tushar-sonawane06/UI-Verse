# 🌸 Nexus Spring of Code Project

# 🚀 UIverse – Frontend Component Hub

🔗 **GitHub Repository:**
https://github.com/Tushar-sonawane06/UI-Verse

UIverse is a beginner-friendly open-source project that provides a growing collection of reusable UI components built using **HTML, CSS, and JavaScript**.

The goal of UIverse is to help developers—especially beginners—make their first open-source contribution while learning how to build clean, responsive, and reusable UI components.

---

## 🌟 Features

* 🎨 Collection of reusable UI components
* 🧩 Beginner-friendly contribution system
* 📂 Well-structured folders for easy navigation
* 👀 Live preview of components
* 📋 View & Copy code functionality
* 🚀 Multi-page UI (Sidebar-based navigation)
* 🌙 Upcoming Dark Mode support
* 📱 Fully responsive UI improvements

---

## 🖥️ Live Preview
Live demo: https://tushar-sonawane06.github.io/UI-Verse/

> This repository is configured to auto-deploy to GitHub Pages via GitHub Actions. After pushing this change the Pages workflow will run — deployment may take a few minutes. If the site is not live yet, trigger the "Deploy to Pages" workflow from the Actions tab or check again in a few minutes.

---

## 📁 Updated Project Structure

```
UI-Verse/
│
├── index.html
├── Navbar.html
├── alerts.html
├── badges.html
├── button.html
├── cards.html
├── color.html
├── footer.html
├── form.html
├── loaders.html
├── pricing.html
├── testimonials.html
├── toggles.html
├── privacypolicy.html
│
├── style.css
├── script.js
├── .gitignore
├── favicon.ico
│
├── components/
│   ├── buttons/
│   ├── cards/
│   ├── navbars/
│   ├── forms/
│   └── loaders/
│
├── Contributing.md
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Git installed on your system

### 1️⃣ Fork the Repository

Click on the **Fork** button (top-right of GitHub)

---

### 2️⃣ Clone Your Fork

```bash
git clone https://github.com/your-username/UI-Verse.git
cd UI-Verse
```

---

### 3️⃣ Open the Project

**Option A — Quick Preview:**
Simply open `index.html` in your browser by double-clicking it.

**Option B — Live Server (Recommended):**
If you have VS Code, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html`, and select "Open with Live Server". This provides auto-reload on file changes.

**Option C — Python HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

---

### 4️⃣ Start Customizing

Browse the component pages via the sidebar navigation. Each page contains reusable UI components with viewable and copyable code snippets.

---

## Component Versioning

UI-Verse tracks each core component with semantic versions in `data/meta/*.json` and publishes a combined changelog in `CHANGELOG_COMPONENTS.md`.

Use these commands:

```bash
npm run components:version:generate
npm run components:version:check
npm run components:version:bump -- --bump=button:patch --note="Describe what changed"
```

- `generate`: ensures metadata exists for all components and refreshes the changelog.
- `check`: verifies semver format, changelog consistency, and component path validity.
- `bump`: increments one component version (`patch|minor|major`) and prepends a changelog entry.

---

## Component Usage Quick Examples

Use this quick workflow when you add any UIverse component to a project:

1. Add global base styles.
2. Add the component stylesheet.
3. Paste the component HTML.
4. Add optional behavior with JavaScript (if needed).

### 1) Buttons

```html
<link rel="stylesheet" href="home.css">
<link rel="stylesheet" href="button.css">

<button class="primary-btn">Get Started</button>
```

### 2) Cards

```html
<link rel="stylesheet" href="home.css">
<link rel="stylesheet" href="cards.css">

<article class="profile-card">
	<div class="profile-avatar">UI</div>
	<h3>UIverse Card</h3>
	<p>Reusable card layout for content blocks.</p>
</article>
```

### 3) Alerts

```html
<link rel="stylesheet" href="alerts.css">

<div class="alert success">
	<i class="fa-solid fa-circle-check"></i>
	Profile updated successfully.
</div>
```

### 4) Forms

```html
<link rel="stylesheet" href="forms.css">

<form class="form-card">
	<label>Email</label>
	<input type="email" placeholder="you@example.com" required>
	<button type="submit" class="primary-btn">Submit</button>
</form>
```

### 5) Navbar

```html
<link rel="stylesheet" href="navbar.css">

<nav class="mini-nav">
	<span class="mini-brand">UIverse</span>
	<div class="mini-links">
		<span>Docs</span>
		<span>Components</span>
	</div>
</nav>
```

### 6) Inputs

```html
<link rel="stylesheet" href="input.css">

<div class="preview-input-wrap">
	<i class="fa-solid fa-magnifying-glass preview-icon"></i>
	<input class="preview-input" type="text" placeholder="Search components">
</div>
```

### 7) Badges

```html
<link rel="stylesheet" href="badges.css">

<div class="badge-container">
	<div class="badge">
		<h3>First PR</h3>
		<p>Opened your first pull request.</p>
	</div>
</div>
```

For more examples, open each component page (for example `alerts.html`, `cards.html`, `forms.html`) and copy snippets from the "View Code" blocks.

---

## 🤝 Contributing Guide

We welcome contributions from beginners 💙

### 🔰 Steps to Contribute

1. Go to the **Issues** section
2. Choose an issue to work on
3. Comment to get assigned
4. Fork the repository
5. Create a new branch

```
git checkout -b feature/your-feature-name
```

6. Make your changes
7. Commit changes

```
git commit -m "Added: your feature name"
```

8. Push to GitHub

```
git push origin feature/your-feature-name
```

9. Create a Pull Request 🎉

---

## 📌 Contribution Guidelines

* ✅ Keep code clean and readable
* ✅ Follow proper folder structure
* ✅ Make components responsive
* ✅ Use meaningful commit messages
* ✅ Avoid breaking existing UI
* ✅ Add comments where necessary

---

## 🧩 Contribution Areas

### 🎯 Components

* Buttons
* Cards
* Navbars
* Forms
* Loaders
* Alerts
* Badges
* Toggles
* Pricing Sections
* Testimonials

---

### 🎨 UI Improvements

* Improve responsiveness
* Add animations
* Enhance UX/UI
* Improve mobile experience

---

### ⚙️ Features

* Add new component pages
* Improve code preview system
* Add dark mode 🌙
* Improve sidebar navigation
* Add search functionality

---

## 🏷️ Issue Labels

* `good first issue` → Beginner-friendly
* `enhancement` → Feature request
* `bug` → Bug fixes
* `documentation` → Docs improvements

---

## 💡 Example Contributions

* Add a gradient button
* Create a responsive navbar
* Add hover effects to cards
* Improve mobile layout
* Add new UI components

---

## 🎯 Project Goals

* Help beginners start open-source contributions
* Build a large UI component library
* Create a developer-friendly UI showcase platform

---

## ⭐ Support

If you like this project:

* Give it a ⭐
* Share it with others
* Contribute 🚀

---

## 👨‍💻 Maintainer

**Project Admin:** Tushar Sonawane

---

💙 Happy Coding & Contributing!
