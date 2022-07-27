// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
Input: positive number
Output: non-negative integer
Rules:
  -we only want the sum of the positive integers up to and including `n`
  -if `n` <= 1, return `0`
  -if `n` is a string, see if it's coercible to a number
  -if `n` is of another type, return `null`
  -if `n` is not an integer, get the sum of the positive integers < `n`
Data structure:
  -number
Algorithm:
  -if the input is not a number, or is `NaN`
    -if it's a string and it's coercible to a number, coerce it
    -otherwise, return `null`
  -if the input number is <= 1, return `0`
  -declare a `nums` variable to store an empty array
  -set a counter equal to the input number
  -while the counter is > 0
    -add `counter` to `squareSum`
    -square a copy of `counter` and add the square to `sumOfSquares`
    -decrement `counter` by 1
  -subtract the squareSum from the sumOfSquares
  -return the difference
*/

function sumSquareDifference(num) {
  if (Number.isNaN(num) || typeof num !== "number" || num > Number.MAX_SAFE_INTEGER) {
    if (typeof num === "string" && !Number.isNaN(Number(num))) {
      num = Number(num);
    } else {
      return null;
    }
  }

  if (num <= 1) return 0;
  let [ squareSum, sumOfSquares ] = [0, 0];
  for (let count = parseInt(num, 10); count > 0; count -= 1) {
    squareSum += count;
    sumOfSquares += count**2;
  }

  return squareSum**2 - sumOfSquares;
}

// Examples:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(10.3));   // 2640
console.log(sumSquareDifference(0));      // 0
console.log(sumSquareDifference(-4));     // 0
console.log(sumSquareDifference(1));      // 0 --> 1**2 - 1**2 = 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(-Infinity)); // 0
console.log(sumSquareDifference(Infinity));  // null
console.log(sumSquareDifference("10"));     // 2640
console.log(sumSquareDifference(NaN));      // null
console.log(sumSquareDifference("an24cj")); // null
console.log(sumSquareDifference([]));      // null
console.log(sumSquareDifference());        // null
