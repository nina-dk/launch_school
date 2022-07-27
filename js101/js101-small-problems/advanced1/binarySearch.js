/*
Inputs: array, element to search for in the array
Output: number (index of found element or -1)
Rules:
  -search through the array using the binary search algorithm
   -find the middle element and check if it is/it's less than/greater than the
    searched element
  -input array will be sorted
Algorithm:
  -Find the middle element of the input array using its half length
  -If it is the searched-for element, return its index
  -Else if it's less than the element we need, remove the first half of the
   array including the middle element
  -Else if it's greater than the wanted element, remove the rest of the array
   including the middle element
  -Repeat steps 1-4 until the array has no elements left
  -Return -1
*/

function binarySearch(array, target) {
  let offset = 0;
  let middleIdx;

  while (array.length > 0) {
    middleIdx = Math.ceil(array.length / 2) - 1;

    if (array[middleIdx] === target) {
      return middleIdx + offset;
    } else if (array[middleIdx] < target) {
      offset += array.slice(0, middleIdx + 1).length;
      array = array.slice(middleIdx + 1);
    } else if (array[middleIdx] > target) {
      array = array.slice(0, middleIdx);
    }
  }

  return -1;
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us',
                   'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6