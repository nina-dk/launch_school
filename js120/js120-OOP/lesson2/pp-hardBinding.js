//1

/*
`Function.prototype.bind` returns a new function which is permanently bound to
the object that's passed as the first argument of `bind`.
*/

//2
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

/*
On line 17, a new copy of the `foo` function object is returned by `bind` and
is permanently bound to the context of the object referenced by `obj`.
Nothing will be logged to the console, however, as the new function is never
invoked.
*/

//3
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());
console.log(bar());

/*
Logs:
NaN
5
The first output is the result of invoking `foo` directly as a function. The implicit
execution context for a regular function call is the global object, and since there are
no properties `a` or `b` in the global object, `this.a` and `this.b` evaluate to `undefined`.
`undefined + undefined` evaluates to `NaN`.
The second output comes from the invocation of the `bar` function, on line 39. `bar` is assigned
to a new copy of the `foo` function object whose context is permanently bound to the object
referenced by `obj`. `obj` has both `a` and `b` properties with values of `2` and `3`, respectively,
therefore `this.a + this.b` evaluates to `2 + 3` which is `5`.
*/

//4
let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();

/*
Logs: JavaScript makes sense!
Since the function object referenced by `bar` is permanently bound to the object
referenced by `positivity`, it doesn't matter that `logMessage` is called as a method on
the `negativity` object because it still references the same function object
referenced by `bar`.
*/

//5
let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

/*
Logs: Amazebulous!
When a function is permanently bound to an object using the `bind` method, we cannot
change it's execution context using `call`, `apply` or `bind` again. Therefore, when
we invoke the `bar` function, on line 95, its execution context is still the object
referenced by `obj` which was bound to it on line 93.
*/