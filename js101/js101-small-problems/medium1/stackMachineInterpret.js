/*
PROBLEM STATEMENT:
    Input:
      -string of commands
    Output:
      -integer number or nothing (if no output is requested)
    Explicit requirements:
      -all operations are integer operations
      -initialize the `stack` to [] and the `register` to 0
      -assume input will always be valid
      n : Place a value, n, in the register. Do not modify the stack.
      PUSH : Push the register value onto the stack.
             Leave the value in the register.
      ADD : Pop a value from the stack and add it to the register value,
            storing the result in the register.
      SUB : Pop a value from the stack and subtract it from the register value,
            storing the result in the register.
      MULT : Pop a value from the stack and multiply it by the register value,
             storing the result in the register.
      DIV : Pop a value from the stack and divide it into the register value,
            storing the integer result in the register.
      MOD : Pop a value from the stack and divide it into the register value,
            storing the integer remainder of the division in the register.
      POP : Remove the topmost item from the stack and place it in the register.
      PRINT : Print the register value.
    Implicit requirements:
      -the value of `n` if provided, is always a number
      -the division is performed like so: register value / last value on stack
       (MOD also)
      -the input number could be any integer number (negative, zero, positive)
    Questions:
Data Structures:
POTENTIAL DATA STRUCTURES
    -array (stack)
    -variable to store the register value
    -array of possible commands
POTENTIAL METHODS / CODE
    -switch statement for mathematical operations
Algorithm:
  1.Create an empty `stack` array.
  2.Declare a variable `register` and assign 0 to it.
  3.Split the input string to an array of words-commands.
  4.Loop over the array of commands
    a.if the command is a number, assign its value to `register`
    b.else execute the necessary function
*/

function minilang(command) {
  const COMMANDS = ["POP", "PRINT", "PUSH", "ADD", "SUB", "MULT", "DIV", "MOD"];
  const stack = [];
  let register = 0;
  let commands = command.split(" ");

  commands.forEach(command => {
    if (Number(command)) register = Number(command);
    else if (!COMMANDS.includes(command)) return `No "${command}" command.`;
    else if (command === "PUSH") stack.push(register);
    else if (command === "PRINT") console.log(register);
    else register = operations(command, stack, register);
  });
}

function operations(command, stack, register) {
  if (!stack.length) return `Can't perform ${command}. Stack is empty.`;

  switch (command) {
    case "POP": return stack.pop();
    case "ADD": return register + stack.pop();
    case "SUB": return register - stack.pop();
    case "MULT": return register * stack.pop();
    case "DIV": return Math.round(register / stack.pop());
    case "MOD": return register % stack.pop();
  }
}

minilang('PRINT');
// 0

minilang("4 ADD");
minilang("5 PUSH ADD SUBTRACT 8 PRINT");

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)