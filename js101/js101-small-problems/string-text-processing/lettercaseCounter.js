/*
Input: string
Output: object with three properties
Rules:
  Explicit requirements:
    -the output object must have three properties:
      a. one representing the number of lowercase letters in input string
      b. one representing the number of uppercase letters
      c. and one representing all other characters (non-alphabetic)
  Implicit requirements:
    -if the input string is empty all counter should be set to 0
Data structures: Object
Algorithm:
  1.Create a `lowercaseRegex` containg all lowercase letters.
  2.Create an `uppercaseRegex` containing all uppercase letters.
  3.Create an object with three properties and set their values to 0.
  4.Set `i` equal to 0.
  5.If the character at index `i` in the input string is included in
    `lowercaseRegex` increment the value of the `lowercase` key in the
    object by 1.
  6.If it's in the `uppercaseRegex`, increment `uppercase`'s value.
  7.Else increment `neither`'s value.
  8.Increment `i`.
  9.Repeat steps 5-8 for all characters in `string`.
  10.Return the object.
*/

function letterCaseCount(str) {
  const charCount = {lowercase: 0, uppercase: 0, neither: 0};

  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) charCount.lowercase += 1;
    else if (/[A-Z]/.test(str[i])) charCount.uppercase += 1;
    else charCount.neither += 1;
  }

  console.log(charCount);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }