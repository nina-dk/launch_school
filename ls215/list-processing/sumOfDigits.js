/*
Input: number
Output: number (sum of input number's digits)
Rules:
  -don't use a for, while or do...while loop
*/

function sum(num) {
  return String(num).split("")
                    .reduce((total, curr) => total + Number(curr), 0);
}

console.log(sum(2));            // 2
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45