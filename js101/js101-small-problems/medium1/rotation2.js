/*
PROBLEM STATEMENT:
    Inputs:
      -two numbers: `number` and `count`
    Output:
      -number
    Explicit requirements:
      -move the last `count` number of digits from `number` to the end and shift
       the remaining digits to the left
    Implicit requirements:
      -`count` starts counting from the end of the `number`
      -rotate the digit(s) starting from length of the number - `count`

Data Structures:
POTENTIAL DATA STRUCTURES
    -String -> Array
POTENTIAL METHODS / CODE
    -String()
Algorithm:
  1.Coerce the `number` to a string and that to an array `digits`.
  2.Move the digits from `digits` at index `digits` - `count` to the end.
  3.Return the array joined into a string -> to number.
*/

function rotateRightmostDigits(number, count) {
  const digits = String(number).split("");
  let digitToMove = digits.splice(-count, 1).toString();
  digits.push(digitToMove);

  return Number(digits.join(""));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
/*
735291, 3 -> last three digits: 2, 9, 1
735912
*/
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917