let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//logs: [1, 4, 3]
//On line 2, the array2 variable gets assigned to the same array as array1,
//i.e. it points to the same memory location as array1.
//Then the code on line 3 mutates the element at index 1
//of the array [1, 2, 3], thus the same array, pointed to
//by both array1 and array2 variables, is now [1, 4, 3].