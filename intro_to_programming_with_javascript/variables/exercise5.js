let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// bar
//That is because the declaration of the foo variable inside the curly braces
//(block) is not accessible outside of this block, and therefore cannot be
//printed, nor does it affect the value of its namesake outside of the block.