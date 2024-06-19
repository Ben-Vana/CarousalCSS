const buttons = document.querySelectorAll(".carousel-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const slideAction = button.classList.contains("next") ? 1 : -1;
    const slides = document.querySelector(".slides-container");
    const activeSlide = document.querySelector(".active");
    let nextSlideAction =
      [...slides.children].indexOf(activeSlide) + slideAction;

    if (nextSlideAction < 0) {
      nextSlideAction = slides.children.length - 1;
    }
    if (nextSlideAction >= slides.children.length) {
      nextSlideAction = 0;
    }

    slides.children[nextSlideAction].classList.add("active");
    activeSlide.classList.remove("active");
  });
});
