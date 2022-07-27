/*
Input: string
Output: array of leading substrings of input string
Rules:
  -strings in output array should be sorted based on their length
  -a one-letter substrings is valid
  -each string in output array should start with the first letter of input string
Algorithm:
  -split the input string into an array of characters
  -for each character with index `idx`
    -get the substring starting from index 0 up to and including `idx`
    -push the substring to the result array
  -return the result array
*/

function leadingSubstrings(str) {
  return str.split("")
            .map((_, idx) => str.slice(0, idx + 1));
}

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

module.exports.leadingSubstrings = leadingSubstrings;