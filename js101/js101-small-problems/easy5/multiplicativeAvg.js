//input/output: array of integers /
//              string of the result of multiplying all the ints from the array
//              and dividing them by the array's length, rounded to 3 decimals
//rules: -
//data structures: reduce method, toFixed method
//algorithm:
//START
//SET result equal to the result of multiplying all numbers of the array
//  and dividing it by the length of the array
//Set the result to have 3 decimal places
//Coerce the result to a string
//PRINT string
//END

function multiplicativeAverage(ints) {
  return (ints.reduce((product, currentNum) => {
    return product * currentNum;
  }, 1) / ints.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
multiplicativeAverage([]); // "Infinity"
multiplicativeAverage([5]); // "5.000"
multiplicativeAverage([1, 2, 5, 0, 9]); // "0.000"