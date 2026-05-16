const timelineItems = document.querySelectorAll(".timeline-item");

function showTimeline() {
  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showTimeline);

showTimeline();