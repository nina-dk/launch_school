/*
PROBLEM STATEMENT:
    Input:
      -odd number `n`
    Output:
      -diamond of * in an n*n grid
    Explicit requirements:
      -the diamond must be placed in an n*n grid
      -`n` will always be an odd number
    Implicit requirements:
      -diamond is comprised of "*"
      -the diamond's middle line has a length of `n` (`n` asterisks)
      -every line of the diamond has 2 more asterisks than the previous one
       until the middle of the diamond. Then every line has 2 less asterisks
       than its previous one.
Data Structures:
POTENTIAL DATA STRUCTURES
    -
POTENTIAL METHODS / CODE
    -repeat
Algorithm:
-Set `lines` array.
-Set `i` equal to `1`.
-Push a string of `n` / 2 spaces and `i` asterisks in `lines`.
-Increment `i` by 2.
-Repeat until `i` is equal to the half of `n` (rounded up).
-Print every element from array starting at index 0, and then
 print every element starting from next to last index.
*/

function diamond(n) {
  let lines = [];
  let pad = Math.floor(n / 2);

  for (let i = 1; i <= n; i += 2) {
    let line = "*".repeat(i).padStart(pad + i);
    lines.push(line);
    pad -= 1;
  }

  lines.forEach(line => console.log(line));

  for (let i = lines.length - 2; i >= 0; i--) {
    console.log(lines[i]);
  }
}


diamond(1);
// logs
// *
diamond(3);
// logs
//  *
// ***
//  *
diamond(9);
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

//Further exploration
/*
-space in middle is always 2 greater than previous line until the middle line
 then it's two less than the above line, starting at 0 until n-2
-asterisks are always two except for the first and last line
-left padding is always one less from above line until the middle line
 starting at n/2 rounded down
*/

function hollowDiamond(n) {
  let diamondLines = [];
  let padd = Math.floor(n / 2);
  let spaces = 1;

  while (diamondLines.length <= Math.floor(n / 2)) {
    if (diamondLines.length === 0) diamondLines.push(`${" ".repeat(padd)}*`);
    else {
      diamondLines.push(`${" ".repeat(padd)}*${" ".repeat(spaces)}*`);
      spaces += 2;
    }

    padd -= 1;
  }

  diamondLines.forEach(line => console.log(line));
  for (let idx = diamondLines.length - 2; idx >= 0; idx--) {
    console.log(diamondLines[idx]);
  }
}


hollowDiamond(1);
// logs
// *
hollowDiamond(3);
// logs
//  *
// * *
//  *
hollowDiamond(5);
/* logs
  *
 * *
*   *
 * *
  *

line 1: asterisk - 2 pads
line 2: asterisk + 1 space + asterisk - 1 pads
line 3: asterisk + 3 spaces + asterisk - 0 pads
*/
hollowDiamond(9);
/* logs
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/