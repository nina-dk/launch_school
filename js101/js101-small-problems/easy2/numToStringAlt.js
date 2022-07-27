//START
//given a non-negative integer
//check if number is a positive int
//SET array with string representations of the numbers
//SET empty string
//WHILE number > 0
//Get each digit of the number add its string counterpart
//from the array to the string
//Remove the evaluated digit
//PRINT string
//END

function validNumber(num) {
  return (num >= 0 && Number.isInteger(num) ?
    true :
    console.log("Please provide a non-negative integer."));
}

function integerToString(num) {
  if (validNumber(num)) {
    const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let stringNum = "";
    let lastDigit = 0;
    do {
      lastDigit += num % 10;
      stringNum = DIGITS[lastDigit] + stringNum;
      num = (num - lastDigit) / 10;
      lastDigit = 0;
    } while (num > 0);

    console.log(stringNum);
  }
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
integerToString("");
integerToString("jnbnr");
integerToString(Infinity);