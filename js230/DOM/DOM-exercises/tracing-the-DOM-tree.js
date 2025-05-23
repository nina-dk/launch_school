/*
Input: number (id of the node)
Output: 
  -2D array
  -each subarray contains elements at the same level
  -first subarray contains the elements that are the same depth as the input
    node, 2nd the elements one level above, etc.
Rules:
  -the top level element is considered to be that with an id of 1
  -elements are represnted by uppercase strings of the elements' names'
  -assume that all elements have a numeric id
Data structure:
  -a nested array of subarrays of strings
  -`walk` function?
Algorithm:
  -get the element that has an id of input `id`
  -declare a variable `familyTree` to store the array of the arrays
  -get the parent element of the current element
  -get the collection of the parent elements' children
  -for each child
    -replace it with its element name
  -push the collection in the form of an array into `familyTree`
  -if the parent element has an id of `1`, return `familyTree`
  -otherwise, pass the parent element into the same function
*/

function domTreeTracer(id) {
  let familyTree = [];
  let currEl = document.getElementById(id);
  let parent = currEl.parentElement;
  let siblings = parent.children;

  let elementNames = [].map.call(siblings, el => el.nodeName);
  familyTree.push(elementNames);

  if (!parent.id) return familyTree;
  return familyTree.concat(domTreeTracer(parent.id));
}

console.log(domTreeTracer(1));
// [["ARTICLE"]]
console.log(domTreeTracer(2));
// [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22));
// [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]