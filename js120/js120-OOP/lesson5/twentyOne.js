const rlSync = require("readline-sync");

class Card {
  static SUITS = ["♥", "♦", "♣", "♠"];
  static RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  static FACECARD_VAL = 10;
  static ACE_VALUES = [1, 11];

  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  isAce() {
    return this.rank === "A";
  }

  isFaceCard() {
    return ["J", "Q", "K"].includes(this.rank);
  }
}

class Deck {
  constructor() {
    this.reset();
  }

  reset() {
    this.cards = [];
    Card.SUITS.forEach(suit => {
      Card.RANKS.forEach(val => this.cards.push(new Card(val, suit)));
    });
  }

  dealOne(idx) {
    return this.cards.splice(idx, 1)[0];
  }
}

class Participant {
  static MAX_HAND_VAL = 21;

  constructor() {
    this.resetHand();
  }

  resetHand() {
    this.hand = [];
    this.handValue = 0;
  }

  recalculateAces() {
    for (let idx = 0; idx < this.hand.length && this.busted(); idx += 1) {
      if (this.hand[idx].isAce()) this.handValue -= 10;
    }
  }

  calchandValue() {
    let values = this.hand.map(card => {
      if (card.isFaceCard()) return Card.FACECARD_VAL;
      else if (card.isAce()) return Card.ACE_VALUES[1];
      return Number(card.rank);
    });

    this.handValue = values.reduce((sum, currVal) => sum + currVal, 0);
    if (this.busted()) this.recalculateAces();
  }

  busted() {
    return this.handValue > Participant.MAX_HAND_VAL;
  }
}

class Player extends Participant {
  static INITIAL_BUDGET = 5;
  static BROKE_BUDGET = 0;
  static RICH_BUDGET = 10;

  constructor() {
    super();
    this.budget = Player.INITIAL_BUDGET;
  }

  winBet() {
    this.budget += 1;
  }

  loseBet() {
    this.budget -= 1;
  }

  isBroke() {
    return this.budget === Player.BROKE_BUDGET;
  }

  isRich() {
    return this.budget === Player.RICH_BUDGET;
  }

  adjustBudget(winner) {
    if (winner === "player") this.winBet();
    else if (winner === "dealer") this.loseBet();
  }

  displayBudget() {
    console.log(`\nYou've got $${this.budget}.`);
  }
}

class Dealer extends Participant {
  static MIN_HAND_VALUE = 17;

  constructor() {
    super();
  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.dealer = new Dealer();
    this.player = new Player();
  }

  restart() {
    console.clear();
    this.deck.reset();
    this.dealer.resetHand();
    this.player.resetHand();
  }

  displayWelcomeMsg() {
    let border = Card.SUITS.join("").padEnd(36, Card.SUITS.join(""));

    console.clear();
    console.log("");
    console.log(border);
    console.log(`\n      Welcome to Twenty One!`);
    console.log(`\n   You've got $${Player.INITIAL_BUDGET} at your disposal.`);
    console.log(`     Make it $${Player.RICH_BUDGET} or go broke!`);
    console.log(`\n   (Press Enter/Return to start)`);
    console.log("");
    console.log(border);
    rlSync.question("");
    console.clear();
  }

  displayGoodbyeMsg() {
    let decor = Card.SUITS.join("");

    console.log(`\n ${decor} Farewell ${decor}`);
  }

  displayFullHand(player) {
    let whose = player === "player" ? "    Your" : "Dealer's";
    let hand = this[player].hand.map(card => card.rank + " " + card.suit);

    console.log(`${whose} hand: ${hand.join(" | ")}\n`);
  }

  displayHandsWithHidden() {
    let dealerVisibleCard = this.dealer.hand[0];

    console.log(`\nDealer's hand: ${dealerVisibleCard.rank} ${dealerVisibleCard.suit} | ?\n`);
    this.displayFullHand("player");
  }

  revealHands() {
    console.log("");
    this.displayFullHand("dealer");
    this.displayFullHand("player");
  }

  displayHandValue(player) {
    this[player].calchandValue();
    let whose = player === "player" ? "Your" : "Dealer's";

    console.log(`${whose} total is: ${this[player].handValue}.`);
  }

  deal(player) {
    let randomIdx = Math.floor(Math.random() * this.deck.cards.length);
    this[player].hand.push(this.deck.dealOne(randomIdx));
  }

  initialDeal(player) {
    this.deal(player);
    this.deal(player);
  }

  playerTurn() {
    this.displayHandValue("player");

    while (!this.player.busted()) {
      let move = rlSync.question("Would you like to HIT or STAY? (h/s)\n", {
        limit: ["h", "H", "s", "S"], limitMessage: "Please type 'h' or 's'."
      }).toLowerCase();

      if (move === "h") this.deal("player");
      else break;

      console.clear();
      this.displayHandsWithHidden();
      this.displayHandValue("player");
    }
  }

  dealerTurn() {
    console.clear();
    console.log("\nDealer's turn...\n");
    this.displayFullHand("dealer");
    this.displayHandValue("dealer");

    while (this.dealer.handValue < Dealer.MIN_HAND_VALUE) {
      this.deal("dealer");
      console.log("\nThe Dealer chose to hit.\n");
      this.displayFullHand("dealer");
      this.displayHandValue("dealer");
      console.log("");
      rlSync.question("Press Enter/Return to continue.");
      console.clear();
    }
  }

  whoWon() {
    let winner;
    if (this.dealer.busted()) winner = "player";
    else if (this.player.busted()) winner = "dealer";
    else if (this.player.handValue > this.dealer.handValue) winner = "player";
    else if (this.player.handValue < this.dealer.handValue) winner = "dealer";

    return winner;
  }

  displayResults() {
    this.revealHands();
    this.displayHandValue("dealer");
    this.displayHandValue("player");
    let winner = this.whoWon();
    if (winner === "player") console.log("\nYou won!");
    else if (winner === "dealer") console.log("\nDealer beat you.");
    else console.log("\nIt's a tie.");

    this.player.displayBudget();
  }

  gameOver() {
    return this.player.isBroke() || this.player.isRich();
  }

  playAgain() {
    let answer = rlSync.question("Do you want another round? (y/n)\n", {
      limit: ["y", "Y", "n", "N"], limitMessage: "Please type 'y' or 'n'."
    }).toLowerCase();

    return "y" === answer;
  }

  playSingleRound() {
    this.initialDeal("player");
    this.initialDeal("dealer");
    this.displayHandsWithHidden();
    this.playerTurn();

    if (!this.player.busted()) {
      this.dealerTurn();
    }

    if (this.player.busted()) console.log("You BUSTED!");
    if (this.dealer.busted()) console.log("\nDealer BUSTED!");
    this.player.adjustBudget(this.whoWon());
    this.displayResults();
  }

  play() {
    this.displayWelcomeMsg();

    while (true) {
      this.playSingleRound();
      if (this.gameOver() || !this.playAgain()) break;
      this.restart();
    }

    if (this.gameOver()) {
      if (this.player.isRich()) {
        console.log("Congratulations!!! You're rich!");
      } else {
        console.log("Please, leave. You're broke.");
      }
    }

    this.displayGoodbyeMsg();
  }
}

let game = new TwentyOneGame();
game.play();