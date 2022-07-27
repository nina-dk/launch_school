function multisum(num) {
  let multiples = [];
  for (let i = 3; i <= num; i += 3) {
    multiples.push(i);
  }
  for (let i = 5; i <= num; i += 5) {
    if (!multiples.includes(i)) multiples.push(i);
  }

  return multiples.reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(multisum(1));       // 0
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(9));       // 23
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168