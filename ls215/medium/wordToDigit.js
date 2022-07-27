// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

/*
Input: sentence (string)
Output: new string
Rules:
  -word: sequence of non-whitespace chars separated by a single space
  -number-words can be parts of bigger words
Data structures:
  -array of the number-words
  -array of words from the input string
Algorithm:
  -lowercase input string
  -split the input string at each space to get an array of words
  -for each word
    -iterate through the number-words array
      -if the word includes the current number-word
        -replace that bit with the index of the number-word
  -join the words array and return it as a string
*/

function wordToDigit(sentence) {
  const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let regex = new RegExp(NUM_WORDS.join("|"), "gi");

  return sentence.replace(regex, match => NUM_WORDS.indexOf(match.toLowerCase()));
}

// Example:
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// 'Please call me at 5 5 5 1 2 3 4. Thanks.'
console.log(wordToDigit('')); // ''
console.log(wordToDigit("I'll be at the Seven Tours.")); // "I'll be at the 7 Tours."
console.log(wordToDigit('My ID is five-five-five-one.')); // 'My ID is 5-5-5-1.'
console.log(wordToDigit('The weight is done.')); // 'The w8 is d1.'