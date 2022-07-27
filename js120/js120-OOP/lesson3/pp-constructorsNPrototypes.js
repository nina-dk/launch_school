//1
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

/*
Logs:
NaN
NaN
In the `Rectangle` constructor function we're defining two properties, `area` and
`perimeter`, to the newly created object that will be returned after we invoke
`Rectangle` using the `new` keyword. These properties are assigned to the return
values of `RECTANGLE.area()` and `RECTANGLE.perimeter()`, respectively. However,
when we invoke a method on an object, the execution context for that method call
is implicitly set by the JS engine to the calling object, in this case, `RECTANGLE`.
So, `this` in both the `area` and `perimeter` methods references `RECTANGLE`
instead of the new object created by `new`, on line 18. `RECTANGLE` does not
have `width` or `height` properties, so `this.width` and `this.height` evaluate
to `undefined`, thus the mathematical operations in both methods will evaluate
to `NaN`, which is then saved as the value for the `area` and `perimeter`
properties in `rect1`.
*/

//2
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

//3
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius**2;
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

//4
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*
Logs: true
The `swingSword` method is a method in the `Ninja.prototype` object, which is
the prototype assigned to the `ninja` object upon creation using the `new` keyword,
on line 70. Therefore, we can call `swingSword` directly on `ninja`. The context of
`this` when we invoke `swingSword` on `ninja`, on line 76, will be set to the
`ninja` object since it's invoked as a method on that object, thus `this.swung` evaluates
to `true`, which is the value of the `ninja` property `swung`.
*/

//5
function Ninja() {
  this.swung = true;
}

//let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());

/*
Throws a TypeError: ninja.swingSword is not a function.
In this case, we're reassigning the `Ninja.prototype` property of `Ninja` to reference
a new object, after we've created `ninja`. Thus, the prototype of the `ninja` object does
no longer reference the same object as `Ninja.prototype`. The new method `swingSword`
defined in the new `Ninja.prototype` object will not be in the prototype chain of `ninja`,
so `ninja.swingSword()` will raise an error since `ninja.swingSword` evaluates to `undefined`
and we're trying to invoke it as a function.
*/

//6
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

Ninja.prototype.swing = function () {
  this.swung = !this.swung;
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

//7
//let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaConstructor = ninjaA.constructor;
//let ninjaB = new ninjaConstructor();

console.log(ninjaA.constructor === ninjaB.constructor) // => true

//8
function User(first, last) {
  let user = Object.create(User.prototype);
  user.name = first + " " + last;

  return user;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
console.log(user1.constructor);
console.log(user2.constructor);

//Alternative

function User(first, last) {
  if (this?.constructor !== User) {
    return new User(first, last);
  }

  this.name = first + " " + last;
}