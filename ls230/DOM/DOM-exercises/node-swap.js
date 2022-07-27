/*
Inputs: two element ids (numbers)
Output: `true` or `undefined`
Rules:
  -all nodes have a value for `id`
  -two arguments are always provided
  -if either id doesn't exist in the DOM, return `undefined`
  -if one of the elements with the given ids is a child of the other,
    swapping is not possible. Return `undefined`
  -to swap two elements means that one will be moved to the "index"
   or the other in the DOM, and vice versa
  -an element that is swapped is moved along with any children that it has
Algorithm:
  -get the elements with the passed-in ids
  -if either element doesn't exist, return `undefined`
  -if one of the elements is inside the children collection of the other
    -return `undefined` (use `Node.contains`)
  -add one of the elements before the other element
  -place the 2nd element where the 1st element used to be
    -get the next sibling of the 1st element
    -if there is no such sibling
      -insert 2nd element as the last child of the parent of the 1st element
    -otherwise,
      -insert 2nd element before that sibling
*/

function invalidSwap(el1, el2) {
  return !el1 || !el2 || el1.contains(el2) || el2.contains(el1);
}

function nodeSwap(id1, id2) {
  let [firstEl, secondEl] = [document.getElementById(id1), document.getElementById(id2)];
  if (invalidSwap(firstEl, secondEl)) return;

  let nextSibling = secondEl.nextSibling;
  let secondParent = secondEl.parentNode;

  firstEl.before(secondEl);
  secondParent.insertBefore(firstEl, nextSibling);

  return true;
}

// at least one of the id attributes doesn't exist
// console.log(nodeSwap(1, 20)); // undefined

// at least one of the nodes is a "child" of the other
// console.log(nodeSwap(1, 4)); // undefined
// console.log(nodeSwap(9, 3)); // undefined

// one swap
// console.log(nodeSwap(1, 2)); // true

// multiple swaps
nodeSwap(3, 1);
nodeSwap(7, 9);