/*
`Anagram` class
`constructor` method:
  input: string
  -save input string to a property
`match` method
  input: array of strings
  output: array (of strings or empty)
  -create an empty array to store the anagrams
  -iterate over the array of strings
    -if the current string is an anagram (`isAnagram`) of the saved string
      -append it to the array of anagrams
  -return the array of anagrams
`isAnagram` method
  input: two strings
  output: boolean value
  -split input strings into arrays of characters
  -sort the characters in ascending order
  -join the arrays back into strings
  -compare the new strings for equality
*/

class Anagram {
  constructor(str) {
    this.base = str;
  }

  match(arr) {
    return arr.filter(this.isAnagram, this);
  }

  isAnagram(str) {
    if (this.base.toLowerCase() === str.toLowerCase()) return false;
    let sortedBase = this.base.toLowerCase().split("").sort().join("");
    let sortedStrToCompare = str.toLowerCase().split("").sort().join("");
    return sortedBase === sortedStrToCompare;
  }
}

module.exports.Anagram = Anagram;