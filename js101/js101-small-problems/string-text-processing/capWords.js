/*
Input: string
Output: string
Rules:
  Explicit requirements:
    -each word in returned string must have the first letter ONLY capitalized
    -words are delimited by a single space
    -any sequence of non-whitespace chars is a word
  Implicit requirements:
    -if a word starts with a non-letter character the first letter will not
     be capitalized
Data structures:
  array of words
Algorithm:
  1.Create a `words` array comprised of the string's words.
  2.Create a `count` variable equal to 0.
  3.Create a `capitalized` array.
  4.Push the word at index `count` from `words` in `capitalized` with its first
    letter capitalized.
  5.Increment `count`.
  6.Repeat steps 4-5 for all words in `words`.
  7.Return `capitalized` joined in a string delimited by spaces.
*/

function wordCap(string) {
  return string.toLowerCase().split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'