// /*
// `Diamond` class
// `makeDiamond` static method
//   input: single-letter string
//   output: diamond comprised of strings
//   rules:
//     -each diamond row ends with a newline character
//     -diamonds peaks are always the letter "A"
//     -each diamond row, except the two peaks, includes two letters
//     -diamonds have equal width and height
//     -the spaces around the diamond start at the index of the input letter
//       and decrease by 1 on each line, until the middle line
//     -the spaces inside the diamond start at 1 (row 2) and increment by 2
//       on each row up until the middle row
//     -the rows until the middle row of the diamond are the same as the
//       rows after the middle row in reverse order
//   algorithm:
//     -create an `alphabet` string and store the alphabet in uppercase letters
//     -create a `diamondRows` array to store the rows
//     -starting at index 0 in the `alphabet` and while the letter at the current
//       index is less than the input letter
//       -for each letter
//         -set a variable `middleSpaces` to `1`
//         -if it's the letter "A"
//           -create a string that starts and ends with
//             `index of the input letter - current index` number of spaces
//             and has an "A" in the middle
//         -else
//           -create a string that starts and ends with ... number of spaces
//             followed by the current letter, followed by `middleSpaces` number
//             of spaces follow by the same letter
//           -increment `middleSpaces` by 2
        
// */

class Diamond {
  static makeDiamond(letter) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const diamondRows = [];
    let diamond = "";
    let targetIdx = ALPHABET.indexOf(letter);
    let middleSpaces = " ";

    for (let idx = 0; idx <= targetIdx; idx += 1) {
      let padding = " ".repeat(targetIdx - idx);
      let row = padding + ALPHABET[idx];

      if (ALPHABET[idx] === "A") {
        row += padding;
      } else {
        row += middleSpaces + ALPHABET[idx] + padding;
        middleSpaces += "  ";
      }

      diamondRows.push(row += "\n");
    }

    diamondRows.forEach(row => diamond += row);
    for (let idx = diamondRows.length - 2; idx >= 0; idx -= 1) {
      diamond += diamondRows[idx];
    }

    return diamond;
  }
}

module.exports.Diamond = Diamond;