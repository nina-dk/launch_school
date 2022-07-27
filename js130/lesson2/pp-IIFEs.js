//1
function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

//No, it will raise a `SyntaxError` because we're not surrounding the function
//definition with parentheses.

//2
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

//3
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // TypeError: sum is not a function

/*
Line 28 raises a `TypeError: sum is not a function`. This is because when a function
is declared with the same name as a variable declared with the `var` keyword, the
function declaration gets hoisted to the top of its scope and the `var` declaration
gets discarded. That is, the hoisted version of the code above might look something
like this:
function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}

sum = 0;
//rest of the code

Therefore, the identifier `sum` is reassigned to hold the number `0` instead
of the function literal it used to. When we try to invoke `sum` as a function,
on line 28, we get the `TypeError`.
We can overcome this issue be using an immediately invoked function expression, instead:
*/
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

//4
(function(num) {
  for (; num >= 0; --num) {
    console.log(num);
  }
})(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

//5
(function foo() {
  console.log('Bar');
})();

foo(); // ReferenceError: foo is not defined

/*
No. The IIFE creates a private scope, and `foo` is only accessible within it.
*/

//6
let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

//7
(function countdown(num) {
  console.log(num);
  if (num > 0) return countdown(num - 1);
})(7);