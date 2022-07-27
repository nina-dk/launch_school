function rangeOfNumber (number) {
  if (number < 0) {
      console.log(`${number} is less than 0.`);
  } else if (number <= 50) {
      console.log(`${number} is between 0 and 50 (inclusive).`);
  } else if (number <= 100) {
      console.log(`${number} is between 51 and 100 (inclusive).`);
  } else if (number > 100) {
      console.log(`${number} is greater than 100.`);
  } else {
    console.log('Please provide a valid input.');
  }
}