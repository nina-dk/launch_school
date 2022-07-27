function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

// console.log(range(10, 20));
// console.log(range(5));

/*
This error is caused by the fact that we've named both our functions `range`.
That is, the second `range` function supersedes the function `range` defined on
lines 1-9. Thus the function `range` called in the second `range` function, on line
12, is itself, which cause an endless recursion until the maximum call stack size is
exceeded and en error is thrown.

We can refactor the code above like so:
*/

function range(start, end) {
  if (!end) [end, start] = [start, 0];

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

console.log(range(10, 20));
console.log(range(5));
console.log(range(10, 0));