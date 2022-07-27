function century(year) {
  let century = String(Math.ceil(year / 100));

  if (century[century.length - 2] !== "1") {
    switch (century[century.length - 1]) {
      case "1": return (century += "st");
      case "2": return (century += "nd");
      case "3": return (century += "rd");
    }
  }
  return (century += "th");
}


console.log(century(2000));     // "20th"
console.log(century(2001));     // "21st"
console.log(century(1965));     // "20th"
console.log(century(256));      // "3rd"
console.log(century(200));      // "2nd"
console.log(century(5));        // "1st"
console.log(century(10103));    // "102nd"
console.log(century(1052));     // "11th"
console.log(century(1127));     // "12th"
console.log(century(11201));    // "113th"