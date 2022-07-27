function objectsEqual(objA, objB) {
  let aKeys = Object.keys(objA);
  if (aKeys.length !== Object.keys(objB).length) return false;

  for (let key of aKeys) {
    if (objA[key] !== objB[key] || !objB.hasOwnProperty(key)) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false