function shortLongShort (str1 = "", str2 = "") {
  if (str1.length < str2.length) {
    return str1.concat(str2, str1);
  } else {
    return str2.concat(str1, str2);
  }
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('hola'));            // "hola"