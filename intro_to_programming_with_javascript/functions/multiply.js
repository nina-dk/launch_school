function multiply (num1, num2) {
  return num1 * num2;
}

let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);