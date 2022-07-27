/*
`PerfectNumber` class
  `classify` static method
    input: number
    output: string
    algorithm:
      -if the input number is < 1, throw an error
      -call `positiveDivs` and store the returned array to a variable
      -get the sum of the `positiveDivs` array
      -if the sum is > input number, return `abundant`
      -if it's < input number, return `deficient`
      -else return `perfect`
  `positiveDivs` static method
    input: number
    output: array of numbers
    algorithm
      -create an empty array to store the divisors
      -declare `number` equal to input num
      -while the number is > 0
        -decrement it by 1
        -if the remainder of dividing the input num to the new num is 0
          -push the new num to the array
      -return the array
Rules:
  -natural numbers start at 1, 2, ...
  -throw an error for non-natural numbers
  -positive divisors of a number are the numbers that can be evenly
   divided into that number with no remainder, excluding the number itself
*/

class PerfectNumber {
  static classify(num) {
    if (num < 1) throw new TypeError("Input number is not natural.");
    let aliquotSum = PerfectNumber.aliquotSum(num);
    if (aliquotSum > num) return "abundant";
    else if (aliquotSum < num) return "deficient";
    else return "perfect";
  }

  static aliquotSum(num) {
    let sum = 0;
    let potentialDiv = num - 1;
    while (potentialDiv > 0) {
      if (num % potentialDiv === 0) sum += potentialDiv;
      potentialDiv -= 1;
    }

    return sum;
  }
}

module.exports.PerfectNumber = PerfectNumber;