/*
Input: string
Output: array of palindromic substrings from input string
Rules:
  -a palindromic substring reads the same forwards and backwards
  -output array may contain duplicate strings
  -strings in output array should be sorted by order of appearance
  -palindromes are case-sensitive and all characters matter ("-"," ", etc.)
  -return an empty array if there are no palindromic substrings
  -one-letter substrings aren't considered palindromes
Algorithm:
  -Import the `substrings` function from previous exercise
  -Get all of the substrings from input string
  -Filter out the substrings that aren't palindromes
    -if the string is equal to its reversed self and has a length > 1 it is a palindrome
*/
const { substrings } = require("./allSubstrings");
const isPalindrome = str => str.length > 1 && str === str.split("").reverse().join("");

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

console.log(palindromes('Abcba')); // [ 'bcb' ]