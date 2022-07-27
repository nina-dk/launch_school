/*
`Element` class
`constructor`
  input:
    -value (number)
    -next object in line (optional)
  output: new instance of `Element`
  algorithm:
    -assign the value to a property `value` of the object
    -assign the 2nd object argument to `nextEl`
    -if no next object is supplied, initialize `nextEl` to `null`
`datum` instance method
    input: -
    output: value of calling object
    algorithm:
      -return the value of the `value` property
`isTail` instance method
  input: -
  output: boolean value
  algorithm:
    -return `true` if the value of the `nextEl` property is `null`, `false` otherwise
`next` instance method
  input: -
  output: next element in line
  algorithm:
    -return the value assigned to `nextEl` property

`SimpleLinkedList` class
`constructor` method
  input: -
  output: new list object
  algorithm:
    -add a `head` property and initialize it to `null`
`size` instance method
  input: -
  output: length of the list
  algorithm:
    -initialize a `count` variable to 0
    -set a `currentEl` to `headEl`
    -while `currentEl` is not `null`
      -increment `count` by 1
      -reassign `currentEl` to the next element in line
    -return `count`
`isEmpty`
    input: -
    output: boolean value
    algorithm:
      -
`push`
  input: number
  output: -
  rules:
    -new elements become the list's `head`
  algorithm:
    -instantiate a new `Element` object with the input value as its value
      and `nextEl` to reference the object referenced by `head`
    -reassign the `head` property to point to that new object
`pop`
  input: -
  output: value of popped-off object
  rules:
    -remove starting from the `head` object
  algorithm:
    -get the `head`'s `datum` and store it in `datum` variable
    -reassign `head` to point to the object returned by `head`'s `next` method
    -return `datum`
`peek`
  input: -
  output: `head` object
  algorithm:
    -return the `datum` of the object referenced by `head`
`head`
  input: -
  output: value of the first element in the list
  algorithm:
    -return the `datum` of the element referenced by `head`
`toArray`
  input: -
  output: array
  algorithm:
    -create an empty array
    -starting from `head`
      -push the `datum` of the current object
      -repeat until `nextEl` object is `null`
`fromArray` static method
  input: array or `null`
  output: new list object
  rules:
    -if input is `null` the new list will be empty
  algorithm:
    -instantiate a new `SimpleList` object
    -for each element in the array starting from the last element
      -instantiate a new `Element` with a `value` of that element's value
      -have that object's `nextEl` property reference `head`
      -reassign `head` to point to that object
  `reverse` instance method
    input: -
    output: new `SimpleLinkedList` object
    rules:
      -tail of current list must become the `headEl` of the new list
    algorithm:
      -save the array returned by list.toArray on the current list
      -reverse that array in place
      -use the reversed to array to create and return a new list object with `fromArray`
*/

class Element {
  constructor(value, nextEl = null) {
    this.value = value;
    this.nextEl = nextEl;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextEl;
  }

  isTail() {
    return this.nextEl === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headEl = null;
  }

  head() {
    return this.headEl;
  }

  peek() {
    return this.head() === null ? this.head() : this.head().datum();
  }

  size() {
    let count = 0;
    let currentEl = this.headEl;
    while (currentEl !== null) {
      count += 1;
      currentEl = currentEl.next();
    }

    return count;
  }

  isEmpty() {
    return this.headEl === null;
  }

  push(value) {
    let el = new Element(value, this.head());
    this.headEl = el;
  }

  pop() {
    if (this.headEl === null) return "The list is empty.";
    let datum = this.head().datum();
    this.headEl = this.head().next();
    return datum;
  }

  reverse() {
    let reversedElements = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reversedElements);
  }

  toArray() {
    let array = [];
    let currentEl = this.head();

    while (currentEl !== null) {
      array.push(currentEl.datum());
      currentEl = currentEl.next();
    }

    return array;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (!Array.isArray(array)) return list;

    for (let idx = array.length - 1; idx >= 0; idx -= 1) {
      let currentEl = new Element(array[idx], list.head());
      list.headEl = currentEl;
    }

    return list;
  }
}

Object.assign(module.exports, {Element, SimpleLinkedList});