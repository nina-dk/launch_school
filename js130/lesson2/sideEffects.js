//1
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

/*
The `foo` function call, on line 12:
1.Mutates the array literal referenced by the global variable `qux`,
  by removing its last element using `Array.prototype.pop`, on line 7.
2.Writes something to the console by invoking `console.log`, on line 8.
*/

//2
//Function 1
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

//Function 2
function sum(a, b) {
  a + b;
}

//Function 3
function sum(a, b) {
  return a + b;
}

//Function 4
function sum(a, b) {
  return a + b + Math.random();
}

//Function 5
function sum(a, b) {
  return 3.1415;
}

/*
Functions 2, 3 and 5 don't have any side effects and always return the same value,
if provided with the same arguments (functions 2 and 5 return the same value even
regardless of what arguments we pass into them) so they are considered pure functions.
*/