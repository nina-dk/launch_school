{
  let foo = 'bar';
}

console.log(foo);

// => ReferenceError: foo is not defined.
//We get this error because variables declared with the let statement have
//block scope, i.e., if they are declared inside a block, they aren't
//accessible outside of it. Therefore we cannot log the foo variable out of
//the block it's been declared in.