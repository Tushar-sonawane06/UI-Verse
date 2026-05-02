# 🔐 Security Policy

## 📌 Project

**UIverse – Frontend Component Hub**
Part of *Nexus Spring of Code*

---

## 🛡️ Supported Versions

We actively maintain and provide security updates for:

| Version              | Supported |
| -------------------- | --------- |
| Latest (main branch) | ✅ Yes     |
| Older versions       | ❌ No      |

We recommend always using the **latest version** of UIverse.


## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in UIverse, please report it responsibly.

### 📩 Contact

* GitHub Issues (preferred): Open a **private/security issue** if available
* Maintainer: **Tushar Sonawane**
* Repository: https://github.com/Tushar-sonawane06/UI-Verse


## 📝 What to Include

Please include the following details:

* Description of the vulnerability
* Steps to reproduce
* Expected vs actual behavior
* Possible impact (low / medium / high)
* Screenshots or code snippets (if applicable)


## 🔒 Responsible Disclosure

We follow responsible disclosure practices:

* ❌ Do NOT publicly disclose vulnerabilities before they are fixed
* ⏳ Allow maintainers reasonable time to respond and patch
* 🧪 Avoid exploiting vulnerabilities beyond proof-of-concept


## ⚙️ Security Guidelines for Contributors

Since UIverse is a frontend-focused project (HTML, CSS, JavaScript), contributors should follow these best practices:

### ✅ Do

* Sanitize user inputs (if any dynamic input is added)
* Use safe DOM manipulation methods
* Keep external libraries updated
* Write clean and readable code

### ❌ Avoid

* Using `eval()` or unsafe JavaScript execution
* Injecting raw HTML without validation
* Exposing sensitive data (API keys, tokens)
* Adding untrusted third-party scripts

---

## 📦 Dependencies & Assets

* Use trusted CDNs (e.g., Font Awesome)
* Avoid outdated or vulnerable libraries
* Prefer lightweight and secure resources

---

## 🌐 Scope of Security

This project mainly includes:

* Static UI components
* Client-side JavaScript
* No backend or database

Therefore, most risks are related to:

* XSS (Cross-Site Scripting)
* Unsafe DOM handling
* Malicious external scripts


## 🙌 Acknowledgements

We appreciate contributors who responsibly report vulnerabilities and help improve the safety of UIverse 💙



## 📅 Updates

This security policy may evolve as the project grows and new features are added.



