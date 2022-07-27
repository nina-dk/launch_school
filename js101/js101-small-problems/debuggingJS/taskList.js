let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

/*
The bug is caused by the `delete` operator on line 17 in the `completeTasks`
function. The `delete` operator deletes the element that's in the specified
index (`0`) but leaves an empty slot in its place. Thus, when we're logging the
element at index `0` in the `todos` array on the subsequent iterations of the
`while` loop we see: `undefined complete!`, because there's an empty slot at
index `0`. Additionally, no other tasks are removed apart from the first one,
because we're always attempting to delete the element at index `0`.
To properly do that we can use the `Array.prototype.shift` method instead, which
removes the first element of the array, causing all subsequent elements' values
to move backwards by one slot.
*/