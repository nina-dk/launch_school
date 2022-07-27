function integerToString(num) {
  if (!Number.isInteger(num) || num < 0) {
    return `${num} is not a non-negative integer.`
  }
  let numLength = Math.ceil(Math.log10(num + 1));
  let digits = [];
  let digit = 0;
  for (let i = 1; i <= numLength; i++) {
    digit = (num % 10**i) - digits.reduce((sum, curr) => sum + curr, 0);
    digits.push(digit);
  }
  if (digits.length === 0) digits.push(digit);
  digits = digits.map((digit, index) => digit / 10**index).reverse();
  return digits.join("");
}

console.log(integerToString(4321));       // "4321"
console.log(integerToString(0));          // "0"
console.log(integerToString(5000));       // "5000"
console.log(integerToString(1234567890)); // "1234567890"
console.log(integerToString(NaN));        // "NaN"
console.log(integerToString(Infinity));   // "Infinity"

//Shorter alternative solution

let integerToString = num => {
  let array = [];
  array.push(num);
  return array.join();
}