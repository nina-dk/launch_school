const rlsync = require("readline-sync");

let bill = parseFloat(rlsync.question("What is the bill? "));
let tipRate = parseInt(rlsync.question("What is the tip percentage? "), 10);

let tip = bill * tipRate / 100;
let totalAmount = bill + tip;

console.log(`The tip is $${tip.toFixed(2)} and the total amount of the bill is $${totalAmount.toFixed(2)}.`)