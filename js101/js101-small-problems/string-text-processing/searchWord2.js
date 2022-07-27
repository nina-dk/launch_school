/*
----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions only return something or do they only have side effects?
  - Will you return the same object that's passed in the function or a new one?

PROBLEM STATEMENT:
    Inputs: word (string), text (string)
    Output: string
    Explicit requirements:
      -returned string is the `text` with every occurence of `word` highlighted
      -to highlight a word enclose it in double * and change it to uppercase
    Implicit requirements:
      -problem is case insensitive
    Questions:
      -Assume each word is delimited by a single space?
Data Structures:
POTENTIAL DATA STRUCTURES
    -array
POTENTIAL METHODS / CODE
    -split, join, map
Algorithm:
  1.Create an array containing the words from `text`.
  2.Loop through that array
    a.If the current word in the array matched the input `word`
      Change it to **WORD**
  3.Return the array joined back into a string.
*/

function searchWord1(wordToFind, text) {
  const words = text.split(" ");
  return words.map(word => {
    return (word.toLowerCase() === wordToFind.toLowerCase() ?
      "**" + word.toUpperCase() + "**" : word);
  }).join(" ");
}

//Alternate solution

function searchWord2(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(regex, `**${word.toUpperCase()}**`);
}

const text = 'Sed ut sedalius perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord1('sed', text));
console.log(searchWord2('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"