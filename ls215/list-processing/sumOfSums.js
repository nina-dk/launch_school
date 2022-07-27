/*
Input: array of numbers
Output: integer
Rules:
  -input array will always contain at least one number
  -get the sums of only the leading subarrays of input array
  -a leading subarray is an array that starts from the first element in input
  array
  -a one-element subarray is considered a valid leading subsequence
Algorithm:
  -Starting from `index` 1 in the input array, and until `index` is equal to the length of the array
    -get all the subarrays that start at index 0
      -get the slice from 0 to `index`
    -sum the numbers in each subarray
  -sum all of the produced sums and return the total
*/

function sumOfSums(nums) {
  return nums.reduce((total, _, idx) => {
    return total + nums.slice(0, idx + 1).reduce((sum, num) => sum + num, 0);
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35