let myArray = {
  0: 'first value',
  1: 'second value',
  2: 'third value'
};

myArray.length = Object.keys(myArray).length;

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}