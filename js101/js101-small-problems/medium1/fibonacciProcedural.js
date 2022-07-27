/*
Input:
  -number
Output:
  -number
Explicit requirements:
  -input number is the place of the number in the Fibonacci sequence
  -output number must be the number at the `input-num`th place
  -the first two Fibonacci numbers are 1 and 1 by definition
  -the rest Fibonacci numbers follow the pattern: F(n - 1) + F(n - 2)
Implicit requirements:
  -input number will always be >= 1 (assumption)
  -input num matches the index in a fibonacci array starting at 0
Data Structures: array
Algorithm:
  1.Create a `fibonacciNums` array [0, 1, 1].
  2.While the length of `fibonacciNums` is less than or equal to the input num
    a.Add the sum of the last two elements of the array into the array
  3.Return the last element of the array.
*/

function fibonacci(index) {
  const fibonacciNums = [0, 1, 1];

  while (fibonacciNums.length <= index) {
    let length = fibonacciNums.length;
    fibonacciNums.push(fibonacciNums[length - 1] + fibonacciNums[length - 2]);
  }

  return fibonacciNums[index];
}

fibonacci(1);
fibonacci(3); //2
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050