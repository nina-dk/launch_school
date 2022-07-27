function makeCounterLogger(num) {
  return function(limit) {
    let start = num;
    if (start < limit) {
      while (start <= limit) {
        console.log(start);
        start += 1;
      }
    } else {
      while (start >= limit) {
        console.log(start);
        start -= 1;
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2
