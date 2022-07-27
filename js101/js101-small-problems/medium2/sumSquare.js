/*
PROBLEM STATEMENT:
    Input:
      -integer (`count`)
    Output:
      -number
    Explicit requirements:
      -output number is the difference between the square of the sums of the
       first `count` number of digits (starting at 1, 2, ...) and the sum of
       the squares of the same numbers
    Implicit requirements:
      -`count` will be an integer number >= 1 (?)
Data Structures:
POTENTIAL DATA STRUCTURES
    -array
Algorithm:
  1.Get the first `count` numbers starting at 1.
  2.Get the sum of those numbers and square it.
  3.Square each of those numbers and sum the squares.
  4.Get the difference of the two operations above.
*/

function sumSquareDifference(count) {
  let numbers = Array(count).fill(1).map((num, i) => num + i);
  let sumSquared = numbers.reduce((sum, num) => sum + num)**2;
  let sumOfSquared = numbers.reduce((sum, num) => sum + num**2, 0);

  return sumSquared - sumOfSquared;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150