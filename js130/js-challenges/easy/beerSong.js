/*
`BeerSong` class
`verses` static method
  input: 1 or 2 numbers, 0-99
  output: the requested verses (string)
  rules:
    -if we have one input number, output that verse
    -if there are two input numbers, output the verses starting from
      first input num up until the second input num
    -last verse (0) has different lyrics
    -verse 1 has a slight modification (`it` not `one` and `bottle` not `bottles`)
    -include 2 line breaks between verses and 1 between lines of the same verse
  algorithm:
    -create `result` empty string
    -starting at first argument num
      -get the verse of that num from `verse`
      -append it to `result`
    -repeat till 2nd input num
    -return `result`
`verse` static method
  input: number
  output: string
  algorithm:
    -save a template string to `normalVerse` variable using template literals
      where there are numbers and the word `bottles`/`bottle`
    -save the last verse to a `lastVerse` variable
      -if input num is `0`, print the `lastVerse`
      -if it's `1`
        -replace the template literals in `normalVerse` with `1 bottle`
      -else with `{input number} bottles`
`lyrics` static method
  input: -
  output: all of the beer song (string)
  algorithm:
    -invoke the `verse` method passing in 99, 0 as the arguments
*/

class BeerSong {
  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static verses(start, end) {
    let result = "";
  
    for (let i = start; i >= end; i -= 1) {
      result += this.verse(i) + "\n";
    }
    
    return result.slice(0, result.length - 1);
  }

  static verse(num) {
    let lastVerse = "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    function normalVerse(numOfBottlesBefore, numOfBottlesAfter, takeDown = "one") {
      return `${numOfBottlesBefore} of beer on the wall, ${numOfBottlesBefore} of beer.\n` +
      `Take ${takeDown} down and pass it around, ${numOfBottlesAfter} of beer on the wall.\n`;
    }

    if (num === 0) return lastVerse;
    else if (num === 1) return normalVerse("1 bottle", "no more bottles", "it");
    else if (num === 2) return normalVerse("2 bottles", "1 bottle");
    return normalVerse(`${num} bottles`, `${num - 1} bottles`)
  }
}

module.exports.BeerSong = BeerSong;