let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// logs: hi
//       hello 
//That is because:
//1. The object pointed to by the foo variable gets mutated on line 9,
//by the assignment of a new value to the object's a key.
//2. The local variable, argument2, initially gets assigned to the value of qux,
//but is then reassigned to the string 'hi'. The two variables, however,
//are independent and that reassignment does not affect the value of qux.