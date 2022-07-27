//input/output: string / string with each consonant doubled
//rules: - the function shouldn't double vowels, digits, punctuation, whitespace
//data structures: regular expression
//SET regex = all alphabetical characters except vowels ('a','e','i','o','u')
//SET doubled = ""
//SET count = 0
//WHILE count < string's length
//  IF character at index count is a consonant (regex)
//    add it in doubled
//  Add character at count in doubled
//PRINT doubled

const doubleConsonants = str =>
  str.replace(/[^aeiou\d\W_]/gi, match => match + match);

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""