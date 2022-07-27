//input/output: string containing the time in 24h format /
//              the minutes before/after midnight in the given time
//rules: - write 2 functions, one to count minutes after and one before midnight
//       - return value should be in the range of 0..1439
//       - don't use Date class methods
//       - return number
//       - midnight might be either 00:00 or 24:00
//data structures: string to array methods, string to number method
//algorithm:
//SET minutes in an hour = 60
//SET hours per day = 24
//SET minutes per day = hours per day * minutes per hour
//For the afterMidnight function:
//SET array comprised of the hours and minutes by splitting the string in ":"
//Convert array's elements to numbers
//Multiply the first element (hours) with the minutes per hour var
//Add the minutes with the hours converted to minutes
//Return that number

//For the beforeMidnight function:
//For the afterMidnight function:
//SET array comprised of the hours and minutes by splitting the string in ":"
//Convert array's elements to numbers
//SET minutesToMidnight = minutes per day - afterMidnight(given time)
//Return minutesToMidnight
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  let array = time.split(":");
  let hoursToMins = (Number(array[0]) * MINS_PER_HOUR) % MINS_PER_DAY;
  return hoursToMins + Number(array[1]);
}

function beforeMidnight(time) {
  let minutesToMidnight = MINS_PER_DAY - afterMidnight(time);
  return minutesToMidnight % MINS_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

//Further exploration
const startDate = new Date(2021, 1, 28);
const MS_PER_MINUTE = 60000;

function afterMidnight2(time) {
  let date = new Date(`February 28, 2021 ${time}:00`);
  let timeDifference = ((date.getTime() - startDate.getTime()) / MS_PER_MINUTE);
  return timeDifference % MINS_PER_DAY;
}

let beforeMidnight2 = time => (MINS_PER_DAY - afterMidnight(time)) % MINS_PER_DAY;

console.log(afterMidnight2("00:00") === 0);
console.log(beforeMidnight2("00:00") === 0);
console.log(afterMidnight2("12:34") === 754);
console.log(beforeMidnight2("12:34") === 686);
console.log(afterMidnight2("24:00") === 0);
console.log(beforeMidnight2("24:00") === 0);