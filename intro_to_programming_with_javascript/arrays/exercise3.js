let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evenNumbers = myArray.flat().filter(number => number % 2 === 0);
evenNumbers.forEach(number => console.log(number));