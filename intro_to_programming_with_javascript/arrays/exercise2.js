let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let evenNumbers = myArray.filter(num => num % 2 === 0);
evenNumbers.forEach(number => console.log(number));