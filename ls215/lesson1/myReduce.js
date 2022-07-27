//initialize result to the initial value
//if the result is not null, start from the first element 
//as the current value
//otheriwse, assign the first element's value to `result` and
//start from the 2nd element

function myReduce(array, func, initial) {
  let [ result, idx ] = arguments.length === 3 ? [initial, 0] : [array[0], 1];

  for (; idx < array.length; idx += 1) {
    result = func(result, array[idx]);
  }

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49