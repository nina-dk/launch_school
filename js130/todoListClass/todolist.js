// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.
const { Todo } = require("./todo");

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  toString() {
    let strList = `---- ${this.title} ----\n`;
    this.todos.forEach(todo => {
      strList += todo.toString() + "\n";
    });

    return strList;
  }

  toArray() {
    return this.todos.slice();
  }

  add(todo) {
    if (!(todo instanceof Todo)) throw new TypeError("Can only add todo objects");
    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(idx) {
    this._validateIdx(idx);
    return this.todos[idx];
  }

  markDoneAt(idx) {
    this.itemAt(idx).markDone();
  }

  markUndoneAt(idx) {
    this.itemAt(idx).markUndone();
  }

  markDone(title) {
    this.findByTitle(title)?.markDone();
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  allDone() {
    return this.filter("Done Todos", todo => todo.isDone());
  }

  allNotDone() {
    return this.filter("Not done Todos", todo => !todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(idx) {
    this._validateIdx(idx);
    return this.todos.splice(idx, 1)[0];
  }

  findByTitle(title) {
    return this.filter(title, todo => todo.getTitle() === title).first();
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(title, callback) {
    let filtered = this.todos.filter(callback);
    let filteredList = new TodoList(title);
    filtered.forEach(todo => filteredList.add(todo));
    return filteredList;
  }

  _validateIdx(idx) {
    if (idx > this.todos.length || typeof idx !== "number") {
      throw new ReferenceError(`invalid index: ${idx}`);
    }

    return true;
  }
}

module.exports.TodoList = TodoList;