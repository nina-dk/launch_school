function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let result = 1;
function factorial(number) {
  result = times(number, result);
  return result;
}

factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);

//Or

result = 1;

for (let i = 1; i < 6; i++) {
  result = times(i, result);
}