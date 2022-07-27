//START
//GET 6 numbers
//Push the first 5 numbers in an array
//Check if the array includes the 6th number
//PRINT result
//END
const rlSync = require("readline-sync");
let numbers = [];
let firstNumber = rlSync.questionInt("Enter the 1st number: ");
let secondNumber = rlSync.questionInt("Enter the 2nd number: ");
let thirdNumber = rlSync.questionInt("Enter the 3rd number: ");
let fourthNumber = rlSync.questionInt("Enter the 4th number: ");
let fifthNumber = rlSync.questionInt("Enter the 5th number: ");
let lastNumber = rlSync.questionInt("Enter the last number: ");

numbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
console.log(numbers.includes(lastNumber) ?
  `The number ${lastNumber} appears in ${numbers.join(", ")}.` :
  `The number ${lastNumber} does not appear in ${numbers.join(", ")}.`
);

//Further exploration

let checkForGreaterThan = (array, minValue) => {
  let number = array.find(number => number > minValue);
  console.log(number !== 0 && !number ?
    `There is no number in ${array.join(", ")} greater than ${minValue}.` :
    `The number ${number} is the first number that is greater than ${minValue} in ${array.join(", ")}.`);
};

checkForGreaterThan(numbers, lastNumber);

//Using Array.prototype.some()

let checkIfGreaterThan = (array, minValue) => {
  let number = array.some(number => number > minValue);
  console.log(!number ?
    `There is no number in ${array.join(", ")} greater than ${minValue}.` :
    `There is at least one number greater than ${minValue} in ${array.join(", ")}.`);
};

checkIfGreaterThan(numbers, lastNumber);
