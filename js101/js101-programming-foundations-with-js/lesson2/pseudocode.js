/* 1. a function that returns the sum of two numbers

Given two numbers

Create a function the takes two arguments and returns their sum.

#FORMAL

START

SET num1 = first number
SET num2 = second number

Define a sum(arg1, arg2) function that returns: arg1 + arg2
Pass the two numbers to the function

PRINT sum(num1, num2)

END

#

2. a function that takes an array of strings,
and returns a string that is all those strings concatenated together

Given an array of strings

Set a empty string variable called string.
Iterate over the array, adding each string of the array to the string variable.
Return the string.

#FORMAL

START

given an array of strings

SET string = ""
SET iterator = 0
WHILE iterator < array.length
  string += array[iterator]
  iterator += 1

PRINT string

END

#

3. a function that takes an array of integers,
and returns a new array with every other element

Given an array of integers

Create a new, empty array called "evens"
that will contain every other element of the given array.
Set an iterator equal to zero.
Iterate over the given array and for every element,
push the array[iterator] elements to "evens" and increment
the iterator by 2, to skip the next element.

Return the "evens" array.

#FORMAL

START

given an array of integers

SET evens = []
SET iterator = 0
WHILE iterator < array.length
  push the array[iterator] element to "evens"
  iterator += 2

PRINT "evens"

END

#
*/