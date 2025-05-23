const { response } = require("express");
const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");
const { TodoList } = require("./lib/todolist");
const { Todo } = require("./lib/todo");
const { sortByStatusAndTitle } = require("./lib/sort");
const store = require("connect-loki");

const app = express();
const LokiStore = store(session);

const loadTodoList = (id, todoLists) => {
  return todoLists.find(list => list.id === Number(id));
};

const loadTodo = (todoListId, todoId, todoLists) => {
  return loadTodoList(todoListId, todoLists)?.findById(Number(todoId));
};

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000,
    path: "/",
    secure: false
  },
  name: "launch-school-todos-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({})
}));

app.use(flash());

//Set up persistent session data
app.use((req, res, next) => {
  let todoLists = [];
  if ("todoLists" in req.session) {
    req.session.todoLists.forEach(todoList => {
      //transform raw data to TodoList objects
      todoLists.push(TodoList.makeTodoList(todoList));
    });
  }

  req.session.todoLists = todoLists;
  next();
}); 

// Extract session info
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/lists");
});

//Render the view that displays a list of all the todo lists
app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortByStatusAndTitle(req.session.todoLists)
  });
});

//Render the view to create a new todo list
app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

//Render the view to edit a todo list
app.get("/lists/:todoListId/edit", (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
  if (!todoList) next(new Error("Not found."));
  res.render("edit-list", { todoList });
});

//Create a new todo list
app.post("/lists",
  [
    body("todoListTitle")
    .trim()
    .isLength({ min: 1 })
    .withMessage("You need to provide a title.")
    .bail()
    .isLength({ max: 100 })
    .withMessage("List title must be between 1 and 100 characters.")
    .custom((title, { req }) => {
      return !req.session.todoLists.some(list => list.getTitle() === title);
    })
    .withMessage("You already have a todo list by that title.")
  ],
 (req, res) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    errors.array().forEach(error => req.flash("error", error.msg));
    res.render("new-list", {
      flash: req.flash(),
      ...req.body
    });
  } else {
    req.session.todoLists.push(new TodoList(req.body.todoListTitle));
    req.flash("success", "You created a new Todo list!");
    res.redirect("/lists");
  }
});

//Create a new todo item
app.post("/lists/:todoListId/todos", [
  body("todoTitle")
  .trim()
  .isLength({ min: 1 })
  .withMessage("You need to provide a title.")
  .bail()
  .isLength({ max: 100 })
  .withMessage("Todo title must be between 1 and 100 characters.")
],
 (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
  if (!todoList) next(new Error("Not found."));

  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    errors.array().forEach(error => req.flash("error", error.msg));
    res.render("list", {
      flash: req.flash(),
      todoList,
      todos: sortByStatusAndTitle(todoList.todos),
      ...req.body
    });
  } else {
    todoList.add(new Todo(req.body.todoTitle));
    req.flash("success", "The todo has been created!");
    console.log(req.flash("success"));
    console.log(req.flash("success"));
    res.redirect(`/lists/${req.params.todoListId}`);
  }
});

//Render a single todo list
app.get("/lists/:todoListId", (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);

  if (!todoList) {
    next(new Error("Not found."));
  } else {
    res.render("list", {
      todoList: todoList,
      todos: sortByStatusAndTitle(todoList.todos)
    });
  }
});

//Mark all todos in a list as done
app.post("/lists/:todoListId/complete_all", (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
  if (!todoList) next(new Error("Not found."));
  else {
    todoList.markAllDone();
    req.flash("success", "All todos have been marked as done.");
    res.redirect(`/lists/${req.params.todoListId}`);
  }
});

//Toggle completion status of a todo
app.post("/lists/:todoListId/todos/:todoId/toggle", (req, res, next) => {
  let todo = loadTodo(req.params.todoListId, req.params.todoId, req.session.todoLists);
  if (!todo) next(new Error("Not found."));

  let title = todo.getTitle();
  if (todo.isDone()) {
    todo.markUndone();
    req.flash("success", `"${title}" marked NOT done.`);
  } else {
    todo.markDone();
    req.flash("success", `"${title}" marked done.`);
  }

  res.redirect(`/lists/${req.params.todoListId}`);
});

//Delete a todo from a list entirely
app.post("/lists/:todoListId/todos/:todoId/destroy", (req, res, next) => {
  let todo = loadTodo(req.params.todoListId, req.params.todoId, req.session.todoLists);
  if (!todo) next(new Error("Not found."));
  else {
    let todoTitle = todo.getTitle();
    let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
    let todoIdx = todoList.findIndexOf(todo);
    todoList.removeAt(todoIdx);
    req.flash("success", `"${todoTitle}" has been deleted.`);
    res.redirect(`/lists/${req.params.todoListId}`);
  }
});

//Delete a todo list
app.post("/lists/:todoListId/destroy", (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
  if (!todoList) next(new Error("Not found."));
  else {
    let index = req.session.todoLists.indexOf(todoList);
    req.session.todoLists.splice(index, 1);

    req.flash("success", "Todo list deleted.");
    res.redirect("/lists");
  }
});

//Update a todo list
app.post("/lists/:todoListId/edit", [
  body("todoListTitle")
  .trim()
  .isLength({ min: 1 })
  .withMessage("You need to provide a title.")
  .bail()
  .isLength({ max: 100 })
  .withMessage("Todo title must be between 1 and 100 characters.")
  .custom((title, { req }) => {
    return !req.session.todoLists.some(list => list.getTitle() === title);
  })
  .withMessage("You already have a todo list by that title.")
], (req, res, next) => {
  let todoList = loadTodoList(req.params.todoListId, req.session.todoLists);
  if (!todoList) next(new Error("Not found."));
  
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    errors.array().forEach(error => req.flash("error", error.msg));
    res.render("edit-list", {
      flash: req.flash(),
      todoList,
      todoListTitle: req.body.todoListTitle
    });
  } else {
    todoList.setTitle(req.body.todoListTitle);
    req.flash("success", "Todo list updated.");
    res.redirect(`/lists/${req.params.todoListId}`);
  }
});

app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen("3000", () => {
  console.log("Server listening on port 3000...");
});