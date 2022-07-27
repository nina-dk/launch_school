/*
constructor method:
  input: string, null
isWord method:
  input: input of constructor method
  output: string
  algorithm:
    -if the input is not a string
      -return an empty string
    -else
      -if it contains non-letter characters (not a word)
        -return an empty string
      -else
        -return `word`
score method:
  output: numbers representing the score of the word
  rules:
    -line breaks don't count as words
    -if input is null, score is 0 (coerce it to empty string?)
    -score is case-insensitive
    -words are comprised of letters only (?)
  algorithm:
    -create an object to store the letters and their score (nums and arrays as values)
    -declare a `score` variable and initialize it to 0
    -for each letter in property `word`
      -get its value from the object with the letter scores
        -for each value in the object
          -if it includes the current letter
          -increment score by that value's key
    -return `score`
*/

class Scrabble {
  static TILES_VALUES = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  }

  static score(word) {
    return [].reduce.call(word.toUpperCase(), (score, tile) => {
      for (let [value, tiles] of Object.entries(Scrabble.TILES_VALUES)) {
        if (tiles.includes(tile)) return score + Number(value);
      }
    }, 0);
  }

  constructor(word) {
    this.word = this.isWord(word);
  }

  isWord(word) {
    let nonWordChars = new RegExp(/[\W0-9_]/, "gi");
    if (typeof word !== "string") return "";
    else if (nonWordChars.test(word)) return "";
    return word;
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports.Scrabble = Scrabble;