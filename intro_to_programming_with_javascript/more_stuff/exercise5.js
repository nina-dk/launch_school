function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//The doSomething function takes a string as an argument and then splits
//it at each space character, creating an array of the string's components.
//It then reverses the array. Finally, it returns a new array containing
//the lengths of each of the elements of the string-produced array.