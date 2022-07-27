//Write a function called doubler that doubles every value in an array.


// - elements that are numbers should be multiplied by 2
console.log(doubler([1, 2, 3])); // [2, 4, 6]
// - elements that are strings should be repeated twice via concatenation
console.log(doubler(["a", " ", "\n"])); // ["aa", "  ", "\n\n"]
// - other types of elements should be duplicated in the array
console.log(doubler([true, false]));       // [true, true, false, false]
console.log(doubler([null]));              // [null, null]
console.log(doubler([undefined]));         // [undefined, undefined]
console.log(doubler([function foo() {}])); // [function foo(), function foo()]
console.log(doubler([/abc/]));             // [/abc/, /abc/]
// - the input array should not be mutated
let arr = [1, "a", ""];
let doubled = doubler(arr); 
console.log(doubler(arr)); // [2, "aa", ""]
console.log(arr === doubled); // false
// - elements that are special number values should remain unchanged
console.log(doubler([NaN, Infinity, -Infinity])); // [NaN, Infinity, -Infinity]
// - elements that are any other type of number should be treated normally (multiplied by 2)
console.log(doubler([1.4, -2, -3.2])); // [2.8, -4, -6.4]
// - elements that are empty strings should remain unchanged
// - elements that are any other type of string should be treated normally (repeated twice)
// - the input array can contain a mixture of different types of elements
console.log(doubler(["ad", -3, NaN, "", {a: "a"}, [1, 2]])); // ["adad", -6, NaN, "", {a: "a"}, {a: "a"}, [1, 2], [1, 2]]
// - non-primitive elements should have their reference duplicated, not their value
let objArr = [{}, [], [1, 2, 3]];
let doubledRefs = doubler(objArr); 
console.log(doubler(arr)); // [{}, {}, [], [], [1, 2, 3], [1, 2, 3]]
console.log(doubledRefs[0] === doubledRfes[1]); // false
// - elements that appear more than once should be treated normally (as specified above)
console.log(doubler([1, 1, 2, 3])); // [2, 2, 4, 6]
// - elements that contain nested arrays or objects should be treated normally (duplicated)
console.log(doubler([[{a: "a"}, [1, 2]]])); // [[{a: "a"}, [1, 2]], [{a: "a"}, [1, 2]]]
console.log(doubler([{a: "a", b: [1, 2]}])); // [{a: "a", b: [1, 2]}, {a: "a", b: [1, 2]}]
// - if the input array contains empty slots (a "sparse array"), they should be removed
console.log(doubler([1, , 2, 3])); // [2, 4, 6]
// - if an inner array (element) contains empty slots, they should remain unchanged
console.log(doubler([[1, 2, , 3], [1]])); // [[1, 2, , 3], [1, 2, , 3], [1], [1]]
// - if the input array contains any object properties, they should remain unchanged
let arrWithProp = [1, 2];
arrWithProp[a] = 3;
console.log(doubler(arrWithProp)); // [2, 4, 'a': 3]
// - if an inner array (element) contains any object properties, they should remain unchanged
let array = [1, 2];
array.foo = 'bar';
console.log(doubler([array])); // [[1, 2, foo: "bar"], [1, 2, foo: "bar"]]
// - if the array is empty, return an empty array
console.log(doubler([])); // []
// - if multiple arguments are passed, ignore all but the first
console.log(doubler([1, 3], ["a", "b"], [])); // [2, 6]
// - if the argument is a string, treat it as an array of characters
console.log(doubler("a1b3ckfl")); // ["aa", "11", "bb", "33", "cc", "kk", "ff", "ll"]
console.log(doubler("")); // []
// - if the argument is a non-negative integer, treat it as an array of digits
console.log(doubler(0)); // [0]
console.log(doubler(12)); // [2, 4]
console.log(doubler(012)); // [2, 4] ?
// - if the argument is an object, treat it as an array of its property values
console.log(doubler({a: 1, b: "b", 3: [1, 2]})); // [2, "bb", [1, 2], [1, 2]]
// - all other kinds of inputs are invalid, and should return the string 'Invalid input'
console.log(doubler()); // "Invalid input"
console.log(doubler(-4)); // "Invalid input"
console.log(doubler(false)); // "Invalid input"