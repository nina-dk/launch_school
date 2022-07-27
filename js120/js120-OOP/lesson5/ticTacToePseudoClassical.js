const rlSync = require("readline-sync");

function Square(marker = Square.EMPTY_SQUARE) {
  this.marker = marker;
}

Square.EMPTY_SQUARE = " ";

Square.prototype.setMarker = function (marker) {
  this.marker = marker;
};

Square.prototype.getMarker = function() {
  return this.marker;
};

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.isEmpty = function() {
  return this.getMarker() === Square.EMPTY_SQUARE;
};

function Board() {
  for (let key = 1; key <= 9; key += 1) {
    this[key] = new Square();
  }
}

Board.prototype.display = function() {
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
};

Board.prototype.clearAndDisplay = function() {
  console.log("\n");
  this.display();
};

Board.prototype.getEmptySquares = function() {
  return Object.keys(this)
    .filter(squareNum => this[squareNum].isEmpty());
};

Board.prototype.isFull = function() {
  return Object.values(this).every(square => !square.isEmpty());
};

function Player(marker) {
  this.marker = marker;
  this.choice = null;
}

Player.HUMAN_MARKER = "X";
Player.COMPUTER_MARKER = "O";

function Human() {
  Player.call(this, Player.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.play = function(emptySquares) {
  this.choice = rlSync.question(`Pick an empty square number: ${emptySquares.join(", ")}.\n`, {
    limit: emptySquares, limitMessage: `Please pick one of the empty squares.`
  });
};

function Computer() {
  Player.call(this, Player.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.play = function(emptySquares) {
  let randomIdx = Math.floor(Math.random() * emptySquares.length);
  this.choice = emptySquares[randomIdx];
};

function TTTGame() {
  this.human = new Human();
  this.computer = new Computer();
  this.board = new Board();
}

TTTGame.prototype.displayWelcomeMessage = function() {
  console.clear();
  console.log("\nWelcome to Tic Tac Toe!");
};

TTTGame.prototype.displayGoodbyeMessage = function() {
  console.log("\nThank you for playing Tic Tac Toe!");
};

TTTGame.prototype.humanMoves = function() {
  this.human.play(this.board.getEmptySquares());
  this.board[this.human.choice].setMarker(Player.HUMAN_MARKER);
};

TTTGame.prototype.computerMoves = function() {
  this.computer.play(this.board.getEmptySquares());
  this.board[this.computer.choice].setMarker(Player.COMPUTER_MARKER);
};

TTTGame.prototype.isWinner = function(playerMarker) {
  return TTTGame.ROWS.some(row => {
    return row.every(sq => this.board[sq].getMarker() === playerMarker);
  });
};

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(Player.HUMAN_MARKER) ||
    this.isWinner(Player.COMPUTER_MARKER);
};

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
};

TTTGame.prototype.displayResults = function() {
  if (this.someoneWon()) {
    console.log(
      this.isWinner(Player.HUMAN_MARKER) ? "You won!" : "Computer won! Boohoo"
    );
  } else {
    console.log("It's a tie!");
  }
};

TTTGame.prototype.play = function() {
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
};

TTTGame.ROWS = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]];

let game = new TTTGame();
game.play();