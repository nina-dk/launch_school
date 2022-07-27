/*
Input: string of words separated by single spaces
Output: array of words and their length as strings
Rules:
  -words are delimited by single spaces
  -punctuation counts as part of the adjacent word
  -if input is empty string or no input return empty array
Data structures:
  -transformation -> map
  -array of words
*/

function wordLengths(str) {
  if (!str) return [];
  return str.split(" ")
            .map(word => `${word} ${word.length}`);
}

// Examples:
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []