let currentAge = 25;

console.log(`You are ${currentAge} years old.`);

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${currentAge + years} years old.`);
}