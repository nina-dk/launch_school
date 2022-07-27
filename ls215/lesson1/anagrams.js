/*
Inputs:
  -word (string)
  -array of words (strings)
Output: array of anagrams (strings)
Rules:
  -anagrams contain the exact same characters as the pattern-word
  -test cases are comprised of lowercase alphabetical characters
Questions:
  -What if there aren't any anagrams? (empty array)
  -Empty string?
Algorithm:
  `isAnagram` helper function (two string arguments)
    -create an array of the characters of each string for each input
    -sort the characters alphabetically
    -coerce the arrays back to strings and compare them for equality

-for each string in input array
  -if it is an anagram of the input word
    -push it in the result array
-return the result array
*/
const isAnagram = (pattern, word) => pattern.split("").sort().join("") === word.split("").sort().join("");
function anagram(word, list) {
  return list.filter(str => isAnagram(word, str));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]