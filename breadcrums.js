// =========================================================
// FILTER ACTIVE
// =========================================================

const filterBtns =
  document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    filterBtns.forEach((b)=>{

      b.classList.remove("active");

    });

    btn.classList.add("active");

  });

});

// =========================================================
// BREADCRUMB LINK ACTIVE
// =========================================================

const breadcrumbLinks =
  document.querySelectorAll(".breadcrumb a");

breadcrumbLinks.forEach((link)=>{

  link.addEventListener("click",(e)=>{

    e.preventDefault();

    breadcrumbLinks.forEach((l)=>{

      l.style.color = "#d1d5db";

    });

    link.style.color = "#eb6835";

  });

});

// =========================================================
// STEPPER ACTIVE
// =========================================================

const steps =
  document.querySelectorAll(".step");

steps.forEach((step,index)=>{

  step.addEventListener("click",()=>{

    steps.forEach((s,i)=>{

      if(i <= index){

        s.classList.add("active");

      }else{

        s.classList.remove("active");

      }

    });

  });

});

const observer =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

document
.querySelectorAll(".component-card")
.forEach(card => observer.observe(card));
document
.getElementById("copyAll")
.addEventListener("click",()=>{

  const code = [...document.querySelectorAll("pre")]
  .map(pre=>pre.innerText)
  .join("\n\n");

  navigator.clipboard.writeText(code);

});