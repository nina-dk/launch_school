document.addEventListener("DOMContentLoaded", _ => {
  let thumbnails = document.querySelector("ul");
  let slideshow = document.querySelector("#slideshow");

  thumbnails.addEventListener("click", e => {
    e.preventDefault();

    let displayedFig = document.querySelector("figure.visible");
    displayedFig.style.opacity = 0;

    let currentThumb = document.querySelector("img.active");
    currentThumb.classList.remove("active");
    
    let clickedThumb = e.target.querySelector("img") || e.target;
    clickedThumb.classList.add("active");

    let figToDisplay = slideshow.querySelector(`img[src="${clickedThumb.src}"]`).parentElement;

    setTimeout(() => {
      displayedFig.classList.remove("visible");
      figToDisplay.classList.add("visible");
    }, 400);

    setTimeout(() => {
      figToDisplay.style.opacity = 1;
    }, 580);
  });
});