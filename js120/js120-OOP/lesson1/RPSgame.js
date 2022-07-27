const rlSync = require("readline-sync");
const WINNING_COMBOS = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Spock: ["Rock", "Scissors"],
  Lizard: ["Paper", "Spock"]
};
const MOVES = Object.keys(WINNING_COMBOS);

function createPlayer() {
  return {
    move: null,
    score: 0,
    movesHistory: []
  };
}

function createHuman() {
  return Object.assign({
    choose() {
      let chosenMove = rlSync.question(
        "Pick your move: 1. Rock, 2. Paper, 3. Scissors, 4. Spock, 5. Lizard\n", {
          limit: ["1", "2", "3", "4", "5"],
          limitMessage: "Please pick a number from 1-5."
        }
      );
      this.move = MOVES[chosenMove - 1];
      this.movesHistory.push(this.move);
    }
  }, createPlayer());
}

// eslint-disable-next-line max-lines-per-function
function createComputer() {
  return Object.assign({
    movesLossRate: {},

    initializeMovesLossRate() {
      for (let move of MOVES) {
        this.movesLossRate[move] = {total: 0, userWins: 0};
      }
    },

    choose() {
      let userWinRates = Object.entries(this.movesLossRate)
        .map(([computerMove, userWinRate]) => {
          return [computerMove, (Math.round(
            (userWinRate.userWins / userWinRate.total) * 100)
          ) || 0];
        });

      if (userWinRates.every(([_, userWinRate]) => userWinRate >= 60)) {
        let randomIdx = Math.floor(Math.random() * MOVES.length);
        this.move = MOVES[randomIdx];
      } else {
        let smartMoves = userWinRates.filter(([_, userWinRate]) =>
          userWinRate < 60);
        let randomIdx = Math.floor(Math.random() * smartMoves.length);
        this.move = smartMoves[randomIdx][0];
      }

      this.movesHistory.push(this.move);
      this.movesLossRate[this.move].total += 1;
    }
  }, createPlayer());
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.clear();
    console.log(`\nWelcome to ${MOVES.join(", ")}!\n` +
      "The first to achieve 5 wins is the GRAND WINNER!\n");
  },

  displayGoodbyeMessage() {
    console.log("\nTill next time!");
  },

  compare(humanMove, computerMove) {
    console.log(`You chose ${humanMove} and the computer chose ${computerMove}.`);

    if (humanMove === computerMove) return "It's a tie!";
    else if (WINNING_COMBOS[humanMove].includes(computerMove)) return "You win!";
    else return "Computer wins!";
  },

  displayMovesHistory() {
    console.log(
      `Your moves: ${this.human.movesHistory.join(", ")}\n
Computer moves: ${this.computer.movesHistory.join(", ")}\n`
    );
  },

  displayWinner() {
    let result = this.compare(this.human.move, this.computer.move);
    if (result === "You win!") {
      this.human.score += 1;
      this.computer.movesLossRate[this.computer.move].userWins += 1;
    } else if (result === "Computer wins!") {
      this.computer.score += 1;
    }

    console.log(`${result}
Your score: ${this.human.score} - Computer score: ${this.computer.score}`);
  },

  displayGrandWinner() {
    const WIN_SCORE = 5;
    let winner;
    if (this.human.score === WIN_SCORE) winner = "You are";
    else if (this.computer.score === WIN_SCORE) winner = "Computer is";

    if (winner) {
      console.log("\n!!!" + winner + " the GRAND WINNER!!!\n");
      [this.human.score, this.computer.score] = [0, 0];
    }
  },

  playAgain() {
    let answer = rlSync.question(
      "Would you like to play again? (y/n)\n", {limit: ["yes", "y", "no", "n"]}
    ).toLowerCase();

    return ["yes", "y"].includes(answer);
  },

  play() {
    this.displayWelcomeMessage();
    this.computer.initializeMovesLossRate();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.displayGrandWinner();
      if (!this.playAgain()) break;
      else console.clear();
      this.displayMovesHistory();
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();