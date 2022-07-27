function repeat(numberOfTimes, str) {
  let arrayOfStr = [];
  for (i = numberOfTimes; i > 0; i -= 1) {
     arrayOfStr.push(str);
  }
  return arrayOfStr.join('');
}

console.log(repeat(4, 'ha'));
console.log(repeat(6, 'coco'));