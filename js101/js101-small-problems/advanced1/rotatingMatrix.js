/*
Input: nested array (matrix)
Output: new nested array (rotated matrix)
Rules:
  -the input matrix will have MxN dimensions
  -matrix will be at least 1x1 (?)
  -the input matrix must be rotated by 90 deg clockwise
    -each corner moves one corner to the right
    -each "middle" element moves on "middle" to the right
    -the middle element (if there's one) of the matrix remains at its place
Data structures:
  -nested array
Algorithm:
  -Create `rotatedMatrix` array
  -Loop over the outer array
    -Loop over the nested arrays
      -For each element at the same index in the nested arrays
        -Push those elements to an array in the `rotatedMatrix`
      -Increment inner index (index in the subarrays) by 1
*/

function rotate90(matrix) {
  const rotatedMatrix = [];

  for (let innerIdx = 0; innerIdx < matrix[0].length; innerIdx += 1) {
    let row = [];
    for (let subarrIdx = matrix.length - 1; subarrIdx >= 0; subarrIdx -= 1) {
      row.push(matrix[subarrIdx][innerIdx]);
    }
    rotatedMatrix.push(row);
  }

  return rotatedMatrix;
}


let matrix1 = [
  [1, 5, 8], //1st column becomes the first row
  [4, 7, 2], //2nd column becomes the second row
  [3, 9, 6], //3rd column becomes the 3rd row
];

let matrix2 = [
  [3, 7, 4, 2], //1st column becomes 1st row
  [5, 1, 0, 8], //2nd column becomes 2nd row etc...
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);
// [
//  [3, 4, 1],
//  [9, 7, 5],
//  [6, 2, 8]
// ]

console.log(newMatrix2);
// [
//  [5, 3],
//  [1, 7],
//  [0, 4],
//  [8, 2]
// ]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]