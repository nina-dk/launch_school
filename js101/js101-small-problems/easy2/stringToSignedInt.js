function stringToInteger(string) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let number = [];
  let array = string.split("").reverse();
  array.forEach((char, idx) => {
    nums.forEach(num => {
      if (char == num) number.push(num * 10**idx);
    })
  });
return number.reduce((sum, currentNum) => sum + currentNum, 0);
}

function stringToSignedInteger(str) {
  switch(str[0]) {
    case "+": return stringToInteger(str);
    case "-": return stringToInteger(str)*(-1);
    default: return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true