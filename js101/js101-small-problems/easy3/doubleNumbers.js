//START
//given a number
//SET string = number to a string
//IF string's length is an odd number
//  PRINT number * 2
//ELSE IF it's an even number
//  split the string in the middle and check if
//  the first half is equal to the second half
//  IF it is
//    PRINT the number
//  ELSE
//    PRINT number * 2
//END

function twice(number) {
  let stringNum = String(number);
  if (stringNum.length % 2 === 1) return (number * 2);
  let twoHalves = [
    stringNum.slice(0, stringNum.length / 2),
    stringNum.slice(stringNum.length / 2)
  ];
  return (twoHalves[0] === twoHalves[1] ? number : number * 2);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
console.log(twice(0));          // 0