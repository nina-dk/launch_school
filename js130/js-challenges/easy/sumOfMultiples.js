/*
`SumOfMultiples` class
`constructor`
  input: one or more numbers
  output: object

`to` static method
  input: natural number
  output: number
  rules:
    -a multiple of a number is an integer which if we divide it by that number
      the remainder will be 0
    -the numbers included in the `set` themselves are multiples of themselves
    -don't include common multiples twice
  algorithm:
    -find all of the multiples of the numbers included in the `set` up to
      but not including the input number
      -create a `multiples` array
      -for each number in the `set`
        -if the number isn't included in `multiples`
          -add it to `multiples`
        -increment it by itself
        -repeat while number is < input number
    -sum all of the multiples
    -return the sum
`to` instance method
*/

class SumOfMultiples {
  static DEFAULT_SET = [3, 5];
  constructor(...set) {
    this.set = set.length > 0 ? set : SumOfMultiples.DEFAULT_SET;
  }

  static to(limit) {
    return (new SumOfMultiples()).to(limit);
  }

  to(limit) {
    const multiples = [];
    this.set.forEach((num, idx) => {
      while (num < limit) {
        if (!multiples.includes(num)) {
          multiples.push(num);
        }
        num += this.set[idx];
      }
    });

    return multiples.reduce((sum, multiple) => sum + multiple, 0);
  }
}


module.exports.SumOfMultiples = SumOfMultiples;