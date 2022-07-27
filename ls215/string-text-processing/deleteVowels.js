/*
Input: array of strings
Output: (new) array of strings without the vowels
Rules:
  -vowels are "aeiou"
  -case-insensitive
  -f all chars are vowels in a string, return an empty string in its place
Questions:
  -what if input array is empty? return empty array?
  -what if a string is empty? push it as an empty string?
  -will strings contain other types of characters too?
Algorithm:
  -for each string in input array
    -for each character in the string
      -if it's a vowel remove it
*/
function removeVowels(strs) {
  return strs.map(str => str.replace(/[aeiou]/gi, ""));
}

// Examples:
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]