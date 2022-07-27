//Console
let rlSync = require('readline-sync');

function getName (question) {
  let name = rlSync.question(question);
  return name;
}

let firstName = getName('What is your name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

//Browser

function getName (question) {
  let name = prompt(question);
  return name;
}

let firstName = getName("What is you first name?");
let lastName = getName("What is your last name?");
console.log(`Hello, ${firstName} ${lastName}!`);