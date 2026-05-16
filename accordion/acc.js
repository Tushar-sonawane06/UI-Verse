const accordionButtons =
  document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

  button.addEventListener("click", () => {

    const content =
      button.nextElementSibling;

    if(content.style.maxHeight){

      content.style.maxHeight = null;
    }
    else{

      content.style.maxHeight =
        content.scrollHeight + "px";
    }

  });

});