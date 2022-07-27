/*
Inputs: 2 arrays
Output: NEW sorted array comprised of the two input arrays' elements
Rules: -mustn't sort the final array
       -build output array one element at a time in proper order
       -input arrays contain numbers or are empty
       -output array is a NEW array
       -input arrays might be of different lengths
       -the input arrays shouldn't be mutated
Data structures: Array
Algorithm:
-Create a `sortedArr` empty array.
-Sort both input arrays in place.
-Set a variable `idx` to 0
-While both input arrays' lengths are > 0
  -If the element at `idx` or `arr1Copy` is <= that of `arr2Copy`
   -push that element to `sortedArr` and remove it from `arr1Copy`
  -Else push the element from `arr2Copy` and remove it from it
-If there are any elements left in one of the arrays
  -Push all of the elements in `sortedArr`
-Return `sortedArr`
*/

function merge(arr1, arr2) {
  let sorted = [];
  let arr1Copy = arr1.slice().sort((a, b) => a - b);
  let arr2Copy = arr2.slice().sort((a, b) => a - b);

  while (arr1Copy.length && arr2Copy.length) {
    if (arr1Copy[0] <= arr2Copy[0]) {
      sorted.push(arr1Copy.shift());
    } else {
      sorted.push(arr2Copy.shift());
    }
  }

  return sorted.concat(arr1Copy.length > 0 ? arr1Copy : arr2Copy);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
merge([9, 0, 4], [3, 2, 10]);
merge([], []);