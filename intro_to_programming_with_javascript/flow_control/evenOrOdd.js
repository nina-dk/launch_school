function evenOrOdd (number) {
  if (Number.isInteger(number)) {
    number % 2 === 0? console.log('even') : console.log('odd');
  } else {
    console.log("You must provide an integer.");
  }
}

evenOrOdd(0);
evenOrOdd('a');
evenOrOdd(48573);
evenOrOdd(846);
evenOrOdd(NaN);