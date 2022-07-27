//START
//SET teddy's age = random number between 20-120 inclusive.
//PRINT age
//END

function printTeddysAge() {
  let teddysAge = Math.round(Math.random() * 100) + 20;
  return `Teddy is ${teddysAge} years old!`;
}


//Further exploration
function randomBetween(min, max) {
  //check the inputs
  [min, max] = min > max ? [max, min] : [min, max];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 2);
console.log(`Teddy is ${age} years old!`);