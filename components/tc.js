const testimonials = [
  {
    text: "This UI component is clean and very easy to use.",
    name: "John Doe"
  },
  {
    text: "The carousel animations feel smooth and responsive.",
    name: "Sarah Lee"
  },
  {
    text: "Modern design and simple user experience.",
    name: "Michael Smith"
  }
];

let currentIndex = 0;

const testimonialText = document.getElementById("testimonial-text");
const testimonialName = document.getElementById("testimonial-name");

function showTestimonial(index){
  testimonialText.innerText = testimonials[index].text;
  testimonialName.innerText = testimonials[index].name;
}

function nextSlide(){
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevSlide(){
  currentIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;

  showTestimonial(currentIndex);
}

setInterval(nextSlide, 4000);