// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

/*
Input: word string
Output: boolean
Rules:
  -case-insensitive
  -only one letter from a given block can be user per word-string
Questions:
  -input word contains only letters?
  -empty string?
  -invalid input?
  -only one word per string?
Data structures:
  -object to represent spelling blocks
  -array of characters
Algorithm:
  -coerce input string to uppercase
  -for each character in the input string
    -if it exists as a key in the spelling blocks
      -if it's value also exists in the string, return `false`
  -return `true`
*/

const BLOCKS = {
  B:"O",   X:"K",   D:"Q",   C:"P",   N:"A",
  G:"T",   R:"E",   F:"S",   J:"W",   H:"U",
  V:"I",   L:"Y",   Z:"M"
};

function isBlockWord(word) {
  let letters = word.toUpperCase().split("");

  return !letters.some(letter => {
    if (Object.keys(BLOCKS).includes(letter)) {
      if (letters.includes(BLOCKS[letter])) return true;
    }
  });
}

// Examples:
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));           // true
console.log(isBlockWord('BAtCh'));      // true