//Given a string
//Set all its characters to be lowercase
//Remove all non-alphanumeric characters
//Check if it's a palindrome

const isPalindrome = string => {
  return string === string.split("").reverse().join("");
};

function isRealPalindrome(string) {
  const regex = /[a-z0-9]/gi;
  let validCharsStr = "";
  let validChars = string.match(regex);
  if (validChars) validCharsStr = validChars.join("").toLowerCase();
  return isPalindrome(validCharsStr);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
console.log(isRealPalindrome('*$$*'));            // false
console.log(isRealPalindrome(''));            // false