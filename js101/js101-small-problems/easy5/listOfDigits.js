//input/output: a positive integer / array of the digits in the number
//rules: -
//data structures: array
//algorithm:
//START
//SET string equal the string represantation of the number
//Convert the string to an array, splitting at each character
//END

const digitList = num => String(num).split("").map(num => Number(num));

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]