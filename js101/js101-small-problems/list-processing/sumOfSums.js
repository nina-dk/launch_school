/*
Input: array
Output: number
Rules:
  Explicit requirements:
    -output number must be the sum of the sums of of each leading subsequence
     for input array (leading subsequence is each subsequence that starts with
     the number at index 0 from the original array)
    -assume input array will contain at least one number
  Implicit requirements:
    -the first number itself is considered a subsequence and must be added to
     the final sum
Data structures:
  nested array
Algorithm:
  1.Create a `subsequences` array that contains all the leading subsequences.
    a.Create an empty `subsequences` array.
    b.Create an `i` var equal to 1.
    c.Push the subarray of input array that starts at index 0 until index `i`.
    d.Increment `i`.
    e.Repeat steps c-d until `i` is greater than the input array's length.
    f.Return `susbsequences`.
  2.Create a `count` and an `i` variable equal to 0.
  3.Create an `idx` variable equal to 0.
  4.Add the element at index `idx` in the element at index `i` in the
    `subsequences` array to `count`.
  5.Increment `idx` by 1.
  6.Repeat steps 3-4 for every element in the subarray at index `i`.
  7.Increment `i` by 1.
  8.Repeat steps 3-7 for each subarray in `subsequences`.
  9.Return `count`.
*/

function leadingSubsequences(array) {
  const subsequences = [];

  for (let i = 1; i <= array.length; i++) {
    subsequences.push(array.slice(0, i));
  }

  return subsequences;
}

//1st solution

function sumOfSums(nums) {
  const subsequences = leadingSubsequences(nums);
  let count = 0;

  for (let i = 0; i < subsequences.length; i++) {
    for (let idx = 0; idx < subsequences[i].length; idx++) {
      count += subsequences[i][idx];
    }
  }

  return count;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

//2nd solution

function sumOfSums(nums) {
  return leadingSubsequences(nums)
    .map(subsequence => subsequence.reduce((sum, num) => sum + num))
    .reduce((sum, num) => sum + num);
}