//1
let paragraphs = document.getElementsByTagName("p");

function addClassToElements(elements, className) {
  [].forEach.call(elements, element => {
    element.classList.add(className);
  });
}

// addClassToElements(paragraphs, "article-text");
// console.log(paragraphs);

//2
let divs = document.getElementsByTagName("div");

for (let idx = 0; idx < divs.length; idx += 1) {
  if (divs[idx].className === "intro") {
    let paragraphs = divs[idx].getElementsByTagName("p");
    addClassToElements(paragraphs, "article-text");
  }
}