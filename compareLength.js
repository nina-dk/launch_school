function compareByLength (str1, str2) {
  if (str1.length === str2.length) {
    return 0;
  }
  return(str1.length > str2.length ? 1 : -1);
}


console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0