const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// => TypeError: Assignment to constant variable.
//The above code logs the first three greetings and then throws a TypeError
//when we try to reassign the NAME variable to a different value, as
//reassignment is not allowed/possible for constant variables.