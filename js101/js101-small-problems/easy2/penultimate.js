function penultimate(string = "two words") {
  let array = string.split(" ");
  let words = array.filter(word => word);
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate(" last   word  ") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//Middle word

function middleWord(string = "") {
  if (string === "") return "There's no middle in nothing.";
  let array = string.split(" ");
  let words = array.filter(word => word);
  if (words.length % 2 === 0) {
    return `${words[Math.floor(words.length / 2) - 1]} ${words[Math.floor(words.length / 2)]}`;
  }
  return words[Math.floor(words.length / 2)];
}

console.log(middleWord("last word")); // logs last word
console.log(middleWord(" last   word  ")); // logs last word
console.log(middleWord("Launch School is great!")); // logs School is
console.log(middleWord("last word is")); // logs word
console.log(middleWord("last")); // logs last
console.log(middleWord("Launch School is great! Isn't it? Yes it is.")); // logs Isn't
console.log(middleWord("")); // logs There's no middle in nothing.
console.log(middleWord()); // logs There's no middle in nothing.