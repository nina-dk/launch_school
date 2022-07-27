//input: an int `count` >= 0 and another integer
//output: array of ints
//rules: -`count` is the number of integers to include in the array (length)
//       - 2nd input is the starting number (index 0) of the array
//       - all other elements in the array will be multiples of starting int
//       - if `count` is 0, return an empty array
//       -startingInt can be ANY integer (positive/negative/zero)
//       -multiples are what we get after multiplying a num by an int (product)
//       -the only multiple of zero is itself
//data structures: array
//Algorithm:
//Create an array `multiples`
//Create a variable `multiple` = `startingInt`
//Create an `index` variable equal to 1
//While `index` <= `count`
//  Push `multiple` times `index` in the array
//  Increment `index` by 1
//Return `multiples`

function sequence(count, startingInt) {
  let multiples = [];

  for (let i = 1; i <= count; i++) {
    multiples.push(startingInt * i);
  }

  return multiples;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

//Alternate solution

function sequence(count, startingInt) {
  return Array(count).fill(startingInt).map((int, i) => int * (i + 1));
}