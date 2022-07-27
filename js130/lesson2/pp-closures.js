//1
let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

/*
Prints:
1
2
3
4
The `counter` variable is a global variable, declared on line 2. When we
increment its value from within the function referenced by `incrementCounter`,
on line 6, JS finds that variable in the function's closure with a value of `0`
and increments that value by 1. Then the same thing happens every time we invoke
`incrementCounter` (lines 13, 16, 17). Even when we reassign `incrementCounter`
to reference a new function returned by `makeCounter`, the `counter` variable is
not reassigned since it's defined in the global scope.
*/

//2
function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

/*
Prints:
1
1
1
1
Since we moved the `counter` variable declaration inside the function returned
by `makeCounter`, every time we invoke it (lines 44, 45, 48, 49), `counter` is
initialized to `0`. Then we increment it by 1, as seen on line 38, and return
its value, `1`.
*/

//3
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

/*
Prints:
1
2
1
2
Because the `counter` variable is declared and initialized to `0` in the `makeCounter`
function's scope, every time we invoke `makeCounter` the returned function defines a
closure, which closes over the new `counter` variable with an initial value of `0`.
On line 73, we initialize `incrementCounter` to reference the function returned by
`makeCounter`. When we invoke `incrementCounter`, on line 74, JS finds the variable
`counter` in the function's closure and its value is `0`. Then, on line 68, `counter`'s
value is incremented by `1` and returned by the function. On the next call, on line 75,
`counter`'s value is `1`, which will be incremented to `2` and returned.
However, when we reassign `incrementCounter` to the return value of `makeCounter`, on line 77,
`counter` is declared again and initialized to `0` in `makeCounter`. Therefore, the new function's
closure points to this new `counter` variable. Thus, the two subsequent `incrementCounter`
function calls will produce the same return values as those on lines 74 and 75: `1` and `2`.
*/

//4
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1());
console.log(incrementCounter1());

console.log(incrementCounter2());
console.log(incrementCounter2());

/*
Prints:
1
2
1
2
On lines 111 and 112, we declare two variables `incrementCounter1` and `incrementCounter2`
and initialize them to reference the function returned by `makeCounter`. Both these functions,
define a closure that closes over the `counter` local variable defined on line 103 in
`makeCounter`, with an initial value of `0`. The two `counter` variables are distinct, since `counter`
is initialized every time we invoke `makeCounter`. On lines 114, 115, we invoke `incrementCounter1`
and print its return value: `incrementCounter1` increments the value stored in `counter`
by 1 and returns it. So the output of those lines will be `1` and `2`. Same for lines 117, 118,
which invoke `incrementCounter2` and print its return value.
*/

//5
function makeMultipleLister(num) {
  return () => {
    let multiple = num;

    while (multiple < 100) {
      console.log(multiple);
      multiple += num;
    }
  };
}

let lister = makeMultipleLister(17);
lister();
// 17
// 34
// 51
// 68
// 85

//6
let runningTotal = 0;

function add(num) {
  runningTotal += num;
  console.log(runningTotal);
}

function subtract(num) {
  runningTotal -= num;
  console.log(runningTotal);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

//7
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); 
let result = bar(3); // 6
result += bar(4); // 30
result += bar(5); // 150
console.log(result); // 150

/*
Line 187 will print the number `150` to the console.
On line 183, we declare a variable `bar` and initialize it to the function returned
by invoking `foo` with the number `2` as an argument. `2` will be assigned to the local
variable `start`, as well as the `prod` local variable declared on line 176 in `foo`.
On line 184, we declare `result` and initialize it to the return value of invoking
`bar` with `3` as an argument. Inside `bar`, on line 178, we reassign `prod` to the product
of multiplying its current value, `2`, with the value passed as an argument, `3`. Then we
return the new value of `prod`, `6`. `bar` has access to `prod` because of its closure.
Namely, the `bar` function's closure closes over the `prod` variable
and the value that we assigned to it when invoking `foo`, on line 183, `2`.
Everytime we reassign `prod` to a new value that value is going to be accessed the next time
we access `prod`. So, on line 185, we increment `result` by the return value of `bar(4)`, which
is `24` since `6 * 4` evaluates to `24`. `result` is now `30`.
On line 186, we increment `result` again by `bar(5)`, which returns `120`,
thus `result` now stores the number `150`, which is output to the console on line 187.
*/

//8
function later(callback, arg) {
  return function() {
    callback(arg);
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

//9
function later2(callback, arg1) {
  return function(arg2) {
    callback(arg1, arg2);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

//10
function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }