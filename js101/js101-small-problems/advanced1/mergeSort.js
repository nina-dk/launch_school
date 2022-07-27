/*
Input: array of number or strings
Output: new array
Rules:
  -input array will contain elements of the same data type (numbers or strings)
  -use `merge` function (combines two number arrays into one sorted array)
  -break down input array into nested subarrays as much as possible
    -break original array to the middle and then each new subarray to the middle,
     until every element is in a one-element nested array
  -after the nesting, the resulting array is always a two-element array
Algorithm:
  -create nest function that takes an array as input and returns it broken down
   in the middle into two nested subarrays
    -if the length of an array is < 2, return the array as-is (no further
     nesting needed)
    -otherwise return the array broken down in the middle into two nested
     subarrays
*/

function nest(array) {
  if (array.length < 2) return array;

  let middle = Math.ceil(array.length / 2);
  return [nest(array.slice(0, middle)), nest(array.slice(middle))];
}

function unNest(array) {
  if (array.length === 1) return array;
  if (!Array.isArray(array[0][0])) return merge(array[0], array[1]);

  return unNest([unNest(array[0]), unNest(array[1])]);
}

function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  return sorted.concat(arr1.length > 0 ? arr1 : arr2);
}

const mergeSort = array => unNest(nest(array));

console.log(mergeSort([1]));                    // [1]
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]