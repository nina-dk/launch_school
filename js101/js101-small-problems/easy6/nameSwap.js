//input: string of Name + " " + Last name
//output: string of Last name + ", " + Name
//rules: - no empty string case to consider
//data structures: array
//Algorithm:
//Create an array and push the input string in it, split in " "
//Reverse the array
//Join the array back into a string with the string ", " as a separator
//Print the new swapped string

function swapName(name) {
  return name.split(" ").reverse().join(", ");
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

//Further exploration

function swapName(name) {
  let array = name.split(" ");
  return `${array.pop()}, ${array.join(" ")}`
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"