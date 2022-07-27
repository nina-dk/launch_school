//Input: array
//Output: the input array with its elements reversed
//Rules: -input array === output array
//       -not use Array.prototype.reverse() method
//Data structures: input array is used as output as well
//Algorithm:
/*
1.Create a variable `count` equal to 0
2.Remove the last element from the input array
3.Push that element in the array at index `count`
4.Increment `count` by 1
5.Repeat steps 2-4 until the last element is what used to be the first element
6.Return the array
*/

//1st way
function reverse(array) {
  for (let i = 0; i <= array.length - 2; i++) {
    array.splice(i, 0, array.pop());
  }

  return array;
}

//2nd way
function reverse2(array) {
  const firstElement = array[0];
  let count = 0;

  while (array[array.length - 1] !== firstElement) {
    array.splice(count, 0, array.pop());
    count += 1;
  }

  return array;
}

//i = 0: [4, 1, 2, 3]
//i = 1: [4, 3, 1, 2]
//i = 2: [4, 3, 2, 1]

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4, 3, 2, 1]
console.log(list === result); // logs true

//i = 0: ["e", "a", "b", "c", "d"]
//i = 1: ["e", "d", "a", "b", "c"]
//i = 2: ["e", "d", "c", "a", "b"]
//i = 3: ["e", "d", "c", "b", "a"]

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true