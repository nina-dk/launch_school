function makeList() {
  let todoList = [];
  return function(task) {
    if (!task) {
      if (!todoList.length) console.log("The list is empty.");
      else todoList.forEach(task => console.log(task));
    } else if (todoList.includes(task)) {
      let taskIdx = todoList.indexOf(task);
      todoList.splice(taskIdx, 1);
      console.log(`${task} removed!`);
    } else {
      todoList.push(task);
      console.log(`${task} added!`);
    }
  };
}

// let list = makeList();
// list(); // The list is empty.

// list("make breakfast"); // make breakfast added!
// list("read book"); // read book added!
// list();
// // make breakfast
// // read book

// list("make breakfast"); // make breakfast removed!
// list(); // read book


//refactor makeList to return an object
function makeList() {
  let todoList = [];

  return {
    list() {
      if (!todoList.length) console.log("The list is empty.");
      else todoList.forEach(task => console.log(task));
    },

    add(task) {
      todoList.push(task);
      console.log(`${task} added!`);
    },

    remove(task) {
      let taskIdx = todoList.indexOf(task);
      todoList.splice(taskIdx, 1);
      console.log(`${task} removed!`);
    }
  };
}

let list = makeList();
list.list();
list.add("peas"); // peas added!

list.list(); // peas

list.add("corn"); // corn added!

list.list();
// peas
// corn

list.remove("peas"); // peas removed!

list.list(); // corn