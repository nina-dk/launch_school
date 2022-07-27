/*
input: string
output: string
data structure: object containing arrays to store replacement texts
Algorithm:
-loop over the input string
-each "blank" that needs a replacement will be named by the replacement
 it needs (e.g. "verb", "noun" etc)
-get a random item from the corresponding category in the object of replacements
-replace the missing word with it
*/

let template1 = "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";

let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

function madlibs(template) {
  const regex = /%{\w+}/gi;
  const replacements = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail", "cat"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"]
  };

  return template.replace(regex, match => {
    let key = match.slice(2, match.length - 1);
    let randomIdx = Math.floor(Math.random() * replacements[key].length);
    return replacements[key][randomIdx];
  });
}

console.log(madlibs(template1));
// "The "sleepy" brown "cat" "noisily""
// ""licks" the "sleepy" yellow"
// ""dog", who "lazily" "licks" his"
// ""tail" and looks around."

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".