document.addEventListener("DOMContentLoaded", (_) => {
  let answer;
  let form = document.querySelector("form");
  let input = document.getElementById("guess");
  let submit = document.querySelector("[type='submit']");
  let p = document.querySelector("p");
  let numOfGuesses = 0;

  newGame();

  function newGame() {
    numOfGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    p.innerText = "Guess a number from 1 to 100.";
    form.reset();
    submit.disabled = false;
  }

  function validInt(input) {
    return Number.isInteger(input) && input <= 100 && input > 0;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let message = "";
    let guess = parseInt(input.value, 10);
    if (!validInt(guess)) {
      message = "Invalid input. Please guess a number from 1 to 100.";
    } else {
      numOfGuesses += 1;

      if (guess < answer) message = `My answer is greater than ${guess}.`;
      else if (guess > answer) message = `My answer is less than ${guess}.`;
      else {
        message = `You guessed it! It took you ${numOfGuesses} guesses.`;
        submit.disabled = true;
      }
    }

    p.innerText = message;
  });

  document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    newGame();
  });
});