/**
 * AI Component Generator
 * Streams component generation from /api/generate and updates live preview
 */

const AIGenerator = (function () {
  const _state = {
    initialized: false,
    currentHTML: "",
    currentCSS: "",
    previousPrompt: "",
    isGenerating: false,
  };

  const API_URL = "/api/generate";

  function getElements() {
    return {
      input: document.getElementById("generateInput"),
      btn: document.getElementById("generateBtn"),
      refineBtn: document.getElementById("refineBtn"),
      copyBtn: document.getElementById("copyGeneratedBtn"),
      status: document.getElementById("generateStatus"),
      previewFrame: document.getElementById("generatePreviewFrame"),
    };
  }

  function buildPreviewDoc(html, css) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      font-family: 'DM Sans', Arial, sans-serif;
    }
    ${css}
  </style>
</head>
<body>${html}</body>
</html>`;
  }

  function updatePreview(html, css) {
    const { previewFrame } = getElements();
    if (!previewFrame) return;
    previewFrame.srcdoc = buildPreviewDoc(html, css);
  }

  function setStatus(msg, type = "info") {
    const { status } = getElements();
    if (!status) return;
    status.textContent = msg;
    status.style.color = type === "error" ? "#d63031" : type === "success" ? "#00b894" : "var(--text-secondary)";
  }

  async function generate(prompt, refinement = "", previous = "") {
    if (_state.isGenerating) return;
    _state.isGenerating = true;

    const { btn, refineBtn, copyBtn } = getElements();
    if (btn) btn.disabled = true;
    setStatus("Generating component...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, refinement, previous }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      _state.currentHTML = data.html || "";
      _state.currentCSS = data.css || "";
      _state.previousPrompt = prompt;

      updatePreview(_state.currentHTML, _state.currentCSS);

      if (refineBtn) refineBtn.style.display = "";
      if (copyBtn) copyBtn.style.display = "";
      setStatus("Generation complete!", "success");
    } catch (err) {
      setStatus(err.message || "Generation failed. Try again later.", "error");
      console.error("[AIGenerator]", err);
    } finally {
      _state.isGenerating = false;
      if (btn) btn.disabled = false;
    }
  }

  function init() {
    if (_state.initialized) return;

    const { input, btn, refineBtn, copyBtn } = getElements();
    if (!input || !btn) {
      console.warn("[AIGenerator] Generate panel DOM not found. Skipping.");
      _state.initialized = true;
      return;
    }

    btn.addEventListener("click", () => {
      const prompt = input.value.trim();
      if (!prompt) {
        setStatus("Enter a description first.", "error");
        return;
      }
      generate(prompt);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
      }
    });

    if (refineBtn) {
      refineBtn.addEventListener("click", () => {
        const refinement = input.value.trim();
        if (!refinement) {
          setStatus("Enter a refinement instruction.", "error");
          return;
        }
        generate(refinement, refinement, `${_state.currentHTML}\n\n${_state.currentCSS}`);
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const code = `${_state.currentHTML}\n\n${_state.currentCSS}`;
        navigator.clipboard.writeText(code).then(() => {
          setStatus("Code copied to clipboard!", "success");
        }).catch(() => setStatus("Failed to copy.", "error"));
      });
    }

    _state.initialized = true;
  }

  return { init, generate, getState: () => ({ ..._state }) };
})();

window.AIGenerator = AIGenerator;