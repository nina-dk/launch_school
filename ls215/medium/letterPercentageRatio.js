//percentage: total numbers this type of char appears / total length

function getCharsPercentage(str, regex) {
  return (((str.match(regex) || []).length / str.length) * 100).toFixed(2);
}

function letterPercentages(str) {
  return {
    lowercase: getCharsPercentage(str, /[a-z]/g), 
    uppercase: getCharsPercentage(str, /[A-Z]/g),
    neither: getCharsPercentage(str, /[^a-z]/gi) 
  };
}

// Examples:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

console.log(letterPercentages('   '));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('akdkev'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }