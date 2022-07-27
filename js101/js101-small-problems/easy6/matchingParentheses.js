//Input: string
//Output: true/false
//Rules:
//  -Explicit requirements:
//   -If allof the string's parentheses 9if any) are balanced
//     ('(' followed by a ')') return true, otherwise false.
//  -Implicit requirements:
//   -If the string doesn't contain any parentheses, return true.
//Data structures: array
//Algorithm:
/*
1.Create an empty `parentheses` array.
2.Create a `chars` array that contains all the characters from the input string.
3.Create a variable `i` equal to 0.
4.If the element at index `i` in `chars` is either '(' or ')', push it in the
  `parentheses` array.
5.Increment `i` by 1.
6.Repeat steps 4-5 for all elements of the `chars` array.
7.If the length of the `parentheses` array is 0, return `true`.
8.If the length of the `parentheses` array is an odd number, return `false`.
9.Check if a '(' in the `parentheses` array has a matching ')' with an index
  bigger than its own. (maybe remove them afterwards)
10.Repeat step 9 for every '(' in the `parentheses` array.
11.Return whether the length of the `parentheses` array is now 0.
*/

/*
"((What) (is this))?" --> ['(', '(', '(', ')', ')', ')']

"(What) (is this)?" --> ['(', ')', '(', ')']

"What ((is))) up(" --> ['(', '(', ')', ')', ')', '(']
*/

function removeParenthesesPairs(parenArray) {

  while (parenArray.length > 0) {
    let openParen = parenArray.indexOf("(");
    let closParen = parenArray.indexOf(")");

    if (closParen > openParen && openParen !== -1) {
      parenArray.splice(openParen, 1);
      parenArray.splice(closParen - 1, 1);
    } else {
      break;
    }
  }
  return parenArray;
}

function isBalanced(string) {
  let chars = string.split("");
  const parentheses = chars.filter(char => char === "(" || char === ")");

  if (parentheses.length === 0) return true;
  removeParenthesesPairs(parentheses);

  return parentheses.length === 0;
}

//2nd attempt

/*
Input: string
Output: true/false
Rules:
  Explicit requirements:
    -function should return `true` if the input string contains a balanced
     amount of opening and closing parentheses: for each '(' there should be
     a following ')' parentheses at some point in the string. `false` otherwise.
    -there shouldn't be a ')' if there is no '(' before it.
  Implicit requirements:
    -if the string doesn't contain any parentheses, it's considered balanced.
    -the number of '(' must equal the number of ')'.
Data structures: -
Algorithm:
  1.Create a `count` and an `i` variable and initialize them to 0.
  2.If character at index `i` in the string is '(', increment `count` by 1.
  3.If character at index `i` in the string is ')', decrement `count` by 1.
  4.If `count` === -1, return `false`.
  5.Repeat steps 2-4 for all characters in input string.
  6.Return whether `count` equals 0.
*/

function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") count += 1;
    if (string[i] === ")") count -= 1;
    if (count === -1) break;
  }

  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

//Further exploration
/*
{}, [], "", ''
Rules:
  -opening and closing single/double quotes are the same character
*/

function changeCharCount(char, obj) {
  switch (char) {
    case "(": return obj.parens += 1;
    case ")": return obj.parens -= 1;
    case "[": return obj.sqBracks += 1;
    case "]": return obj.sqBracks -= 1;
    case "{": return obj.curlyBracks += 1;
    case "}": return obj.curlyBracks -= 1;
    case "'": return obj.singleQ > 0 ? obj.singleQ -= 1 : obj.singleQ += 1;
    case '"': return obj.doubleQ > 0 ? obj.doubleQ -= 1 : obj.doubleQ += 1;
  }
}

function isBalancedChar(string) {
  const chars = {
    parens: 0,
    sqBracks: 0,
    curlyBracks: 0,
    singleQ: 0,
    doubleQ: 0
  }

  for (let i = 0; i < string.length; i++) {
    if (["(", ")", "[", "]", "{", "}", "'", '"'].includes(string[i])) {
      changeCharCount(string[i], chars);
    }

    if (Object.values(chars).some(value => value < 0)) break;
  }

  return Object.values(chars).every(amount => amount === 0);
}

console.log(isBalancedChar("What (is) 'this'?") === true);
console.log(isBalancedChar("What is) this?") === false);
console.log(isBalancedChar("]What (is this]?") === false);
console.log(isBalancedChar("((What) (is this))?") === true);
console.log(isBalancedChar("((What)) (is this))?") === false);
console.log(isBalancedChar("'Hey!") === false);
console.log(isBalancedChar(")Hey!(") === false);
console.log(isBalancedChar("(What ({((is))) up)}") === true);

//Alternative solution

function isBalancedExpanded(string) {
  const openSymbols = ["(", "[", "{", "'", '"'];
  const closeSymbols = [")", "]", "}", "'", '"'];

  return openSymbols.every((symbol, i) => isBalanced(string, symbol, closeSymbols[i]));
}

function isBalanced(string, openSymbol, closeSymbol) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (openSymbol === "'" || openSymbol === '"') {
      if (string[i] === openSymbol) count += 1;
      continue;
    }

    if (string[i] === openSymbol) count += 1;
    if (string[i] === closeSymbol) count -= 1;
    if (count === -1) break;
  }

  if (openSymbol === "'" || openSymbol === '"') return count % 2 === 0;
  return count === 0;
}

console.log(isBalancedExpanded("What (is) 'this'?") === true);
console.log(isBalancedExpanded("What is) this?") === false);
console.log(isBalancedExpanded("]What (is this]?") === false);
console.log(isBalancedExpanded("((What) (is this))?") === true);
console.log(isBalancedExpanded("((What)) (is this))?") === false);
console.log(isBalancedExpanded("'Hey!") === false);
console.log(isBalancedExpanded(")Hey!(") === false);
console.log(isBalancedExpanded("(What ({((is))) up)}") === true);