function newStack() {
  let stack = [];
  return {
    push(el) {
      stack.push(el);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(el => console.log(el));
    }
  };
}

let stack = newStack();
stack.push(3);
stack.push(5);
stack.printStack();
//3
//5
stack.pop();
stack.printStack();
//3