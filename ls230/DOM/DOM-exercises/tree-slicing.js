/*
Inputs: starting id, end id (integers)
Output: array of tagNames (strings) or `undefined`
Rules:
  -the `sliceTree` function is inclusive on both ends
  -if there is no `id` equal to the passed in ids, return `undefined`
  -if the ending id is not inside the starting id, return `undefined`
  -only elements nested in the `body` tag are sliceable
  -assume all sliceable elements will have an `id` attribute
  -ids increment starting from 1 up to 24, as we move down the DOM tree
Data structure:
  -array of strings
  -`walk` function
Algorithm:
-if there is no element with starting or ending id as its `id`, return `undefined`
-if ending `id` is >= starting id, return `undefined`
-declare a `tree` variable to store an array
-find the element with `startId` as its `id` attribute
  -push its tagName to the array
-if there is no element with `endId` nested in it, return `undefined`
-get its children
-find the child that has the element with the `endId` nested in it
  -push its tagName in the array
-repeat while the id of the child element is not the `endId`
-return the `tree` array
*/

function getElementById(id, el) {
  return el.querySelector(`[id='${id}']`);
}

function sliceTree(startId, endId) {
  let parent = getElementById(startId, document.body);
  let endChild = getElementById(endId, parent);
  if (!parent || !endChild) return;
  
  const tree = [];
  let id = startId;
  tree.push(parent.tagName);

  while (id !== endId) {
    let children = Array.from(parent.children);
    let nextEl = children.find(el => Number(el.id) === endId || getElementById(endId, el));
  
    tree.push(nextEl.tagName);

    parent = nextEl;
    id = Number(nextEl.id);
  }

  return tree;
}

console.log(sliceTree(1, 4)); // ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76)); // undefined
console.log(sliceTree(2, 5)); // undefined
console.log(sliceTree(5, 4)); // undefined
console.log(sliceTree(1, 23)); // ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22)); // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19)); // ["SECTION", "P", "SPAN", "STRONG", "A"]