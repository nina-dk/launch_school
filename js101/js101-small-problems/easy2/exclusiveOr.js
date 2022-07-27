const xor = (arg1, arg2) => (arg1 && arg2) || !(arg1 || arg2) ? false : true;


console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
console.log(xor(undefined, "hi"));
console.log(xor(NaN, null));

// if (arg1 && arg2) {
  //   return false;
  // } else if (!(arg1 || arg2)) {
  //   return false;
  // } else {
  //   return true;
  // }