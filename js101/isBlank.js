function isBlank(string) {
  let array = string.split(' ');
  console.log(array);
  let lettersArray = array.filter(character => character);
  if (lettersArray.length > 0) return false
  else return true;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true
console.log(isBlank('hi hello th e r e   ')); // false