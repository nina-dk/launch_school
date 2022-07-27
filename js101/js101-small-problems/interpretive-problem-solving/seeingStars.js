/*
Input: `N` odd integer >= 7
Output: 8-pointed star of * in an NxN grid
Rules: -`N` is going to be >= 7 and always an odd number
       -middle line of the star has `N` asterisks
       -height of the star = `N`
       -the three middle lines of the star have no spaces between the *
       -all lines except the middle line have three *
       -top and bottom lines have `N` length
       -top, bottom and middle lines don't have left padding
*/

function star(N) {
  let spaces = Math.floor(N / 2) - 1;
  let increment = 1;

  for (let count = 0; count >= 0; count += increment) {
    if (spaces < 0) {
      console.log("*".repeat(N));
      increment = -1;
    } else {
      console.log(`${" ".repeat(count)}*${" ".repeat(spaces)}*${" ".repeat(spaces)}*`);
    }
    spaces -= increment;
  }
}

star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

N = 7
0 padding, 2 spaces between *
1 padding, 1 space
2 padding, 0 space
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

N = 9
0 padding, 3 spaces = (N / 2) - 1
1 padding, 2 spaces
2 padding, 1 space
3 padding, 0 space
N asterisks
*/