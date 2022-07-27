/*
Input: array
Output: same array sorted
Rules:  -the array will contain at least two elements
        -the function should mutate the input array
Algorithm:
-given an array of elements (numbers/strings)
-loop over the array
-compare each two subsequent elements alphabetically/numerically
-sort them in ascending order (swap them if necessary)
-repeat the loop until one whole loop completes without any element-swapping
*/

function bubbleSort(array) {
  let swapAgain = true;

  while (swapAgain) {
    swapAgain = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapAgain = true;
      }
    }
  }

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]