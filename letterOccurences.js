/*
SET a string that contains all alphabetical characters.
SET an empty string where we'll add the occurences of each letter.
SET an object that has all the letters as keys and zeroes as values
Convert the given string to an array and for each character of the array
IF it's a lowercase letter increment it's corresponding value in the object.
ELSE move to the next iteration
*/
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function decrypt(string) {
  let letterOccurences = {};
  for (let i = 0; i < ALPHABET.length; i++) {
    letterOccurences[ALPHABET[i]] = 0;
    for (let j = 0; j < string.length; j++) {
      if (ALPHABET[i] === string[j]) letterOccurences[ALPHABET[i]] += 1;
    }
  }
  return Object.values(letterOccurences).join("");
}


console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');