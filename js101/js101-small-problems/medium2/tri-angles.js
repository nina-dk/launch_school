/*
    Inputs:
      -three non-negative integers
    Output:
      -string
    Explicit requirements:
      -a triangle's angles must have a sum of 180 degrees
      -every angle of a triangle must be > 0
      -right: one angle is 90 degrees
      -acute: all threee angles are < 90 deg
      -obtuse: one angle is > 90
      -all inputs are integers
      -input numbers are in degrees
    Implicit requirements:
Data Structures:
POTENTIAL DATA STRUCTURES
    -array
POTENTIAL METHODS / CODE
    -
Algorithm:
  1.Create an array of the arguments.
  2.Check if the sum of the array's values is 180 deg AND
    if all elements in the array are positive.
  3.If the two above are not true, return "invalid".
  5.If one of the arguments = 90, return "right".
  6.If one of the arguments is > 90, return "obtuse".
  7.Otherwise, return "acute"
*/

function triangle(a, b, c) {
  const angles = [a, b, c].sort((a, b) => a - b);
  if (a + b + c !== 180 || angles[0] === 0) return "invalid";
  if (angles[2] > 90) return "obtuse";
  return (angles[2] < 90 ? "acute" : "right");
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"