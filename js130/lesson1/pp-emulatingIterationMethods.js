//1. filter
function filter(arr, callback, thisArg) {
  let filtered = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (callback.call(thisArg, arr[idx], idx, arr)) filtered.push(arr[idx]);
  }

  return filtered;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

console.log(filter([1, 1, 3, 2, 5], (num, idx) => num > idx)); // [ 1, 3, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

let obj = {
  nums: [1, 4, 2, 5, 10],
  greaterThan5(num) {
    return num > 5;
  }
};

console.log(filter(obj.nums, obj.greaterThan5, obj)); // [ 10 ]

//2. map
function map(arr, callback, thisArg) {
  let transformed = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    transformed.push(callback.call(thisArg, arr[idx], idx, arr));
  }

  return transformed;
}

console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

obj.addIndex = function(num, idx) {
  return num + idx;
};

console.log(map(obj.nums, obj.addIndex, obj)); // [ 1, 5, 4, 8, 14 ]

//reduce
//1
function reduce(arr, callback, initialVal) {
  let [acc, idx] = (initialVal === undefined) ? [arr[0], 1] : [initialVal, 0];

  for (idx; idx < arr.length; idx += 1) {
    acc = callback(acc, arr[idx], idx, arr);
  }

  return acc;
}

console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

//2. create filter using reduce
function filter(arr, callback, thisArg) {
  return arr.reduce((acc, el, idx) => {
    if (callback.call(thisArg, el, idx, arr)) return acc.concat(el);
    else return acc;
  }, []);
}

console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
console.log(filter([1, 1, 3, 2, 5], (num, idx) => num > idx)); // [ 1, 3, 5 ]
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
console.log(filter(obj.nums, obj.greaterThan5, obj)); // [ 10 ]

//3. create map using reduce
function map(arr, callback, thisArg) {
  return arr.reduce((acc, el, idx) => {
    return acc.concat(callback.call(thisArg, el, idx, arr));
  }, []);
}

console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

console.log(map(obj.nums, obj.addIndex, obj)); // [ 1, 5, 4, 8, 14 ]