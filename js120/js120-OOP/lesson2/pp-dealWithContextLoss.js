//1
//Expected output: "Christopher Turk is a Surgeon"
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/*
Logs: undefined undefined is a undefined.
When we're passing `turk.getDescription` as an argument to `logReturnVal` it
loses its original context. The context of the `func()` function call in the
`logReturnVal` function's body, on line 14, is now the global object. Since
the global object doesn't have properties named `firstName`, `lastName` or
`occupation`, `undefined` is returned when we try to access them on it.
*/

//2
function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

//3
let getTurkDescription = turk.getDescription.bind(turk);
console.log(getTurkDescription());

//4
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();
// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

/*
Logs:
undefined: Arena
undefined: Daggerfall
undefined: Morrowind
undefined: Oblivion
undefined: Skyrim

The callback function of the `forEach` method is passed as an argument to it, and
therefore, is stripped of its context. Inside the function body, `this` will refer
to the global object instead of the `TESgames` object, and so `this.seriesTitle`
will evaluate to `undefined` since there's no such property in the global object.
*/

//5
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
  
    self.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

//6
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();

//7
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => console.log(this.seriesTitle + ': ' + title));
  }
};

TESgames.listGames();


//8
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

/*
The value of `foo.a` is still `0` because when we invoke the `increment` function
in the body of the `incrementA` method, on line 121, it's a regular function call
so its execution context is the global object, instead of the `foo` object. Since
there is no property `a` in the global object, `increment` will have no effect.
*/

//9
foo = {
  a: 0,
  incrementA: function() {
    let increment = () => this.a += 1;

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);