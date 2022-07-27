/*
Input: string
output: boolean true/false
Rules:
  Explicit Requirements:
    -if all letters of input string are uppercase return true otherwise false
    -ignore all non-alphabetic characters
  Implicit Requirements:
    -for an empty string return true
Data structures: array
Algorithm:
  1.Create an array of the input strings characters.
  2.Return if every character in the array equals itself uppercased.
*/

const isUppercase = text => text === text.toUpperCase();

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true