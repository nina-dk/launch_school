// //1
// function getPElements() {
//   let paragraphs = document.querySelectorAll("p");
//   return Array.from(paragraphs);
// }

// console.log(getPElements());

// //2
// let paragraphs = getPElements();
// paragraphs.forEach(p => p.classList.add("article-text"));

// console.log(paragraphs);

//3
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementsByTagName(node, tagName) {
  let elements = [];
  walk(node, (node) => {
    if (node.tagName === tagName) elements.push(node);
  });

  return elements;
}

let paragraphs = getElementsByTagName(document.body, "P");

function addClassToElements(elements, className) {
  elements.forEach(element => {
    element.classList.add(className);
  });
}

addClassToElements(paragraphs, "article-text");
console.log(paragraphs);