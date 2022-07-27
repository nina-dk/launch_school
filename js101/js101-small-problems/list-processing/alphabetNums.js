//Input: array of integers from 0-19 inclusive
//Output: array of integers
//Rules:
//  Explicit requirements:
//   -Output array will contain the same numbers as input array
//    but sorted based on the English word for each number
//    (zero, one, two, three, four, five, six, seven, eight, nine, ten,
//     eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
//     eighteen, nineteen)
//   Implicit requirements:
//    -The English words must be compared alphabetically
//Questions: -Will output array be the same as input array? (probably not)
//           -Will input array always have all of the numbers from 0-19?
//Data structures: array methods, nested array
//Algorithm:
/*
1.Create an array `numWords` containing the English word for each number 0-19.
2.Create `i` variable equal to 0.
3.Create a copy of the `numWords` array called `wordAndNum`.
3.Convert the element at index `i` in `wordAndNum` to an array.
4.Increment `i` by 1.
4.Repeat steps 3-4 for each element in the array.
5.Set `i` equal to 0 again.
6.Push `i` in the subarray at index `i`.
7.Increment `i` by 1.
8.Repeat steps 6-7 for all the subarrays.
9.Sort the `wordAndNum` array alphabetically.
10.Remove the element at index 0 in the first subarray of `wordAndNum`.
11.Repeat step 10 for all the subarrays.
12.Return the `wordAndNum` array.
*/
const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"];

const wordAndNum = Object.fromEntries(Object.entries(numWords));

function alphabeticNumberSort(nums) {
  let words = nums.map(digit => wordAndNum[digit]).sort();
  return words.map(word => {
    let digit;
    for (let key in wordAndNum) {
      if (wordAndNum[key] === word) digit = Number(key);
    }
    return digit;
  });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(alphabeticNumberSort([3, 4, 5, 6, 7, 13, 15]));

//Using sort()
/*
Create a compareFunction to use as an argument for sort().
-each English word has an index of the number it represents
-compareFunction will take two arguments `num1`, `num2`
  -if `num1` < `num2` it'll return `-1`
  -if `num1` > `num2` it'll return `1`
  -else it will return `0` (`num1` and `num2` are equal)

Algorithm:
  1.If the element at index `num1` in `numWords` is greater than the element
    at index `num2`, return -1
    ...
*/

function compareFunction(num1, num2) {
  if (numWords[num1] > numWords[num2]) return 1;
  if (numWords[num1] < numWords[num2]) return -1;
  return 0;
}

function alphabeticNumberSort(nums) {
  return nums.sort(compareFunction);
}

//Further exploration

function alphabeticNumberSort(nums) {
  return nums.sort((num1, num2) => {
    if (numWords[num1] > numWords[num2]) return 1;
    if (numWords[num1] < numWords[num2]) return -1;
    return 0;
  });
}