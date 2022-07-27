//input/output: 2 arrays / 1 array containing the union of their values
//rules: - no duplicates in output array
//       - both arguments will always be arrays
//data structures: method to concatenate arrays, loop, method to remove dupes
//algorithm:
//START
//Concatenate the two arrays into one and sort it
//Loop through the new array
//IF value at current index is the same as the next
//  Remove it
//PRINT array
//END

function union(array1, array2) {
  let unitedArr = array1.concat(array2).sort();
  for (let i = 0; i < unitedArr.length;) {
    unitedArr[i] === unitedArr[i + 1] ? unitedArr.splice(i, 1) : i += 1;
  }
  return unitedArr;
}

union([1, 3, 5], [3, 3, 6, 9]);    // [1, 3, 5, 6, 9]
union([], []);
union([], [0, 1]);
union([0, 0, 0], [1, 1, 1]);