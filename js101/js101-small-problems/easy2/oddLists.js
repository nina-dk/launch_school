function oddities(array) {
  // let oddArr = [];
  // for (let i = 0; i < array.length; i+= 2) {
  //   oddArr.push(array[i]);
  // }
  // return oddArr;
 
  return array.filter(element => array.indexOf(element) % 2 !== 1);

}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//Return evens

const evens = array => array.filter(e =>
  array.indexOf(e) % 2 === 0 && array.indexOf(e) !== 0);

console.log(evens([2, 3, 4, 5, 6])); // logs [4, 6]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens(["abc", "def"])); // logs []
console.log(evens([123])); // logs []
console.log(evens([])); // logs []