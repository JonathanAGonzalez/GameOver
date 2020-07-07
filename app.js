var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
//var flash=require('connect-flash');
const methodOverride = require('method-override');
var authMiddleware = require('./middleware/cookieAuthMiddleware')
var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var productsdbRouter = require('./routes/productsdb');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use( (req,res,next) => { res.locals.resultSearch = resultSearch; next(); } );
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"Es un secreto"}));
app.use(authMiddleware);
//app.use(flash());
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/addProduct', adminRouter);
app.use('/editProduct', adminRouter);
app.use('/user', usersRouter);
app.use('/products', productsdbRouter);
//app.use('/register', usersRouter);
//creando un mensaje de registro con flash

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
