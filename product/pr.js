const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = ((x / rect.width) - 0.5) * 25;
  const rotateX = ((y / rect.height) - 0.5) * -25;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0) rotateY(0)";
});

const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * -14;
  const rotateY = ((x / rect.width) - 0.5) * 14;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
});