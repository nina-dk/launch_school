function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort();

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);

/*
In the `median` function, on line 8, Pr. Graham is attempting to sort
the grades in asceinding order using the `Array.prototype.sort` method.
However, if not provided with a specific sorting criterion, `sort` coerces the elements
to strings and sorts them based on their characters' Unicode code point values.
When we're dealing with numbers, this can lead to undesired results, such as the number
`100` coming before the number `89` in the array, because `1` comes before `8` in
Unicode order. This leads to some of the median values being miscalculated because
the grade arrays were not sorted properly.
To fix this issue, we need to provide a callback function that tells `sort`
to sort the elements of the calling array in ascending numerical order.
*/

function median(nums) {
  nums.sort((a, b) => a - b);

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}