// Part 1
/*
Input:
  -array of any values
  -or invalid input
Output:
  -new array
  -`undefined` in the case of invalid input
Rules:
  -input array may contain any types of elements mixed or not
  -if input array is empty, return an empty array
  -if it only contains one element, nothing is rotated
Question:
  -how to handle a sparse array?
  -should new array be shallow or a deep copy of the input array?
Data structure:
  -array
Algorithm:
  -if the input is not an array, return `undefined`
  -create a shallow copy of the input array `rotated`
  -push the first element at the `rotated` array while removing it from the front
  -return `rotated`
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return;
  else if (!arr.length) return [];

  let rotated = arr.slice();
  rotated.push(rotated.shift());
  console.log(rotated);
}

//Part 2
/*
Inputs:
  -number to rotate (integer)
  -places to rotate (integer)
Output: rotated number
Rules:
  -"rotate" the digit that is `places` places from the end of the number
  -rotation means we move the digit to the end of the number and the following digits get moved one place to the left
Questions:
  -are input numbers always going to be integers?
  -could we have negative/0 inputs?
  -is `places` always going to be <= the length of the number to rotate?
  -can we assume we'll always have valid inputs?
Data structure:
  -array of digits
Algorithm:
  -if `places` is > the length of the input number, return the number
  -coerce input number to an array of digits
  -get the slice to the right of the digit to rotate
  -get the slice starting from the digit to rotate
  -push the digit to the end and remove it from the front
  -join the two arrays back together
  -coerce the array to a number
*/

function rotateRightmostDigits(num, places) {
  let digits = String(num);
  if (places > digits.length || places < 2) return num;

  let rightSlice = digits.slice(0, digits.length - places);
  let leftSlice = digits.slice(-places);
  let rotated = rightSlice.concat(leftSlice.slice(1), leftSlice[0]);
  return Number(rotated);
}

console.log(rotateRightmostDigits(735291, 0));      // 735291
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(735291, 7));      // 735291