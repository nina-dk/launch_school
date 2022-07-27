"use strict";

class RomanNumeral {
  static ROMAN_NUMERALS = {
    0: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    1: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    2: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    3: ["M", "MM", "MMM"]
  }

  constructor(num) {
    this.romanNumeral = this.toRoman(num) || "nulla";
  }

  toRoman(num) {
    let digits = String(num).split("").reverse();
    let romanNumeral = "";
    digits.forEach((digit, idx) => {
      if (digit > 0) {
        romanNumeral = RomanNumeral.ROMAN_NUMERALS[idx][digit - 1] + romanNumeral;
      }
    });

    return romanNumeral;
  }
}

module.exports.RomanNumeral = RomanNumeral;

//2nd way
// class RomanNumeral {
//   static ROMAN_VALUES = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100],
//     ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];

//   constructor(num) {
//     this.romanNumeral = this.toRoman(num) || "nulla";
//   }

//   toRoman(num) {
//     let romanNumeral = "";

//     for (let i = 0; i < RomanNumeral.ROMAN_VALUES.length; i++) {

//       while (num >= RomanNumeral.ROMAN_VALUES[i][1]) {
//         romanNumeral += RomanNumeral.ROMAN_VALUES[i][0];
//         num -= RomanNumeral.ROMAN_VALUES[i][1];
//       }
//     }

//     return romanNumeral;
//   }
// }