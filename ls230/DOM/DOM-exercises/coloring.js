/*
Input: non-negative number
Output: -
Rules:
  -two elements belong in the same generation if they have the same number
   of parent elements
  -generations start from the body tag and within (0 is the `body`, 1 is the elements
   nested directly into the `body` tag, etc.)
  -input number matches the number of ancestors the elements of that generation have
Data structure:
  -array/collection of the elements of a generation
Algorithm:
  -initialize a `numOfAncestors` variable to `0`
  -initalize a `generation` variable to an empty array
  -invoke the `walk` function with the top-level element as an argument
   
  -Helper function `walk` (element as argument)
    -get the children of the passed-in element
    -for each child
      -if `numOfAncestors` equals `num - 1`
        -add the `generation-color` class to the passed-in element
      -otherwise
        -increment `numOfAncestors` by 1
        -invoke `walk` function with current child as an argument
*/

function colorGeneration(num) {
  function walk(el, numOfAncestors) {
    if (numOfAncestors === (num - 1)) {
      el.classList.add("generation-color");
      return;
    }

    let children = el.children;
    for (let idx = 0; idx < children.length; idx += 1) {
      walk(children[idx], numOfAncestors + 1);
    }
  }

  walk(document.body.firstElementChild, 0);
}

// colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
colorGeneration(3);
// colorGeneration(0);