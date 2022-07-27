/*
PROBLEM STATEMENT:
    Input:
      -integer
    Output:
      -integer
    Explicit requirements:
      -output number is the next largest integer that is a featured number
      -a featured number is one that is a multiple of 7 and that all of its
       digits appear only once
      -the largest possible featured number is 9876543201
      -if there's no next featured number issue an error message
    Implicit requirements:
      -input number doesn't have to be a featured number
      -input number is a positive (?) number
      -7 is also a featured number
    Questions:
      -negative or 0 input?
Algorithm:
  1.Increment input `num` by 1.
  2.Check if the current value assigned to `num` is evenly divisible by 7
    a.if it is, coerce the num to an array
    b.sort the array
    c.check if any string-digit equals the next one in the array
      i.if it is, move on to the next loop
      ii.if it doesn't, return `num`.
*/

function featured(num) {
  while (num < 9876543201) {
    num += 1;
    if (num % 2 === 1 && num % 7 === 0) {
      let digits = String(num).split("").sort();
      if (!digits.some((digit, i) => digit === digits[i + 1])) return num;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(9876543186));
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
console.log(featured(105)); //147
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."