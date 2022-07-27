function myFilter(array, func) {
  let resultArray = [];

  array.forEach((el, idx) => {
    if (func(el, idx, array)) resultArray.push(el);
  });

  return resultArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let arr = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);
console.log(arr);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]