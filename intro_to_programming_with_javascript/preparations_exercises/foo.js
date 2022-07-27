let foo = 'bar';
console.log(foo);
foo;

// Running the file outputs => bar
// Running the code in the node REPL first returns => undefined,
// then outputs => bar //undefined and lastly, returns the string 'bar'.
// The same result occurs by running the code in the Chrome console REPL
// (provided we run one line at a time).