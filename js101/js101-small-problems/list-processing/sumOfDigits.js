//Input: positive integer
//Output: positive integer
//Rules:
//  -Explicit requirements:
//    -The output number is the sum of the digits of input number
//    -Input is always a positive integer
//    -Not use `for`, `while` or `do...while` loops
//    -Use a series of method calls to calculate the sum
//  -Implicit requirements:
//    -The output is always going to be a positive integer
//Data structures:
//  number to string to array coercion
//Algorithm:
/*
1.Coerce the number to a string.
2.Convert the string to an array of string-digits.
3.For each element of the array, convert it to a number.
4.Create a `sum` vaiable equal to 0.
5.Add each element of the array to the `sum`.
6.Return the `sum`.
*/

function sum(int) {
  return String(int).split("").map(digit => Number(digit))
    .reduce((sum, currentVal) => sum + currentVal);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45