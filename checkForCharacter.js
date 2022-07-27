// function clone(obj) {
//   let clonedObj = {};
//   let objEntries = Object.entries(obj);
//   clonedObj = Object.fromEntries(objEntries);
//   return clonedObj;
// }

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let clonedPerson = clone(person);
// person.age = 34;

function clone(obj) {
  return Object.assign({}, obj)
};
//Create shallow copy of an object, meaning the first layer of properties is simply
//copied, but the second layer (if any) is copied as a *reference* (so it is the same
//object, as seen in the strict equality comparison below).
let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.name.isStageName = false;
// person.age = 34;

console.log(person.name === clonedPerson.name);
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
console.log(person);
console.log(clonedPerson);