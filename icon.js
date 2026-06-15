// =========================================================
// FILTER ACTIVE
// =========================================================
const filters = document.querySelectorAll(".filter-btn");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// =========================================================
// UNIFIED COPY CONTROLLER (Basic & Advanced Cards)
// =========================================================
function handleCopy(btn, cardSelector, defaultText) {
  const card = btn.closest(cardSelector);
  if (!card) return;
  
  const p = card.querySelector("p");
  if (!p) return;
  
  const iconName = p.innerText.trim();

  const updateButtonText = () => {
    btn.innerText = "Copied!";
    setTimeout(() => { 
      btn.innerText = defaultText; 
    }, 1500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(iconName)
      .then(updateButtonText)
      .catch(() => fallbackCopy(iconName, updateButtonText));
  } else {
    fallbackCopy(iconName, updateButtonText);
  }
}

// Reusable fallback handler for non-HTTPS / file:// protocols
function fallbackCopy(text, callback) {
  const ta = document.createElement("textarea");
  ta.value = text;
  // Prevent scrolling to bottom when appending
  ta.style.position = "fixed"; 
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  
  try {
    document.execCommand("copy");
    callback();
  } catch (err) {
    console.error("Fallback copy execution failed layout fallback: ", err);
  }
  
  document.body.removeChild(ta);
}

// Attach Event Listeners for Copy Actions
document.addEventListener("click", (e) => {
  const copyBtn = e.target.closest(".copy-btn");
  const copyAdvancedBtn = e.target.closest(".copy-icon-btn");

  if (copyBtn) {
    handleCopy(copyBtn, ".icon-card", "Copy");
  } else if (copyAdvancedBtn) {
    handleCopy(copyAdvancedBtn, ".advanced-icon-card", "Copy Icon");
  }
});

// =========================================================
// UNIFIED ENGINE SEARCH FILTER
// =========================================================
function performLiveFilter(query) {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Selects both basic and advanced style card nodes cleanly
  const targets = document.querySelectorAll(".icon-card, .advanced-icon-card");

  targets.forEach((card) => {
    const isMatched = card.innerText.toLowerCase().includes(normalizedQuery);
    
    // Using a visibility class style mutation avoids overriding flex/grid attributes
    if (isMatched) {
      card.style.removeProperty("display");
    } else {
      card.style.display = "none";
    }
  });
}

// JavaScript-based listener attachment fallback
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    performLiveFilter(e.target.value);
  });
}

// Global exposure map targeting standard HTML inline macro: oninput="liveFilter(this.value)"
window.liveFilter = function(value) {
  performLiveFilter(value);
};