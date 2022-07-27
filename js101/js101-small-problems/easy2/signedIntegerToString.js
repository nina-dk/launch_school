function integerToString(number) {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let str = "";

  do {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    str = DIGITS[lastDigit] + str;
  } while (number > 0);

  return str;
}

function signedIntegerToString(number) {
  let sign = Math.sign(number);
  switch (sign) {
    case -1: return "-" + integerToString(number * (-1));
    case 1: return "+" + integerToString(number);
    default: return integerToString(number);
  }
}


console.log(signedIntegerToString(4321)); // +4321
console.log(signedIntegerToString(-123)); // -123
console.log(signedIntegerToString(0)); // 0