/*
Inputs: `n` number of callback functions
Output: 
  -each second that elapses
  -any output produced by the callbacks
Rules:
  -the callbacks are invoked in a random order and in a random point of time
  -the total time the function takes to invoke all callbacks can't exceed `2 * n` sec
Data structure:
  -Array of callback functions
Algorithm:
  -get the maximum time by calculating the length of the arguments * 2
  -start a loop that goes from 1 up to max_time
    -on each iteration use `setTimeout` to print the current second after that many
    seconds have elapsed
  -for each passed-in callback
    -invoke `setTimeout` with that callback as an argument and a random number
      from now..max_time as its second argument
*/
"use strict";

function randomizer(...callbacks) {
  const MAX_TIME = 2 * callbacks.length;
  let currentSec = 0;
  let intervalId = setInterval(() => {
    currentSec += 1;
    console.log(currentSec);
  }, 1000);

  setTimeout(() => clearInterval(intervalId), (MAX_TIME + 1) * 1000);

  callbacks.forEach(callback => {
    let randomTime = Math.floor(Math.random() * MAX_TIME);
    setTimeout(callback, randomTime * 1000);
  });
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6