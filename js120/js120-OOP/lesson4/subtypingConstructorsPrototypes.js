function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

//1
let hello = new Hello();
hello.hi(); // logs: Hello!

//2
let hello = new Hello();
hello.bye(); // TypeError: hello.bye is not a function

/*
`bye` is in the prototype object of the `Goodbye` constructor function. Since
`hello` is an instance of `Hello` is has access to methods in its prototype
as well as its prototype's prototype object, namely `Greeting.prototype`.
`bye` is in neither of these objects, so invoking it on `hello` will raise
a TypeError exception.
*/

//3
let hello = new Hello();
hello.greet(); // logs: undefined

/*
JS searches in the prototype chain of `hello` to find a `greet` method since 
there's no own `greet` method in `hello`. `Greet.prototype` has this method and
since it's set as the prototype of `Hello.prototype` which is the prototype of
`hello` it is in its prototype chain. Therefore, we can invoke it on `hello`.
However, since no argument is passed to `greet`, `undefined` will be logged.
*/

//4
let hello = new Hello();
hello.greet('Goodbye'); // logs: Goodbye

//5
Hello.hi(); // TypeError: Hello.hi is not a function

/*
The `hi` method is defined in the function prototype of `Hello`, `Hello.prototype`.
Therefore, we cannot invoke it directly on `Hello`. Namely, it's an instance method,
so can only call it on instances of the `Hello` type.
*/