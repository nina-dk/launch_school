// function makeBold(element, callback) {
//   element.style.fontWeight = "bold";
//   if (typeof callback === "function") callback(element);
// }

let sectionElement = document.querySelector('section');
// makeBold(sectionElement, function(elem) {
//     elem.classList.add('highlight');
// });

// console.log(sectionElement.classList.contains('highlight')); // true
// console.log(sectionElement.style.fontWeight); // "bold"

//Further exploration
function makeBold(element) {
  element.style.fontWeight = "bold";
  let bolded = new CustomEvent("bolded");
  element.dispatchEvent(bolded);
}

sectionElement.addEventListener("bolded", (e) => {
  e.currentTarget.classList.add("highlight");
});

makeBold(sectionElement);

console.log(sectionElement.classList.contains('highlight')); // true
console.log(sectionElement.style.fontWeight); // "bold"