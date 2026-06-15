const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.backgroundPosition = `${x / 5}px ${y / 5}px`;
  });
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

  box.addEventListener("mousemove", (e) => {

    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.transform =
      `
      perspective(1000px)
      rotateX(${-(y - rect.height / 2) / 25}deg)
      rotateY(${(x - rect.width / 2) / 25}deg)
      scale(1.03)
      `;
  });

  box.addEventListener("mouseleave", () => {

    box.style.transform =
      `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
      `;
  });

});