// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
// Here is an example of version number ordering:
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
Inputs:
  -two strings (?)
  -each input represents a version number (X.X.X ...)
Output:
  -1 if version1 > version2
  --1 if version1 < version2
  -0 if they're equal
  -null if either input is invalid
    -contains characters other than digits and `.`
    -starts with or ends with or has more than one `.` in a row
Rules:
  -a version is less than another version if the first part that they don't
  have in common is < the corresponding part of the other version
  -all versions can be assumed to have at least two parts "0.0"
Data structure:
  -arrays of the version parts
Algorithms:
  -if either input contains invalid characters, return `null`
  -split each input string to an array of parts leveraging the `.` separators
  -iterate over the number-strings of the first array
    -coerce each string to a number
    -if it's > the number at the same index in the 2nd array
      -return 1
    -if it's < ...
      -return -1
    -otherwise, continue to the next one
  -if the lengths of the arrays are equal, return 0
  -if the 2nd array is longer than the first one
    -if the character after the last index of the 1st array in the 2nd array
      is > 0, return -1
    -else, return 0
*/

const invalid = input => /^\.|[^\d\.]|\.$|\.{2,}/.test(input);

function compareVersions(version1, version2) {
  if (invalid(version1) || invalid(version2)) return null;
  else if (version1.length === 0 || version2.length === 0) return null;

  let [v1, v2] = [version1.split("."), version2.split(".")];
  for (let idx = 0; idx < v1.length; idx += 1) {
    let [num1, num2] = [Number(v1[idx]), Number(v2[idx])];
    if (num1 > num2) return 1;
    else if (num1 < num2) return -1;
  }

  if (v2.length > v1.length) {
    if (v2[v1.length] > 0) return -1;
  }

  return 0;
}

console.log(compareVersions("1", "1.0")); // 0
console.log(compareVersions("1", "1.3")); // -1
console.log(compareVersions("1", "0.2")); // 1
console.log(compareVersions("1.3.2.0", "3.2")); // -1
console.log(compareVersions("2.18", "2.2.0")); // 1
console.log(compareVersions("0", "0")); // 0
console.log(compareVersions("2.18", "2.a.0")); // null
console.log(compareVersions("2.18", "")); // null
console.log(compareVersions("2 .4", "2.2.0")); // null
console.log(compareVersions(".1.2", "2.1")); // null
console.log(compareVersions("1.3", "1.0.")); // null
console.log(compareVersions("4.5..0", "4")); // null