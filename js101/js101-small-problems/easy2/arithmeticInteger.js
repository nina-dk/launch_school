const rlSync = require("readline-sync");

let firstInt = Number(rlSync.question("Enter the first number: "));
let secondInt = Number(rlSync.question("Enter the second (positive) number: "));

console.log(`${firstInt} + ${secondInt} = ${firstInt + secondInt}`);
console.log(`${firstInt} - ${secondInt} = ${firstInt - secondInt}`);
console.log(`${firstInt} * ${secondInt} = ${firstInt * secondInt}`);
if (secondInt > 0) {
  console.log(`${firstInt} / ${secondInt} = ${(firstInt / secondInt).toFixed(2)}`);
  console.log(`${firstInt} % ${secondInt} = ${firstInt % secondInt}`);
}

console.log(`${firstInt}**${secondInt} = ${firstInt**secondInt}`);