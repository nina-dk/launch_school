let number = 4936;
let ones = number % 10;
let tens = (number - ones) / 10 % 10;
number = (number - ones) / 10;
let hundreds =  (number - tens) / 10 % 10;
number = (number - tens) / 10;
let thousands = (number - hundreds) / 10;

console.log(thousands, hundreds, tens, ones);

//or

number = 4936;

let nums = {
  thousands: Math.floor(number / 1000),
  hundreds: Math.floor(number % 1000 / 100),
  tens: Math.floor(number % 100 / 10),
  ones: number % 10
};

let i = 1;
for (numPlace in nums) {
  console.log(`${i}. ${numPlace} place is ${nums[numPlace]}`);
  i++;
}