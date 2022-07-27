/*
PROBLEM STATEMENT:
    Inputs:
      -three numbers (triangle sides)
    Output:
      -string ("equilateral", "isosceles", "scalene", "invalid")
    Explicit requirements:
      -equilateral: all three sides are equal
      -isosceles: two sides are of equal length, third is different
      -scalene: all three sides are of different lengths
      -to be valid: the sum of the two SHORTEST sides must be > length of the
       longest side AND every side's length must be > 0
    Implicit requirements:
      -input numbers might be integers or floating point nums
Algorithm:
  1.Check if it is a triangle
    a.check if any of the parameters is 0 OR
    b.if the largest parameter is < the sum of the other two
  2.If it is
    -If two sides are equal return "isosceles"
    -if all three sides are equal return "equilateral"
    -else return "scalene"
*/

function triangle(side1, side2, side3) {
  let sides = [...arguments].sort((a, b) => a - b);
  if (sides.includes(0) || (sides[0] + sides[1] <= sides[2])) return "invalid";

  if (sides[0] === sides[1] && sides[0] === sides[2]) return "equilateral";
  if (sides[0] === sides[1] || sides[1] === sides[2]) return "isosceles";

  return "scalene";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"