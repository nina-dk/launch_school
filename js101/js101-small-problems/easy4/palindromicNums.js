//input/output: an integer / true (if it's palindromic) or false
//rules: palindromic number reads the same forwards and backwards
//       a single number is considered palindromic
//data structures: reverse the number check to see if it's the same as
//the original number
//algorithm:
//Convert the number to an array and reverse it
//Return if the orginal number as a string equals
//the reversed number as a string.

function isPalindromicNumber(number) {
  return String(number) === String(number).split("").reverse().join("");
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

//Further exploration

function isPalindrome(num, length) {
  num = String(num);
  if (length !== num.length) {
    let diff = length - num.length;
    for (let i = (num.length - 1); i >= diff; i--) {
      if (num[i] === "0") {
        num = num.slice(0, i);
      } else {
        break;
      }
    }
  }
  return isPalindromicNumber(num);
}

console.log(isPalindrome(000292000, 9));  // true
console.log(isPalindrome(00330, 5)); // false
console.log(isPalindrome(0, 1)); //true