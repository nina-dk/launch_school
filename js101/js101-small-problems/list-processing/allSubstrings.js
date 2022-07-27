/*
Input: string
Output: list (array) of all the substrings of `string`
Rules:
  Explicit requirements:
    -the substrings in the returned array should be ordered by where in
     the input string they begin
    -the substrings that start from a given letter in the string, should be
     ordered by length (shortest to longest)
    -use the leadingSubstrings function from previous exercise
  Implicit requirements:
    -returned "list" is an array
    -one-letter substrings should be counted
    - the amount of the substrings produced follows a declining pattern,
      starting at string's length to 1
Data structures:
  array of substrings
Algorithm:
  1.Create an empty `substrings` array.
  2.Call the `leadingSubstrings` function for the string and push the returned
    array in `substrings`.
  3.Remove the character at `index` 0 from `string`.
  4.Repeat steps 2-3 until `string`'s length is 0.
  5.Return `substrings`.
*/

function leadingSubstrings(string) {
  const substrings = [];

  for (let i = 1; i <= string.length; i++) {
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

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

//Further exploration

function substrings(string) {
  const chars = string.split("");

  console.log(chars.reduce((substrings, _, idx) => {
    return substrings.concat(leadingSubstrings(string.slice(idx)));
  }, []));
}