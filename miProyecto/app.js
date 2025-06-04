var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require("method-override");

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(methodOverride((req) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
        return req.body._method;
    }
    return req.query._method; // Allows method override via query string
}));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use((req, res, next) => {
    console.log(`📌 Method: ${req.method} | URL: ${req.url}`);
    next();
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
