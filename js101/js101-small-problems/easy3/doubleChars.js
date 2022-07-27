/* given a string
START
SET array = []
Push every character of the string into the empty array
SET i = 0
WHILE i < array.length
  For every character check if array[i] === array [i+1]
IF TRUE remove the character
ELSE continue with the next character
SET finalString = array
PRINT finalString
END
*/

function crunch(string = "") {
  let characters = string.split("");

  let finalLetters = characters.filter((letter, index) => {
    return letter !== characters[index + 1]
  });
  return finalLetters.join("");
}

//Using regular expression

function crunch(string = "") {
  const regex = /./gi;
  let characters = string.match(regex);
  if (characters === null) return "";
  return characters.filter((letter, index) => letter !== characters[index + 1]).join("");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""