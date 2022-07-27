const rlSync = require("readline-sync");

class Square {
  static EMPTY = " ";
  static MIDDLE_SQUARE = "5";

  constructor(marker = Square.EMPTY) {
    this.marker = marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  toString() { return this.marker }

  isEmpty() {
    return this.getMarker() === Square.EMPTY;
  }
}

class Board {
  constructor() {
    this.initialize();
  }

  initialize() {
    for (let key = 1; key <= 9; key += 1) {
      this[key] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this[1]}  |  ${this[2]}  |  ${this[3]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this[4]}  |  ${this[5]}  |  ${this[6]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this[7]}  |  ${this[8]}  |  ${this[9]}`);
    console.log("     |     |");
    console.log("");
  }

  clearAndDisplay() {
    console.clear();
    console.log("\n");
    this.display();
  }

  getEmptySquares() {
    return Object.keys(this)
      .filter(squareNum => this[squareNum].isEmpty());
  }

  isFull() {
    return Object.values(this).every(square => !square.isEmpty());
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.choice = null;
  }
}

class Human extends Player {
  static MARKER = "X";

  constructor() {
    super(Human.MARKER);
  }

  joinOr(nums, del = ", ", lastDel = "or") {
    if (nums.length <= 2) return nums.join(` ${lastDel} `);

    let numsToJoin = nums.slice(0, nums.length - 1);
    let lastNum = nums[nums.length - 1];

    return `${numsToJoin.join(del)}${del}${lastDel} ${lastNum}`;
  }

  play(emptySquares) {
    this.choice = rlSync.question(`Pick an empty square number: ${this.joinOr(emptySquares)}.\n`, {
      limit: emptySquares, limitMessage: `Please pick one of the empty squares.`
    });
  }
}

class Computer extends Player {
  static MARKER = "O";

  constructor() {
    super(Computer.MARKER);
  }

  chooseRandomSquare(emptySquares) {
    let randomIdx = Math.floor(Math.random() * emptySquares.length);
    this.choice = emptySquares[randomIdx];
  }
}

class Score {
  static WIN_SCORE = 3;

  constructor() {
    this.computer = 0;
    this.human = 0;
  }

  increment(player) {
    this[player] += 1;
  }

  display() {
    console.log(`\nYour score: ${this.human}, Computer score: ${this.computer}\n`);
  }
}

class TTTGame {
  static ROWS = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];

  constructor() {
    this.human = new Human();
    this.computer = new Computer();
    this.board = new Board();
    this.score = new Score();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("\nWelcome to Tic Tac Toe!\n" +
      `The first to win ${Score.WIN_SCORE} times is The Grand Winner!`);
  }

  displayGoodbyeMessage() {
    console.log("\nThank you for playing Tic Tac Toe!");
  }

  humanMoves() {
    this.human.play(this.board.getEmptySquares());
    this.board[this.human.choice].setMarker(Human.MARKER);
  }

  computerOffense() {
    return this.criticalSquare(Computer.MARKER);
  }

  computerDefense() {
    return this.criticalSquare(Human.MARKER);
  }

  computerMoves() {
    let smartSq = this.computerOffense() || this.computerDefense();

    if (smartSq) this.computer.choice = smartSq;
    else if (this.board[Square.MIDDLE_SQUARE].isEmpty()) {
      this.computer.choice = Square.MIDDLE_SQUARE;
    } else this.computer.chooseRandomSquare(this.board.getEmptySquares());

    this.board[this.computer.choice].setMarker(Computer.MARKER);
  }

  playerMoves(player) {
    if (player === this.human) this.humanMoves();
    else this.computerMoves();
  }

  switchPlayer(currentPlayer) {
    return currentPlayer === this.human ? this.computer : this.human;
  }

  criticalSquare(marker) {
    let square;

    TTTGame.ROWS.some(row => {
      let markers = [this.board[row[0]].getMarker(),
        this.board[row[1]].getMarker(), this.board[row[2]].getMarker()];

      let emptyIdx = markers.findIndex(marker => marker === Square.EMPTY);

      if (emptyIdx !== -1) {
        markers.splice(emptyIdx, 1);

        if (markers[0] === marker && markers[0] === markers[1]) {
          square = row[emptyIdx];
          return true;
        }
      }
      return false;
    });

    return square;
  }

  isWinner(playerMarker) {
    return TTTGame.ROWS.some(row => {
      return row.every(sq => this.board[sq].getMarker() === playerMarker);
    });
  }

  someoneWon() {
    return this.isWinner(Human.MARKER) ||
      this.isWinner(Computer.MARKER);
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  updateScore() {
    if (this.isWinner(Human.MARKER)) {
      this.score.increment("human");
    } else if (this.isWinner(Computer.MARKER)) {
      this.score.increment("computer");
    }
  }

  displayResults() {
    if (this.someoneWon()) {
      if (this.isWinner(Human.MARKER)) {
        console.log("You won!");
      } else {
        console.log("Computer won! Boohoo");
      }
    } else {
      console.log("It's a tie!");
    }

    this.score.display();
  }

  grandWinner() {
    if (this.score.human === Score.WIN_SCORE) return "human";
    else if (this.score.computer === Score.WIN_SCORE) return "computer";
    return null;
  }

  displayGrandWinner(winner) {
    if (winner === "human") {
      console.log("You are The Grand Winner!!!");
    } else {
      console.log("Computer is The Grand Winner...");
    }
  }

  playAgain() {
    let answer = rlSync.question("Would you like to play again? (y/n)\n", {
      limit: ["y", "Y", "n", "N"], limitMessage: "Please input 'y' or 'n'."
    }).toLowerCase();

    return answer === "y";
  }

  playSingleRound(currentPlayer) {
    while (true) {
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;
      this.board.clearAndDisplay();
      currentPlayer = this.switchPlayer(currentPlayer);
    }

    this.board.clearAndDisplay();
    this.updateScore();
    this.displayResults();
  }

  playMatch() {
    this.board.display();
    let firstPlayer = this.human;
    let currentPlayer = firstPlayer;

    while (true) {
      this.playSingleRound(currentPlayer);

      if (this.grandWinner()) {
        this.displayGrandWinner(this.grandWinner());
        break;
      } else if (!this.playAgain()) break;

      this.board.initialize();
      currentPlayer = this.switchPlayer(currentPlayer);
      this.board.clearAndDisplay();
    }
  }

  play() {
    this.displayWelcomeMessage();
    this.playMatch();
    this.displayGoodbyeMessage();
  }
}

let game = new TTTGame();
game.play();