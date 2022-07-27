//1
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }

  play() {
    return "Go!";
  }
}

let bingo = new Bingo();
console.log(bingo.play()); // Go!

/*
If we defined a `play` method to the `Bingo` class, it would override the `play`
method inherited from the `Game` class. This means that when we'd call `play` on
an instance of `Bingo`, JS would start looking for such a method in the
instance's prototype chain. Because `Bingo` comes first when going up the
prototype chain, the `play` method in `Bingo` would execute and JS would stop
looking further up in the chain for it. We call this "method overriding".
*/

//2
class Greeting {
  greet(msg) {
    console.log(msg);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}

let hello = new Hello();
let goodbye = new Goodbye();
hello.hi();
goodbye.bye();
