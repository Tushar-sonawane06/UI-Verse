/**
 * Live Sandbox Feature
 * Provides live preview iframe for code examples
 */

const Sandbox = {
  /**
   * Initialize live sandboxes (iframes with editable code)
   */
  init() {
    const componentCards = document.querySelectorAll(".component-card");
    if (componentCards.length === 0) return;

    componentCards.forEach((card, index) => {
      const h3 = card.querySelector("h3");
      const actions = card.querySelector(".actions");
      const existingCodeBlock = card.querySelector(".code-block");

      const previewNodes = Array.from(card.childNodes).filter((node) => {
        return (
          (node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "")) &&
          node !== h3 &&
          node !== actions &&
          node !== existingCodeBlock &&
          node.nodeName !== "SCRIPT"
        );
      });

      if (previewNodes.length === 0 && !existingCodeBlock) return;

      let initialHTML = existingCodeBlock
        ? existingCodeBlock.textContent.trim()
        : previewNodes.map((n) => n.outerHTML || n.textContent).join("\n").trim();

      previewNodes.forEach((node) => node.remove());

      // Create iframe preview
      const iframe = document.createElement("iframe");
      iframe.style.width = "100%";
      iframe.style.minHeight = "160px";
      iframe.style.border = "1px solid #e8ebf2";
      iframe.style.borderRadius = "8px";
      iframe.style.background = "transparent";

      // Create editable textarea
      const textarea = document.createElement("textarea");
      if (existingCodeBlock) {
        textarea.id = existingCodeBlock.id;
        textarea.className = existingCodeBlock.className;
        textarea.style.display = existingCodeBlock.style.display || "none";
      } else {
        textarea.id = "live-code-" + index;
        textarea.className = "code-block";
        textarea.style.display = "none";

        if (actions) {
          const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]');
          const copyBtn = actions.querySelector('button[onclick^="copyCode"]');
          if (toggleBtn) toggleBtn.setAttribute("onclick", `toggleCode("${textarea.id}")`);
          if (copyBtn) copyBtn.setAttribute("onclick", `copyCode("${textarea.id}", this)`);
        }
      }

      textarea.value = initialHTML;
      textarea.style.width = "100%";
      textarea.style.minHeight = "120px";
      textarea.style.boxSizing = "border-box";
      textarea.style.resize = "vertical";

      const renderIframe = (htmlContent) => {
        iframe.srcdoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <link rel="stylesheet" href="style.css">
            <style>
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background: transparent;
                padding: 20px;
                box-sizing: border-box;
              }
            </style>
          </head>
          <body>${htmlContent}</body>
          </html>`;
      };

      renderIframe(initialHTML);

      // Debounced live update
      let timeout;
      textarea.addEventListener("input", (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => renderIframe(e.target.value), 300);
      });

      if (h3) {
        h3.after(iframe);
      } else {
        card.insertBefore(iframe, card.firstChild);
      }

      if (existingCodeBlock) {
        existingCodeBlock.replaceWith(textarea);
      } else if (actions) {
        actions.after(textarea);
      }
    });
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sandbox;
}
