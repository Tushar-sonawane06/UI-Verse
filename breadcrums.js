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