/*
Input: string
Output: array
Rules:
  Explicit requirements:
    -output array must contain all the substrings from input string that
     are palindromes (i.e. read the same forwards and backwards)
    -substrings in the array must be sorted in the order that they appear
     in the original string
    -one-letter strings should not be considered palindromes
    -duplicate substrings should be included multiple times
    -palindromes are case sensitive
    -all characters matter (e.g. "-madam-" is a palindrome)
    -use `substrings` function from previous exercise
  Implicit requirements:
    -if there are no palindromic substrings, an empty array must be returned
    -substrings should have a length greater than or equal to 2
Data structures:
  Array
Algorithm:
  1.Create two empty arrays: `substrings` and `palindromicSubstrs`.
  2.Push all the substrings from input `string` with a length >= 2 to
    the `substrings` array.
      a.Concatenate the `substrings` array with the return value of the
        `substrings` function with the `string` as an argument.
  3.Create a `count` variable equal to 0.
  4.If the element at index `count` in `substrings` is a palindrome,
    push it in the `palindromicSubstrs` array.
      a.If the substring is equal to the substring reversed it is a palindrome.
  5.Increment `count`.
  6.Repeat steps 4-5 for all substrings in `substrings`.
  7.Return `palindromicSubstrs`.
*/

function leadingSubstrings(string) {
  const substrings = [];

  for (let i = 2; i <= string.length; i++) {
    substrings.push(string.slice(0, i));
  }

  return substrings;
}

function substrings(string) {
  const substrings = [];

  while (string.length > 0) {
    substrings.push(...leadingSubstrings(string));
    string = string.slice(1);
  }

  return substrings;
}

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

const palindromes = string => substrings(string).filter(isPalindrome);

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]