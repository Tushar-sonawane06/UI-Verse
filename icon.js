// =========================================================
// FILTER ACTIVE
// =========================================================

const filters =
  document.querySelectorAll(".filter-btn");

filters.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    filters.forEach((b)=>{

      b.classList.remove("active");

    });

    btn.classList.add("active");

  });

});

// =========================================================
// COPY ICON NAME
// =========================================================

const copyBtns =
  document.querySelectorAll(".copy-btn");

copyBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    const iconName =
      btn.previousElementSibling.innerText;

    navigator.clipboard.writeText(iconName);

    btn.innerText = "Copied!";

    setTimeout(()=>{

      btn.innerText = "Copy";

    },1500);

  });

});

// =========================================================
// SEARCH FILTER
// =========================================================

const searchInput =
  document.getElementById("iconSearch");

const iconCards =
  document.querySelectorAll(".icon-card");

searchInput.addEventListener("keyup",()=>{

  const value =
    searchInput.value.toLowerCase();

  iconCards.forEach((card)=>{

    const text =
      card.innerText.toLowerCase();

    card.style.display =
      text.includes(value)
      ? "block"
      : "none";

  });

});