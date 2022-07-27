//input: string of one or more words
//output: string containing the input string's words
//rules:
//  -Explicit requirements:
//    -words are separated by a single space
//    -string will consist of only letters and spaces
//    -5-or-more letter words should be reversed in the return string
//Questions: -what if there are two or more consecutive spaces?
//Data structures: array containing all words from input string
//Algorithm:
/*
1.Create an empty `words` array.
2.Push every word (delimited by a single space) from input string
in the `words` array.
3.If the length of a word in `words` is more than or equal to 5 -> reverse the word.
4.Repeate step 3 for all the words in the `words` array.
5.Join the `words` array into a string.
6.Return the new string.
*/

function reverseWords(string) {
  let words = string.split(" ");
  return words.map(word =>
    (word.length >= 5 ? word.split("").reverse().join("") : word)).join(" ");
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"