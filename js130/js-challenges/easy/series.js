/*
`Series` class
`constructor` method
  input: string
  algorithm:
    -save the input string in a property
`slices` instance method
  input: number
  output: nested array
  rules:
    -if input number is > length of the stored string, throw an error
    -each subarray contains that many digits as input number specifies
     in the form of numbers
    -only add consecutive digits
  algorithm:
    -if the input number is > `str`.length throw a RangeError
    -split `str` into an array of digits and coerce them to numbers
    -create an array `series` to store the series of numbers
    -for each digit in the split string
      -create a temporary array and push it in
      -declare `idx` starting at the next number's index
      -while the length of this array is < input number
        -push the element at `idx` in it
        -incremenet `idx` by 1
      -push the temporary array in `series`
    -return `series`
*/

class Series {
  constructor(str) {
    this.str = str;
  }

  slices(length) {
    if (this.str.length < length) {
      throw new RangeError("Input length is greater than length of string.");
    }

    const series = [];
    let digits = this.str.split("").map(Number);

    for (let idx = 0; idx <= digits.length - length; idx++) {
      series.push(digits.slice(idx, idx + length));
    }
    
    return series;
  }
}

module.exports.Series = Series;