/*
Inputs:
  -string to encode (any types of characters)
  -keyword to use for the encoding (alphabetic characters)
Output: encoded string
Rules:
  -only alphabetic chars are encoded
  -non-alphabetic chars must be preserved
  -casing must be preserved in the returned string
  -the keyword is case-insensitive ("meat" === "MeaT")
  -both the letters "a"-"z" and "A"-"Z" are equivalent to the indices 0-25
  -each character in the keyword matches with a letter char in the input string in the correct order. repeat the keyword as many time necessary to cover the entire string
Data structure:
  -a string of the alphabet
  -array of characters from the input string
Algorithm:
  -Create an `alphabet` variable to store the alphabet
  -remove all non-alphabetic chars from the input string
  -generate a string that contains the keyword as many times as necessary to get to the length of the letter-string
  -set an `keyIdx` variable to `0`
  -coerce input stirng to an array of characters
  -for each char
    -if it's a letter
      -find it's index in the alphabet string
      -find the index of the letter at index `keyIdx` in the keyword-string
      -extract 25 as many times as its included in the sum of the two indices
      -replace the current letter in the array with the letter from the alphabet at index `current index + what's left of the sum`
      -if the original letter was in uppercase, uppercase the replacement
      -increment `keyIdx` by 1
    -else, leave it as is
  -join the character array to a string and return it
*/

function vigenereCipher(plaintext, keyword) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let letterCount = plaintext.replace(/[^a-z]/gi, "").length;
  let key = keyword.padEnd(letterCount, keyword).toLowerCase();
  let chars = plaintext.split("");
  let keyIdx = 0;

  return chars.map(char => {
    if (/[a-z]/i.test(char)) {
      let currIdx = ALPHABET.indexOf(char.toLowerCase());
      let shiftNum = ALPHABET.indexOf(key[keyIdx]);
      let newIdx = (currIdx + shiftNum) > 25 ? (currIdx + shiftNum) - 26 : (currIdx + shiftNum);
      keyIdx += 1;
      return /[A-Z]/.test(char) ? ALPHABET[newIdx].toUpperCase() : ALPHABET[newIdx];
    }

    return char;
  }).join("");
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat")); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereCipher("Pineapples don't go on pizzas!", "MeAt")); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereCipher("", "meat")); // ""
console.log(vigenereCipher("! 359 .,;@", "meat")); // ! 359 .,;@
console.log(vigenereCipher("Pizza...", "abz")); // "Pjyzb..."

// 15 8 25  25 0
// p  i z   z  a

// 0 1 25   0  1
// a b z    a  b

// 15 9 50  25 1
// p  j y    z  b


// 12 4 0 19
// m  e a t

// 15 8 13 4
// P  i n  e

// 27 12 13 23
// B  m  n  x

// 25 25 0 18
// z  z  a s

// 12 4  0 19
// m  e  a t

// 37 29 0 37
// 12  4 0 12
// m   e a m

// 11 3 0 11
// l  d a l