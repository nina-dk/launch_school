let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => { 
  return array.map(str => str.length).filter(length => length % 2 !== 0);
};

console.log(oddLengths(arr)); // => [1, 5, 3]