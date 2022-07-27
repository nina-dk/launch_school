// let console.log(isLeapYear = ye)ar => {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0 ) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   }
//   return false;
// }

//Leap years in the British Empire

let isLeapYear = year => {
    if (year % 4 === 0) {
      if (year <= 1752) {
        return true;
      }
      if (year % 100 === 0) {
        if (year % 400 === 0 ) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));        // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true