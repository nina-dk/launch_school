function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

/*
The bug is caused in the `forEach` loop in the `neutralize` function. Specifically,
it's because on line 7, we're mutating the calling array `words` during iteration,
by removing the current element from it, if it's a negative word. This results in some
elements being skipped (and thus, not removed) by the `forEach` loop because they
are moved to the previous index which has already been iterated over.
We can fix this issue either by refactoring the `neutralize` function like so:
*/

function neutralize(sentence) {
  let words = sentence.split(" ");
  return words.filter(word => !isNegative(word)).join(" ");
}