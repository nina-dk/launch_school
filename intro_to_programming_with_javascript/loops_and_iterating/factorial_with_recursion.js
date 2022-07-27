let result = 1;
function factorial(number) {
  if (number > 1) {
    result = result * number;
    factorial(number -= 1)
  } else {
    console.log(result);
    result = 1;
  }
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
factorial(15);    // => 1307674368000