//Part 1
/*
Input: string
Output: new string with "staggered" casing
Rules:
  -every other character (starting and including the first char) should be 
    uppercased and followed by a lowercase or non-alphabetic character
  -non-alphas count when determining the casing of the next char
Algorithm:
  -iterate over the input string (in the form of an array)
    -uppercase the characters with odd indices
    -lowercase the characters with even indices
*/

function staggeredCase(str) {
  return [...str].map((char, idx) => {
                    if (idx % 2 === 0) return char.toUpperCase();
                    return char.toLowerCase();
               }).join("");
}

// Examples:
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

//Part 2
/*
Rules:
  -ignore non-alphabetic characters but display them in output string
Algorithm:
  -set an `uppercase` variable to `true`
  -starting from the first character in input string
    -if `uppercase` is `true` and the character is an alphabetic one, uppercase it
      -reassign `uppercase` to `false`
*/

function staggeredCase2(str) {
  let uppercase = false;
  return [...str].map(char => {
                  if (/[a-z]/i.test(char)) {
                    uppercase = !uppercase;
                    return uppercase ? char.toUpperCase() : char.toLowerCase();
                  } else {
                    return char;
                  }
                }).join("");
}

console.log(staggeredCase2('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase2('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase2('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"