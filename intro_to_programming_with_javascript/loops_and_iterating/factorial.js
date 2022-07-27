//Using a for loop

function times(number1, number2) {
  let result = number1 * number2;
  return result;
}

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result = times(i, result);
  }
  console.log(result);
}

factorial(0);     // => 1
factorial(1);     // => 1
factorial(2);     // => 2
factorial(3);     // => 6
factorial(4);     // => 24
factorial(5);     // => 120
factorial(6);     // => 720
factorial(7);     // => 5040
factorial(8);     // => 40320

//Or using the reduce method

// function factorial(number) {
//   if (number !== 0) {
//     let numbersToMultiply = [];
//     for (let i = 1; i <= number; i += 1) {
//       numbersToMultiply.push(i);
//     }
//     const multiplier = (multiplier, number) => multiplier * number;
//     console.log(numbersToMultiply.reduce(multiplier));
//   } else {
//     console.log(1);
//   }
// }