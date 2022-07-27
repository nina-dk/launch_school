let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// logs 1
//Calling the foo function doesn't affect the output because the bar
//variable defined inside of the function is different to
//the one on line 1, and exists only inside the scope of foo.