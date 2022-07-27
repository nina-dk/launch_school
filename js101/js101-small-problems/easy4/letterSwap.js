//input/output: string of words separated by spaces /
//              string with first and last letter of each word swapped
//rules: -at least one-word string
//       -only letters and spaces
//       -every word will contain at least one letter
//       -no leading/trailing/repeated spaces
//data structures: array of words, empty string
//algorithm:
//START
//SET array that contains all of the words
//Iterate over the array
//Append the first letter to the end of the word and remove it
//from the beginning and add the next to last letter in the beginning
//Join the words from the array into a sting again
//PRINT string
//END

function swap(string) {
  let words = string.split(" ");
  words = words.map(word => {
    return (word.length === 1 ? word :
      `${word.slice(-1)}${word.slice(1, -1)}${word.slice(0, 1)}`);
  });
  return words.join(" ");
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"