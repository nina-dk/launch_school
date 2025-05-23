let articles = [...document.querySelectorAll("article")];
let nav = document.querySelector("header ul");
let main = document.querySelector("main");

function removeCurrHighlight() {
  let highlighted = document.querySelector(".highlight");
  highlighted?.classList.remove("highlight");
}

document.addEventListener("click", e => {
  let elToHighlight = null;
  let clickedEl = e.target;
  let articleTarget = articles.find(article => article.contains(clickedEl));
   
  if (articleTarget) {
    elToHighlight = articleTarget;
  } else if (clickedEl.tagName === "A" && nav.contains(clickedEl)) {
    elToHighlight = document.querySelector(clickedEl.hash);
  } else {
    elToHighlight = main;
  }

  removeCurrHighlight();
  elToHighlight.classList.add("highlight");
});