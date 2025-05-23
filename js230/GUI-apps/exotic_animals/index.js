document.addEventListener("DOMContentLoaded", _ => {
  let grid = document.querySelector(".grid-container");
  let timeout;

  grid.addEventListener("mouseover", e => {
    timeout = setTimeout(() => showTooltip(e), 1000);
  });

  grid.addEventListener("mouseout", e => {
    clearTimeout(timeout);
    hideTooltip(e);
  });

  function showTooltip(e) {
    let img = e.target.querySelector("img") || e.target;
    let figure = img.parentElement;

    figure.lastElementChild.classList.add("show");
  }

  function hideTooltip(e) {
    let img = e.target.querySelector("img") || e.target;
    let figure = img.parentElement;

    figure.lastElementChild.classList.remove("show");
  }
});