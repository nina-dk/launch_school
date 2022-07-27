//1
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Launch School"), 2000);
// });

// promise1.then((res) => console.log(res));

//2
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Error: Not Launch School"), 2000);
// });

// promise2.catch((err) => console.log(err));

"use strict";
let name;
console.log("start");

function fetchName() {
  return new Promise((resolve, _) => {
    resolve("Nina");
  });
}

async function getName() {
  name = await fetchName();
  console.log(name);
}


getName();
console.log("Out here");
setTimeout(() => console.log(name), 5000);