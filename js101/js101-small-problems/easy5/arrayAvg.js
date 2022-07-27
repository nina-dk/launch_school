//input/output: array of ints / average of the ints in the array
//rules: - the array will never be empty
//       - the array will only contain positive integers
//       - the output should be rounded down to the integer component of the avg
//data structures: reduce
//algorithm:
//START
//SET count = 0
//SET sum = 0
//WHILE count < length of the given array
//  Add the element at index count to the sum
//Divide the sum by the length of the array
//Round the sum down the integer part (Math.floor())
//PRINT sum
//END

let average = nums =>
  Math.floor(nums.reduce((sum, num) => sum + num) / nums.length);

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
console.log(average([4])); // 4

//Further exploration
//Using forEach

function average(nums) {
  let sum = 0;
  nums.forEach(num => sum += num);
  return Math.floor(sum / nums.length);
}