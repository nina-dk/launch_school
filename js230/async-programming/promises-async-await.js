//1
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Launch School"), 2000);
});

promise1.then((res) => console.log(res));

//2
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error: Not Launch School"), 2000);
});

promise2.catch((err) => console.log(err));