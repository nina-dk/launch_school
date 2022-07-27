/*
----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions only return something or do they only have side effects?
  - Will you return the same object that's passed in the function or a new one?

PROBLEM STATEMENT:
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
Data Structures:
POTENTIAL METHODS / CODE
    -Recursion
*/

function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2   [0, 1, 1, 2]
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(35));