/*
Input: two arrays of numbers
Output: new array of all products
Rules:
  Explicit requirements:
    -Return array should contain the products of all possible combinations of
    number pairs between the two input arrays (not one array's numbers with
    each other).
    -Return array should be sorted in ascending order.
    -Neither argument will be an empty array.
Data structures:
 array to push the products
Algorithm:
  1.Create an empty `products` array.
  2.Create `i` and `idx` with a value of 0.
  3.Multiply the element at index `i` in the first array, with the element
    at index `idx` in the second array, and push the product in `products`.
  4.Increment `idx` by 1.
  5.Repeat steps 3-4 for all elements of the second array.
  6.Increment `i` by 1.
  7.Repeat steps 3-6 for all elements in the first input array.
  8.Return the `products` array sorted by ascending order.
*/

function multiplyAllPairs(arr1, arr2) {
  const products = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => products.push(num1 * num2));
  });

  return products.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]