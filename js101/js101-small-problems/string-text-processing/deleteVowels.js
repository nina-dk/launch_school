/*
Input: array of strings
Output: array of strings
Rules:
  Explicit requirements:
    -the output array must contain the same string(s) an the input array but
     with all the vowels removed (vowels are: a, e, i, o, u)
  Implicit requirements:
    -uppercase words should remain uppercase
    -vowels include: A, E, I, O, U, a, e, i, o, u
    -if a string only contains vowels, an empty string will be left in its place
Questions:
  -is the returned array the same as the input array? (assume not)
  -empty string?
  -empty input array?
Data structures:
  array, regular expression
Algorithm:
  1.Create a `count` variable and initialize it to 0.
  2.Create an empty `noVowels` array.
  3.Create a `regex` variable equal to the vowels*.
  4.If the string at index `count` in the input array contains any of
    the vowels, replace them with an empty string.
  5.Push the string without the vowels in `noVowels`.
  6.Increment `count`.
  7.Repeat steps 4-5 for all elements in input array.
  8.Return `noVowels`.
*/

const removeVowels = array => array.map(str => str.replace(/[aeiou]/ig, ""));

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]