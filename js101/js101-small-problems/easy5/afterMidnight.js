//input/output: positive or negative integer /
//              string containing the time in 24h format (hh:mm)
//rules: - input < 0: time is after midnight
//       - input >= 0: time is before midnight
//       - 1 hour 60 minutes, 1 day 24 hours
//       - midnight is 00:00 (not 24:00)
//       - if hours/minutes are one digit number should be filled with zero
//       - Date methods not allowed

const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_HOUR;
const padZero = time => (time < 10 ? "0" + time : time);

function timeOfDay(mins) {
  let dayMins = mins % MINS_PER_DAY;
  if (dayMins < 0) dayMins += MINS_PER_DAY;

  let minutes = dayMins % MINS_PER_HOUR;
  let hours = Math.floor(dayMins / MINS_PER_HOUR);
  return `${padZero(hours)}:${padZero(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(-1440) === "00:00");

//Further exploration
//Use the Date object + print the day as well
//rules:  - starting at midnight between Saturday and Sunday
//example: displayDate(-4321) === "Thursday 01:29"

const date = new Date(2021, 1, 28);
const options = { weekday: 'long', hour: '2-digit', minute: '2-digit'};
const dateTimeFormat = new Intl.DateTimeFormat('en-US-u-hc-h24', options);
const MS_PER_MINUTE = 60000;

function displayDate(minutes) {
  let newDate = new Date();
  let ms = minutes * MS_PER_MINUTE;
  newDate.setTime(date.getTime() + ms);

  return dateTimeFormat.format(newDate);
}

console.log(displayDate(0));
console.log(displayDate(-3));
console.log(displayDate(35));
console.log(displayDate(-1437));
console.log(displayDate(3000));
console.log(displayDate(800));
console.log(displayDate(-4231));
console.log(displayDate(-1440));