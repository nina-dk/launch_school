/*
Input: number (`count`)
Output: array of the "index" of the lights that will be on after `count` passes
Rules: -all lights are initally off
       -on the first pass you toggle all lights
       -on the 2nd pass you toggle every other switch
       -on the 3rd pass you toggle every other two switches
       -and so on, until you've made `count` number of passes
       -`count` is the number of switches
       -first switch is at index `1`
Question: -Do you repeat the same order of toggling? (all, evens, odds, ...)
          No. On every pass you toggle after every `count` number of switches
Data structures: - object of all switches and their current state
Algorithm:
-Create an object with `count` keys starting from `1` and values "off".
-Set i = 0
-While `i` is <= `count`:
-On each iteration toggle after `i` number of switches.
-Increment `i`.
-Return the keys whose value is "on".
*/


function lightsOn(switches) {
  let switchesStates = {};
  for (let i = 1; i <= switches; i++) {
    switchesStates[i] = "off";
  }

  for (let count = 1; count <= switches; count++) {
    for (let key = count; key <= switches; key += count) {
      switchesStates[key] = (switchesStates[key] === "off" ? "on" : "off");
    }
  }

  return Object.keys(switchesStates)
    .filter(light => switchesStates[light] === "on")
    .map(Number);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]