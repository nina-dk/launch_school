let greetingMessage = 'Good Morning!';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newGreeting) {
  greetingMessage = newGreeting;
}

changeGreetingMessage('Hellooo');
greetPeople();

//internal declaration of variable (local variable)
function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError