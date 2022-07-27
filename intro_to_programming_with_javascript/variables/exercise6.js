const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//It will not produce an error, because variables declared with const have
//block scope. Therefore, on line 3, we can declare a *new* constant with the
//same name as the one in line 1, that is only going to be accessible inside
//this block. Out of the block, FOO = 'bar', so our code will log: bar.