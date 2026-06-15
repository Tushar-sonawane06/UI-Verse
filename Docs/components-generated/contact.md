# Contact Us

Component ID: contact

- Path: contact.html
- Version: 0.0.1
- Documentation score: 100/100
- Tags: contact, form, email, support
- Description: Contact form and support page templates

## Assets

- CSS: contact.css, dist/shared.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS: dist/shared.js

## Headings

- H1: Get in Touch
- H3: Email Us
- H3: GitHub
- H3: Discord Community
- H3: Support Hours
- H2: Send a Message
- H3: Email Support
- H3: Discord Community

## Usage Snippet

```html
<section class="contact-info">

      <!-- Email -->
      <article class="info-card info-email">

        <div class="info-icon">
          <i class="fa-solid fa-envelope"></i>
        </div>

        <div>

          <h3>Email Us</h3>

          <p>Drop us a message anytime.</p>

          <a
            href="mailto:support@uiverse.com"
            class="info-link"
          >
            support@uiverse.com
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </article>

      <!-- GitHub -->
      <article class="info-card info-github">

        <div class="info-icon">
          <i class="fab fa-github"></i>
        </div>

        <div>

          <h3>GitHub</h3>

          <p>Found a bug? Open an issue.</p>

          <a
            href="https://github.com/uiverse"
            target="_blank"
            rel="noopener noreferrer"
            class="info-link"
          >
            github.com/uiverse
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </article>

      <!-- Discord -->
      <article class="info-card info-discord">

        <div class="info-icon">
          <i class="fab fa-discord"></i>
        </div>

        <div>

          <h3>Discord Community</h3>

          <p>Chat with developers live.</p>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            class="info-link"
          >
            Join our server
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </article>

      <!-- Support -->
      <article class="info-card info-support">

        <div class="info-icon">
          <i class="fa-solid fa-business-time"></i>
        </div>

        <div>

          <h3>Support Hours</h3>

          <p>Monday - Friday</p>

          <span class="info-link">
            9:00 AM – 6:00 PM IST
          </span>

        </div>

      </article>

    </section>
```
