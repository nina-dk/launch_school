/*
Input: -
Output: nested array of the DOM
Rules:
  -each element is represented as a two-element nested array:
    ["nodeName", [children]]
  -we're only interested in element nodes
  -first element is considered to be the `body`
*/

function nodesToArr() {
  return (function generateChildrenArray(element) {
    return [
      element.nodeName,
      [].slice.call(element.children).map(generateChildrenArray)
    ];
  })(document.body);
}

console.log(nodesToArr()); 
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]