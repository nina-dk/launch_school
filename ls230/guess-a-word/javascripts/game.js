$(() => {
  const resultMsg = $("#message");
  const wordContainer = $("#spaces");
  const apples = $("#apples");
  const guessedLetters = $("#guesses");
  const replay = $("#replay");
  replay.on("click", () => new Game());

  const randomWord = (function() {
    let words = ["abacus", "quotient", "octothorpe", "proselytize", "stipend"];
  
    return () => {
      let randomIdx = Math.floor(Math.random() * words.length);
      return words.splice(randomIdx, 1)[0];
    }
  })();

  class Game {
    static MAX_WRONG_GUESSES = 6;
    static A_KEY_CODE = 65;
    static Z_KEY_CODE = 90;
  
    constructor() {
      this.resetGame();
      this.play();
    }
  
    pickWord() {
      this.word = randomWord();
  
      if (!this.word) {
        resultMsg.text("Sorry, I've run out of words!");
      }
    }
  
    addBlanks() {
      if (this.word) {
        this.word.split("").forEach(_ => wordContainer.append($("<span>")));
      }
    }

    checkGuess(e) {
      if (e.keyCode < Game.A_KEY_CODE || e.keyCode > Game.Z_KEY_CODE 
          || this.guesses.includes(e.key)) return;

      if (!this.word.includes(e.key)) {
        this.incorrectGuesses += 1;
        apples.removeClass();
        apples.addClass(`guess_${this.incorrectGuesses}`);
      } else {
        let indices = this._findLetterIndices(e.key);
        let blanks = wordContainer.children("span");

        indices.forEach(idx => blanks.eq(idx).text(e.key));
      }

      this.guesses.push(e.key);
      this.displayGuessedLetter(e.key);
      if (this.gameOver()) this.endGame();
    }

    displayGuessedLetter(letter) {
      let span = $("<span>").text(letter);
      guessedLetters.append(span);
      console.log(this);
    }

    ranOutOfGuesses() {
      return this.incorrectGuesses >= Game.MAX_WRONG_GUESSES;
    }

    isWon() {
      return this.word.split("").every(letter => this.guesses.includes(letter));
    }

    gameOver() {
      return this.ranOutOfGuesses() || this.isWon();
    }

    endGame() {
      if (this.ranOutOfGuesses()) {
        resultMsg.text("Sorry! You're out of guesses!");
        $("body").addClass("lose");
      } else {
        resultMsg.text("You win!");
        $("body").addClass("win");
      }

      replay.show();
      $(document).unbind("keydown");
    }

    _findLetterIndices(letter) {
      let indices = [];
      this.word.split("").forEach((char, idx) => {
        if (letter === char) indices.push(idx);
      });

      return indices;
    }

    bindEvents() {
      $(document).on("keydown", this.checkGuess.bind(this));
    }
  
    resetGame() {
      this.word = null;
      this.guesses = [];
      this.incorrectGuesses = 0;

      wordContainer.children("span").remove();
      guessedLetters.children("span").remove();
      $("body").removeClass();
      apples.removeClass();
      resultMsg.empty();
      replay.hide();
    }
  
    play() {
      this.pickWord();
      this.addBlanks();
      this.bindEvents();
    }
  }

  new Game();
});