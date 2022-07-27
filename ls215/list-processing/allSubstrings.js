/*
Input: string
Output: array of all substrings of input string
Rules:
  -strings in output array should be sorted based on the index of their leading
    letter in the input string
  -substrings that start with the same letter should be sorted based on their lengths
  (shortest->longest)
Algorithm:
  -loop over the input string
    -for each character, get all the leading substrings that start with that
      character and push them to a `result` array
*/

const { leadingSubstrings } = require("./leadingSubstrings");

function substrings(str) {
  return str.split("")
            .reduce((allSubstrs, _, idx) => {
              return allSubstrs.concat(leadingSubstrings(str.slice(idx)))
            }, []);
}

// console.log(substrings('abcde'));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

module.exports.substrings = substrings;