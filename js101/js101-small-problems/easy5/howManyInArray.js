//input/output: array / each element of the array paired with the number
//              of times it occurs in the array
//rules: - words are to be considered case sensitive
//data structures: object, entries method
//algorithm:
//START
//SET empty object
//Iterate over the given array
//IF the current element exists in the object
//  increment its value by 1
//ELSE create a new property with the element as property name and 1 as value
//PRINT the properties of the object on separate lines
//(keys will be separated from values with a =>)
//END

function countOccurrences(array) {
  let occurences = {};
  array.forEach(el => {
    el = el.toLowerCase();
    occurences[el] ? occurences[el] += 1 : occurences[el] = 1;
  });

  for (let [key, value] of Object.entries(occurences)) {
    console.log(`${key} => ${value}`);
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
            'suv', 'motorcycle', 'motorcycle', 'Car', 'tRuck'];

countOccurrences(vehicles);