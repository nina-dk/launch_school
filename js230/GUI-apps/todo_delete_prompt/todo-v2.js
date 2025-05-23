const todoItems = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

const App = {
  todoList: null,
  todoListTemp: null,
  confirmationPrompt: null,
  overlay: null,
  clickedTodo: null,
  addTodosToDOM() {
    this.todoList = document.querySelector("#todos");
    this.todoList.insertAdjacentHTML("beforeend", this.todoListTemp({ todoItems }));
  },
  removeTodoFromDOM() {
    this.clickedTodo.remove();
    this.clickedTodo = null;
  },
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
    this.clickedTodo = null;
  },

  renderContextMenu(event) {
    event.preventDefault();

    this.clickedTodo = event.target;
    this.clickedTodo.querySelector(".menu_box").style.display = "block";
  },

  hideContextMenu(event) {
    if (!this.clickedTodo) return;
    let activeContextMenu = this.clickedTodo.lastElementChild;
    activeContextMenu.style.display = "";
  },

  bindEvents() {
    document.querySelector("#yes").addEventListener("click", _ => {
      this.removeTodoFromDOM();
      this.hideConfirmationPrompt();
    });
    document.querySelector("#no").addEventListener("click", this.hideConfirmationPrompt.bind(this));
    this.overlay.addEventListener("click", this.hideConfirmationPrompt.bind(this));
    this.todoList.addEventListener("contextmenu", this.renderContextMenu.bind(this));
    this.todoList.addEventListener("click", e => {
      if (e.target.textContent === "Delete") this.displayConfirmationPrompt();
    });
    document.addEventListener("click", this.hideContextMenu.bind(this));
  },
  compileTemplates() {
    this.todoListTemp = Handlebars.compile(document.querySelector("#todo_list").innerHTML);
    Handlebars.registerPartial("context_menu", document.querySelector("#context_menu").innerHTML);
  },

  init() {
    this.confirmationPrompt = document.querySelector("#del_confirmation");
    this.overlay = document.querySelector("#overlay");
    this.compileTemplates();
    this.addTodosToDOM();
    this.bindEvents();
  }
}

document.addEventListener("DOMContentLoaded", _ => App.init());