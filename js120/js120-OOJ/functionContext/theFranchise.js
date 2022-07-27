let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies()); // [ 'undefined 1', 'undefined 2', 'undefined 3' ]

/*
This bug is because of execution context loss. Namely, the callback function
that's passed as an argument to `map` in `allMovies` loses its execution context
and therefore, `this` inside the callback references the global object. Thus,
`this.name` evaluates to `undefined` on each iteration.
We can deal with this bug in several ways:
*/

//1
franchise.allMovies = function() {
  return [1, 2, 3].map(number => this.name + ' ' + number);
};

console.log(franchise.allMovies());
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

//2
franchise.allMovies = function() {
  let self = this;
  return [1, 2, 3].map(function(number) {
    return self.name + ' ' + number;
  });
};

//3
franchise.allMovies = function() {
  let getMovies = function(number) {
    return this.name + ' ' + number;
  }.bind(this);

  return [1, 2, 3].map(getMovies);
};