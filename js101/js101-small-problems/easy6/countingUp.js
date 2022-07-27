//input/output: positive integer / array of ints
//rules: - result array should contain all integers between 1-input int
//        in ascending order
//       - input will always be a positive integer
//       - if input is 1, only 1 will be included in the array (once)
//data structres: array
//Algorithm:
//Create an empty array called `result`
//Create a variable `count` equal to 1
//While `count` is less than of equal to the input number
//  Push `count` in the `result` array
//  Increment `count` by one
//Return the `result` array

function sequence(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]