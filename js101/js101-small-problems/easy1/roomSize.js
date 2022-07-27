const rlsync = require("readline-sync");

console.log("Enter the length of the room in meters: ");
let length = rlsync.prompt();
console.log("Enter the width of the room in meters: ")
let width = rlsync.prompt();

length = parseFloat(length);
width = parseFloat(width);
let area = length * width;

console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * 10.7639).toFixed(2)} square feet).`);

//Ask for input type as well

console.log("Do you want to provide dimensions in meters or feet?")
let inputType = rlsync.prompt().toLowerCase();

console.log(`Enter the length of the room in ${inputType}: `);
let length = rlsync.prompt();
console.log(`Enter the width of the room in ${inputType}: `)
let width = rlsync.prompt();

length = parseFloat(length);
width = parseFloat(width);
let area = length * width;

if (inputType === "meters") {
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * 10.7639).toFixed(2)} square feet).`);
} else {
  console.log(`The area of the room is ${area.toFixed(2)} square feet (${(area / 10.7639).toFixed(2)} meters).`);
}