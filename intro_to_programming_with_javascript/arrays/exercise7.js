let sumOfSquares = arr => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue**2
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83