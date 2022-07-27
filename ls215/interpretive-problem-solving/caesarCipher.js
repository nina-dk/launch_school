/*
Inputs:
  - `plaintext` (string of any character, upper or lowercase)
  - `key` (integer >= 0)
Output: encrypted string
Rules:
  -casing of the original letter must be preserved when swappthe key represents how many positions after the current letter is the substitute letter
  -if `key` exceeds the length of the alphabet, we have to continue from the beginning of the alphabet
  -non-letter characters are preserved but are not encrypted
Data structure:
  -a string of the alphabet
  -array of characters from input string
Algorithm:
  -create a string of the alphabet in uppercase
  -create an array of the characters from the input string
  -replace each LETTER with the letter that is after `key` indices in the `alphabet` string
    -look for the uppercased version of the current character in the alphabet string
    -if there is a letter at the position of its index + key, replace the current letter with that at the same casing
      -if the character is equal to its uppercased version, return uppercased char
      -else lowercased
    -otherwise
      -get the letter at index `index of the original letter + key % alphabet length` and replace the current letter with it
  -join the array to a string
*/
"use strict";

function determineCase(char, newChar) {
  return (/[A-Z]/.test(char) ? newChar.toUpperCase() : newChar.toLowerCase());
}

function findReplacement(char, idx, key) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let currIdx = ALPHABET.indexOf(char.toUpperCase());

  if (currIdx !== -1) {
    let newIdx = currIdx + key;
    return determineCase(char, ALPHABET[newIdx % ALPHABET.length]);
  }

  return char;
}

function caesarEncrypt(plaintext, key) {
  return plaintext.split("")
                  .map((char, idx) => findReplacement(char, idx, key))
                  .join("");
}

// Examples:
// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"

// y: 24
// 24 + 5 = 29
// 29 - 26 = 3

console.log(caesarEncrypt('a', 47));      // "v"
console.log(caesarEncrypt('A', 75));       // "X"

// all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// total length = 26
// B: 1
// 1 + 25 = 26
// 26 - total length = 0
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"