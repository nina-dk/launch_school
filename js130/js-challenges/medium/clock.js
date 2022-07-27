/*
` Clock` class
`at` static method
  input: hours, minutes (optional) in the form of integers
  output: the instance of `Clock`
  rules:
    -24 hour clock
  algorithm:
    -create a property `time` that holds the time in the form of an array (?)
`add` instance method
  input: minutes (integer)
  output: instance of `Clock`
  rules:
    -1 hour contains 60 minutes
  algorithm:
    -extract hours out of the input minutes by diving by 60
    -add hours to existing `hours` in the clock
    -extract new-day hours by getting the remainder from dividing the
      hours by `24`
      -if that's a positive number
        -reassign `hours` to `0` + that number
      -else if `hours` are `24`
        -reassign it to `0`
    -increment `mins` by the remaining minutes
`subtract` instance method
  input: minutes (integer)
  output: instance of `Clock`
  algorithm:
    -extract hours out of the input minutes by diving by 60
    -extract days out of hours by getting the remainder of hours / hours per day
    -save remaining minutes
    -subtract hours from `hours`
    -if the remaining minutes > current minutes, subtract one more hour
    -if new `hours` are negative, add 24 hours to it
    -subtract the `mins` by the remaining minutes
    -if `mins` are now negative, add one hour (60) to it
    -return the clock
`isEqual` instance method
  input: `Clock` object
  output: boolean value
  rules:
    -compare the two clocks by their times
`toString` instance method
  input: -
  output: string representation of the time
  rules:
    -time should be formatted like so "HH:MM"
*/

class Clock {
  static MINS_PER_HOUR = 60;
  static HOURS_PER_DAY = 24;

  static at(hours, mins) {
    return new Clock(hours, mins);
  }

  constructor(hours, mins) {
    this.hours = hours;
    this.mins = mins || 0;
  }

  add(minutes) {
    let [ hours, mins ] = this._extractHoursAndMins(minutes);

    if (hours > 0) {
      this.hours += hours % Clock.HOURS_PER_DAY;
      if (this.hours === 24) this.hours = 0;
    }

    this.mins += mins;
    return this;
  }

  subtract(minutes) {
    let [ hours, mins ] = this._extractHoursAndMins(minutes);
    this.hours -= hours % Clock.HOURS_PER_DAY;

    if (mins > this.mins) this.hours -= 1;
    if (this.hours < 0) this.hours += Clock.HOURS_PER_DAY;

    this.mins -= mins;
    if (this.mins < 0) this.mins += Clock.MINS_PER_HOUR;
    return this;
  }

  toString() {
    let hours = this._leadingZero(this.hours);
    let mins = this._leadingZero(this.mins);
    return `${hours}:${mins}`;
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }

  _extractHoursAndMins(mins) {
    return [Math.floor(mins / Clock.MINS_PER_HOUR), mins % Clock.MINS_PER_HOUR];
  }

  _leadingZero(num) {
    return num > 9 ? String(num) : `0${num}`;
  }
}

module.exports.Clock = Clock;