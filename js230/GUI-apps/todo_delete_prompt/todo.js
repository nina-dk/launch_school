const Todos = {
  todoItems: [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ],
  todoList: null,
  clickedTodo: null,
  addTodosToDOM() {
    this.todoItems.forEach(item => {
      let li = document.createElement("li");
      li.dataset.id = item.id;
      li.textContent = item.title;
      todos.appendChild(li);
    });
  },
  removeTodoFromDOM() {
    this.clickedTodo.remove();
  },
  init() {
    this.todoList = document.querySelector("#todos");
    this.addTodosToDOM();
  }
}

const App = {
  confirmationPrompt: null,
  overlay: null,
  yesBtn: null,
  noBtn: null,
  deleteTodo(event) {
    Todos.clickedTodo = event.target;
    this.displayConfirmationPrompt();
  },
  displayConfirmationPrompt() {
    this.overlay.style.display = "block";
    this.confirmationPrompt.style.display = "block";
  },
  hideConfirmationPrompt() {
    this.overlay.style.display = "";
    this.confirmationPrompt.style.display = "";
  },
  bindEvents() {
    this.yesBtn.addEventListener("click", _ => {
      Todos.removeTodoFromDOM();
      this.hideConfirmationPrompt();
    });
    this.noBtn.addEventListener("click", this.hideConfirmationPrompt.bind(this));
    this.overlay.addEventListener("click", this.hideConfirmationPrompt.bind(this));
    Todos.todoList.addEventListener("click", this.deleteTodo.bind(this));
  },
  init() {
    this.confirmationPrompt = document.querySelector("#del_confirmation");
    this.overlay = document.querySelector("#overlay");
    this.yesBtn = document.querySelector("#yes");
    this.noBtn = document.querySelector("#no");
    Todos.init();
    this.bindEvents();
  }
}

document.addEventListener("DOMContentLoaded", _ => App.init());