"use strict";

const currentSlideClassName = "results__slider-item-current";
const currentDotClassName = "results__dot-current";
const sliderWindow = document.getElementsByClassName("results__slider-window")[0];
const sliderWindowWidth = sliderWindow.style.width || window.getComputedStyle(sliderWindow).width;
const sliderContainer = sliderWindow.children[0];
const slides = Array.from(sliderContainer.children);
const dots = Array.from(document.getElementsByClassName("results__dots")[0].children);

function prevSlide() {
  var currentSlide = getCurrentSlide();
  if (slides.indexOf(currentSlide) === 0) {
    return;
  }
  setCurrentSlide(currentSlide.previousElementSibling);
}

function nextSlide() {
  var currentSlide = getCurrentSlide();
  if (slides.indexOf(currentSlide) === slides.length-1) {
    return;
  }
  setCurrentSlide(currentSlide.nextElementSibling); 
}

function toSlide(event) {
  setCurrentSlide(slides[dots.indexOf(event.target)]);
}

function setCurrentSlide(slide) {
  const index = slides.indexOf(slide);
  clearCurrentClassMark();
  slide.classList.add(currentSlideClassName);
  dots[index].classList.add(currentDotClassName);
  sliderContainer.style.marginLeft = -parseInt(sliderWindowWidth,10)*index + "px";
}

function clearCurrentClassMark() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove(currentDotClassName);
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove(currentSlideClassName);
  }
}

function getCurrentSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains(currentSlideClassName)) {
      return slides[i];
    }
  }

}