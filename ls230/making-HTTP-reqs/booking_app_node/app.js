const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const upload  = require('multer')();

const apiRouter = require('./routes/api');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(upload.none());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get("/new-staff", (_, res) => {
  res.render("new-staff", { 
    title: "New Staff Member",
    url: "/api/staff_members" });
});

app.get("/add-schedule", (_, res) => {
  res.render("add-schedule", { 
    title: "Add Schedule",
    url: "/api/schedules" });
});

app.get("/book-schedule", (_, res) => {
  res.render("book-schedule", { 
    title: "Book a Schedule",
    url: "/api/bookings" });
});

app.get("/bookings", (_, res) => {
  res.render("bookings", { title: "Bookings" });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
