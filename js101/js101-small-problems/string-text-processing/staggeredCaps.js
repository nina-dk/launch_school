/*
Input: string
Output: string
Rules:
  Explicit requirements:
    -returned string should have every other letter, starting from the first,
     capitalized and followed by a lowercase or non-alphabetic character.
     (first letter is always capitalized)
    -non-alphabetics should not be changed but do count in whether the next
     character should be lower or upper cased.
Data structures: array of characters
Algorithm:
  1.Create an array `chars` of the characters in the input string.
  2.Create a `count` variable and initialize it to 0.
  3.If `count` is even, capitalize the character at index `count` in `chars`.
    If `count` is odd, make the character at index `count` lowercased.
  4.Return the `chars` joined into a string.
*/

function staggeredCase(str) {
  return str.split("")
    .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
    .join("");
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"