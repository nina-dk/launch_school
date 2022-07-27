//given a positive integer
//return a string that is comprised of that many alternating ones and zeros
//always starting with 1
//string.length = integer

//START
//given a positive int
//
//SET empty string
//WHILE int > 0
//  push 1 and 0 alternatively in the string, starting with 1
//PRINT string
//END

function stringy(number) {
  let string = "1";
  while (number > 1) {
    string[string.length - 1] === "1"? string += "0" : string += "1";
    number -= 1;
  }

  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"