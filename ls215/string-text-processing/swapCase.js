function swapCase(str) {
  return str.split("")
            .map(char => {
              return (/[A-Z]/.test(char)) ? char.toLowerCase() : char.toUpperCase()})
            .join("");
}

// Examples:
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"