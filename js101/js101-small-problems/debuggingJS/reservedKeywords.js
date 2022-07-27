const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/*
This is because there is no way to exit a `forEach` loop. It will always
return `undefined` after the iteration has finished. Thus, even if the value
assigned to `name` equals one of the reserved keywords in the `RESERVED_KEYWORDS`
array and the code in the `if` block on line 11 is executed, `true` is merely being
returned by the callback and `forEach` will continue the iteration with the
next element without using the return value of the callback. In the end,
it will return `undefined` and execution will continue on line 14. On line 15,
`false` will always be returned by the `isReserved` function.
For the code to work, we could refactor it like so:
*/

function isReserved(name) {
  return RESERVED_KEYWORDS.some(reserved => name === reserved)
}