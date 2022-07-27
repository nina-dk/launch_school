//input/output: two arrays of equal length / array containing all elements of
//              input arrays in alternation
//rules: - input arrays are non-empty and of equal length
//data structures: counter to iterate, loop
//algorithm:
//START
//SET empty combinedArray
//SET counter = 0
//Loop through one of the input arrays
//  Push one element from the looped array and then one from the
//  other input array using the counter variable.
//  Increment counter
//PRINT combinedArray
//END

function interleave(array1, array2) {
  let combinedArray = [];
  for (let i = 0; i < array1.length; i++) {
    combinedArray.push(array1[i], array2[i]);
  }

  return combinedArray;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//Further exploration
//Using forEach()

function interleave(array1, array2) {
  let combinedArray = [];
  array1.forEach((el, idx) => {
    combinedArray.push(el, array2[idx]);
  });
  return combinedArray;
}

//Using map()

function interleave(arr1, arr2) {
  return arr1.flatMap((val, idx) => [val].concat([arr2[idx]]));
}

//Using reduce()

function interleave(arr1, arr2) {
  return arr1.reduce((newArray, currentVal, idx) => {
    newArray.push(currentVal, arr2[idx]);
    return newArray;
  }, []);
}