//input/output: an array of numbers /
//              an array of the same length where each element's value
//              will be the running total from the input array
//rules: - empty array will return empty array
//       - the first number will be pushed as is
//data structures: array to push the running totals,
//loop through the original array
//algorithm:
//SET an empty array
//Push the first number of the original array and remove it
//Loop through the original array, pushing each number + last number of the
//empty array to the empty array
//Return the new array

function runningTotal(numbers) {
  if (numbers.length === 0) return numbers;
  let runningTotals = [];
  runningTotals.push(numbers.shift());
  numbers.forEach(number => {
    runningTotals.push(number + runningTotals[runningTotals.length - 1]);
  });
  return runningTotals;
}

//Further exploration
//Using the Array.prototype.map() method

function runningTotal(numbers) {
  let sum = 0;
  return numbers.map(number => sum += number);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []