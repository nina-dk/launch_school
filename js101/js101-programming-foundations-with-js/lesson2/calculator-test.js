const rlsync = require("readline-sync");
const message = require("./calcMessages.js");

message.prompt(message.welcome);
calculator();

function calculator() {
  message.prompt(message.num1);
  let num1 = rlsync.question();
  while (message.invalidNumber(num1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num1 = rlsync.question();
  }

  num1 = Number(num1);

  message.prompt(message.num2);
  let num2 = rlsync.question();

  while (message.invalidNumber(num2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num2 = rlsync.question();
  }

  num2 = Number(num2);

  message.prompt(message.operation);
  let operation = rlsync.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("You must choose 1, 2, 3 or 4.");
    operation = rlsync.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = num1 + num2;
      break;
    case "2":
      output = num1 - num2;
      break;
    case "3":
      output = num1 * num2;
      break;
    case "4":
      if (num2 !== 0) {
        output = (num1 / num2).toFixed(2);
      } else {
        output = "-";
        prompt("You can't divide a number by zero.");
      }
      break;
    default:
      break;
  }

  prompt(`The result is: ${output}.`);
  message.prompt(message.answer);
  let answer = rlsync.question().toLowerCase();
  if (answer === "yes") calculator();
}
