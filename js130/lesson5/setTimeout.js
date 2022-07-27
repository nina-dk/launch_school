//1
function delayLog() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => console.log(i), i * 1000)
  }
}

delayLog();
// 1  // 1 second later
// 2  // 1 second later (2 seconds after start)
// 3  // 1 second later (3 seconds after start)
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10

//3
setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);

//4
setTimeout(function() {
  setTimeout(function() {
    q(); 
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();

//Order of execution: g(), f(), d(), z(), n(), s(), q()

//5
function afterNSeconds(callback, n) {
  setTimeout(callback, n * 1000);
}

afterNSeconds(() => console.log("test"), 2);