let rlSync = require('readline-sync');

let currentAge = rlSync.question('How old are you? ');
currentAge = Number(currentAge);
console.log(`You are ${currentAge} years old.`);

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${currentAge + years} years old.`);
}