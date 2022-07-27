function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"]
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    let classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

/*
The reason why only the first offered class in not included in the compatible
events, is because it's the only event that's in the past. The `isInThePast`
function works fine so on line 53, the callback function will return without
pushing the `Back to the Future Movie Night`  to the `compatibleClasses` array.
All subsequent classes will be checked by the `isAvailable` function, which is supposed
to return a truthy value only for the classes whose dates don't already exist in the
calendar, or whose dates have no other classes scheduled in the calendar. However,
`isAvailable` returns a truthy value for every class.
This is because of the `toString` function which coerces each date to a string so
that we can check if such a key-date exists in `myCalendar`. If we log the value of
`dateStr` we can see something is not right: 
`118-8-1
118-8-2` is the output for the `Web Security Fundamentals`.
The first issue is the `getYear()` method used on line 8, to get the year of the input
date. This method doesn't return a full year and is deprecated. `getFullYear` should
be used instead. Furthermore, the `getDay` method returns the day of the week (0-6)
as opposed to the date of the month which is what we wanted, so it should be replaced
by the `getDate` method. The `getMonth` method returns the month of the year with a
zero-based value so we have to increment its return value by 1. Finally, we need to
append the number `0` when necessary to the month and the day to get the date
format that we need: `YYYY/MM/DD`.
*/


function appendZero(date) {
  return date.length === 2 ? date : `0${date}`;
}

function toString(date) {
  let month = appendZero(String(date.getMonth() + 1));
  let day = appendZero(String(date.getDate()));

  return `${date.getFullYear()}-${month}-${day}`;
}