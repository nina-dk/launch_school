/*
PROBLEM STATEMENT:
    Input:
      -number (integer)
    Output:
      -maximum rotation of input number
    Explicit requirements:
      -take an integer and return the maximum rotation* of that integer
      -*rotate the first digit then freeze the new first and rotate the
       next-to-first digit, then freeze the first two and so on
      -use previous exercise's function
    Implicit requirements:
      -if a number has `0` as its 2nd digit, it will disappear when it becomes
       leading
      -one-digit numbers should be returned as-is
      -rotations happen one less time than the digit's length
Examples/ Test Cases:
 735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579
Data Structures:
POTENTIAL DATA STRUCTURES
    -String or Array of digits
POTENTIAL METHODS / CODE
    -slice, splice
Algorithm:
  1.Coerce the number to a string and that to an array `digits`.
  2.Create a `count` variable assign to it `digits`.length.
  3.Create a `currentNum` var equal to the input number.
  4.Call the `rotateRightmostDigits` func passing in the `currentNum` and
    `count` and assign the return value to `currentNum`.
  5.Decrement `count` by 1.
  6.Repeat steps 4-5 as long as `count` is > 0.
  7.Return `currentNum`.

*/

function rotateRightmostDigits(number, count) {
  const digits = String(number).split("");
  let digitToMove = digits.splice(-count, 1).toString();
  digits.push(digitToMove);

  return Number(digits.join(""));
}

function maxRotation(number) {
  let currentNum = number;

  for (let i = String(number).length; i > 1; i--) {
    currentNum = rotateRightmostDigits(currentNum, i);
  }

  return currentNum;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845