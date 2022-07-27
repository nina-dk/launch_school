const rlsync = require("readline-sync");

let name = rlsync.question("What's your name human?\n");
if (name.endsWith("!")) {
  name = name.slice(0, -1).toUpperCase();
  console.log("HELLO " + name + ". WHY ARE WE SCREAMING?");
} else {
  console.log("Hello " + name + ".");
}