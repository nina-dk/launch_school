function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); //Good Morning Victor

/*
It throws an exception because in the body of the switch statement in the
`greet` method, we reference `morning`, `afternoon` and `evening` without
the `this` keyword. Therefore, JS looks for variables with these
names and since it can't find any, it raises a `ReferenceError`. To fix the
bug, we must precede each property with `this`, like so:
*/


//Further exploration
// eslint-disable-next-line max-lines-per-function
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}


/*
Further exploration:

`name` can be referenced without the `this` keyword because it's not the
`name` property that's being referenced, in this case, but the `name`
parameter, which is a local variable available throughout the body of the
`createGreeter` factory function. This demonstrates the concept of lexical
scope in JS. That is, when a variable is declared in an outer scope it is
available in an inner nested scope.
*/