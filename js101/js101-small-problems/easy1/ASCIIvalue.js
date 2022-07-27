function asciiValue(string) {
  let ASCIIvalue = 0;
  for (let i = 0; i < string.length; i++) {
    // if (string.charCodeAt(i) <= 128) {
      ASCIIvalue += string.charCodeAt(i);
  }

  return ASCIIvalue;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
console.log(asciiValue('an, example'));         // 
console.log(asciiValue('s/om/e weird + cases'));                   // 