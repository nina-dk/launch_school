/*
Input: an object, the name of a method in the form of a string
        [optionally] arguments to pass to the method
Output: ?
*/

function delegate(obj, methodName, ...args) {
  return function() {
    return obj[methodName].apply(obj, args);
  };
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() {
  console.log('changed');
};

baz.qux();          // logs 'changed'