const rlSync = require("readline-sync");

let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adjective = rlSync.question("Enter an adjective: ");
let adverb = rlSync.question("Enter an adverb: ");

let story = `Did you know that the ${adjective} ${noun} can ${verb} ${adverb}?`;
console.log(story);