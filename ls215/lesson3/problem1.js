/*
Input: 
  -string (phone number)
  -may contain digits, spaces, dots, dashes, parentheses
Output: 
  -string of 10 digits
    -the actual phone number
    -10 0s if the input number is a "bad number"
Rules:
  -if input string has less than 10 digitis, it's a bad number
  -if it has more than 11 digits, it's a bad number
  -if it has 11 digits and the first digit isn't 1, it's a bad number
  -if it has 11 digits and the first digit is 1, trim the 1 and use the remaining digits
  -special characters should be ignored
Data structures:
  -RegExp
Algorithm:
  -remove the special characters from the input string
  -if the length of the new string is > 11 or < 10, return ten 0s
  -if it's 11 and the first digit isn't 1, do the same
  -else if it is 1, return the following digits except for 1
  -else return the string
*/

function isBadNum(phoneNum) {
  return phoneNum.length > 11 || phoneNum.length < 10 ||
    (phoneNum.length === 11 && phoneNum[0] !== "1");
}

function clearPhoneNum(phone) {
  phone = phone.replace(/[^0-9]/g, "");
  if (isBadNum(phone)) return "0".repeat(10);
  else if (phone.length === 11) return phone.slice(1);
  return phone;
}

console.log(clearPhoneNum("0123456789")); // "0123456789"
console.log(clearPhoneNum("123456789")); // "0000000000"
console.log(clearPhoneNum("01234567891")); // "0000000000"
console.log(clearPhoneNum("11123456789")); // "1123456789"
console.log(clearPhoneNum("111-23456789")); // "1123456789"
console.log(clearPhoneNum("012345678")); // "0000000000"
console.log(clearPhoneNum("01-2345 6789")); // "0123456789"
console.log(clearPhoneNum("0.1.2345-67-89")); // "0123456789"
console.log(clearPhoneNum("(01) - 23456789")); // "0123456789"
console.log(clearPhoneNum("01[2345678]")); // "0000000000"
console.log(clearPhoneNum("1214123456789")); // "0000000000"
console.log(clearPhoneNum("----")); // "0000000000"
console.log(clearPhoneNum("")); // "0000000000"