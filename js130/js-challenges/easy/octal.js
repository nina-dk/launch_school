/*
`Octal` class
  `constructor` method
    input: string
    output: new instance of `Octal` (object)
    rules:
      -if input is not the string representation of a number,
        `toDecimal` should return `0`
      -if input includes the digit `9`, it's invalid, return `0`
    
  `toDecimal` method
    input: -
    output: number
    rules:
      -return the octal number saved to its decimal form
      -in octals each digit is multiplied to a power of 8
      -in decimals each digit is multiplied by a power of 10
    algorithm:
      -split the saved octal into an array of string-digits
      -coerce each string-digit into the array to a number
      -reverse the array in place
      -for each number in the array
        -multiply it with 8 at the power of its index
      -sum the products in the array
      -return the sum
    
*/

class Octal {
  constructor(octalLiteral) {
    this.octalLiteral = this._validateInput(octalLiteral);
  }

  _validateInput(input) {
    if (input.includes("9") || input.includes("8")
      || Number.isNaN(Number(input))) return "0";
    return input;
  }

  toDecimal() {
    if (this.octalLiteral === "0") return 0;

    return this.octalLiteral.split("")
      .reverse()
      .map((digit, idx) => Number(digit) * 8**idx)
      .reduce((sum, current) => sum + current);
  }
}

module.exports.Octal = Octal;