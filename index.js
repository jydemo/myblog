var path = require('path');

var express = require('express');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//这里不是get 是use
//这里不是get 是use

app.use('/', indexRouter);

app.use('/users', userRouter);



app.listen(8000);