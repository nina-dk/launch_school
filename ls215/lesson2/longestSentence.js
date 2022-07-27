/*
Input: text (string)
Output: string (the longest sentence as well as the number of words it contains)
Rules:
  -any sequence of characters that aren't sentence-ending characters or spaces
    are considered to be words
  -the sentence-ending characters are ".", "?", "!"
  -every sentence starts with a word character
  -words in a sentence are delimited by single (?) spaces
Algorithm:
  -split the input string at every sentence-ending character to get the sentences
  -split each sentence at each space to get the words
  -create two variables `longest` and `numOfWords`
  -for each sentence
    -if the number of words in it is > `numOfWords`
      -reassign `numOfWords` to that number and `longest` to that sentence (array)
  -return the `longest` array joined as a string
*/

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  let sentenceEndingChars = text.split(/[^.!?]/).filter(char => char);
  let sentences = text.split(/\.|\?|!/)
                      .filter(sentence => sentence)
                      .map(sentence => sentence.split(" ").filter(word => word));

  let numOfWords = sentences.map(sentence => sentence.length);
  let maxNumOfWords = Math.max(...numOfWords);
  let sentenceIdx = numOfWords.indexOf(maxNumOfWords);
  let resultSentence = sentences[sentenceIdx].join(" ") + sentenceEndingChars[sentenceIdx];

  console.log(`${resultSentence}\n\nThe longest sentence has ${maxNumOfWords} words.`);
}

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.