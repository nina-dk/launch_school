function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

//The output will be: Not Empty
//because the [] (empty array) isn't a falsy value, even though it is
//empty.