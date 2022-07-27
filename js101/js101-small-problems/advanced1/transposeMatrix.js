/*
Input: array
Output: new array
Rules: -input array should not be modified
       -output array must be the transpose of the input matrix
       -a transpose is the matrix with the columns and rows exchanged
        (column 1 becomes row 1, column 2 becoems row 2, etc.)
       -matrix is a two-dimensional array with three subarrays
Data structures: -NEW array of the same structure (nested)
Algorithm:
  -create an array of three subarrays
  -loop over the outer array
  -push the elements at the current index from each subarray in the same index
   in the new array
*/

function transpose(array) {
  let transposedMatrix = [[], [], []];

  for (let i = 0; i < array.length; i++) {
    for (let innerIdx = 0; innerIdx < array.length; innerIdx++) {
      transposedMatrix[i].push(array[innerIdx][i]);
    }
  }

  return transposedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

/*
[1, 5, 8],  [1, 4, 3],
[4, 7, 2],  [5, 7, 9],
[3, 9, 6]   [8, 2, 6]

every element at index 0 of each subarray will go in the first subarray
of the new array,
every element at index 1 ... will go in the 2nd subarray ...
*/

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

//Further exploration
/*
-input: nested array
-output: same array transposed
-every row becomes the column of the corresponding order and vice versa
-don't use the `transpose` function
-don't create any new arrays
-mutate the original/input array
*/

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transposeInPlace(matrix) {
  for (let outerIdx = 0; outerIdx < matrix.length; outerIdx++) {
    for (let innerIdx = outerIdx; innerIdx < matrix.length; innerIdx++) {
      let rowValue = matrix[outerIdx][innerIdx];
      let columnValue = matrix[innerIdx][outerIdx];
      [matrix[outerIdx][innerIdx], matrix[innerIdx][outerIdx]] = [columnValue, rowValue];
    }
  }
  return matrix;
}

console.log(transposeInPlace(matrix1)); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix1); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]