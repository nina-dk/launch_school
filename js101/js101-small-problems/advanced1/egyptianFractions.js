/*
For the `egyptian` function:

Input: rational number (positive?)
Output: array of the denominators of an Egyptian Fraction representation of
        the input number
Rules:
  -any positive rational number can be written as an Egyptian Fraction
  -an Egyptian fraction is the sum of a series of unique unit fractions
   (no unit fraction can have the same denominator)
  -a unit fraction is a rational number whose numerator is 1
Data structures:
  -array
  -fraction module
Algorithm:
  -Given a positive rational number
  -Starting at 1, create unit fractions until the sum of the unit fractions is
   equal to the input number
  -Increment the denominator by 1 on each iteration,
    -if when the next fraction created, the sum exceeds the input number,
     skip that number and create the next fraction
  -Save the valid denominators in an array
  -Return that array
*/
const Fraction = require ("fraction.js");

function egyptian(rationalNum) {
  let denominators = [];
  let egyptiansSum = new Fraction(0);
  let currDenominator = 1;

  while (egyptiansSum < rationalNum) {
    let unitFraction = Fraction(1, currDenominator);
    egyptiansSum = egyptiansSum.add(unitFraction);

    if (egyptiansSum > rationalNum) {
      egyptiansSum = egyptiansSum.sub(unitFraction);
    } else {
      denominators.push(currDenominator);
    }

    currDenominator += 1;
  }

  return denominators;
}

// console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
// console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
//console.log(egyptian(Fraction(5, 7)));

/*
For the `unegyptian` function:

Input: array of numbers
Output: rational number (in the form of a decimal)
Algorithm:
  -Create a `sum` variable
  -Loop over the input array of numbers
   -Increment `sum` by the unit fraction with the current num as a denominator
  -Return `sum`
*/

function unegyptian(denominators) {
  return denominators.reduce((sum, currentNum) => {
    return sum + Fraction(1, currentNum);
  }, new Fraction(0));
}

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3