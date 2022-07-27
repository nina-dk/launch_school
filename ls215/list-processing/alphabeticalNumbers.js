/*
Input: array of numbers
Output: new array of the same numbers sorted by the English word for that number
Rules:
  -numbers range from 0 to 19
  -don't mutate the input array
  -sort the numbers based on the ascending alphabetical order of the corresponding
  English word for each number
Data structures:
  -array of the English words for the numbers 0-19
Algorithm:
  HELPER FUNCTION `sortByNumWord` (two parameters `num1`, `num2`)
    -if the word at index `num1` is < the word at index `num2` in `NUM_WORDS`
      -return -1
    -else if the word at index `num1` is > the word at index `num2` in `NUM_WORDS`
      -return 1
    -else return 0
*/
const NUM_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", 
  "seventeen", "eighteen", "nineteen"];

function sortByNumWord(num1, num2) {
  if (NUM_WORDS[num1] < NUM_WORDS[num2]) return -1;
  else if (NUM_WORDS[num1] > NUM_WORDS[num2]) return 1;
  else return 0;
}

function alphabeticNumberSort(numbers) {
  return numbers.slice().sort(sortByNumWord);
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(alphabeticNumberSort(numbers));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(numbers);