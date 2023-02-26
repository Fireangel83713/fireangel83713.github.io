"use strict";

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
$("#slide-arrow-next").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
$("#slide-arrow-prev").addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});





