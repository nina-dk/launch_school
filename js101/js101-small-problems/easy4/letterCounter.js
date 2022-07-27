//input/output: string with 0 or more words separated by spaces /
//              object with the words' lengths as keys and the number
//              of words with such length as values
//rules: - words consist of any sequence of non-space chars
//       - if the string is empty an empty object will be returned
//data structures: object, array to push the string's words
//algorithm:
//START
//IF string's length is zero move to final step
//SET array containing all the string's words
//SET empty object
//Iterate over the array
//IF object has a key with each word's length we'll increment it's value
//ELSE create a new key-value pair with the length as a key and 1 as value
//PRINT object
//END

function removeNonLetters(string) {
  const regex = /[a-z ]/i;
  let chars = string.split("");
  chars = chars.filter(char => regex.test(char));
  return chars.join("");
}

function wordSizes(string) {
  let lengthsNums = {};
  if (!string) return lengthsNums;
  string = removeNonLetters(string);
  let words = string.split(" ");
  words.forEach(word => {
    if (word.length > 0) {
      !lengthsNums[word.length] ?
        lengthsNums[word.length] = 1 :
        lengthsNums[word.length] += 1;
    }
  });

  return lengthsNums;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
console.log(wordSizes('Four score and   seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }