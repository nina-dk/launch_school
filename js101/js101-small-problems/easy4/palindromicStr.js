
function isPalindrome(string) {
  let characters = string.split("");
  let condition = true;
  while (condition && characters.length > 1) {
    condition = (characters.shift() === characters.pop());
  }

  return condition;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome(''));                    // true
console.log(isPalindrome('-**6**-'));             // true
console.log(isPalindrome('a'));                   // true