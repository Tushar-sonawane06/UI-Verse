export function initPreview(container, collab) {
  const iframe = document.createElement('iframe');
  iframe.className = 'workspace-preview-frame';
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.setAttribute('title', 'Collaborative preview');
  container.appendChild(iframe);

  function buildSrcdoc() {
    const html = collab.htmlText.toString();
    const css = collab.cssText.toString();
    const js = collab.jsText.toString();

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 20px; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    (function(){
      window.onerror = function(msg, url, line) {
        console.error('Preview error:', msg, 'at line', line);
      };
      try {
        ${js}
      } catch (e) {
        console.error('Workspace JS error:', e);
      }
    })();
  <\/script>
</body>
</html>`;
  }

  let timeout;
  const scheduleRender = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      iframe.srcdoc = buildSrcdoc();
    }, 150);
  };

  collab.htmlText.observe(() => scheduleRender());
  collab.cssText.observe(() => scheduleRender());
  collab.jsText.observe(() => scheduleRender());

  iframe.srcdoc = buildSrcdoc();

  return { iframe, destroy: () => clearTimeout(timeout) };
}