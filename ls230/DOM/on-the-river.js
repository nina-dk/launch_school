//1
let body = document.lastChild.lastChild;
let h1 = body.childNodes[1]
h1.style.color = "red";
h1.style.fontSize = "48px";

//2
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function countParagraphNodes(doc) {
  let count = 0;
  walk(doc, (node) => {
    if (node.nodeName === "P") count += 1;
  });

  console.log(count);
}

countParagraphNodes(body);

//3
const wordRegex = /[^\s]+/i;
let paragraphs = [];
walk(body, (node) => {
    if (node.nodeName === "P") paragraphs.push(node)
});

let firstWords = paragraphs.map(p => p.firstChild.data.match(wordRegex)[0]);
console.log(firstWords);

//4
paragraphs.slice(1).forEach(p => p.classList.add("stanza"));