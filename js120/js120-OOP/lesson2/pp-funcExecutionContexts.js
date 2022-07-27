//1
function func() {
  return this;
}

let context = func();

console.log(context);

/*
Logs: Object [global]
Since no explicit execution context is set on the `func` function's invocation,
on line 6, its return value, `this`, will be the global object, which is the
implicit execution context for that call.
*/

//2
let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);

/*
Logs: { func: [Function: func] }
The difference between this and the first example is that `func` here is called
as a method of the `obj` object, on line 24. Therefore, its implicit execution
context this time is the calling object, `obj`.
*/

//3
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/*
Logs:
'Hello from the global scope!'
'Hello from the function scope!'

On line 42, the global function `deliverMessage` is invoked as a function, so
the implicit execution context of this call is the global object. Thus, it will
output `'Hello from the global scope!'` which is the value of the undeclared
variable `message`.
This is because undeclared variables get added as properties of the global
object and can be referenced using either property accessor on it.
Then, on line 48, a new method is created in the object referenced by the
`foo` variable, called `deliverMessage`, and its value is set to a reference
of the `deliverMessage` function.
On line 50, `deliverMessage` is called as a method on the `foo` object, which
becomes the implicit execution context of this method call. Therefore, line 50
will output `'Hello from the function scope!` to the console.
*/

//4
/*
`Function.prototype.call` and `Function.prototype.apply`

Their general syntax is:
`someObject.someMethod.call(executionContext, arg1, arg2, ...)`
`someObject.someMethod.apply(executionContext, [arg1, arg2, ...])`

Both methods' first argument (optional) becomes the function/method call's
explicit execution context. The following (optional) arguments are the arguments
that the function/method expects. `apply` accepts the function's arguments in
the form of an array, as opposed to `call`, which expects independent values
separated by commas.
*/

//5
let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function() {
    return this.a + this.b;
  },
};

console.log(bar.add.call(foo)); // 3