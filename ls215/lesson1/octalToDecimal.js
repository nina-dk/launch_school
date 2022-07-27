//given an octal number in the form of a string, coerce it to
//a decimal and return it as a number

//reverse the digits in the input string number
//for each digit in the input number
//coerce the digit to a number
//multiply it by 8 to the power of its index -> map
//sum all of the products and return the total -> reduce

function octalToDecimal(numberString) {
  return numberString.split("")
                     .reverse()
                     .map((digit, idx) => Number(digit) * 8**idx)
                     .reduce((decimal, num) => decimal + num);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9