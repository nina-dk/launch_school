//START
//SET empty fibonacci array
//SET num = 10**(number - 1)
//WHILE num < fibonacciNumber
//  push fibonacci numbers
//PRINT index of the last fibonacci number added in the array
//END

function findFibonacciIndexByLength(number) {
  let fibonacciNums = [1n, 1n];
  const num = 10n**(number - 1n);
  while (fibonacciNums[fibonacciNums.length - 1] < num) {
    fibonacciNums.push(
      fibonacciNums[fibonacciNums.length - 1] + fibonacciNums[fibonacciNums.length - 2]
    );
  }

  return BigInt(fibonacciNums.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);