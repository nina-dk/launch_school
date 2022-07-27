// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E    7
// . E . R . D . S . O . E . E . F . E . A . O . C .    12
// . . A . . . I . . . V . . . D . . . E . . . N . .    6
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.

/*
Inputs:
  -string of uppercase letters
  -integer (number of rails)
Output: encoded string
Rules:
  -row length = 25 = number of chars in input string
  -3 rows
  -first char is placed at first slot in the first row
  -spaces in input string are ignored when creating the encoded version
Questions:
  -is the length of the message standard?
  -non-letter characters?
  -rails always be > 1?
Data structure:
  -array of `n` rows (arrays) of the length equal to the input string
Algorithm:
  -remove the spaces from the input string
  -generate an array of `n` number of subarrays which have as many elements
   as the length of the input string filled with "."
  -set a `count` to `0`
  -set an `increment` to `1`
  -while `count` is less than the length of the input string
    -iterate over the nested array (incrementing `idx` by `increment`)
      -add the letter at index `count` of the string at index `count` of
       the current subarray
      -increment `count` by `1`
    -multiply `increment` by `-1`
  -for each subarray, only keep the characters that are not dots
  -flat the result array and join it to a string and return it
*/

function createRails(numOfRails, length) {
  let rail = Array(length).fill(".");
  return Array(numOfRails).fill().map(_ => rail.slice());
}

function buildRailFence(msg, numOfRails) {
  let rails = createRails(numOfRails, msg.length);
  let [count, inc] = [0, 1];
  let idx = 0;

  while (count < msg.length) {
    for (; idx < rails.length && idx >= 0; idx += inc) {
      rails[idx][count] = msg[count];
      count += 1;
    }

    inc *= -1;
    idx += inc * 2;
  }

  return rails;
}

function encode(msg, numOfRails) {
  msg = msg.replace(/ /g, "");
  let rails = buildRailFence(msg, numOfRails);

  return rails.flatMap(rail => rail.filter(char => char !== ".")).join("");
} 

console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("TEST", 2)); // "TSET"
console.log(encode("TEST STRING", 4)); // "TRETISSNTG"

// "TEST" 4
// T . S .
// . E . T

// "TESTSTRING" 10
// T . . . . . R . . .  
// . E . . . T . I . .  
// . . S . S . . . N .  
// . . . T . . . . . G 

//2nd part
/*
Inputs:
  -encoded string
  -number of rails used to encode it (integer)
Output:
  -decoded message string
Rules:
  -the blank slots between the letters increment by 2 on each rail
    bottom to top, except for the next to last rail which has 1 rail
  -first and last rails have the same intervals between letters
  -middle rail has a standard size of intervals (if number of rails is odd)
  -rest of the rails alternate between one and the blank slots determined by their order
  -oppostive rails switch number of blanks after each letter
  -letters start at the index of the rail in the array of rails
Algorithm:
  -build a rail fence using a string a questionmarks of the same length as the input string
  -replace the questionmarks with the letters from the input string
    -iterate through rails array
      -for each letter in input string
        -replace the questionmark with it

  -declare a `decodedMsg` variable to store the result
  -iterate through the rails array, starting at index 0
    -if the current character in the current array is a letter
      -append it to `decodedMsg`
    -otherwise continue to find a letter
    -move on to the next array
  -start iterating from the last array, at the index where we'd left off
*/

function insertMsgInRails(msg, rails) {
  let chars = msg.split("");
  return rails.map(rail => {
    return rail.map(slot => (slot === "?" ? chars.shift() : slot));
  });
}

function decode(msg, numOfRails) {
  let placeholder = "?".repeat(msg.length);
  let rails = buildRailFence(placeholder, numOfRails);
  rails = insertMsgInRails(msg, rails);

  let decodedMsg = "";
  for (let slotIdx = 0; slotIdx < rails[0].length; slotIdx += 1) {
    for (let railIdx = 0; railIdx < rails.length; railIdx += 1) {
      let currChar = rails[railIdx][slotIdx];
      if (/[A-Z]/.test(currChar)) decodedMsg += currChar;
    }
  }

  return decodedMsg;
}


console.log(decode("WECRLTEERDSOEEFEAOCAIVDEN", 3)); // "WEAREDISCOVEREDFLEEATONCE" 
console.log(decode("TSET", 2)); // "TEST"
console.log(decode("TRETISSNTG", 4)); // "TESTSTRING"
console.log(decode("AENTSORTTEH", 5)); // "ANOTHERTEST"