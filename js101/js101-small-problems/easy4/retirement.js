//START
//GET age and ageOfRetirement
//SET yearsLeft = ageOfRetirement - age
//GET currentYear
//SET yearOfRetirement = currentYear + yearsLeft
//PRINT yearsLeft and yearOfRetirement
//END

const rlSync = require("readline-sync");
const prompt = message => console.log(`=> ${message}`);
const invalidAge = number => number > 0;

let age = rlSync.questionInt("What is your age?\n");
while (!invalidAge(age)) {
  prompt("Please enter a valid age.");
  age = rlSync.questionInt();
}
let ageOfRetirement = rlSync.questionInt("At what age will you retire?\n");
while (!invalidAge(ageOfRetirement)) {
  prompt("Please enter a valid age.");
  ageOfRetirement = rlSync.questionInt();
}
let yearsLeft = ageOfRetirement - age;
let message = "only ";
let yearWord = "years";

if (yearsLeft > 30) message = "still ";
if (yearsLeft === 0) message = "";
if (yearsLeft === 1) yearWord = "year";

let today = new Date();
let currentYear = today.getFullYear();

let yearOfRetirement = currentYear + yearsLeft;

prompt(`It's ${currentYear}. You will retire in ${yearOfRetirement}.
   You have ${message}${yearsLeft} ${yearWord} of work to go!`);