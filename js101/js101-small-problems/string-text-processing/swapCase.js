/*
Input: string
Output: string
Rules:
  Explicit requirements:
    -if a letter is lowercased, change it to uppercase
    -if a letter is uppercased, change it to lowercase
    -leave every non-letter character unchanged in output string
Data structures: Array of characters
Algorithm:
  1.Create an array `chars` containing all the string's characters.
  2.Create a `swapped` array.
  3.Create an `i` variable equal to 0.
  4.Push the character at index `i` from `chars` in `swapped` with the opposite
    casing of what it has now.
  5.Return `swapped` joined.
*/

function swapCase(string) {
  return string.split("")
    .map(char => {
      if (/[a-z]/.test(char)) return char.toUpperCase();
      if (/[A-Z]/.test(char)) return char.toLowerCase();
      return char;
    }).join("");
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"