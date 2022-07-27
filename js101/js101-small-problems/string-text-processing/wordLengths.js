/*
Input: string
Output: array
Rules:
  Explicit requirements:
    -words in input string are delimited by a single space
    -returned array must contain each word from input string followed by a space
     and the length of that word
    -if an empty string is provided as an argument or there's no argument at all
     return an empty array
Data structures: Array
Algorithm:
  1.Create an array `wordsAndLength` that contains each word from input string.
  2.Loop over that array
    a.At the end of each word, add a space and that word's length.
  3.Return `wordsAndLength`.
*/

function wordLengths(string) {
  return (string ? string.split(" ").map(word => `${word} ${word.length}`) : []);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []