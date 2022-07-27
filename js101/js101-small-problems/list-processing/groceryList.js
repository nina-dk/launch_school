/*
Input: nested array
Output: new array
Rules:
  Explicit requirements:
    -output array is one-dimensional
    -output array must contain each fruit from input array as many times as
     specified by its quantity (2nd element in each nested subarray)
Data structures:
  Array
Algorithm:
  1.Create an empty `fruits` array.
  2.Create an `i` variable equal to 0.
  3.Create a variable `quantity` equal to the element at index `1` in the
    subarray at index `i` from input array.
  4.Push the element at index `i` from input array in `fruits` array.
  5.Decrement `quantity`.
  6.Repeat steps 4-5 until quantity becomes 0.
  7.Increment `i`.
  8.Repeat steps 3-7 for all subarrays from input array.
  9.Return `fruits`.
*/

function buyFruit(nestedArr) {
  const fruits = [];

  nestedArr.forEach(arr => {
    for (let quant = arr[1]; quant > 0; quant--) {
      fruits.push(arr[0]);
    }
  });

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]