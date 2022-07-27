// let anotherObj = {
//   a: "anotherHello",
//   b: "anotherWorld"
// };

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = () => {
//       console.log(this.a + ' ' + this.b);
//     };

//     bar();
//   }
// };

// module.exports.a = "a";
// module.exports.b = "b";
// a = "a";
// b = "b";
// console.log(global);

// let arrow = () => console.log(this.a + ' ' + this.b);


// arrow(); // undefined undefined
// arrow.call(obj);
// arrow.call(anotherObj);
// arrow.bind(obj)();
//obj.greet = arrow;
// console.log(obj);
// obj.greet();

// function outputA(callback) {
//   let obj = { a: "this is a"};

//   callback.call(obj);
// }

//outputA(arrow);

//let extractedContext = obj.foo;
// extractedContext();
// obj.foo();

// obj.foo.call(anotherObj);
// extractedContext.call(anotherObj);
// console.log(this);
// console.log(module);

// function Dog(name, breed, weight) {
//   // deleted Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// console.log(Object.getPrototypeOf(maxi) === Dog.prototype);
// console.log(Dog.prototype.hasOwnProperty('constructor'));
// console.log(Dog.prototype.constructor === Dog);
// console.log(maxi.constructor === Dog);
// console.log(maxi.hasOwnProperty('constructor')); // false

// Dog.prototype.constructor = function() {};

// console.log(maxi.constructor === Dog); // false
// console.log(maxi instanceof Dog);      // true
// console.log(maxi instanceof Object);   // true

// console.log(Object.getPrototypeOf(Dog) === Function.prototype);
// console.log(Object.getPrototypeOf(Dog.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(maxi) === Dog.prototype);
// console.log(typeof Dog.prototype);

// console.log(Dog.hasOwnProperty('prototype'));
// console.log(Dog.prototype);
// console.log(maxi.bark.constructor);

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

// Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
// console.log(Dog);
// console.log(Dog.prototype);
// console.log(Dog.myPrototype);
// console.log(Dog.hasOwnProperty('myPrototype')); // true
// console.log(Dog.prototype.hasOwnProperty('myPrototype')); // false


/////////

// The `this` keyword is used to reference the execution context on a given function/method call.
// The setting of `this` can be done either implicitly (by the JS engine) or explicitly.
// Any regular function call sets the binding for `this` to the global object (or window in the browser).
// When a method is called on an object, `this` is implicitly set to reference the calling object.
// We can use the `call`, `apply` or `bind` methods to explicitly set the context of `this`.


// let obj = {
//   five: 5,
//   add5() {
//     return function (num) {
//       return this.five + num;
//     };
//   }
// };

// console.log(obj.add5.hasOwnProperty('prototype'));

// console.log(obj.add5()(10)); // NaN

// function add5() {
//   return function (num) {
//     return 5 + num;
//   };
// }

//console.log(add5()(10));

let obj = {
  a: 1,
  foo() {
    console.log(this.a);
  },

  bar() {
    return function () {
      console.log(this.a);
    };
  }
};

let extracted = obj.foo;
console.log(extracted());

let extracted2 = obj.bar();
console.log(extracted2());