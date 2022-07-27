
// function test() {
//   bar();

//   if (true) {
//     var bar = 'hello';
//   }

//   function bar() {
//     console.log('world');
//   }

//   return bar;
// }

// console.log(test());
// //world
// //hello

// ////////


// function test() {
//   function bar() {
//     console.log('world');
//   }

//   bar();

//   if (true) {
//     bar = 'hello';
//   }

//   return bar;
// }


function bar() {
  console.log(foo);
}

let foo;
bar();          // logs undefined
foo = 'hello';