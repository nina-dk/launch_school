//Return a list with every substring of a given string that is a palindrome.
//A palindrome is every string that reads the same forwards and backwards.

/*
----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions only return something or do they only have side effects?
  - Will you return the same object that's passed in the function or a new one?

PROBLEM STATEMENT:
    Input:
      -string
    Output:
      -array
    Explicit requirements:
      -
    Implicit requirements:
      -if there are no palindromic substrings, return an empty array
      -all characters/symbols matter
      -assume that it's case sensitive ("Madam" is not a palindrome)
      -substrings are comprised of 2 or more letters
    Questions:
      -case matters?
      -how many letters count as a substring?
Data Structures:
POTENTIAL DATA STRUCTURES
    -array
POTENTIAL METHODS / CODE
    -
Algorithm:
  1.Get every possible substring of 2 or more characters from input string.
    a.create an empty `substrings` array
    b.loop over the input string using a `i` var = 0
      i.push every substring with two or more chars from index `i` to the end
      ii.increment `i` by 1
  2.Loop over the substrings and for each substring:
    check if it is the same reversed, and if it is push it in a `palindromes`
    array
  3.Return the `palindromes`.
*/

const isPalindrome = string => string === string.split("").reverse().join("");

function getSubstrings(string) {
  const substrings = [];

  string.split("").forEach((_, idx) => {
    for (let i = idx + 2; i <= string.length; i++) {
      substrings.push(string.slice(idx, i));
    }
  });

  return substrings;
}

function palindromes(string) {
  let substrings = getSubstrings(string);
  let palindromes = substrings.filter(substr => isPalindrome(substr));

  return palindromes;
}

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