let rlSync = require('readline-sync');

let firstName = rlSync.question('What is your name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);