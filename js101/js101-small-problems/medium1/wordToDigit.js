/*
PROBLEM STATEMENT:
    Input:
      -string
    Output:
      -new string
    Explicit requirements:
      -replace every occurence of a "number word" with its corresponding digit
      -'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
       'eight', 'nine'
    Implicit requirements:
      -
    Questions:
      -what if a number word is part of a larger word/character sequence?
      -does case matter?
Data Structures:
POTENTIAL DATA STRUCTURES
    -array containing the "number words"
POTENTIAL METHODS / CODE
    -replace
Algorithm:
  1.Initialize an array `numWords` containing the "number words".
  2.Iterate over the input string
    a.if any character sequence matches a word from `numWords` replace
      it with its corresponding index in the array.
  3.Return the new string.
*/

function wordToDigit(str) {
  const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numWords.forEach((word, idx) => {
    let regex = new RegExp(word, "gi");
    str = str.replace(regex, idx);
  });

  return str;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit("It's the Fourth of July.");

//Further exploration

function wordToDigit2(str) {
  const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let regexString = "\\b" + numWords.join("\\b|\\b") + "\\b";
  let regex = new RegExp(regexString, "gi");

  return str.replace(regex, match => numWords.indexOf(match.toLowerCase()));
}

console.log(wordToDigit2('Please call me at five five five one two three four. Thanks.'));
wordToDigit2("It's the Fourth of July.");
console.log(wordToDigit2("The weight is done."));