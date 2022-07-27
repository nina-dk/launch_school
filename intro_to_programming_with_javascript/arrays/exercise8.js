let oddLengths = array => {
  return array.reduce((acc, currVal) => {
    return (currVal.length % 2 === 1 ? acc.concat(currVal.length) : acc);
  }, []);
};

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]