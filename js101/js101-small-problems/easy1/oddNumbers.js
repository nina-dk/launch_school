// for(i = 1; i <= 99; i+=2) {
//   console.log(i);
// }

//Different approach

const rlSync = require("readline-sync");
let baseNum = rlSync.question("Provide the bottom limit: ");
let topNum = rlSync.question("Provide the top limit: ");

baseNum = parseInt(baseNum);
topNum = parseInt(topNum);

function logOddNums(base, top) {
  for(i = base; i <= top; i+=1) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logOddNums(baseNum, topNum);