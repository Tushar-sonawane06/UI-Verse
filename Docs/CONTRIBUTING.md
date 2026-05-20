<!-- markdownlint-disable MD033 -->
<h1 align="center">✨ Contributors Guide ✨</h1>

<h2 align="center">Welcome to the UI-Verse project! 😍</h2>

<h2 align="center">We appreciate your interest in contributing. 😊</h2>

First off, thank you for considering contributing to **UI-Verse!** We're excited to have you join our community. Every contribution, no matter how small, helps us build the best academic resource platform for students.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

This guide will walk you through the entire contribution process, from setting up your local environment to submitting a polished pull request.

> **New to Open Source?** No problem! This guide is designed to be beginner-friendly. If you get stuck, don't hesitate to open an issue or ask for help.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [License](#license)
3. [Ways to Contribute](#ways-to-contribute)
4. [How You Can Contribute](#how-you-can-contribute)
5. [Getting Started](#getting-started)
6. [Project Structure](#project-structure)
7. [How to Create a Component](#how-to-create-a-component)
8. [PR review Process](#pr-review-process)
9. [Guidelines](#guidelines)
10. [How To Contribute](#how-to-contribute)
11. [Need More Help](#need-more-help)
12. [Attribution](#attribution)
13. [Thank you for your contribution](#thank-you-for-your-contribution)

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 📜 Code of Conduct <a id="code-of-conduct"></a>

We expect all contributors to follow our [`Code of Conduct`](https://github.com/Tushar-sonawane06/UI-Verse/blob/main/Docs/CODEOFCONDUCT.md).

By participating in this project, you agree to maintain a **respectful and inclusive environment** for everyone.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 📜 License <a id="license"></a>

By contributing to this project, you agree that your contributions will be licensed under the [`Apache License 2.0`](https://github.com/Tushar-sonawane06/UI-Verse/blob/main/Docs/LICENSE.md).

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 🤝 Ways to Contribute <a id="ways-to-contribute"></a>

You can contribute in several ways:

- **🐞 Report Bugs:** Submit issues for reproducible bugs.
- **💡 Suggest Features:** Propose new ideas or improvements.
- **📖 Improve Documentation:** Enhance clarity, grammar, or structure.
- **⚡ Add Code:** Fix bugs, build new features, or optimize existing ones.
- **🧪 Test:** Help us find issues by testing code in different environments.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 🌟 How You Can Contribute <a id="how-you-can-contribute"></a>

### 🎨 UI Components

- Add new buttons, cards, navbars, forms, loaders
- Improve existing components
- Make components responsive

### ⚙️ Features

- Add new pages
- Improve copy-to-clipboard functionality
- Add dark mode 🌙
- Improve sidebar navigation

### 🐛 Bug Fixes

- Fix UI issues
- Resolve broken layouts
- Improve responsiveness

### 📄 Documentation

- Improve README
- Add examples
- Fix typos

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 🚀 Getting Started <a id="getting-started"></a>

### 1️⃣ Fork the Repository

Click on the Fork button.

### 2️⃣ Clone Your Fork

`git clone https://github.com/your-username/uiverse.git`

### 3️⃣ Create a Branch

git checkout -b feature/your-feature-name

### 4️⃣ Make Changes

Follow structure, keep code clean, add comments if needed.

### 5️⃣ Commit Changes

git commit -m "Added: new feature"

### 6️⃣ Push Changes

git push origin feature/your-feature-name

### 7️⃣ Create Pull Request

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 📂 Project Structure <a id="project-structure"></a>

uiverse/
├── public/
├── assets/
├── components/
├── docs/

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 🎯 How to Create a Component <a id="how-to-create-a-component"></a>

Follow these steps when adding a new UI component. This helps keep new contributions consistent, accessible, and easy to review.

### 1. Pick a clear component name

- Use lowercase words and hyphens for filenames: `gradient-button.html`, `gradient-button.css`.
- Use PascalCase or kebab-case in documentation examples and component IDs when relevant.

### 2. Create the files in the right folder

- Add the component markup in the root folder if it is a standalone example page.
- Add the accompanying stylesheet alongside the HTML file if the component has its own CSS.
- For reusable shared components, place them under `components/` and update docs or index pages if required.

Example structure for a new component:

```
gradient-button.html
gradient-button.css
```

### 3. Follow the sample component template

Use this boilerplate for a new component so reviewers can quickly understand the structure.

```html
<!-- gradient-button.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gradient Button Component</title>
    <link rel="stylesheet" href="gradient-button.css" />
  </head>
  <body>
    <div class="component-wrapper">
      <button class="gradient-button" type="button">
        Gradient Button
      </button>
    </div>
  </body>
</html>
```

```css
/* gradient-button.css */
:root {
  --button-bg: linear-gradient(135deg, #4f46e5, #6366f1);
  --button-text: #ffffff;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: #f8fafc;
}

.component-wrapper {
  text-align: center;
}

.gradient-button {
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 9999px;
  background: var(--button-bg);
  color: var(--button-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gradient-button:hover,
.gradient-button:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(99, 102, 241, 0.18);
  outline: none;
}

.gradient-button:focus-visible {
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
}
```

### 4. Keep accessibility and responsiveness in mind

- Use semantic HTML and logical structure.
- Add visible focus styles for keyboard users.
- Ensure text contrast is strong enough for readability.
- Test resizing the browser to confirm layout and spacing look good on mobile.

### 5. Update documentation and examples

- Add a short description of the component in the comments or page header.
- If the component is reusable, link it from the relevant docs/index page.
- Include screenshots in your pull request when possible.

### 6. Submit your contribution

- Commit with a descriptive message: `git commit -m "Add: Gradient Button component"`
- Push to your feature branch and open a PR.
- Mention that this change follows the component tutorial and naming conventions.

> Suggested labels for first-time component contributions: `documentation`, `good first issue`.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## ✅ PR Review Process <a id="pr-review-process"></a>

We aim to keep things smooth and transparent:

- Once your PR is submitted, a maintainer will review it.
- You may be asked to:
  - Fix styling issues.
  - Add missing documentation/tests.
  - Break large PRs into smaller pieces.
- After approval:
  - Your PR will be merged with a squash merge to keep history clean.
  - You’ll receive feedback, even if the PR isn’t merged immediately.
- ⌛ Reviews may take **24–72 hours** depending on activity. Thanks for your patience!

 > For Any Query, Send DM on LinkedIn [Tushar Sonawane](https://www.linkedin.com/in/tushar-sonawane-800422336/).

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 📌 Guidelines <a id="guidelines"></a>

- Write clean code
- Use proper indentation
- Keep UI responsive
- Follow folder structure

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## How To Contribute <a id="how-to-contribute"></a>

- Drop a Star ⭐ in this repo
- Take a look at the existing [Issues](https://github.com/Tushar-sonawane06/UI-Verse/issues).
- Fork the Repo & create a branch for any issue that you are working on and commit your work.
- At first raise an issue in which you want to work
- Then after assigning only then work on that issue & make a PR
- Create a [**Pull Request**](https://github.com/Tushar-sonawane06/UI-Verse/pulls), which will be promptly reviewed and given suggestions for improvements by the community.
- **REMINDER: Don't raise more than 2 `Issue` at a time**
- **IMPORTANT: Don't make any type of `Pull Request` until & unless you get assigned to an `Issue`**
- Add screenshots or screen captures to your `Pull Request` to help us understand the effects of the changes that are included in your commits.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## Need More Help? 🤔 <a id="need-more-help"></a>

You can refer to the following articles on basics of Git and Github and also contact the Project Mentors, in case you are stuck:

- [How to create a Issue](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://docs.github.com/get-started)

### Show some ❤️ by 🌟 this repository

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 🏅 Attribution <a id="attribution"></a>

This **CONTRIBUTING.md** was prepared with **❤️** by **Divya Jain** for **UI-Verse** as part of the **NSoC'26 program.**

The structure and recommendations follow **GitHub Open Source Guides** and best practices used in leading open-source repositories.

![Line](https://user-images.githubusercontent.com/85225156/171937799-8fc9e255-9889-4642-9c92-6df85fb86e82.gif)

## 👍 Thank you for your contribution <a id="thank-you-for-your-contribution"></a>

### Thank you for contributing to UI-Verse 🌟

### We can't wait to see what you build! 🍽️✨
