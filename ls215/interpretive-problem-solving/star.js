// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
Input: odd integer >= 7 `n`
Output: 8-pointes star of stars in an nxn grid
Rules:
  -each star is placed in an `n`x`n` grid (`n` rows and `n` columns)
  -min value for `n` is 7 and it's always an odd integer
  -each star row contains 3 stars except for the middle row
  -the middle row is comprised of `n` stars
  -left padding starts at 0 and increments by 1 on each row until the middle (0 pad)
  -the spaces between the 3 stars start at `n - 3` and decrement by 1 on each row until they become 0
  -padding and in-between spaces num are reverse
  -the star rows until the middle row repeat reversed after the middle row
Data structure:
  -array of string star-rows
Algorithm:
  -declare a `starRows` variable to store an empty array
  -declare a `pad` and a `spaces` variable and initialize them to `0` and `n - 3`
  -set a variable `rowCount` to `1` and while it's less than `n / 2`
    -generate a string that starts with `pad` spaces, a *, `spaces` spaces, a *, `spaces` spaces and another *
    -push that string in `starRows`
    -increment `pad`
    -decrement `spaces`
  -print every string in `starRows`
  -print a string that has `n` *
  -print the strings in `starRows` starting from the last
*/

function star(n) {
  let starRows = [];
  let pad = 0;

  for (let spaces = (n - 3) / 2; spaces >= 0; spaces -= 1, pad += 1) {
    starRows.push(`${" ".repeat(pad)}*${" ".repeat(spaces)}*${" ".repeat(spaces)}*`);
  }

  starRows.forEach(row => console.log(row));
  console.log("*".repeat(n));
  starRows.reverse().forEach(row => console.log(row));
}

// Examples:

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *