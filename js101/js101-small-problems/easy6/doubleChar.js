//input/output: string / string with all characters doubled
//rules: -empty string returns empty string
//data structures: repeat method
//algorithm:
//SET doubledString = ""
//SET count = 0
//WHILE count < string's length
//  add every character from string in the doubledString twice
//PRINT doubledString

function repeater(str) {
  let doubledString = "";

  for (let i = 0; i < str.length; i++) {
    doubledString += str[i].repeat(2);
  }
  return doubledString;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""