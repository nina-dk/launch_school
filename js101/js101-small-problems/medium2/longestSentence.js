/*
Input: string
Output: string + blank line + string with the number of words in the largest string
Rules: - sentence-ending characters are: ".", "!", "?"
       - any character sequence that's not sentence-ending chars or spaces is
         considered a word (e.g. "--" counts as a word)
Data structures: object / array
Algorithm:
  -create a `paragraphs` array
  -push all the paragraphs from the input string to `paragraphs`
  -count the words in each sentence
  -create an object with the word counts as keys and their corresponding
   sentence as a value
  -find the biggest key of the object's keys
  -print the value of the biggest key, as well as the key itself
*/

function countWords(string) {
  return string.split(" ").filter(word => word !== "").length;
}

function longestSentence(text) {
  let sentences = [];
  let index = 0;

  while (text.length > 0) {
    if ([".", "!", "?"].includes(text[index])) {
      sentences.push(text.slice(0, index + 1));
      text = text.slice(index + 1);
      index = 0;
      continue;
    }

    index += 1;
  }

  let sentencesObj = sentences.reduce((obj, sentence) => {
    obj[countWords(sentence)] = sentence;
    return obj;
  }, {});

  let mostWords = Math.max(...Object.keys(sentencesObj));

  console.log(`${sentencesObj[mostWords]}\n\nThe longest sentence has ${mostWords} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

//Further exploration
//Longest paragraph

function longestParagraph(text) {
  let paragraphs = text.split("\n");

  let paragraphsObj = paragraphs.reduce((obj, paragraph) => {
    obj[countWords(paragraph)] = paragraph;
    return obj;
  }, {});

  let mostWords = Math.max(...Object.keys(paragraphsObj));

  console.log(`${paragraphsObj[mostWords]}\n\nThe longest paragraph has ${mostWords} words.`);
}

longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal.\n Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure.\n We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live.\n It is altogether fitting and proper that ' +
  'we should do this.';

longestParagraph(longText);

//Sentence with the longest word

function sentenceWithLongestWord(text) {
  let sentences = [];
  let index = 0;

  while (text.length > 0) {
    if ([".", "!", "?"].includes(text[index])) {
      sentences.push(text.slice(0, index + 1));
      text = text.slice(index + 1);
      index = 0;
      continue;
    }
    index += 1;
  }

  let sentencesObj = sentences.reduce((obj, sentence) => {
    if (longestWord(sentence) > obj.longestWord) {
      [obj.sentence, obj.longestWord] = [sentence, longestWord(sentence)];
    }
    return obj;
  }, {sentence: "", longestWord: 0});

  console.log(`${sentencesObj.sentence}\n\nThe longest word in the sentence has ${sentencesObj.longestWord} characters.`);
}

function longestWord(sentence) {
  let words = sentence.split(" ");
  let lengths = words.map(word => word.length);
  return Math.max(...lengths);
}


sentenceWithLongestWord("Where do you think you're going? What's up, Doc?");
sentenceWithLongestWord(longerText);