/*
Input: two arrays of numbers
Output: a new array of numbers
Rules:
  -input arrays won't be empty
  -returned array must be sorted in ascending numerical order
  -returned array comprises the products of each pair of numbers
    from input array 1 and input array 2
Algorithm:
  -declare a `result` array
  -For each number in the first input array
    -Iterate over the numbers in the second input array
      -Multiply the current number from array1 to the current number from array2
      -push the product in a `result` array
  -sort the `result` array
  -return `result` array
*/

function multiplyAllPairs(nums1, nums2) {
  return nums1.reduce((products, currNum) => {
    nums2.forEach(num => products.push(currNum * num));
    return products;
  }, []).sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]