const rlSync = require("readline-sync");

const Square = {
  EMPTY_SQUARE: " ",

  init(marker = Square.EMPTY_SQUARE) {
    this.marker = marker;
    return this;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  getMarker() {
    return this.marker;
  },

  toString() {
    return this.marker;
  },

  isEmpty() {
    return this.getMarker() === Square.EMPTY_SQUARE;
  }
};

const Board = {
  init() {
    this.squares = {};

    for (let key = 1; key <= 9; key += 1) {
      this.squares[key] = Object.create(Square).init();
    }

    return this;
  },

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log("     |     |");
    console.log("");
  },

  clearAndDisplay() {
    console.log("\n");
    this.display();
  },

  getEmptySquares() {
    return Object.keys(this.squares)
      .filter(squareNum => this.squares[squareNum].isEmpty());
  },

  isFull() {
    return Object.values(this.squares).every(square => !square.isEmpty());
  }
};

const Player = {
  HUMAN_MARKER: "X",
  COMPUTER_MARKER: "O",

  initialize(marker) {
    this.marker = marker;
    this.choice = null;
    return this;
  }
};

let Human = Object.create(Player);

Human.init = function() {
  return this.initialize(Player.HUMAN_MARKER);
};

Human.play = function(emptySquares) {
  this.choice = rlSync.question(`Pick an empty square number: ${emptySquares.join(", ")}.\n`, {
    limit: emptySquares, limitMessage: `Please pick one of the empty squares.`
  });
};

let Computer = Object.create(Player);

Computer.init = function() {
  return this.initialize(Player.COMPUTER_MARKER);
};

Computer.play = function(emptySquares) {
  let randomIdx = Math.floor(Math.random() * emptySquares.length);
  this.choice = emptySquares[randomIdx];
};

const TTTGame = {
  ROWS: [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]],

  init() {
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    this.board = Object.create(Board).init();
    return this;
  },

  displayWelcomeMessage() {
    console.clear();
    console.log("\nWelcome to Tic Tac Toe!");
  },

  displayGoodbyeMessage() {
    console.log("\nThank you for playing Tic Tac Toe!");
  },

  humanMoves() {
    this.human.play(this.board.getEmptySquares());
    this.board.squares[this.human.choice].setMarker(Player.HUMAN_MARKER);
  },

  computerMoves() {
    this.computer.play(this.board.getEmptySquares());
    this.board.squares[this.computer.choice].setMarker(Player.COMPUTER_MARKER);
  },

  isWinner(playerMarker) {
    return TTTGame.ROWS.some(row => {
      return row.every(sq => {
        return this.board.squares[sq].getMarker() === playerMarker;
      });
    });
  },

  someoneWon() {
    return this.isWinner(Player.HUMAN_MARKER) ||
      this.isWinner(Player.COMPUTER_MARKER);
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  displayResults() {
    if (this.someoneWon()) {
      console.log(
        this.isWinner(Player.HUMAN_MARKER) ? "You won!" : "Computer won! Boohoo"
      );
    } else {
      console.log("It's a tie!");
    }
  },

  play() {
    this.displayWelcomeMessage();
    this.board.display();

    while (true) {
      this.humanMoves();
      console.clear();
      if (this.gameOver()) break;
      this.computerMoves();
      if (this.gameOver()) break;
      this.board.clearAndDisplay();
    }

    this.board.clearAndDisplay();
    this.displayResults();
    this.displayGoodbyeMessage();
  }
};

let game = Object.assign(TTTGame).init();
game.play();