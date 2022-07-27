const whatType = item => console.log(typeof item);

whatType('true'); // => string
whatType(false); // => boolean
whatType(1.5); // => number
whatType(2); // => number
whatType(undefined); // => undefined
whatType({ foo: 'bar' }); // => object