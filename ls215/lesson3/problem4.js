// You are given a list of numbers in a "short-hand" range where only the significant part
// of the next number is written because we know the numbers are always increasing
// (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different
// separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent
// the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:3, 1:2" --> 1, 2, 3, 11, 12
// "1..3, 1..2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611


// 7, 2
// 12 ends with 2 and is > 7 ? yes
// 104, 02
// 102 ends with 02 and is  > 104 ? no
// 202 -- ? yes
// 545, 64, 11
// 164 ends with 64 and is >

/*
Input: 
  -string of numbers or ranges of numbers
Output:
  -array of numbers
Rules:
  -ranges are inclusive
  -the possible separatos for ranges are "-", ":", ".."
  -a comma can either separate numbers or two ranges
  -numbers are always increasing left->right
  -if a number is < the number to its left, it belongs to the next decade
  -if a number is comprised of 2 digits already, we just need to add the right
    hundred to it
  -if there are 3 numbers separated by a separator, we need all numbers ranging
   from the first to the last and including the middle number
Question: 
  -can we have more than 3 subsequent numbers in one range (e.g. "1:5:2:1")?
Data structures:
  -array of ranges or numbers or both
  -array of separators
  -split ranges to arrays of string-numbers
Algorithm:
  `prefixNums` (input: array of string-numbers)
    -declare a `pow` variable and assign it to 1
    -declare a `increment` variable
    -loop through the array of numbers
      -if a number is < the previous number
        -reassign `pow` to the length of the str-number
        -coerce it to a number
        -add 10 to the `pow` power to it
        -if the new numbers is > the previous one AND it has the original strNum
         as its suffix
          -return the new number
        -else continue incrementing until it satisfies both conditions
    -return the completed numbers

  `populateRanges` (input: array of numbers)
    -set a `result` array
    -set a `currNum` variable to the number at index 0
    -while `currNum` is <= the last number in the array
      -push it in `result`
      -increment it by 1
    -return `result`

  `completeNumberList` (main function)
    -split the input string by "," to get an array of numbers and/or ranges
    -if all the elements in the array are string-numbers
      -pass it to `prefixNums`
      -return the result
    -otherwise, for each range in the array
      -split it by the separator
      -pass the entire array to `prefixNums`
      -for each element in the result array
        -if it's an array
          -pass it to `populateRange`
      -flat the array by 1 level
      -return it
*/

function populateRange(nums) {
  let result = [];
  for (let currNum = nums[0]; currNum <= nums[nums.length - 1]; currNum += 1) {
    result.push(currNum);
  }

  return result;
}

function prefixNums(strNums) {
  strNums.forEach((strNum, idx) => {
    if (Array.isArray(strNum)) {
      let subarr = strNums.slice(0, idx + 1).flat();
      subarr = prefixNums(subarr);
      strNums[idx] = Array.isArray(strNums[idx - 1]) ?
        subarr.slice(idx + 1) : subarr.slice(idx);
    } else {
      let num = Number(strNum);
      while (num <= Number(strNums[idx - 1]) || !String(num).endsWith(strNum)) {
        num += 10;
      }

      strNums[idx] = num;
    }
  });

  return strNums;
}

function completeNumList(numStrList) {
  const separatorRegex = /\.\.|-|:/;
  numStrList = numStrList.split(", ");

  if (numStrList.every(numStr => /^\d+$/.test(numStr))) {
    return prefixNums(numStrList);
  } else {
    numStrList = numStrList.map(el => {
      return (separatorRegex.test(el) ? el.split(separatorRegex) : el);
    });

    return prefixNums(numStrList).map(el => {
      return (Array.isArray(el) ? populateRange(el) : el);
    }).flat();
  }
}

console.log(completeNumList("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(completeNumList("1")); // [1]
console.log(completeNumList("1-3, 1-2")); // --> 1, 2, 3, 11, 12);
console.log(completeNumList("1:3, 1:2")) // --> 1, 2, 3, 11, 12);
console.log(completeNumList("1..3, 1..2")) // --> 1, 2, 3, 11, 12);
console.log(completeNumList("1:5:2")) // --> 1, 2, 3, 4, 5, 6, ... 12);
console.log(completeNumList("104-2")) // --> 104, 105, ... 112);
console.log(completeNumList("104-02")) // --> 104, 105, ... 202);
console.log(completeNumList("545, 64:11")); // --> 545, 564, 565, .. 611


// "50", "7:1" -> "50", ["7", "1"] -> "50", ["7", "11"] ->
// "50", "7", "8", "9", "10", "11"

// 1:3, 1:2 -> [1, 3], [1, 2] -> 1, 2, 3, 1, 2 -> 
// 1, 2, 3, 11, 12

// 101:1, 50:61 -> [101, 1], [5, 1] -> [101, 111], [50, 61] ->
// 101, 102, 103, ... 111, 50, 51, 52, ... 61 -> 


// 1:5 -> 1, 5 -> 1, 2, 3, 4, 5

// 1:5:2 -> 1, 5, 2 -> 
// 1, 5, 12 -> 1, 12

// 1:5:2:1 -> 1, 5, 2, 1 ->
// 1, 5, 12, 11 ->
// 1, 5, 12, 21 -> 1, 21

// 1, 5, 1, 2, 1, 1 -> 
// 1, 5, 11, 12, 11, 11 -> 
// 1, 5, 11, 12, 21, 21 ->
// 1, 5, 11, 12, 21, 31

// 104-02 -> 104, 02 ->
// 104, 112

// - if the numbers are one-digit add ten
// - if they're two-digits add 100
// - ...
// let tens = 10;
// 1, 3, 7, 2, 4, 1 -> 1, 3, 7, 12, 14, 11
//                  -> 1, 3, 7, 12, 14, 21
// 2 <= the previous number (start incrementing by tens)
// recursive operation