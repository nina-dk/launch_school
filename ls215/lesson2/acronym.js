/*
Input: string
output: string in uppercase
Rules:
  -words separated by a hyphen are considered two separate words
  -words are delimited by a single space or a hyphen
  -input string may contain the acronym itself (doesn't make a difference)
Algorithm:
  -split input string into an array of words by space or hyphen
  -get the first letter of each word and append it to the result string
*/

function acronym(string) {
  return string.split(/ |-/)
               .map(word => word[0].toUpperCase())
               .join("");
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"