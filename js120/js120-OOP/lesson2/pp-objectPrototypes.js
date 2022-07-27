//1.

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*
Logs: 2.
The object referenced by `qux` has a property `foo: 1`. That object is then
assigned as the prototype of the object referenced by `baz`, so this new object
has access to the properties in `qux`. Thus the expressions `baz.foo` and `qux.foo`
both evaluate to `1`, and `1 + 1` evaluates to `2`, which is logged to the console.
*/

//2.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
Logs: 3.
The object referenced by `qux` has a property `foo` with a value of `1` so
`qux.foo` evaluates to `1`. Initally, `baz` also could access that property since
it inherits from `qux`. However, on line 3, an "own" `foo` property with `2` as a value
is assigned to the `baz` object. Since JavaScript finds a property named `foo` in the
`baz` object, it doesn't go ahead to search its prototype chain for it. Thus, `baz.foo`
evaluates to `2`.
*/

//3.

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/*
Logs: 4.
The value of the `foo` property of the `qux` object is reassigned to `2`, so
the expression `qux.foo`, on line 5, evaluates to `2`. Because objects store
references to their prototypes in their `[[Prototype]]` property, any mutating changes
that occur on `qux` will be reflected by `baz`. Thus, `baz.foo` too evaluates to `2`,
and `2 + 2` evaluates to `4` which is logged to the console.
*/

//4.

/*
Inputs:
  -object
  -property name in the form of a string
  -new value to assign to that property
Output: -
Rules:
  -if the property exists in some object in the prototype chain, reassign its
   value to the new value passed as an argument
  -Assumption: property may exist in only one of the ancestor objects
Algorithm:
  -get back to the prototype chain as long as the next prototype is not `null`
  -search the current prototype for an own property of the input name
  -if it has one, change its value to the input value
  -else, search its prototype
  -if no prototype has that property, do nothing
*/

function assignProperty(obj, prop, value) {
  let currentObj = obj;
  while (currentObj) {
    let prototype = Object.getPrototypeOf(currentObj);
    if (prototype?.hasOwnProperty?.(prop)) {
      prototype[prop] = value;
      break;
    } else {
      currentObj = prototype;
    }
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

//5.

let ancestor = { fizz: "bazz" };
let foo = Object.create(ancestor);
foo.a = "own property";

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

/*
The `for...in` loop loops over all enumerable properties of an object, including
any non-own properties that it inherits from its prototype(s). `Object.keys`, on
the other hand, returns an array of an object's own enumerable properties. The
two loops above would produce the same result only in the case where `foo`'s
prototype chain didn't contain any enumerable properties.
*/

//6.

/*
By default, all objects have a prototype, `Object.prototype`. `Object.prototype`,
itself's prototype is `null` (it doesn't have one). If we want to create such
an object we can do the following:
*/

let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)); // null

/*
To determine whether an object has a prototype we can use the
`Object.getPrototypeOf` function. If the argument object has a prototype, that
will be returned, else `null`, as above.
*/