(function () {
  const drawer = document.getElementById("playgroundDrawer");
  if (!drawer) return;

  const preview = document.getElementById("playgroundPreview");
  const code = document.getElementById("playgroundCode");
  const title = document.getElementById("playgroundTitle");
  const resetBtn = document.getElementById("playgroundReset");
  const closeBtn = document.getElementById("playgroundClose");
  const backdrop = document.getElementById("playgroundBackdrop");

  const controls = Array.from(drawer.querySelectorAll("[data-control]"));
  const valueLabels = Array.from(drawer.querySelectorAll("[data-value]"));

  const defaultsByType = {
    button: {
      size: 160,
      radius: 10,
      padding: 12,
      fontSize: 14,
      background: "#eb6835",
      textColor: "#ffffff",
      shadow: 12
    },
    card: {
      size: 260,
      radius: 16,
      padding: 20,
      fontSize: 14,
      background: "#ffffff",
      textColor: "#111111",
      shadow: 16
    },
    input: {
      size: 260,
      radius: 10,
      padding: 10,
      fontSize: 14,
      background: "#ffffff",
      textColor: "#111111",
      shadow: 8
    }
  };

  let activeType = document.body.dataset.playgroundType || "button";
  let activeTarget = null;

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
  }

  function setValueLabel(name, value) {
    valueLabels.forEach((label) => {
      if (label.dataset.value === name) {
        label.textContent = value;
      }
    });
  }

  function setControls(values) {
    controls.forEach((input) => {
      const key = input.dataset.control;
      if (!key || values[key] === undefined) return;
      input.value = values[key];
      setValueLabel(key, values[key]);
    });
  }

  function getControlValues() {
    const next = {};
    controls.forEach((input) => {
      const key = input.dataset.control;
      if (!key) return;
      if (input.type === "range") {
        next[key] = Number(input.value);
      } else {
        next[key] = input.value;
      }
    });
    return next;
  }

  function styleForType(type, values) {
    const shadowValue = values.shadow
      ? "0 " + values.shadow + "px " + (values.shadow * 2) + "px rgba(0,0,0,0.18)"
      : "none";

    const base = {
      borderRadius: values.radius + "px",
      padding: values.padding + "px",
      fontSize: values.fontSize + "px",
      background: values.background,
      color: values.textColor,
      boxShadow: shadowValue
    };

    if (type === "button") {
      base.minWidth = values.size + "px";
    } else {
      base.width = values.size + "px";
    }

    return base;
  }

  function applyStyles() {
    if (!activeTarget) return;

    const values = getControlValues();
    const styles = styleForType(activeType, values);

    Object.keys(styles).forEach((prop) => {
      activeTarget.style[prop] = styles[prop];
    });

    const styleText = Object.keys(styles)
      .map((key) => {
        const cssKey = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        return cssKey + ": " + styles[key] + ";";
      })
      .join(" ");

    activeTarget.setAttribute("style", styleText);
    code.textContent = activeTarget.outerHTML;
  }

  function findPreviewElement(card) {
    const preview = card.querySelector(".card-preview");
    if (preview && preview.firstElementChild) return preview.firstElementChild;

    const candidates = Array.from(card.querySelectorAll("input, textarea, select, button, .profile-card, .simple-card, .product-card, .pricing-card, .image-card, .blog-card, .notif-card, .social-card"));
    return candidates.find((el) => !el.closest(".actions")) || null;
  }

  function openFromCard(card) {
    if (!card) return;

    const type = card.dataset.playgroundType || document.body.dataset.playgroundType || "button";
    const previewEl = findPreviewElement(card);
    if (!previewEl) return;

    activeType = type;
    preview.innerHTML = "";

    const clone = previewEl.cloneNode(true);
    clone.classList.add("playground-target");
    preview.appendChild(clone);

    activeTarget = clone;

    const defaults = defaultsByType[activeType] || defaultsByType.button;
    setControls(defaults);
    applyStyles();
    openDrawer();

    const cardTitle = card.querySelector("h3")?.textContent || "Component";
    if (title) title.textContent = cardTitle;
  }

  function injectPlaygroundButtons() {
    document.querySelectorAll(".component-card .actions").forEach((actions) => {
      if (actions.querySelector(".playground-open-btn")) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "playground-open-btn";
      btn.textContent = "Playground";
      actions.appendChild(btn);
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openFromCard(actions.closest(".component-card"));
      });
    });
  }

  controls.forEach((input) => {
    input.addEventListener("input", () => {
      setValueLabel(input.dataset.control, input.value);
      applyStyles();
    });
  });

  resetBtn?.addEventListener("click", () => {
    const defaults = defaultsByType[activeType] || defaultsByType.button;
    setControls(defaults);
    applyStyles();
  });

  closeBtn?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);

  function init() {
    injectPlaygroundButtons();
    closeDrawer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
