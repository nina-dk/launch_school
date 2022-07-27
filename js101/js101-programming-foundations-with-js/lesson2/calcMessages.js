exports.prompt = function(message) {
  console.log(`=> ${message}`);
}

exports.invalidNumber = function(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

exports.welcome = "Welcome to Calculator!";
exports.num1 = "What's the first number? ";
exports.num2 = "What's the second number? ";
exports.operation = "What operation would you like to perform?\n1) Add, 2) Subtract, 3) Multiply, 4) Divide";
exports.answer = "Do you want to perform another calculation? yes/no";
