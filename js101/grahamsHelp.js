let zero = 0;
let thisIsZero = zero; // => 0
thisIsZero = 1; // => 1
//Reassignment only affects `thisIsZero` because each variable
//is assigned to a COPY of the number 0
zero; // => 0

let numbers = {one: 1, two: 2};
let theseAreNumbers = numbers; // => {one: 1, two: 2}
//Mutating `theseAreNumbers` will affect `numbers` because
//both variables point to the SAME object in memory
theseAreNumbers.three = 3; // => {one: 1, two: 2, three: 3}
numbers; // => {one: 1, two: 2, three: 3}
//But when we reassign `theseAreNumbers` to point to another object
//that doesn't affect the value of the original variable `numbers`
theseAreNumbers = {one: 1, two: 2};
numbers; // => {one: 1, two: 2, three: 3}

// the same thing happens at the function level, just within a closure
function changeValues(arg1, arg2) {
  //Example of pass-by-value (primitive value)
  arg1 = 100; // re-assignment will occur, but it won't affect the value of
  //the variable in the global scope because it's pass-by-value (primitive value)

  //Example of pass-by-reference (object)
  arg2.key = 'some_val'; // not re-assigning arg2, but a property of arg2, so changes will propagate to the passed in object
  arg2.unset_key = 'some_other_val' // we can even add properties that will propagate via assignment
  //Up to this point changes to `arg2` will affect the object passed as an argument
  //But not the following because we reassign the LOCAL variable `arg2` to point
  //to an entirely different object, which is in this case: {}.
  arg2 = {}; // we can even re-assign arg2, but now that the value has been re-assigned changes cannot propagate (but previous ones do)
  arg2.key = 'diff_val'; // not propagated
}

let testPrimitiveArg = 0;
let testObjectArg = {key: ''};
// the VALUE that is stored in memory IDENTIFIED by testPrimitiveArg / testObjectArg is being passed in
changeValues(testPrimitiveArg, testObjectArg);
testPrimitiveArg; // => 0
testObjectArg; // => {key: 'some_val', unset_key: 'some_other_val'}