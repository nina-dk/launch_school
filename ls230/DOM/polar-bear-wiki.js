// Count the images on the page, then count the PNG images.
// Log both results.

function walk(node, callback) {
  callback(node);
  for (let i = 0; i < node.childNodes.length; i += 1) {
      walk(node.childNodes[i], callback);
  }
}

let body = document.lastChild.lastChild;
let images = [];

walk(body, (node) => {
  if (node.nodeName === "IMG") images.push(node);
});

let pngCount = images.reduce((count, img) => {
  return img.getAttribute("src").endsWith("png") ? count + 1 : count;
}, 0);

console.log(`There are ${images.length} images, ${pngCount} of which are PNGs.`);

//Change the link color to red for every link on the page.
walk(body, (node) => {
  if (node.nodeName === "A") node.style.color = "red";
});

//Write some JavaScript code to retrieve a word count for each h2 heading on the page.
let h2s = Array.from(document.querySelectorAll("h2"));
let wordCounts = h2s.map(h2 => h2.textContent.split(" ").length);
console.log(wordCounts);

//Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.
console.log(document.getElementById("toc"));
console.log(document.getElementsByClassName("toc")[0]);
console.log(document.querySelector("#toc"));

//Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.
let listItems = document.querySelector("#toc").querySelectorAll("li");
[].forEach.call(listItems, (item, idx) => {
  console.log(item);
  if (idx % 2 !== 0) item.firstElementChild.style.color = "green";
});

//Write some JavaScript code to retrieve the text of every thumbnail caption on the page.
let thumbCaption = document.querySelectorAll(".thumbcaption");
let captions = [].map.call(thumbCaption, caption => caption.textContent.trim());
// console.log(captions);

//
let taxonomicRanks = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];
let tds = document.querySelector("table.infobox.biota").querySelectorAll("td");
let contents = [].map.call(tds, td => td.textContent.trim());
let scientificClass = {};
taxonomicRanks.forEach(rank => {
  let rankIdx = contents.findIndex(text => text.startsWith(rank));
  scientificClass[rank] = contents[rankIdx + 1];
});

console.log(scientificClass);