//input: string
//output: new string
//rules:
// -Explicit requirements:
//    -output string will contain the words from input string in reverse order
//Questions: -what do we define as word?
//            -words are delimited by spaces
//           -will there always be words in the input string?
//            -if input string is empty --> return itself
//data structures: array to push each word from input string
//Algorithm:
//Create an array comprised of the input string's words
//Reverse the array
//Join the array back into a string
//Return the new string

const reverseSentence = string => string.split(" ").reverse().join(" ");

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"