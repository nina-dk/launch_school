/*
Input: string
Output: boolean (true/false)
Rules: -you can only use a block once
       -case insensitive
       -you can only use one letter from each block
       -return `true` if the word can be spelled using these blocks,
        `false` otherwise
Data structures: Object to store the blocks
Algorithm:
-Store the blocks as key-value pairs in an object
-Check if a letter is the key to another letter in the word
-Check if all letters in the word are unique

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
*/

function isBlockWord(word) {
  word = word.toUpperCase();
  const blocks = {
    B: "O",   X: "K",   D:"Q",   C:"P",   N:"A",
    G: "T",   R: "E",   F:"S",   J:"W",   H:"U",
    V: "I",   L: "Y",   Z:"M"
  };

  for (let letter = 0; letter < word.length; letter++) {
    for (let idx = 0; idx < word.length; idx++) {
      if (blocks[word[letter]] === word[idx] ||
          (word[letter] === word[idx] && letter !== idx)) return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('hh'));         // false