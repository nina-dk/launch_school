// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0),
// then the number is valid according to the Luhn Formula; else it is not valid.
// Thus, 1111 is not valid (as shown above, it comes out to 6),
// while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula.
// This should treat, for example, "2323 2005 7766 3554" as valid.
// You can ignore all non-numeric characters in the input string.


/*
Input: string of digits (and possibly other characters)
Output: boolean ?
Rules:
  -ignore any non-digit characters
  -double the value of every SECOND digit
  -start iterating from the right to the left
  -if the produced sum is > 10, subtract 9 from it
  -if the final checksum % 10 is not 0 return `false`, else return `true`
  -length of number may vary
Question:
  -what is substracting 9 from a number doesn't give us a 1-digit number still?
    do we keep substracting? irrelevant. the largest possible sum is 18 (18 - 9 = 9)
  -can we assume that input is always a string?
Data structures:
  -array of digits
Algorithm:
  -coerce input string to an array of characters
  -remove any non-numeric characters from the array
  -start iterating from the end of the array
    -double every other character, starting from the next to last
    -if the result is > 10, decrement it by 9
    -replace the number with that result in the array
  -sum all the digits in the array
  -if the sum ends in 0, return `true`
  -return `false`
*/

function luhnFormula(id) {
  if (!id.length) return false;
  return id.split("")
           .filter(char => /\d/.test(char))
           .reverse()
           .map((num, idx) => {
              if (idx % 2 === 1) {
                num = Number(num) * 2;
                return (num >= 10 ? num - 9 : num);
              }
             
              return Number(num);
          }).reduce((checksum, num) => checksum + num, 0) % 10 === 0;
}

console.log(luhnFormula("1111")); // false
console.log(luhnFormula("8763")); // true
console.log(luhnFormula("2323 2005 7766 3554")); // true
console.log(luhnFormula("2323-2005-7766-3554")); // true
console.log(luhnFormula("2323  2005 . 7766 3554")); // true
console.log(luhnFormula("")); // false
console.log(luhnFormula("9-0-1-3.")); // 9023 -> 14 -> false
console.log(luhnFormula("012")); // 022 -> 4 -> false
console.log(luhnFormula("0")); // true

//Additional requirement

// Write a function that can add a check digit to make the number valid per the Luhn
// formula and return the original number plus that digit. This should give "2323 2005 7766 3554"
// in response to "2323 2005 7766 355".

/*
Input: 
  -number in the form of a string
  -arbitrary length
  -may contain other types of characters that need to be ignored
Output:
  -number in the form of a string
  -valid number per the Luhn formula
Rules:
  -non-numeric characters are preserved in the returned string
Question:
  -will there always be a possible solution?
  -will the digit always be appended to the end of the input string?
  -is there only one possible solution?
  -will the input string always not be a valid Luhn number as is?
Data structure:
  -string
Algorithm:
  -check if the string is valid as-is
  -starting at 0
    -append the current number to the string
    -if the new string is valid (`luhnFormula`)
      -return it
    -otherwise, add 1 to the number
  -continue until number is 9
*/

function makeValidChecksum(numStr) {
  if (luhnFormula(numStr)) return numStr;
  
  for (let num = 0; num <= 9; num += 1) {
    let newStr = numStr + num;
    if (luhnFormula(newStr)) return newStr;
  }

  return null;
}


console.log(makeValidChecksum("2323 2005 7766 355")); // "2323 2005 7766 3554"
console.log(makeValidChecksum("876")); // "8763"
console.log(makeValidChecksum("1111")); // "11114"
console.log(makeValidChecksum("2323 2005.7766-355")); // "2323 2005.7766-3554"
console.log(makeValidChecksum("2323 2005 7766 355")); // "2323 2005 7766 3554"
console.log(makeValidChecksum("")); // "0"