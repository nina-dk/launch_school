// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

// Examples:

/*
Input: positive integer (number of switches-lights and passes to run)
Output: array of integers (lights that are "on")
Rules:
  -each switch is connected to one light
  -all the lights are initially off
  -we need to do number-of-switches number of passes
  -on each pass we toggle the switches that are in a position that is a multiple
   of the number of the current pass
Data structure:
  -object of switches and their current state
  -return an array of switches (keys of the object)
Algorithm:
  -Create an object with the switches numbers as its keys, and their current state as the values (initial state is `false`)
  -Iterate through the object as many times as the number of switches
    -toggle the state of the switches whose number is a multiple of the current pass number
  -Return the switches numbers whose state is `true` in an array
*/

function lightsOn(switches) {
  let switchesStates = {};
  for (let i = 1; i <= switches; i += 1) {
    switchesStates[i] = false;
  }

  for (let pass = 1; pass <= switches; pass += 1) {
    for (let switchNum in switchesStates) {
      if (switchNum % pass === 0) switchesStates[switchNum] = !switchesStates[switchNum];
    }
  }

  return Object.keys(switchesStates).filter(switchNum => switchesStates[switchNum]);
}


console.log(lightsOn(1));        // [1]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]