function letterCaseCount(str) {
  return str.split("")
            .reduce((charCounts, char) => {
              if (/[a-z]/.test(char)) charCounts.lowercase += 1;
              else if (/[A-Z]/.test(char)) charCounts.uppercase += 1;
              else charCounts.neither += 1;
              return charCounts;
            }, {
              lowercase: 0,
              uppercase: 0,
              neither: 0
            });
}

// Examples:
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }