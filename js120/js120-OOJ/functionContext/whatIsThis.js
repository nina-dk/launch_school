let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
Logs: NaN
On line 4, the `this` keyword references the global object.
Since there are no `firstName` and `lastName` properties defined on `global`,
`this.firstName` and `this.lastName` both evaluate to `undefined`.
`undefined + undefined` then evaluates to `NaN`.
*/