# alert.md

# Alert Component

Component ID: alert

- Path: alert.html
- Version: 0.1.0
- Documentation score: 97/100
- Tags: alerts, notifications, ui, messages
- Description: Stylish alert boxes for warnings, success states, errors, and information messages.

## Assets

- CSS: css/main.css, alert.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS: -

## Headings

- H1: Alert Components
- H2: Success Alerts
- H2: Error Alerts
- H2: Warning Alerts
- H2: Info Alerts

## Usage Snippet

```html
<main class="main-home">

<div class="alerts-grid">

  <div class="alert success-alert">

    <i class="fa-solid fa-circle-check"></i>

    <div>

      <h3>
        Success
      </h3>

      <p>
        Your changes have been saved.
      </p>

    </div>

  </div>

  <div class="alert error-alert">

    <i class="fa-solid fa-circle-xmark"></i>

    <div>

      <h3>
        Error
      </h3>

      <p>
        Something went wrong.
      </p>

    </div>

  </div>

</div>

</main>
```