document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  function numberofCards() {
    const width = window.innerWidth;
    if (width <= 768) {
      // Mobile breakpoint, can be adjusted as per your design
      return 1;
    } else {
      return 2;
    }
  }
  const cardWidth = carouselWrapper.clientWidth / numberofCards(); // Width of one card
  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -currentIndex * cardWidth;
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
    console.log("Carosel", carouselWrapper.clientWidth);

    // Update button visibility
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display =
      currentIndex >= carouselWrapper.children.length - numberofCards()
        ? "none"
        : "block";
  }

  function showNextCard() {
    if (currentIndex < carouselWrapper.children.length - numberofCards()) {
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
