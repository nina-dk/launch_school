/*
Input: matrix (two-dimensional array)
Output: new two-dimensional array
Rules: -the input matrix will be MxN
       -the input matrix will have at least one row and one column
       -modify the `transpose` function from the previous exercise
       -the subarrays of the matrix contain the same number of elements
       -if N subarrays have M number of elements, the output array will
        contain M number of subarrays with N number of elements in them
       -each subarray with index `i` of the returned array will contain
        the elements at index `i` of the subarrays of the original array
Data structure: array
Algorithm:
-Create the new array that will have M number of empty subarrays using
 the length of a subarray from the input array.
-For each subarray of the new array at index `i`
 -push the elements at index `i` from each subarray of the original array
*/


function transpose(array) {
  let transposedMatrix = [];

  for (let i = 0; i < array[0].length; i++) {
    transposedMatrix.push([]);
  }

  transposedMatrix.forEach((subarray, i) => {
    array.forEach(originalSubArray => {
      subarray.push(originalSubArray[i]);
    });
  });

  return transposedMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];
let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));        // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]