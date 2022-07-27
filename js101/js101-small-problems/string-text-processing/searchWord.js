/*
Input: word (string), text (string)
Output: number
Rules:
  Explicit requirements:
    -returned number represents the number of times the `word` appears in the `text`
    -words in the `text` are delimited by spaces (some will include punctuation)
    -both arguments will always be provided
  Implicit requirements:
    -if the `word` doesn't exist in `text`, number will be 0
    -punctuation matters in a word
    -casing doesn't matter
Data structures:
  array of words
Algorithm:
  1.Create a `words` array containing all words from `text`.
  2.Create an `i` and a `count` var equal to 0.
  3.If the word at index `i` in `words` includes the `word` increment `count`.
  4.Increment `i`.
  5.Repeat steps 3-4 for all words in `words`.
  6.Return `count`.
*/

function searchWord(wordToFind, text) {
  const words = text.split(" ");
  let count = 0;

  words.forEach(word => {
    if (word.toLowerCase() === wordToFind.toLowerCase()) count += 1;
  });

  return count;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2