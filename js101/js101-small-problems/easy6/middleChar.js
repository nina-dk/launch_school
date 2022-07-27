//input/output: non-empty string / middle char/chars of the string
//rules: -if string has odd length -> 1 character
//       -if string has even length -> 2 characters
//data structures: -
//algorithm:
//SET middle of the string = string's length / 2
//IF string's length is odd
//  PRINT the character at index middle
//ELSE
//  PRINT char at index middle and char at middle - 1

function centerOf(string) {
  const CENTER = Math.floor(string.length / 2);
  return (string.length % 2 === 1 ?
    string[CENTER] : string.slice(CENTER - 1, CENTER + 1));
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"