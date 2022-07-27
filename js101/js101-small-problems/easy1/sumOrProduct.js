const rlsync = require("readline-sync");

let num;
do {
  num = parseInt(rlsync.question("Please enter an integer greater than 0: "), 10);
} while (!(typeof num === "number" && num > 0));

let calcType;
do {
  calcType = rlsync.question("Enter \"s\" to compute the sum or \"p\" to compute the product.\n");
} while (calcType !== "s" && calcType !== "p");

if (calcType === "s") {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
} else {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  console.log(product);
}

//If input was an array
let array = [1, 2, 3, 4, 5, 6, 7];

if (calcType === "s") {
  console.log(array.reduce(function (sum, currentVal) {
    return sum + currentVal;
  }));
} else {
  console.log(array.reduce(function (product, currentVal) {
    return product * currentVal;
  }));
}