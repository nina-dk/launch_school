//input/output: number / number with its digits reversed
//rules: - leading zeros in the result don't matter
//       - one-digit numbers should be returned as is
//data structures: convert number to string
//algorithm:
//SET string = string representation of the number
//SET array = string's characters
//SET count = array's length - 1
//WHILE count > 0
//  Push the last number in the beginning of the array and remove it
//Coerce the array back to a string and then number
//PRINT number

const reverseNumber = num => Number(String(num).split("").reverse().join(""));

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1