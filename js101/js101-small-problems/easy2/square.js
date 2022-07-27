const multiply = (num1, num2) => num1 * num2;
const square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//For raising to an nth power

let result = 1;

const power = (num, pow) => {
  if (pow > 0) {
    if (pow === 1) {
      return result *= num;
    }

    result *= multiply(num, num);
    power(num, pow - 2);

    return result;
  } else if (pow === 0) {
    return result;
  } else {
    return "This function doesn't account for negative powers."
  }
}

console.log(power(2, 3)); // 8
result = 1;
console.log(power(2, 6)); // 64
result = 1;
console.log(power(2, -4)); // This function...
result = 1;
console.log(power(1, 5)); // 1
result = 1;
console.log(power(5, 4)); // 625
result = 1;
console.log(power(3, 5)); // 243
result = 1;
console.log(power(5, 0)); // 1
result = 1;
console.log(power(0, 3)); // 0
result = 1;
console.log(power(3, 1)); // 3
result = 1;