//1
var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

/*
The `foo` function declaration will get hoisted to the top of the program
in the creation phase. The `var` variable declaration, on line 2, will get discarded
and the `foo` variable name will be reassigned to reference the function literal
defined on lines 2-4. Finally, the `foo` function gets invoked, on line 10, which
will output the string `Bye`, since `foo` was reassigned to referenced this new
function expression.
*/

//2
for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

/*
prints:
undefined
Hello
Bye
2

The `foo` variable declared on line 25 has function scope, so its visibility scope
will be the global scope, even though it's declared in the `if` block. Since `var`-declared
variables get hoisted and initialized to `undefined`, on the first iteration of the `for` loop,
the `console.log` on line 23, will output `undefined`. Then, because `index` is `0`, `Hello` will
be assigned to `foo`, and printed out in the 2nd iteration. Then `foo` will be reassigned to
`Bye`, since `index` is not `0`. Finally, when `index` becomes `2` the loop will exit. `foo`
is still visible in the global scope, so line `31` will output `Bye`, as is `index` since it's
declared with the `var` keyword. Thus, line `32` will output `2`.
*/

//3
bar();

function bar() {
  console.log("foo!");
};

//4
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

//The hoisted version of the above code would look like this:
function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

var bar;
bar = 82;
foo();

/*
The global `bar` variable is not accessible within the `foo` function body, since it is shadowed
by the local `bar` variable.
The local `bar` variable, declared on line 61 (of the non-hoisted code), is declared with the
`var` keyword and so it will be hoisted to the top of the function scope
(since `var`'s have function scope) and initialized to `undefined`.
Then, on the execution phase, it will be assigned to `bar - 42`, which evaluates to `undefined - 42`,
which is `NaN`. Therefore, when line 62 executes it will print `NaN` to the console.
*/

//5
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

//6
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

class Image {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);