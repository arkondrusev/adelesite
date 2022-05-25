"use strict";

{
function Slider(sliderRoot) {
  this.currentSlideClassName = "slider__item-current";
  this.currentDotClassName = "slider__dot-current";
  const sliderWindow = sliderRoot.getElementsByClassName("slider__window")[0];
  this.sliderWindowWidth = sliderWindow.style.width || window.getComputedStyle(sliderWindow).width;
  this.sliderContainer = sliderWindow.children[0];
  this.slides = Array.from(this.sliderContainer.children);
  this.dots = Array.from(sliderRoot.getElementsByClassName("slider__dots")[0].children);

  this.getCurrentSlide = function() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].classList.contains(this.currentSlideClassName)) {
        return this.slides[i];
      }
    }
  }

  this.setCurrentSlide = function(slide) {
    const index = this.slides.indexOf(slide);
    this.clearCurrentClassMark();
    slide.classList.add(this.currentSlideClassName);
    this.dots[index].classList.add(this.currentDotClassName);
    this.sliderContainer.style.marginLeft = -parseInt(this.sliderWindowWidth,10)*index + "px";
  }

  this.clearCurrentClassMark = function() {
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].classList.remove(this.currentDotClassName);
    }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove(this.currentSlideClassName);
    }
  }

  this.prevSlide = function() {
    let currentSlide = this.getCurrentSlide();
    if (this.slides.indexOf(currentSlide) === 0) {
      return;
    }
    this.setCurrentSlide(currentSlide.previousElementSibling);
  }

  this.nextSlide = function() {
    let currentSlide = this.getCurrentSlide();
    if (this.slides.indexOf(currentSlide) === this.slides.length-1) {
      return;
    }
    this.setCurrentSlide(currentSlide.nextElementSibling); 
  }
  
  this.toSlide = function(event) {
    this.setCurrentSlide(this.slides[this.dots.indexOf(event.target)]);
  }
}

let resultsSlider = new Slider(document.getElementsByClassName("results__slider")[0]);
let testimonialsSlider = new Slider(document.getElementsByClassName("testimonials__slider")[0]);


}