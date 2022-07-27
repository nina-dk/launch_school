//1. What naming convention separates constructor functions
//  from other functions?

/*
Their names are capitalized, like so:
function Car(args) {
  //function body
}
*/

//2
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?

/*
Because we're not using the `new` keyword, the invocation of the `Lizard`
function, on line 17, returns `undefined` since there's no explicit return
value in the function. On line 18, we're trying to access a method called
`scamper` on `undefined` which will raise a `TypeError`.
*/

//3
lizzy = new Lizard();
lizzy.scamper();