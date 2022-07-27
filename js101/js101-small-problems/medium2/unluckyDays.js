/*
PROBLEM STATEMENT:
    Input:
      -number (year)
    Output:
      -number
    Explicit requirements:
      -return the number of Friday the 13ths in the input year
      -input year will be after 1752 (Gregorian calendar)
      -same calendar will remain in use for the problem's purposes
    Implicit requirements:
      -
    Questions:
      -if there are none? assuming to return `0`
Data Structures:
POTENTIAL DATA STRUCTURES
    -Date
Algorithm:
  1.Create an array of the weekdays starting with Sunday.
  2.Create an array of the months.
  3.Create a new Date object with a date of `month` (from the `months` array)
    13, `input year` for each month in `months`.
  4.Get the day of the week that date corresponds to, and if it matches `Friday`
    in the `weekdays` array, increment a `count` variable.
  5.Return the `count`.
*/

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) count += 1;
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2