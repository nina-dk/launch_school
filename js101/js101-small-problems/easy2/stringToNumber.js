//Input: a string of digits
//Output: the number contained in the string as a Number

//Not use parseInt(), Number(), String(), parseFloat().
//Analyze the characters in the provided string and calculate the result.
//Assume all characters are valid-numeric.

function stringToInteger(string) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let number = [];
  let array = string.split("").reverse();
  array.forEach((char, idx) => {
    nums.forEach(num => {
      if (char == num) number.push(num * 10**idx);
    })
  });
return number.reduce((sum, currentNum) => sum + currentNum, 0);
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//Further exploration

function hexadecimalToInteger(hex) {
  const HEX_DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    "A": 10,
    "B": 11,
    "C": 12,
    "D": 13,
    "E": 14,
    "F": 15
  };
  let arrayOfDigits = hex.toUpperCase().split("").map(char => HEX_DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871); // logs true
// 4D9f => arrayOfDigits = [4, 13, 9, 15]
// value = 4
// value = 16 * 4 + 13 = 77
// value = 16 * 77 + 9 = 1241
// value = 1241 * 16 + 15 = 19871