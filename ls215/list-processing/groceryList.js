/*
Input: nested array of fruits and quantities (string and number)
Output: array of fruits (strings)
Rules:
  -fruits in the output array should appear as many times as their quantity
  in the input array suggests
Algorithm:
  -declare a `result` array to store the fruits
  -for each nested array in input array
    -push the element at index 0 to the `result` array as many times as
      the number at index 1 suggests
*/

function buyFruit(list) {
  return list.flatMap(item => Array(item[1]).fill(item[0]));
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]