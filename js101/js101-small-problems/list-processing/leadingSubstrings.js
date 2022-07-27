/*
Input: string
Output: array of substrings
Rules:
  Explicit requirements:
    -Return array should contain all substrings from the input string that start
     from the beginning of the string.
    -Return array should be sorted according to the length of the substrings
     (shortest to longest).
  Implicit requirements:
    -The first character itself is considered a substring.
Questions: -empty string?
Data structures:
 array to push substrings
Algorithm:
 1.Create an empty `substrings` array.
 2.Get all possible substrings that start with the first character of the string.
  a.Create a `count` variable equal to 1.
  b.Push the portion of the string from 0 up to, but not including, `count` into
    the `substrings` array.
  c.Increment `count` by 1.
  d.Repeat steps b-c until `count` reaches the length of the string.
 3.Push all substrings to `substrings` array.
 4.Sort `substrings` array according to the length of each substring, shortest to longest.
*/

function leadingSubstrings(string) {
  const substrings = [];

  for (let i = 1; i <= string.length; i++) {
    substrings.push(string.slice(0, i));
  }

  return substrings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//Further exploration

function leadingSubstrings(string) {
  const substrings = [];

  substrings.push(string.split("").reduce((substring, char) => {
    substrings.push(substring);
    return substring + char;
  }));

  return substrings;
}