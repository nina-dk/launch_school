/*
`Meetup` class
`constructor` method
  input: year, month (integers)
  output: `Meetup` instance
`day` instance method
  input:
    -weekday (string)
    -schedule (string)
  output: date object or `null`
  rules:
    -if there is no such date as requested, return `null`
    -there is only one "teenth" of a given weekday in a month
    -casing for weekdays and schedule isn't important
    -months and weekdays are 0-indexed in the Date object (January is 0, Sunday is 0)
  algorithm:
    -create an array to store the dates of that weekday's occurences that month and year
    -if the `schedule` is first, return `this.first`
    -else
      -increment the `first` date by `7` days, and the store that date in the array
      -repeat as many times as the schedule suggests
`first` helper instance method
  input: weekday (string)
  output: date object
  algorithm:
    -create a date object of the given year and month
    -while the current date doesn't much the input weekday
      -increment the date by 1 day
    -return the first date where the day matches the input `weekday`'s index
*/
"use strict";

class Meetup {
  static weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  static schedule = ["first", "second", "third", "fourth", "fifth", "last", "teenth"];

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    [ weekday, schedule ] = [weekday.toLowerCase(), schedule.toLowerCase()];

    switch (schedule) {
      case "first":  return this.first(weekday);
      case "second": return this.second(weekday);
      case "third": return this.third(weekday);
      case "fourth": return this.fourth(weekday);
      case "fifth": return this.fifth(weekday);
      case "last": return this.fifth(weekday) || this.fourth(weekday);
      case "teenth": return this.teenth(weekday);
    }
  }

  first(weekday) {
    let dayIdx = Meetup.weekdays.indexOf(weekday);
    let date = new Date(this.year, this.month - 1);
    let increment = 2;
    while (date.getDay() !== dayIdx) {
      date.setDate(increment);
      increment += 1;
    }

    return date;
  }

  second(weekday) {
    return new Date(this.year, this.month - 1, this.first(weekday).getDate() + 7);
  }

  third(weekday) {
    return new Date(this.year, this.month - 1, this.second(weekday).getDate() + 7);
  }

  fourth(weekday) {
    return new Date(this.year, this.month - 1, this.third(weekday).getDate() + 7);
  }

  fifth(weekday) {
    let fifthDate = new Date(this.year, this.month - 1, this.fourth(weekday).getDate() + 7);
    if (fifthDate.getMonth() !== this.month - 1) return null;
    return fifthDate;
  }

  teenth(weekday) {
    let teenths = [13, 14, 15, 16, 17, 18, 19];
    let dates = [this.first(weekday), this.second(weekday), this.third(weekday),
                 this.fourth(weekday), this.fifth(weekday)];
    
    return dates.find(date => teenths.includes(date.getDate()));
  }
}

module.exports.Meetup = Meetup;