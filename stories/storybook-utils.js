export function createShadowRootStory({ title, styles = [], extraStyles = '', content }) {
  const host = document.createElement('div');
  host.style.minHeight = '100vh';
  host.style.background = '#081120';
  host.style.padding = '24px';

  const shadow = host.attachShadow({ mode: 'open' });

  const styleNodes = styles
    .map((href) => `<link rel="stylesheet" href="${href}">`)
    .join('');

  shadow.innerHTML = `
    ${styleNodes}
    <style>
      :host {
        display: block;
      }

      .storybook-shell {
        color: #f8fafc;
        font-family: 'DM Sans', Arial, sans-serif;
      }

      .storybook-title {
        margin: 0 0 16px;
        font-size: 14px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #94a3b8;
      }

      ${extraStyles}
    </style>
    <div class="storybook-shell">
      <p class="storybook-title">${title}</p>
      ${content}
    </div>
  `;

  return host;
}
