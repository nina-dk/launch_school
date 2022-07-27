/*
Input: string
Output: string
Rules:
  Explicit requirements:
    -every other letter must be capitalized in the output string and the
     following one must be lowercased no matter if there are non-letter
     characters in between the two
Algorithm:
  1.Create an array `letters`.
  2.Create a `count` variable 0.
  3.If the character at index `count` in `str` is a letter, push it in `letters`.
  4.Call the previous `staggeredCase` function on `letters`.
  5.Loop over `letters` and `str`.
    if character at current index in both is not the same when lowercased,
    push the current character from `str` into `letters`.
  6.Return `letters` joined in a string.
*/

function staggerCase(str) {
  return str.split("")
    .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
}

function printStaggeredCase(str) {
  const regex = /[a-zA-Z]/;
  let letters = str.split("").filter(char => char.match(regex));
  letters = staggerCase(letters.join(""));

  for (let i = 0; i < letters.length; i++) {
    if (str[i].toLowerCase() !== letters[i].toLowerCase()) {
      letters.splice(i, 0, str[i]);
    }
  }

  if (str.length > letters.length) {
    letters.push(str.slice(letters.length));
  }

  return letters.join("");
}

console.log(printStaggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(printStaggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  printStaggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

//Alternate solution

function staggerCase(string) {
  let nextUpCase = true;

  return string.split("").map(char => {
    if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") {
      if (nextUpCase) {
        nextUpCase = false;
        return char.toUpperCase();
      } else {
        nextUpCase = true;
        return char.toLowerCase();
      }
    }
    return char;
  }).join("");
}

console.log(staggerCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggerCase("ALL CAPS") === "AlL cApS");
console.log(
  staggerCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/*
Further exploration

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions only return something or do they only have side effects?
  - Will you return the same object that's passed in the function or a new one?

PROBLEM STATEMENT:
    Inputs:
      -string, boolean true/false
    Output:
      -string
    Explicit requirements:
      -if the 2nd argument is set to 'true' non-letters count when determining the case state
      -if it's 'false' they don't matter but should still exist in the output string
      -the function must be able to perform like staggerCase or staggeredCase depending on 
       the caller's choice (2nd argument)
    Questions:
      -Hint: use default parameters (where? why?)
Data Structures:
Algorithm:
  1.Create a variable `nextUpCase` set to `true`.
  2.Create an array `chars` containing the string's characters.
  3.Loop over `chars`
    If `nextUpCase` is `true`: 
      a.change the current character to uppercase
      b.If `nonLettersCount` (2nd argument) is `false`:
        i.If the current character is a letter, change `nextUpCase` to `false`.
      c.Else: change `nextUpCase` to `false`.
    Else:
      a.change the current character to lowercase
      b.If `nonLettersMatter` (2nd argument) is `false`:
        i.If the current character is a letter, change `nextUpCase` to `true`.
      c.Else: change `nextUpCase` to `true`.
  4.Return `chars` joined to a string.
*/

function staggeredCharsOrNot(string, nonLettersCount) {
  let nextUpCase = true;
  let chars = string.split("");

  for (let i = 0; i < chars.length; i++) {
    if (nextUpCase) {
      chars[i] = chars[i].toUpperCase();
      if ((!nonLettersCount && /[a-z]/i.test(chars[i])) || nonLettersCount) {
        nextUpCase = false;
      }
    } else {
      chars[i] = chars[i].toLowerCase();
      if ((!nonLettersCount && /[a-z]/i.test(chars[i])) || nonLettersCount) {
        nextUpCase = true;
      }
    }
  }

  return chars.join("");
}

console.log(
  staggeredCharsOrNot("ignore 77 the 444 numbers", false) === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCharsOrNot("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCharsOrNot("ALL CAPS") === "AlL cApS");
console.log(staggeredCharsOrNot('ALL_CAPS', true));        // "AlL_CaPs"