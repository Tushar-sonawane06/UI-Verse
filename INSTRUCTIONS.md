# UI-Verse Instructions

This file explains the role of the main files in the repository and how the project works.

## Working Principle

- 🏗️ HTML files define page structure and component demos.
- 🎨 CSS files define layout, color, spacing, and motion.
- ⚙️ JavaScript files handle interactions like toggles, copy actions, and search.
- 📝 Markdown files document the project, contribution workflow, and community rules.
- 🖼️ Asset files support component previews and branding.

## Root Files

- 🏠 `index.html` - Main landing page for the UIverse experience and navigation hub.
- 🧭 `navbar.html` - Navbar component showcase page.
- 🔘 `button.html` - Button component showcase page.
- 🃏 `cards.html` - Cards component showcase page.
- ⌨️ `inputs.html` - Inputs component showcase page.
- 🧩 `forms.html` - Forms component showcase page.
- 🏷️ `badges.html` - Badge component showcase page.
- 🏷️ `badge.html` - Single badge demo page.
- 🔔 `alerts.html` - Alerts component showcase page.
- 🌀 `loaders.html` - Loader and animation showcase page.
- 💳 `pricing.html` - Pricing section showcase page.
- 💬 `testimonials.html` - Testimonials showcase page.
- 🎚️ `toggles.html` - Toggle switch showcase page.
- 👤 `profile.html` - Profile layout demo page.
- 📞 `contact.html` - Contact page.
- ℹ️ `about.html` - About page.
- ❓ `faq.html` - FAQ page.
- 📘 `documentation.html` - Documentation landing page.
- 🗂️ `guidelines.html` - Guidelines page for contributors or users.
- ⚙️ `settings.html` - Settings page demo.
- 📜 `license.html` - License page.
- 🔐 `privacypolicy.html` - Privacy policy page.
- 🧪 `playground.js` and `playground.css` - Interactive playground logic and styling.
- 🧵 `div.html` - Simple structure demo page for layout examples.
- ✂️ `span.html` and `span.css` - Span-based styling and utility demo.
- 🌈 `color.html` and `colors.css` - Color palette and utility showcase.
- 🧾 `footer.html` and `footer.css` - Footer component demo and styling.
- 🧷 `form.html`, `form.css`, and `forms.css` - Form demos and supporting styles.
- 🧱 `button.css` and `buttons.css` - Button styles for the button gallery.
- 🪟 `shared-page.css` - Shared page shell styles used across component pages.
- 🏠 `home.css` - Home page-specific styling.
- 🎛️ `style.css` - Global styling foundation.
- 🧠 `script.js` - Shared interaction logic for the entire site.
- 📚 `README.md` - Main repository overview.
- 🤝 `Contribute.html` - Contributor landing page.
- 📝 `contribute.css` - Styling for the contribution page.
- 🧭 `guide.css` - Styling used by guide-oriented pages.
- 📖 `doc.css` and `documentation.css` - Documentation page styling.
- 🗒️ `faq.css` - FAQ page styling.
- 👔 `about.css` - About page styling.
- 📬 `contact.css` - Contact page styling.
- 🎯 `pricing.css` - Pricing page styling.
- 💬 `testimonials.css` - Testimonials page styling.
- 🔐 `license.css` - License page styling.
- 🛡️ `privacy.css` - Privacy policy page styling.
- 📑 `terms.css` - Terms page styling.
- 🌀 `loaders.css` - Loader animation styling.
- 🃏 `cards.css` - Cards page styling.
- 🧭 `navbar.css` - Navbar page styling.
- ⌨️ `input.css` - Input component styling.
- 🔘 `button.html` and `buttons.css` - Button gallery and its enhanced styles.
- 🧭 `settings.html` - Settings page demo.
- 📘 `Code of Conduct.md` - Community behavior rules.
- 🔒 `Security.md` - Security reporting and disclosure guidance.
- 🧷 `license.css` and `license.html` - License page styling and content.
- 🖼️ `profile.jpeg` - Profile image asset used in demos.
- 🖼️ `uiverse.png` - Brand image used in the repository.
- 🖼️ `badge1.jpg` and `badge2.jpg` - Badge assets used in badge demos.
- 🖼️ `checkmark.png` - UI icon asset used in examples.
- 🖼️ `lock.jpg` - Lock icon asset used in examples.
- 🖼️ `time.png` - Time icon asset used in examples.

## Docs Folder

- 📘 `Docs/README.md` - Documentation overview for the Docs folder.
- 🏗️ `Docs/OVERVIEW.md` - High-level project overview and goals.
- 🏛️ `Docs/ARCHITECTURE.md` - Architecture summary for the static frontend stack.
- 🤝 `Docs/CONTRIBUTING.md` - Contributor workflow, review process, and contribution guidance.
- 🧭 `Docs/CODEOFCONDUCT.md` - Community conduct rules for contributors.
- 📜 `Docs/LICENSE.md` - License details for the project documentation.

## GitHub Workflow Files

- 🏷️ `.github/workflows/auto-label.yml` - GitHub Actions workflow that auto-labels NSOC-related issues.
- 🐞 `.github/ISSUE_TEMPLATE/bug_report.md` - Bug report template for reproducible issue submissions.
- ✨ `.github/ISSUE_TEMPLATE/feature_request.md` - Feature request template for scoped improvements.
- 📄 `.github/pull_request_template.md` - Pull request template that keeps submissions consistent.

## How to Use the Repository

1. Open any HTML file in a browser to preview a component page.
2. Edit the matching CSS file to change the visual design.
3. Update `script.js` when you need shared interaction logic.
4. Read the Docs folder first when you need project context or contribution rules.

## Notes

- Keep changes small and focused so they remain easy to review.
- Prefer reusing the existing layout and component classes before adding new patterns.
- Avoid storing secrets in the repository. Use `.env.example` for placeholders when needed.
