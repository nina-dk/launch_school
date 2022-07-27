/*
PROBLEM STATEMENT:
    Input:
      -string
    Output:
      -object
    Explicit requirements:
      -find the percentage of lowercase characters in input string
      -find the percentage of uppercase -"-
      -find the percentage of characters that are neither (non-letter chars)
      -input string will always contain at least one character
    Implicit requirements:
      -the keys of the output object are the type/case of the character
      -the values are string representations of the percentage (number)
      -the values have two decimal points
      -if a type/case doesn't exist its value in the object shall be "0.00"
Data Structures:
POTENTIAL DATA STRUCTURES
    -object
POTENTIAL METHODS / CODE
    -
Algorithm:
  1.Create an object with the appropriate keys and values "0.00"
  2.Create variables `lowercase`, `uppercase`, `non-letter`.
  3.Loop over the input string
    a.if a character is lowercase, increment the value of the `lowercase` var.
    b.if it's uppercase increment `uppercase` var
    c.else increment `non-letters` by 1.
  4.Get the percentage of each var compared to the total string's length (100%).
*/

function letterPercentages(string) {
  const letterPerc = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < string.length; i += 1) {
    if (/[a-z]/.test(string[i])) letterPerc.lowercase += 1;
    else if (/[A-Z]/.test(string[i])) letterPerc.uppercase += 1;
    else letterPerc.neither += 1;
  }

  for (let key in letterPerc) {
    letterPerc[key] = ((letterPerc[key] / string.length) * 100).toFixed(2);
  }

  return letterPerc;
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }