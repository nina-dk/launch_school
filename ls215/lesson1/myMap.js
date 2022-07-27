function myMap(array, func) {
  let resultArray = [];
  array.forEach((el, idx) => {
    resultArray.push(func(el, idx, array));
  });

  return resultArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]