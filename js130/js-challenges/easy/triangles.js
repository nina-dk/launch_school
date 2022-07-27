/*
Expected Input: 3 numbers
Output: triangle type in form of string
Rules:
  -a triangle's sides must be of length > 0
  -side a + side b must be > side c (for all sides)
  -equilateral: all 3 sides are equal
  -isosceles: 2 sides equal
  -scalene: all sides are of different length
Algorithm:
  -Create an array of input args and sort it in ascending numerical order
  -METHOD: `isTriangle`
    -return `false` if not every element in args array is a number
    -if first element in args array is <= 0, return false
    -compare the sum of every two elements to the third element
      -return `false` if any sum is <= the length of the third side
  -METHOD: `isEquilateral`
  -METHOD: `isScalene`
  -METHOD: `isIsoceles`
*/
"use strict";

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (!this.isTriangle()) throw new TypeError("This is not a valid triangle");

    this.type = this.triangleType();
  }

  isTriangle() {
    let sides = [this.a, this.b, this.c];
    if (sides.some(length => length <= 0)) return false;
    return sides[0] + sides[1] > sides[2] &&
           sides[0] + sides[2] > sides[1] &&
           sides[1] + sides[2] > sides[0];
  }

  isEquilateral() {
    return this.a === this.b && this.b === this.c;
  }

  isScalene() {
    return (this.a !== this.b) && (this.b !== this.c) && (this.a !== this.c);
  }

  triangleType() {
    if (this.isEquilateral()) return "equilateral";
    else if (this.isScalene()) return "scalene";
    else return "isosceles";
  }
}

module.exports.Triangle = Triangle;