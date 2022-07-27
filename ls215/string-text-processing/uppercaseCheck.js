/*
Input: string
Output: boolean
Rules:
  -case-sensitive
  -if there are no characters in input string, return `true`
  -ignore non-alphabetic characters
Algorithm:
  -iterate over the input string
    -if a lowercase alphabetic character exists, return `false`
  -return `true`
*/

function isUppercase(str) {
  return str.split("").every(char => char === char.toUpperCase());
}

// Examples:
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true