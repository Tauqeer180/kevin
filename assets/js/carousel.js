document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cardWidth = carouselWrapper.clientWidth / 3; // Width of one card
  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -currentIndex * cardWidth;
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
  }

  function showNextCard() {
    if (currentIndex < carouselWrapper.children.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  }

  function showPrevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  nextBtn.addEventListener("click", showNextCard);
  prevBtn.addEventListener("click", showPrevCard);
});
