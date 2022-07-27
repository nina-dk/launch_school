//input-output: array / array with two subarrays of the original array's elements
//rules: - if the original array contains odd number of elements the middle one
//         goes to the first subarray of the return array
//       - if original array is empty, the return array should contain two empty
//         subarrays
//       - if original array contains only one element the second subarray will
//         be an empty array
//data structures: spread syntax, method to cut an array at a specified point
//algorithm:
//START
//IF original array's length is even
//  SET two arrays containg each half of the original array
//ELSE the first half will contain the middle element
//PRINT array containg the two halves as elements
//END

function halvsies(array) {
  let firstHalf = array.length % 2 === 0 ?
    array.splice(0, array.length / 2) :
    array.splice(0, Math.ceil(array.length / 2));

  let secondHalf = array;

  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]