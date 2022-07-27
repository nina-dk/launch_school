const { Todo } = require('../lib/todo');
const { TodoList } = require('../lib/todolist');

// eslint-disable-next-line max-lines-per-function
describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray() returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first() returns the first todo object in todolist', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last() returns the last todo object in todolist', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift() removes and returns the first todo object in todolist', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop() removes and returns the last todo object in todolist', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone() returns true is all todos are done, false otherwise', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('allDone() returns a new TodoList object comprised of the done Todos', () => {
    list.markDoneAt(0);
    list.markDoneAt(2);
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(list.itemAt(2).isDone()).toBe(true);
    expect(list.allDone().toArray()).toEqual([todo1, todo3]);
  });

  test('add() throws a TypeError if argument is not a Todo object', () => {
    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add("test")).toThrow(TypeError);
  });

  test('itemAt(idx) returns the element at idx or throws error if idx is not valid', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(10)).toThrow(ReferenceError);
    expect(() => list.itemAt("test")).toThrow(ReferenceError);
  });

  test('markDone(title) marks a todo as done', () => {
    expect(list.findByTitle('Clean room').isDone()).toBe(false);
    list.markDone('Clean room');
    expect(list.findByTitle('Clean room').isDone()).toBe(true);
  });

  test('markDoneAt(idx) marks the element at idx as done or throws error if idx is not valid', () => {
    list.markDoneAt(1);
    expect(list.itemAt(1).isDone()).toBe(true);
    expect(() => list.markDoneAt(10)).toThrow(ReferenceError);
  });

  test('markUndoneAt(idx) marks the element at idx as not done or throws error if idx is not valid', () => {
    list.markDoneAt(1);
    expect(list.itemAt(1).isDone()).toBe(true);
    list.markUndoneAt(1);
    expect(list.itemAt(1).isDone()).toBe(false);
    expect(() => list.markUndoneAt(10)).toThrow(ReferenceError);
  });

  test('markAllDone() marks all elements as done', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('markAllUndone() marks all elements as not done', () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true);
    list.markAllUndone();
    expect(list.allNotDone().toArray()).toEqual(list.toArray());
  });

  test('removeAt(idx) removes and returns the element at index idx', () => {
    expect(list.removeAt(1)).toEqual(todo2);
    expect(list.toArray()).toEqual([todo1, todo3]);
    expect(() => list.removeAt(10)).toThrow(ReferenceError);
  });

  test('toString() returns the list in string form', () => {
    list.markDoneAt(1);
    let lines = list.toString().split('\n').filter(line => line);
    expect(lines[0]).toBe(`---- ${list.title} ----`);
    expect(lines[1]).toBe(todo1.toString());
    expect(lines[2]).toBe(todo2.toString());
    expect(lines[3]).toBe(todo3.toString());
  });

  test('forEach(cb) iterates over the todos and invokes the callback for each', () => {
    expect(list.isDone()).toBe(false);
    list.forEach(todo => todo.markDone());
    expect(list.isDone()).toBe(true);
  });

  test('filter(title, cb) returns a new TodoList object of the filtered elements', () => {
    list.markDoneAt(0);
    list.markDoneAt(2);
    expect(list.filter("Done Todos", todo => todo.isDone()).toArray())
      .toEqual([todo1, todo3]);
  });

  test('findByTitle(title) returns the todo with a title of "title"', () => {
    expect(list.findByTitle('Buy milk')).toEqual(todo1);
  });
});