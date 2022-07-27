/*
----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions only return something or do they only have side effects?
  - Will you return the same object that's passed in the function or a new one?

PROBLEM STATEMENT:
    Input:
      -array (or invalid/no input)
    Output:
      -new array or undefined when the input is invalid/empty
    Explicit requirements:
      -return a new array with the first element of input array last
      -if input is not an array return `undefined`
      -if input is an empty array return an(OTHER) empty array
      -don't modify the input array
Data Structures:
POTENTIAL DATA STRUCTURES
    -Array
POTENTIAL METHODS / CODE
    -Array.isArray, spread syntax

Algorithm:
  1.Check if the input is an array, and if not return `undefined`.
  2.Create an shallow copy of the input array named `copyArr`.
  3.Remove the first element from `copyArr` and push it at the end.
  4.Return `copyArr`.
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  const newArr = [...arr];
  if (newArr.length > 0) newArr.push(newArr.shift());
  return newArr;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                    // [1, 2, 3, 4]