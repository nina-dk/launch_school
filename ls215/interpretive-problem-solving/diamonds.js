// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

/*
Input: odd integer
Output: four-pointed diamond of asterisks
Rules:
  -input will always be an odd integer
  -each row until the middle row, has 2 more asterisks than the row above
  -each row after the middle row has 2 asterisks less than the previous row
  -diamond is formed of two identical triangles
  -spaces preceding the asterisks of each row decrease by 1 as go towards the middle row
  -first row always has 1 asterisk
  -spaces start at input number / 2 rounded down to the nearest integer
Data structure:
  -array of strings that represent the diamond rows
Algorithm:
  -set a count to the input number / 2 rounded up
  -set a `numOfAsterisks` variable to 1
  -set a `triangle` array
  -while the count is > 0
    -decrement count by 1
    -generate a string that has count number of spaces followed by `numOfAsterisks` asterisks
    -push the produced string into the `triangle` array
    -increment `numOfAsterisks` by 2
  -print the triangle starting from index 0 and then starting from index next to last
*/

function diamond(n) {
  let diamondRows = [];
  let spaces = Math.ceil(n / 2);

  for (let numOfAsterisks = 1; spaces > 0; numOfAsterisks += 2) {
    spaces -= 1;
    let row = " ".repeat(spaces) + "*".repeat(numOfAsterisks);
    diamondRows.push(row);
  }

  diamondRows.forEach(row => console.log(row));
  diamondRows.reverse().slice(1).forEach(row => console.log(row));
}

// Examples:
diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

// diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

//2nd way
function diamond(n) {
  let diamondRows = [];
  let adjustNumOfStars = 2;

  for (let numOfStars = 1; numOfStars > 0; numOfStars += adjustNumOfStars) {
    let spaces = (n - numOfStars) / 2;
    let row = " ".repeat(spaces) + "*".repeat(numOfStars);
    diamondRows.push(row);
    if (spaces === 0) adjustNumOfStars = -2;
  }

  diamondRows.forEach(row => console.log(row));
}

//Further exploration: hollow diamonds
/*
Input: 
  -odd integer
  -represents the number of rows and columns of the diamond
Output:
  -hollow diamond of *
Rules:
  -input num will always be odd integer
  -first and last diamond row will always have one *
  -the spaces before the asterisks on each row are (n - numberOfStars + number of inbetween spaces) / 2
  -each line, except for the first and last, has two asterisks
  -between the asterisks there are spaces
    -the number of spaces starts at 1 on the second row, and increments by 2
    on each row until the middle row
    -it then decreases by 2
Data structure:
  -array of diamond rows
Algorithm:
  -set a variable `spaces` to store the number of spaces needed between the asterisks and initialize it to 0
  -if the length of the array is 0
    -append a string with (n - 1 + 0) / 2 that may spaces and one asterisk
    -increment `spaces` by 1
  -otherwise, a string with that many spaces, one asterisk, `spaces` number of spaces and another asterisk
    -increment `spaces` by 2
*/
function hollowDiamond(n) {
  let diamondRows = [];
  let numOfSpaces = 1;
  let increment = 2;

  for (let numOfRows = 1; numOfRows <= n; numOfRows += 1) {
    let row = "";
    if (numOfRows === 1 || numOfRows === n) {
      row += " ".repeat((n - 1) / 2) + "*";
    } else {
      row += " ".repeat((n - (2 + numOfSpaces)) / 2) + "*" + " ".repeat(numOfSpaces) + "*";
      if (numOfRows === Math.ceil(n / 2)) increment = -2;
      numOfSpaces += increment;
    }

    diamondRows.push(row);
  }

  diamondRows.forEach(row => console.log(row));
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);